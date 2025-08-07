"use strict";
/**
 * EGroupware eTemplate2 - Phone url/call widget
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2UrlPhoneReadonly = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2UrlPhone_1 = require("./Et2UrlPhone");
var Et2UrlReadonly_1 = require("./Et2UrlReadonly");
/**
 * @customElement et2-url-phone_ro
 */
var Et2UrlPhoneReadonly = /** @class */ (function (_super) {
    __extends(Et2UrlPhoneReadonly, _super);
    function Et2UrlPhoneReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2UrlPhoneReadonly.prototype.transformAttributes = function (attrs) {
        var _this = this;
        if (typeof attrs.onclick === 'undefined') {
            attrs.onclick = function () {
                Et2UrlPhone_1.Et2UrlPhone.action(_this.value);
            };
        }
        _super.prototype.transformAttributes.call(this, attrs);
    };
    return Et2UrlPhoneReadonly;
}(Et2UrlReadonly_1.Et2UrlReadonly));
exports.Et2UrlPhoneReadonly = Et2UrlPhoneReadonly;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url-phone_ro", Et2UrlPhoneReadonly);
