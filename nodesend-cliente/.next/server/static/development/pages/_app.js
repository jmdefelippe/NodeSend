module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/axios.js":
/*!*************************!*\
  !*** ./config/axios.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const clienteAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:4000"
});
/* harmony default export */ __webpack_exports__["default"] = (clienteAxios);

/***/ }),

/***/ "./config/tokenAuth.js":
/*!*****************************!*\
  !*** ./config/tokenAuth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./config/axios.js");


const tokenAuth = token => {
  if (token) {
    _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete _axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tokenAuth);

/***/ }),

/***/ "./context/app/appContext.js":
/*!***********************************!*\
  !*** ./context/app/appContext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (appContext);

/***/ }),

/***/ "./context/app/appReducer.js":
/*!***********************************!*\
  !*** ./context/app/appReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["MOSTRAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cargando: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO_EXITO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        nombre: action.payload.nombre,
        nombre_original: action.payload.nombre_original,
        cargando: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SUBIR_ARCHIVO_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: action.payload,
        cargando: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CREAR_ENLACE_EXITO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        url: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LIMPIAR_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: null,
        descargas: 1,
        password: '',
        autor: null,
        url: ''
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_PASSWORD"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        password: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_DESCARGAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        descargas: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/app/appState.js":
/*!*********************************!*\
  !*** ./context/app/appState.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appContext */ "./context/app/appContext.js");
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ "./context/app/appReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\Proyecto NodeSend\\nodesend-cliente\\context\\app\\appState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AppState = ({
  children
}) => {
  const initialState = {
    mensaje_archivo: null,
    nombre: '',
    nombre_original: '',
    cargando: null,
    descargas: 1,
    password: '',
    autor: null,
    url: ''
  }; // Crear dispatch y state

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_appReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Muestra una alerta 

  const mostrarAlerta = msg => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["MOSTRAR_ALERTA"],
      payload: msg
    });
    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Sube los archivos al servidor


  const subirArchivo = async (formData, nombreArchivo) => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SUBIR_ARCHIVO"]
    });

    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/archivos', formData);
      console.log(resultado.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["SUBIR_ARCHIVO_EXITO"],
        payload: {
          nombre: resultado.data.archivo,
          nombre_original: nombreArchivo
        }
      });
    } catch (error) {
      // console.log(error);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["SUBIR_ARCHIVO_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // crea un enlace una vez que se subió el archivo


  const crearEnlace = async () => {
    const data = {
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor
    }; // console.log(data);

    try {
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/enlaces', data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["CREAR_ENLACE_EXITO"],
        payload: resultado.data.msg
      });
    } catch (error) {
      console.log(error);
    }
  };

  const limpiarState = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["LIMPIAR_STATE"]
    });
  }; // Agregue el password


  const agregarPassword = password => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_PASSWORD"],
      payload: password
    });
  }; // agrega un número de descargas


  const agregarDescargas = descargas => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_DESCARGAS"],
      payload: descargas
    });
  };

  return __jsx(_appContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      mensaje_archivo: state.mensaje_archivo,
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      cargando: state.cargando,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor,
      url: state.url,
      mostrarAlerta,
      subirArchivo,
      crearEnlace,
      limpiarState,
      agregarPassword,
      agregarDescargas
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppState);

/***/ }),

/***/ "./context/auth/authContext.js":
/*!*************************************!*\
  !*** ./context/auth/authContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (authContext);

/***/ }),

/***/ "./context/auth/authReducer.js":
/*!*************************************!*\
  !*** ./context/auth/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_EXITOSO"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["REGISTRO_ERROR"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_EXITOSO"]:
      localStorage.setItem('token', action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload,
        autenticado: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USUARIO_AUTENTICADO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        autenticado: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CERRAR_SESION"]:
      localStorage.removeItem('token');
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: null,
        token: null,
        autenticado: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/auth/authState.js":
/*!***********************************!*\
  !*** ./context/auth/authState.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authContext */ "./context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./context/auth/authReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
