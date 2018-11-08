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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/events.json":
/*!*************************!*\
  !*** ./src/events.json ***!
  \*************************/
/*! exports provided: events, default */
/***/ (function(module) {

eval("module.exports = {\"events\":[{\"id\":1,\"type\":\"info\",\"title\":\"Еженедельный отчет по расходам ресурсов\",\"source\":\"Сенсоры потребления\",\"time\":\"19:00, Сегодня\",\"description\":\"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.\",\"icon\":\"stats\",\"data\":{\"type\":\"graph\",\"values\":[{\"electricity\":[[\"1536883200\",115],[\"1536969600\",117],[\"1537056000\",117.2],[\"1537142400\",118],[\"1537228800\",120],[\"1537315200\",123],[\"1537401600\",129]]},{\"water\":[[\"1536883200\",40],[\"1536969600\",40.2],[\"1537056000\",40.5],[\"1537142400\",41],[\"1537228800\",41.4],[\"1537315200\",41.9],[\"1537401600\",42.6]]},{\"gas\":[[\"1536883200\",13],[\"1536969600\",13.2],[\"1537056000\",13.5],[\"1537142400\",13.7],[\"1537228800\",14],[\"1537315200\",14.2],[\"1537401600\",14.5]]}]},\"size\":\"l\"},{\"id\":2,\"type\":\"info\",\"title\":\"Дверь открыта\",\"source\":\"Сенсор входной двери\",\"time\":\"18:50, Сегодня\",\"description\":null,\"icon\":\"key\",\"size\":\"s\"},{\"id\":1,\"type\":\"info\",\"title\":\"Уборка закончена\",\"source\":\"Пылесос\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"robot-cleaner\",\"size\":\"s\"},{\"id\":3,\"type\":\"info\",\"title\":\"Новый пользователь\",\"source\":\"Роутер\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"router\",\"size\":\"s\"},{\"id\":4,\"type\":\"info\",\"title\":\"Изменен климатический режим\",\"source\":\"Сенсор микроклимата\",\"time\":\"18:30, Сегодня\",\"description\":\"Установлен климатический режим «Фиджи»\",\"icon\":\"thermal\",\"size\":\"m\",\"data\":{\"temperature\":24,\"humidity\":80}},{\"id\":5,\"type\":\"critical\",\"title\":\"Невозможно включить кондиционер\",\"source\":\"Кондиционер\",\"time\":\"18:21, Сегодня\",\"description\":\"В комнате открыто окно, закройте его и повторите попытку\",\"icon\":\"ac\",\"size\":\"m\"},{\"id\":6,\"type\":\"info\",\"title\":\"Музыка включена\",\"source\":\"Яндекс.Станция\",\"time\":\"18:16, Сегодня\",\"description\":\"Сейчас проигрывается:\",\"icon\":\"music\",\"size\":\"m\",\"data\":{\"albumcover\":\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m200x200\",\"artist\":\"Florence & The Machine\",\"track\":{\"name\":\"Big God\",\"length\":\"4:31\"},\"volume\":80}},{\"id\":7,\"type\":\"info\",\"title\":\"Заканчивается молоко\",\"source\":\"Холодильник\",\"time\":\"17:23, Сегодня\",\"description\":\"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?\",\"icon\":\"fridge\",\"size\":\"m\",\"data\":{\"buttons\":[\"Да\",\"Нет\"]}},{\"id\":8,\"type\":\"info\",\"title\":\"Зарядка завершена\",\"source\":\"Оконный сенсор\",\"time\":\"16:22, Сегодня\",\"description\":\"Ура! Устройство «Оконный сенсор» снова в строю!\",\"icon\":\"battery\",\"size\":\"s\"},{\"id\":9,\"type\":\"critical\",\"title\":\"Пылесос застрял\",\"source\":\"Сенсор движения\",\"time\":\"16:17, Сегодня\",\"description\":\"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.\",\"icon\":\"cam\",\"data\":{\"image\":\"get_it_from_mocks_:3.jpg\"},\"size\":\"l\"},{\"id\":10,\"type\":\"info\",\"title\":\"Вода вскипела\",\"source\":\"Чайник\",\"time\":\"16:20, Сегодня\",\"description\":null,\"icon\":\"kettle\",\"size\":\"s\"}]};\n\n//# sourceURL=webpack:///./src/events.json?");

/***/ }),

