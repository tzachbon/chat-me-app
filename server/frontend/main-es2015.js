(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation>\n  <router-outlet></router-outlet>\n</app-navigation>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(isHandset$ | async) === false\"\n  >\n    <ng-container *ngIf=\"isAuth; else isUnAuthRef\">\n      <mat-toolbar>Menu</mat-toolbar>\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/main']\" routerLinkActive=\"active\"\n          >My Groups</a\n        >\n      </mat-nav-list>\n    </ng-container>\n    <ng-template #isUnAuthRef>\n      <div class=\"unauth-container\">\n        <span>Hey, we see that you're not signed in</span>\n        <p routerLink=\"/\">Click Here To Sign In</p>\n      </div>\n    </ng-template>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <div class=\"logo\">\n        <mat-icon class=\"logo__icon\">send</mat-icon>\n        <span class=\"logo__text\">ChatMeApp</span>\n      </div>\n    </mat-toolbar>\n    <div class=\"app-content\">\n      <ng-content></ng-content>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/lines/lines.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/lines/lines.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"line-1\"></div>\n<div class=\"line-2\"></div>\n<div class=\"line-3\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/polygon-loader/polygon-loader.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/polygon-loader/polygon-loader.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cssload-preloader cssload-loading\">\n    <span class=\"cssload-slice\"></span>\n    <span class=\"cssload-slice\"></span>\n    <span class=\"cssload-slice\"></span>\n    <span class=\"cssload-slice\"></span>\n    <span class=\"cssload-slice\"></span>\n    <span class=\"cssload-slice\"></span>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/polygons/polygons.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/polygons/polygons.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/upload-image/upload-image.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/upload-image/upload-image.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"accent-button\" (click)=\"imagePicker.click()\">\n  Upload Image\n</button>\n<input\n  [required]=\"true\"\n  style=\"display: none\"\n  type=\"file\"\n  #imagePicker\n  (change)=\"onImagePicked($event)\"\n  [accept]=\"'image/*'\"\n/>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/zone.js/dist/zone-evergreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license Angular v0.10.2
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

(function (factory) {
     true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
    undefined;
}(function () { 'use strict';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const Zone$1 = (function (global) {
        const performance = global['performance'];
        function mark(name) { performance && performance['mark'] && performance['mark'](name); }
        function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
        }
        mark('Zone');
        // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.
        const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) { return symbolPrefix + name; }
        const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
        if (global['Zone']) {
            // if global['Zone'] already exists (maybe zone.js was already loaded or
            // some other lib also registered a global object named Zone), we may need
            // to throw an error, but sometimes user may not want this error.
            // For example,
            // we have two web pages, page1 includes zone.js, page2 doesn't.
            // and the 1st time user load page1 and page2, everything work fine,
            // but when user load page2 again, error occurs because global['Zone'] already exists.
            // so we add a flag to let user choose whether to throw this error or not.
            // By default, if existing Zone is from zone.js, we will not throw the error.
            if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                throw new Error('Zone already loaded.');
            }
            else {
                return global['Zone'];
            }
        }
        class Zone {
            constructor(parent, zoneSpec) {
                this._parent = parent;
                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                this._properties = zoneSpec && zoneSpec.properties || {};
                this._zoneDelegate =
                    new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }
            static assertZonePatched() {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                    throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                        'has been overwritten.\n' +
                        'Most likely cause is that a Promise polyfill has been loaded ' +
                        'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                        'If you must load one, do so before loading zone.js.)');
                }
            }
            static get root() {
                let zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            }
            static get current() { return _currentZoneFrame.zone; }
            static get currentTask() { return _currentTask; }
            // tslint:disable-next-line:require-internal-with-underscore
            static __load_patch(name, fn) {
                if (patches.hasOwnProperty(name)) {
                    if (checkDuplicate) {
                        throw Error('Already loaded patch: ' + name);
                    }
                }
                else if (!global['__Zone_disable_' + name]) {
                    const perfName = 'Zone:' + name;
                    mark(perfName);
                    patches[name] = fn(global, Zone, _api);
                    performanceMeasure(perfName, perfName);
                }
            }
            get parent() { return this._parent; }
            get name() { return this._name; }
            get(key) {
                const zone = this.getZoneWith(key);
                if (zone)
                    return zone._properties[key];
            }
            getZoneWith(key) {
                let current = this;
                while (current) {
                    if (current._properties.hasOwnProperty(key)) {
                        return current;
                    }
                    current = current._parent;
                }
                return null;
            }
            fork(zoneSpec) {
                if (!zoneSpec)
                    throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
            }
            wrap(callback, source) {
                if (typeof callback !== 'function') {
                    throw new Error('Expecting function got: ' + callback);
                }
                const _callback = this._zoneDelegate.intercept(this, callback, source);
                const zone = this;
                return function () {
                    return zone.runGuarded(_callback, this, arguments, source);
                };
            }
            run(callback, applyThis, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            }
            runGuarded(callback, applyThis = null, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            }
            runTask(task, applyThis, applyArgs) {
                if (task.zone != this) {
                    throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                }
                // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return
                if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                    return;
                }
                const reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                const previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                        task.cancelFn = undefined;
                    }
                    try {
                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    // if the task's state is notScheduled or unknown, then it has already been cancelled
                    // we should not reset the state to scheduled
                    if (task.state !== notScheduled && task.state !== unknown) {
                        if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                            reEntryGuard && task._transitionTo(scheduled, running);
                        }
                        else {
                            task.runCount = 0;
                            this._updateTaskCount(task, -1);
                            reEntryGuard &&
                                task._transitionTo(notScheduled, running, notScheduled);
                        }
                    }
                    _currentZoneFrame = _currentZoneFrame.parent;
                    _currentTask = previousTask;
                }
            }
            scheduleTask(task) {
                if (task.zone && task.zone !== this) {
                    // check if the task was rescheduled, the newZone
                    // should not be the children of the original zone
                    let newZone = this;
                    while (newZone) {
                        if (newZone === task.zone) {
                            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                        }
                        newZone = newZone.parent;
                    }
                }
                task._transitionTo(scheduling, notScheduled);
                const zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;
                try {
                    task = this._zoneDelegate.scheduleTask(this, task);
                }
                catch (err) {
                    // should set task's state to unknown when scheduleTask throw error
                    // because the err may from reschedule, so the fromState maybe notScheduled
                    task._transitionTo(unknown, scheduling, notScheduled);
                    // TODO: @JiaLiPassion, should we check the result from handleError?
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                if (task._zoneDelegates === zoneDelegates) {
                    // we have to check because internally the delegate can reschedule the task.
                    this._updateTaskCount(task, 1);
                }
                if (task.state == scheduling) {
                    task._transitionTo(scheduled, scheduling);
                }
                return task;
            }
            scheduleMicroTask(source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
            scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
            scheduleEventTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
            cancelTask(task) {
                if (task.zone != this)
                    throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                task._transitionTo(canceling, scheduled, running);
                try {
                    this._zoneDelegate.cancelTask(this, task);
                }
                catch (err) {
                    // if error occurs when cancelTask, transit the state to unknown
                    task._transitionTo(unknown, canceling);
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                this._updateTaskCount(task, -1);
                task._transitionTo(notScheduled, canceling);
                task.runCount = 0;
                return task;
            }
            _updateTaskCount(task, count) {
                const zoneDelegates = task._zoneDelegates;
                if (count == -1) {
                    task._zoneDelegates = null;
                }
                for (let i = 0; i < zoneDelegates.length; i++) {
                    zoneDelegates[i]._updateTaskCount(task.type, count);
                }
            }
        }
        // tslint:disable-next-line:require-internal-with-underscore
        Zone.__symbol__ = __symbol__;
        const DELEGATE_ZS = {
            name: '',
            onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
            onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
            onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
            onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
        };
        class ZoneDelegate {
            constructor(zone, parentDelegate, zoneSpec) {
                this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                this.zone = zone;
                this._parentDelegate = parentDelegate;
                this._forkZS =
                    zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                this._forkCurrZone =
                    zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                this._interceptZS =
                    zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                this._interceptDlgt =
                    zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                this._interceptCurrZone =
                    zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                this._invokeDlgt =
                    zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                this._invokeCurrZone =
                    zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                this._handleErrorZS =
                    zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                this._handleErrorDlgt = zoneSpec &&
                    (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                this._handleErrorCurrZone =
                    zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                this._scheduleTaskZS =
                    zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                this._scheduleTaskDlgt = zoneSpec &&
                    (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                this._scheduleTaskCurrZone = zoneSpec &&
                    (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                this._invokeTaskZS =
                    zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                this._invokeTaskDlgt =
                    zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                this._invokeTaskCurrZone =
                    zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                this._cancelTaskZS =
                    zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                this._cancelTaskDlgt =
                    zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                this._cancelTaskCurrZone =
                    zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                this._hasTaskZS = null;
                this._hasTaskDlgt = null;
                this._hasTaskDlgtOwner = null;
                this._hasTaskCurrZone = null;
                const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;
                    if (!zoneSpec.onScheduleTask) {
                        this._scheduleTaskZS = DELEGATE_ZS;
                        this._scheduleTaskDlgt = parentDelegate;
                        this._scheduleTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onInvokeTask) {
                        this._invokeTaskZS = DELEGATE_ZS;
                        this._invokeTaskDlgt = parentDelegate;
                        this._invokeTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onCancelTask) {
                        this._cancelTaskZS = DELEGATE_ZS;
                        this._cancelTaskDlgt = parentDelegate;
                        this._cancelTaskCurrZone = this.zone;
                    }
                }
            }
            fork(targetZone, zoneSpec) {
                return this._forkZS ?
                    this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                    new Zone(targetZone, zoneSpec);
            }
            intercept(targetZone, callback, source) {
                return this._interceptZS ?
                    this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                    callback;
            }
            invoke(targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ?
                    this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                    callback.apply(applyThis, applyArgs);
            }
            handleError(targetZone, error) {
                return this._handleErrorZS ?
                    this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                    true;
            }
            scheduleTask(targetZone, task) {
                let returnTask = task;
                if (this._scheduleTaskZS) {
                    if (this._hasTaskZS) {
                        returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                    }
                    // clang-format off
                    returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                    // clang-format on
                    if (!returnTask)
                        returnTask = task;
                }
                else {
                    if (task.scheduleFn) {
                        task.scheduleFn(task);
                    }
                    else if (task.type == microTask) {
                        scheduleMicroTask(task);
                    }
                    else {
                        throw new Error('Task is missing scheduleFn.');
                    }
                }
                return returnTask;
            }
            invokeTask(targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ?
                    this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                    task.callback.apply(applyThis, applyArgs);
            }
            cancelTask(targetZone, task) {
                let value;
                if (this._cancelTaskZS) {
                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                }
                else {
                    if (!task.cancelFn) {
                        throw Error('Task is not cancelable');
                    }
                    value = task.cancelFn(task);
                }
                return value;
            }
            hasTask(targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                    this._hasTaskZS &&
                        this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                }
                catch (err) {
                    this.handleError(targetZone, err);
                }
            }
            // tslint:disable-next-line:require-internal-with-underscore
            _updateTaskCount(type, count) {
                const counts = this._taskCounts;
                const prev = counts[type];
                const next = counts[type] = prev + count;
                if (next < 0) {
                    throw new Error('More tasks executed then were scheduled.');
                }
                if (prev == 0 || next == 0) {
                    const isEmpty = {
                        microTask: counts['microTask'] > 0,
                        macroTask: counts['macroTask'] > 0,
                        eventTask: counts['eventTask'] > 0,
                        change: type
                    };
                    this.hasTask(this.zone, isEmpty);
                }
            }
        }
        class ZoneTask {
            constructor(type, source, callback, options, scheduleFn, cancelFn) {
                // tslint:disable-next-line:require-internal-with-underscore
                this._zone = null;
                this.runCount = 0;
                // tslint:disable-next-line:require-internal-with-underscore
                this._zoneDelegates = null;
                // tslint:disable-next-line:require-internal-with-underscore
                this._state = 'notScheduled';
                this.type = type;
                this.source = source;
                this.data = options;
                this.scheduleFn = scheduleFn;
                this.cancelFn = cancelFn;
                if (!callback) {
                    throw new Error('callback is not defined');
                }
                this.callback = callback;
                const self = this;
                // TODO: @JiaLiPassion options should have interface
                if (type === eventTask && options && options.useG) {
                    this.invoke = ZoneTask.invokeTask;
                }
                else {
                    this.invoke = function () {
                        return ZoneTask.invokeTask.call(global, self, this, arguments);
                    };
                }
            }
            static invokeTask(task, target, args) {
                if (!task) {
                    task = this;
                }
                _numberOfNestedTaskFrames++;
                try {
                    task.runCount++;
                    return task.zone.runTask(task, target, args);
                }
                finally {
                    if (_numberOfNestedTaskFrames == 1) {
                        drainMicroTaskQueue();
                    }
                    _numberOfNestedTaskFrames--;
                }
            }
            get zone() { return this._zone; }
            get state() { return this._state; }
            cancelScheduleRequest() { this._transitionTo(notScheduled, scheduling); }
            // tslint:disable-next-line:require-internal-with-underscore
            _transitionTo(toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                    this._state = toState;
                    if (toState == notScheduled) {
                        this._zoneDelegates = null;
                    }
                }
                else {
                    throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
                }
            }
            toString() {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                    return this.data.handleId.toString();
                }
                else {
                    return Object.prototype.toString.call(this);
                }
            }
            // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)
            toJSON() {
                return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount
                };
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        const symbolSetTimeout = __symbol__('setTimeout');
        const symbolPromise = __symbol__('Promise');
        const symbolThen = __symbol__('then');
        let _microTaskQueue = [];
        let _isDrainingMicrotaskQueue = false;
        let nativeMicroTaskQueuePromise;
        function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (!nativeMicroTaskQueuePromise) {
                    if (global[symbolPromise]) {
                        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                    }
                }
                if (nativeMicroTaskQueuePromise) {
                    let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                    if (!nativeThen) {
                        // native Promise is not patchable, we need to use `then` directly
                        // issue 1078
                        nativeThen = nativeMicroTaskQueuePromise['then'];
                    }
                    nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                }
                else {
                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
            }
            task && _microTaskQueue.push(task);
        }
        function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;
                while (_microTaskQueue.length) {
                    const queue = _microTaskQueue;
                    _microTaskQueue = [];
                    for (let i = 0; i < queue.length; i++) {
                        const task = queue[i];
                        try {
                            task.zone.runTask(task, null, null);
                        }
                        catch (error) {
                            _api.onUnhandledError(error);
                        }
                    }
                }
                _api.microtaskDrainDone();
                _isDrainingMicrotaskQueue = false;
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        const NO_ZONE = { name: 'NO ZONE' };
        const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
        const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
        const patches = {};
        const _api = {
            symbol: __symbol__,
            currentZoneFrame: () => _currentZoneFrame,
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
            patchEventTarget: () => [],
            patchOnProperties: noop,
            patchMethod: () => noop,
            bindArguments: () => [],
            patchThen: () => noop,
            patchMacroTask: () => noop,
            setNativePromise: (NativePromise) => {
                // sometimes NativePromise.resolve static function
                // is not ready yet, (such as core-js/es6.promise)
                // so we need to check here.
                if (NativePromise && typeof NativePromise.resolve === 'function') {
                    nativeMicroTaskQueuePromise = NativePromise.resolve(0);
                }
            },
            patchEventPrototype: () => noop,
            isIEOrEdge: () => false,
            getGlobalObjects: () => undefined,
            ObjectDefineProperty: () => noop,
            ObjectGetOwnPropertyDescriptor: () => undefined,
            ObjectCreate: () => undefined,
            ArraySlice: () => [],
            patchClass: () => noop,
            wrapWithCurrentZone: () => noop,
            filterProperties: () => [],
            attachOriginToPatched: () => noop,
            _redefineProperty: () => noop,
            patchCallbacks: () => noop
        };
        let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
        let _currentTask = null;
        let _numberOfNestedTaskFrames = 0;
        function noop() { }
        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
    })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
        const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        const ObjectDefineProperty = Object.defineProperty;
        function readableObjectToString(obj) {
            if (obj && obj.toString === Object.prototype.toString) {
                const className = obj.constructor && obj.constructor.name;
                return (className ? className : '') + ': ' + JSON.stringify(obj);
            }
            return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }
        const __symbol__ = api.symbol;
        const _uncaughtPromiseErrors = [];
        const symbolPromise = __symbol__('Promise');
        const symbolThen = __symbol__('then');
        const creationTrace = '__creationTrace__';
        api.onUnhandledError = (e) => {
            if (api.showUncaughtError()) {
                const rejection = e && e.rejection;
                if (rejection) {
                    console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                }
                else {
                    console.error(e);
                }
            }
        };
        api.microtaskDrainDone = () => {
            while (_uncaughtPromiseErrors.length) {
                while (_uncaughtPromiseErrors.length) {
                    const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                    try {
                        uncaughtPromiseError.zone.runGuarded(() => { throw uncaughtPromiseError; });
                    }
                    catch (error) {
                        handleUnhandledRejection(error);
                    }
                }
            }
        };
        const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
        function handleUnhandledRejection(e) {
            api.onUnhandledError(e);
            try {
                const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                if (handler && typeof handler === 'function') {
                    handler.call(this, e);
                }
            }
            catch (err) {
            }
        }
        function isThenable(value) { return value && value.then; }
        function forwardResolution(value) { return value; }
        function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
        const symbolState = __symbol__('state');
        const symbolValue = __symbol__('value');
        const symbolFinally = __symbol__('finally');
        const symbolParentPromiseValue = __symbol__('parentPromiseValue');
        const symbolParentPromiseState = __symbol__('parentPromiseState');
        const source = 'Promise.then';
        const UNRESOLVED = null;
        const RESOLVED = true;
        const REJECTED = false;
        const REJECTED_NO_CATCH = 0;
        function makeResolver(promise, state) {
            return (v) => {
                try {
                    resolvePromise(promise, state, v);
                }
                catch (err) {
                    resolvePromise(promise, false, err);
                }
                // Do not return value or you will break the Promise spec.
            };
        }
        const once = function () {
            let wasCalled = false;
            return function wrapper(wrappedFunction) {
                return function () {
                    if (wasCalled) {
                        return;
                    }
                    wasCalled = true;
                    wrappedFunction.apply(null, arguments);
                };
            };
        };
        const TYPE_ERROR = 'Promise resolved with itself';
        const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
        // Promise Resolution
        function resolvePromise(promise, state, value) {
            const onceWrapper = once();
            if (promise === value) {
                throw new TypeError(TYPE_ERROR);
            }
            if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                let then = null;
                try {
                    if (typeof value === 'object' || typeof value === 'function') {
                        then = value && value.then;
                    }
                }
                catch (err) {
                    onceWrapper(() => { resolvePromise(promise, false, err); })();
                    return promise;
                }
                // if (value instanceof ZoneAwarePromise) {
                if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                    value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                    value[symbolState] !== UNRESOLVED) {
                    clearRejectedNoCatch(value);
                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                }
                else if (state !== REJECTED && typeof then === 'function') {
                    try {
                        then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                    }
                    catch (err) {
                        onceWrapper(() => { resolvePromise(promise, false, err); })();
                    }
                }
                else {
                    promise[symbolState] = state;
                    const queue = promise[symbolValue];
                    promise[symbolValue] = value;
                    if (promise[symbolFinally] === symbolFinally) {
                        // the promise is generated by Promise.prototype.finally
                        if (state === RESOLVED) {
                            // the state is resolved, should ignore the value
                            // and use parent promise value
                            promise[symbolState] = promise[symbolParentPromiseState];
                            promise[symbolValue] = promise[symbolParentPromiseValue];
                        }
                    }
                    // record task information in value when error occurs, so we can
                    // do some additional work such as render longStackTrace
                    if (state === REJECTED && value instanceof Error) {
                        // check if longStackTraceZone is here
                        const trace = Zone.currentTask && Zone.currentTask.data &&
                            Zone.currentTask.data[creationTrace];
                        if (trace) {
                            // only keep the long stack trace into error when in longStackTraceZone
                            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                        }
                    }
                    for (let i = 0; i < queue.length;) {
                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                    }
                    if (queue.length == 0 && state == REJECTED) {
                        promise[symbolState] = REJECTED_NO_CATCH;
                        try {
                            // try to print more readable error log
                            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                (value && value.stack ? '\n' + value.stack : ''));
                        }
                        catch (err) {
                            const error = err;
                            error.rejection = value;
                            error.promise = promise;
                            error.zone = Zone.current;
                            error.task = Zone.currentTask;
                            _uncaughtPromiseErrors.push(error);
                            api.scheduleMicroTask(); // to make sure that it is running
                        }
                    }
                }
            }
            // Resolving an already resolved promise is a noop.
            return promise;
        }
        const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
        function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                    const handler = Zone[REJECTION_HANDLED_HANDLER];
                    if (handler && typeof handler === 'function') {
                        handler.call(this, { rejection: promise[symbolValue], promise: promise });
                    }
                }
                catch (err) {
                }
                promise[symbolState] = REJECTED;
                for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                    if (promise === _uncaughtPromiseErrors[i].promise) {
                        _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
            }
        }
        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            const promiseState = promise[symbolState];
            const delegate = promiseState ?
                (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
                (typeof onRejected === 'function') ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, () => {
                try {
                    const parentPromiseValue = promise[symbolValue];
                    const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                    if (isFinallyPromise) {
                        // if the promise is generated from finally call, keep parent promise's state and value
                        chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                        chainPromise[symbolParentPromiseState] = promiseState;
                    }
                    // should not pass value to finally callback
                    const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                        [] :
                        [parentPromiseValue]);
                    resolvePromise(chainPromise, true, value);
                }
                catch (error) {
                    // if error occurs, should always return this error
                    resolvePromise(chainPromise, false, error);
                }
            }, chainPromise);
        }
        const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
        class ZoneAwarePromise {
            constructor(executor) {
                const promise = this;
                if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                }
                promise[symbolState] = UNRESOLVED;
                promise[symbolValue] = []; // queue;
                try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                }
                catch (error) {
                    resolvePromise(promise, false, error);
                }
            }
            static toString() { return ZONE_AWARE_PROMISE_TO_STRING; }
            static resolve(value) {
                return resolvePromise(new this(null), RESOLVED, value);
            }
            static reject(error) {
                return resolvePromise(new this(null), REJECTED, error);
            }
            static race(values) {
                let resolve;
                let reject;
                let promise = new this((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                function onResolve(value) { resolve(value); }
                function onReject(error) { reject(error); }
                for (let value of values) {
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
                return promise;
            }
            static all(values) { return ZoneAwarePromise.allWithCallback(values); }
            static allSettled(values) {
                const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                return P.allWithCallback(values, {
                    thenCallback: (value) => ({ status: 'fulfilled', value }),
                    errorCallback: (err) => ({ status: 'rejected', reason: err })
                });
            }
            static allWithCallback(values, callback) {
                let resolve;
                let reject;
                let promise = new this((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                // Start at 2 to prevent prematurely resolving if .then is called immediately.
                let unresolvedCount = 2;
                let valueIndex = 0;
                const resolvedValues = [];
                for (let value of values) {
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    const curValueIndex = valueIndex;
                    try {
                        value.then((value) => {
                            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }, (err) => {
                            if (!callback) {
                                reject(err);
                            }
                            else {
                                resolvedValues[curValueIndex] = callback.errorCallback(err);
                                unresolvedCount--;
                                if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                }
                            }
                        });
                    }
                    catch (thenErr) {
                        reject(thenErr);
                    }
                    unresolvedCount++;
                    valueIndex++;
                }
                // Make the unresolvedCount zero-based again.
                unresolvedCount -= 2;
                if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                }
                return promise;
            }
            get [Symbol.toStringTag]() { return 'Promise'; }
            then(onFulfilled, onRejected) {
                const chainPromise = new this.constructor(null);
                const zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }
                return chainPromise;
            }
            catch(onRejected) {
                return this.then(null, onRejected);
            }
            finally(onFinally) {
                const chainPromise = new this.constructor(null);
                chainPromise[symbolFinally] = symbolFinally;
                const zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                }
                return chainPromise;
            }
        }
        // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.
        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        const NativePromise = global[symbolPromise] = global['Promise'];
        const ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
        let desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
        if (!desc || desc.configurable) {
            desc && delete desc.writable;
            desc && delete desc.value;
            if (!desc) {
                desc = { configurable: true, enumerable: true };
            }
            desc.get = function () {
                // if we already set ZoneAwarePromise, use patched one
                // otherwise return native one.
                return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
            };
            desc.set = function (NewNativePromise) {
                if (NewNativePromise === ZoneAwarePromise) {
                    // if the NewNativePromise is ZoneAwarePromise
                    // save to global
                    global[ZONE_AWARE_PROMISE] = NewNativePromise;
                }
                else {
                    // if the NewNativePromise is not ZoneAwarePromise
                    // for example: after load zone.js, some library just
                    // set es6-promise to global, if we set it to global
                    // directly, assertZonePatched will fail and angular
                    // will not loaded, so we just set the NewNativePromise
                    // to global[symbolPromise], so the result is just like
                    // we load ES6 Promise before zone.js
                    global[symbolPromise] = NewNativePromise;
                    if (!NewNativePromise.prototype[symbolThen]) {
                        patchThen(NewNativePromise);
                    }
                    api.setNativePromise(NewNativePromise);
                }
            };
            ObjectDefineProperty(global, 'Promise', desc);
        }
        global['Promise'] = ZoneAwarePromise;
        const symbolThenPatched = __symbol__('thenPatched');
        function patchThen(Ctor) {
            const proto = Ctor.prototype;
            const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
            if (prop && (prop.writable === false || !prop.configurable)) {
                // check Ctor.prototype.then propertyDescriptor is writable or not
                // in meteor env, writable is false, we should ignore such case
                return;
            }
            const originalThen = proto.then;
            // Keep a reference to the original method.
            proto[symbolThen] = originalThen;
            Ctor.prototype.then = function (onResolve, onReject) {
                const wrapped = new ZoneAwarePromise((resolve, reject) => { originalThen.call(this, resolve, reject); });
                return wrapped.then(onResolve, onReject);
            };
            Ctor[symbolThenPatched] = true;
        }
        api.patchThen = patchThen;
        function zoneify(fn) {
            return function () {
                let resultPromise = fn.apply(this, arguments);
                if (resultPromise instanceof ZoneAwarePromise) {
                    return resultPromise;
                }
                let ctor = resultPromise.constructor;
                if (!ctor[symbolThenPatched]) {
                    patchThen(ctor);
                }
                return resultPromise;
            };
        }
        if (NativePromise) {
            patchThen(NativePromise);
            const fetch = global['fetch'];
            if (typeof fetch == 'function') {
                global[api.symbol('fetch')] = fetch;
                global['fetch'] = zoneify(fetch);
            }
        }
        // This is not part of public API, but it is useful for tests, so we expose it.
        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    /// <reference types="node"/>
    // issue #989, to reduce bundle size, use short name
    /** Object.getOwnPropertyDescriptor */
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */
    const ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */
    const ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */
    const ObjectCreate = Object.create;
    /** Array.prototype.slice */
    const ArraySlice = Array.prototype.slice;
    /** addEventListener string const */
    const ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */
    const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */
    const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */
    const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */
    const TRUE_STR = 'true';
    /** false string const */
    const FALSE_STR = 'false';
    /** Zone symbol prefix string const. */
    const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
    }
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    const zoneSymbol = Zone.__symbol__;
    const isWindowExists = typeof window !== 'undefined';
    const internalWindow = isWindowExists ? window : undefined;
    const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
    const REMOVE_ATTRIBUTE = 'removeAttribute';
    const NULL_ON_PROP_VALUE = [null];
    function bindArguments(args, source) {
        for (let i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
        }
        return args;
    }
    function patchPrototype(prototype, fnNames) {
        const source = prototype.constructor['name'];
        for (let i = 0; i < fnNames.length; i++) {
            const name = fnNames[i];
            const delegate = prototype[name];
            if (delegate) {
                const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
                if (!isPropertyWritable(prototypeDesc)) {
                    continue;
                }
                prototype[name] = ((delegate) => {
                    const patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                })(delegate);
            }
        }
    }
    function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
            return true;
        }
        if (propertyDesc.writable === false) {
            return false;
        }
        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]');
    const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    const isMix = typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
        !!(isWindowExists && internalWindow['HTMLElement']);
    const zoneSymbolEventNames = {};
    const wrapFn = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        let eventNameSymbol = zoneSymbolEventNames[event.type];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }
        const target = this || event.target || _global;
        const listener = target[eventNameSymbol];
        let result;
        if (isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            const errorEvent = event;
            result = listener &&
                listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
            if (result === true) {
                event.preventDefault();
            }
        }
        else {
            result = listener && listener.apply(this, arguments);
            if (result != undefined && !result) {
                event.preventDefault();
            }
        }
        return result;
    };
    function patchProperty(obj, prop, prototype) {
        let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        const originalDescGet = desc.get;
        const originalDescSet = desc.set;
        // substr(2) cuz 'onclick' -> 'click', etc
        const eventName = prop.substr(2);
        let eventNameSymbol = zoneSymbolEventNames[eventName];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            let target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            let previousValue = target[eventNameSymbol];
            if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
            }
            // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet
            if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }
            if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
            }
            else {
                target[eventNameSymbol] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            let target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            const listener = target[eventNameSymbol];
            if (listener) {
                return listener;
            }
            else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                let value = originalDescGet && originalDescGet.call(this);
                if (value) {
                    desc.set.call(this, value);
                    if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
    }
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (let i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        }
        else {
            const onProperties = [];
            for (const prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (let j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    const originalInstanceKey = zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        const OriginalClass = _global[className];
        if (!OriginalClass)
            return;
        // keep original class in global
        _global[zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            const a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        const instance = new OriginalClass(function () { });
        let prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                }
                else {
                    ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            }
                            else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () { return this[originalInstanceKey][prop]; }
                    });
                }
            }(prop));
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
            return;
        }
        const symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach((symbol) => {
            const desc = Object.getOwnPropertyDescriptor(src, symbol);
            Object.defineProperty(dest, symbol, {
                get: function () { return src[symbol]; },
                set: function (value) {
                    if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                        // if src[symbol] is not writable or not have a setter, just return
                        return;
                    }
                    src[symbol] = value;
                },
                enumerable: desc ? desc.enumerable : true,
                configurable: desc ? desc.configurable : true
            });
        });
    }
    let shouldCopySymbolProperties = false;
    function patchMethod(target, name, patchFn) {
        let proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        const delegateName = zoneSymbol(name);
        let delegate = null;
        if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name];
            // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
            const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
            if (isPropertyWritable(desc)) {
                const patchDelegate = patchFn(delegate, delegateName, name);
                proto[name] = function () { return patchDelegate(this, arguments); };
                attachOriginToPatched(proto[name], delegate);
                if (shouldCopySymbolProperties) {
                    copySymbolProperties(delegate, proto[name]);
                }
            }
        }
        return delegate;
    }
    // TODO: @JiaLiPassion, support cancel task later if necessary
    function patchMacroTask(obj, funcName, metaCreator) {
        let setNative = null;
        function scheduleTask(task) {
            const data = task.data;
            data.args[data.cbIdx] = function () { task.invoke.apply(this, arguments); };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
            const meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        });
    }
    function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
    }
    let isDetectedIEOrEdge = false;
    let ieOrEdge = false;
    function isIE() {
        try {
            const ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    }
    function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
            return ieOrEdge;
        }
        isDetectedIEOrEdge = true;
        try {
            const ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
            }
        }
        catch (error) {
        }
        return ieOrEdge;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', (global) => {
        // patch Func.prototype.toString to let them look like native
        const originalFunctionToString = Function.prototype.toString;
        const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        const PROMISE_SYMBOL = zoneSymbol('Promise');
        const ERROR_SYMBOL = zoneSymbol('Error');
        const newFunctionToString = function toString() {
            if (typeof this === 'function') {
                const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                if (originalDelegate) {
                    if (typeof originalDelegate === 'function') {
                        return originalFunctionToString.call(originalDelegate);
                    }
                    else {
                        return Object.prototype.toString.call(originalDelegate);
                    }
                }
                if (this === Promise) {
                    const nativePromise = global[PROMISE_SYMBOL];
                    if (nativePromise) {
                        return originalFunctionToString.call(nativePromise);
                    }
                }
                if (this === Error) {
                    const nativeError = global[ERROR_SYMBOL];
                    if (nativeError) {
                        return originalFunctionToString.call(nativeError);
                    }
                }
            }
            return originalFunctionToString.call(this);
        };
        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString;
        // patch Object.prototype.toString to let them look like native
        const originalObjectToString = Object.prototype.toString;
        const PROMISE_OBJECT_TO_STRING = '[object Promise]';
        Object.prototype.toString = function () {
            if (this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
            }
            return originalObjectToString.call(this);
        };
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    let passiveSupported = false;
    if (typeof window !== 'undefined') {
        try {
            const options = Object.defineProperty({}, 'passive', { get: function () { passiveSupported = true; } });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
        }
        catch (err) {
            passiveSupported = false;
        }
    }
    // an identifier to tell ZoneTask do not create a new invoke closure
    const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
    };
    const zoneSymbolEventNames$1 = {};
    const globalSources = {};
    const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
    function patchEventTarget(_global, apis, patchOptions) {
        const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
        const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
        const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
        const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
        const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        const PREPEND_EVENT_LISTENER = 'prependListener';
        const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
        const invokeTask = function (task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
                return;
            }
            const delegate = task.callback;
            if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = (event) => delegate.handleEvent(event);
                task.originalDelegate = delegate;
            }
            // invoke static task.invoke
            task.invoke(task, target, [event]);
            const options = task.options;
            if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = false
        const globalZoneAwareCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            const target = this || event.target || _global;
            const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    const copyTasks = tasks.slice();
                    for (let i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = true
        const globalZoneAwareCaptureCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            const target = this || event.target || _global;
            const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    const copyTasks = tasks.slice();
                    for (let i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
                return false;
            }
            let useGlobalCallback = true;
            if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
            }
            const validateHandler = patchOptions && patchOptions.vh;
            let checkDuplicate = true;
            if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
            }
            let returnTarget = false;
            if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
            }
            let proto = obj;
            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = ObjectGetPrototypeOf(proto);
            }
            if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
            }
            if (!proto) {
                return false;
            }
            if (proto[zoneSymbolAddEventListener]) {
                return false;
            }
            const eventNameToString = patchOptions && patchOptions.eventNameToString;
            // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data
            const taskData = {};
            const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER];
            const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER];
            const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            let nativePrependEventListener;
            if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                    proto[patchOptions.prepend];
            }
            function checkIsPassive(task) {
                if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                    typeof taskData.options !== 'undefined' && taskData.options !== null) {
                    // options is a non-null non-undefined object
                    // passive is not supported
                    // don't pass options as object
                    // just pass capture as a boolean
                    task.options = !!taskData.options.capture;
                    taskData.options = task.options;
                }
            }
            const customScheduleGlobal = function (task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                    return;
                }
                checkIsPassive(task);
                return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };
            const customCancelGlobal = function (task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                    const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                    let symbolEventName;
                    if (symbolEventNames) {
                        symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                    }
                    const existingTasks = symbolEventName && task.target[symbolEventName];
                    if (existingTasks) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            const existingTask = existingTasks[i];
                            if (existingTask === task) {
                                existingTasks.splice(i, 1);
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = true;
                                if (existingTasks.length === 0) {
                                    // all tasks for the eventName + capture have gone,
                                    // remove globalZoneAwareCallback and remove the task cache from target
                                    task.allRemoved = true;
                                    task.target[symbolEventName] = null;
                                }
                                break;
                            }
                        }
                    }
                }
                // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return
                if (!task.allRemoved) {
                    return;
                }
                return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };
            const customScheduleNonGlobal = function (task) {
                checkIsPassive(task);
                return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            const customSchedulePrepend = function (task) {
                return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            const customCancelNonGlobal = function (task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };
            const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
            const compareTaskCallbackVsDelegate = function (task, delegate) {
                const typeOfDelegate = typeof delegate;
                return (typeOfDelegate === 'function' && task.callback === delegate) ||
                    (typeOfDelegate === 'object' && task.originalDelegate === delegate);
            };
            const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
            const blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];
            const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
                return function () {
                    const target = this || _global;
                    let eventName = arguments[0];
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    let delegate = arguments[1];
                    if (!delegate) {
                        return nativeListener.apply(this, arguments);
                    }
                    if (isNode && eventName === 'uncaughtException') {
                        // don't patch uncaughtException of nodejs to prevent endless loop
                        return nativeListener.apply(this, arguments);
                    }
                    // don't create the bind delegate function for handleEvent
                    // case here to improve addEventListener performance
                    // we will create the bind delegate when invoke
                    let isHandleEvent = false;
                    if (typeof delegate !== 'function') {
                        if (!delegate.handleEvent) {
                            return nativeListener.apply(this, arguments);
                        }
                        isHandleEvent = true;
                    }
                    if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                        return;
                    }
                    const options = arguments[2];
                    if (blackListedEvents) {
                        // check black list
                        for (let i = 0; i < blackListedEvents.length; i++) {
                            if (eventName === blackListedEvents[i]) {
                                return nativeListener.apply(this, arguments);
                            }
                        }
                    }
                    let capture;
                    let once = false;
                    if (options === undefined) {
                        capture = false;
                    }
                    else if (options === true) {
                        capture = true;
                    }
                    else if (options === false) {
                        capture = false;
                    }
                    else {
                        capture = options ? !!options.capture : false;
                        once = options ? !!options.once : false;
                    }
                    const zone = Zone.current;
                    const symbolEventNames = zoneSymbolEventNames$1[eventName];
                    let symbolEventName;
                    if (!symbolEventNames) {
                        // the code is duplicate, but I just want to get some better performance
                        const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                        const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                        zoneSymbolEventNames$1[eventName] = {};
                        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                        symbolEventName = capture ? symbolCapture : symbol;
                    }
                    else {
                        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                    }
                    let existingTasks = target[symbolEventName];
                    let isExisting = false;
                    if (existingTasks) {
                        // already have task registered
                        isExisting = true;
                        if (checkDuplicate) {
                            for (let i = 0; i < existingTasks.length; i++) {
                                if (compare(existingTasks[i], delegate)) {
                                    // same callback, same capture, same event name, just return
                                    return;
                                }
                            }
                        }
                    }
                    else {
                        existingTasks = target[symbolEventName] = [];
                    }
                    let source;
                    const constructorName = target.constructor['name'];
                    const targetSource = globalSources[constructorName];
                    if (targetSource) {
                        source = targetSource[eventName];
                    }
                    if (!source) {
                        source = constructorName + addSource +
                            (eventNameToString ? eventNameToString(eventName) : eventName);
                    }
                    // do not create a new object as task.data to pass those things
                    // just use the global shared one
                    taskData.options = options;
                    if (once) {
                        // if addEventListener with once options, we don't pass it to
                        // native addEventListener, instead we keep the once setting
                        // and handle ourselves.
                        taskData.options.once = false;
                    }
                    taskData.target = target;
                    taskData.capture = capture;
                    taskData.eventName = eventName;
                    taskData.isExisting = isExisting;
                    const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                    // keep taskData into data to allow onScheduleEventTask to access the task information
                    if (data) {
                        data.taskData = taskData;
                    }
                    const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                    // should clear taskData.target to avoid memory leak
                    // issue, https://github.com/angular/angular/issues/20442
                    taskData.target = null;
                    // need to clear up taskData because it is a global object
                    if (data) {
                        data.taskData = null;
                    }
                    // have to save those information to task in case
                    // application may call task.zone.cancelTask() directly
                    if (once) {
                        options.once = true;
                    }
                    if (!(!passiveSupported && typeof task.options === 'boolean')) {
                        // if not support passive, and we pass an option object
                        // to addEventListener, we should save the options to task
                        task.options = options;
                    }
                    task.target = target;
                    task.capture = capture;
                    task.eventName = eventName;
                    if (isHandleEvent) {
                        // save original delegate for compare to check duplicate
                        task.originalDelegate = delegate;
                    }
                    if (!prepend) {
                        existingTasks.push(task);
                    }
                    else {
                        existingTasks.unshift(task);
                    }
                    if (returnTarget) {
                        return target;
                    }
                };
            };
            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
            if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }
            proto[REMOVE_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const options = arguments[2];
                let capture;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                }
                const delegate = arguments[1];
                if (!delegate) {
                    return nativeRemoveEventListener.apply(this, arguments);
                }
                if (validateHandler &&
                    !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                    return;
                }
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (compare(existingTask, delegate)) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            existingTask.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = true;
                                target[symbolEventName] = null;
                                // in the target, we have an event listener which is added by on_property
                                // such as target.onclick = function() {}, so we need to clear this internal
                                // property too if all delegates all removed
                                if (typeof eventName === 'string') {
                                    const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                    target[onPropertySymbol] = null;
                                }
                            }
                            existingTask.zone.cancelTask(existingTask);
                            if (returnTarget) {
                                return target;
                            }
                            return;
                        }
                    }
                }
                // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.
                return nativeRemoveEventListener.apply(this, arguments);
            };
            proto[LISTENERS_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const listeners = [];
                const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                for (let i = 0; i < tasks.length; i++) {
                    const task = tasks[i];
                    let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    listeners.push(delegate);
                }
                return listeners;
            };
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (!eventName) {
                    const keys = Object.keys(target);
                    for (let i = 0; i < keys.length; i++) {
                        const prop = keys[i];
                        const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                        let evtName = match && match[1];
                        // in nodejs EventEmitter, removeListener event is
                        // used for monitoring the removeListener call,
                        // so just keep removeListener eventListener until
                        // all other eventListeners are removed
                        if (evtName && evtName !== 'removeListener') {
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                        }
                    }
                    // remove removeListener listener finally
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                }
                else {
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    const symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (symbolEventNames) {
                        const symbolEventName = symbolEventNames[FALSE_STR];
                        const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                        const tasks = target[symbolEventName];
                        const captureTasks = target[symbolCaptureEventName];
                        if (tasks) {
                            const removeTasks = tasks.slice();
                            for (let i = 0; i < removeTasks.length; i++) {
                                const task = removeTasks[i];
                                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                        if (captureTasks) {
                            const removeTasks = captureTasks.slice();
                            for (let i = 0; i < removeTasks.length; i++) {
                                const task = removeTasks[i];
                                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                    }
                }
                if (returnTarget) {
                    return this;
                }
            };
            // for native toString patch
            attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
            if (nativeRemoveAllListeners) {
                attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }
            if (nativeListeners) {
                attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }
            return true;
        }
        let results = [];
        for (let i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }
        return results;
    }
    function findEventTasks(target, eventName) {
        const foundTasks = [];
        for (let prop in target) {
            const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            let evtName = match && match[1];
            if (evtName && (!eventName || evtName === eventName)) {
                const tasks = target[prop];
                if (tasks) {
                    for (let i = 0; i < tasks.length; i++) {
                        foundTasks.push(tasks[i]);
                    }
                }
            }
        }
        return foundTasks;
    }
    function patchEventPrototype(global, api) {
        const Event = global['Event'];
        if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not
                delegate && delegate.apply(self, args);
            });
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCallbacks(api, target, targetName, method, callbacks) {
        const symbol = Zone.__symbol__(method);
        if (target[symbol]) {
            return;
        }
        const nativeDelegate = target[symbol] = target[method];
        target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    const source = `${targetName}.${method}::` + callback;
                    const prototype = opts.prototype;
                    if (prototype.hasOwnProperty(callback)) {
                        const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                            api._redefineProperty(opts.prototype, callback, descriptor);
                        }
                        else if (prototype[callback]) {
                            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                        }
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                });
            }
            return nativeDelegate.call(target, name, opts, options);
        };
        api.attachOriginToPatched(target[method], nativeDelegate);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const globalEventHandlersEventNames = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
    ];
    const documentEventNames = [
        'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
        'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
        'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
        'visibilitychange', 'resume'
    ];
    const windowEventNames = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplyconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
    ];
    const htmlElementEventNames = [
        'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
        'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
        'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
    ];
    const mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    const ieElementEventNames = [
        'activate',
        'afterupdate',
        'ariarequest',
        'beforeactivate',
        'beforedeactivate',
        'beforeeditfocus',
        'beforeupdate',
        'cellchange',
        'controlselect',
        'dataavailable',
        'datasetchanged',
        'datasetcomplete',
        'errorupdate',
        'filterchange',
        'layoutcomplete',
        'losecapture',
        'move',
        'moveend',
        'movestart',
        'propertychange',
        'resizeend',
        'resizestart',
        'rowenter',
        'rowexit',
        'rowsdelete',
        'rowsinserted',
        'command',
        'compassneedscalibration',
        'deactivate',
        'help',
        'mscontentzoom',
        'msmanipulationstatechanged',
        'msgesturechange',
        'msgesturedoubletap',
        'msgestureend',
        'msgesturehold',
        'msgesturestart',
        'msgesturetap',
        'msgotpointercapture',
        'msinertiastart',
        'mslostpointercapture',
        'mspointercancel',
        'mspointerdown',
        'mspointerenter',
        'mspointerhover',
        'mspointerleave',
        'mspointermove',
        'mspointerout',
        'mspointerover',
        'mspointerup',
        'pointerout',
        'mssitemodejumplistitemremoved',
        'msthumbnailclick',
        'stop',
        'storagecommit'
    ];
    const webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    const formEventNames = ['autocomplete', 'autocompleteerror'];
    const detailEventNames = ['toggle'];
    const frameEventNames = ['load'];
    const frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    const marqueeEventNames = ['bounce', 'finish', 'start'];
    const XMLHttpRequestEventNames = [
        'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
        'readystatechange'
    ];
    const IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    const websocketEventNames = ['close', 'error', 'open', 'message'];
    const workerEventNames = ['error', 'message'];
    const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
        }
        const tip = ignoreProperties.filter(ip => ip.target === target);
        if (!tip || tip.length === 0) {
            return onProperties;
        }
        const targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
    }
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
            return;
        }
        const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
    }
    function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
            return;
        }
        if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
        }
        const supportsWebSocket = typeof WebSocket !== 'undefined';
        const ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            const internalWindow = window;
            const ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            const HTMLMarqueeElement = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement) {
                patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
            }
            const Worker = internalWindow['Worker'];
            if (Worker) {
                patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
            }
        }
        const XMLHttpRequest = _global['XMLHttpRequest'];
        if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        const XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('util', (global, Zone, api) => {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask;
        // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.
        const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
        const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
        if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }
        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
        }
        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;
        api.getGlobalObjects = () => ({ globalSources, zoneSymbolEventNames: zoneSymbolEventNames$1, eventNames, isBrowser, isMix, isNode, TRUE_STR,
            FALSE_STR, ZONE_SYMBOL_PREFIX, ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR });
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const taskSymbol = zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
        let setNative = null;
        let clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        const tasksByHandleId = {};
        function scheduleTask(task) {
            const data = task.data;
            function timer() {
                try {
                    task.invoke.apply(this, arguments);
                }
                finally {
                    // issue-934, task will be cancelled
                    // even it is a periodic task such as
                    // setInterval
                    if (!(task.data && task.data.isPeriodic)) {
                        if (typeof data.handleId === 'number') {
                            // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[data.handleId];
                        }
                        else if (data.handleId) {
                            // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            data.handleId[taskSymbol] = null;
                        }
                    }
                }
            }
            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            return task;
        }
        function clearTask(task) { return clearNative(task.data.handleId); }
        setNative =
            patchMethod(window, setName, (delegate) => function (self, args) {
                if (typeof args[0] === 'function') {
                    const options = {
                        isPeriodic: nameSuffix === 'Interval',
                        delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                            undefined,
                        args: args
                    };
                    const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    const handle = task.data.handleId;
                    if (typeof handle === 'number') {
                        // for non nodejs env, we save handleId: task
                        // mapping in local cache for clearTimeout
                        tasksByHandleId[handle] = task;
                    }
                    else if (handle) {
                        // for nodejs env, we save task
                        // reference in timerId Object for clearTimeout
                        handle[taskSymbol] = task;
                    }
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                        typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    if (typeof handle === 'number' || handle) {
                        return handle;
                    }
                    return task;
                }
                else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            });
        clearNative =
            patchMethod(window, cancelName, (delegate) => function (self, args) {
                const id = args[0];
                let task;
                if (typeof id === 'number') {
                    // non nodejs env.
                    task = tasksByHandleId[id];
                }
                else {
                    // nodejs env.
                    task = id && id[taskSymbol];
                    // other environments.
                    if (!task) {
                        task = id;
                    }
                }
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' &&
                        (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        if (typeof id === 'number') {
                            delete tasksByHandleId[id];
                        }
                        else if (id) {
                            id[taskSymbol] = null;
                        }
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                }
                else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            });
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCustomElements(_global, api) {
        const { isBrowser, isMix } = api.getGlobalObjects();
        if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
            return;
        }
        const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
        }
        const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (let i = 0; i < eventNames.length; i++) {
            const eventName = eventNames[i];
            const falseEventName = eventName + FALSE_STR;
            const trueEventName = eventName + TRUE_STR;
            const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        const EVENT_TARGET = _global['EventTarget'];
        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
        }
        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
    }
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('legacy', (global) => {
        const legacyPatch = global[Zone.__symbol__('legacyPatch')];
        if (legacyPatch) {
            legacyPatch();
        }
    });
    Zone.__load_patch('timers', (global) => {
        const set = 'set';
        const clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', (global) => {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', (global, Zone) => {
        const blockingMethods = ['alert', 'prompt', 'confirm'];
        for (let i = 0; i < blockingMethods.length; i++) {
            const name = blockingMethods[i];
            patchMethod(global, name, (delegate, symbol, name) => {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', (global, Zone, api) => {
        patchEvent(global, api);
        eventTargetPatch(global, api);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
    });
    Zone.__load_patch('on_property', (global, Zone, api) => {
        propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', (global, Zone, api) => {
        patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', (global, Zone) => {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        const XHR_TASK = zoneSymbol('xhrTask');
        const XHR_SYNC = zoneSymbol('xhrSync');
        const XHR_LISTENER = zoneSymbol('xhrListener');
        const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        const XHR_URL = zoneSymbol('xhrURL');
        const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
        function patchXHR(window) {
            const XMLHttpRequest = window['XMLHttpRequest'];
            if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
            }
            const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            function findPendingTask(target) { return target[XHR_TASK]; }
            let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            if (!oriAddListener) {
                const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget) {
                    const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                    oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
            }
            const READY_STATE_CHANGE = 'readystatechange';
            const SCHEDULED = 'scheduled';
            function scheduleTask(task) {
                const data = task.data;
                const target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                // remove existing event listener
                const listener = target[XHR_LISTENER];
                if (!oriAddListener) {
                    oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
                if (listener) {
                    oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }
                const newListener = target[XHR_LISTENER] = () => {
                    if (target.readyState === target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                            // check whether the xhr has registered onload listener
                            // if that is the case, the task should invoke after all
                            // onload listeners finish.
                            const loadTasks = target[Zone.__symbol__('loadfalse')];
                            if (loadTasks && loadTasks.length > 0) {
                                const oriInvoke = task.invoke;
                                task.invoke = function () {
                                    // need to load the tasks again, because in other
                                    // load listener, they may remove themselves
                                    const loadTasks = target[Zone.__symbol__('loadfalse')];
                                    for (let i = 0; i < loadTasks.length; i++) {
                                        if (loadTasks[i] === task) {
                                            loadTasks.splice(i, 1);
                                        }
                                    }
                                    if (!data.aborted && task.state === SCHEDULED) {
                                        oriInvoke.call(task);
                                    }
                                };
                                loadTasks.push(task);
                            }
                            else {
                                task.invoke();
                            }
                        }
                        else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                        }
                    }
                };
                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                const storedTask = target[XHR_TASK];
                if (!storedTask) {
                    target[XHR_TASK] = task;
                }
                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() { }
            function clearTask(task) {
                const data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            });
            const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
            const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
            const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                }
                if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                }
                else {
                    const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                    const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                        task.state === SCHEDULED) {
                        // xhr request throw error when send
                        // we should invoke task instead of leaving a scheduled
                        // pending macroTask
                        task.invoke();
                    }
                }
            });
            const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
                const task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                        return;
                    }
                    task.zone.cancelTask(task);
                }
                else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                }
                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.
            });
        }
    });
    Zone.__load_patch('geolocation', (global) => {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                const eventTasks = findEventTasks(global, evtName);
                eventTasks.forEach(eventTask => {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
                findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] =
                findPromiseRejectionHandler('rejectionhandled');
        }
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

}));


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let AppComponent = class AppComponent {
    constructor(swPush, authService) {
        this.swPush = swPush;
        this.authService = authService;
        this.fetchUrlPath();
    }
    fetchUrlPath() {
        const path = window.location.pathname;
        localStorage.setItem('path', path);
    }
    subscribeToNotifications() {
        this.swPush.requestSubscription({
            serverPublicKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].NOTIFICATION_KEY
        }).then(res => {
            this.authService.onSubscribeToNotification(res).subscribe(status => {
                console.log('====================================');
                console.log(status);
                console.log('====================================');
            });
        }).catch(rej => {
            console.error('====================================');
            console.error(rej);
            console.error('====================================');
        });
    }
    ngOnInit() {
        this.auth$ = this.authService.user$.subscribe(user => {
            if (user) {
                this.subscribeToNotifications();
            }
        });
    }
    ngOnDestroy() {
        if (this.auth$) {
            this.auth$.unsubscribe();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _alyle_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @alyle/ui */ "./node_modules/@alyle/ui/__ivy_ngcc__/fesm2015/alyle-ui.js");
/* harmony import */ var _alyle_ui_themes_minima__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @alyle/ui/themes/minima */ "./node_modules/@alyle/ui/__ivy_ngcc__/fesm2015/alyle-ui-themes-minima.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/http/interceptor.service */ "./src/app/services/http/interceptor.service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _alyle_ui__WEBPACK_IMPORTED_MODULE_6__["LyThemeModule"].setTheme('minima-light'),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ],
        providers: [
            { provide: _alyle_ui__WEBPACK_IMPORTED_MODULE_6__["LY_THEME"], useClass: _alyle_ui_themes_minima__WEBPACK_IMPORTED_MODULE_7__["MinimaLight"], multi: true },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["DataInterceptor"],
                multi: true
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");
/* harmony import */ var _services_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/unauth.guard */ "./src/app/services/guards/unauth.guard.ts");





