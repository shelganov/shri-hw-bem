import './scss/main.scss';

import './img/flat.jpg';


class Camera {
    protected prevZoom: number;
    protected action: {x: number, y: number, dx: number, dy: number, currentShiftX: number, currentShiftY: number};
    protected currentGesture: boolean;
    protected gestureCache: {x: number, y: number, pointerId: number, clientX: number}[];
    protected gestureSpace: number;
    protected cameraWrap: HTMLElement;
    protected camera: HTMLElement;
    protected scroll: HTMLElement;
    protected cameraImg: HTMLImageElement;
    protected imgFinishPositionX: number;
    protected imgFinishPositionY: number;
    protected scale: number;
    protected elemBrightness: HTMLElement;
    protected brightness: number;
    protected prevRotate: number;

    constructor(
        cameraWrap: HTMLElement,
        camera: HTMLElement,
        cameraImg: HTMLImageElement,
        scroll: HTMLElement,
        elemBrightness: HTMLElement
    ) {

        /**
         * Активный жест
         *
         * @type {boolean}
         */
        this.currentGesture = false;

        /**
         * Объект с координатами
         * @type {{x: number; y: number; dx: number; dy: number; currentShiftX: number; currentShiftY: number}}
         */
        this.action = {
            // начальная координата {x} тача (при нажатии)
            x: 0,
            // начальная координата {y} тача (при нажатии)
            y: 0,
            // дельта координаты тача по {x}
            dx: 0,
            // дельта координаты тача по {y}
            dy: 0,
            // текущее смещение координаты по {x}
            currentShiftX: 0,
            // текущее смещение координаты по {y}
            currentShiftY: 0
        };

        /**
         * Массив жестов
         *
         * @type {Array}
         */
        this.gestureCache = [];

        /**
         * Внешняя обертка для видео
         *
         * @type {HTMLElement}
         */
        this.cameraWrap = cameraWrap;

        /**
         * Контейнер для камеры
         *
         * @type {HTMLElement}
         */
        this.camera = camera;

        /**
         * Картинка камеры
         *
         * @type {HTMLImageElement}
         */
        this.cameraImg = cameraImg;

        /**
         * Скролл
         *
         * @type {HTMLElement}
         */
        this.scroll = scroll;

        /**
         * Граница изображения по оси X
         *
         * @type {number}
         */
        this.imgFinishPositionX = 0;

        /**
         * Граница изображения по оси Y
         *
         * @type {number}
         */
        this.imgFinishPositionY = 0;

        /**
         * Предыдущий зум (сравнивается с последующим для принятия решения - увеличение или уменьшение зума)
         *
         * @type {number}
         */
        this.prevZoom = -1;

        /**
         * Расстояние между жестами
         *
         * @type {number}
         */
        this.gestureSpace = 0;

        /**
         * Стандартный масштаб камеры
         *
         * @type {number}
         */
        this.scale = 1;

        /**
         * Контейнер для отображения яркости
         *
         * @type {HTMLElement}
         */
        this.elemBrightness = elemBrightness;

        /**
         * Базовое значение яркости
         *
         * @type {number}
         */
        this.brightness = 0.5;

        /**
         * Предыдущий поворот - используется для рассчета изменения поворота
         * @type {number}
         */
        this.prevRotate = 0;

        this.init();
    };

    /**
     * Инициализация
     */
    init(): void {
        this.imgFinishPositionX = this.cameraImg.width - this.cameraWrap.offsetWidth;
        this.imgFinishPositionY = this.cameraImg.height - this.cameraWrap.offsetHeight;
        this.elemBrightness.innerText = calcBrightness(this.brightness);

        /**
         * Тач старт (нажатие)
         */
        this.camera.addEventListener('pointerdown', (e): void => {
            this.currentGesture = true;
            this.gestureCache.push(e);

            // Координата тач старта
            this.action.x = e.x;
            this.action.y = e.y;
            this.camera.setPointerCapture(e.pointerId);

        });

        /**
         * Тач движение
         */
        this.camera.addEventListener('pointermove', (e: PointerEvent): void => {
            if (!this.currentGesture) {
                return;
            }

            // Если произошло 2 тача
            if (this.gestureCache.length == 2) {
                this.updateEvent(e);

                let angle = (Math.atan(
                        (this.gestureCache[1].y - this.gestureCache[0].y) /
                        (this.gestureCache[1].x - this.gestureCache[0].x))) * 180 / Math.PI;

                // Проверяем, какое событие происходит
                if (Math.abs(angle) < 20) {
                    this.zoom(e);
                } else {
                    this.rotate(e);
                }

            } else {
                this.move(e);
            }

        });

        /**
         * Тач конец
         */
        this.camera.addEventListener('pointerup', (e): void => {
            this.currentGesture = false;
            this.action.currentShiftX = this.action.dx;
            this.action.currentShiftY = this.action.dy;

            // Задаем максимально возможные позиции картинки по краям
            if (this.action.dx > 0)
                this.action.currentShiftX = 0;

            if (((this.action.dx)) <= -this.imgFinishPositionX)
                this.action.currentShiftX = -this.imgFinishPositionX;

            if (this.action.dy > 0)
                this.action.currentShiftY = 0;

            if (((this.action.dy)) <= -this.imgFinishPositionY)
                this.action.currentShiftY = -this.imgFinishPositionY;

            this.removeEvent(e);
            this.prevZoom = -1;
        });

        this.camera.addEventListener('pointercancel', (e): void => {
            this.currentGesture = false;
            this.removeEvent(e);
            this.prevZoom = -1;
        });
    }