/***/ "./src/framework/Dispatcher.ts":
/*!*************************************!*\
  !*** ./src/framework/Dispatcher.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// let obj = {\n//     'remove': [callback1, callback2, callback3]\n// }\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Dispatcher = /** @class */ (function () {\n    function Dispatcher() {\n        this._container = {};\n    }\n    /**\n     * Срабатываение коллбеков из Store\n     * @param {} action - событие от View\n     */\n    Dispatcher.prototype.dispatch = function (action) {\n        this._container[action.type].forEach(function (handler) {\n            // @ts-ignore\n            handler(action.payload);\n        });\n    };\n    /**\n     * Регистрация коллбеков\n     * @param actionType\n     * @param callback\n     */\n    Dispatcher.prototype.register = function (actionType, callback) {\n        if (!this._container[actionType])\n            this._container[actionType] = [];\n        this._container[actionType].push(callback);\n    };\n    return Dispatcher;\n}());\nexports.default = Dispatcher;\n\n\n//# sourceURL=webpack:///./src/framework/Dispatcher.ts?");

/***/ }),

/***/ "./src/framework/Framework.ts":
/*!************************************!*\
  !*** ./src/framework/Framework.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Dispatcher_1 = __importDefault(__webpack_require__(/*! ./Dispatcher */ \"./src/framework/Dispatcher.ts\"));\nvar Store_1 = __importDefault(__webpack_require__(/*! ./Store */ \"./src/framework/Store.ts\"));\n/**\n * Фреймворк\n */\nvar Framework = /** @class */ (function () {\n    function Framework() {\n        this.AppDispatcher = new Dispatcher_1.default();\n        this.store = { data: {} };\n    }\n    /**\n     * Регистрация коллбеков\n     * @param {string} actionType\n     * @param {{}} callback\n     */\n    Framework.prototype.register = function (actionType, callback) {\n        this.AppDispatcher.register(actionType, callback);\n    };\n    /**\n     * Триггер коллбеков\n     * @param action\n     */\n    Framework.prototype.dispatch = function (action) {\n        this.AppDispatcher.dispatch(action);\n    };\n    /**\n     * Создание store\n     * @param {{}} state\n     * @returns {{}}\n     */\n    Framework.prototype.createStore = function (state) {\n        this.store = new Store_1.default(state);\n        return this.store;\n    };\n    return Framework;\n}());\nexports.default = Framework;\n\n\n//# sourceURL=webpack:///./src/framework/Framework.ts?");

/***/ }),

/***/ "./src/framework/Store.ts":
/*!********************************!*\
  !*** ./src/framework/Store.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Хранилище\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Store = /** @class */ (function () {\n    function Store(state) {\n        this.data = state;\n    }\n    return Store;\n}());\nexports.default = Store;\n\n\n//# sourceURL=webpack:///./src/framework/Store.ts?");

/***/ }),

/***/ "./src/img/graph.png":
/*!***************************!*\
  !*** ./src/img/graph.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/graph.png?8154b85e49e2f35f92fa7e355c6000ac\";\n\n//# sourceURL=webpack:///./src/img/graph.png?");

/***/ }),

/***/ "./src/img/graph@2x.png":
/*!******************************!*\
  !*** ./src/img/graph@2x.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/graph@2x.png?da9cc1f42e724e9d52a0620564c9502d\";\n\n//# sourceURL=webpack:///./src/img/graph@2x.png?");

/***/ }),

