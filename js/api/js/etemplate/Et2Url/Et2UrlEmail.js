"use strict";
/**
 * EGroupware eTemplate2 - Email input widget
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
exports.Et2UrlEmail = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2InvokerMixin_1 = require("./Et2InvokerMixin");
var IsEmail_1 = require("../Validators/IsEmail");
var Et2Textbox_1 = require("../Et2Textbox/Et2Textbox");
var colorsDefStyles_1 = require("../Styles/colorsDefStyles");
var lit_1 = require("lit");
var egw_global_1 = require("../../jsapi/egw_global");
/**
 * @customElement et2-url-email
 */
var Et2UrlEmail = /** @class */ (function (_super) {
    __extends(Et2UrlEmail, _super);
    function Et2UrlEmail() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.defaultValidators.push(new IsEmail_1.IsEmail());
        _this._invokerLabel = '@';
        _this._invokerTitle = 'Compose mail to';
        _this._invokerAction = function () {
            if (_this.value.length > 0 && !_this.hasFeedbackFor.length) {
                Et2UrlEmail.action(_this.value);
            }
        };
        return _this;
    }
    Object.defineProperty(Et2UrlEmail, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                colorsDefStyles_1.colorsDefStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 90% !important;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 90% !important;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2UrlEmail.action = function (value) {
        if (value && egw_global_1.egw.user('apps').mail && egw_global_1.egw.preference('force_mailto', 'addressbook') != '1') {
            egw_global_1.egw.open_link('mailto:' + value);
        }
        else {
            window.open("mailto:" + value);
        }
    };
    return Et2UrlEmail;
}(Et2InvokerMixin_1.Et2InvokerMixin(Et2Textbox_1.Et2Textbox)));
exports.Et2UrlEmail = Et2UrlEmail;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url-email", Et2UrlEmail);
var templateObject_1;
