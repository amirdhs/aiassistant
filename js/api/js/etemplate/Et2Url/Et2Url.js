"use strict";
/**
 * EGroupware eTemplate2 - Url input widget
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Url = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2InvokerMixin_1 = require("./Et2InvokerMixin");
var Et2Textbox_1 = require("../Et2Textbox/Et2Textbox");
var colorsDefStyles_1 = require("../Styles/colorsDefStyles");
var lit_1 = require("lit");
var egw_global_1 = require("../../jsapi/egw_global");
/**
 * @customElement et2-url
 *
 * @ToDo: implement allowPath attributes
 */
var Et2Url = /** @class */ (function (_super) {
    __extends(Et2Url, _super);
    function Et2Url() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this._invokerLabel = '⎆';
        _this._invokerTitle = 'Open';
        _this._invokerAction = function () {
            Et2Url.action(_this.value);
        };
        _this.allowPath = false;
        _this.trailingSlash = undefined;
        return _this;
    }
    Object.defineProperty(Et2Url, "properties", {
        /** @type {any} */
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Allow a path instead of a URL, path must start with /, default false = not allowed
                 */
                allowPath: {
                    type: Boolean,
                }, 
                /**
                 * Require (or forbid) that the path ends with a /, default not checked
                 */
                trailingSlash: {
                    type: Boolean,
                } });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Url, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                colorsDefStyles_1.colorsDefStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 133% !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t::slotted([slot=\"suffix\"]) {\n\t\t\t\t\tfont-size: 133% !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\theight: auto;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Change handler calling custom handler set via onchange attribute
     *
     * Reimplemented to add/remove trailing slash depending on trailingSlash attribute
     *
     * @param _ev
     * @returns
     */
    Et2Url.prototype._oldChange = function (_ev) {
        var value = this.value;
        if (typeof this.trailingSlash !== 'undefined' && value && this.trailingSlash !== (value.substr(-1) === '/')) {
            if (!this.trailingSlash) {
                this.value = value.replace(/\/+$/, '');
            }
            else {
                this.value += '/';
            }
        }
        return _super.prototype._oldChange.call(this, _ev);
    };
    Et2Url.action = function (value) {
        if (!value)
            return;
        // implicit add http:// if no protocol given
        if (value.indexOf("://") === -1)
            value = "http://" + value;
        // as this is static, we can NOT use this.egw(), but global egw
        egw_global_1.egw.open_link(value, '_blank');
    };
    return Et2Url;
}(Et2InvokerMixin_1.Et2InvokerMixin(Et2Textbox_1.Et2Textbox)));
exports.Et2Url = Et2Url;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-url", Et2Url);
var templateObject_1;
