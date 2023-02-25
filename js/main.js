/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_samlpe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/samlpe */ "./src/js/components/samlpe.js");
/* harmony import */ var _components_samlpe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_samlpe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ymap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ymap */ "./src/js/components/ymap.js");
/* harmony import */ var _components_ymap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ymap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input */ "./src/js/components/input.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_input__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ (() => {

document.getElementById("burger").addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('open');
});
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.header').classList.remove('open');
  });
});

/***/ }),

/***/ "./src/js/components/input.js":
/*!************************************!*\
  !*** ./src/js/components/input.js ***!
  \************************************/
/***/ (() => {

const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
const validation = new JustValidate('.form');
validation.addField('#male', [{
  rule: 'required',
  errorMessage: 'Примите политику конфиденциальности'
}]).addField('.input-tel', [{
  rule: 'required',
  value: true,
  errorMessage: 'Телефон обязателен'
}, {
  rule: 'function',
  validator: function () {
    const phone = telSelector.inputmask.unmaskedvalue();
    return phone.length === 10;
  },
  errorMessage: 'Введите корректный телефон'
}]).onSuccess(event => {
  console.log('Отправлено');
  alert('Отправлено');
  let formData = new FormData(event.target);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("good");
      }
    }
  };

  // xhr.open('POST', 'mail.php', true);
  // xhr.send(formData);

  event.target.reset();
});

/***/ }),

/***/ "./src/js/components/samlpe.js":
/*!*************************************!*\
  !*** ./src/js/components/samlpe.js ***!
  \*************************************/
/***/ (() => {

//display Call active

document.getElementById('call').addEventListener('click', () => {
  document.getElementById('quest').style.display = "flex";
});
document.getElementById('modal__close').addEventListener('click', () => {
  document.getElementById('quest').style.display = "none";
});

// Color header after scroll

document.addEventListener('scroll', () => {
  if (window.pageYOffset) {
    document.querySelector('.header').classList.add('color--light');
  } else {
    document.querySelector('.header').classList.remove('color--light');
  }
});

/***/ }),

/***/ "./src/js/components/ymap.js":
/*!***********************************!*\
  !*** ./src/js/components/ymap.js ***!
  \***********************************/
/***/ (() => {

//Yandex map

function init() {
  let map = new ymaps.Map('map-test', {
    center: [59.9, 30.28],
    zoom: 10
  });
}
ymaps.ready(init);

//Full map

document.getElementById('fullmap').addEventListener('click', () => {
  document.querySelector(".ymaps-2-1-79-controls__toolbar_right .ymaps-2-1-79-controls__control_toolbar:nth-of-type(3)").click();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map