const routes = [
    {
        path: '',
        canActivate: [_services_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_4__["UnAuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | components-container-landing-landing-module */ "components-container-landing-landing-module").then(__webpack_require__.bind(null, /*! ./components/container/landing/landing.module */ "./src/app/components/container/landing/landing.module.ts")).then(module => module.LandingModule)
    },
    {
        path: 'main',
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | components-container-main-main-module */ "components-container-main-main-module").then(__webpack_require__.bind(null, /*! ./components/container/main/main.module */ "./src/app/components/container/main/main.module.ts")).then(module => module.MainModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_4__["UnAuthGuard"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n}\n:host .unauth-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n:host .unauth-container p {\n  color: #54a0ff;\n  font-style: italic;\n  font-weight: bold;\n}\n:host .mat-toolbar {\n  background: transparent;\n}\n:host .logo {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n:host .logo__icon {\n  margin: 0 0.3rem;\n  -webkit-animation: ease-out-right 0.6s ease-out;\n          animation: ease-out-right 0.6s ease-out;\n}\n:host .logo__text {\n  font-family: \"Noto-Sans\";\n}\n:host .app-content {\n  height: calc(100vh - 5.6rem);\n  width: 100vw;\n}\n:host .mat-nav-list-content {\n  font-family: \"Noto-Sans\" !important;\n}\n:host .sidenav-container {\n  height: 100%;\n}\n:host .sidenav {\n  width: 200px;\n}\n:host .sidenav .mat-toolbar {\n  background: inherit;\n}\n:host .mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n@-webkit-keyframes slide-in-top-logo {\n  0% {\n    transform: translateY(-10vh) translateX(-50%);\n  }\n  80% {\n    transform: translateY(0) translateX(-50%);\n  }\n  100% {\n    transform: translateY(0) translateX(-50%);\n  }\n}\n@keyframes slide-in-top-logo {\n  0% {\n    transform: translateY(-10vh) translateX(-50%);\n  }\n  80% {\n    transform: translateY(0) translateX(-50%);\n  }\n  100% {\n    transform: translateY(0) translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXNzZXRzL3Njc3MvX21peGluLnNjc3MiLCIvVXNlcnMvdHphY2hib25maWwvUHJvamVjdHMvY2hhdC1tZS1hcHAvc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0FDRkY7QURJRTtFRWNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFRmZFLGtCQUFBO0FDQ0o7QURDSTtFQUNFLGNHWEk7RUhZSixrQkFBQTtFQUNBLGlCQUFBO0FDQ047QURLRTtFQUNFLHVCQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDSko7QURNSTtFQUNFLGdCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0pOO0FEUUk7RUFDRSx3QkFBQTtBQ05OO0FEVUU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNSSjtBRFdFO0VBQ0UsbUNBQUE7QUNUSjtBRFlFO0VBQ0UsWUFBQTtBQ1ZKO0FEY0U7RUFDRSxZQUFBO0FDWko7QURlRTtFQUNFLG1CQUFBO0FDYko7QURnQkU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNkSjtBRG1CQTtFQUNFO0lBQ0UsNkNBQUE7RUNoQkY7RURvQkE7SUFDRSx5Q0FBQTtFQ2xCRjtFRHFCQTtJQUNFLHlDQUFBO0VDbkJGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsNkNBQUE7RUNoQkY7RURvQkE7SUFDRSx5Q0FBQTtFQ2xCRjtFRHFCQTtJQUNFLHlDQUFBO0VDbkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy9taXhpbic7XG5AaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvY29sb3JzJztcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnVuYXV0aC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uLWNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yICAgICAgOiAkcHJpbWFyeTtcbiAgICAgIGZvbnQtc3R5bGUgOiBpdGFsaWM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIH1cbiAgfVxuXG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGxlZnQgICAgIDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICZfX2ljb24ge1xuICAgICAgbWFyZ2luICAgOiAwIC4zcmVtO1xuICAgICAgYW5pbWF0aW9uOiBlYXNlLW91dC1yaWdodCAuNnMgZWFzZS1vdXQ7XG5cbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTm90by1TYW5zJztcbiAgICB9XG4gIH1cblxuICAuYXBwLWNvbnRlbnQge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUuNnJlbSk7XG4gICAgd2lkdGggOiAxMDB2dztcbiAgfVxuXG4gIC5tYXQtbmF2LWxpc3QtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvLVNhbnMnICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcblxuICB9XG5cbiAgLnNpZGVuYXYge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3AgICAgIDogMDtcbiAgICB6LWluZGV4IDogMTtcbiAgfVxuXG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdG9wLWxvZ28ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHZoKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIDtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICA7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnVuYXV0aC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAudW5hdXRoLWNvbnRhaW5lciBwIHtcbiAgY29sb3I6ICM1NGEwZmY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbjpob3N0IC5sb2dvX19pY29uIHtcbiAgbWFyZ2luOiAwIDAuM3JlbTtcbiAgYW5pbWF0aW9uOiBlYXNlLW91dC1yaWdodCAwLjZzIGVhc2Utb3V0O1xufVxuOmhvc3QgLmxvZ29fX3RleHQge1xuICBmb250LWZhbWlseTogXCJOb3RvLVNhbnNcIjtcbn1cbjpob3N0IC5hcHAtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUuNnJlbSk7XG4gIHdpZHRoOiAxMDB2dztcbn1cbjpob3N0IC5tYXQtbmF2LWxpc3QtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8tU2Fuc1wiICFpbXBvcnRhbnQ7XG59XG46aG9zdCAuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbjpob3N0IC5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG46aG9zdCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdG9wLWxvZ28ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHZoKSB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbn0iLCJAbWl4aW4gaG9zdCB7XG4gIHdpZHRoICA6IDEwMCU7XG4gIGhlaWdodCA6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlciB7XG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudCAgOiBjZW50ZXI7XG59XG5cbkBtaXhpbiBmbGV4LXJvdy1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBwb3NpdGlvbi1jZW50ZXIge1xuICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICB0b3AgICAgICA6IDUwJTtcbiAgbGVmdCAgICAgOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5cbkBtaXhpbiByZWd1bGFyLWNtcCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUuNnJlbSk7XG59XG5cblxuQG1peGluIGxhbmRpbmctY21wIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiIsIiRwcmltYXJ5OiAjNTRhMGZmO1xuJGFjY2VudDogIzFmMjUzNDtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");





let NavigationComponent = class NavigationComponent {
    constructor(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    ngOnInit() {
        this.initAuth();
    }
    initAuth() {
        this.isAuth$ = this.authService.user$.subscribe(isAuth => {
            this.isAuth = isAuth;
        });
    }
    ngOnDestroy() {
        if (this.isAuth$) {
            this.isAuth$.unsubscribe();
        }
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.user);
    }
    setUser(user) {
        this.user = user;
        this.userHasChanged();
    }
    getUser() {
        return this.user;
    }
    userHasChanged() {
        this.user$.next(this.user);
    }
    onSignIn(email, password) {
        this.removeToken();
        return this.http.signIn(email, password);
    }
    onSignUp(user) {
        this.removeToken();
        return this.http.signUp(user);
    }
    onSignOut() {
        localStorage.clear();
        this.user = null;
        this.userHasChanged();
    }
    getToken() {
        return localStorage.getItem('token');
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    removeToken() {
        localStorage.removeItem('token');
    }
    onSubscribeToNotification(subscription) {
        return this.http.subscription(subscription, this.getUser()._id);
    }
};
AuthService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getUser();
        if (!isAuth) {
            this.router.navigate(['/']);
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/guards/unauth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/services/guards/unauth.guard.ts ***!
  \*************************************************/
/*! exports provided: UnAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAuthGuard", function() { return UnAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let UnAuthGuard = class UnAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getUser();
        if (isAuth) {
            this.router.navigate(['/main']);
        }
        return true;
    }
};
UnAuthGuard.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
UnAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], UnAuthGuard);



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    signUp(user) {
        return this.http.post('user/sign-up', user);
    }
    signIn(email, password) {
        return this.http.post('user/sign-in', { email, password });
    }
    getUsers(name) {
        return this.http.get(`user/${name}`);
    }
    createGroup(group) {
        return this.http.post(`group/add-group`, { group });
    }
    getGroups(id) {
        return this.http.get(`group/${id}`);
    }
    getImages(images) {
        return this.http.post(`image`, { images });
    }
    getMessages(groupId, userId) {
        return this.http.get(`group/messages/${groupId}/${userId}`);
    }
    sendMessage(groupId, message) {
        return this.http.post(`group/send-message`, { groupId, message });
    }
    getImage(imageId) {
        return this.http.get(`image/${imageId}`);
    }
    subscription(subscription, userId) {
        return this.http.post(`user/subscription`, { subscription, userId });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/services/http/interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http/interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: DataInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInterceptor", function() { return DataInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");




let DataInterceptor = class DataInterceptor {
    constructor(as) {
        this.as = as;
    }
    intercept(req, next) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].REST_URL}/${req.url}`;
        const token = this.as.getToken();
        let reqClone;
        if (token) {
            reqClone = req.clone({
                url,
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }
        else {
            reqClone = req.clone({
                url
            });
        }
        return next.handle(reqClone);
    }
};
DataInterceptor.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
DataInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataInterceptor);



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/tree.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");













/**
 * NgModule that includes all Material modules.
*/
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
            // Material
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_dynamic_form_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dynamic-form-creator */ "./node_modules/ngx-dynamic-form-creator/__ivy_ngcc__/fesm2015/ngx-dynamic-form-creator.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ui_lines_lines_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/lines/lines.component */ "./src/app/shared/ui/lines/lines.component.ts");
/* harmony import */ var _ui_polygons_polygons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/polygons/polygons.component */ "./src/app/shared/ui/polygons/polygons.component.ts");
/* harmony import */ var _ui_polygon_loader_polygon_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/polygon-loader/polygon-loader.component */ "./src/app/shared/ui/polygon-loader/polygon-loader.component.ts");
/* harmony import */ var _ui_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/upload-image/upload-image.component */ "./src/app/shared/ui/upload-image/upload-image.component.ts");











let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ui_lines_lines_component__WEBPACK_IMPORTED_MODULE_7__["LinesComponent"], _ui_polygons_polygons_component__WEBPACK_IMPORTED_MODULE_8__["PolygonsComponent"], _ui_polygon_loader_polygon_loader_component__WEBPACK_IMPORTED_MODULE_9__["PolygonLoaderComponent"], _ui_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_10__["UploadImageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_dynamic_form_creator__WEBPACK_IMPORTED_MODULE_5__["NgxDynamicFormCreatorModule"]
        ], exports: [
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_dynamic_form_creator__WEBPACK_IMPORTED_MODULE_5__["NgxDynamicFormCreatorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ui_lines_lines_component__WEBPACK_IMPORTED_MODULE_7__["LinesComponent"],
            _ui_polygons_polygons_component__WEBPACK_IMPORTED_MODULE_8__["PolygonsComponent"],
            _ui_polygon_loader_polygon_loader_component__WEBPACK_IMPORTED_MODULE_9__["PolygonLoaderComponent"],
            _ui_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_10__["UploadImageComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/ui/lines/lines.component.scss":
/*!******************************************************!*\
  !*** ./src/app/shared/ui/lines/lines.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".line-1 {\n  top: 30%;\n}\n\n.line-2 {\n  top: 20%;\n}\n\n.line-3 {\n  top: 10%;\n}\n\n.line-1,\n.line-2,\n.line-3 {\n  position: fixed;\n  height: 150rem;\n  width: 5rem;\n  transform: rotate(45deg);\n  background: linear-gradient(to bottom left, rgba(255, 255, 255, 0), #2184ff);\n  -webkit-animation: get-longer 3s linear forwards;\n          animation: get-longer 3s linear forwards;\n}\n\n@-webkit-keyframes get-longer {\n  0% {\n    transform: rotate(45deg) scaleY(0);\n  }\n  100% {\n    transform: rotate(45deg) scaleY(2);\n  }\n}\n\n@keyframes get-longer {\n  0% {\n    transform: rotate(45deg) scaleY(0);\n  }\n  100% {\n    transform: rotate(45deg) scaleY(2);\n  }\n}\n\n@media (min-width: 501px) {\n  .line-1,\n.line-2,\n.line-3 {\n    margin-top: 20rem;\n    right: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXBwL3NoYXJlZC91aS9saW5lcy9saW5lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpL2xpbmVzL2xpbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsUUFBQTtBQ0pGOztBRE9BO0VBQ0UsUUFBQTtBQ0pGOztBRFFBO0VBQ0UsUUFBQTtBQ0xGOztBRFFBOzs7RUFJRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDRFQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQ05GOztBRFNBO0VBQ0U7SUFDRSxrQ0FBQTtFQ05GO0VEU0E7SUFDRSxrQ0FBQTtFQ1BGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLGtDQUFBO0VDTkY7RURTQTtJQUNFLGtDQUFBO0VDUEY7QUFDRjs7QURXQTtFQUVFOzs7SUFHRSxpQkFBQTtJQUNBLFVBQUE7RUNWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpL2xpbmVzL2xpbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XG5cblxuXG5cbi5saW5lLTEge1xuICB0b3A6IDMwJTtcbn1cblxuLmxpbmUtMiB7XG4gIHRvcDogMjAlO1xuXG59XG5cbi5saW5lLTMge1xuICB0b3A6IDEwJTtcbn1cblxuLmxpbmUtMSxcbi5saW5lLTIsXG4ubGluZS0zIHtcblxuICBwb3NpdGlvbiAgOiBmaXhlZDtcbiAgaGVpZ2h0ICAgIDogMTUwcmVtO1xuICB3aWR0aCAgICAgOiA1cmVtO1xuICB0cmFuc2Zvcm0gOiByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIGRhcmtlbigkcHJpbWFyeSwgMTApKTtcbiAgYW5pbWF0aW9uIDogZ2V0LWxvbmdlciAzcyBsaW5lYXIgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZ2V0LWxvbmdlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGVZKDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlWSgyKTtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuXG4gIC5saW5lLTEsXG4gIC5saW5lLTIsXG4gIC5saW5lLTMge1xuICAgIG1hcmdpbi10b3A6IDIwcmVtO1xuICAgIHJpZ2h0ICAgICA6IDIwJTtcbiAgfVxufVxuIiwiLmxpbmUtMSB7XG4gIHRvcDogMzAlO1xufVxuXG4ubGluZS0yIHtcbiAgdG9wOiAyMCU7XG59XG5cbi5saW5lLTMge1xuICB0b3A6IDEwJTtcbn1cblxuLmxpbmUtMSxcbi5saW5lLTIsXG4ubGluZS0zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDE1MHJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAjMjE4NGZmKTtcbiAgYW5pbWF0aW9uOiBnZXQtbG9uZ2VyIDNzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBnZXQtbG9uZ2VyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlWSgyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSB7XG4gIC5saW5lLTEsXG4ubGluZS0yLFxuLmxpbmUtMyB7XG4gICAgbWFyZ2luLXRvcDogMjByZW07XG4gICAgcmlnaHQ6IDIwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/ui/lines/lines.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/ui/lines/lines.component.ts ***!
  \****************************************************/
/*! exports provided: LinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesComponent", function() { return LinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LinesComponent = class LinesComponent {
    constructor() { }
    ngOnInit() {
    }
};
LinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lines',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/lines/lines.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lines.component.scss */ "./src/app/shared/ui/lines/lines.component.scss")).default]
    })
], LinesComponent);



