"use strict";
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
exports.Et2LinkAppSelect = void 0;
var FindSelectOptions_1 = require("../Et2Select/FindSelectOptions");
var lit_1 = require("lit");
var Et2Select_1 = require("../Et2Select/Et2Select");
var Et2LinkAppSelect = /** @class */ (function (_super) {
    __extends(Et2LinkAppSelect, _super);
    /**
     * Constructor
     *
     */
    function Et2LinkAppSelect() {
        var _this = _super.call(this) || this;
        _this.onlyApp = "";
        _this.appIcons = true;
        _this.applicationList = [];
        _this.hoist = true;
        // Select options are based off abilities registered with link system
        _this._reset_select_options();
        return _this;
    }
    Object.defineProperty(Et2LinkAppSelect, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\t--icon-width: 20px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmin-width: 64px;\n\t\t\t}\n\t\t\t:host([appIcons]) {\n\t\t\t\tmax-width: 75px;\n\t\t\t}\n\t\t\t.select__menu {\n\t\t\t\toverflow-x: hidden;\n\t\t\t}\n\t\t\t::part(control) {\n\t\t\t\tborder: none;\n\t\t\t\tbox-shadow: initial;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\t--icon-width: 20px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmin-width: 64px;\n\t\t\t}\n\t\t\t:host([appIcons]) {\n\t\t\t\tmax-width: 75px;\n\t\t\t}\n\t\t\t.select__menu {\n\t\t\t\toverflow-x: hidden;\n\t\t\t}\n\t\t\t::part(control) {\n\t\t\t\tborder: none;\n\t\t\t\tbox-shadow: initial;\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkAppSelect, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Limit to just this one application, and hide the selection
                 */
                onlyApp: { type: String }, 
                /**
                 * Limit to these applications (comma seperated).
                 */
                applicationList: { type: String }, 
                /**
                 * Show application icons instead of application names
                 */
                appIcons: { type: Boolean, reflect: true } });
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Et2LinkAppSelect.prototype, "onlyApp", {
        get: function () {
            // __onlyApp may be undefined during creation
            return this.__onlyApp || "";
        },
        set: function (app) {
            var _this = this;
            this.__onlyApp = app || "";
            this.updateComplete.then(function () {
                _this.style.display = _this.onlyApp ? 'none' : '';
            });
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkAppSelect.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (!this.value) {
            // use preference
            var appname = "";
            if (typeof this.value != 'undefined' && this.parentNode && this.parentNode.toApp) {
                appname = this.parentNode.toApp;
            }
            this.value = this.egw().preference('link_app', appname || this.egw().app_name());
        }
        // Register to
        this.addEventListener("sl-change", this._handleChange);
        if (this.__onlyApp) {
            this.style.display = 'none';
        }
    };
    Et2LinkAppSelect.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("sl-change", this._handleChange);
    };
    /**
     * Called before update() to compute values needed during the update
     *
     * @param changedProperties
     */
    Et2LinkAppSelect.prototype.willUpdate = function (changedProperties) {
        _super.prototype.willUpdate.call(this, changedProperties);
        if (changedProperties.has("onlyApp") || changedProperties.has("applicationList")) {
            this._reset_select_options();
        }
    };
    Object.defineProperty(Et2LinkAppSelect.prototype, "applicationList", {
        get: function () {
            return this.__applicationList;
        },
        set: function (app_list) {
            var oldValue = this.__applicationList;
            if (typeof app_list == "string") {
                app_list = app_list.split(",");
            }
            this.__applicationList = app_list;
            this.requestUpdate("applicationList", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkAppSelect.prototype, "value", {
        get: function () {
            return this.onlyApp ? this.onlyApp : _super.prototype.value;
        },
        set: function (new_value) {
            _super.prototype.value = new_value;
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkAppSelect.prototype.handleValueChange = function (e) {
        _super.prototype.handleValueChange.call(this, e);
        // update preference
        var appname = "";
        if (typeof this.value != 'undefined' && this.parentNode && this.parentNode.toApp) {
            appname = this.parentNode.toApp;
        }
        this.egw().set_preference(appname || this.egw().app_name(), 'link_app', this.value);
    };
    /**
     * Limited select options here
     * This method will check properties and set select options appropriately
     */
    Et2LinkAppSelect.prototype._reset_select_options = function () {
        var _this = this;
        var _a;
        var select_options = [];
        // Limit to one app
        if (this.onlyApp) {
            select_options.push({
                value: this.onlyApp,
                label: this.egw().lang(this.onlyApp),
                icon: (_a = this.egw().link_get_registry(this.onlyApp, 'icon')) !== null && _a !== void 0 ? _a : this.onlyApp + "/navbar"
            });
        }
        else if (this.applicationList.length > 0) {
            select_options = this.applicationList.map(function (app) {
                var _a;
                return {
                    value: app,
                    label: _this.egw().lang(app),
                    icon: (_a = _this.egw().link_get_registry(app, 'icon')) !== null && _a !== void 0 ? _a : app + "/navbar"
                };
            });
        }
        else {
            //@ts-ignore link_app_list gives {app:name} instead of an array, but parent will fix it
            select_options = this.egw().link_app_list('query');
            if (typeof select_options['addressbook-email'] !== 'undefined') {
                delete select_options['addressbook-email'];
            }
            select_options = FindSelectOptions_1.cleanSelectOptions(select_options);
            select_options.map(function (option) {
                var _a;
                option.icon = (_a = _this.egw().link_get_registry(option.value, 'icon')) !== null && _a !== void 0 ? _a : option.value + "/navbar";
            });
        }
        if (!this.value) {
            this.value = this.egw().preference('link_app', this.egw().app_name());
        }
        this.select_options = select_options;
    };
    Et2LinkAppSelect.prototype._optionTemplate = function (option) {
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <sl-option value=\"", "\" title=\"", "\">\n                ", "\n                ", "\n            </sl-option>"], ["\n            <sl-option value=\"", "\" title=\"", "\">\n                ", "\n                ", "\n            </sl-option>"])), option.value, option.title, this.appIcons ? "" : option.label, this._iconTemplate(option));
    };
    return Et2LinkAppSelect;
}(Et2Select_1.Et2Select));
exports.Et2LinkAppSelect = Et2LinkAppSelect;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-link-apps", Et2LinkAppSelect);
var templateObject_1, templateObject_2;