    /**
     * Обновляет событие
     *
     * @param e
     */
    updateEvent(e: PointerEvent): void {
        for (let i = 0; i < this.gestureCache.length; i++) {
            if (this.gestureCache[i].pointerId == e.pointerId) {
                this.gestureCache[i] = e;
                break;
            }
        }
    }

    /**
     * Определяет дельту смещения между координатой 1ого нажатия и координатой после сдвига + изначальное положение
     *
     * @param e
     */
    determDeltaMove(e: PointerEvent): void {
        this.action.dx = -(this.action.x - e.x) + this.action.currentShiftX;
        this.action.dy = -(this.action.y - e.y) + this.action.currentShiftY;
    }

    /**
     * Движение камерой
     * @param e
     */
    move(e: PointerEvent): void {
        this.determDeltaMove(e);

        if (this.action.dx <= 0 && Math.abs((this.action.dx)) < this.imgFinishPositionX) {
            this.camera.style.left = `${this.action.dx}px`;

            // Смещение скролла
            this.scroll.style.transform = `translateX(${-( (this.cameraWrap.offsetWidth - this.scroll.offsetWidth) *
            (this.action.dx) ) / (this.cameraImg.offsetWidth - this.cameraWrap.offsetWidth)}%)`;
        }

        if (this.action.dy <= 0 && Math.abs((this.action.dy)) < this.imgFinishPositionY) {
            this.camera.style.top = `${this.action.dy}px`;
        }
    }

    /**
     * Зум
     */
    zoom(e: PointerEvent): void {

        this.gestureSpace = Math.abs(this.gestureCache[0].clientX - this.gestureCache[1].clientX);

        if (this.prevZoom > 0) {
            // Если уменьшение зума
            if (this.prevZoom > this.gestureSpace) {

                // Изменение зума
                let _dZoom = (this.prevZoom - this.gestureSpace)/100;

                // Запрещаем масштаб меньше 1
                if (this.scale - (_dZoom) <= 1)
                    return;

                this.cameraImg.style.transform = `scale(${this.scale - (_dZoom)},${this.scale - (_dZoom)})`;
                this.scale = this.scale - _dZoom;

            }
            // Если увеличение зума
            if (this.prevZoom < this.gestureSpace) {

                let _dZoom = (this.gestureSpace - this.prevZoom)/100;

                if (this.scale - (_dZoom) >= 3)
                    return;

                this.cameraImg.style.transform = `scale(${this.scale + _dZoom},${this.scale + _dZoom})`;
                this.scale = this.scale + _dZoom;
            }
        }

        this.prevZoom = this.gestureSpace;
    }

    rotate(e: PointerEvent): void {
        let rotate = Math.atan((this.gestureCache[1].y - this.gestureCache[0].y) / (this.gestureCache[1].x - this.gestureCache[0].x));

        if (Math.abs(rotate - this.prevRotate) > 3) {
            rotate = rotate - Math.PI;
        }

        // Определяем коэффициент изменения
        let dRotate = 1;

        if (rotate > this.prevRotate) {
            dRotate = 1.1;
        } else if (rotate < this.prevRotate) {
            dRotate = 0.9;
        }

        // Определение яркости
        this.brightness = Math.abs(rotate * dRotate);

        if (this.brightness > 1) {
            this.brightness = 1;
        }

        if (this.brightness <= 0)
            this.brightness = 0;

        this.prevRotate = rotate;

        this.elemBrightness.innerText = calcBrightness(this.brightness);
        this.cameraImg.style.webkitFilter = `brightness(${this.brightness}`;
    }

    /**
     * Удаление эвентов
     *
     * @param e
     */
    removeEvent(e: PointerEvent) {
        for (let i = 0; i < this.gestureCache.length; i++) {
            if (this.gestureCache[i].pointerId == e.pointerId) {
                this.gestureCache.splice(i, 1);
                break;
            }
        }
    }
}

/**
 * Подсчет яркости
 *
 * @param value
 * @returns {string}
 */
function calcBrightness(value: number): string {
    let brightnessNum: number = value * 100;

    return brightnessNum.toFixed(2) + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    new Camera(
        <HTMLElement>document.querySelector('.card__img'),
        <HTMLElement>document.querySelector('.camera'),
        <HTMLImageElement>document.querySelector('.camera__img'),
        <HTMLElement>document.querySelector('.card__img-scroll'),
        <HTMLElement>document.querySelector('#brightness')
    );
});