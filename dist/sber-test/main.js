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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _autosuggest_autosuggest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autosuggest/autosuggest.component */ "./src/app/autosuggest/autosuggest.component.ts");
/* harmony import */ var _directive_phone_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/phone.directive */ "./src/app/directive/phone.directive.ts");
/* harmony import */ var _directive_myInput_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/myInput.directive */ "./src/app/directive/myInput.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_myButton_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/myButton.directive */ "./src/app/directive/myButton.directive.ts");










function AppComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 8(888)-888-88-88 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(fb, _apiService) {
        this.fb = fb;
        this._apiService = _apiService;
        this.title = 'sber-test';
        this.onSubmit = (searchForm) => {
            console.log(searchForm.value);
            this._apiService.setFormOnLocalStorage(searchForm.value);
        };
        this.createForm = (form) => {
            this.form = this.fb.group({
                city: [form === null || form === void 0 ? void 0 : form.city, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                phone: [form === null || form === void 0 ? void 0 : form.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{1}\(\d{3}\)-\d{3}-\d{2}-\d{2}/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        };
        const form = this._apiService.getFormOnLocalStorage();
        this.createForm(form);
    }
    clear() {
        this._apiService.clearLocalStorage();
        this.form.reset();
    }
    get phone() {
        return this.form.get('phone');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 3, consts: [[1, "form-group", 3, "formGroup", "ngSubmit"], [1, "item-form-group"], ["formControlName", "city"], ["formControlName", "phone", "appPhoneMask", "", "mayInput", "", "maxlength", "16", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"], ["class", "invalid-feedback", 4, "ngIf"], ["myButton", "", "type", "submit", 3, "disabled"], ["myButton", "", "type", "button", 3, "click"], [1, "invalid-feedback"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-autosuggest", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.phone.touched || ctx.phone.dirty) && ctx.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _autosuggest_autosuggest_component__WEBPACK_IMPORTED_MODULE_3__["AutosuggestComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directive_phone_directive__WEBPACK_IMPORTED_MODULE_4__["PhoneMaskDirective"], _directive_myInput_directive__WEBPACK_IMPORTED_MODULE_5__["MyInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _directive_myButton_directive__WEBPACK_IMPORTED_MODULE_7__["MyButtonDirective"]], styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   .item-form-group[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n}\n.form-group[_ngcontent-%COMP%]   .item-form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDRSxVQUFBO0FBR04iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5pdGVtLWZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _autosuggest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autosuggest */ "./src/app/autosuggest/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive */ "./src/app/directive/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _autosuggest__WEBPACK_IMPORTED_MODULE_4__["AutosuggestComponent"],
        _directive__WEBPACK_IMPORTED_MODULE_6__["MyInputDirective"],
        _directive__WEBPACK_IMPORTED_MODULE_6__["MyButtonDirective"],
        _directive__WEBPACK_IMPORTED_MODULE_6__["PhoneMaskDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _autosuggest__WEBPACK_IMPORTED_MODULE_4__["AutosuggestComponent"],
                    _directive__WEBPACK_IMPORTED_MODULE_6__["MyInputDirective"],
                    _directive__WEBPACK_IMPORTED_MODULE_6__["MyButtonDirective"],
                    _directive__WEBPACK_IMPORTED_MODULE_6__["PhoneMaskDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
                ],
                providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `https://restcountries.eu/rest/v2/name/`;
    }
    search(queryString) {
        const url = this.baseUrl + queryString;
        return this.http.get(url);
    }
    setFormOnLocalStorage(form) {
        localStorage.setItem('form', JSON.stringify(form));
    }
    getFormOnLocalStorage() {
        return JSON.parse(localStorage.getItem('form'));
    }
    clearLocalStorage() {
        localStorage.clear();
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/autosuggest/autosuggest.component.ts":
/*!******************************************************!*\
  !*** ./src/app/autosuggest/autosuggest.component.ts ***!
  \******************************************************/
/*! exports provided: AutosuggestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosuggestComponent", function() { return AutosuggestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _directive_myInput_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directive/myInput.directive */ "./src/app/directive/myInput.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AutosuggestComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutosuggestComponent_div_2_div_1_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const result_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.selectValue(result_r2 == null ? null : result_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r2 == null ? null : result_r2.name, "");
} }
function AutosuggestComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutosuggestComponent_div_2_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results);
} }
class AutosuggestComponent {
    constructor(_apiService) {
        this._apiService = _apiService;
        this.results = [];
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
        this.selectValue = (value) => {
            this.propagateChange(value);
            this.setCityControl(value);
        };
        this.setCityControl = (value) => {
            this.cityControl.setValue(value);
        };
        this.cityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    ngOnInit() {
        this.cityControl.valueChanges.subscribe((value) => {
            if (value && value.length > 0) {
                this._apiService.search(value).subscribe((result) => {
                    this.results = result.filter(res => res.name.toLowerCase() !== value.toLowerCase());
                }, (error) => {
                    console.log(error);
                    this.results = [];
                });
            }
        });
    }
    writeValue(obj) {
        this.cityControl.setValue(obj);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
}
AutosuggestComponent.ɵfac = function AutosuggestComponent_Factory(t) { return new (t || AutosuggestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
AutosuggestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutosuggestComponent, selectors: [["app-autosuggest"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AutosuggestComponent),
                multi: true
            }])], decls: 3, vars: 2, consts: [[1, "autosuggest-component"], ["mayInput", "", "placeholder", "\u0413\u043E\u0440\u043E\u0434", 3, "formControl", "keyup", "blur"], ["class", "filter-autosuggest-component", 4, "ngIf"], [1, "filter-autosuggest-component"], ["class", "list-filter-autosuggest-component", 4, "ngFor", "ngForOf"], [1, "list-filter-autosuggest-component"], [1, "item-filter-autosuggest-component", 3, "click"]], template: function AutosuggestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AutosuggestComponent_Template_input_keyup_1_listener($event) { return ctx.propagateChange($event.target.value); })("blur", function AutosuggestComponent_Template_input_blur_1_listener($event) { return ctx.propagateTouched($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutosuggestComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.cityControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.results == null ? null : ctx.results.length) > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directive_myInput_directive__WEBPACK_IMPORTED_MODULE_3__["MyInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".autosuggest-component[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n.autosuggest-component[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.autosuggest-component[_ngcontent-%COMP%]   .filter-autosuggest-component[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 30px;\n  width: 100%;\n  border: 1px solid;\n  background: white;\n  max-height: 75px;\n  overflow: auto;\n}\n.autosuggest-component[_ngcontent-%COMP%]   .filter-autosuggest-component[_ngcontent-%COMP%]   .list-filter-autosuggest-component[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.autosuggest-component[_ngcontent-%COMP%]   .filter-autosuggest-component[_ngcontent-%COMP%]   .list-filter-autosuggest-component[_ngcontent-%COMP%]   .item-filter-autosuggest-component[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0;\n  height: 25px;\n  display: flex;\n  align-items: center;\n}\n.autosuggest-component[_ngcontent-%COMP%]   .filter-autosuggest-component[_ngcontent-%COMP%]   .list-filter-autosuggest-component[_ngcontent-%COMP%]   .item-filter-autosuggest-component[_ngcontent-%COMP%]:hover {\n  background: #d8e8ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b3N1Z2dlc3QvYXV0b3N1Z2dlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBRk07RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFJUjtBQUhRO0VBQ0UsbUJBQUE7QUFLViIsImZpbGUiOiJzcmMvYXBwL2F1dG9zdWdnZXN0L2F1dG9zdWdnZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9zdWdnZXN0LWNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbHRlci1hdXRvc3VnZ2VzdC1jb21wb25lbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAubGlzdC1maWx0ZXItYXV0b3N1Z2dlc3QtY29tcG9uZW50e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuaXRlbS1maWx0ZXItYXV0b3N1Z2dlc3QtY29tcG9uZW50e1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGU4ZmY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosuggestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-autosuggest',
                templateUrl: './autosuggest.component.html',
                styleUrls: ['./autosuggest.component.scss'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AutosuggestComponent),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/autosuggest/index.ts":
/*!**************************************!*\
  !*** ./src/app/autosuggest/index.ts ***!
  \**************************************/
/*! exports provided: AutosuggestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autosuggest_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autosuggest.component */ "./src/app/autosuggest/autosuggest.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutosuggestComponent", function() { return _autosuggest_component__WEBPACK_IMPORTED_MODULE_0__["AutosuggestComponent"]; });




/***/ }),

/***/ "./src/app/directive/index.ts":
/*!************************************!*\
  !*** ./src/app/directive/index.ts ***!
  \************************************/
/*! exports provided: MyInputDirective, MyButtonDirective, PhoneMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myInput_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myInput.directive */ "./src/app/directive/myInput.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyInputDirective", function() { return _myInput_directive__WEBPACK_IMPORTED_MODULE_0__["MyInputDirective"]; });

/* harmony import */ var _myButton_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myButton.directive */ "./src/app/directive/myButton.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyButtonDirective", function() { return _myButton_directive__WEBPACK_IMPORTED_MODULE_1__["MyButtonDirective"]; });

/* harmony import */ var _phone_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.directive */ "./src/app/directive/phone.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneMaskDirective", function() { return _phone_directive__WEBPACK_IMPORTED_MODULE_2__["PhoneMaskDirective"]; });






/***/ }),

/***/ "./src/app/directive/myButton.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directive/myButton.directive.ts ***!
  \*************************************************/
/*! exports provided: MyButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyButtonDirective", function() { return MyButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MyButtonDirective {
    constructor(el) {
        el.nativeElement.style.height = '25px';
        el.nativeElement.style.background = 'white';
        el.nativeElement.style.border = '1px solid gray';
        el.nativeElement.style.outline = 'none';
        el.nativeElement.style.cursor = 'pointer';
    }
}
MyButtonDirective.ɵfac = function MyButtonDirective_Factory(t) { return new (t || MyButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MyButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MyButtonDirective, selectors: [["", "myButton", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[myButton]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directive/myInput.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directive/myInput.directive.ts ***!
  \************************************************/
/*! exports provided: MyInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInputDirective", function() { return MyInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MyInputDirective {
    constructor(el) {
        el.nativeElement.style.height = '25px';
        el.nativeElement.style.border = '1px solid gray';
        el.nativeElement.style.outline = 'none';
        el.nativeElement.style.padding = '0 10px';
    }
}
MyInputDirective.ɵfac = function MyInputDirective_Factory(t) { return new (t || MyInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MyInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MyInputDirective, selectors: [["", "mayInput", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mayInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directive/phone.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/directive/phone.directive.ts ***!
  \**********************************************/
/*! exports provided: PhoneMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneMaskDirective", function() { return PhoneMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class PhoneMaskDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    onModelChange(event) {
        console.log(event);
        this.onInputChange(event);
    }
    onInputChange(event) {
        let newVal = event.replace(/\D/g, '');
        if (newVal.length === 0) {
            newVal = '';
        }
        else if (newVal.length <= 1) {
            newVal = newVal.replace(/^(\d{1})/, '$1');
        }
        else if (newVal.length <= 4) {
            newVal = newVal.replace(/^(\d{1})(\d{0,3})/, '$1($2)');
        }
        else if (newVal.length <= 7) {
            newVal = newVal.replace(/^(\d{1})(\d{0,3})(\d{0,3})/, '$1($2)-$3');
        }
        else if (newVal.length <= 9) {
            newVal = newVal.replace(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1($2)-$3-$4');
        }
        else {
            newVal = newVal.substring(0, 11);
            newVal = newVal.replace(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '$1($2)-$3-$4-$5');
        }
        console.log(newVal);
        this.ngControl.valueAccessor.writeValue(newVal);
    }
}
PhoneMaskDirective.ɵfac = function PhoneMaskDirective_Factory(t) { return new (t || PhoneMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"])); };
PhoneMaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PhoneMaskDirective, selectors: [["", "formControlName", "", "appPhoneMask", ""]], hostBindings: function PhoneMaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PhoneMaskDirective_ngModelChange_HostBindingHandler($event) { return ctx.onModelChange($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneMaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[formControlName][appPhoneMask]',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"] }]; }, { onModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['ngModelChange', ['$event']]
        }] }); })();


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
const environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vlzkonopatov/project/test/sber-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map