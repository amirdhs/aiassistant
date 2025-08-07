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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectLang = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var FindSelectOptions_1 = require("../FindSelectOptions");
var Et2SelectLang = /** @class */ (function (_super) {
    __extends(Et2SelectLang, _super);
    function Et2SelectLang() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectLang.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // Wait for connected instead of constructor because attributes make a difference in
        // which options are offered
        this.fetchComplete = StaticOptions_1.StaticOptions.lang(this, { other: this.other || [] }).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    return Et2SelectLang;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectLang = Et2SelectLang;
customElements.define("et2-select-lang", Et2SelectLang);
