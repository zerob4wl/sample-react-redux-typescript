(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(e,t,r){"use strict";(function(e){var o;r.d(t,"a",function(){return i}),r.d(t,"b",function(){return c}),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e);var a,n,i=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(e){return}},c=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(e){console.log(e)}};(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(a.register(i,"loadState","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/localStorage.ts"),a.register(c,"saveState","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/localStorage.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&n(e)}).call(this,r(16)(e))},194:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return AppContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35),react_router__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__),_search__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(195),_app_less__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(467),_app_less__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_3__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).enterModule,enterModule&&enterModule(module);var AppContainer=function(_React$Component){function AppContainer(e){return _classCallCheck(this,AppContainer),_possibleConstructorReturn(this,_getPrototypeOf(AppContainer).call(this,e))}return _inherits(AppContainer,_React$Component),_createClass(AppContainer,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Switch,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route,{path:"/search",component:_search__WEBPACK_IMPORTED_MODULE_2__.a}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect,{to:"/search"}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),AppContainer}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).default,reactHotLoader&&reactHotLoader.register(AppContainer,"AppContainer","/Users/alireza/Projects/sample-react-redux-typescript/src/containers/app.tsx"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(16)(module))},195:function(e,t,r){"use strict";(function(e){var o,a=r(1),n=r(89),i=r(90),c=(r(397),r(196)),l=r(69),s=r(91);function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],o=!0,a=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){a=!0,n=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw n}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e);var u,d,p=function(){var e=_(Object(s.useTranslation)(),2),t=e[0],r=(e[1],_(Object(a.useState)(!1),2)),o=r[0],u=r[1],d=_(Object(a.useState)(!1),2),p=d[0],f=d[1],b=_(Object(a.useState)([]),2),y=b[0],m=b[1],h=Object(n.debounce)(function(e){u(!0),f(!0),m([]),(new i.a).searchLocation({query:e}).then(function(e){f(!1),m(e)})},1e3);return a.createElement("div",{className:"container middle center column"},a.createElement("h1",{className:"search-title"},t("Search")),a.createElement("input",{type:"text",placeholder:"Berlin",className:"search-input",onChange:function(e){e.target.value&&h(e.target.value)}}),a.createElement("div",{className:"search-result container middle center space-between"},a.createElement("div",{className:"spinner"},a.createElement(l.CircleLoader,{color:"#ff6369",loading:p}),o&&!p&&0===y.length&&a.createElement("h5",null,t("There is no result!"))),y.map(function(e){return a.createElement(c.a,{key:e.woeid,city:e})})))},f=p;t.a=f,(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(u.register(p,"SearchContainer","/Users/alireza/Projects/sample-react-redux-typescript/src/containers/search/index.tsx"),u.register(f,"default","/Users/alireza/Projects/sample-react-redux-typescript/src/containers/search/index.tsx")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&d(e)}).call(this,r(16)(e))},196:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return CityBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_lib_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(197),_style_less__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(400),_style_less__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_2__),_lib_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(90),react_redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68),react_redux__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__),_redux_geoLocation_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(70),lodash__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(89),lodash__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__),_StateIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(198),react_spinners__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(69),react_spinners__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_8__),_dec,_class,enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).enterModule,enterModule&&enterModule(module);var CityBox=(_dec=Object(react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps,mapDispatchToProps),_dec(_class=function(_React$Component){function CityBox(e){var t;return _classCallCheck(this,CityBox),(t=_possibleConstructorReturn(this,_getPrototypeOf(CityBox).call(this,e))).state={reload:!1,loading:!1,isFavorite:e.favorites.indexOf(e.city.woeid)>-1},t.toggleFavorites=t.toggleFavorites.bind(_assertThisInitialized(_assertThisInitialized(t))),t}return _inherits(CityBox,_React$Component),_createClass(CityBox,[{key:"componentDidMount",value:function(){var e=this,t=this.getLocationInfoFromLocal(this.props.city.woeid);this.setState({reload:!!t,loading:!t,locationInfo:t}),(new _lib_api__WEBPACK_IMPORTED_MODULE_3__.a).getLocation({woeid:this.props.city.woeid}).then(function(r){t?e.props.updateLocation(r):e.props.addLocation(r),e.setState({locationInfo:r,loading:!1,reload:!1})})}},{key:"getLocationInfoFromLocal",value:function(e){return lodash__WEBPACK_IMPORTED_MODULE_6__.find(this.props.locations,{woeid:e})}},{key:"toggleFavorites",value:function(){this.state.isFavorite?this.props.removeFavorites(this.props.city.woeid):this.props.addFavorites(this.props.city.woeid)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"city-box"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,this.props.city.title),this.state.locationInfo&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,this.state.locationInfo.consolidated_weather[0].the_temp,react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",null,"°C")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StateIcon__WEBPACK_IMPORTED_MODULE_7__.a,{state:this.state.locationInfo.consolidated_weather[0].weather_state_abbr})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"spinner"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_8__.BarLoader,{color:"#ff6369",loading:this.state.loading}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_8__.BarLoader,{color:"#fefcf3",loading:this.state.reload})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"control"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:this.toggleFavorites},this.state.isFavorite?"Remove From Favorites":"Add To Favorites")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg",style:{backgroundColor:Object(_lib_color__WEBPACK_IMPORTED_MODULE_1__.a)(this.props.city.title)}}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"getDerivedStateFromProps",value:function(e){return{isFavorite:e.favorites.indexOf(e.city.woeid)>-1,locationInfo:e.locations.find(function(t){return e.city.woeid===t.woeid})}}}]),CityBox}(react__WEBPACK_IMPORTED_MODULE_0__.Component))||_class),reactHotLoader,leaveModule;function mapStateToProps(e){return{locations:e.geoLocation.locations,favorites:e.geoLocation.favorites}}function mapDispatchToProps(e){return{addLocation:function(t){return e(Object(_redux_geoLocation_actions__WEBPACK_IMPORTED_MODULE_5__.b)(t))},updateLocation:function(t){return e(Object(_redux_geoLocation_actions__WEBPACK_IMPORTED_MODULE_5__.d)(t))},addFavorites:function(t){return e(Object(_redux_geoLocation_actions__WEBPACK_IMPORTED_MODULE_5__.a)({woeid:t}))},removeFavorites:function(t){return e(Object(_redux_geoLocation_actions__WEBPACK_IMPORTED_MODULE_5__.c)({woeid:t}))}}}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).default,reactHotLoader&&(reactHotLoader.register(CityBox,"CityBox","/Users/alireza/Projects/sample-react-redux-typescript/src/components/CityBox/index.tsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/Users/alireza/Projects/sample-react-redux-typescript/src/components/CityBox/index.tsx"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","/Users/alireza/Projects/sample-react-redux-typescript/src/components/CityBox/index.tsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(16)(module))},197:function(e,t,r){"use strict";(function(e){var o,a,n;function i(e){for(var t=0,r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);for(var o="#",a=0;a<3;a++){o+=("00"+(t>>8*a&255).toString(16)).substr(-2)}return o}r.d(t,"a",function(){return i}),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&a.register(i,"StringToColor","/Users/alireza/Projects/sample-react-redux-typescript/src/lib/color/index.ts"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&n(e)}).call(this,r(16)(e))},198:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return StateIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).enterModule,enterModule&&enterModule(module);var StateIcon=function(_React$Component){function StateIcon(){return _classCallCheck(this,StateIcon),_possibleConstructorReturn(this,_getPrototypeOf(StateIcon).apply(this,arguments))}return _inherits(StateIcon,_React$Component),_createClass(StateIcon,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"http://www.metaweather.com/static/img/weather/".concat(this.props.state,".svg"),style:{width:this.props.width||32}})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),StateIcon}(react__WEBPACK_IMPORTED_MODULE_0__.Component),reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).default,reactHotLoader&&reactHotLoader.register(StateIcon,"StateIcon","/Users/alireza/Projects/sample-react-redux-typescript/src/components/StateIcon/index.tsx"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(16)(module))},199:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return s});var o,a=r(133),n=r(200);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e);var i,c,l=Object(a.a)(),s=Object(n.a)(l);s.subscribe(function(){Object(a.b)(s.getState())}),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(i.register(l,"initialState","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/store.ts"),i.register(s,"store","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/store.ts")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&c(e)}).call(this,r(16)(e))},200:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return s});var o,a,n,i=r(38),c=r(201);function l(){return function(e){return function(t){return console.log(t),e(t)}}}function s(e){var t=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__()(i.createStore):i.createStore;return Object(i.applyMiddleware)(l)(t)(c.a,e)}(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(a.register(window,"window","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/config.ts"),a.register(l,"logger","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/config.ts"),a.register(s,"configureStore","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/config.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&n(e)}).call(this,r(16)(e))},201:function(e,t,r){"use strict";(function(e){var o,a=r(38),n=r(202);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e);var i,c,l=Object(a.combineReducers)({geoLocation:n.a});t.a=l,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&i.register(l,"default","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/reducers.ts"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&c(e)}).call(this,r(16)(e))},202:function(e,t,r){"use strict";(function(e){var o,a,n=r(39),i=r(24);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){s(e,t,r[t])})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&a(e);var _,u,d={locations:[],favorites:[]},p=Object(n.handleActions)((s(o={},i.b,function(e,t){return l({},e,{locations:[].concat(c(e.locations),[t.payload])})}),s(o,i.e,function(e,t){var r=Object.assign(e,{}),o=r.locations.findIndex(function(e){return t.payload.woeid===e.woeid});return r.locations[o]=t.payload,r}),s(o,i.d,function(e,t){return l({},e,{locations:e.locations.filter(function(e){return e.woeid!==t.payload.woeid})})}),s(o,i.a,function(e,t){return l({},e,{favorites:[].concat(c(e.favorites),[t.payload.woeid])})}),s(o,i.c,function(e,t){return l({},e,{favorites:e.favorites.filter(function(e){return e!==t.payload.woeid})})}),o),d);t.a=p,(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(_.register(d,"initialState","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/reducer.ts"),_.register(p,"default","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/reducer.ts")),(u=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&u(e)}).call(this,r(16)(e))},203:function(e,t,r){"use strict";(function(e){var o,a=r(134),n=r.n(a);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e),n.a.init({nsSeparator:!1,keySeparator:!1,interpolation:{escapeValue:!1},react:{wait:!1},lng:"fa",resources:{fa:{translation:r(486)}}},function(e,t){});var i,c,l=n.a;t.a=l,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&i.register(l,"default","/Users/alireza/Projects/sample-react-redux-typescript/src/translation/i18n.js"),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&c(e)}).call(this,r(16)(e))},204:function(e,t,r){r(205),e.exports=r(369)},24:function(e,t,r){"use strict";(function(e){var o;r.d(t,"b",function(){return i}),r.d(t,"e",function(){return c}),r.d(t,"d",function(){return l}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return _}),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e);var a,n,i="geo-location-add-location",c="geo-location-update-location",l="geo-location-remove-location",s="geo-location-add-favorites",_="geo-location-remove-favorites";(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(a.register(i,"ADD_LOCATION","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/constants.ts"),a.register(c,"UPDATE_LOCATION","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/constants.ts"),a.register(l,"REMOVE_LOCATION","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/constants.ts"),a.register(s,"ADD_FAVORITES","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/constants.ts"),a.register(_,"REMOVE_FAVORITES","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/constants.ts")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&n(e)}).call(this,r(16)(e))},369:function(e,t,r){"use strict";r.r(t),function(e){var t,o=r(1),a=r(132),n=r(35),i=r(67),c=r(68),l=r(194),s=r(199),_=r(91),u=r(203);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&t(e);var d,p,f=Object(i.createBrowserHistory)();a.render(o.createElement(c.Provider,{store:s.a},o.createElement(_.I18nextProvider,{i18n:u.a},o.createElement(n.Router,{history:f},o.createElement(n.Switch,null,o.createElement(n.Route,{path:"/",component:l.a}))))),document.getElementById("root")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&d.register(f,"history","/Users/alireza/Projects/sample-react-redux-typescript/src/index.tsx"),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&p(e)}.call(this,r(16)(e))},397:function(e,t,r){var o=r(398);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0};r(123)(o,a);o.locals&&(e.exports=o.locals)},398:function(e,t,r){(e.exports=r(122)(!1)).push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{font-family:serif;color:#444}h1{color:#ff6369;font-size:5.625rem;line-height:1.5;margin-top:5rem;margin-bottom:5rem}h3{text-align:center;font-size:2rem;margin:10px 2px}.container{display:-ms-flexbox;display:flex;max-width:90%;margin:0 5%;-ms-flex-wrap:wrap;flex-wrap:wrap}.container.column{-ms-flex-direction:column;flex-direction:column}.container.row,.container.space-between{-ms-flex-direction:row;flex-direction:row}.container.space-between{-ms-flex-pack:justify;justify-content:space-between}.container.center{-ms-flex-pack:center;justify-content:center}.container.middle{-ms-flex-align:center;align-items:center}input[type=text]{border-radius:5px;border:1px solid #efc4c3;line-height:1.5;-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}input[type=text]:active,input[type=text]:focus,input[type=text]:hover{border-color:#ff5954;outline-color:transparent}input[type=text]::-webkit-input-placeholder{color:#f5dcda}input[type=text]::-ms-input-placeholder{color:#f5dcda}input[type=text]::placeholder{color:#f5dcda}.spinner{margin:20px}.spinner>div{width:100%}.search-title{text-align:center}.search-input{font-size:2rem;padding:.5rem}',""])},400:function(e,t,r){var o=r(401);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0};r(123)(o,a);o.locals&&(e.exports=o.locals)},401:function(e,t,r){(e.exports=r(122)(!1)).push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{font-family:serif;color:#444}h1{color:#ff6369;font-size:5.625rem;line-height:1.5;margin-top:5rem;margin-bottom:5rem}h3{text-align:center;font-size:2rem;margin:10px 2px}.container{display:-ms-flexbox;display:flex;max-width:90%;margin:0 5%;-ms-flex-wrap:wrap;flex-wrap:wrap}.container.column{-ms-flex-direction:column;flex-direction:column}.container.row,.container.space-between{-ms-flex-direction:row;flex-direction:row}.container.space-between{-ms-flex-pack:justify;justify-content:space-between}.container.center{-ms-flex-pack:center;justify-content:center}.container.middle{-ms-flex-align:center;align-items:center}input[type=text]{border-radius:5px;border:1px solid #efc4c3;line-height:1.5;-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}input[type=text]:active,input[type=text]:focus,input[type=text]:hover{border-color:#ff5954;outline-color:transparent}input[type=text]::-webkit-input-placeholder{color:#f5dcda}input[type=text]::-ms-input-placeholder{color:#f5dcda}input[type=text]::placeholder{color:#f5dcda}.spinner{margin:20px}.spinner>div{width:100%}.city-box{position:relative;height:180px;width:250px;padding:10px;margin:15px;border-radius:5px;text-align:center}.city-box h3{color:#fff}.city-box .bg{position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;border-radius:5px;border:5px solid hsla(0,0%,100%,.5);opacity:.9;-webkit-transition:opacity 5ms linear;-o-transition:opacity 5ms linear;transition:opacity 5ms linear}.city-box .control{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;height:64px;position:absolute;bottom:5px;left:5px;right:5px;opacity:0}.city-box:hover .bg,.city-box:hover .control{opacity:1}',""])},467:function(e,t,r){var o=r(468);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0};r(123)(o,a);o.locals&&(e.exports=o.locals)},468:function(e,t,r){(e.exports=r(122)(!1)).push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{font-family:serif;color:#444}h1{color:#ff6369;font-size:5.625rem;line-height:1.5;margin-top:5rem;margin-bottom:5rem}h3{text-align:center;font-size:2rem;margin:10px 2px}.container{display:-ms-flexbox;display:flex;max-width:90%;margin:0 5%;-ms-flex-wrap:wrap;flex-wrap:wrap}.container.column{-ms-flex-direction:column;flex-direction:column}.container.row,.container.space-between{-ms-flex-direction:row;flex-direction:row}.container.space-between{-ms-flex-pack:justify;justify-content:space-between}.container.center{-ms-flex-pack:center;justify-content:center}.container.middle{-ms-flex-align:center;align-items:center}input[type=text]{border-radius:5px;border:1px solid #efc4c3;line-height:1.5;-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}input[type=text]:active,input[type=text]:focus,input[type=text]:hover{border-color:#ff5954;outline-color:transparent}input[type=text]::-webkit-input-placeholder{color:#f5dcda}input[type=text]::-ms-input-placeholder{color:#f5dcda}input[type=text]::placeholder{color:#f5dcda}.spinner{margin:20px}.spinner>div{width:100%}.dotted-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;background:-webkit-linear-gradient(left,#f5f7fa 38px,transparent 1%) 50%,-webkit-linear-gradient(#f5f7fa 38px,transparent 1%) 50%,rgba(0,0,0,.1);background:-o-linear-gradient(left,#f5f7fa 38px,transparent 1%) 50%,-o-linear-gradient(#f5f7fa 38px,transparent 1%) 50%,rgba(0,0,0,.1);background:linear-gradient(90deg,#f5f7fa 38px,transparent 1%) 50%,linear-gradient(#f5f7fa 38px,transparent 1%) 50%,rgba(0,0,0,.1);background-size:40px 40px}',""])},486:function(e,t){e.exports={Search:"جستجو",Berlin:"برای مثال : Berlin","There is no result!":"نتیجه های یافت نشد!"}},70:function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return l}),r.d(t,"d",function(){return _}),r.d(t,"a",function(){return u}),r.d(t,"c",function(){return d});var o,a=r(39),n=r(24);(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).enterModule)&&o(e);var i,c,l=Object(a.createAction)(n.b),s=Object(a.createAction)(n.d),_=Object(a.createAction)(n.e),u=Object(a.createAction)(n.a),d=Object(a.createAction)(n.a);(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).default)&&(i.register(l,"addLocation","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/actions.ts"),i.register(s,"removeLocation","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/actions.ts"),i.register(_,"updateLocation","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/actions.ts"),i.register(u,"addFavorites","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/actions.ts"),i.register(d,"removeFavorites","/Users/alireza/Projects/sample-react-redux-typescript/src/redux/geoLocation/actions.ts")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(2)).leaveModule)&&c(e)}).call(this,r(16)(e))},90:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(396),whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).enterModule,enterModule&&enterModule(module);var API=function(){function API(){_classCallCheck(this,API),_defineProperty(this,"baseUrl","https://cors-anywhere.herokuapp.com/http://www.metaweather.com/api")}return _createClass(API,[{key:"getFetchOptions",value:function(e){return{method:e||"GET",headers:{Accept:"application/json","Access-Control-Allow-Headers":"X-Requested-With","X-Requested-With":"XMLHttpRequest"},cache:"default"}}},{key:"searchLocation",value:function(e){var t=this;return new Promise(function(r){fetch("".concat(t.baseUrl,"/location/search/?query=").concat(e.query),t.getFetchOptions()).then(function(e){return e.json()}).then(function(e){r(e)})})}},{key:"getLocation",value:function(e){var t=this;return new Promise(function(r){fetch("".concat(t.baseUrl,"/location/").concat(e.woeid,"/"),t.getFetchOptions()).then(function(e){return e.json()}).then(function(e){r(e)})})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),API}(),_default=API,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).default,reactHotLoader&&(reactHotLoader.register(API,"API","/Users/alireza/Projects/sample-react-redux-typescript/src/lib/api/index.ts"),reactHotLoader.register(_default,"default","/Users/alireza/Projects/sample-react-redux-typescript/src/lib/api/index.ts")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(2)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(16)(module))}},[[204,2,0,5]]]);