"use strict";
/**
 * EGroupware eTemplate2 - Url r/o widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Ralf Becker
 */
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2UrlReadonly = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2Description_1 = require("../Et2Description/Et2Description");
var lit_1 = require("lit");
var Et2Url_1 = require("./Et2Url");
/**
 * @customElement et2-url_ro
 */
var Et2UrlReadonly = /** @class */ (function (_super) {
    __extends(Et2UrlReadonly, _super);
    function Et2UrlReadonly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Don't try to translate URLs (or sub-classes)
        _this.noLang = true;
        return _this;
    }
    Object.defineProperty(Et2UrlReadonly, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  \n\t\t\ta {\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: var(--primary-background-color) !important;\n\t\t\t    text-decoration: none !important;\n\t\t\t}"], ["\n\t\t\t  \n\t\t\ta {\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: var(--primary-background-color) !important;\n\t\t\t    text-decoration: none !important;\n\t\t\t}"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2UrlReadonly.prototype.transformAttributes = function (attrs) {
        var _this = this;
        if (typeof attrs.onclick === 'undefined') {
            attrs.onclick = function () {
                if (_this.value) {
                    Et2Url_1.Et2Url.action(_this.value);
                }
            };
        }
        _super.prototype.transformAttributes.call(this, attrs);
    };
    /**
     * Override parent render so we can have the special case where label is used as link text
     *
     * @returns {TemplateResult<1>}
     * @protected
     */
    Et2UrlReadonly.prototype.render = function () {
        if (this.label && !this.href && this.value) {
            // We have label & value, use label as link text
            return this.wrapLink(this.value, this.label);
        }
        return _super.prototype.render.call(this);
    };
    return Et2UrlReadonly;
}(Et2Description_1.Et2Description));
exports.Et2UrlReadonly = Et2UrlReadonly;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url_ro", Et2UrlReadonly);
var templateObject_1;
