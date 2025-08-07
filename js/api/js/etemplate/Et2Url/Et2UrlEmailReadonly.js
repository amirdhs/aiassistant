"use strict";
/**
 * EGroupware eTemplate2 - Email url/compose widget
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2UrlEmailReadonly = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var IsEmail_1 = require("../Validators/IsEmail");
var Et2UrlEmail_1 = require("./Et2UrlEmail");
var Et2UrlReadonly_1 = require("./Et2UrlReadonly");
var property_js_1 = require("lit/decorators/property.js");
var utils_1 = require("../Et2Email/utils");
/**
 * @customElement et2-url-email_ro
 */
var Et2UrlEmailReadonly = /** @class */ (function (_super) {
    __extends(Et2UrlEmailReadonly, _super);
    function Et2UrlEmailReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2UrlEmailReadonly.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        set: function (val) {
            this._value = val;
            var split = utils_1.splitEmail(this._value);
            _super.prototype.statustext = !egwIsMobile() && split.name ? split.email : "";
            utils_1.formatEmailAddress(val, !this.emailDisplay ? "email" :
                (this.emailDisplay === 'preference' ? null : this.emailDisplay)).then(function (value) { return _super.prototype.value = value; });
        },
        enumerable: false,
        configurable: true
    });
    Et2UrlEmailReadonly.prototype.transformAttributes = function (attrs) {
        var _this = this;
        if (typeof attrs.onclick === 'undefined') {
            attrs.onclick = function () {
                var email = _this._value;
                if (!IsEmail_1.IsEmail.EMAIL_PREG.exec(email)) {
                    var name_1 = _this._value;
                    // do we need to remove the domain in brackets again?
                    if ((_this.emailDisplay === 'preference' ? window.egw.preference("emailTag", "mail") : _this.emailDisplay) === 'domain') {
                        name_1 = _this._value.replace(/ \([^@. ]+\.[^@ )]+\)$/, '');
                    }
                    email = '"' + name_1 + '" <' + _this.statustext + '>';
                }
                if (IsEmail_1.IsEmail.EMAIL_PREG.exec(email)) {
                    Et2UrlEmail_1.Et2UrlEmail.action(email);
                }
            };
        }
        _super.prototype.transformAttributes.call(this, attrs);
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2UrlEmailReadonly.prototype, "emailDisplay", void 0);
    return Et2UrlEmailReadonly;
}(Et2UrlReadonly_1.Et2UrlReadonly));
exports.Et2UrlEmailReadonly = Et2UrlEmailReadonly;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url-email_ro", Et2UrlEmailReadonly);