/***/ }),

/***/ "./src/app/shared/ui/polygon-loader/polygon-loader.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/ui/polygon-loader/polygon-loader.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host .cssload-preloader {\n  position: absolute;\n  left: 50%;\n  font-size: 19px;\n  display: block;\n  width: 3.75em;\n  height: 4.25em;\n  margin-left: -1.875em;\n  margin-top: -2.125em;\n  transform-origin: center center;\n  -o-transform-origin: center center;\n  -ms-transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  transform: rotateY(180deg) rotateZ(-60deg);\n  -o-transform: rotateY(180deg) rotateZ(-60deg);\n  -ms-transform: rotateY(180deg) rotateZ(-60deg);\n  -webkit-transform: rotateY(180deg) rotateZ(-60deg);\n  -moz-transform: rotateY(180deg) rotateZ(-60deg);\n}\n:host .cssload-preloader .cssload-slice {\n  border-top: 1.125em solid transparent;\n  border-right: none;\n  border-bottom: 1em solid transparent;\n  border-left: 1.875em solid #48b1f7;\n  position: absolute;\n  top: 0px;\n  left: 50%;\n  transform-origin: left bottom;\n  -o-transform-origin: left bottom;\n  -ms-transform-origin: left bottom;\n  -webkit-transform-origin: left bottom;\n  -moz-transform-origin: left bottom;\n  border-radius: 3px 3px 0 0;\n}\n:host .cssload-preloader .cssload-slice:nth-child(1) {\n  transform: rotateZ(60deg) rotateY(0deg) rotateX(0);\n  -o-transform: rotateZ(60deg) rotateY(0deg) rotateX(0);\n  -ms-transform: rotateZ(60deg) rotateY(0deg) rotateX(0);\n  -webkit-transform: rotateZ(60deg) rotateY(0deg) rotateX(0);\n  -moz-transform: rotateZ(60deg) rotateY(0deg) rotateX(0);\n  animation: 0.17s linear 0.94s preload-hide-1 both 1;\n  -o-animation: 0.17s linear 0.94s preload-hide-1 both 1;\n  -ms-animation: 0.17s linear 0.94s preload-hide-1 both 1;\n  -webkit-animation: 0.17s linear 0.94s preload-hide-1 both 1;\n  -moz-animation: 0.17s linear 0.94s preload-hide-1 both 1;\n}\n:host .cssload-preloader .cssload-slice:nth-child(2) {\n  transform: rotateZ(120deg) rotateY(0deg) rotateX(0);\n  -o-transform: rotateZ(120deg) rotateY(0deg) rotateX(0);\n  -ms-transform: rotateZ(120deg) rotateY(0deg) rotateX(0);\n  -webkit-transform: rotateZ(120deg) rotateY(0deg) rotateX(0);\n  -moz-transform: rotateZ(120deg) rotateY(0deg) rotateX(0);\n  animation: 0.17s linear 0.85s preload-hide-2 both 1;\n  -o-animation: 0.17s linear 0.85s preload-hide-2 both 1;\n  -ms-animation: 0.17s linear 0.85s preload-hide-2 both 1;\n  -webkit-animation: 0.17s linear 0.85s preload-hide-2 both 1;\n  -moz-animation: 0.17s linear 0.85s preload-hide-2 both 1;\n}\n:host .cssload-preloader .cssload-slice:nth-child(3) {\n  transform: rotateZ(180deg) rotateY(0deg) rotateX(0);\n  -o-transform: rotateZ(180deg) rotateY(0deg) rotateX(0);\n  -ms-transform: rotateZ(180deg) rotateY(0deg) rotateX(0);\n  -webkit-transform: rotateZ(180deg) rotateY(0deg) rotateX(0);\n  -moz-transform: rotateZ(180deg) rotateY(0deg) rotateX(0);\n  animation: 0.17s linear 0.76s preload-hide-3 both 1;\n  -o-animation: 0.17s linear 0.76s preload-hide-3 both 1;\n  -ms-animation: 0.17s linear 0.76s preload-hide-3 both 1;\n  -webkit-animation: 0.17s linear 0.76s preload-hide-3 both 1;\n  -moz-animation: 0.17s linear 0.76s preload-hide-3 both 1;\n}\n:host .cssload-preloader .cssload-slice:nth-child(4) {\n  transform: rotateZ(240deg) rotateY(0deg) rotateX(0);\n  -o-transform: rotateZ(240deg) rotateY(0deg) rotateX(0);\n  -ms-transform: rotateZ(240deg) rotateY(0deg) rotateX(0);\n  -webkit-transform: rotateZ(240deg) rotateY(0deg) rotateX(0);\n  -moz-transform: rotateZ(240deg) rotateY(0deg) rotateX(0);\n  animation: 0.17s linear 0.67s preload-hide-4 both 1;\n  -o-animation: 0.17s linear 0.67s preload-hide-4 both 1;\n  -ms-animation: 0.17s linear 0.67s preload-hide-4 both 1;\n  -webkit-animation: 0.17s linear 0.67s preload-hide-4 both 1;\n  -moz-animation: 0.17s linear 0.67s preload-hide-4 both 1;\n}\n:host .cssload-preloader .cssload-slice:nth-child(5) {\n  transform: rotateZ(300deg) rotateY(0deg) rotateX(0);\n  -o-transform: rotateZ(300deg) rotateY(0deg) rotateX(0);\n  -ms-transform: rotateZ(300deg) rotateY(0deg) rotateX(0);\n  -webkit-transform: rotateZ(300deg) rotateY(0deg) rotateX(0);\n  -moz-transform: rotateZ(300deg) rotateY(0deg) rotateX(0);\n  animation: 0.17s linear 0.58s preload-hide-5 both 1;\n  -o-animation: 0.17s linear 0.58s preload-hide-5 both 1;\n  -ms-animation: 0.17s linear 0.58s preload-hide-5 both 1;\n  -webkit-animation: 0.17s linear 0.58s preload-hide-5 both 1;\n  -moz-animation: 0.17s linear 0.58s preload-hide-5 both 1;\n}\n:host .cssload-preloader .cssload-slice:nth-child(6) {\n  transform: rotateZ(360deg) rotateY(0deg) rotateX(0);\n  -o-transform: rotateZ(360deg) rotateY(0deg) rotateX(0);\n  -ms-transform: rotateZ(360deg) rotateY(0deg) rotateX(0);\n  -webkit-transform: rotateZ(360deg) rotateY(0deg) rotateX(0);\n  -moz-transform: rotateZ(360deg) rotateY(0deg) rotateX(0);\n  animation: 0.17s linear 0.48s preload-hide-6 both 1;\n  -o-animation: 0.17s linear 0.48s preload-hide-6 both 1;\n  -ms-animation: 0.17s linear 0.48s preload-hide-6 both 1;\n  -webkit-animation: 0.17s linear 0.48s preload-hide-6 both 1;\n  -moz-animation: 0.17s linear 0.48s preload-hide-6 both 1;\n}\n:host .cssload-preloader.cssload-loading {\n  animation: 2.3s preload-flip steps(2) infinite both;\n  -o-animation: 2.3s preload-flip steps(2) infinite both;\n  -ms-animation: 2.3s preload-flip steps(2) infinite both;\n  -webkit-animation: 2.3s preload-flip steps(2) infinite both;\n  -moz-animation: 2.3s preload-flip steps(2) infinite both;\n}\n:host .cssload-preloader.cssload-loading .cssload-slice:nth-child(1) {\n  transform: rotateZ(60deg) rotateY(90deg) rotateX(0);\n  -o-transform: rotateZ(60deg) rotateY(90deg) rotateX(0);\n  -ms-transform: rotateZ(60deg) rotateY(90deg) rotateX(0);\n  -webkit-transform: rotateZ(60deg) rotateY(90deg) rotateX(0);\n  -moz-transform: rotateZ(60deg) rotateY(90deg) rotateX(0);\n  animation: 2.3s preload-cycle-1 linear infinite both;\n  -o-animation: 2.3s preload-cycle-1 linear infinite both;\n  -ms-animation: 2.3s preload-cycle-1 linear infinite both;\n  -webkit-animation: 2.3s preload-cycle-1 linear infinite both;\n  -moz-animation: 2.3s preload-cycle-1 linear infinite both;\n}\n:host .cssload-preloader.cssload-loading .cssload-slice:nth-child(2) {\n  transform: rotateZ(120deg) rotateY(90deg) rotateX(0);\n  -o-transform: rotateZ(120deg) rotateY(90deg) rotateX(0);\n  -ms-transform: rotateZ(120deg) rotateY(90deg) rotateX(0);\n  -webkit-transform: rotateZ(120deg) rotateY(90deg) rotateX(0);\n  -moz-transform: rotateZ(120deg) rotateY(90deg) rotateX(0);\n  animation: 2.3s preload-cycle-2 linear infinite both;\n  -o-animation: 2.3s preload-cycle-2 linear infinite both;\n  -ms-animation: 2.3s preload-cycle-2 linear infinite both;\n  -webkit-animation: 2.3s preload-cycle-2 linear infinite both;\n  -moz-animation: 2.3s preload-cycle-2 linear infinite both;\n}\n:host .cssload-preloader.cssload-loading .cssload-slice:nth-child(3) {\n  transform: rotateZ(180deg) rotateY(90deg) rotateX(0);\n  -o-transform: rotateZ(180deg) rotateY(90deg) rotateX(0);\n  -ms-transform: rotateZ(180deg) rotateY(90deg) rotateX(0);\n  -webkit-transform: rotateZ(180deg) rotateY(90deg) rotateX(0);\n  -moz-transform: rotateZ(180deg) rotateY(90deg) rotateX(0);\n  animation: 2.3s preload-cycle-3 linear infinite both;\n  -o-animation: 2.3s preload-cycle-3 linear infinite both;\n  -ms-animation: 2.3s preload-cycle-3 linear infinite both;\n  -webkit-animation: 2.3s preload-cycle-3 linear infinite both;\n  -moz-animation: 2.3s preload-cycle-3 linear infinite both;\n}\n:host .cssload-preloader.cssload-loading .cssload-slice:nth-child(4) {\n  transform: rotateZ(240deg) rotateY(90deg) rotateX(0);\n  -o-transform: rotateZ(240deg) rotateY(90deg) rotateX(0);\n  -ms-transform: rotateZ(240deg) rotateY(90deg) rotateX(0);\n  -webkit-transform: rotateZ(240deg) rotateY(90deg) rotateX(0);\n  -moz-transform: rotateZ(240deg) rotateY(90deg) rotateX(0);\n  animation: 2.3s preload-cycle-4 linear infinite both;\n  -o-animation: 2.3s preload-cycle-4 linear infinite both;\n  -ms-animation: 2.3s preload-cycle-4 linear infinite both;\n  -webkit-animation: 2.3s preload-cycle-4 linear infinite both;\n  -moz-animation: 2.3s preload-cycle-4 linear infinite both;\n}\n:host .cssload-preloader.cssload-loading .cssload-slice:nth-child(5) {\n  transform: rotateZ(300deg) rotateY(90deg) rotateX(0);\n  -o-transform: rotateZ(300deg) rotateY(90deg) rotateX(0);\n  -ms-transform: rotateZ(300deg) rotateY(90deg) rotateX(0);\n  -webkit-transform: rotateZ(300deg) rotateY(90deg) rotateX(0);\n  -moz-transform: rotateZ(300deg) rotateY(90deg) rotateX(0);\n  animation: 2.3s preload-cycle-5 linear infinite both;\n  -o-animation: 2.3s preload-cycle-5 linear infinite both;\n  -ms-animation: 2.3s preload-cycle-5 linear infinite both;\n  -webkit-animation: 2.3s preload-cycle-5 linear infinite both;\n  -moz-animation: 2.3s preload-cycle-5 linear infinite both;\n}\n:host .cssload-preloader.cssload-loading .cssload-slice:nth-child(6) {\n  transform: rotateZ(360deg) rotateY(90deg) rotateX(0);\n  -o-transform: rotateZ(360deg) rotateY(90deg) rotateX(0);\n  -ms-transform: rotateZ(360deg) rotateY(90deg) rotateX(0);\n  -webkit-transform: rotateZ(360deg) rotateY(90deg) rotateX(0);\n  -moz-transform: rotateZ(360deg) rotateY(90deg) rotateX(0);\n  animation: 2.3s preload-cycle-6 linear infinite both;\n  -o-animation: 2.3s preload-cycle-6 linear infinite both;\n  -ms-animation: 2.3s preload-cycle-6 linear infinite both;\n  -webkit-animation: 2.3s preload-cycle-6 linear infinite both;\n  -moz-animation: 2.3s preload-cycle-6 linear infinite both;\n}\n@keyframes preload-show-1 {\n  from {\n    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@-webkit-keyframes preload-show-1 {\n  from {\n    -webkit-transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@keyframes preload-hide-1 {\n  to {\n    transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@-webkit-keyframes preload-hide-1 {\n  to {\n    -webkit-transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@keyframes preload-cycle-1 {\n  5% {\n    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n  10%, 75% {\n    transform: rotateZ(60deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  80%, 100% {\n    transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@-webkit-keyframes preload-cycle-1 {\n  5% {\n    -webkit-transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n  10%, 75% {\n    -webkit-transform: rotateZ(60deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  80%, 100% {\n    -webkit-transform: rotateZ(60deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@keyframes preload-show-2 {\n  from {\n    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #54a0f5;\n  }\n}\n@-webkit-keyframes preload-show-2 {\n  from {\n    -webkit-transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #54a0f5;\n  }\n}\n@keyframes preload-hide-2 {\n  to {\n    transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@-webkit-keyframes preload-hide-2 {\n  to {\n    -webkit-transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n}\n@keyframes preload-cycle-2 {\n  10% {\n    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n  15%, 70% {\n    transform: rotateZ(120deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  75%, 100% {\n    transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-cycle-2 {\n  10% {\n    -webkit-transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: black;\n  }\n  15%, 70% {\n    -webkit-transform: rotateZ(120deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  75%, 100% {\n    -webkit-transform: rotateZ(120deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-show-3 {\n  from {\n    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-show-3 {\n  from {\n    -webkit-transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-hide-3 {\n  to {\n    transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-hide-3 {\n  to {\n    -webkit-transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-cycle-3 {\n  15% {\n    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  20%, 65% {\n    transform: rotateZ(180deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  70%, 100% {\n    transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-cycle-3 {\n  15% {\n    -webkit-transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  20%, 65% {\n    -webkit-transform: rotateZ(180deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  70%, 100% {\n    -webkit-transform: rotateZ(180deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-show-4 {\n  from {\n    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-show-4 {\n  from {\n    -webkit-transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-hide-4 {\n  to {\n    transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-hide-4 {\n  to {\n    -webkit-transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-cycle-4 {\n  20% {\n    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  25%, 60% {\n    transform: rotateZ(240deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  65%, 100% {\n    transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-cycle-4 {\n  20% {\n    -webkit-transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  25%, 60% {\n    -webkit-transform: rotateZ(240deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  65%, 100% {\n    -webkit-transform: rotateZ(240deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-show-5 {\n  from {\n    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-show-5 {\n  from {\n    -webkit-transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-hide-5 {\n  to {\n    transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-hide-5 {\n  to {\n    -webkit-transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-cycle-5 {\n  25% {\n    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  30%, 55% {\n    transform: rotateZ(300deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  60%, 100% {\n    transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-cycle-5 {\n  25% {\n    -webkit-transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  30%, 55% {\n    -webkit-transform: rotateZ(300deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  60%, 100% {\n    -webkit-transform: rotateZ(300deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-show-6 {\n  from {\n    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-show-6 {\n  from {\n    -webkit-transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-hide-6 {\n  to {\n    transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-hide-6 {\n  to {\n    -webkit-transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-cycle-6 {\n  30% {\n    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  35%, 50% {\n    transform: rotateZ(360deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  55%, 100% {\n    transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@-webkit-keyframes preload-cycle-6 {\n  30% {\n    -webkit-transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  35%, 50% {\n    -webkit-transform: rotateZ(360deg) rotateY(0) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n  55%, 100% {\n    -webkit-transform: rotateZ(360deg) rotateY(90deg) rotateX(0deg);\n    border-left-color: #48b1f7;\n  }\n}\n@keyframes preload-flip {\n  0% {\n    transform: rotateY(0deg) rotateZ(-60deg);\n  }\n  100% {\n    transform: rotateY(360deg) rotateZ(-60deg);\n  }\n}\n@-webkit-keyframes preload-flip {\n  0% {\n    -webkit-transform: rotateY(0deg) rotateZ(-60deg);\n  }\n  100% {\n    -webkit-transform: rotateY(360deg) rotateZ(-60deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXBwL3NoYXJlZC91aS9wb2x5Z29uLWxvYWRlci9wb2x5Z29uLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpL3BvbHlnb24tbG9hZGVyL3BvbHlnb24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUU7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdFO0VBQ0Usa0RBQUE7RUFDQSxxREFBQTtFQUNBLHNEQUFBO0VBQ0EsMERBQUE7RUFDQSx1REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNESjtBRElFO0VBQ0UsbURBQUE7RUFDQSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNGSjtBREtFO0VBQ0UsbURBQUE7RUFDQSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNISjtBRE1FO0VBQ0UsbURBQUE7RUFDQSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNKSjtBRE9FO0VBQ0UsbURBQUE7RUFDQSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNMSjtBRFFFO0VBQ0UsbURBQUE7RUFDQSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUNOSjtBRFNFO0VBQ0UsbURBQUE7RUFDQSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3REFBQTtBQ1BKO0FEVUU7RUFDRSxtREFBQTtFQUNBLHNEQUFBO0VBQ0EsdURBQUE7RUFDQSwyREFBQTtFQUNBLHdEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ1JKO0FEV0U7RUFDRSxvREFBQTtFQUNBLHVEQUFBO0VBQ0Esd0RBQUE7RUFDQSw0REFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ1RKO0FEWUU7RUFDRSxvREFBQTtFQUNBLHVEQUFBO0VBQ0Esd0RBQUE7RUFDQSw0REFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ1ZKO0FEYUU7RUFDRSxvREFBQTtFQUNBLHVEQUFBO0VBQ0Esd0RBQUE7RUFDQSw0REFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ1hKO0FEY0U7RUFDRSxvREFBQTtFQUNBLHVEQUFBO0VBQ0Esd0RBQUE7RUFDQSw0REFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ1pKO0FEZUU7RUFDRSxvREFBQTtFQUNBLHVEQUFBO0VBQ0Esd0RBQUE7RUFDQSw0REFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLHdEQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ2JKO0FEaUJFO0VBQ0U7SUFDRSx1REFBQTtJQUNBLHdCQUFBO0VDZko7QUFDRjtBRGdDRTtFQUNFO0lBQ0UsK0RBQUE7SUFDQSx3QkFBQTtFQ2xCSjtBQUNGO0FENEJFO0VBQ0U7SUFDRSx1REFBQTtJQUNBLHdCQUFBO0VDcEJKO0FBQ0Y7QURxQ0U7RUFDRTtJQUNFLCtEQUFBO0lBQ0Esd0JBQUE7RUN2Qko7QUFDRjtBRGlDRTtFQUNFO0lBQ0Usc0RBQUE7SUFDQSx3QkFBQTtFQ3pCSjtFRDRCRTtJQUVFLGtEQUFBO0lBQ0EsMEJBQUE7RUMzQko7RUQ4QkU7SUFFRSxzREFBQTtJQUNBLHdCQUFBO0VDN0JKO0FBQ0Y7QURzRUU7RUFDRTtJQUNFLDhEQUFBO0lBQ0Esd0JBQUE7RUN4Q0o7RUQyQ0U7SUFFRSwwREFBQTtJQUNBLDBCQUFBO0VDMUNKO0VENkNFO0lBRUUsOERBQUE7SUFDQSx3QkFBQTtFQzVDSjtBQUNGO0FEa0VFO0VBQ0U7SUFDRSx3REFBQTtJQUNBLDBCQUFBO0VDbERKO0FBQ0Y7QURtRUU7RUFDRTtJQUNFLGdFQUFBO0lBQ0EsMEJBQUE7RUNyREo7QUFDRjtBRCtERTtFQUNFO0lBQ0Usd0RBQUE7SUFDQSx3QkFBQTtFQ3ZESjtBQUNGO0FEd0VFO0VBQ0U7SUFDRSxnRUFBQTtJQUNBLHdCQUFBO0VDMURKO0FBQ0Y7QURvRUU7RUFDRTtJQUNFLHVEQUFBO0lBQ0Esd0JBQUE7RUM1REo7RUQrREU7SUFFRSxtREFBQTtJQUNBLDBCQUFBO0VDOURKO0VEaUVFO0lBRUUsdURBQUE7SUFDQSwwQkFBQTtFQ2hFSjtBQUNGO0FEeUdFO0VBQ0U7SUFDRSwrREFBQTtJQUNBLHdCQUFBO0VDM0VKO0VEOEVFO0lBRUUsMkRBQUE7SUFDQSwwQkFBQTtFQzdFSjtFRGdGRTtJQUVFLCtEQUFBO0lBQ0EsMEJBQUE7RUMvRUo7QUFDRjtBRHFHRTtFQUNFO0lBQ0Usd0RBQUE7SUFDQSwwQkFBQTtFQ3JGSjtBQUNGO0FEc0dFO0VBQ0U7SUFDRSxnRUFBQTtJQUNBLDBCQUFBO0VDeEZKO0FBQ0Y7QURrR0U7RUFDRTtJQUNFLHdEQUFBO0lBQ0EsMEJBQUE7RUMxRko7QUFDRjtBRDJHRTtFQUNFO0lBQ0UsZ0VBQUE7SUFDQSwwQkFBQTtFQzdGSjtBQUNGO0FEdUdFO0VBQ0U7SUFDRSx1REFBQTtJQUNBLDBCQUFBO0VDL0ZKO0VEa0dFO0lBRUUsbURBQUE7SUFDQSwwQkFBQTtFQ2pHSjtFRG9HRTtJQUVFLHVEQUFBO0lBQ0EsMEJBQUE7RUNuR0o7QUFDRjtBRDRJRTtFQUNFO0lBQ0UsK0RBQUE7SUFDQSwwQkFBQTtFQzlHSjtFRGlIRTtJQUVFLDJEQUFBO0lBQ0EsMEJBQUE7RUNoSEo7RURtSEU7SUFFRSwrREFBQTtJQUNBLDBCQUFBO0VDbEhKO0FBQ0Y7QUR3SUU7RUFDRTtJQUNFLHdEQUFBO0lBQ0EsMEJBQUE7RUN4SEo7QUFDRjtBRHlJRTtFQUNFO0lBQ0UsZ0VBQUE7SUFDQSwwQkFBQTtFQzNISjtBQUNGO0FEcUlFO0VBQ0U7SUFDRSx3REFBQTtJQUNBLDBCQUFBO0VDN0hKO0FBQ0Y7QUQ4SUU7RUFDRTtJQUNFLGdFQUFBO0lBQ0EsMEJBQUE7RUNoSUo7QUFDRjtBRDBJRTtFQUNFO0lBQ0UsdURBQUE7SUFDQSwwQkFBQTtFQ2xJSjtFRHFJRTtJQUVFLG1EQUFBO0lBQ0EsMEJBQUE7RUNwSUo7RUR1SUU7SUFFRSx1REFBQTtJQUNBLDBCQUFBO0VDdElKO0FBQ0Y7QUQrS0U7RUFDRTtJQUNFLCtEQUFBO0lBQ0EsMEJBQUE7RUNqSko7RURvSkU7SUFFRSwyREFBQTtJQUNBLDBCQUFBO0VDbkpKO0VEc0pFO0lBRUUsK0RBQUE7SUFDQSwwQkFBQTtFQ3JKSjtBQUNGO0FEMktFO0VBQ0U7SUFDRSx3REFBQTtJQUNBLDBCQUFBO0VDM0pKO0FBQ0Y7QUQ0S0U7RUFDRTtJQUNFLGdFQUFBO0lBQ0EsMEJBQUE7RUM5Sko7QUFDRjtBRHdLRTtFQUNFO0lBQ0Usd0RBQUE7SUFDQSwwQkFBQTtFQ2hLSjtBQUNGO0FEaUxFO0VBQ0U7SUFDRSxnRUFBQTtJQUNBLDBCQUFBO0VDbktKO0FBQ0Y7QUQ2S0U7RUFDRTtJQUNFLHVEQUFBO0lBQ0EsMEJBQUE7RUNyS0o7RUR3S0U7SUFFRSxtREFBQTtJQUNBLDBCQUFBO0VDdktKO0VEMEtFO0lBRUUsdURBQUE7SUFDQSwwQkFBQTtFQ3pLSjtBQUNGO0FEa05FO0VBQ0U7SUFDRSwrREFBQTtJQUNBLDBCQUFBO0VDcExKO0VEdUxFO0lBRUUsMkRBQUE7SUFDQSwwQkFBQTtFQ3RMSjtFRHlMRTtJQUVFLCtEQUFBO0lBQ0EsMEJBQUE7RUN4TEo7QUFDRjtBRDhNRTtFQUNFO0lBQ0Usd0RBQUE7SUFDQSwwQkFBQTtFQzlMSjtBQUNGO0FEK01FO0VBQ0U7SUFDRSxnRUFBQTtJQUNBLDBCQUFBO0VDak1KO0FBQ0Y7QUQyTUU7RUFDRTtJQUNFLHdEQUFBO0lBQ0EsMEJBQUE7RUNuTUo7QUFDRjtBRG9ORTtFQUNFO0lBQ0UsZ0VBQUE7SUFDQSwwQkFBQTtFQ3RNSjtBQUNGO0FEZ05FO0VBQ0U7SUFDRSx1REFBQTtJQUNBLDBCQUFBO0VDeE1KO0VEMk1FO0lBRUUsbURBQUE7SUFDQSwwQkFBQTtFQzFNSjtFRDZNRTtJQUVFLHVEQUFBO0lBQ0EsMEJBQUE7RUM1TUo7QUFDRjtBRHFQRTtFQUNFO0lBQ0UsK0RBQUE7SUFDQSwwQkFBQTtFQ3ZOSjtFRDBORTtJQUVFLDJEQUFBO0lBQ0EsMEJBQUE7RUN6Tko7RUQ0TkU7SUFFRSwrREFBQTtJQUNBLDBCQUFBO0VDM05KO0FBQ0Y7QURpUEU7RUFDRTtJQUNFLHdDQUFBO0VDak9KO0VEb09FO0lBQ0UsMENBQUE7RUNsT0o7QUFDRjtBRHlQRTtFQUNFO0lBQ0UsZ0RBQUE7RUN2T0o7RUQwT0U7SUFDRSxrREFBQTtFQ3hPSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpL3BvbHlnb24tbG9hZGVyL3BvbHlnb24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbiA6IGZpeGVkO1xuICB0b3AgICAgICA6IDUwJTtcbiAgbGVmdCAgICAgOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gIC5jc3Nsb2FkLXByZWxvYWRlciB7XG4gICAgcG9zaXRpb24gICAgICAgICAgICAgICAgOiBhYnNvbHV0ZTtcbiAgICBsZWZ0ICAgICAgICAgICAgICAgICAgICA6IDUwJTtcbiAgICBmb250LXNpemUgICAgICAgICAgICAgICA6IDE5cHg7XG4gICAgZGlzcGxheSAgICAgICAgICAgICAgICAgOiBibG9jaztcbiAgICB3aWR0aCAgICAgICAgICAgICAgICAgICA6IDMuNzVlbTtcbiAgICBoZWlnaHQgICAgICAgICAgICAgICAgICA6IDQuMjVlbTtcbiAgICBtYXJnaW4tbGVmdCAgICAgICAgICAgICA6IC0xLjg3NWVtO1xuICAgIG1hcmdpbi10b3AgICAgICAgICAgICAgIDogLTIuMTI1ZW07XG4gICAgdHJhbnNmb3JtLW9yaWdpbiAgICAgICAgOiBjZW50ZXIgY2VudGVyO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW4gICAgIDogY2VudGVyIGNlbnRlcjtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbiAgICA6IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbiAgIDogY2VudGVyIGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0gICAgICAgICAgICAgICA6IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtICAgICAgICAgICAgOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWigtNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm0gICAgICAgICAgIDogcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybSAgICAgICA6IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm0gICAgICAgICAgOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWigtNjBkZWcpO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlIHtcbiAgICBib3JkZXItdG9wICAgICAgICAgICAgICA6IDEuMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0ICAgICAgICAgICAgOiBub25lO1xuICAgIGJvcmRlci1ib3R0b20gICAgICAgICAgIDogMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0ICAgICAgICAgICAgIDogMS44NzVlbSBzb2xpZCByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICBwb3NpdGlvbiAgICAgICAgICAgICAgICA6IGFic29sdXRlO1xuICAgIHRvcCAgICAgICAgICAgICAgICAgICAgIDogMHB4O1xuICAgIGxlZnQgICAgICAgICAgICAgICAgICAgIDogNTAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW4gICAgICAgIDogbGVmdCBib3R0b207XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbiAgICAgOiBsZWZ0IGJvdHRvbTtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbiAgICA6IGxlZnQgYm90dG9tO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luICAgOiBsZWZ0IGJvdHRvbTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICA6IDNweCAzcHggMCAwO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCgxKSB7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIGFuaW1hdGlvbiAgICAgICAgOiAwLjE3cyBsaW5lYXIgMC45NHMgcHJlbG9hZC1oaWRlLTEgYm90aCAxO1xuICAgIC1vLWFuaW1hdGlvbiAgICAgOiAwLjE3cyBsaW5lYXIgMC45NHMgcHJlbG9hZC1oaWRlLTEgYm90aCAxO1xuICAgIC1tcy1hbmltYXRpb24gICAgOiAwLjE3cyBsaW5lYXIgMC45NHMgcHJlbG9hZC1oaWRlLTEgYm90aCAxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC45NHMgcHJlbG9hZC1oaWRlLTEgYm90aCAxO1xuICAgIC1tb3otYW5pbWF0aW9uICAgOiAwLjE3cyBsaW5lYXIgMC45NHMgcHJlbG9hZC1oaWRlLTEgYm90aCAxO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCgyKSB7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1vei10cmFuc2Zvcm0gICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgYW5pbWF0aW9uICAgICAgICA6IDAuMTdzIGxpbmVhciAwLjg1cyBwcmVsb2FkLWhpZGUtMiBib3RoIDE7XG4gICAgLW8tYW5pbWF0aW9uICAgICA6IDAuMTdzIGxpbmVhciAwLjg1cyBwcmVsb2FkLWhpZGUtMiBib3RoIDE7XG4gICAgLW1zLWFuaW1hdGlvbiAgICA6IDAuMTdzIGxpbmVhciAwLjg1cyBwcmVsb2FkLWhpZGUtMiBib3RoIDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjg1cyBwcmVsb2FkLWhpZGUtMiBib3RoIDE7XG4gICAgLW1vei1hbmltYXRpb24gICA6IDAuMTdzIGxpbmVhciAwLjg1cyBwcmVsb2FkLWhpZGUtMiBib3RoIDE7XG4gIH1cblxuICAuY3NzbG9hZC1wcmVsb2FkZXIgLmNzc2xvYWQtc2xpY2U6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICBhbmltYXRpb24gICAgICAgIDogMC4xN3MgbGluZWFyIDAuNzZzIHByZWxvYWQtaGlkZS0zIGJvdGggMTtcbiAgICAtby1hbmltYXRpb24gICAgIDogMC4xN3MgbGluZWFyIDAuNzZzIHByZWxvYWQtaGlkZS0zIGJvdGggMTtcbiAgICAtbXMtYW5pbWF0aW9uICAgIDogMC4xN3MgbGluZWFyIDAuNzZzIHByZWxvYWQtaGlkZS0zIGJvdGggMTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNzZzIHByZWxvYWQtaGlkZS0zIGJvdGggMTtcbiAgICAtbW96LWFuaW1hdGlvbiAgIDogMC4xN3MgbGluZWFyIDAuNzZzIHByZWxvYWQtaGlkZS0zIGJvdGggMTtcbiAgfVxuXG4gIC5jc3Nsb2FkLXByZWxvYWRlciAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIC1vLXRyYW5zZm9ybSAgICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAgIGFuaW1hdGlvbiAgICAgICAgOiAwLjE3cyBsaW5lYXIgMC42N3MgcHJlbG9hZC1oaWRlLTQgYm90aCAxO1xuICAgIC1vLWFuaW1hdGlvbiAgICAgOiAwLjE3cyBsaW5lYXIgMC42N3MgcHJlbG9hZC1oaWRlLTQgYm90aCAxO1xuICAgIC1tcy1hbmltYXRpb24gICAgOiAwLjE3cyBsaW5lYXIgMC42N3MgcHJlbG9hZC1oaWRlLTQgYm90aCAxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC42N3MgcHJlbG9hZC1oaWRlLTQgYm90aCAxO1xuICAgIC1tb3otYW5pbWF0aW9uICAgOiAwLjE3cyBsaW5lYXIgMC42N3MgcHJlbG9hZC1oaWRlLTQgYm90aCAxO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1vei10cmFuc2Zvcm0gICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgYW5pbWF0aW9uICAgICAgICA6IDAuMTdzIGxpbmVhciAwLjU4cyBwcmVsb2FkLWhpZGUtNSBib3RoIDE7XG4gICAgLW8tYW5pbWF0aW9uICAgICA6IDAuMTdzIGxpbmVhciAwLjU4cyBwcmVsb2FkLWhpZGUtNSBib3RoIDE7XG4gICAgLW1zLWFuaW1hdGlvbiAgICA6IDAuMTdzIGxpbmVhciAwLjU4cyBwcmVsb2FkLWhpZGUtNSBib3RoIDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjU4cyBwcmVsb2FkLWhpZGUtNSBib3RoIDE7XG4gICAgLW1vei1hbmltYXRpb24gICA6IDAuMTdzIGxpbmVhciAwLjU4cyBwcmVsb2FkLWhpZGUtNSBib3RoIDE7XG4gIH1cblxuICAuY3NzbG9hZC1wcmVsb2FkZXIgLmNzc2xvYWQtc2xpY2U6bnRoLWNoaWxkKDYpIHtcbiAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgICBhbmltYXRpb24gICAgICAgIDogMC4xN3MgbGluZWFyIDAuNDhzIHByZWxvYWQtaGlkZS02IGJvdGggMTtcbiAgICAtby1hbmltYXRpb24gICAgIDogMC4xN3MgbGluZWFyIDAuNDhzIHByZWxvYWQtaGlkZS02IGJvdGggMTtcbiAgICAtbXMtYW5pbWF0aW9uICAgIDogMC4xN3MgbGluZWFyIDAuNDhzIHByZWxvYWQtaGlkZS02IGJvdGggMTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNDhzIHByZWxvYWQtaGlkZS02IGJvdGggMTtcbiAgICAtbW96LWFuaW1hdGlvbiAgIDogMC4xN3MgbGluZWFyIDAuNDhzIHByZWxvYWQtaGlkZS02IGJvdGggMTtcbiAgfVxuXG4gIC5jc3Nsb2FkLXByZWxvYWRlci5jc3Nsb2FkLWxvYWRpbmcge1xuICAgIGFuaW1hdGlvbiAgICAgICAgOiAyLjNzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xuICAgIC1vLWFuaW1hdGlvbiAgICAgOiAyLjNzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xuICAgIC1tcy1hbmltYXRpb24gICAgOiAyLjNzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xuICAgIC1tb3otYW5pbWF0aW9uICAgOiAyLjNzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyLmNzc2xvYWQtbG9hZGluZyAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1vLXRyYW5zZm9ybSAgICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIGFuaW1hdGlvbiAgICAgICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtMSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtby1hbmltYXRpb24gICAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTEgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLW1zLWFuaW1hdGlvbiAgICA6IDIuM3MgcHJlbG9hZC1jeWNsZS0xIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtMSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtbW96LWFuaW1hdGlvbiAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTEgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIH1cblxuICAuY3NzbG9hZC1wcmVsb2FkZXIuY3NzbG9hZC1sb2FkaW5nIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCgyKSB7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1vLXRyYW5zZm9ybSAgICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICBhbmltYXRpb24gICAgICAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTIgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLW8tYW5pbWF0aW9uICAgICA6IDIuM3MgcHJlbG9hZC1jeWNsZS0yIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC1tcy1hbmltYXRpb24gICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtMiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTIgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLW1vei1hbmltYXRpb24gICA6IDIuM3MgcHJlbG9hZC1jeWNsZS0yIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyLmNzc2xvYWQtbG9hZGluZyAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgYW5pbWF0aW9uICAgICAgICA6IDIuM3MgcHJlbG9hZC1jeWNsZS0zIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC1vLWFuaW1hdGlvbiAgICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtMyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtbXMtYW5pbWF0aW9uICAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTMgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS0zIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC1tb3otYW5pbWF0aW9uICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtMyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgfVxuXG4gIC5jc3Nsb2FkLXByZWxvYWRlci5jc3Nsb2FkLWxvYWRpbmcgLmNzc2xvYWQtc2xpY2U6bnRoLWNoaWxkKDQpIHtcbiAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1vei10cmFuc2Zvcm0gICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIGFuaW1hdGlvbiAgICAgICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtNCBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtby1hbmltYXRpb24gICAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTQgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLW1zLWFuaW1hdGlvbiAgICA6IDIuM3MgcHJlbG9hZC1jeWNsZS00IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtNCBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtbW96LWFuaW1hdGlvbiAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTQgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIH1cblxuICAuY3NzbG9hZC1wcmVsb2FkZXIuY3NzbG9hZC1sb2FkaW5nIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1vLXRyYW5zZm9ybSAgICAgOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICBhbmltYXRpb24gICAgICAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTUgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLW8tYW5pbWF0aW9uICAgICA6IDIuM3MgcHJlbG9hZC1jeWNsZS01IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC1tcy1hbmltYXRpb24gICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtNSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTUgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLW1vei1hbmltYXRpb24gICA6IDIuM3MgcHJlbG9hZC1jeWNsZS01IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICB9XG5cbiAgLmNzc2xvYWQtcHJlbG9hZGVyLmNzc2xvYWQtbG9hZGluZyAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoNikge1xuICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gICAgYW5pbWF0aW9uICAgICAgICA6IDIuM3MgcHJlbG9hZC1jeWNsZS02IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC1vLWFuaW1hdGlvbiAgICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtNiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgICAtbXMtYW5pbWF0aW9uICAgIDogMi4zcyBwcmVsb2FkLWN5Y2xlLTYgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS02IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAgIC1tb3otYW5pbWF0aW9uICAgOiAyLjNzIHByZWxvYWQtY3ljbGUtNiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgfVxuXG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctMSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTEge1xuICAgIGZyb20ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMSB7XG4gICAgZnJvbSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMSB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMSB7XG4gICAgZnJvbSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTEge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMSB7XG4gICAgdG8ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMSB7XG4gICAgdG8ge1xuICAgICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTEge1xuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS0xIHtcbiAgICB0byB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0xIHtcbiAgICA1JSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTAlLFxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBALW8ta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMSB7XG4gICAgNSUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cblxuICAgIDEwJSxcbiAgICA3NSUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA4MCUsXG4gICAgMTAwJSB7XG4gICAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0xIHtcbiAgICA1JSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTAlLFxuICAgIDc1JSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0xIHtcbiAgICA1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTAlLFxuICAgIDc1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0xIHtcbiAgICA1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTAlLFxuICAgIDc1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWig2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0yIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDg0LCAxNjAsIDI0NSk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMiB7XG4gICAgZnJvbSB7XG4gICAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig4NCwgMTYwLCAyNDUpO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0yIHtcbiAgICBmcm9tIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDg0LCAxNjAsIDI0NSk7XG4gICAgfVxuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0yIHtcbiAgICBmcm9tIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDg0LCAxNjAsIDI0NSk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0yIHtcbiAgICBmcm9tIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDg0LCAxNjAsIDI0NSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMiB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMiB7XG4gICAgdG8ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTIge1xuICAgIHRvIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMiB7XG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS0yIHtcbiAgICB0byB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMiB7XG4gICAgMTAlIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTUlLFxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA3NSUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTIge1xuICAgIDEwJSB7XG4gICAgICAtby10cmFuc2Zvcm0gICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cblxuICAgIDE1JSxcbiAgICA3MCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNzUlLFxuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMiB7XG4gICAgMTAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTUlLFxuICAgIDcwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA3NSUsXG4gICAgMTAwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMiB7XG4gICAgMTAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTUlLFxuICAgIDcwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA3NSUsXG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMiB7XG4gICAgMTAlIHtcbiAgICAgIC1tb3otdHJhbnNmb3JtICAgOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgMTUlLFxuICAgIDcwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA3NSUsXG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctMyB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTMge1xuICAgIGZyb20ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMyB7XG4gICAgZnJvbSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMyB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMyB7XG4gICAgZnJvbSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTMge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMyB7XG4gICAgdG8ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMyB7XG4gICAgdG8ge1xuICAgICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTMge1xuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS0zIHtcbiAgICB0byB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0zIHtcbiAgICAxNSUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDIwJSxcbiAgICA2NSUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNzAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0zIHtcbiAgICAxNSUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDIwJSxcbiAgICA2NSUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNzAlLFxuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMyB7XG4gICAgMTUlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICAyMCUsXG4gICAgNjUlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDcwJSxcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0zIHtcbiAgICAxNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDIwJSxcbiAgICA2NSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNzAlLFxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTMge1xuICAgIDE1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgMjAlLFxuICAgIDY1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA3MCUsXG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctNCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTQge1xuICAgIGZyb20ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNCB7XG4gICAgZnJvbSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNCB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNCB7XG4gICAgZnJvbSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTQge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNCB7XG4gICAgdG8ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNCB7XG4gICAgdG8ge1xuICAgICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTQge1xuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS00IHtcbiAgICB0byB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDI1JSxcbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNjUlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgICAyMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDI1JSxcbiAgICA2MCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNjUlLFxuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNCB7XG4gICAgMjAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICAyNSUsXG4gICAgNjAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDY1JSxcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgICAyMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDI1JSxcbiAgICA2MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNjUlLFxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTQge1xuICAgIDIwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgMjUlLFxuICAgIDYwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA2NSUsXG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctNSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTUge1xuICAgIGZyb20ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNSB7XG4gICAgZnJvbSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNSB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNSB7XG4gICAgZnJvbSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTUge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNSB7XG4gICAgdG8ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNSB7XG4gICAgdG8ge1xuICAgICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTUge1xuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS01IHtcbiAgICB0byB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS01IHtcbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDMwJSxcbiAgICA1NSUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS01IHtcbiAgICAyNSUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDMwJSxcbiAgICA1NSUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNSB7XG4gICAgMjUlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICAzMCUsXG4gICAgNTUlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDYwJSxcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS01IHtcbiAgICAyNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDMwJSxcbiAgICA1NSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTUge1xuICAgIDI1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgMzAlLFxuICAgIDU1JSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctNiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm0gICAgICAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTYge1xuICAgIGZyb20ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNiB7XG4gICAgZnJvbSB7XG4gICAgICAtbXMtdHJhbnNmb3JtICAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNiB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNiB7XG4gICAgZnJvbSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTYge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybSAgICAgICAgOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNiB7XG4gICAgdG8ge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNiB7XG4gICAgdG8ge1xuICAgICAgLW1zLXRyYW5zZm9ybSAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTYge1xuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS02IHtcbiAgICB0byB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS02IHtcbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDM1JSxcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNTUlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtICAgICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS02IHtcbiAgICAzMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDM1JSxcbiAgICA1MCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNTUlLFxuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtICAgICA6IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNiB7XG4gICAgMzAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICAzNSUsXG4gICAgNTAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDU1JSxcbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm0gICAgOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS02IHtcbiAgICAzMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cblxuICAgIDM1JSxcbiAgICA1MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgNTUlLFxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYig3MiwgMTc3LCAyNDcpO1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTYge1xuICAgIDMwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuXG4gICAgMzUlLFxuICAgIDUwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoNzIsIDE3NywgMjQ3KTtcbiAgICB9XG5cbiAgICA1NSUsXG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybSAgIDogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDcyLCAxNzcsIDI0Nyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBwcmVsb2FkLWZsaXAge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBwcmVsb2FkLWZsaXAge1xuICAgIDAlIHtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1mbGlwIHtcbiAgICAwJSB7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtZmxpcCB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigtNjBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtZmxpcCB7XG4gICAgMCUge1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigtNjBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbjpob3N0IC5jc3Nsb2FkLXByZWxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMy43NWVtO1xuICBoZWlnaHQ6IDQuMjVlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xLjg3NWVtO1xuICBtYXJnaW4tdG9wOiAtMi4xMjVlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcm90YXRlWigtNjBkZWcpO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlIHtcbiAgYm9yZGVyLXRvcDogMS4xMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxLjg3NWVtIHNvbGlkICM0OGIxZjc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICBhbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjk0cyBwcmVsb2FkLWhpZGUtMSBib3RoIDE7XG4gIC1vLWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuOTRzIHByZWxvYWQtaGlkZS0xIGJvdGggMTtcbiAgLW1zLWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuOTRzIHByZWxvYWQtaGlkZS0xIGJvdGggMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjk0cyBwcmVsb2FkLWhpZGUtMSBib3RoIDE7XG4gIC1tb3otYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC45NHMgcHJlbG9hZC1oaWRlLTEgYm90aCAxO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIGFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuODVzIHByZWxvYWQtaGlkZS0yIGJvdGggMTtcbiAgLW8tYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC44NXMgcHJlbG9hZC1oaWRlLTIgYm90aCAxO1xuICAtbXMtYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC44NXMgcHJlbG9hZC1oaWRlLTIgYm90aCAxO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuODVzIHByZWxvYWQtaGlkZS0yIGJvdGggMTtcbiAgLW1vei1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjg1cyBwcmVsb2FkLWhpZGUtMiBib3RoIDE7XG59XG46aG9zdCAuY3NzbG9hZC1wcmVsb2FkZXIgLmNzc2xvYWQtc2xpY2U6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC43NnMgcHJlbG9hZC1oaWRlLTMgYm90aCAxO1xuICAtby1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjc2cyBwcmVsb2FkLWhpZGUtMyBib3RoIDE7XG4gIC1tcy1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjc2cyBwcmVsb2FkLWhpZGUtMyBib3RoIDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC43NnMgcHJlbG9hZC1oaWRlLTMgYm90aCAxO1xuICAtbW96LWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNzZzIHByZWxvYWQtaGlkZS0zIGJvdGggMTtcbn1cbjpob3N0IC5jc3Nsb2FkLXByZWxvYWRlciAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoNCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICBhbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjY3cyBwcmVsb2FkLWhpZGUtNCBib3RoIDE7XG4gIC1vLWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNjdzIHByZWxvYWQtaGlkZS00IGJvdGggMTtcbiAgLW1zLWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNjdzIHByZWxvYWQtaGlkZS00IGJvdGggMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjY3cyBwcmVsb2FkLWhpZGUtNCBib3RoIDE7XG4gIC1tb3otYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC42N3MgcHJlbG9hZC1oaWRlLTQgYm90aCAxO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCg1KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIGFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNThzIHByZWxvYWQtaGlkZS01IGJvdGggMTtcbiAgLW8tYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC41OHMgcHJlbG9hZC1oaWRlLTUgYm90aCAxO1xuICAtbXMtYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC41OHMgcHJlbG9hZC1oaWRlLTUgYm90aCAxO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNThzIHByZWxvYWQtaGlkZS01IGJvdGggMTtcbiAgLW1vei1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjU4cyBwcmVsb2FkLWhpZGUtNSBib3RoIDE7XG59XG46aG9zdCAuY3NzbG9hZC1wcmVsb2FkZXIgLmNzc2xvYWQtc2xpY2U6bnRoLWNoaWxkKDYpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVYKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwKTtcbiAgYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC40OHMgcHJlbG9hZC1oaWRlLTYgYm90aCAxO1xuICAtby1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjQ4cyBwcmVsb2FkLWhpZGUtNiBib3RoIDE7XG4gIC1tcy1hbmltYXRpb246IDAuMTdzIGxpbmVhciAwLjQ4cyBwcmVsb2FkLWhpZGUtNiBib3RoIDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjE3cyBsaW5lYXIgMC40OHMgcHJlbG9hZC1oaWRlLTYgYm90aCAxO1xuICAtbW96LWFuaW1hdGlvbjogMC4xN3MgbGluZWFyIDAuNDhzIHByZWxvYWQtaGlkZS02IGJvdGggMTtcbn1cbjpob3N0IC5jc3Nsb2FkLXByZWxvYWRlci5jc3Nsb2FkLWxvYWRpbmcge1xuICBhbmltYXRpb246IDIuM3MgcHJlbG9hZC1mbGlwIHN0ZXBzKDIpIGluZmluaXRlIGJvdGg7XG4gIC1vLWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWZsaXAgc3RlcHMoMikgaW5maW5pdGUgYm90aDtcbiAgLW1zLWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWZsaXAgc3RlcHMoMikgaW5maW5pdGUgYm90aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1mbGlwIHN0ZXBzKDIpIGluZmluaXRlIGJvdGg7XG4gIC1tb3otYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtZmxpcCBzdGVwcygyKSBpbmZpbml0ZSBib3RoO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyLmNzc2xvYWQtbG9hZGluZyAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICBhbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS0xIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtby1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS0xIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtbXMtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtMSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS0xIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtbW96LWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTEgbGluZWFyIGluZmluaXRlIGJvdGg7XG59XG46aG9zdCAuY3NzbG9hZC1wcmVsb2FkZXIuY3NzbG9hZC1sb2FkaW5nIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtMiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLW8tYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtMiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLW1zLWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTIgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtMiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLW1vei1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS0yIGxpbmVhciBpbmZpbml0ZSBib3RoO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyLmNzc2xvYWQtbG9hZGluZyAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoMykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIGFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTMgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC1vLWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTMgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC1tcy1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS0zIGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTMgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC1tb3otYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtMyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbn1cbjpob3N0IC5jc3Nsb2FkLXByZWxvYWRlci5jc3Nsb2FkLWxvYWRpbmcgLmNzc2xvYWQtc2xpY2U6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICBhbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS00IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtby1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS00IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtbXMtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtNCBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS00IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtbW96LWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTQgbGluZWFyIGluZmluaXRlIGJvdGg7XG59XG46aG9zdCAuY3NzbG9hZC1wcmVsb2FkZXIuY3NzbG9hZC1sb2FkaW5nIC5jc3Nsb2FkLXNsaWNlOm50aC1jaGlsZCg1KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtNSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLW8tYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtNSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLW1zLWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTUgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtNSBsaW5lYXIgaW5maW5pdGUgYm90aDtcbiAgLW1vei1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS01IGxpbmVhciBpbmZpbml0ZSBib3RoO1xufVxuOmhvc3QgLmNzc2xvYWQtcHJlbG9hZGVyLmNzc2xvYWQtbG9hZGluZyAuY3NzbG9hZC1zbGljZTpudGgtY2hpbGQoNikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMCk7XG4gIGFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTYgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC1vLWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTYgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC1tcy1hbmltYXRpb246IDIuM3MgcHJlbG9hZC1jeWNsZS02IGxpbmVhciBpbmZpbml0ZSBib3RoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMi4zcyBwcmVsb2FkLWN5Y2xlLTYgbGluZWFyIGluZmluaXRlIGJvdGg7XG4gIC1tb3otYW5pbWF0aW9uOiAyLjNzIHByZWxvYWQtY3ljbGUtNiBsaW5lYXIgaW5maW5pdGUgYm90aDtcbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1zaG93LTEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMSB7XG4gIGZyb20ge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMSB7XG4gIGZyb20ge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0xIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0xIHtcbiAgZnJvbSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMSB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMSB7XG4gIHRvIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTEge1xuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTEge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS0xIHtcbiAgdG8ge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0xIHtcbiAgNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgMTAlLCA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDgwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTEge1xuICA1JSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxuICAxMCUsIDc1JSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTEge1xuICA1JSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgMTAlLCA3NSUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA4MCUsIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0xIHtcbiAgNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxuICAxMCUsIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMSB7XG4gIDUlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgMTAlLCA3NSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWig2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1zaG93LTIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzU0YTBmNTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMiB7XG4gIGZyb20ge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNTRhMGY1O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctMiB7XG4gIGZyb20ge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzU0YTBmNTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0yIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzU0YTBmNTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0yIHtcbiAgZnJvbSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzU0YTBmNTtcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTIge1xuICB0byB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMiB7XG4gIHRvIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTIge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMiB7XG4gIHRvIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibGFjaztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTIge1xuICAxMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG4gIDE1JSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNzUlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMiB7XG4gIDEwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgMTUlLCA3MCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA3NSUsIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtMiB7XG4gIDEwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG4gIDE1JSwgNzAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTIge1xuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogYmxhY2s7XG4gIH1cbiAgMTUlLCA3MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDc1JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0yIHtcbiAgMTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICB9XG4gIDE1JSwgNzAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxMjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA3NSUsIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctMyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0zIHtcbiAgZnJvbSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy0zIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTMge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTMge1xuICBmcm9tIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByZWxvYWQtaGlkZS0zIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtaGlkZS0zIHtcbiAgdG8ge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMyB7XG4gIHRvIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtMyB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTMge1xuICB0byB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTMge1xuICAxNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgMjAlLCA2NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA3MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS0zIHtcbiAgMTUlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDIwJSwgNjUlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNzAlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTMge1xuICAxNSUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDIwJSwgNjUlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDcwJSwgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTMge1xuICAxNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAyMCUsIDY1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNzAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTMge1xuICAxNSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAyMCUsIDY1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNzAlLCAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1zaG93LTQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNCB7XG4gIGZyb20ge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNCB7XG4gIGZyb20ge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy00IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtc2hvdy00IHtcbiAgZnJvbSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNCB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNCB7XG4gIHRvIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTQge1xuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTQge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtaGlkZS00IHtcbiAgdG8ge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDI1JSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNjUlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNCB7XG4gIDIwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAyNSUsIDYwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDY1JSwgMTAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgMjAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAyNSUsIDYwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA2NSUsIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgMjUlLCA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDY1JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS00IHtcbiAgMjAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigyNDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgMjUlLCA2MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDI0MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDY1JSwgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMjQwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByZWxvYWQtc2hvdy01IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTUge1xuICBmcm9tIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTUge1xuICBmcm9tIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwcmVsb2FkLXNob3ctNSB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTUge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTUge1xuICB0byB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHByZWxvYWQtaGlkZS01IHtcbiAgdG8ge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtaGlkZS01IHtcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNSB7XG4gIHRvIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAzMCUsIDU1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDYwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTUge1xuICAyNSUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgMzAlLCA1NSUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA2MCUsIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNSB7XG4gIDI1JSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgMzAlLCA1NSUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNjAlLCAxMDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNSB7XG4gIDI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDMwJSwgNTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA2MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHByZWxvYWQtY3ljbGUtNSB7XG4gIDI1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMzAwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDMwJSwgNTUlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigzMDBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA2MCUsIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDMwMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLXNob3ctNiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy02IHtcbiAgZnJvbSB7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIHByZWxvYWQtc2hvdy02IHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTYge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1zaG93LTYge1xuICBmcm9tIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByZWxvYWQtaGlkZS02IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtaGlkZS02IHtcbiAgdG8ge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNiB7XG4gIHRvIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgtOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWhpZGUtNiB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1oaWRlLTYge1xuICB0byB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxufVxuQGtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTYge1xuICAzMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgMzUlLCA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICA1NSUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcHJlbG9hZC1jeWNsZS02IHtcbiAgMzAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDM1JSwgNTAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNTUlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTYge1xuICAzMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDM1JSwgNTAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDhiMWY3O1xuICB9XG4gIDU1JSwgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTYge1xuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAzNSUsIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNTUlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBwcmVsb2FkLWN5Y2xlLTYge1xuICAzMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzQ4YjFmNztcbiAgfVxuICAzNSUsIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbiAgNTUlLCAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0OGIxZjc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZC1mbGlwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZykgcm90YXRlWigtNjBkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByZWxvYWQtZmxpcCB7XG4gIDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigtNjBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgcHJlbG9hZC1mbGlwIHtcbiAgMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigtNjBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSByb3RhdGVaKC02MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkLWZsaXAge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlWigtNjBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZykgcm90YXRlWigtNjBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgcHJlbG9hZC1mbGlwIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHJvdGF0ZVooLTYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/ui/polygon-loader/polygon-loader.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/ui/polygon-loader/polygon-loader.component.ts ***!
  \**********************************************************************/
