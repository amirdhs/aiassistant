"use strict";
/**
 * EGroupware eTemplate2 - Fax input widget
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
exports.Et2UrlFax = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2UrlPhone_1 = require("./Et2UrlPhone");
var Et2UrlEmail_1 = require("./Et2UrlEmail");
var colorsDefStyles_1 = require("../Styles/colorsDefStyles");
var lit_1 = require("lit");
/**
 * @customElement et2-url-phone
 */
var Et2UrlFax = /** @class */ (function (_super) {
    __extends(Et2UrlFax, _super);
    function Et2UrlFax() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        //this.defaultValidators.push(...);
        _this._invokerLabel = '📠';
        _this._invokerTitle = 'Send';
        _this._invokerAction = function () {
            Et2UrlFax.action(_this.value);
        };
        return _this;
    }
    Object.defineProperty(Et2UrlFax, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                colorsDefStyles_1.colorsDefStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 90% !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 90% !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2UrlFax.action = function (value) {
        // convert fax numbers to email, if configured
        if (egw.config('fax_email') && (value = value.replace('&#9829;', '').replace('(0)', '').replace(/[^0-9+]/g, ''))) {
            value = value.replace(new RegExp(egw.config('fax_email_regexp') || '(.*)'), egw.config('fax_email'));
            Et2UrlEmail_1.Et2UrlEmail.action(value);
        }
        else {
            Et2UrlPhone_1.Et2UrlPhone.action(value);
        }
    };
    return Et2UrlFax;
}(Et2UrlPhone_1.Et2UrlPhone));
exports.Et2UrlFax = Et2UrlFax;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url-fax", Et2UrlFax);
var templateObject_1;