/***/ "./src/img/hoover.png":
/*!****************************!*\
  !*** ./src/img/hoover.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hoover.png?0d1d6365ef2eea6234077505fc4ff2e9\";\n\n//# sourceURL=webpack:///./src/img/hoover.png?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n__webpack_require__(/*! ./img/graph.png */ \"./src/img/graph.png\");\n__webpack_require__(/*! ./img/graph@2x.png */ \"./src/img/graph@2x.png\");\n__webpack_require__(/*! ./img/hoover.png */ \"./src/img/hoover.png\");\nvar template_1 = __importDefault(__webpack_require__(/*! ./js/template */ \"./src/js/template.ts\"));\nvar menu_1 = __importDefault(__webpack_require__(/*! ./js/menu */ \"./src/js/menu.ts\"));\nvar ellipsizeText_1 = __importDefault(__webpack_require__(/*! ./js/ellipsizeText */ \"./src/js/ellipsizeText.ts\"));\nvar events_json_1 = __importDefault(__webpack_require__(/*! ./events.json */ \"./src/events.json\"));\nvar Framework_1 = __importDefault(__webpack_require__(/*! ./framework/Framework */ \"./src/framework/Framework.ts\"));\n/**\n * Рендер главной страницы\n */\nfunction renderMainPage() {\n    var root = document.querySelector('.Cards');\n    if (!root)\n        return;\n    root.innerHTML = '';\n    template_1.default(playerStore, events_json_1.default);\n}\n/**\n * Action - смена трека\n * Подставляем данные в виде заглушки\n * @type {{type: string; payload: {artist: string; trackName: string; trackLength: string}}}\n */\nvar actions = {\n    nextTrack: function (artist, trackName, trackLength, coverAlbum) {\n        var action = {\n            type: 'CHANGE_TRACK',\n            payload: {\n                artist: artist,\n                trackName: trackName,\n                trackLength: trackLength,\n                coverAlbum: coverAlbum\n            }\n        };\n        framework.dispatch(action);\n    }\n};\nvar currentTrack = {\n    artist: 'Florence & The Machine',\n    trackName: 'Big God',\n    trackLength: '4:31',\n    coverAlbum: 'https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m200x200'\n};\n/**\n * Инициализируем библиотку\n * @type {Framework}\n */\nvar framework = new Framework_1.default();\n/**\n * Инициализируем начальное состояние\n */\nvar state = localStorage.getItem('TrackInfo') ?\n    JSON.parse(localStorage.getItem('TrackInfo')) :\n    currentTrack;\n/**\n * Создаем store\n */\nvar playerStore = framework.createStore(state);\nlocalStorage.setItem('TrackInfo', JSON.stringify(playerStore.data));\n/**\n * Регистрируем коллбеки\n */\nframework.register(\"CHANGE_TRACK\", function (payload) {\n    playerStore.data = payload;\n    localStorage.setItem('TrackInfo', JSON.stringify(payload));\n    renderMainPage();\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n    menu_1.default();\n    renderMainPage();\n    var cardTitles = document.querySelectorAll('.Card-Title');\n    ellipsizeText_1.default(cardTitles);\n    var btnNextTrack = document.querySelector('.Player-Ctrl_type_next');\n    if (!btnNextTrack)\n        return;\n    btnNextTrack.addEventListener('click', function () {\n        actions.nextTrack(\"Beyonce\", \"single ladies\", \"3:20\", \"//avatars.yandex.net/get-music-content/49876/c800fb3b.p.27995/200x200\");\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/js/ellipsizeText.ts":
/*!*********************************!*\
  !*** ./src/js/ellipsizeText.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Обрезает заголовок по высоте и добавляет `...` если больше 2 строк\n *\n * @param {NodeListOf<HTMLElement>} el\n */\nfunction ellipsizeText(el) {\n    for (var i = 0; i < el.length; i++) {\n        var wordArray = el[i].innerHTML.split(' ');\n        while (el[i].scrollHeight > el[i].offsetHeight) {\n            wordArray.pop();\n            el[i].innerHTML = wordArray.join(' ') + '...';\n        }\n    }\n}\nexports.default = ellipsizeText;\n\n\n//# sourceURL=webpack:///./src/js/ellipsizeText.ts?");

/***/ }),

