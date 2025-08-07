"use strict";
/**
 * EGroupware eTemplate2 - Phone input widget
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
exports.Et2UrlPhone = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2InvokerMixin_1 = require("./Et2InvokerMixin");
var Et2Textbox_1 = require("../Et2Textbox/Et2Textbox");
var colorsDefStyles_1 = require("../Styles/colorsDefStyles");
var lit_1 = require("lit");
/**
 * @customElement et2-url-phone
 */
var Et2UrlPhone = /** @class */ (function (_super) {
    __extends(Et2UrlPhone, _super);
    function Et2UrlPhone() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        //this.defaultValidators.push(...);
        _this._invokerLabel = '✆';
        _this._invokerTitle = 'Call';
        _this._invokerAction = function () {
            Et2UrlPhone.action(_this.value);
        };
        return _this;
    }
    Object.defineProperty(Et2UrlPhone, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                colorsDefStyles_1.colorsDefStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 133% !important;\n\t\t\t\t\theight: auto;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 133% !important;\n\t\t\t\t\theight: auto;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2UrlPhone.action = function (value) {
        // Clean number
        value = value.replace('&#9829;', '').replace('(0)', '');
        value = value.replace(/[abc]/gi, 2).replace(/[def]/gi, 3).replace(/[ghi]/gi, 4).replace(/[jkl]/gi, 5).replace(/[mno]/gi, 6);
        value = value.replace(/[pqrs]/gi, 7).replace(/[tuv]/gi, 8).replace(/[wxyz]/gi, 9);
        // remove everything but numbers and plus, as telephon software might not like it
        value = value.replace(/[^0-9+]/g, '');
        if (!value)
            return; // don't try to dial an empty number
        // mobile Webkit (iPhone, Android) have precedence over server configuration!
        if (navigator.userAgent.indexOf('AppleWebKit') !== -1 &&
            (navigator.userAgent.indexOf("iPhone") !== -1 || navigator.userAgent.indexOf("Android") !== -1)) {
            window.open("tel:" + value);
        }
        else if (egw.config("call_link")) {
            var link = egw.config("call_link")
                // tel: links use no URL encoding according to rfc3966 section-5.1.4
                .replace("%1", egw.config("call_link").substr(0, 4) == 'tel:' ?
                value : encodeURIComponent(value))
                .replace("%u", egw.user('account_lid'))
                .replace("%t", egw.user('account_phone'));
            var popup = egw.config("call_popup");
            if (popup && popup !== '_self' || !link.match(/^https?:/)) // execute non-http(s) links eg. tel: like before
             {
                egw.open_link(link, '_phonecall', popup);
            }
            else {
                // No popup, use AJAX.  We don't care about the response.
                window.fetch(link, {
                    headers: { 'Content-Type': 'application/json' },
                    method: "GET",
                });
            }
        }
    };
    return Et2UrlPhone;
}(Et2InvokerMixin_1.Et2InvokerMixin(Et2Textbox_1.Et2Textbox)));
exports.Et2UrlPhone = Et2UrlPhone;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url-phone", Et2UrlPhone);
var templateObject_1;
