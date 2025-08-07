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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssImage = exports.loadWebComponent = exports.Et2Widget = void 0;
var et2_core_interfaces_1 = require("../et2_core_interfaces");
var et2_core_arrayMgr_1 = require("../et2_core_arrayMgr");
var et2_core_widget_1 = require("../et2_core_widget");
var et2_core_legacyJSFunctions_1 = require("../et2_core_legacyJSFunctions");
var et2_core_common_1 = require("../et2_core_common");
var egw_global_1 = require("../../jsapi/egw_global");
var et2_core_inheritance_1 = require("../et2_core_inheritance");
var lit_1 = require("lit");
var dedupe_mixin_1 = require("@open-wc/dedupe-mixin");
var bootstrap_icons_1 = require("../Styles/bootstrap-icons");
var property_js_1 = require("lit/decorators/property.js");
var egw_action_1 = require("../../egw_action/egw_action");
var EgwEt2WidgetObject_1 = require("../../egw_action/EgwEt2WidgetObject");
var EgwActionObject_1 = require("../../egw_action/EgwActionObject");
/**
 * This mixin will allow any LitElement to become an Et2Widget
 *
 * Usage:
 * @example
 * export class Et2Loading extends Et2Widget(BXLoading) { ... }
 * @example
 * export class Et2Button extends Et2InputWidget(Et2Widget(BXButton)) { ... }
 *
 * @see Mixin explanation https://lit.dev/docs/composition/mixins/
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
var Et2WidgetMixin = function (superClass) {
    var Et2WidgetClass = /** @class */ (function (_super) {
        __extends(Et2WidgetClass, _super);
        /**
         * Widget Mixin constructor
         *
         * Note the ...args parameter and super() call
         *
         * @param args
         */
        function Et2WidgetClass() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._mgrs = [];
            _this._parent = null;
            _this._inst = null;
            /**
             * et2_widget compatability
             * @deprecated Legacy compatability.  Some legacy widgets check their parent to see whats allowed
             **/
            _this.supportedWidgetClasses = [];
            /**
             * Not actually required by et2_widget, but needed to keep track of non-webComponent children
             */
            _this._legacy_children = [];
            /**
             * Keep track of child widgets
             * This can differ from this.children, as it only includes the widgets where this.children will be child DOM nodes,
             * not guaranteed to be widgets
             */
            _this._children = [];
            /**
             * Internal Properties - default values, and actually creating them as fields
             * Do not include public property defined in properties()
             */
            /**
             * Internal widget ID
             * @type {string}
             * @internal
             */
            _this._widget_id = "";
            /**
             * Actual DOM ID, which is different from the widget ID
             * @type {string}
             * @internal
             */
            _this._dom_id = "";
            /**
             * TypeScript & LitElement ensure type correctness, so we can't have a string value like "$row_cont[disable_me]"
             * as a boolean property so we store them here, and parse them when expanding.  Strings do not have this problem,
             * since $row_cont[disable_me] is still a valid string.
             * @internal
             */
            _this._deferred_properties = {};
            _this._actionManager = null;
            // Don't overwrite ID if it's already set from DOM
            if (_this.hasAttribute("id")) {
                _this._widget_id = _this.getAttribute("id");
            }
            _this.disabled = false;
            _this._handleClick = _this._handleClick.bind(_this);
            // make all sizable widgets large by default on mobile template
            if (typeof egwIsMobile == "function" && egwIsMobile()) {
                _this.size = "large";
            }
            return _this;
        }
        Object.defineProperty(Et2WidgetClass, "styles", {
            /** WebComponent **/
            get: function () {
                return __spreadArrays((_super.styles ? (Array.isArray(_super.styles) ? _super.styles : [_super.styles]) : []), [
                    bootstrap_icons_1.default,
                    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t\t:host([disabled]) {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* CSS to align internal inputs according to box alignment */\n\n\t\t\t\t\t:host([align=\"center\"]) .input-group__input {\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host([align=\"right\"]) .input-group__input {\n\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Put widget label to the left of the widget */\n\n\t\t\t\t\t::part(form-control), .form-control {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t}\n\n\t\t\t\t\t::part(form-control-label), .form-control-label {\n\t\t\t\t\t\tflex: 0 0 auto;\n\t\t\t\t\t\twhite-space: normal;\n\t\t\t\t\t}\n\n\t\t\t\t\t.form-control--has-label .form-control-label {\n\t\t\t\t\t\tmargin-right: var(--sl-spacing-medium);\n\t\t\t\t\t}\n\n\t\t\t\t\t::part(form-control-input), .form-control-input {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t}\n\n\t\t\t\t\t::part(form-control-help-text), .form-control-help-text {\n\t\t\t\t\t\tflex-basis: 100%;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Use .et2-label-fixed class to give fixed label size */\n\n\t\t\t\t\t:host(.et2-label-fixed)::part(form-control-label), :host(.et2-label-fixed) .form-control-label {\n\t\t\t\t\t\twidth: initial;\n\t\t\t\t\t\twidth: var(--label-width, 8em);\n\t\t\t\t\t}\n\n\t\t\t\t\t:host(.et2-label-fixed)::part(form-control-help-text), :host(.et2-label-fixed) .form-control-help-text {\n\t\t\t\t\t\tleft: calc(var(--sl-spacing-medium) + var(--label-width, 8em));\n\t\t\t\t\t}\n            "], ["\n\t\t\t\t\t:host([disabled]) {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* CSS to align internal inputs according to box alignment */\n\n\t\t\t\t\t:host([align=\"center\"]) .input-group__input {\n\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t}\n\n\t\t\t\t\t:host([align=\"right\"]) .input-group__input {\n\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Put widget label to the left of the widget */\n\n\t\t\t\t\t::part(form-control), .form-control {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t}\n\n\t\t\t\t\t::part(form-control-label), .form-control-label {\n\t\t\t\t\t\tflex: 0 0 auto;\n\t\t\t\t\t\twhite-space: normal;\n\t\t\t\t\t}\n\n\t\t\t\t\t.form-control--has-label .form-control-label {\n\t\t\t\t\t\tmargin-right: var(--sl-spacing-medium);\n\t\t\t\t\t}\n\n\t\t\t\t\t::part(form-control-input), .form-control-input {\n\t\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t}\n\n\t\t\t\t\t::part(form-control-help-text), .form-control-help-text {\n\t\t\t\t\t\tflex-basis: 100%;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t}\n\n\t\t\t\t\t/* Use .et2-label-fixed class to give fixed label size */\n\n\t\t\t\t\t:host(.et2-label-fixed)::part(form-control-label), :host(.et2-label-fixed) .form-control-label {\n\t\t\t\t\t\twidth: initial;\n\t\t\t\t\t\twidth: var(--label-width, 8em);\n\t\t\t\t\t}\n\n\t\t\t\t\t:host(.et2-label-fixed)::part(form-control-help-text), :host(.et2-label-fixed) .form-control-help-text {\n\t\t\t\t\t\tleft: calc(var(--sl-spacing-medium) + var(--label-width, 8em));\n\t\t\t\t\t}\n            "])))
                ]);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetClass, "properties", {
            get: function () {
                return __assign(__assign({}, _super.properties), { 
                    /**
                     * Widget ID.  Optional, and not always the same as the DOM ID if the widget is inside something
                     * else that also has an ID.
                     * Putting this in the properties() list causes the parent portion of the DOM ID to be duplicated
                     * due to how LitElement processes the change
                     */
                    //id: {type: String, reflect: false},
                    /**
                     * CSS Class.  This class is applied to the _outside_, on the web component itself.
                     * Due to how WebComponents work, this might not change anything inside the component.
                     */
                    class: { type: String, reflect: true }, 
                    /**
                     * Defines whether this widget is visibly disabled.
                     *
                     * The widget is still visible, but clearly cannot be interacted with.  Widgets disabled in the template
                     * will not return a value to the application code, even if re-enabled via javascript before submitting.
                     * To allow a disabled widget to be re-enabled and return a value, disable via javascript in the app's
                     * et2_ready() instead of an attribute in the template file.
                     */
                    disabled: {
                        type: Boolean,
                        reflect: true
                    }, 
                    /**
                     * The widget is not visible.
                     *
                     * As far as the user is concerned, the widget does not exist.  Widgets hidden with an attribute in the
                     * template may not be created in the DOM, and will not return a value.  Widgets can be hidden after creation,
                     * and they may return a value if hidden this way.
                     */
                    hidden: {
                        type: Boolean,
                        reflect: true
                    }, 
                    /**
                     * Accesskey provides a hint for generating a keyboard shortcut for the current element.
                     * The attribute value must consist of a single printable character.
                     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
                     */
                    accesskey: { type: String, reflect: true }, 
                    /**
                     * Widget ID of another node to insert this node into instead of the normal location
                     * This isn't a normal property...
                     */
                    parentId: { type: String, noAccessor: true }, 
                    /**
                     * Tooltip which is shown for this element on hover
                     */
                    statustext: {
                        type: String,
                        reflect: true
                    }, 
                    /**
                     * The label of the widget
                     * This is usually displayed in some way.  It's also important for accessability.
                     * This is defined in the parent somewhere, and re-defining it causes labels to disappear
                     */
                    label: {
                        type: String
                    }, onclick: {
                        type: Function
                    }, 
                    /*** Style type attributes ***/
                    /**
                     * Disable any translations for the widget
                     */
                    noLang: {
                        type: Boolean,
                        reflect: false
                    }, 
                    /**
                     * Used by Et2Box to determine alignment.
                     * Allowed values are left, right
                     */
                    align: {
                        type: String,
                        reflect: true
                    }, 
                    /**
                     * comma-separated name:value pairs set as data attributes on DOM node
                     * data="mime:${row}[mime]" would generate data-mime="..." in DOM, eg. to use it in CSS on a parent
                     */
                    data: {
                        type: String,
                        reflect: false
                    }, actions: {
                        type: Object
                    } });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetClass, "translate", {
            /**
             * List of properties that get translated
             *
             * Done separately to not interfere with properties - if we re-define label property,
             * labels go missing.
             * @internal
             * @returns {{statustext : boolean, label : boolean}}
             */
            get: function () {
                return {
                    label: true,
                    helptext: true,
                    statustext: true
                };
            },
            enumerable: false,
            configurable: true
        });
        Et2WidgetClass.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            this.addEventListener("click", this._handleClick);
            if (this.statustext && !egwIsMobile()) {
                this.bindTooltip();
            }
        };
        Et2WidgetClass.prototype.bindTooltip = function () {
            this.egw().tooltipBind(this, this.egw().lang(this.statustext));
        };
        Et2WidgetClass.prototype.disconnectedCallback = function () {
            var _a;
            _super.prototype.disconnectedCallback.call(this);
            (_a = this.egw()) === null || _a === void 0 ? void 0 : _a.tooltipUnbind(this);
            this.removeEventListener("click", this._handleClick);
            // Delete all actions
            if (this.getInstanceManager() && this.getInstanceManager().app) {
                try {
                    var objectManager = egw_action_1.egw_getAppObjectManager(false, this.getInstanceManager().app);
                    var widget_object = objectManager === null || objectManager === void 0 ? void 0 : objectManager.getObjectById(this.id);
                    if (widget_object) {
                        widget_object.unregisterActions();
                        widget_object.clear();
                        widget_object.remove();
                    }
                }
                catch (e) {
                }
            }
        };
        /**
         * NOT the setter, since we cannot add to the DOM before connectedCallback()
         *
         * TODO: This is not best practice.  Should just set property, DOM modification should be done in render
         * https://lit-element.polymer-project.org/guide/templates#design-a-performant-template
         *
         * @param value
         */
        Et2WidgetClass.prototype.set_label = function (value) {
            var oldValue = this.label;
            // Remove old
            var oldLabels = this.getElementsByClassName("et2_label");
            while (oldLabels[0]) {
                this.removeChild(oldLabels[0]);
            }
            this.__label = value;
            if (value) {
                if (this._labelNode) {
                    this._labelNode.textContent = this.__label;
                }
                else {
                    var label = document.createElement("span");
                    label.classList.add("et2_label");
                    label.textContent = this.__label;
                    // We should have a slot in the template for the label
                    label.slot = "label";
                    this.appendChild(label);
                    this.requestUpdate('label', oldValue);
                }
            }
        };
        /**
         * supports legacy set_statustext
         * @deprecated use this.statustext
         * @param value
         */
        Et2WidgetClass.prototype.set_statustext = function (value) {
            this.statustext = value;
        };
        Object.defineProperty(Et2WidgetClass.prototype, "statustext", {
            get: function () {
                return this.__statustext;
            },
            set: function (value) {
                var oldValue = this.__statustext;
                this.__statustext = value;
                this.requestUpdate("statustext", oldValue);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Wrapper on this.disabled because legacy had it.
         *
         * @deprecated Use widget.disabled for visually disabled, widget.hidden for visually hidden.
         * <a href="/getting-started/widgets/#disabled-vs-readonly-vs-hidden">Disabled vs Readonly vs Hidden</a>
         *
         * @param {boolean} value
         */
        Et2WidgetClass.prototype.set_disabled = function (value) {
            var oldValue = this.disabled;
            this.disabled = value;
            this.hidden = value;
            this.requestUpdate("disabled", oldValue);
        };
        Object.defineProperty(Et2WidgetClass.prototype, "dom_id", {
            /**
             * Get the actual DOM ID, which has been prefixed to make sure it's unique.
             *
             * @returns {string}
             */
            get: function () {
                return this.getAttribute("id");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetClass.prototype, "id", {
            /**
             * Get the ID of the widget
             *
             * @returns {string}
             */
            get: function () {
                return this._widget_id;
            },
            /**
             * Set the ID of the widget
             *
             * This is the "widget" ID, which is used as an index into the managed arrays (content, etc) and when
             * trying to find widgets by ID.
             *
             * This is not the DOM ID.
             *
             * @param {string} value
             */
            set: function (value) {
                this._widget_id = value;
                var dom_id = "";
                if (this._widget_id) {
                    // Create a namespace for this object with new ID
                    if (this._createNamespace()) {
                        this.checkCreateNamespace();
                    }
                    var path = this.getPath();
                    if (this.getInstanceManager()) {
                        path.unshift(this.getInstanceManager().uniqueId);
                    }
                    path.push(value.replace(/\./g, '-'));
                    dom_id = path.join("_");
                }
                this.setAttribute("id", dom_id);
                this.requestUpdate("id");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetClass.prototype, "data", {
            get: function () {
                var _this = this;
                var data = [];
                Object.keys(this.dataset).forEach(function (k) {
                    data.push(k + ":" + _this.dataset[k]);
                });
                return data.join(",");
            },
            /**
             * Set the dataset from a CSV
             * @param {string} value
             */
            set: function (value) {
                var _this = this;
                // Clear existing
                Object.keys(this.dataset).forEach(function (dataKey) {
                    delete _this.dataset[dataKey];
                });
                var data = value.split(",");
                data.forEach(function (field) {
                    var f = field.split(":");
                    if (f[0] && typeof f[1] !== "undefined") {
                        _this.dataset[f[0]] = f[1];
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Et2WidgetClass.prototype, "actions", {
            get: function () {
                var _a;
                return ((_a = this._actionManager) === null || _a === void 0 ? void 0 : _a.children) || {};
            },
            /**
             * Set Actions on the widget
             *
             * Each action is defined as an object:
             *
             * move: {
             *      type: "drop",
             *      acceptedTypes: "mail",
             *      icon:   "move",
             *      caption:	"Move to"
             *      onExecute:      javascript:mail_move"
             * }
             *
             * This will turn the widget into a drop target for "mail" drag types.  When "mail" drag types are dropped,
             * the global function mail_move(egwAction action, egwActionObject sender) will be called.  The ID of the
             * dragged "mail" will be in sender.id, some information about the sender will be in sender.context.  The
             * etemplate2 widget involved can typically be found in action.parent.data.widget, so your handler
             * can operate in the widget context easily.  The location varies depending on your action though.  It
             * might be action.parent.parent.data.widget
             *
             * To customise how the actions are handled for a particular widget, override _link_actions().  It handles
             * the more widget-specific parts.
             *
             * @param {object} actions {ID: {attributes..}+} map of egw action information
             * @see api/src/Etemplate/Widget/Nextmatch.php egw_actions() method
             */
            set: function (actions) {
                this._initActions(actions);
            },
            enumerable: false,
            configurable: true
        });
        Et2WidgetClass.prototype._initActions = function (actions) {
            var _a, _b, _c, _d;
            if (!(Array.isArray(actions) && actions.length > 0 || Object.entries(actions).length > 0)) {
                // Not trying to clear actions, just called automatic
                if (!this._actionManager) {
                    return;
                }
            }
            if (this.id == "" || typeof this.id == "undefined") {
                this.egw().debug("warn", "Widget should have an ID if you want actions", this);
                return;
            }
            // Initialize the action manager and add some actions to it
            if (this._actionManager == null) {
                // Find the apropriate parent action manager
                var parent_am = null;
                var widget = this;
                while (widget.getParent() && !parent_am) {
                    // @ts-ignore
                    if (widget._actionManager) {
                        // @ts-ignore
                        parent_am = widget._actionManager;
                    }
                    widget = widget.getParent();
                }
                if (!parent_am) {
                    // Only look 1 level deep
                    parent_am = egw_action_1.egw_getActionManager(this.egw().appName, true, 1);
                }
                if (parent_am.getActionById((_b = (_a = this.getInstanceManager()) === null || _a === void 0 ? void 0 : _a.uniqueId) !== null && _b !== void 0 ? _b : "", 1) !== null) {
                    parent_am = parent_am.getActionById((_d = (_c = this.getInstanceManager()) === null || _c === void 0 ? void 0 : _c.uniqueId) !== null && _d !== void 0 ? _d : "", 1);
                }
                if (parent_am.getActionById(this.id, 1) != null) {
                    this._actionManager = parent_am.getActionById(this.id, 1);
                }
                else {
                    this._actionManager = parent_am.addAction("actionManager", this.id);
                }
            }
            this._actionManager.updateActions(actions, this.egw().appName);
            // Put a reference to the widget into the action stuff, so we can
            // easily get back to widget context from the action handler
            this._actionManager.data = { widget: this };
            // Link the actions to the DOM
            this._link_actions(actions);
        };
        /**
         * Get all action-links / id's of 1.-level actions from a given action object
         *
         * This can be overwritten to not allow all actions, by not returning them here.
         *
         * @param actions
         * @returns {Array}
         */
        Et2WidgetClass.prototype._get_action_links = function (actions) {
            var action_links = [];
            for (var i in actions) {
                var action = actions[i];
                action_links.push(typeof action.id != 'undefined' ? action.id : i);
            }
            return action_links;
        };
        /**
         * Link the actions to the DOM nodes / widget bits.
         *
         * @param {object} actions {ID: {attributes..}+} map of egw action information
         */
        Et2WidgetClass.prototype._link_actions = function (actions) {
            var _a;
            // Get the top level element for the tree
            var objectManager = egw_action_1.egw_getAppObjectManager(true, (_a = this.getInstanceManager()) === null || _a === void 0 ? void 0 : _a.app);
            var widget_object = objectManager.getObjectById(this.id);
            if (widget_object == null || widget_object.manager !== this._actionManager) {
                // Add a new container to the object manager which will hold the widget
                // objects
                widget_object = objectManager.insertObject(false, new EgwActionObject_1.EgwActionObject(this.id, objectManager, this.createWidgetObjectInterface(), this._actionManager || objectManager.manager.getActionById(this.id) || objectManager.manager));
            }
            else {
                widget_object.setAOI(this.createWidgetObjectInterface());
            }
            // Delete all old objects
            widget_object.clear();
            widget_object.unregisterActions();
            // Go over the widget & add links - this is where we decide which actions are
            // 'allowed' for this widget at this time
            widget_object.updateActionLinks(this._get_action_links(actions));
        };
        Et2WidgetClass.prototype.createWidgetObjectInterface = function () {
            return (new EgwEt2WidgetObject_1.EgwEt2WidgetObject(this));
        };
        /**
         * A property has changed, and we want to make adjustments to other things
         * based on that
         *
         * @param  changedProperties
         */
        Et2WidgetClass.prototype.updated = function (changedProperties) {
            _super.prototype.updated.call(this, changedProperties);
            // required changed, add / remove validator
            if (changedProperties.has('label')) {
                this._set_label(this.label);
            }
            if (changedProperties.has("statustext")) {
                this.egw().tooltipUnbind(this);
                if (this.statustext) {
                    this.bindTooltip();
                }
            }
            if (changedProperties.has("onclick")) {
                this.classList.toggle("et2_clickable", this.onclick != null && typeof this.onclick != "undefined");
            }
        };
        Object.defineProperty(Et2WidgetClass.prototype, "deferredProperties", {
            /**
             * Any attribute that refers to row content cannot be resolved immediately, but some like booleans cannot stay a
             * string because it's a boolean attribute.  We store them for later, and parse when they're fully in their row.
             *
             * If you are creating a widget that can go in a nextmatch row, and it has boolean attributes that can change
             * for each row, add those attributes into deferredProperties
             */
            get: function () {
                return this._deferred_properties;
            },
            set: function (value) {
                this._deferred_properties = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Do some fancy stuff on the label, splitting it up if there's a %s in it
         *
         * Normally called from updated(), the "normal" setter stuff has already been run before
         * this is called.  We only override our special cases (%s) because the normal label has
         * been set by the parent
         *
         * @param value
         * @protected
         */
        Et2WidgetClass.prototype._set_label = function (value) {
            if (!this._labelNode) {
                return;
            }
            // Remove any existing post label
            var existing = (Array.from(this.children)).find(function (el) { return el.slot === "after" && el.tagName === "LABEL"; });
            if (existing) {
                this.removeChild(existing);
            }
            // Split the label at the "%s"
            var parts = et2_core_common_1.et2_csvSplit(value, 2, "%s");
            if (parts.length > 1) {
                var after_1 = document.createElement("label");
                after_1.slot = "after";
                after_1.textContent = parts[1];
                this.appendChild(after_1);
                this._labelNode.textContent = parts[0];
            }
        };
        Object.defineProperty(Et2WidgetClass.prototype, "class", {
            get: function () {
                return this.classList.value;
            },
            set: function (value) {
                var oldValue = this.classList.value;
                this.classList.value = value;
                this.requestUpdate('class', oldValue);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Set the widget class
         *
         * @deprecated Use this.class or this.classList instead
         * @param {string} new_class
         */
        Et2WidgetClass.prototype.set_class = function (new_class) {
            this.class = new_class;
        };
        /**
         * Event handlers
         */
        /**
         * Click handler calling custom handler set via onclick attribute to this.onclick
         *
         * @param _ev
         * @returns
         */
        Et2WidgetClass.prototype._handleClick = function (_ev) {
            if (typeof this.onclick == 'function') {
                // Make sure function gets a reference to the widget, splice it in as 2. argument if not
                var args = Array.prototype.slice.call(arguments);
                if (args.indexOf(this) == -1) {
                    args.splice(1, 0, this);
                }
                return this.onclick.apply(this, args);
            }
            return true;
        };
        /** et2_widget compatability
         * @deprecated
         **/
        Et2WidgetClass.prototype.destroy = function () {
            // Clear any deferred properties, functions may live in here
            this._deferred_properties = {};
            this.onclick = null;
            // Call the destructor of all children so any legacy widgets get destroyed
            for (var i = this.getChildren().length - 1; i >= 0; i--) {
                this.getChildren()[i].destroy();
                this.getChildren()[i] instanceof Et2WidgetClass && this.getChildren()[i].remove();
            }
            this._children.splice(0, this._children.length);
            this._legacy_children.splice(0, this._legacy_children.length);
            // Free the array managers if they belong to this widget
            for (var key in this._mgrs) {
                if (this._mgrs[key] && this._mgrs[key].owner == this) {
                    delete this._mgrs[key];
                }
            }
            this._parent = null;
            this._inst = null;
            // if widget exists DOM-wise outside the parent, we need to explicitly remove it
            if (this._parent_node)
                this.remove();
        };
        Et2WidgetClass.prototype.isInTree = function () {
            // TODO: Probably should watch the state or something
            return true;
        };
        Object.defineProperty(Et2WidgetClass.prototype, "options", {
            /**
             * Get property-values as object
             *
             * @deprecated use widget methods
             */
            get: function () {
                var _this = this;
                var options = {};
                // @ts-ignore not sure how to tell TS this is a ReactiveElement and properties is a static getter
                for (var name_1 in this.constructor.properties) {
                    options[name_1] = this[name_1];
                }
                // adding attributes too
                this.getAttributeNames().forEach(function (name) {
                    options[name] = _this.getAttribute(name);
                });
                // add some (not declared) known properties
                if (typeof this.get_value === 'function') {
                    options.value = this.get_value();
                }
                console.groupCollapsed("Deprecated widget.options use");
                console.trace("Something called widget.options on ", this);
                console.groupEnd();
                return options;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Loads the widget tree from an XML node
         *
         * @param _node xml node
         */
        Et2WidgetClass.prototype.loadFromXML = function (_node) {
            // Load the child nodes.
            for (var i = 0; i < _node.childNodes.length; i++) {
                var node = _node.childNodes[i];
                var widgetType = node.nodeName.toLowerCase();
                if (widgetType == "#comment") {
                    continue;
                }
                if (widgetType == "#text") {
                    if (node.data.replace(/^\s+|\s+$/g, '')) {
                        this.appendChild(node.cloneNode());
                    }
                    continue;
                }
                // Create the new element
                this.createElementFromNode(node);
            }
        };
        /**
         * Create a et2_widget from an XML node.
         *
         * First the type and attributes are read from the node.  Then the readonly & modifications
         * arrays are checked for changes specific to the loaded data.  Then the appropriate
         * constructor is called.  After the constructor returns, the widget has a chance to
         * further initialize itself from the XML node when the widget's loadFromXML() method
         * is called with the node.
         *
         * @param _node XML node to read
         * @param _name XML node name
         *
         * @return et2_widget
         */
        Et2WidgetClass.prototype.createElementFromNode = function (_node, _name) {
            var attributes = {};
            // Parse the "readonly" and "type" flag for this element here, as they
            // determine which constructor is used
            var _nodeName = attributes["type"] = _node.getAttribute("type") ?
                _node.getAttribute("type") : _node.nodeName.toLowerCase();
            var readonly = attributes["readonly"] = this.getArrayMgr("readonlys") ?
                this.getArrayMgr("readonlys").isReadOnly(_node.getAttribute("id"), _node.getAttribute("readonly"), typeof this.readonly !== "undefined" ? this.readonly : false) : false;
            // Check to see if modifications change type
            var modifications = this.getArrayMgr("modifications");
            if (modifications && _node.getAttribute("id")) {
                var entry = modifications.getEntry(_node.getAttribute("id"));
                if (entry == null) {
                    // Try again, but skip the fancy stuff
                    // TODO: Figure out why the getEntry() call doesn't always work
                    entry = modifications.data[_node.getAttribute("id")];
                    if (entry) {
                        this.egw().debug("warn", "getEntry(" + _node.getAttribute("id") + ") failed, but the data is there.", modifications, entry);
                    }
                    else {
                        // Try the root, in case a namespace got missed
                        entry = modifications.getRoot().getEntry(_node.getAttribute("id"));
                    }
                }
                if (entry && entry.type && typeof entry.type === 'string') {
                    _nodeName = attributes["type"] = entry.type;
                }
                entry = null;
            }
            // if _nodeName / type-attribute contains something to expand (eg. type="@${row}[type]"),
            // we need to expand it now as it defines the constructor and by that attributes parsed via parseXMLAttrs!
            if (_nodeName.charAt(0) == '@' || _nodeName.indexOf('$') >= 0) {
                _nodeName = attributes["type"] = this.getArrayMgr('content').expandName(_nodeName);
            }
            // If using type attribute instead of nodeName makes things invalid, don't
            // Some widgets use their type attribute
            if (_node.hasAttribute("type") && !window.customElements.get(_nodeName) && typeof et2_core_widget_1.et2_registry[_nodeName] === "undefined" && window.customElements.get(_node.nodeName.toLowerCase())) {
                _nodeName = _node.nodeName.toLowerCase();
            }
            var widget;
            if (undefined == window.customElements.get(_nodeName)) {
                // Get the constructor - if the widget is readonly, use the special "_ro"
                // constructor if it is available
                if (typeof et2_core_widget_1.et2_registry[_nodeName] === "undefined") {
                    _nodeName = 'placeholder';
                }
                var constructor = et2_core_widget_1.et2_registry[_nodeName];
                if (readonly === true && typeof et2_core_widget_1.et2_registry[_nodeName + "_ro"] != "undefined") {
                    constructor = et2_core_widget_1.et2_registry[_nodeName + "_ro"];
                }
                // Parse the attributes from the given XML attributes object
                this.parseXMLAttrs(_node.attributes, attributes, constructor.prototype);
                // Do an sanity check for the attributes
                et2_core_inheritance_1.ClassWithAttributes.generateAttributeSet(et2_core_widget_1.et2_attribute_registry[constructor.name], attributes);
                // Creates the new widget, passes this widget as an instance and
                // passes the widgetType. Then it goes on loading the XML for it.
                widget = new constructor(this, attributes);
                // Load the widget itself from XML
                widget.loadFromXML(_node);
            }
            else {
                widget = loadWebComponent(_nodeName, _node, this);
                if (this.addChild && widget) {
                    // webcomponent going into old et2_widget
                    this.addChild(widget);
                }
            }
            return widget;
        };
        /**
         * The parseXMLAttrs function takes an XML DOM attributes object
         * and adds the given attributes to the _target associative array. This
         * function also parses the legacyOptions.
         *
         * N.B. This is only used for legacy widgets.  WebComponents use transformAttributes() and
         * do their own handling of attributes.
         *
         * @param _attrsObj is the XML DOM attributes object
         * @param {object} _target is the object to which the attributes should be written.
         * @param {et2_widget} _proto prototype with attributes and legacyOptions attribute
         */
        Et2WidgetClass.prototype.parseXMLAttrs = function (_attrsObj, _target, _proto) {
            // Check whether the attributes object is really existing, if not abort
            if (typeof _attrsObj == "undefined") {
                return;
            }
            // Iterate over the given attributes and parse them
            var mgr = this.getArrayMgr("content");
            for (var i = 0; i < _attrsObj.length; i++) {
                var attrName = _attrsObj[i].name;
                var attrValue = _attrsObj[i].value;
                // Special handling for the legacy options
                if (attrName == "options" && _proto.constructor.legacyOptions && _proto.constructor.legacyOptions.length > 0) {
                    var legacy = _proto.constructor.legacyOptions || [];
                    // Check for modifications on legacy options here.  Normal modifications
                    // are handled in widget constructor, but it's too late for legacy options then
                    if (_target.id && this.getArrayMgr("modifications").getEntry(_target.id)) {
                        var mod = this.getArrayMgr("modifications").getEntry(_target.id);
                        if (typeof mod.options != "undefined") {
                            attrValue = _attrsObj[i].value = mod.options;
                        }
                    }
                    // expand legacyOptions with content
                    if (attrValue.charAt(0) == '@' || attrValue.indexOf('$') != -1) {
                        attrValue = mgr.expandName(attrValue);
                    }
                    // Parse the legacy options (as a string, other types not allowed)
                    var splitted = et2_core_common_1.et2_csvSplit(attrValue + "");
                    for (var j = 0; j < splitted.length && j < legacy.length; j++) {
                        // Blank = not set, unless there's more legacy options provided after
                        if (splitted[j].trim().length === 0 && legacy.length >= splitted.length) {
                            continue;
                        }
                        // Check to make sure we don't overwrite a current option with a legacy option
                        if (typeof _target[legacy[j]] === "undefined") {
                            attrValue = splitted[j];
                            /**
                        If more legacy options than expected, stuff them all in the last legacy option
                        Some legacy options take a comma separated list.
                             */
                            if (j == legacy.length - 1 && splitted.length > legacy.length) {
                                attrValue = splitted.slice(j);
                            }
                            var attr = et2_core_widget_1.et2_attribute_registry[_proto.constructor.name][legacy[j]] || {};
                            // If the attribute is marked as boolean, parse the
                            // expression as bool expression.
                            if (attr.type == "boolean") {
                                attrValue = mgr.parseBoolExpression(attrValue);
                            }
                            else if (typeof attrValue != "object") {
                                attrValue = mgr.expandName(attrValue);
                            }
                            _target[legacy[j]] = attrValue;
                        }
                    }
                }
                else if (attrName == "readonly" && typeof _target[attrName] != "undefined") {
                    // do NOT overwrite already evaluated readonly attribute
                }
                else {
                    var attrs = et2_core_widget_1.et2_attribute_registry[_proto.constructor.name] || {};
                    if (mgr != null && typeof attrs[attrName] != "undefined") {
                        var attr = attrs[attrName];
                        // If the attribute is marked as boolean, parse the
                        // expression as bool expression.
                        if (attr.type == "boolean") {
                            attrValue = mgr.parseBoolExpression(attrValue);
                        }
                        else {
                            attrValue = mgr.expandName(attrValue);
                        }
                    }
                    // Set the attribute
                    _target[attrName] = attrValue;
                }
            }
        };
        Et2WidgetClass.prototype.transformAttributes = function (attrs) {
            var _a, _b, _c;
            transformAttributes(this, this.getArrayMgr("content"), attrs);
            // Add in additional modifications
            var mods = ((_a = this.getArrayMgr("modifications")) === null || _a === void 0 ? void 0 : _a.getPerspectiveData().owner) == this ? (_b = this.getArrayMgr("modifications")) === null || _b === void 0 ? void 0 : _b.data : (_c = this.getArrayMgr("modifications")) === null || _c === void 0 ? void 0 : _c.getEntry(this.id);
            if (this.id && mods) {
                transformAttributes(this, this.getArrayMgr("content"), mods);
            }
        };
        Et2WidgetClass.prototype.iterateOver = function (_callback, _context, _type) {
            if (this.disabled) {
                // Don't if we're disabled
                return;
            }
            if (typeof _type === "undefined" || _type === et2_core_widget_1.et2_widget || _type === exports.Et2Widget ||
                typeof _type === 'function' && this instanceof _type ||
                et2_core_interfaces_1.et2_implements_registry[_type] && et2_core_interfaces_1.et2_implements_registry[_type](this)) {
                _callback.call(_context, this);
            }
            // Ask children
            for (var i = 0; i < this._children.length; i++) {
                this._children[i].iterateOver(_callback, _context, _type);
            }
        };
        /**
         * Needed for legacy compatability.
         *
         * @param {Promise[]} promises List of promises from widgets that are not done.  Pass an empty array, it will be filled if needed.
         */
        Et2WidgetClass.prototype.loadingFinished = function (promises) {
            var _this = this;
            if (typeof promises === "undefined") {
                promises = [];
            }
            // Note that WebComponents don't do anything here, their lifecycle is different
            // This is just to support legacy widgets
            var doLoadingFinished = function () {
                var _a, _b;
                /**
                 * This is needed mostly as a bridge between non-WebComponent widgets and
                 * connectedCallback().  It's not really needed if the whole tree is WebComponent.
                 * WebComponents can be added as children immediately after creation, and they handle the
                 * rest themselves with their normal lifecycle (especially connectedCallback(), which is kind
                 * of the equivalent of doLoadingFinished()
                 */
                // @ts-ignore this is not an et2_widget, so getDOMNode(this) is bad
                if (!_this._parent_node && _this.getParent() instanceof et2_core_widget_1.et2_widget && _this.getParent().getDOMNode(_this) != _this.parentNode) {
                    // @ts-ignore this is not an et2_widget, and Et2Widget is not a Node
                    (_a = _this.getParent().getDOMNode(_this)) === null || _a === void 0 ? void 0 : _a.append(_this);
                }
                // An empty text node causes problems with legacy widget children
                // It throws off their insertion indexing, making them get added in the wrong place
                if (((_b = _this.childNodes[0]) === null || _b === void 0 ? void 0 : _b.nodeType) == _this.TEXT_NODE && _this.childNodes[0].textContent == "") {
                    _this.removeChild(_this.childNodes[0]);
                }
                for (var i = 0; i < _this.getChildren().length; i++) {
                    var child = _this.getChildren()[i];
                    child.loadingFinished(promises);
                }
            };
            doLoadingFinished();
            var updateComplete = this.updateComplete;
            // Record widget for debug
            updateComplete["widget"] = this;
            promises.push(updateComplete);
        };
        Et2WidgetClass.prototype.getWidgetById = function (_id) {
            var _this = this;
            if (this.id == _id) {
                return this;
            }
            if (this.getChildren().length == 0) {
                return null;
            }
            var check_children = function (children) {
                for (var i = 0; i < children.length; i++) {
                    var elem = children[i].getWidgetById(_id);
                    if (elem != null) {
                        return elem;
                    }
                }
                if (_this.id && _id.indexOf('[') > -1 && children.length) {
                    var ids = (new et2_core_arrayMgr_1.et2_arrayMgr()).explodeKey(_id);
                    var widget = _this;
                    while (widget && ids.length) {
                        var joined = ids.join("[") + "]";
                        var previous = widget;
                        widget = widget.getWidgetById(ids.shift());
                        if (!widget && previous !== _this) {
                            return previous.getWidgetById(joined);
                        }
                    }
                    return widget;
                }
            };
            return check_children(this.getChildren()) || null;
        };
        Object.defineProperty(Et2WidgetClass.prototype, "parentId", {
            get: function () {
                return this.__parentId;
            },
            /**
             * Parent is different than what is specified in the template / hierarchy.
             * Widget ID of another node to insert this node into instead of the normal location
             *
             * @param {string} parent
             */
            set: function (parent) {
                var _this = this;
                this.__parentId = parent;
                this.updateComplete.then(function () {
                    if (!_this.__parentId) {
                        return;
                    }
                    var parent = document.querySelector("#" + _this.__parentId) || _this.__parentId;
                    if (parent && parent instanceof Element && parent !== _this.parentNode) {
                        _this.remove();
                        parent.append(_this);
                        _this._parent_node = parent;
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        Et2WidgetClass.prototype.setParent = function (new_parent) {
            this._parent = new_parent;
            if (this.id) {
                // Create a namespace for this object
                if (this._createNamespace()) {
                    this.checkCreateNamespace();
                }
            }
            // @ts-ignore
            this._parent.addChild(this);
        };
        Et2WidgetClass.prototype.getParent = function () {
            if (this._parent) {
                return this._parent;
            }
            return null;
        };
        Et2WidgetClass.prototype.getParentDOMNode = function () {
            return this._parent_node;
        };
        Et2WidgetClass.prototype.addChild = function (child) {
            if (this._children.indexOf(child) >= 0) {
                return;
            }
            if (child instanceof et2_core_widget_1.et2_widget) {
                // Type of et2_widget._parent is et2_widget, not Et2Widget.  This might cause problems, but they
                // should be fixed by getting rid of the legacy widget with problems
                // @ts-ignore
                child._parent = this;
                // During legacy widget creation, the child's DOM node won't be available yet.
                this._legacy_children.push(child);
                var child_node = null;
                try {
                    //@ts-ignore Technically getDOMNode() is from et2_DOMWidget
                    child_node = typeof child.getDOMNode !== "undefined" ? child.getDOMNode(child) : null;
                }
                catch (e) {
                    // Child did not give up its DOM node nicely but errored instead
                }
                if (child_node && child_node !== this) {
                    this.append(child_node);
                }
            }
            else {
                this.append(child);
            }
            this._children.push(child);
        };
        /**
         * Get child widgets
         * Use <obj>.children to get web component children
         * @returns {et2_widget[]}
         */
        Et2WidgetClass.prototype.getChildren = function () {
            return this._children;
        };
        Et2WidgetClass.prototype.getType = function () {
            return this.nodeName;
        };
        Et2WidgetClass.prototype.getDOMNode = function () {
            return this;
        };
        /**
         * Creates a copy of this widget.
         *
         * @param {et2_widget} _parent parent to set for clone, default null
         */
        Et2WidgetClass.prototype.clone = function (_parent) {
            var _this = this;
            // Default _parent to null
            if (typeof _parent == "undefined") {
                _parent = null;
            }
            // Create the copy
            var copy = this.cloneNode();
            copy.id = this._widget_id;
            if (_parent) {
                copy.setParent(_parent);
            }
            else {
                // Copy a reference to the content array manager
                copy.setArrayMgrs(this.getArrayMgrs());
                // Pass on instance too
                copy.setInstanceManager(this.getInstanceManager());
            }
            var widget_class = window.customElements.get(this.localName);
            var properties = widget_class ? widget_class.elementProperties : [];
            properties.forEach(function (v, key) {
                copy[key] = _this[key];
            });
            // Keep the deferred properties
            copy._deferred_properties = this._deferred_properties;
            // Create a clone of all child widgets of the given object
            for (var i = 0; i < this.getChildren().length; i++) {
                this.getChildren()[i].clone(copy);
            }
            return copy;
        };
        /**
         * Sets the array manager for the given part
         *
         * @param {string} _part which array mgr to set
         * @param {object} _mgr
         */
        Et2WidgetClass.prototype.setArrayMgr = function (_part, _mgr) {
            this._mgrs[_part] = _mgr;
        };
        /**
         * Returns the array manager object for the given part
         *
         * @param {string} managed_array_type name of array mgr to return
         */
        Et2WidgetClass.prototype.getArrayMgr = function (managed_array_type) {
            if (this._mgrs && typeof this._mgrs[managed_array_type] != "undefined") {
                return this._mgrs[managed_array_type];
            }
            else if (this.getParent()) {
                return this.getParent().getArrayMgr(managed_array_type);
            }
            return null;
        };
        /**
         * Sets all array manager objects - this function can be used to set the
         * root array managers of the container object.
         *
         * @param {object} _mgrs
         */
        Et2WidgetClass.prototype.setArrayMgrs = function (_mgrs) {
            this._mgrs = et2_core_common_1.et2_cloneObject(_mgrs);
        };
        /**
         * Returns an associative array containing the top-most array managers.
         *
         * @param _mgrs is used internally and should not be supplied.
         */
        Et2WidgetClass.prototype.getArrayMgrs = function (_mgrs) {
            if (typeof _mgrs == "undefined") {
                _mgrs = {};
            }
            // Add all managers of this object to the result, if they have not already
            // been set in the result
            for (var key in this._mgrs) {
                if (typeof _mgrs[key] == "undefined") {
                    _mgrs[key] = this._mgrs[key];
                }
            }
            // Recursively applies this function to the parent widget
            if (this._parent) {
                this._parent.getArrayMgrs(_mgrs);
            }
            return _mgrs;
        };
        /**
         * Checks whether a namespace exists for this element in the content array.
         * If yes, an own perspective of the content array is created. If not, the
         * parent content manager is used.
         *
         * Constructor attributes are passed in case a child needs to make decisions
         */
        Et2WidgetClass.prototype.checkCreateNamespace = function () {
            // Get the content manager
            var mgrs = this.getArrayMgrs();
            for (var key in mgrs) {
                var mgr = mgrs[key];
                // Get the original content manager if we have already created a
                // perspective for this node
                if (typeof this._mgrs[key] != "undefined" && mgr.perspectiveData.owner == this) {
                    mgr = mgr.getParentMgr();
                }
                // Check whether the manager has a namespace for the id of this object
                var entry = mgr.getEntry(this.id);
                if (typeof entry === 'object' && entry !== null || this.id) {
                    // The content manager has an own node for this object, so
                    // create an own perspective.
                    this._mgrs[key] = mgr.openPerspective(this, this.id);
                }
                else {
                    // The current content manager does not have an own namespace for
                    // this element, so use the content manager of the parent.
                    delete (this._mgrs[key]);
                }
            }
        };
        /**
         * Set the instance manager
         * Normally this is not needed as it's set on the top-level container, and we just return that reference
         *
         */
        Et2WidgetClass.prototype.setInstanceManager = function (manager) {
            this._inst = manager;
        };
        /**
         * Returns the instance manager
         *
         * @return {etemplate2}
         */
        Et2WidgetClass.prototype.getInstanceManager = function () {
            var _a, _b, _c;
            if (this._inst != null) {
                return this._inst;
            }
            else if (this.getParent()) {
                return this.getParent().getInstanceManager ? this.getParent().getInstanceManager() : null;
            }
            // Widget might be inside another widget, in which case getParent() is null
            // @ts-ignore host does not always exist on getRootNode()
            else if (this.getRootNode() && typeof ((_b = (_a = this.getRootNode()) === null || _a === void 0 ? void 0 : _a.host) === null || _b === void 0 ? void 0 : _b.getParent) == "function") {
                // @ts-ignore host does not always exist on getRootNode()
                return (_c = this.getRootNode().host.getParent()) === null || _c === void 0 ? void 0 : _c.getInstanceManager();
            }
            return null;
        };
        /**
         * Returns the base widget
         * Usually this is the same as getInstanceManager().widgetContainer
         */
        Et2WidgetClass.prototype.getRoot = function () {
            var _a, _b;
            if (this.getParent() != null) {
                return this.getParent().getRoot();
            }
            // Widget might be inside another widget, in which case getParent() is null
            // @ts-ignore host does not always exist on getRootNode()
            else if (this.getRootNode() && typeof ((_b = (_a = this.getRootNode()) === null || _a === void 0 ? void 0 : _a.host) === null || _b === void 0 ? void 0 : _b.getParent) == "function" && this.getRootNode().host.getParent()) {
                // @ts-ignore host does not always exist on getRootNode()
                return this.getRootNode().host.getParent();
            }
            else {
                return this;
            }
        };
        /**
         * Returns the path into the data array.  By default, array manager takes care of
         * this, but some extensions need to override this
         */
        Et2WidgetClass.prototype.getPath = function () {
            var _a, _b;
            var path = (_b = (_a = this.getArrayMgr("content")) === null || _a === void 0 ? void 0 : _a.getPath()) !== null && _b !== void 0 ? _b : [];
            // Prevent namespaced widgets with value from going an extra layer deep
            if (this.id && this._createNamespace() && path[path.length - 1] == this.id) {
                path.pop();
            }
            return path;
        };
        Et2WidgetClass.prototype._createNamespace = function () {
            return false;
        };
        Et2WidgetClass.prototype.egw = function () {
            if (this.getParent() != null && typeof this.getParent().egw === "function") {
                return this.getParent().egw();
            }
            // Get the window this object belongs to
            var wnd = null;
            // @ts-ignore Technically this doesn't have implements(), but it's mixed in
            if (this.implements(et2_core_interfaces_1.et2_IDOMNode)) {
                var node = this.getDOMNode();
                if (node && node.ownerDocument) {
                    wnd = node.ownerDocument.parentNode || node.ownerDocument.defaultView;
                }
            }
            // If we're the root object, return the phpgwapi API instance
            var egwInstance = typeof egw_global_1.egw === "function" ? egw_global_1.egw('phpgwapi', wnd) : (window['egw'] ? window['egw'] : null);
            // Make sure required methods are there
            // These methods are used inside widgets, but may not always be available depending on egw() loading (tests, docs)
            var required = {
                debug: function () { console.log(arguments); },
                image: function () { return ""; },
                lang: function (l) { return l; },
                preference: function () { return false; },
                tooltipUnbind: function () { return false; },
            };
            for (var functionName in required) {
                if (egwInstance && typeof egwInstance[functionName] !== "function") {
                    egwInstance[functionName] = required[functionName];
                }
            }
            return egwInstance;
        };
        __decorate([
            property_js_1.property({ type: Object })
        ], Et2WidgetClass.prototype, "actions", null);
        return Et2WidgetClass;
    }(superClass));
    // Add some more stuff in
    applyMixins(Et2WidgetClass, [et2_core_inheritance_1.ClassWithInterfaces]);
    return Et2WidgetClass;
};
exports.Et2Widget = dedupe_mixin_1.dedupeMixin(Et2WidgetMixin);
/**
 * Load a Web Component
 * @param _nodeName
 * @param _template_node
 * @param parent Parent widget
 */
// @ts-ignore Et2Widget is I guess not the right type
function loadWebComponent(_nodeName, _template_node, parent) {
    var _a;
    var attrs = {};
    var load_children = true;
    // support attributes object instead of an Element
    if (typeof _template_node.getAttribute === 'undefined') {
        attrs = _template_node;
        load_children = false;
    }
    else {
        _template_node.getAttributeNames().forEach(function (attribute) {
            attrs[attribute] = _template_node.getAttribute(attribute);
        });
    }
    // Try to find the class for the given node
    var mobile = (typeof egwIsMobile != "undefined" && egwIsMobile());
    if (mobile && typeof window.customElements.get(_nodeName + "_mobile") != "undefined") {
        _nodeName += "_mobile";
    }
    var widget_class = window.customElements.get(_nodeName);
    if (!widget_class) {
        // Given node has no registered class.  Try some of our special things (remove type, fallback to actual node)
        var tries = [_nodeName.split('-')[0]];
        if (_template_node.nodeName) {
            tries = tries.concat(_template_node.nodeName.toLowerCase());
        }
        for (var i = 0; i < tries.length && !window.customElements.get(_nodeName); i++) {
            _nodeName = tries[i];
        }
        widget_class = window.customElements.get(_nodeName);
        if (!widget_class) {
            debugger;
            throw Error("Unknown or unregistered WebComponent '" + _nodeName + "', could not find class.  Also checked for " + tries.join(','));
        }
    }
    // Don't need to create hidden elements
    if ((parent === null || parent === void 0 ? void 0 : parent.hidden) || attrs["hidden"] && (parent === null || parent === void 0 ? void 0 : parent.getArrayMgr("content")) && parent.getArrayMgr("content").parseBoolExpression(attrs["hidden"])) {
        //return null;
    }
    var readonly = (parent === null || parent === void 0 ? void 0 : parent.getArrayMgr("readonlys")) ?
        parent.getArrayMgr("readonlys").isReadOnly(attrs["id"], attrs["readonly"], typeof (parent === null || parent === void 0 ? void 0 : parent.readonly) !== "undefined" ? parent.readonly : ((_a = parent.options) === null || _a === void 0 ? void 0 : _a.readonly) || false) : false;
    if (readonly === true && typeof window.customElements.get(_nodeName + "_ro") != "undefined") {
        _nodeName += "_ro";
    }
    // @ts-ignore
    var widget = document.createElement(_nodeName);
    if (parent && typeof widget.setParent === 'function')
        widget.setParent(parent);
    // Set read-only.  Doesn't really matter if it's a ro widget, but otherwise it needs set
    widget.readonly = readonly;
    delete attrs.readonly;
    widget.transformAttributes(attrs);
    // Children need to be loaded
    if (load_children) {
        widget.loadFromXML(_template_node);
    }
    return widget;
}
exports.loadWebComponent = loadWebComponent;
/**
 * Take attributes from a node in a .xet file and apply those to a WebComponent widget
 *
 * Any attributes provided that match a property (or attribute) on the widget will be adjusted according to
 * the passed arrayManager, coerced into the proper type, and set.
 * It is here that we find values or set attributes that should come from content.
 *
 * @param widget
 * @param {et2_arrayMgr} mgr
 * @param attributes
 */
function transformAttributes(widget, mgr, attributes) {
    var widget_class = window.customElements.get(widget.localName);
    // Special case attributes
    if (attributes.attributes) {
        // Attributes in content? "attributes" is read-only in webComponent
        var mgr_attributes = mgr.getEntry(attributes.attributes);
        delete attributes.attributes;
        if (mgr_attributes) {
            Object.assign.apply(Object, __spreadArrays([attributes], mgr_attributes));
        }
    }
    if (attributes.width) {
        widget.style.setProperty("width", attributes.width);
        widget.style.setProperty("flex", "0 0 auto");
        delete attributes.width;
    }
    if (attributes.height) {
        widget.style.setProperty("height", attributes.height);
        delete attributes.height;
    }
    // Apply any set attributes - widget will do its own coercion
    for (var attribute in attributes) {
        var attrValue = attributes[attribute];
        // If there is no attribute set, ignore it.  Widget sets its own default.
        if (typeof attrValue === "undefined") {
            continue;
        }
        // preprocessor and transformer can't know if application widget is a web-component or a legacy one
        // translate attribute names to camelCase (only do it for used underscore, to not require a regexp)
        if (attribute !== 'select_options' && attribute.indexOf('_') !== -1) {
            var parts = attribute.split('_');
            if (attribute === 'parent_node')
                parts[1] = 'Id';
            attribute = parts.shift() + parts.map(function (part) { return part[0].toUpperCase() + part.substring(1); }).join("");
        }
        var property_1 = widget_class.getPropertyOptions(attribute);
        switch (typeof property_1 === "object" ? property_1.type : property_1) {
            case Boolean:
                if (typeof attrValue == "boolean") {
                    // Already boolean, nothing needed
                    break;
                }
                // If the attribute is marked as boolean, parse the
                // expression as bool expression.
                attrValue = mgr ? mgr.parseBoolExpression(attrValue) : attrValue;
                if (typeof attrValue === "string") {
                    // Parse decided we still needed a string ($row most likely) so we'll defer it until later
                    // Repeating rows & nextmatch will parse it again when doing the row
                    widget.deferredProperties[attribute] = attrValue;
                    // Leave the current value at whatever the default is
                    continue;
                }
                break;
            case Function:
                if (typeof attrValue == "string" && mgr && mgr.getPerspectiveData().row == null &&
                    (attrValue.indexOf("$row") > -1 || attrValue.indexOf("$row_cont") > -1)) {
                    // Need row context, defer it until later
                    // Repeating rows & nextmatch will parse it again when doing the row
                    widget.deferredProperties[attribute] = attrValue;
                    console.log("Had to defer %s parsing for %o\nCan it be rewritten to avoid $row & $row_cont?", attribute, widget);
                    break;
                }
                // We parse it into a function here so we can pass in the widget as context.
                // Leaving it to the LitElement conversion loses the widget as context
                if (typeof attrValue !== "function") {
                    attrValue = et2_core_legacyJSFunctions_1.et2_compileLegacyJS(attrValue, widget, widget);
                }
                break;
            case Object:
            case Array:
                // Leave it alone if it's not a string
                if (typeof attrValue !== "string") {
                    break;
                }
            // fall through to look in content
            default:
                attrValue = mgr ? mgr.expandName("" + attrValue) : attrValue;
                if (attrValue && typeof attrValue == "string" && widget_class.translate[attribute]) {
                    // allow attribute to contain multiple translated sub-strings eg: {Firstname}.{Lastname}
                    if (attrValue.indexOf('{') !== -1) {
                        attrValue = attrValue.replace(/{([^}]+)}/g, function (str, p1) {
                            return widget.egw().lang(p1);
                        });
                    }
                    else {
                        attrValue = widget.egw().lang(attrValue);
                    }
                }
                else if (attrValue && [Object, Array, Number].indexOf(typeof property_1 === "object" ? property_1.type : property_1) != -1) {
                    // Value was not supposed to be a string, but was run through here for expandName
                    try {
                        attrValue = JSON.parse(attrValue);
                    }
                    catch (e) {
                        console.info(widget_class.name + "#" + widget.id + " attribute '" + attribute + "' has type " +
                            (typeof property_1 === "object" ? property_1.type.name : property_1.name) + " but value %o could not be parsed", attrValue);
                    }
                }
                break;
        }
        // Bind handlers directly, since we can do that now.  Event handlers still need to be defined
        // in properties() as {type: Function}, but this will take care of the binding.  This is
        // separate from internal events.
        // (handlers can only be bound _after_ the widget is added to the DOM
        if (attribute.startsWith("on") && typeof attrValue == "function") {
            //widget.updateComplete.then(() => addEventListener(attribute, attrValue));
        }
        // Set as attribute or property, as appropriate.  Don't set missing attributes.
        if (widget.getAttributeNames().indexOf(attribute) >= 0 || property_1.reflect && attrValue) {
            // Set as attribute (reflected in DOM)
            widget.setAttribute(attribute, attrValue === true ? "" : attrValue);
        }
        else if (attribute === 'options') {
            console.trace('Ignored setting depricated "options" attribute for widget #' + widget.id, widget);
            continue;
        }
        // Set as property
        var old_value = widget[attribute];
        widget[attribute] = attrValue;
        // Due to reactive properties not updating properly, make sure to trigger an update
        widget.requestUpdate(attribute, old_value);
    }
    if (widget_class.getPropertyOptions("value") && widget.set_value) {
        if (mgr != null) {
            var val = mgr.getEntry(widget.id, false, true);
            if (val !== null) {
                widget.set_value(val);
            }
        }
    }
}
/**
 * Take the name of one of our images, find the full URL (including theme), and wrap it up so you can use it in a
 * widget's css block.
 *
 * @example
 * import {cssImage} from Et2Widget;
 * ...
 * static get styles()
 * {
 * 		return [
 * 			...super.styles,
 * 			css`
 * 			:host {
 * 				background-image: ${cssImage("save")};
 *			}
 *		`];
 *	}
 * @param image_name Name of the image
 * @param app_name Optional, image is from an app instead of api
 * @returns {CSSResult}
 */
function cssImage(image_name, app_name) {
    var url = (egw_global_1.egw === null || egw_global_1.egw === void 0 ? void 0 : egw_global_1.egw.image) && (egw_global_1.egw === null || egw_global_1.egw === void 0 ? void 0 : egw_global_1.egw.image(image_name, app_name));
    if (url) {
        return lit_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["url(", ")"], ["url(", ")"])), lit_1.unsafeCSS(url));
    }
    else {
        return lit_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
    }
}
exports.cssImage = cssImage;
var templateObject_1, templateObject_2, templateObject_3;
