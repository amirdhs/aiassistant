"use strict";
/**
 * EGroupware eTemplate2 - Search & select link entry WebComponent
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2LinkSearch = void 0;
var lit_1 = require("lit");
var Et2Select_1 = require("../Et2Select/Et2Select");
var Et2Link_1 = require("./Et2Link");
var Et2LinkSearch = /** @class */ (function (_super) {
    __extends(Et2LinkSearch, _super);
    function Et2LinkSearch() {
        var _this = _super.call(this) || this;
        _this.search = true;
        _this.searchUrl = "EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link_search";
        _this.clearable = true;
        _this.hoist = true;
        _this.placeholder = _this.getAttribute("placeholder") || _this.egw().lang("search");
        return _this;
    }
    Object.defineProperty(Et2LinkSearch, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\tmin-width: 200px;\n\t\t\t}\n\t\t\t::part(icon), .select__icon {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\tmin-width: 200px;\n\t\t\t}\n\t\t\t::part(icon), .select__icon {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkSearch, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { app: { type: String, reflect: true } });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkSearch.prototype, "_appNode", {
        get: function () {
            var _a;
            return (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector("et2-link-apps");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Override parent to do nothing - option is often not in select options
     *
     */
    Et2LinkSearch.prototype.fix_bad_value = function () { };
    Et2LinkSearch.prototype.remoteQuery = function (search, options) {
        var _this = this;
        var _a, _b;
        var request = this.egw().request(this.searchUrl, [(_b = (_a = this._appNode) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : options.app, '', search, options]);
        if (this.query && typeof this.query == "function") {
            if (!this.query(request, this)) {
                return Promise.resolve([]);
            }
        }
        return request.then(function (result) {
            return _this._processResultCount(result);
        });
    };
    Et2LinkSearch.prototype.updated = function (changedProperties) {
        var _this = this;
        _super.prototype.updated.call(this, changedProperties);
        // Set a value we don't have as an option?  That's OK, we'll just add it
        if (changedProperties.has("value") && this.value && this.value.length > 0 && (this.select_options.length == 0 ||
            this.select_options.filter && this.select_options.filter(function (item) { return _this.getValueAsArray().includes(item.value); }).length == 0)) {
            this._missingOption(this.value);
        }
        if (changedProperties.has("readonly")) {
            this.clearable = !this.readonly;
        }
    };
    /**
     * The set value requires an option we don't have.
     * Add it in, asking server for title if needed
     *
     * @param value
     * @protected
     */
    Et2LinkSearch.prototype._missingOption = function (value) {
        var _this = this;
        var _a;
        var option = {
            value: value,
            label: Et2Link_1.Et2Link.MISSING_TITLE,
            class: "loading"
        };
        this.__select_options.unshift(option);
        return (_a = this.egw()) === null || _a === void 0 ? void 0 : _a.link_title(this.app, option.value, true).then(function (title) {
            var _a;
            option.label = title || Et2Link_1.Et2Link.MISSING_TITLE;
            option.class = "";
            // It's probably already been rendered, find the item
            var item = (_a = _this.select) === null || _a === void 0 ? void 0 : _a.querySelector('[value="' + option.value + '"]');
            if (item) {
                _this.requestUpdate();
                item.classList.remove("loading");
            }
            else {
                // Not already rendered, update the select option
                _this.requestUpdate("select_options");
            }
            _this.select.requestUpdate("value");
        });
    };
    Et2LinkSearch.prototype.validate = function () {
        // Do not validate
    };
    return Et2LinkSearch;
}(Et2Select_1.Et2Select));
exports.Et2LinkSearch = Et2LinkSearch;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-link-search", Et2LinkSearch);
var templateObject_1;
