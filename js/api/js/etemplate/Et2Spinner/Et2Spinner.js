"use strict";
/**
 * EGroupware eTemplate2 - Spinner widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Hadi Nategh
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
exports.Et2Spinner = void 0;
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../Styles/shoelace");
var lit_1 = require("lit");
var Et2Spinner = /** @class */ (function (_super) {
    __extends(Et2Spinner, _super);
    function Et2Spinner() {
        var _this = _super.call(this) || this;
        _this.style = '';
        return _this;
    }
    Object.defineProperty(Et2Spinner, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_2.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t"], ["\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Spinner, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * font-size		size is based on font size
                 * --track-width	The width of the track.
                 * --track-color	The color of the track.
                 * --indicator-color	The color of the indicator.
                 * --speed	The time it takes for the spinner to complete one animation cycle.
                 */
                style: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Handle changes that have to happen based on changes to properties
     *
     */
    Et2Spinner.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("style")) {
            if (this.style) {
                this.getDOMNode().setAttribute('style', this.style);
            }
        }
    };
    return Et2Spinner;
}(Et2Widget_1.Et2Widget(shoelace_1.SlSpinner)));
exports.Et2Spinner = Et2Spinner;
customElements.define("et2-spinner", Et2Spinner);
var templateObject_1;
