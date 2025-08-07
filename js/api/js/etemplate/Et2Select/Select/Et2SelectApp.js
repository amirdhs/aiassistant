"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectApp = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var FindSelectOptions_1 = require("../FindSelectOptions");
var property_js_1 = require("lit/decorators/property.js");
var Et2SelectApp = /** @class */ (function (_super) {
    __extends(Et2SelectApp, _super);
    function Et2SelectApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Which apps to show: 'user'=apps of current user, 'enabled', 'installed' (default), 'all' = not installed ones too, 'all+setup'
         */
        _this.apps = 'installed';
        return _this;
    }
    Et2SelectApp.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.fetchComplete = StaticOptions_1.StaticOptions.app(this, { apps: this.apps }).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2SelectApp.prototype, "apps", void 0);
    return Et2SelectApp;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectApp = Et2SelectApp;
customElements.define("et2-select-app", Et2SelectApp);