/*! exports provided: PolygonLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonLoaderComponent", function() { return PolygonLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PolygonLoaderComponent = class PolygonLoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PolygonLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-polygon-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./polygon-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/polygon-loader/polygon-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./polygon-loader.component.scss */ "./src/app/shared/ui/polygon-loader/polygon-loader.component.scss")).default]
    })
], PolygonLoaderComponent);



/***/ }),

/***/ "./src/app/shared/ui/polygons/polygons.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/ui/polygons/polygons.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes slide-in-top {\n  0% {\n    transform: translateY(-100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(100vh);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slideRight {\n  0% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@keyframes slideRight {\n  0% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@-webkit-keyframes slideLeft {\n  0% {\n    transform: translateX(100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@keyframes slideLeft {\n  0% {\n    transform: translateX(100vw);\n  }\n  100% {\n    transform: translateX(0vw);\n  }\n}\n@-webkit-keyframes ease-out-right {\n  0% {\n    transform: translateX(-5rem);\n  }\n  85% {\n    transform: translateX(0.3rem);\n  }\n  97% {\n    transform: translateX(-0.2rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes ease-out-right {\n  0% {\n    transform: translateX(-5rem);\n  }\n  85% {\n    transform: translateX(0.3rem);\n  }\n  97% {\n    transform: translateX(-0.2rem);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes shadow {\n  0% {\n    box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.101);\n  }\n  100% {\n    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.201);\n  }\n}\n@keyframes shadow {\n  0% {\n    box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.101);\n  }\n  100% {\n    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.201);\n  }\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes AnimationName {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@-webkit-keyframes move-background {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@keyframes move-background {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n:host {\n  position: fixed;\n  background: #00c9ff;\n  background: linear-gradient(to left, #b292fe, #00c9ff);\n  height: calc(100vh - 5.6rem);\n  width: 50rem;\n  left: 72%;\n  -webkit-clip-path: polygon(100% 0, 100% 11%, 100% 35%, 100% 70%, 100% 100%, 25% 100%, 0 75%, 25% 50%, 0 25%, 25% 0);\n          clip-path: polygon(100% 0, 100% 11%, 100% 35%, 100% 70%, 100% 100%, 25% 100%, 0 75%, 25% 50%, 0 25%, 25% 0);\n  background-size: 400% 400%;\n  -webkit-animation: move-background 15s ease infinite;\n  animation: move-background 15s ease infinite;\n}\n@media (min-width: 501px) {\n  :host {\n    width: 100rem;\n    left: 82%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90emFjaGJvbmZpbC9Qcm9qZWN0cy9jaGF0LW1lLWFwcC9zcmMvYXNzZXRzL3Njc3MvX2FuaW1hdGlvbi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvdWkvcG9seWdvbnMvcG9seWdvbnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdHphY2hib25maWwvUHJvamVjdHMvY2hhdC1tZS1hcHAvc3JjL2FwcC9zaGFyZWQvdWkvcG9seWdvbnMvcG9seWdvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDZCQUFBO0VDQ0Y7RURFQTtJQUNFLHdCQUFBO0VDQUY7QUFDRjtBRFBBO0VBQ0U7SUFDRSw2QkFBQTtFQ0NGO0VERUE7SUFDRSx3QkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UsNEJBQUE7RUNERjtFRElBO0lBQ0Usd0JBQUE7RUNGRjtBQUNGO0FETEE7RUFDRTtJQUNFLDRCQUFBO0VDREY7RURJQTtJQUNFLHdCQUFBO0VDRkY7QUFDRjtBRE1BO0VBQ0U7SUFDRSw2QkFBQTtFQ0pGO0VET0E7SUFDRSwwQkFBQTtFQ0xGO0FBQ0Y7QURGQTtFQUNFO0lBQ0UsNkJBQUE7RUNKRjtFRE9BO0lBQ0UsMEJBQUE7RUNMRjtBQUNGO0FEU0E7RUFDRTtJQUNFLDRCQUFBO0VDUEY7RURVQTtJQUNFLDBCQUFBO0VDUkY7QUFDRjtBRENBO0VBQ0U7SUFDRSw0QkFBQTtFQ1BGO0VEVUE7SUFDRSwwQkFBQTtFQ1JGO0FBQ0Y7QURhQTtFQUNFO0lBQ0UsNEJBQUE7RUNYRjtFRGNBO0lBQ0UsNkJBQUE7RUNaRjtFRGVBO0lBQ0UsOEJBQUE7RUNiRjtFRGdCQTtJQUNFLHdCQUFBO0VDZEY7QUFDRjtBRERBO0VBQ0U7SUFDRSw0QkFBQTtFQ1hGO0VEY0E7SUFDRSw2QkFBQTtFQ1pGO0VEZUE7SUFDRSw4QkFBQTtFQ2JGO0VEZ0JBO0lBQ0Usd0JBQUE7RUNkRjtBQUNGO0FEa0JBO0VBQ0U7SUFDRSxrREFBQTtFQ2hCRjtFRG1CQTtJQUNFLDhDQUFBO0VDakJGO0FBQ0Y7QURVQTtFQUNFO0lBQ0Usa0RBQUE7RUNoQkY7RURtQkE7SUFDRSw4Q0FBQTtFQ2pCRjtBQUNGO0FEb0JBO0VBQ0U7SUFDRSx1QkFBQTtFQ2xCRjtFRHFCQTtJQUNFLHlCQUFBO0VDbkJGO0FBQ0Y7QURZQTtFQUNFO0lBQ0UsdUJBQUE7RUNsQkY7RURxQkE7SUFDRSx5QkFBQTtFQ25CRjtBQUNGO0FEdUJBO0VBQ0U7SUFDRSwyQkFBQTtFQ3JCRjtFRHdCQTtJQUNFLDZCQUFBO0VDdEJGO0VEeUJBO0lBQ0UsMkJBQUE7RUN2QkY7QUFDRjtBRHdDQTtFQUNFO0lBQ0UsMkJBQUE7RUMzQkY7RUQ4QkE7SUFDRSw2QkFBQTtFQzVCRjtFRCtCQTtJQUNFLDJCQUFBO0VDN0JGO0FBQ0Y7QURrQkE7RUFDRTtJQUNFLDJCQUFBO0VDM0JGO0VEOEJBO0lBQ0UsNkJBQUE7RUM1QkY7RUQrQkE7SUFDRSwyQkFBQTtFQzdCRjtBQUNGO0FDM0ZBO0VBRUUsZUFBQTtFQUdBLG1CQUFBO0VBRUEsc0RBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUhBQUE7VUFBQSwyR0FBQTtFQUVBLDBCQUFBO0VBRUEsb0RBQUE7RUFFQSw0Q0FBQTtBRHdGRjtBQ3BGQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFNBQUE7RUR1RkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wb2x5Z29ucy9wb2x5Z29ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcblxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcblxuICB9XG59XG5cblxuQGtleWZyYW1lcyBlYXNlLW91dC1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVyZW0pO1xuICB9XG5cbiAgODUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjNyZW0pO1xuICB9XG5cbiAgOTclIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS4ycmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxuICB9XG59XG5cblxuQGtleWZyYW1lcyBzaGFkb3cge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAuMXJlbSAuMnJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xMDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMjAxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCVcbiAgfVxuXG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBtb3ZlLWJhY2tncm91bmQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXG4gIH1cblxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlXG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCVcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtYmFja2dyb3VuZCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCVcbiAgfVxuXG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxuICB9XG59XG4iLCJAa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZoKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZWFzZS1vdXQtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cmVtKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjNyZW0pO1xuICB9XG4gIDk3JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjJyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGFkb3cge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4ycmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEwMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMjAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbW92ZS1iYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLWJhY2tncm91bmQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICB9XG59XG46aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzAwYzlmZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2IyOTJmZSwgIzAwYzlmZik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjYjI5MmZlLCAjMDBjOWZmKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNS42cmVtKTtcbiAgd2lkdGg6IDUwcmVtO1xuICBsZWZ0OiA3MiU7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMTElLCAxMDAlIDM1JSwgMTAwJSA3MCUsIDEwMCUgMTAwJSwgMjUlIDEwMCUsIDAgNzUlLCAyNSUgNTAlLCAwIDI1JSwgMjUlIDApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtYmFja2dyb3VuZCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IG1vdmUtYmFja2dyb3VuZCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLWJhY2tncm91bmQgMTVzIGVhc2UgaW5maW5pdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMHJlbTtcbiAgICBsZWZ0OiA4MiU7XG4gIH1cbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvY29sb3JzJztcbkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy9hbmltYXRpb24nO1xuXG46aG9zdCB7XG5cbiAgcG9zaXRpb24gICAgICAgICAgICAgIDogZml4ZWQ7XG4gIC8vIGJhY2tncm91bmQtY29sb3IgICA6ICMyMUQ0RkQ7XG5cbiAgYmFja2dyb3VuZDogIzAwYzlmZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2IyOTJmZSwgIzAwYzlmZik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjYjI5MmZlLCAjMDBjOWZmKTtcbiAgaGVpZ2h0ICAgIDogY2FsYygxMDB2aCAtIDUuNnJlbSk7XG4gIHdpZHRoICAgICA6IDUwcmVtO1xuICBsZWZ0ICAgICAgOiA3MiU7XG4gIGNsaXAtcGF0aCA6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDExJSwgMTAwJSAzNSUsIDEwMCUgNzAlLCAxMDAlIDEwMCUsIDI1JSAxMDAlLCAwIDc1JSwgMjUlIDUwJSwgMCAyNSUsIDI1JSAwKTtcblxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcblxuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1iYWNrZ3JvdW5kIDE1cyBlYXNlIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbiAgIDogbW92ZS1iYWNrZ3JvdW5kIDE1cyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24gICAgICAgIDogbW92ZS1iYWNrZ3JvdW5kIDE1cyBlYXNlIGluZmluaXRlO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMHJlbTtcbiAgICBsZWZ0IDogODIlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/ui/polygons/polygons.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/ui/polygons/polygons.component.ts ***!
  \**********************************************************/
/*! exports provided: PolygonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonsComponent", function() { return PolygonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PolygonsComponent = class PolygonsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PolygonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-polygons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./polygons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/polygons/polygons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./polygons.component.scss */ "./src/app/shared/ui/polygons/polygons.component.scss")).default]
    })
], PolygonsComponent);



/***/ }),

/***/ "./src/app/shared/ui/upload-image/upload-image.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/ui/upload-image/upload-image.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS91cGxvYWQtaW1hZ2UvdXBsb2FkLWltYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/ui/upload-image/upload-image.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/ui/upload-image/upload-image.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UploadImageComponent = class UploadImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadImageComponent.prototype, "onImagePicked", void 0);
UploadImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/ui/upload-image/upload-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-image.component.scss */ "./src/app/shared/ui/upload-image/upload-image.component.scss")).default]
    })
], UploadImageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    REST_URL: `http://localhost:8080/api/v1`,
    WEBSOCKET_URL: `http://localhost:8080/`,
    NOTIFICATION_KEY: `BMOo-DGN52-xQhRI5_YGqjU6VUpADG942WnkbOFDR174yll9cR1WqGgBSexQmmUZ9EQ7-C66pgUfh2XdkG-Ebkc`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tzachbonfil/Projects/chat-me-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map