/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/touch.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/flat.jpg":
/*!**************************!*\
  !*** ./src/img/flat.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/flat.jpg?5ce2ee3eb96a5f38f3cbb16a22a22b91\";\n\n//# sourceURL=webpack:///./src/img/flat.jpg?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/touch.ts":
/*!**********************!*\
  !*** ./src/touch.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n__webpack_require__(/*! ./img/flat.jpg */ \"./src/img/flat.jpg\");\nvar Camera = /** @class */ (function () {\n    function Camera(cameraWrap, camera, cameraImg, scroll, elemBrightness) {\n        /**\n         * Активный жест\n         *\n         * @type {boolean}\n         */\n        this.currentGesture = false;\n        /**\n         * Объект с координатами\n         * @type {{x: number; y: number; dx: number; dy: number; currentShiftX: number; currentShiftY: number}}\n         */\n        this.action = {\n            // начальная координата {x} тача (при нажатии)\n            x: 0,\n            // начальная координата {y} тача (при нажатии)\n            y: 0,\n            // дельта координаты тача по {x}\n            dx: 0,\n            // дельта координаты тача по {y}\n            dy: 0,\n            // текущее смещение координаты по {x}\n            currentShiftX: 0,\n            // текущее смещение координаты по {y}\n            currentShiftY: 0\n        };\n        /**\n         * Массив жестов\n         *\n         * @type {Array}\n         */\n        this.gestureCache = [];\n        /**\n         * Внешняя обертка для видео\n         *\n         * @type {HTMLElement}\n         */\n        this.cameraWrap = cameraWrap;\n        /**\n         * Контейнер для камеры\n         *\n         * @type {HTMLElement}\n         */\n        this.camera = camera;\n        /**\n         * Картинка камеры\n         *\n         * @type {HTMLImageElement}\n         */\n        this.cameraImg = cameraImg;\n        /**\n         * Скролл\n         *\n         * @type {HTMLElement}\n         */\n        this.scroll = scroll;\n        /**\n         * Граница изображения по оси X\n         *\n         * @type {number}\n         */\n        this.imgFinishPositionX = 0;\n        /**\n         * Граница изображения по оси Y\n         *\n         * @type {number}\n         */\n        this.imgFinishPositionY = 0;\n        /**\n         * Предыдущий зум (сравнивается с последующим для принятия решения - увеличение или уменьшение зума)\n         *\n         * @type {number}\n         */\n        this.prevZoom = -1;\n        /**\n         * Расстояние между жестами\n         *\n         * @type {number}\n         */\n        this.gestureSpace = 0;\n        /**\n         * Стандартный масштаб камеры\n         *\n         * @type {number}\n         */\n        this.scale = 1;\n        /**\n         * Контейнер для отображения яркости\n         *\n         * @type {HTMLElement}\n         */\n        this.elemBrightness = elemBrightness;\n        /**\n         * Базовое значение яркости\n         *\n         * @type {number}\n         */\n        this.brightness = 0.5;\n        /**\n         * Предыдущий поворот - используется для рассчета изменения поворота\n         * @type {number}\n         */\n        this.prevRotate = 0;\n        this.init();\n    }\n    ;\n    /**\n     * Инициализация\n     */\n    Camera.prototype.init = function () {\n        var _this = this;\n        this.imgFinishPositionX = this.cameraImg.width - this.cameraWrap.offsetWidth;\n        this.imgFinishPositionY = this.cameraImg.height - this.cameraWrap.offsetHeight;\n        this.elemBrightness.innerText = calcBrightness(this.brightness);\n        /**\n         * Тач старт (нажатие)\n         */\n        this.camera.addEventListener('pointerdown', function (e) {\n            _this.currentGesture = true;\n            _this.gestureCache.push(e);\n            // Координата тач старта\n            _this.action.x = e.x;\n            _this.action.y = e.y;\n            _this.camera.setPointerCapture(e.pointerId);\n        });\n        /**\n         * Тач движение\n         */\n        this.camera.addEventListener('pointermove', function (e) {\n            if (!_this.currentGesture) {\n                return;\n            }\n            // Если произошло 2 тача\n            if (_this.gestureCache.length == 2) {\n                _this.updateEvent(e);\n                var angle = (Math.atan((_this.gestureCache[1].y - _this.gestureCache[0].y) /\n                    (_this.gestureCache[1].x - _this.gestureCache[0].x))) * 180 / Math.PI;\n                // Проверяем, какое событие происходит\n                if (Math.abs(angle) < 20) {\n                    _this.zoom(e);\n                }\n                else {\n                    _this.rotate(e);\n                }\n            }\n            else {\n                _this.move(e);\n            }\n        });\n        /**\n         * Тач конец\n         */\n        this.camera.addEventListener('pointerup', function (e) {\n            _this.currentGesture = false;\n            _this.action.currentShiftX = _this.action.dx;\n            _this.action.currentShiftY = _this.action.dy;\n            // Задаем максимально возможные позиции картинки по краям\n            if (_this.action.dx > 0)\n                _this.action.currentShiftX = 0;\n            if (((_this.action.dx)) <= -_this.imgFinishPositionX)\n                _this.action.currentShiftX = -_this.imgFinishPositionX;\n            if (_this.action.dy > 0)\n                _this.action.currentShiftY = 0;\n            if (((_this.action.dy)) <= -_this.imgFinishPositionY)\n                _this.action.currentShiftY = -_this.imgFinishPositionY;\n            _this.removeEvent(e);\n            _this.prevZoom = -1;\n        });\n        this.camera.addEventListener('pointercancel', function (e) {\n            _this.currentGesture = false;\n            _this.removeEvent(e);\n            _this.prevZoom = -1;\n        });\n    };\n    /**\n     * Обновляет событие\n     *\n     * @param e\n     */\n    Camera.prototype.updateEvent = function (e) {\n        for (var i = 0; i < this.gestureCache.length; i++) {\n            if (this.gestureCache[i].pointerId == e.pointerId) {\n                this.gestureCache[i] = e;\n                break;\n            }\n        }\n    };\n    /**\n     * Определяет дельту смещения между координатой 1ого нажатия и координатой после сдвига + изначальное положение\n     *\n     * @param e\n     */\n    Camera.prototype.determDeltaMove = function (e) {\n        this.action.dx = -(this.action.x - e.x) + this.action.currentShiftX;\n        this.action.dy = -(this.action.y - e.y) + this.action.currentShiftY;\n    };\n    /**\n     * Движение камерой\n     * @param e\n     */\n    Camera.prototype.move = function (e) {\n        this.determDeltaMove(e);\n        if (this.action.dx <= 0 && Math.abs((this.action.dx)) < this.imgFinishPositionX) {\n            this.camera.style.left = this.action.dx + \"px\";\n            // Смещение скролла\n            this.scroll.style.transform = \"translateX(\" + -((this.cameraWrap.offsetWidth - this.scroll.offsetWidth) *\n                (this.action.dx)) / (this.cameraImg.offsetWidth - this.cameraWrap.offsetWidth) + \"%)\";\n        }\n        if (this.action.dy <= 0 && Math.abs((this.action.dy)) < this.imgFinishPositionY) {\n            this.camera.style.top = this.action.dy + \"px\";\n        }\n    };\n    /**\n     * Зум\n     */\n    Camera.prototype.zoom = function (e) {\n        this.gestureSpace = Math.abs(this.gestureCache[0].clientX - this.gestureCache[1].clientX);\n        if (this.prevZoom > 0) {\n            // Если уменьшение зума\n            if (this.prevZoom > this.gestureSpace) {\n                // Изменение зума\n                var _dZoom = (this.prevZoom - this.gestureSpace) / 100;\n                // Запрещаем масштаб меньше 1\n                if (this.scale - (_dZoom) <= 1)\n                    return;\n                this.cameraImg.style.transform = \"scale(\" + (this.scale - (_dZoom)) + \",\" + (this.scale - (_dZoom)) + \")\";\n                this.scale = this.scale - _dZoom;\n            }\n            // Если увеличение зума\n            if (this.prevZoom < this.gestureSpace) {\n                var _dZoom = (this.gestureSpace - this.prevZoom) / 100;\n                if (this.scale - (_dZoom) >= 3)\n                    return;\n                this.cameraImg.style.transform = \"scale(\" + (this.scale + _dZoom) + \",\" + (this.scale + _dZoom) + \")\";\n                this.scale = this.scale + _dZoom;\n            }\n        }\n        this.prevZoom = this.gestureSpace;\n    };\n    Camera.prototype.rotate = function (e) {\n        var rotate = Math.atan((this.gestureCache[1].y - this.gestureCache[0].y) / (this.gestureCache[1].x - this.gestureCache[0].x));\n        if (Math.abs(rotate - this.prevRotate) > 3) {\n            rotate = rotate - Math.PI;\n        }\n        // Определяем коэффициент изменения\n        var dRotate = 1;\n        if (rotate > this.prevRotate) {\n            dRotate = 1.1;\n        }\n        else if (rotate < this.prevRotate) {\n            dRotate = 0.9;\n        }\n        // Определение яркости\n        this.brightness = Math.abs(rotate * dRotate);\n        if (this.brightness > 1) {\n            this.brightness = 1;\n        }\n        if (this.brightness <= 0)\n            this.brightness = 0;\n        this.prevRotate = rotate;\n        this.elemBrightness.innerText = calcBrightness(this.brightness);\n        this.cameraImg.style.webkitFilter = \"brightness(\" + this.brightness;\n    };\n    /**\n     * Удаление эвентов\n     *\n     * @param e\n     */\n    Camera.prototype.removeEvent = function (e) {\n        for (var i = 0; i < this.gestureCache.length; i++) {\n            if (this.gestureCache[i].pointerId == e.pointerId) {\n                this.gestureCache.splice(i, 1);\n                break;\n            }\n        }\n    };\n    return Camera;\n}());\n/**\n * Подсчет яркости\n *\n * @param value\n * @returns {string}\n */\nfunction calcBrightness(value) {\n    var brightnessNum = value * 100;\n    return brightnessNum.toFixed(2) + '%';\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n    new Camera(document.querySelector('.card__img'), document.querySelector('.camera'), document.querySelector('.camera__img'), document.querySelector('.card__img-scroll'), document.querySelector('#brightness'));\n});\n\n\n//# sourceURL=webpack:///./src/touch.ts?");

/***/ })

/******/ });