/* harmony import */ var _config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/tokenAuth */ "./config/tokenAuth.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\Proyecto NodeSend\\nodesend-cliente\\context\\auth\\authState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AuthState = ({
  children
}) => {
  // Definir un state inicial
  const initialState = {
    token: false ? undefined : '',
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: null
  }; // Definir el reducer

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // Registrar nuevos usuarios

  const registrarUsuario = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/usuarios', datos);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_EXITOSO"],
        payload: respuesta.data.msg
      });
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["REGISTRO_ERROR"],
        payload: error.response.data.msg
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Autenticar Usuarios


  const iniciarSesion = async datos => {
    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/api/auth', datos);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_EXITOSO"],
        payload: respuesta.data.token
      });
    } catch (error) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, 3000);
  }; // Retorne el Usuario autenticado en base al JWT


  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      Object(_config_tokenAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(token);
    }

    try {
      const respuesta = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/auth');

      if (respuesta.data.usuario) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_3__["USUARIO_AUTENTICADO"],
          payload: respuesta.data.usuario
        });
      }
    } catch (error) {
      //console.log(error);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["LOGIN_ERROR"],
        payload: error.response.data.msg
      });
    }
  }; // Cerrar la sesión


  const cerrarSesion = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CERRAR_SESION"]
    });
  };

  return __jsx(_authContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      cargando: state.cargando,
      registrarUsuario,
      iniciarSesion,
      usuarioAutenticado,
      cerrarSesion
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_auth_authState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/auth/authState */ "./context/auth/authState.js");
/* harmony import */ var _context_app_appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/app/appState */ "./context/app/appState.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\Proyecto NodeSend\\nodesend-cliente\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_auth_authState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_context_app_appState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_EXITOSO, LOGIN_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION, MOSTRAR_ALERTA, OCULTAR_ALERTA, SUBIR_ARCHIVO, SUBIR_ARCHIVO_EXITO, SUBIR_ARCHIVO_ERROR, CREAR_ENLACE_EXITO, CREAR_ENLACE_ERROR, LIMPIAR_STATE, AGREGAR_PASSWORD, AGREGAR_DESCARGAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_EXITOSO", function() { return REGISTRO_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRO_ERROR", function() { return REGISTRO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_EXITOSO", function() { return LOGIN_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUARIO_AUTENTICADO", function() { return USUARIO_AUTENTICADO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERRAR_SESION", function() { return CERRAR_SESION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOSTRAR_ALERTA", function() { return MOSTRAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCULTAR_ALERTA", function() { return OCULTAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO", function() { return SUBIR_ARCHIVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO_EXITO", function() { return SUBIR_ARCHIVO_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBIR_ARCHIVO_ERROR", function() { return SUBIR_ARCHIVO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_ENLACE_EXITO", function() { return CREAR_ENLACE_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREAR_ENLACE_ERROR", function() { return CREAR_ENLACE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMPIAR_STATE", function() { return LIMPIAR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_PASSWORD", function() { return AGREGAR_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_DESCARGAS", function() { return AGREGAR_DESCARGAS; });
const REGISTRO_EXITOSO = 'REGISTRO_EXITOSO';
const REGISTRO_ERROR = 'REGISTRO_ERROR';
const LOGIN_EXITOSO = 'LOGIN_EXITOSO';
const LOGIN_ERROR = 'LOGIN_ERROR';
const USUARIO_AUTENTICADO = 'USUARIO_AUTENTICADO';
const CERRAR_SESION = 'CERRAR_SESION';
const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const SUBIR_ARCHIVO = 'SUBIR_ARCHIVO';
const SUBIR_ARCHIVO_EXITO = 'SUBIR_ARCHIVO_EXITO';
const SUBIR_ARCHIVO_ERROR = 'SUBIR_ARCHIVO_ERROR';
const CREAR_ENLACE_EXITO = 'CREAR_ENLACE_EXITO';
const CREAR_ENLACE_ERROR = 'CREAR_ENLACE_ERROR';
const LIMPIAR_STATE = 'LIMPIAR_STATE';
const AGREGAR_PASSWORD = 'AGREGAR_PASSWORD';
const AGREGAR_DESCARGAS = 'AGREGAR_DESCARGAS';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy90b2tlbkF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hcHAvYXBwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FwcC9hcHBSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXBwL2FwcFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInRva2VuQXV0aCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJNT1NUUkFSX0FMRVJUQSIsIm1lbnNhamVfYXJjaGl2byIsInBheWxvYWQiLCJPQ1VMVEFSX0FMRVJUQSIsIlNVQklSX0FSQ0hJVk8iLCJjYXJnYW5kbyIsIlNVQklSX0FSQ0hJVk9fRVhJVE8iLCJub21icmUiLCJub21icmVfb3JpZ2luYWwiLCJTVUJJUl9BUkNISVZPX0VSUk9SIiwiQ1JFQVJfRU5MQUNFX0VYSVRPIiwidXJsIiwiTElNUElBUl9TVEFURSIsImRlc2NhcmdhcyIsInBhc3N3b3JkIiwiYXV0b3IiLCJBR1JFR0FSX1BBU1NXT1JEIiwiQUdSRUdBUl9ERVNDQVJHQVMiLCJBcHBTdGF0ZSIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiYXBwUmVkdWNlciIsIm1vc3RyYXJBbGVydGEiLCJtc2ciLCJzZXRUaW1lb3V0Iiwic3ViaXJBcmNoaXZvIiwiZm9ybURhdGEiLCJub21icmVBcmNoaXZvIiwicmVzdWx0YWRvIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYXJjaGl2byIsImVycm9yIiwicmVzcG9uc2UiLCJjcmVhckVubGFjZSIsImxpbXBpYXJTdGF0ZSIsImFncmVnYXJQYXNzd29yZCIsImFncmVnYXJEZXNjYXJnYXMiLCJhdXRoQ29udGV4dCIsIlJFR0lTVFJPX0VYSVRPU08iLCJSRUdJU1RST19FUlJPUiIsIkxPR0lOX0VSUk9SIiwibWVuc2FqZSIsIkxPR0lOX0VYSVRPU08iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0ZW50aWNhZG8iLCJVU1VBUklPX0FVVEVOVElDQURPIiwidXN1YXJpbyIsIkNFUlJBUl9TRVNJT04iLCJyZW1vdmVJdGVtIiwiQXV0aFN0YXRlIiwiYXV0aFJlZHVjZXIiLCJyZWdpc3RyYXJVc3VhcmlvIiwiZGF0b3MiLCJyZXNwdWVzdGEiLCJpbmljaWFyU2VzaW9uIiwidXN1YXJpb0F1dGVudGljYWRvIiwiZ2V0SXRlbSIsImdldCIsImNlcnJhclNlc2lvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQ1JFQVJfRU5MQUNFX0VSUk9SIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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TUFBTUUsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTXJELGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNRyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUUsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTTBELGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU14RCxhQUFhLEdBQUcsZUFBdEI7QUFFQSxNQUFNSSxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuL2F4aW9zJztcblxuY29uc3QgdG9rZW5BdXRoID0gdG9rZW4gPT4ge1xuICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGNsaWVudGVBeGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9rZW5BdXRoOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHQ7IiwiaW1wb3J0IHtcbiAgICBNT1NUUkFSX0FMRVJUQSxcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBTVUJJUl9BUkNISVZPLFxuICAgIFNVQklSX0FSQ0hJVk9fRVhJVE8sXG4gICAgU1VCSVJfQVJDSElWT19FUlJPUixcbiAgICBDUkVBUl9FTkxBQ0VfRVhJVE8sXG4gICAgQ1JFQVJfRU5MQUNFX0VSUk9SLFxuICAgIExJTVBJQVJfU1RBVEUsXG4gICAgQUdSRUdBUl9QQVNTV09SRCxcbiAgICBBR1JFR0FSX0RFU0NBUkdBU1xufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgTU9TVFJBUl9BTEVSVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamVfYXJjaGl2bzogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBPQ1VMVEFSX0FMRVJUQTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU1VCSVJfQVJDSElWTzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU1VCSVJfQVJDSElWT19FWElUTzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgIG5vbWJyZTogYWN0aW9uLnBheWxvYWQubm9tYnJlLFxuICAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6IGFjdGlvbi5wYXlsb2FkLm5vbWJyZV9vcmlnaW5hbCxcbiAgICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU1VCSVJfQVJDSElWT19FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDUkVBUl9FTkxBQ0VfRVhJVE86XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVybDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBMSU1QSUFSX1NUQVRFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplX2FyY2hpdm86IG51bGwsXG4gICAgICAgICAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6JycsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IG51bGwsXG4gICAgICAgICAgICAgICAgZGVzY2FyZ2FzOiAxLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgICAgICBhdXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUdSRUdBUl9QQVNTV09SRDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUdSRUdBUl9ERVNDQVJHQVM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRlc2NhcmdhczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuL2FwcENvbnRleHQnO1xuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnLi9hcHBSZWR1Y2VyJztcbmltcG9ydCB7XG4gICAgTU9TVFJBUl9BTEVSVEEsXG4gICAgT0NVTFRBUl9BTEVSVEEsXG4gICAgU1VCSVJfQVJDSElWTyxcbiAgICBTVUJJUl9BUkNISVZPX0VYSVRPLFxuICAgIFNVQklSX0FSQ0hJVk9fRVJST1IsXG4gICAgQ1JFQVJfRU5MQUNFX0VYSVRPLFxuICAgIENSRUFSX0VOTEFDRV9FUlJPUixcbiAgICBMSU1QSUFSX1NUQVRFLFxuICAgIEFHUkVHQVJfUEFTU1dPUkQsXG4gICAgQUdSRUdBUl9ERVNDQVJHQVNcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGNsaWVudGVBeGlvcyBmcm9tICcuLi8uLi9jb25maWcvYXhpb3MnO1xuXG5jb25zdCBBcHBTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIG1lbnNhamVfYXJjaGl2bzogbnVsbCxcbiAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgbm9tYnJlX29yaWdpbmFsOicnLFxuICAgICAgICBjYXJnYW5kbzogbnVsbCxcbiAgICAgICAgZGVzY2FyZ2FzOiAxLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGF1dG9yOiBudWxsLFxuICAgICAgICB1cmw6ICcnXG4gICAgfVxuXG4gICAgLy8gQ3JlYXIgZGlzcGF0Y2ggeSBzdGF0ZVxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gICAgLy8gTXVlc3RyYSB1bmEgYWxlcnRhIFxuICAgIGNvbnN0IG1vc3RyYXJBbGVydGEgPSBtc2cgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBNT1NUUkFSX0FMRVJUQSxcbiAgICAgICAgICAgIHBheWxvYWQ6IG1zZ1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgLy8gU3ViZSBsb3MgYXJjaGl2b3MgYWwgc2Vydmlkb3JcbiAgICBjb25zdCBzdWJpckFyY2hpdm8gPSBhc3luYyAoZm9ybURhdGEsIG5vbWJyZUFyY2hpdm8pID0+IHtcbiAgICAgICAgXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFNVQklSX0FSQ0hJVk9cbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvYXJjaGl2b3MnLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8uZGF0YSk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTVUJJUl9BUkNISVZPX0VYSVRPLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiByZXN1bHRhZG8uZGF0YS5hcmNoaXZvLFxuICAgICAgICAgICAgICAgICAgICBub21icmVfb3JpZ2luYWw6IG5vbWJyZUFyY2hpdm9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogU1VCSVJfQVJDSElWT19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNyZWEgdW4gZW5sYWNlIHVuYSB2ZXogcXVlIHNlIHN1YmnDsyBlbCBhcmNoaXZvXG4gICAgY29uc3QgY3JlYXJFbmxhY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBub21icmU6IHN0YXRlLm5vbWJyZSxcbiAgICAgICAgICAgIG5vbWJyZV9vcmlnaW5hbDogc3RhdGUubm9tYnJlX29yaWdpbmFsLFxuICAgICAgICAgICAgZGVzY2FyZ2FzOiBzdGF0ZS5kZXNjYXJnYXMsXG4gICAgICAgICAgICBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsXG4gICAgICAgICAgICBhdXRvcjogc3RhdGUuYXV0b3JcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvZW5sYWNlcycsIGRhdGEpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IENSRUFSX0VOTEFDRV9FWElUTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YS5tc2dcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGltcGlhclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMSU1QSUFSX1NUQVRFXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQWdyZWd1ZSBlbCBwYXNzd29yZFxuICAgIGNvbnN0IGFncmVnYXJQYXNzd29yZCA9IHBhc3N3b3JkID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9QQVNTV09SRCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBhc3N3b3JkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gYWdyZWdhIHVuIG7Dum1lcm8gZGUgZGVzY2FyZ2FzXG4gICAgY29uc3QgYWdyZWdhckRlc2NhcmdhcyA9IGRlc2NhcmdhcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfREVTQ0FSR0FTLFxuICAgICAgICAgICAgcGF5bG9hZDogZGVzY2FyZ2FzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgbWVuc2FqZV9hcmNoaXZvOiBzdGF0ZS5tZW5zYWplX2FyY2hpdm8sXG4gICAgICAgICAgICAgICAgbm9tYnJlOiBzdGF0ZS5ub21icmUsXG4gICAgICAgICAgICAgICAgbm9tYnJlX29yaWdpbmFsOiBzdGF0ZS5ub21icmVfb3JpZ2luYWwsXG4gICAgICAgICAgICAgICAgY2FyZ2FuZG86IHN0YXRlLmNhcmdhbmRvLFxuICAgICAgICAgICAgICAgIGRlc2Nhcmdhczogc3RhdGUuZGVzY2FyZ2FzLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhdXRvcjogc3RhdGUuYXV0b3IsXG4gICAgICAgICAgICAgICAgdXJsOiBzdGF0ZS51cmwsXG4gICAgICAgICAgICAgICAgbW9zdHJhckFsZXJ0YSxcbiAgICAgICAgICAgICAgICBzdWJpckFyY2hpdm8sXG4gICAgICAgICAgICAgICAgY3JlYXJFbmxhY2UsXG4gICAgICAgICAgICAgICAgbGltcGlhclN0YXRlLFxuICAgICAgICAgICAgICAgIGFncmVnYXJQYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyRGVzY2FyZ2FzXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFN0YXRlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoQ29udGV4dDsiLCJpbXBvcnQgeyBcbiAgICBSRUdJU1RST19FWElUT1NPLFxuICAgIFJFR0lTVFJPX0VSUk9SLFxuICAgIE9DVUxUQVJfQUxFUlRBLFxuICAgIExPR0lOX0VYSVRPU08sXG4gICAgTE9HSU5fRVJST1IsXG4gICAgVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICBDRVJSQVJfU0VTSU9OXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUdJU1RST19FWElUT1NPOlxuICAgICAgICBjYXNlIFJFR0lTVFJPX0VSUk9SOlxuICAgICAgICBjYXNlIExPR0lOX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgY2FzZSBMT0dJTl9FWElUT1NPOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGF1dGVudGljYWRvOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lbnNhamU6IG51bGxcbiAgICAgICAgICAgIH0gXG4gICAgICAgIGNhc2UgVVNVQVJJT19BVVRFTlRJQ0FETzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDRVJSQVJfU0VTSU9OOiBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBudWxsLCBcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRlbnRpY2FkbzogbnVsbCxcblxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhdXRoQ29udGV4dCBmcm9tICcuL2F1dGhDb250ZXh0JztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2VyJztcblxuXG5pbXBvcnQgeyBcbiAgICBSRUdJU1RST19FWElUT1NPLCBcbiAgICBSRUdJU1RST19FUlJPUixcbiAgICBPQ1VMVEFSX0FMRVJUQSxcbiAgICBMT0dJTl9FWElUT1NPLFxuICAgIExPR0lOX0VSUk9SLFxuICAgIFVTVUFSSU9fQVVURU5USUNBRE8sXG4gICAgQ0VSUkFSX1NFU0lPTlxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBjbGllbnRlQXhpb3MgZnJvbSAnLi4vLi4vY29uZmlnL2F4aW9zJztcbmltcG9ydCB0b2tlbkF1dGggZnJvbSAnLi4vLi4vY29uZmlnL3Rva2VuQXV0aCc7XG5cbmNvbnN0IEF1dGhTdGF0ZSA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICAvLyBEZWZpbmlyIHVuIHN0YXRlIGluaWNpYWxcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIHRva2VuOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJycsXG4gICAgICAgIGF1dGVudGljYWRvOiBudWxsLFxuICAgICAgICB1c3VhcmlvOiBudWxsLFxuICAgICAgICBtZW5zYWplOiBudWxsLFxuICAgICAgICBjYXJnYW5kbzogbnVsbFxuICAgIH1cblxuICAgIC8vIERlZmluaXIgZWwgcmVkdWNlclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGF1dGhSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gICAgLy8gUmVnaXN0cmFyIG51ZXZvcyB1c3Vhcmlvc1xuICAgIGNvbnN0IHJlZ2lzdHJhclVzdWFyaW8gPSBhc3luYyBkYXRvcyA9PiB7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QoJy9hcGkvdXN1YXJpb3MnLCBkYXRvcyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVHSVNUUk9fRVhJVE9TTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS5tc2dcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFR0lTVFJPX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgLy8gQXV0ZW50aWNhciBVc3Vhcmlvc1xuICAgIGNvbnN0IGluaWNpYXJTZXNpb24gPSBhc3luYyBkYXRvcyA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KCcvYXBpL2F1dGgnLCBkYXRvcyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTE9HSU5fRVhJVE9TTyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwdWVzdGEuZGF0YS50b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgLy8gUmV0b3JuZSBlbCBVc3VhcmlvIGF1dGVudGljYWRvIGVuIGJhc2UgYWwgSldUXG4gICAgY29uc3QgdXN1YXJpb0F1dGVudGljYWRvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZih0b2tlbikge1xuICAgICAgICAgICAgdG9rZW5BdXRoKHRva2VuKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQoJy9hcGkvYXV0aCcpO1xuICAgICAgICAgICAgaWYocmVzcHVlc3RhLmRhdGEudXN1YXJpbykge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVNVQVJJT19BVVRFTlRJQ0FETyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcHVlc3RhLmRhdGEudXN1YXJpb1xuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dJTl9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENlcnJhciBsYSBzZXNpw7NuXG4gICAgY29uc3QgY2VycmFyU2VzaW9uID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDRVJSQVJfU0VTSU9OXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICB0b2tlbjogc3RhdGUudG9rZW4sXG4gICAgICAgICAgICAgICAgYXV0ZW50aWNhZG86IHN0YXRlLmF1dGVudGljYWRvLFxuICAgICAgICAgICAgICAgIHVzdWFyaW86IHN0YXRlLnVzdWFyaW8sXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcbiAgICAgICAgICAgICAgICBjYXJnYW5kbzogc3RhdGUuY2FyZ2FuZG8sXG4gICAgICAgICAgICAgICAgcmVnaXN0cmFyVXN1YXJpbyxcbiAgICAgICAgICAgICAgICBpbmljaWFyU2VzaW9uLFxuICAgICAgICAgICAgICAgIHVzdWFyaW9BdXRlbnRpY2FkbywgXG4gICAgICAgICAgICAgICAgY2VycmFyU2VzaW9uXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoU3RhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hdXRoL2F1dGhTdGF0ZSc7XG5pbXBvcnQgQXBwU3RhdGUgZnJvbSAnLi4vY29udGV4dC9hcHAvYXBwU3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aFN0YXRlPlxuICAgICAgICAgICAgPEFwcFN0YXRlPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBwU3RhdGU+XG4gICAgICAgIDwvQXV0aFN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBSRUdJU1RST19FWElUT1NPID0gJ1JFR0lTVFJPX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFJFR0lTVFJPX0VSUk9SID0gJ1JFR0lTVFJPX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExPR0lOX0VYSVRPU08gPSAnTE9HSU5fRVhJVE9TTyc7XG5leHBvcnQgY29uc3QgTE9HSU5fRVJST1IgPSAnTE9HSU5fRVJST1InO1xuXG5leHBvcnQgY29uc3QgVVNVQVJJT19BVVRFTlRJQ0FETyA9ICdVU1VBUklPX0FVVEVOVElDQURPJztcbmV4cG9ydCBjb25zdCBDRVJSQVJfU0VTSU9OID0gJ0NFUlJBUl9TRVNJT04nXG5cbmV4cG9ydCBjb25zdCBNT1NUUkFSX0FMRVJUQSA9ICdNT1NUUkFSX0FMRVJUQSc7XG5leHBvcnQgY29uc3QgT0NVTFRBUl9BTEVSVEEgPSAnT0NVTFRBUl9BTEVSVEEnO1xuXG5leHBvcnQgY29uc3QgU1VCSVJfQVJDSElWTyA9ICdTVUJJUl9BUkNISVZPJztcbmV4cG9ydCBjb25zdCBTVUJJUl9BUkNISVZPX0VYSVRPID0gJ1NVQklSX0FSQ0hJVk9fRVhJVE8nO1xuZXhwb3J0IGNvbnN0IFNVQklSX0FSQ0hJVk9fRVJST1IgPSAnU1VCSVJfQVJDSElWT19FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBDUkVBUl9FTkxBQ0VfRVhJVE8gPSAnQ1JFQVJfRU5MQUNFX0VYSVRPJztcbmV4cG9ydCBjb25zdCBDUkVBUl9FTkxBQ0VfRVJST1IgPSAnQ1JFQVJfRU5MQUNFX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IExJTVBJQVJfU1RBVEUgPSAnTElNUElBUl9TVEFURSc7XG5cbmV4cG9ydCBjb25zdCBBR1JFR0FSX1BBU1NXT1JEID0gJ0FHUkVHQVJfUEFTU1dPUkQnO1xuZXhwb3J0IGNvbnN0IEFHUkVHQVJfREVTQ0FSR0FTID0gJ0FHUkVHQVJfREVTQ0FSR0FTJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9