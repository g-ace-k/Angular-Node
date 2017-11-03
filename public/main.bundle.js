webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flashMessage {\r\n    color: red;\r\n}\r\n.main-container {\r\n  margin: 0 auto;\r\n  padding-top: 64px;\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blackjack_blackjack_component__ = __webpack_require__("../../../../../src/app/components/blackjack/blackjack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_class_website_class_website_component__ = __webpack_require__("../../../../../src/app/components/class-website/class-website.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'blackjack', component: __WEBPACK_IMPORTED_MODULE_9__components_blackjack_blackjack_component__["a" /* BlackjackComponent */] },
    { path: 'classWebsite', component: __WEBPACK_IMPORTED_MODULE_10__components_class_website_class_website_component__["a" /* ClassWebsiteComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] } //AuthGuard for authorization checks
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_blackjack_blackjack_component__["a" /* BlackjackComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_class_website_class_website_component__["a" /* ClassWebsiteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p> This would be the about page. This is only a template web app so as of now, this page is empty</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blackjack/blackjack.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".specialJumbotron {\r\nposition: relative;\r\nwidth:100%;\r\nheight: 100%;\r\nbackground-size: 100% 100%;\r\nmargin-top: -30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blackjack/blackjack.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron specialJumbotron\">\n  <div class=\"container\">\n    <div class=\"col-lg-6 text-center\">\n      <img src=\"../../../assets/web_hi_res_512.png\" alt=\"Blackjack Image\" height=\"192\" width=\"192\">\n    </div>\n    <div class=\"col-lg-6 text-center\">\n      <h2>Links to github and Google play store</h2>\n      <br>\n      <div class=\"row\">\n        <a href=\"https://github.com/g-ace-k/blackjack\" class=\"btn btn-info\">Github Repository</a>\n      </div>\n      <br>\n      <div class=\"row\">\n        <a href=\"https://play.google.com/store/apps/details?id=com.mikegacek.blackjack\" class=\"btn btn-primary\">Play Store</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <h1>A quick summary of this mobile app.</h1>\n    <p class=\"text-left\">This mobile app was created in Android Studio, using a custom framework and openGL for graphics. I decided to go this route because one I never planned on making\n      really large and complex apps that could benefit from frameworks already out there like Unity or LibGDX that would add a lot of unneccessary weight to the app, and two I\n      wanted to see if I could make a native app from scratch. The game is essentially run by going through a general update and present method, and then depending on the 1 of 6 states of the game\n      runs seperate updates and present methods to detect touch presses and updates based on the touchpoint. All artwork and sounds were also created by me, which was probably the hardest\n      part in making this app, as I am not really a graphic or sound artist.  With a custom framework only adding everything that is neccessary to run the game, \n      it clocks in to a little under 33 MBs in size, compared to similar blackjack apps that can be as much as 100 MBs. Watch the video below for a quick look at the gameplay. \n    </p>\n  </div>\n  <br>\n  <br>\n  <div class=\"row text-center\" >\n  <h1>What you will find in this web app.</h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Framework and OpenGl</h2>\n      <p>Handles quick drawing of all assets, checks for touch responses, easy to use for any future apps, less overhead than other frameworks, and much more.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>Object Serialization</h2>\n      <p>Quick saving and loading of the data manager objects that allows the game state to persist whenever the app is paused, closed, or exited</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>Google Firebase</h2>\n      <p>Firebase integration provides detailed anayltics to your app.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Quality App</h2>\n      <p>A blackjack app that peaked in the top 16, currently in the top 36 when searching for blackjack, and rated at 4.23 stars.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>Customizable game</h2>\n      <p>A blackjack app that doesn't adhere to a specific ruleset, but has many different settings to allow one to play the blacjack game they are most familiar with.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>Google Admob</h2>\n      <p>Admob integration shows video and rewarded interstitial ads in the game.</p>\n    </div>\n  </div>\n  <br>\n  <br>\n\n\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <iframe style=\"margin-bottom:20px;\" width=\"100%\" height=\"600px\" src=\"https://www.youtube-nocookie.com/embed/hvn3mz7HWi8?rel=0\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/blackjack/blackjack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlackjackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlackjackComponent = (function () {
    function BlackjackComponent() {
    }
    BlackjackComponent.prototype.ngOnInit = function () {
    };
    BlackjackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blackjack',
            template: __webpack_require__("../../../../../src/app/components/blackjack/blackjack.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blackjack/blackjack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlackjackComponent);
    return BlackjackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/class-website/class-website.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".specialJumbotron {\r\nposition: relative;\r\nwidth:100%;\r\nheight: 100%;\r\nbackground-size: 100% 100%;\r\nmargin-top: -30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/class-website/class-website.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron specialJumbotron\">\n  <div class=\"container\">\n    <div class=\"col-lg-6 text-center\">\n      <img src=\"../../../assets/sxu.png\" alt=\"SXU Image\" height=\"186\" width=\"318\">\n    </div>\n    <div class=\"col-lg-6 text-center\">\n      <h2>Links to github and dev site</h2>\n      <br>\n      <div class=\"row\">\n        <a href=\"https://github.com/g-ace-k/classWebsite\" class=\"btn btn-info\">Github Repository</a>\n      </div>\n      <br>\n      <div class=\"row\">\n        <a href=\"https://csmaster.sxu.edu/1pet1vet/login.php\" class=\"btn btn-primary\">Dev site</a>\n      </div>\n      <br>\n      <div class=\"row text-left\">\n        <div class=\"col-lg-6\">\n          <p>User Login: mikegacek</p>\n          <p>User password: abc123</p>\n        </div>\n        <div class=\"col-lg-6\">\n          <p>Admin Login: ktaylor</p>\n          <p>Admin password: 123456</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <h1>A summary of the work I did</h1>\n    <p class=\"text-left\"> This website was written in PHP and javascript, and uses ajax for http requests. I initially started on working on mapping an ER diagram and relational schema. I then helped in setting up the backend of the website by creating some of the DAO's, model classes\n      and service classes. I worked on some frontend as well, mainly of the page that displays the videos with access depending on which user is accessing it. I created a javascript file that\n      would allow the carousel, where the videos were being displayed, to rotate to the correct video when clicked through the dropdown menu. It also unloaded all videos that weren't being displayed\n      to reduce overhead on the page. Finally I worked on making an exportable excel spreadsheet whenever admins wanted to save any query searches in the database.\n    </p>\n  </div>\n  <br>\n  <br>\n  \n  <div class=\"modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body…</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/class-website/class-website.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassWebsiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassWebsiteComponent = (function () {
    function ClassWebsiteComponent() {
    }
    ClassWebsiteComponent.prototype.ngOnInit = function () {
    };
    ClassWebsiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-class-website',
            template: __webpack_require__("../../../../../src/app/components/class-website/class-website.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/class-website/class-website.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassWebsiteComponent);
    return ClassWebsiteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p> This would be the contact page. Normally this page would contain a mailer so you can send an email to the web app owner,\n    but as of now this page is empty.\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\ntd, th {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n    color: black;\r\n}\r\n\r\n.tableButton {\r\n    border: 0px none;\r\n    background-color:transparent;\r\n}\r\n\r\n.tableElements {\r\n    font-size:18px;\r\n    color:#e95420;\r\n}\r\n.flash {\r\n    position:fixed; \r\n    bottom: 0px; \r\n    left: 0px; \r\n    width: 100%;\r\n    z-index:9999; \r\n    border-radius:0px\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userGreeting\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-lg-offset-4 text-center\">\n      <h1> Welcome {{userGreeting}}</h1>\n      <p>Click this button to see all users in the database</p>\n      <button (click)=\"createTable()\" type=\"button\" class=\"btn btn-primary\">Find Users</button>\n    </div>\n  </div>\n\n  <br>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-lg-offset-3\">\n      <table *ngIf=\"usersArray!=null\">\n        <tr>\n          <th class=\"tableElements\">Name</th>\n          <th class=\"tableElements\">Username</th>\n        </tr>\n        <tr *ngFor=\"let user of usersArray; let x = index;\">\n          <th>{{user.name}}</th>\n          <th>{{user.username}}</th>\n          <th class=\"tableButton\"><button (click)=\"deleteUser(x)\" type=\"button\" class=\"btn btn-danger\" style=\"margin-left:20px;\">Delete</button></th>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <br>\n  <div class=\"col-lg-1 col-lg-offset-10 flash\">\n    <flash-messages></flash-messages>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userGreeting = " ";
        if (this.authService.loggedIn()) {
            this.userGreeting = JSON.parse(localStorage.getItem('user')).name;
        }
    };
    DashboardComponent.prototype.createTable = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (users) {
            _this.usersArray = users;
        });
    };
    DashboardComponent.prototype.deleteUser = function (x) {
        var _this = this;
        this.authService.deleteUser(this.usersArray[x]).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.createTable();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footerStyle {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n  background-color: #efefef;\r\n  text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-lg-12 text-center panel-footer footerStyle\">\n  <p>©2017 Michael Gacek</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".specialJumbotron {\r\nposition: relative;\r\nwidth:100%;\r\nheight: 100%;\r\nbackground-size: 100% 100%;\r\nmargin-top: -60px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron specialJumbotron\">\n  <div class=\"container\">\n    <div *ngIf=\"userGreeting\" class=\"col-lg-6\">\n      <h2>Welcome {{userGreeting}}</h2>\n      <p> You can add a new user to the database using the form to the right </p>\n      <p> You can then log into the user to go to the dashboard page</p>\n      <p> View all source code here <a href=\"https://github.com/g-ace-k\"  class=\"btn btn-info\">Github Repository</a></p>\n    </div>\n    <div class=\"col-lg-6\">\n      <div *ngIf=\"!authService.loggedIn()\">\n      <form (submit)=\"onRegisterSubmit()\" class=\"form-horizontal\">\n        <fieldset>\n          <legend>Create a User</legend>\n          <div class=\"form-group\">\n            <label for=\"inputName\" class=\"col-lg-2 control-label\">Name</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputUsername\" class=\"col-lg-2 control-label\">Username</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n            <div class=\"col-lg-10\">\n              <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-lg-2 col-lg-offset-2\">\n              <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n            </div>\n            <div class=\"col-lg-6 col-lg-offset-2\" style=\"height:62px\">\n              <flash-messages></flash-messages>\n            </div>\n          </div>\n        </fieldset>\n      </form>\n      </div><div *ngIf=\"authService.loggedIn()\">\n      <form (submit)=\"onEditSubmit()\" class=\"form-horizontal\">\n        <fieldset>\n          <legend>Edit User</legend>\n          <div class=\"form-group\">\n            <label for=\"inputName\" class=\"col-lg-2 control-label\">Name</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" [(ngModel)]=\"newName\" name=\"name\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n            <div class=\"col-lg-10\">\n              <input type=\"password\" [(ngModel)]=\"newPassword\" name=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-lg-2 col-lg-offset-2\">\n              <button type=\"submit\" class=\"btn btn-primary\">Save Changes</button>\n            </div>\n            <div class=\"col-lg-6 col-lg-offset-2\" style=\"height:62px\">\n              <flash-messages></flash-messages>\n            </div>\n          </div>\n        </fieldset>\n      </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <h1>A quick summary of this web app.</h1>\n    <p class=\"text-left\">This web app was created using a MEAN stack and ultimately will serve as a template for a future webapp I plan on making.\n      The goal of this web app was to become familiar with using both frontend and backend frameworks as well as becoming\n      familiar with a NoSQL database as I had experience working with MySQL databases already. The creating users and login\n      page doesn't really provide any additional functionality besides allowing a look at all users in the database as a\n      way to check the database is working as expected. I wouldn't advise on putting in real passwords but they are still\n      stored using bcrypt.</p>\n  </div>\n  <br>\n  <br>\n  <div class=\"row text-center\" >\n  <h1>What you will find in this web app.</h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>Backend Functionality</h2>\n      <p>Handle all database requests through REST apis on the backend seperate from the client.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>MongoDB</h2>\n      <p>Uses a NoSQL database hosted at <a href=\"https://mlab.com/\">mLab.</a> for ease of use and scalability.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>Angular</h2>\n      <p><a href=\"https://angular.io/\">Angular</a> framework and angular-cli for generating components, services, etc and local dev server for easy testing.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <h2>OAuth and Passport</h2>\n      <p>This might only be a test web app, but hey why not have secure authorization and authentication.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>Bootstrap</h2>\n      <p>For speedy development, responsiveness, and consistency for an easy to view web app that works for all screen sizes.</p>\n    </div>\n    <div class=\"col-lg-4\">\n      <h2>My other Projects</h2>\n      <p>Want to know what else I've worked on? View a brief summary of my projects as well as links to their github page and where to view them in action.</p>\n    </div>\n  </div>\n  <br>\n  <br>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    //inject services into constructor
    function HomeComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userGreeting = " ";
        if (this.authService.loggedIn()) {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.userGreeting = this.user.name;
        }
        this.newName = this.userGreeting;
    };
    HomeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //create an object from create user fields
        var newUser = {
            name: this.name,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(newUser)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 6000 });
            return false;
        }
        //Register
        this.authService.registerUser(newUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
            }
        });
    };
    HomeComponent.prototype.onEditSubmit = function () {
        var _this = this;
        if (this.newPassword == undefined) {
            this.newPassword = null;
        }
        var editUser = {
            id: this.user.id,
            name: this.newName,
            username: this.user.username,
            password: this.newPassword
        };
        this.authService.updateUser(editUser).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
                //If user editted is the user logged in.
                if (editUser.id == _this.user.id) {
                    _this.userGreeting = editUser.name;
                    var updateUser = {
                        id: editUser.id,
                        name: editUser.name,
                        username: editUser.username
                    };
                    _this.authService.updateUserData(updateUser);
                }
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loginContainer{\r\n    padding-top: 25vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-4 col-lg-offset-4 loginContainer\">\n      <form (submit)=\"onLoginSubmit()\" class=\"form-horizontal\">\n        <fieldset>\n          <legend>Login</legend>\n          <div class=\"form-group\">\n            <label for=\"inputUsername\" class=\"col-lg-2 control-label\">Username</label>\n            <div class=\"col-lg-10\">\n              <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n            <div class=\"col-lg-10\">\n              <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-lg-2 col-lg-offset-2\">\n              <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n            </div>\n            <div class=\"col-lg-6 col-lg-offset-2\" style=\"height:62px\">\n              <flash-messages></flash-messages>\n            </div>\n          </div>\n        </fieldset>\n      </form>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!this.validateService.validateLogin(user)) {
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 6000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" id=\"navBarTop\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n                <button type=\"button\" \n                        class=\"navbar-toggle collapsed\"\n                        (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Project Manager</a>\n        </div>\n         <div class=\"collapse navbar-collapse navbar-center\"\n              [ngClass]=\"{ 'in': isIn }\">\n            <ul class=\"nav navbar-nav\">\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n                <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Other Projects<span class=\"caret\"></span></a>\n                <div class=\"dropdown-menu\">\n                    <li><a  [routerLink]=\"['/blackjack']\">Blackjack Android App</a></li>\n                    <li><a  [routerLink]=\"['/classWebsite']\">Class Website</a></li>\n                </div>\n                </li>\n                \n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/about']\">About</a></li>\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/contact']\">Contact</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                  <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/login']\">Login</a></li>\n                  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n            </ul>\n        </div>\n        \n    </div>\n    \n</nav>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        console.log("HERE");
        this.flashMessage.show("You are logged out", { cssClass: "alert-success", timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('users/delete/' + user._id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/allUsers', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/updateUser', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    //save in local storage when logged in
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user)); //can only save as string in local storage, parse back to json when accessing
        this.authtoken = token;
        this.user = user;
    };
    AuthService.prototype.updateUserData = function (user) {
        localStorage.setItem('user', JSON.stringify(user)); //can only save as string in local storage, parse back to json when accessing
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authtoken = token;
    };
    //check to see if logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        //If a field is missing
        if (user.name == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        //If a field is missing
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map