/***/ "./src/js/menu.ts":
/*!************************!*\
  !*** ./src/js/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction initMenu() {\n    var sideMenuTrigger = document.getElementById('js-side-menu-trigger');\n    if (sideMenuTrigger === null)\n        return;\n    sideMenuTrigger.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.add('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.add('content--visible--no');\n        this.classList.add('side-menu--visible--yes');\n    });\n    var sideMenuClose = document.getElementsByClassName('side-menu__cross')[0];\n    sideMenuClose.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.remove('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.remove('content--visible--no');\n        document.getElementsByClassName('hamburger')[0].classList.remove('side-menu--visible--yes');\n    });\n}\nexports.default = initMenu;\n\n\n//# sourceURL=webpack:///./src/js/menu.ts?");

/***/ }),

/***/ "./src/js/template.ts":
/*!****************************!*\
  !*** ./src/js/template.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Функция вывода шаблона карточки\n * @param playerStore\n * @param {IJson} events - json файл с элементами\n */\nfunction renderCards(playerStore, events) {\n    var root = document.querySelector('.Cards');\n    var templateBase = document.getElementById('TplBase');\n    var templatePlayer = document.getElementById('TplPlayer');\n    var clone;\n    var card;\n    var cardIcon;\n    var cardTitle;\n    var cardSource;\n    var cardTime;\n    var cardContent;\n    if (templateBase === null)\n        return;\n    for (var i = 0; i < events.events.length; i++) {\n        clone = templateBase.content.cloneNode(true);\n        card = clone.querySelector('.Card');\n        if (card === null)\n            return;\n        cardIcon = card.querySelector('.Icon');\n        if (cardIcon === null)\n            return;\n        cardTitle = card.querySelector('.Card-Title');\n        if (cardTitle === null)\n            return;\n        cardSource = card.querySelector('.Card-Source');\n        if (cardSource === null)\n            return;\n        cardTime = card.querySelector('.Card-Time');\n        if (cardTime === null)\n            return;\n        card.classList.add(\"Card_type_\" + events.events[i].type);\n        card.classList.add(\"Card_size_\" + events.events[i].size);\n        cardIcon.classList.add(\"Icon_thumb_\" + events.events[i].icon);\n        cardTitle.innerHTML = events.events[i].title;\n        cardSource.innerHTML = events.events[i].source;\n        cardTime.innerHTML = events.events[i].time;\n        var cardTopContent = document.createElement('div');\n        cardTopContent.classList.add('Card-Wrap');\n        var cardCross = document.createElement('div');\n        cardCross.classList.add('Card-Cross');\n        var cardNext = document.createElement('div');\n        cardNext.classList.add('Card-Next');\n        // Тип карточки - критический\n        if (events.events[i].type == 'critical') {\n            card.innerHTML += \"<div class=\\\"Card-content\\\"></div>\";\n        }\n        // Блок с описанием\n        if (events.events[i].description) {\n            var cloneText = document.createElement('div');\n            cloneText.classList.add('Card-Text');\n            cloneText.innerHTML = events.events[i].description;\n            if (events.events[i].type == 'critical') {\n                cardContent = card.querySelector('.Card-Content');\n                if (cardContent === null)\n                    return;\n                cardContent.appendChild(cloneText);\n                // cardContent.appendChild(cloneText);\n            }\n            else\n                card.appendChild(cloneText);\n        }\n        // Блок с температурой и влажностью\n        if (events.events[i].icon == 'thermal') {\n            var cloneSpecial = document.createElement('div');\n            cloneSpecial.classList.add('Card-Special');\n            var cloneTemp = document.createElement('div');\n            var cloneWet = document.createElement('div');\n            cloneTemp.classList.add('Card-Temperature');\n            cloneWet.classList.add('Card-Wet');\n            cloneTemp.innerHTML = \"\\n            \\u0422\\u0435\\u043C\\u043F\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430: \\n            <span class=\\\"text-bold Card-temperature-val\\\">\" + events.events[i].data.temperature + \"</span>\\n            <span class=\\\"text-bold\\\"> C</span>\";\n            cloneWet.innerHTML = \"\\n            \\u0412\\u043B\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C:\\n            <span class=\\\"text-bold Card-wet-val\\\">\" + events.events[i].data.humidity + \"</span>\\n            <span class=\\\"text-bold\\\"> %</span>\";\n            cloneSpecial.appendChild(cloneTemp);\n            cloneSpecial.appendChild(cloneWet);\n            card.appendChild(cloneSpecial);\n        }\n        // Блок с плеером\n        if (events.events[i].icon == 'music') {\n            var clonePlayer = templatePlayer.content.cloneNode(true);\n            if (!events.events[i].data || !events.events[i].data.artist) {\n                return;\n            }\n            var artist = clonePlayer.querySelector('.Player-Track-artist'), trackName = clonePlayer.querySelector('.Player-Track-name'), trackLength = clonePlayer.querySelector('.Player-Track-length'), sliderValLength = clonePlayer.querySelector('.vol-slider-val__length'), playerCover = clonePlayer.querySelector('.Player-Cover');\n            if (artist == null ||\n                trackName == null ||\n                trackLength == null ||\n                sliderValLength == null ||\n                playerCover == null) {\n                return;\n            }\n            artist.innerHTML = playerStore.data[\"artist\"] ?\n                playerStore.data[\"artist\"] : events.events[i].data.artist;\n            trackName.innerHTML = playerStore.data[\"trackName\"] ?\n                playerStore.data[\"trackName\"] : events.events[i].data.track.name;\n            trackLength.innerHTML = playerStore.data[\"trackLength\"] ?\n                playerStore.data[\"trackLength\"] : events.events[i].data.track.length;\n            sliderValLength.innerHTML = events.events[i].data.volume;\n            playerCover.style.backgroundImage = playerStore.data[\"coverAlbum\"] ?\n                \"url(\" + playerStore.data[\"coverAlbum\"] + \")\" :\n                \"url(\" + events.events[i].data.albumcover + \")\";\n            card.appendChild(clonePlayer);\n        }\n        // Блок с кнопками\n        if (events.events[i].icon == 'fridge') {\n            var btnBlock = document.createElement('div');\n            btnBlock.classList.add('Card-Buttons');\n            btnBlock.innerHTML = \"\\n                <button class=\\\"Btn btn_color_brand\\\">\" + events.events[i].data.buttons[0] + \"</button>\\n                <button class=\\\"Btn\\\">\" + events.events[i].data.buttons[1] + \"</button>\\n            \";\n            card.appendChild(btnBlock);\n        }\n        // Картинка с графом\n        if (events.events[i].icon == 'stats') {\n            var imgBlock = document.createElement('div');\n            imgBlock.classList.add('Card-img');\n            imgBlock.innerHTML = \"<img class=\\\"ImageGraph\\\"\\n                                       src=\\\"dist/img/graph.png\\\"\\n                                       srcset=\\\"dist/img/graph@2x.png 2x,\\n                                               dist/img/graph@3x.png 3x\\\" alt=\\\"\\\">\";\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.Card-Content').appendChild(imgBlock);\n            }\n            else\n                card.appendChild(imgBlock);\n        }\n        // Картинка с пылесосом\n        if (events.events[i].icon == 'cam') {\n            var imgBlock = document.createElement('div');\n            imgBlock.classList.add('Card-Img', 'ImageHoover');\n            imgBlock.style.backgroundImage = \"url(dist/img/hoover.png)\";\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.Card-Content').appendChild(imgBlock);\n            }\n            else\n                card.appendChild(imgBlock);\n        }\n        // Добавляем дочерние элементы в обертку, кроме последнего\n        var cardChildren = card.querySelectorAll(\".Card>*\");\n        for (var q = 0; q < cardChildren.length - 1; q++) {\n            cardTopContent.appendChild(cardChildren[q]);\n        }\n        card.insertBefore(cardCross, card.firstChild);\n        card.insertBefore(cardNext, card.firstChild);\n        card.insertBefore(cardTopContent, card.firstChild);\n        root.appendChild(clone);\n    }\n}\nexports.default = renderCards;\n\n\n//# sourceURL=webpack:///./src/js/template.ts?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });