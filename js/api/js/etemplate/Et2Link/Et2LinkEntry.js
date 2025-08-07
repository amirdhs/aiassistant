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
exports.Et2LinkEntryReadonly = exports.Et2LinkEntry = void 0;
/**
 * EGroupware eTemplate2 - Search & select link entry WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var Et2Link_1 = require("./Et2Link");
var slot_1 = require("../Et2Widget/slot");
/**
 * Find and select a single entry using the link system.
 *
 *
 */
var Et2LinkEntry = /** @class */ (function (_super) {
    __extends(Et2LinkEntry, _super);
    function Et2LinkEntry() {
        var _this = _super.call(this) || this;
        /**
         * We only care about this value until render.  After the sub-nodes are created,
         * we take their "live" values for our value.
         *
         * @type {LinkInfo}
         * @private
         */
        _this.__value = { app: "", id: "" };
        _this.hasSlotController = new slot_1.HasSlotController(_this, 'help-text', 'label');
        return _this;
    }
    Object.defineProperty(Et2LinkEntry, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\t}\n\n\t\t\t\t:host(.hideApp) ::slotted([slot=\"app\"]) {\n\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 0.5rem;\n\t\t\t\t}\n\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\t}\n\n\t\t\t\t:host(.hideApp) ::slotted([slot=\"app\"]) {\n\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 0.5rem;\n\t\t\t\t}\n\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkEntry, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { value: { type: Object }, 
                /**
                 * Limit to just this application - hides app selection
                 */
                onlyApp: { type: String }, 
                /**
                 * Limit to the listed applications (comma seperated)
                 */
                applicationList: { type: String }, 
                /**
                 * Show just application icons instead of names
                 */
                appIcons: { type: Boolean }, 
                /**
                 * Callback before query to server.
                 * It will be passed the request & et2_link_entry objects.  Must return true, or false to abort query.
                 */
                query: { type: Function }, 
                /**
                 * Callback when user selects an option.  Must return true, or false to abort normal action.
                 */
                select: { type: Function }, 
                /**
                 * Displayed in the search / select when no value is selected
                 */
                placeholder: { type: String }, 
                /**
                 * Additional search parameters that are passed to the server
                 * when we query searchUrl
                 */
                searchOptions: { type: Object } });
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkEntry.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this._handleShow = this._handleShow.bind(this);
        this._handleHide = this._handleHide.bind(this);
        if (!this.readonly) {
            this.updateComplete.then(function () {
                _this._bindListeners();
            });
        }
    };
    Et2LinkEntry.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._unbindListeners();
    };
    Object.defineProperty(Et2LinkEntry.prototype, "onlyApp", {
        get: function () {
            return this.__onlyApp;
        },
        set: function (app) {
            this.__onlyApp = app || "";
            // If initial value got set before onlyApp, it still needs app in pre-render value
            if (this.__value && app) {
                this.__value.app = this.__onlyApp;
            }
            if (app) {
                this.app = app;
            }
            if (this._appNode) {
                this._appNode.onlyApp = app;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkEntry.prototype, "app", {
        get: function () {
            var _a;
            return ((_a = this.__value) === null || _a === void 0 ? void 0 : _a.app) || "";
        },
        set: function (app) {
            if (typeof this.__value !== "object" || this.__value == null) {
                this.__value = { app: app };
            }
            else {
                this.__value.app = app;
            }
            this.requestUpdate("value");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkEntry.prototype, "searchOptions", {
        get: function () {
            var _a;
            return (_a = this._searchNode) === null || _a === void 0 ? void 0 : _a.searchOptions;
        },
        set: function (options) {
            var _this = this;
            this.updateComplete.then(function () {
                _this._searchNode.searchOptions = options;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkEntry.prototype, "_appNode", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("et2-link-apps");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkEntry.prototype, "_searchNode", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("et2-link-search");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkEntry.prototype, "placeholder", {
        get: function () {
            var _a;
            return (_a = this._searchNode) === null || _a === void 0 ? void 0 : _a.placeholder;
        },
        set: function (new_value) {
            if (this._searchNode) {
                this._searchNode.placeholder = new_value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkEntry.prototype._bindListeners = function () {
        this.addEventListener("sl-show", this._handleShow);
        this.addEventListener("sl-hide", this._handleHide);
    };
    Et2LinkEntry.prototype._unbindListeners = function () {
        this.removeEventListener("sl-show", this._handleShow);
        this.removeEventListener("sl-hide", this._handleHide);
    };
    /**
     * Hide app selection when there's an entry
     * @param event
     * @protected
     */
    Et2LinkEntry.prototype.handleEntrySelect = function (event) {
        var _this = this;
        var _a, _b;
        event.stopPropagation();
        this.value = (_a = this._searchNode.value) !== null && _a !== void 0 ? _a : "";
        this.classList.toggle("hideApp", Boolean(typeof this.value == "object" ? (_b = this.value) === null || _b === void 0 ? void 0 : _b.id : this.value));
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("change"));
        });
        this.requestUpdate('value');
        this.validate();
    };
    /**
     * Show app selection when there's no entry
     * @param event
     * @protected
     */
    Et2LinkEntry.prototype.handleEntryClear = function (event) {
        var _this = this;
        this.value = "";
        this.classList.remove("hideApp");
        this._searchNode.value = "";
        this._searchNode.focus();
        this.updateComplete.then(function () {
            _this.dispatchEvent(new Event("change"));
        });
        this.requestUpdate('value');
        this.validate();
    };
    /**
     * Option select dropdown opened
     * Show app selection (Et2LinkAppSelect controls own visibility according to onlyApp)
     * @param event
     * @protected
     */
    Et2LinkEntry.prototype._handleShow = function (event) {
        this.classList.remove("hideApp");
    };
    /**
     * Option select dropdown closed
     * Hide app selection (Et2LinkAppSelect controls own visibility according to onlyApp)
     * only if there's a value selected
     *
     * @param event
     * @protected
     */
    Et2LinkEntry.prototype._handleHide = function (event) {
        if (this._searchNode.value) {
            this.classList.add("hideApp");
        }
    };
    Object.defineProperty(Et2LinkEntry.prototype, "value", {
        get: function () {
            var _a, _b;
            if (this.onlyApp) {
                return (_b = (_a = this._searchNode) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
            }
            return this.__value;
        },
        set: function (val) {
            var _a;
            var value = { app: this.onlyApp || (this.app || ((_a = this._appNode) === null || _a === void 0 ? void 0 : _a.value)), id: "" };
            if (typeof val === 'string' && val.length > 0) {
                if (val.indexOf(',') > 0) {
                    val = val.replace(",", ":");
                }
                if (val.indexOf(':') > 0) {
                    var vals = val.split(':');
                    value.app = vals[0];
                    value.id = vals[1];
                }
                else {
                    value.id = val;
                }
            }
            else if (typeof val === "number" && val) {
                value.id = String(val);
            }
            else if (typeof val === "object" && val !== null) // object with attributes: app, id, title
             {
                value = val;
            }
            var oldValue = this.__value;
            this.__value = value;
            this.classList.toggle("hideApp", Boolean(this.__value.id));
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkEntry.prototype.handleLabelClick = function () {
        this._searchNode.focus();
    };
    /**
     * Update the search node's app & clear selected value when
     * selected app changes.
     * @param event
     * @protected
     */
    Et2LinkEntry.prototype.handleAppChange = function (e) {
        this.app = this._appNode.value;
        this._searchNode.app = this._appNode.value;
        this._searchNode.value = "";
        this._searchNode.clearSearch();
        this._searchNode.focus();
        this.requestUpdate('value');
    };
    Et2LinkEntry.prototype.render = function () {
        var _a, _b, _c, _d;
        var labelTemplate = this._labelTemplate();
        var helpTemplate = this._helpTextTemplate();
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <et2-link-apps\n                            onlyApp=", "\n                            ?appIcons=", "\n                            applicationList=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            .value=", "\n                            @change=", "\n                    ></et2-link-apps>\n                    <et2-link-search\n                            exportparts=\"combobox:control\"\n                            ?placeholder=", "\n                            ?required=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            .app=", "\n                            .value=", "\n                            @change=", "\n                            @sl-clear=", "\n                    >\n                        ", "\n                    </et2-link-search>\n                </div>\n                ", "\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\">\n                    <et2-link-apps\n                            onlyApp=", "\n                            ?appIcons=", "\n                            applicationList=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            .value=", "\n                            @change=", "\n                    ></et2-link-apps>\n                    <et2-link-search\n                            exportparts=\"combobox:control\"\n                            ?placeholder=", "\n                            ?required=", "\n                            ?disabled=", "\n                            ?readonly=", "\n                            .app=", "\n                            .value=", "\n                            @change=", "\n                            @sl-clear=", "\n                    >\n                        ",
            "\n                    </et2-link-search>\n                </div>\n                ", "\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': labelTemplate !== lit_1.nothing,
            'form-control--has-help-text': helpTemplate !== lit_1.nothing
        }), labelTemplate, this.onlyApp ? this.onlyApp : lit_1.nothing, this.appIcons, this.applicationList ? this.applicationList : lit_1.nothing, this.disabled, this.readonly, ((_a = this.__value) === null || _a === void 0 ? void 0 : _a.app) ? this.__value.app : lit_1.nothing, this.handleAppChange, this.placeholder, this.required, this.disabled, this.readonly, ((_b = this.__value) === null || _b === void 0 ? void 0 : _b.app) || lit_1.nothing, ((_c = this.__value) === null || _c === void 0 ? void 0 : _c.id) || lit_1.nothing, this.handleEntrySelect, this.handleEntryClear, ((_d = this.__value) === null || _d === void 0 ? void 0 : _d.title) ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                            <option value=", ">", "</option>\n                        "], ["\n                            <option value=", ">", "</option>\n                        "])), this.__value.id, this.__value.title) : lit_1.nothing, helpTemplate);
    };
    return Et2LinkEntry;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2LinkEntry = Et2LinkEntry;
customElements.define("et2-link-entry", Et2LinkEntry);
var Et2LinkEntryReadonly = /** @class */ (function (_super) {
    __extends(Et2LinkEntryReadonly, _super);
    function Et2LinkEntryReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Et2LinkEntryReadonly;
}(Et2Link_1.Et2Link));
exports.Et2LinkEntryReadonly = Et2LinkEntryReadonly;
customElements.define("et2-link-entry_ro", Et2LinkEntryReadonly);
var templateObject_1, templateObject_2, templateObject_3;
