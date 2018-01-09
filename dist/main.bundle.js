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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-add-feeding></app-add-feeding>\n<div class=\"container\">\n  <!--<p class='flow-text'>Our app was created from the ground up to help parents overcome the challenges of being a new parent.\n    We make it easy to track feedings, pees, and bowel movements. We also make it easy to track mom's breast feeding amounts to make sure\n    her supply is staying up! We will keep daily totals as well so you can look back &amp; see how you've been doing.\n    We'll send you emails at the end of the month to show up how you and baby are doing with tips to keep you on track!\n  </p>-->\n  <app-feedings></app-feedings>\n</div>\n"

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
        this.title = 'Baby Tracker';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/ngx-pipes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_feedings_feedings_component__ = __webpack_require__("../../../../../src/app/components/feedings/feedings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_feeding_service__ = __webpack_require__("../../../../../src/app/services/feeding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_feeding_add_feeding_component__ = __webpack_require__("../../../../../src/app/components/add-feeding/add-feeding.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_feedings_feedings_component__["a" /* FeedingsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_feeding_add_feeding_component__["a" /* AddFeedingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pipes__["a" /* NgPipesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_feeding_service__["a" /* FeedingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-feeding/add-feeding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-feeding/add-feeding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">Add Feeding</span>\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input type=\"text\" placeholder=\"Parent's Name\" [(ngModel)]=\"currentFeeding.parent\" name=\"parent\">\n          <label>Parent's Name</label>\n        </div>   \n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <label for=\"date\">Date</label>\n          <input type=\"text\" id=\"date\" name=\"date\" class=\"datepicker\" placeholder=\"{{todaysDate}}\" [(ngModel)]=\"feeding.date\">\n        </div>\n        <div class=\"input-field col s6\">\n          <label for=\"time\">Time</label>\n          <input type=\"text\" name=\"time\" id=\"time\" class=\"timepicker\" placeholder=\"{{todaysTime}}\" [(ngModel)]=\"currentFeeding.time\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <p class=\"range-field\">\n            <label for=\"bmAmount\">Breastmilk Amount</label><br><br>\n            <input type=\"range\" id=\"bmAmount\" name=\"bmAmount\" min=\"0\" max=\"150\" [(ngModel)]=\"currentFeeding.bmAmount\"  />\n          </p>\n          \n        </div>     \n        <div class=\"input-field col s6\">\n          <p class=\"range-field\">\n            <label for=\"fAmount\">Formula Amount</label><br><br>\n            <input type=\"range\" id=\"fAmount\" name=\"fAmount\" min=\"0\" max=\"150\" [(ngModel)]=\"currentFeeding.fAmount\"  />\n          </p>\n        </div>     \n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <p>\n            <input type=\"checkbox\" class=\"filled-in\" name=\"pee\" id=\"pee\" [(ngModel)]=\"currentFeeding.pee\" />\n            <label for=\"pee\">Yes?</label>\n          </p>\n        </div>\n        <div class=\"input-field col s6\">\n          <input type=\"checkbox\" class=\"filled-in\" id=\"poop\" name=\"poop\" [(ngModel)]=\"currentFeeding.poop\" />\n          <label for=\"poop\">Pooped?</label>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col s6 offset-s5\">\n            <input type=\"submit\" value=\"Submit\" class=\"btn\">\n        </div>\n      </div>\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-feeding/add-feeding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFeedingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feeding_service__ = __webpack_require__("../../../../../src/app/services/feeding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFeedingComponent = (function () {
    function AddFeedingComponent(feedingService) {
        this.feedingService = feedingService;
        this.m = __WEBPACK_IMPORTED_MODULE_2_moment__();
        this.todaysDate = __WEBPACK_IMPORTED_MODULE_2_moment__().format('LL');
        this.todaysTime = __WEBPACK_IMPORTED_MODULE_2_moment__().format('LT');
        this.currentFeeding = {
            time: this.todaysTime,
            bmAmount: 0,
            fAmount: 0,
            parent: '',
            pee: true,
            poop: true
        };
        this.feeding = {
            date: this.todaysDate,
            feedings: [
                this.currentFeeding
            ]
        };
    }
    AddFeedingComponent.prototype.onSubmit = function () {
        if (this.currentFeeding.parent != '') {
            /* Switch feeding time & date to ISO format */
            this.currentFeeding.time = __WEBPACK_IMPORTED_MODULE_2_moment__(this.feeding.date + " " + this.currentFeeding.time).format();
            this.feeding.date = __WEBPACK_IMPORTED_MODULE_2_moment__(this.feeding.date).format();
            this.feedingService.addFeeding(this.feeding);
            // Resets
            this.currentFeeding = {
                time: __WEBPACK_IMPORTED_MODULE_2_moment__().format('LT'),
                bmAmount: 0,
                fAmount: 0,
                parent: '',
                pee: true,
                poop: true
            };
            this.feeding.date = __WEBPACK_IMPORTED_MODULE_2_moment__().format('LL');
        }
    };
    AddFeedingComponent.prototype.ngOnInit = function () {
    };
    AddFeedingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-feeding',
            template: __webpack_require__("../../../../../src/app/components/add-feeding/add-feeding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-feeding/add-feeding.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_feeding_service__["a" /* FeedingService */]])
    ], AddFeedingComponent);
    return AddFeedingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feedings/feedings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th i {\n    vertical-align: bottom;\n}\n\n.collapsible-header i {\n    vertical-align: bottom;\n}\n\n.blank-icon {\n    color: gray;\n}\n\n.peed-icon {\n    color: yellow;\n}\n\n.pooped-icon {\n    color: rgb(148, 71, 0);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feedings/feedings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n      <li *ngFor=\"let month of months\">\n        <div class=\"collapsible-header\">\n          <span><i class=\"material-icons\">date_range</i> &nbsp;<strong>{{month | amDateFormat: 'MMMM YYYY'}}</strong></span>\n        </div>\n        <div class=\"collapsible-body\">\n          <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"expandable\">  \n            <li *ngFor=\"let feeding of feedings | orderBy: 'date'\">\n              <ng-container *ngIf=\"(month | amDateFormat: 'MMM YYYY') == (feeding.date | amDateFormat: 'MMM YYYY')\">\n                <div class=\"collapsible-header valign-wrapper\" (dblclick)=\"deleteFeeding($event, feeding)\">\n                  <span><i class=\"material-icons\">today</i> &nbsp;<strong>{{feeding.date | amDateFormat:'MMMM Do YYYY'}}</strong></span>\n                </div>\n                <div class=\"collapsible-body\">\n                  <table class=\"striped bordered centered\"> \n                    <thead>\n                      <tr>\n                        <th><i class=\"material-icons\">access_time</i> &nbsp;Time</th>\n                        <th><i class=\"material-icons\">local_dining</i>&nbsp;Feeding</th>\n                        <th><i class=\"material-icons\">archive</i> &nbsp;Diapers</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n                      <tr *ngFor=\"let feed of feeding.feedings | orderBy: 'time'\">\n                        <td>{{feed.time | amDateFormat: 'hh:mm A'}}</td>\n                        <td>{{feed.bmAmount}} BM | {{feed.fAmount}} F</td>\n                        <td>\n                          <i *ngIf=\"feed.pee;else blankItem\" class=\"material-icons peed-icon medium\">fiber_manual_record</i>\n                          <ng-template #blankItem><i class=\"material-icons blank-icon medium\">fiber_manual_record</i></ng-template>\n                          <i *ngIf=\"feed.poop;else blankItem\" class=\"material-icons pooped-icon medium\">fiber_manual_record</i>\n                          <ng-template #blankItem><i class=\"material-icons blank-icon medium\">fiber_manual_record</i></ng-template>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </ng-container>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/feedings/feedings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feeding_service__ = __webpack_require__("../../../../../src/app/services/feeding.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedingsComponent = (function () {
    function FeedingsComponent(feedingService) {
        this.feedingService = feedingService;
        this.months = [];
    }
    FeedingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedingService.getFeedings().subscribe(function (feedings) {
            //console.log(feedings);
            _this.feedings = feedings;
            _this.getMonths();
            // Sort Months by ISO Format after getting them
            _this.months = _this.sortMonthsDesc(_this.months);
        });
    };
    FeedingsComponent.prototype.deleteFeeding = function (e, feeding) {
        this.feedingService.deleteFeeding(feeding);
    };
    FeedingsComponent.prototype.getMonths = function () {
        var _this = this;
        var monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.feedings.forEach(function (feed) {
            var date = new Date(feed.date);
            var month = date.getMonth();
            var year = date.getFullYear();
            var string = new Date(monthStrings[month] + ' ' + year).toISOString();
            //var string = monthStrings[month] + ' ' + year;
            if (_this.months.indexOf(string) === -1) {
                _this.months.push(string);
            }
            console.log(_this.months);
        });
    };
    FeedingsComponent.prototype.sortMonthsDesc = function (arr) {
        arr = arr.sort(function (a, b) {
            return (a < b) ? 1 : ((a > b) ? -1 : 0);
        });
        return arr;
    };
    FeedingsComponent.prototype.sortMonthsAsc = function (arr) {
        arr = arr.sort(function (a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        });
        return arr;
    };
    FeedingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feedings',
            template: __webpack_require__("../../../../../src/app/components/feedings/feedings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feedings/feedings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_feeding_service__["a" /* FeedingService */]])
    ], FeedingsComponent);
    return FeedingsComponent;
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

module.exports = "<nav>\n  <div class=\"nav-wrapper black\">\n    <a href=\"/\" class=\"brand-logo center\">BabyTracker</a>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/feeding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedingService = (function () {
    function FeedingService(afs) {
        this.afs = afs;
        //this.feedings = this.afs.collection('feedings').valueChanges();
        /* Gives us data plus document ID from Firestore */
        this.feedingsCollection = this.afs.collection('feedings');
        this.feedings = this.feedingsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    FeedingService.prototype.getFeedings = function () {
        return this.feedings;
    };
    FeedingService.prototype.addFeeding = function (feeding) {
        this.feedingsCollection.add(feeding);
    };
    FeedingService.prototype.deleteFeeding = function (feeding) {
        this.feedingDoc = this.afs.doc("feedings/" + feeding.id);
        this.feedingDoc.delete();
    };
    FeedingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FeedingService);
    return FeedingService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyCAiPWX7fOmFP42biZTqS0xXRCLFLuqrpk",
        authDomain: "babytracker-dev.firebaseapp.com",
        databaseURL: "https://babytracker-dev.firebaseio.com",
        projectId: "babytracker-dev",
        storageBucket: "babytracker-dev.appspot.com",
        messagingSenderId: "568278737808"
    }
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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map