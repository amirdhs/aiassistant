"use strict";
/**
 * EGroupware eTemplate2 - Select Country WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectCountry = void 0;
var Et2Select_1 = require("../Et2Select");
var StaticOptions_1 = require("../StaticOptions");
var egw_global_1 = require("../../../jsapi/egw_global");
var lit_1 = require("lit");
/**
 * Customised Select widget for countries
 * This widget uses CSS from api/templates/default/css/flags.css to set flags
 */
if (egw_global_1.egw && egw_global_1.egw(window) && typeof egw_global_1.egw(window).includeCSS == "function") {
    egw_global_1.egw(window).includeCSS("api/templates/default/css/flags.css");
}
var Et2SelectCountry = /** @class */ (function (_super) {
    __extends(Et2SelectCountry, _super);
    function Et2SelectCountry() {
        var _this = _super.call(this) || this;
        _this.search = true;
        return _this;
    }
    Object.defineProperty(Et2SelectCountry, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /* Reflect the value so we can use CSS selectors */
                value: { type: String, reflect: true } });
        },
        enumerable: false,
        configurable: true
    });
    Et2SelectCountry.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.fetchComplete = StaticOptions_1.StaticOptions.country(this, {}, true).then(function (options) {
            _this._static_options = options;
            _this.requestUpdate("select_options");
        });
    };
    /**
     * Get the element for the flag
     *
     * @param option
     * @protected
     */
    Et2SelectCountry.prototype._iconTemplate = function (option) {
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <span slot=\"prefix\" part=\"flag country_", "_flag\"\n                  style=\"width: var(--icon-width)\">\n\t\t\t</span>"], ["\n            <span slot=\"prefix\" part=\"flag country_", "_flag\"\n                  style=\"width: var(--icon-width)\">\n\t\t\t</span>"])), option.value);
    };
    return Et2SelectCountry;
}(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select)));
exports.Et2SelectCountry = Et2SelectCountry;
customElements.define("et2-select-country", Et2SelectCountry);
var templateObject_1;
