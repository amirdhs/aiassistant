"use strict";
/**
 * EGroupware eTemplate2 - Toolbar WebComponent
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Toolbar = void 0;
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var shoelace_1 = require("../Styles/shoelace");
var Et2Toolbar_styles_1 = require("./Et2Toolbar.styles");
var state_js_1 = require("lit/decorators/state.js");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var egw_action_common_1 = require("../../egw_action/egw_action_common");
var shoelace_2 = require("@shoelace-style/shoelace");
var slot_1 = require("../Et2Widget/slot");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
var Et2Button_1 = require("../Et2Button/Et2Button");
var Et2Box_1 = require("../Layout/Et2Box/Et2Box");
/**
 * Toolbar shows inputs in a horizontal line.  Inputs that do not fit are hidden in a dropdown.
 *
 * @slot - Toolbar contents
 * @slot list - Toolbar contents that start hidden in the dropdown
 *
 * @event et2-resize - Emitted when the toolbar re-lays out
 *
 * @part base - Toolbar wrapper
 * @part buttons - Wrapper of visible controls
 * @part list - Wrapper of not visible controls
 *
 */
var Et2Toolbar = /** @class */ (function (_super) {
    __extends(Et2Toolbar, _super);
    function Et2Toolbar() {
        var _this = _super.call(this) || this;
        /** Actions with children should be shown as dropdown (true) or flat list (false) */
        _this.groupChildren = false;
        /**
         * Define a custom preference id for saving the toolbar preferences.
         *
         * This is useful when you have the same toolbar and you use it in a pop up but also in a tab, which have different dom ids. When not set it defaults to the dom id of the toolbar.
         *
         * @type {string}
         */
        _this.preferenceId = "";
        /**
         * 	Define a custom preference application for saving the toolbar preferences.
         *
         * 	This is useful when you have the same toolbar and you use it in multiple places, which have different application names.
         * 	When not set it defaults to the result of this.egw().app_name();
         *
         * @type {string}
         */
        _this.preferenceApp = "";
        /* User is admin */
        _this._isAdmin = false;
        /* Toolbar contents overflow available space */
        _this._isOverflowed = false;
        // Allows us to check to see if label or help-text is set.  Overriden to check additional "list" slot.
        _this.hasSlotController = new slot_1.HasSlotController(_this, 'list', 'help-text', 'label');
        // Allows us to make changes when the toolbar is bigger or smaller
        _this.resizeObserver = new ResizeObserver(_this.handleResize);
        /**
         * Indicates which actions go where
         *
         * - All actions should be stored in preference
         * - Actions inside menu set as true
         * - Actions outside menu set as false
         * - Actions not set need to be added
         */
        _this._preference = {};
        /* Hold on to actions, as we don't use action system but just use them to create inputs */
        _this._actions = {};
        /* Actions have been parsed into inputs */
        _this._actionsParsed = false;
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleSettingsClose = _this.handleSettingsClose.bind(_this);
        return _this;
    }
    Et2Toolbar_1 = Et2Toolbar;
    Object.defineProperty(Et2Toolbar, "styles", {
        get: function () {
            return [
                shoelace_1.default,
                _super.styles,
                Et2Toolbar_styles_1.default
            ];
        },
        enumerable: false,
        configurable: true
    });
    Et2Toolbar.prototype.connectedCallback = function () {
        var _a, _b;
        _super.prototype.connectedCallback.call(this);
        this._isAdmin = typeof (this.egw() && this.egw().user && ((_b = (_a = this.egw()) === null || _a === void 0 ? void 0 : _a.user("apps")) === null || _b === void 0 ? void 0 : _b.admin)) != "undefined" || false;
        this.resizeObserver.observe(this);
    };
    Et2Toolbar.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.resizeObserver.disconnect();
    };
    Et2Toolbar.prototype.willUpdate = function (changedProperties) {
        var _a, _b;
        _super.prototype.willUpdate.call(this, changedProperties);
        if (changedProperties.has("preferenceId") || changedProperties.has("preferenceApp") || changedProperties.has("id")) {
            this.preferenceId = this.preferenceId || this.dom_id;
            this.preferenceApp = this.preferenceApp || ((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.app_name()) || "";
            this._preference = ((_b = this.egw()) === null || _b === void 0 ? void 0 : _b.preference(this.preferenceId, this.preferenceApp)) || {};
        }
        if (!this._actionsParsed) {
            this._parseActions(this.actions);
        }
    };
    Et2Toolbar.prototype.firstUpdated = function (changedProperties) {
        var _this = this;
        var _a;
        // Force popup to correctly position
        (_a = this.shadowRoot.querySelector('sl-dropdown')) === null || _a === void 0 ? void 0 : _a.updateComplete.then(function () {
            var _a, _b;
            (_b = (_a = _this.shadowRoot.querySelector('sl-dropdown')) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('sl-popup')) === null || _b === void 0 ? void 0 : _b.handleAnchorChange();
            _this._organiseChildren();
        });
    };
    Et2Toolbar.prototype._createNamespace = function () {
        return true;
    };
    Object.defineProperty(Et2Toolbar.prototype, "actions", {
        get: function () {
            var _a;
            return ((_a = this._actionManager) === null || _a === void 0 ? void 0 : _a.children) || {};
        },
        /**
         * Overridden from parent because toolbar can turn actions into buttons
         *
         * @param {EgwAction[] | {[p : string] : object}} actions
         */
        set: function (actions) {
            this._initActions(actions);
            this._actionsParsed = false;
            this.requestUpdate();
        },
        enumerable: false,
        configurable: true
    });
    Et2Toolbar.prototype._link_actions = function () { };
    /**
     * Parse a list of actions and create matching inputs into the toolbar
     *
     * @param actions
     * @protected
     */
    Et2Toolbar.prototype._parseActions = function (actions) {
        // Clean up anything from actions that's there already - do not remove everything
        this.querySelectorAll(":scope > [data-action-id], :scope > [data-group]").forEach(function (n) { return n.remove(); });
        var last_group_id;
        var last_group;
        var domChildCount = this.children.length;
        var shownActionCount = domChildCount + Object.values(this._preference).filter(function (p) { return !p; }).length;
        // Set order on any existing children
        Array.from(this.querySelectorAll("*:not([data-order]):not([data-action-id])"))
            .forEach(function (c, index) { return c.dataset.order = index; });
        // Set groups on real children
        Array.from(this.querySelectorAll(":scope > sl-button-group:not([data-group]), :scope > et2-box:not([data-group]), :scope > et2-hbox:not([data-group])"))
            .forEach(function (c, index) {
            var _a;
            c.dataset.group = (_a = c.label) !== null && _a !== void 0 ? _a : index + shownActionCount;
            c.querySelectorAll(":scope > *").forEach(function (child) { return child.dataset.groupId = c.dataset.group; });
        });
        for (var name_1 in actions) {
            var action = actions[name_1];
            if (typeof action == 'string') {
                action = { id: name_1, caption: action };
            }
            if (!action.id) {
                action.id = name_1;
            }
            // Make sure there's something to display
            if (!action.caption && !action.icon && !action.iconUrl) {
                continue;
            }
            // Add group
            if (action.group && last_group_id != action.group) {
                last_group = this.querySelector("[data-group='" + action.group + "']");
                if (!last_group) {
                    last_group = document.createElement("sl-button-group");
                    last_group.dataset.group = action.group;
                    last_group.dataset.order = domChildCount + action.group;
                    this.append(last_group);
                }
                last_group_id = action.group;
            }
            else if (!action.group) {
                last_group = this;
            }
            if (action.id && typeof this._preference[action.id] == "undefined") {
                this._preference[action.id] = false;
            }
            this._addAction(action, last_group);
        }
        // Set the flag to avoid duplicates
        this._actionsParsed = true;
    };
    /**
     * Take a single action and turn it into an input, placing it inside parent
     * Handles actions with children
     *
     * @param {EgwAction} action
     * @param parent
     * @protected
     */
    Et2Toolbar.prototype._addAction = function (action, parent) {
        var _this = this;
        if (Array.isArray(action.children) && action.children.length > 0) {
            var children = {};
            var add_children_1 = function (root, children) {
                var _a, _b, _c;
                for (var id in root.children) {
                    var info = {
                        id: (_a = root.children[id].id) !== null && _a !== void 0 ? _a : id,
                        value: (_b = root.children[id].id) !== null && _b !== void 0 ? _b : id,
                        label: root.children[id].caption
                    };
                    var childaction = {};
                    if (root.children[id].iconUrl) {
                        info['icon'] = root.children[id].iconUrl;
                    }
                    if (root.children[id].children) {
                        add_children_1(root.children[id], info);
                    }
                    children[id] = info;
                    if (!_this.groupChildren) {
                        childaction = root.children[id];
                        if (typeof _this._preference[childaction['id']] === 'undefined') {
                            _this._setPrefered(childaction.id, (_c = !childaction.toolbarDefault) !== null && _c !== void 0 ? _c : true);
                        }
                        if (typeof root.children[id].group !== 'undefined' &&
                            typeof root.group !== 'undefined') {
                            childaction['group'] = root.group;
                        }
                        _this._makeInput(childaction, _this);
                    }
                }
            };
            add_children_1(action, children);
            if (!this.groupChildren && children) {
                return;
            }
            var dropdown_1 = Et2Widget_1.loadWebComponent("et2-dropdown-button", {
                id: action.id,
                label: action.caption,
                //class: this.preference[action.id] ? `et2_toolbar-dropdown et2_toolbar_draggable${this.id} et2_toolbar-dropdown-menulist` : `et2_toolbar-dropdown et2_toolbar_draggable${this.id}`,
                onchange: function (ev) {
                    var action = dropdown_1.closest("et2-toolbar")._actionManager.getActionById(dropdown_1.value);
                    dropdown_1.label = action.caption;
                    if (action) {
                        dropdown_1.closest("et2-toolbar").handleAction(ev, action);
                    }
                }.bind(action),
                image: action.iconUrl || ''
            }, this);
            dropdown_1.select_options = Object.values(children);
            //Set default selected action
            if (typeof action.children != 'undefined') {
                for (var child in action.children) {
                    if (action.children[child].default) {
                        dropdown_1.label = action.children[child].caption;
                    }
                }
            }
            dropdown_1.onclick = function (selected, dropdown) {
                var action = dropdown.closest("et2-toolbar")._actionManager.getActionById(this.getValue());
                if (action) {
                    this.value = action.id;
                    action.execute([]);
                }
            }.bind(dropdown_1);
            parent.append(dropdown_1);
            dropdown_1.slot = this._preference[action.id] ? "list" : "";
        }
        else {
            this._makeInput(action, parent);
        }
    };
    /**
     * Make an input based on the given action, adds it to parent element
     *
     * Handles just actions, manages common setup
     *
     * @param {Object} action action object with attributes icon, caption, ...
     */
    Et2Toolbar.prototype._makeInput = function (action, parent) {
        var _a, _b, _c, _d;
        var isCheckbox = action && action.checkbox;
        var isToggleSwitch = ((_a = action.data) === null || _a === void 0 ? void 0 : _a.toggle_on) || ((_b = action.data) === null || _b === void 0 ? void 0 : _b.toggle_off) || ((_c = action.data) === null || _c === void 0 ? void 0 : _c.onIcon) || ((_d = action.data) === null || _d === void 0 ? void 0 : _d.offIcon)
            || isCheckbox && action.data.icon;
        var widget = null;
        var attrs = {
            id: action.id,
            label: action.caption,
            readonly: action.readonly || this.readonly,
        };
        if ((action.hint || action.caption) && !egw_action_common_1.egwIsMobile()) {
            attrs.statustext = action.hint || action.caption;
        }
        attrs.slot = this._preference[action.id] ? "list" : "";
        if (isToggleSwitch) {
            widget = this._makeSwitch(action, attrs);
        }
        else if (isCheckbox) {
            widget = this._makeToggle(action, attrs);
        }
        else {
            widget = this._makeButton(action, attrs);
        }
        if (action.caption) {
            widget.classList.add('toolbar--hasCaption');
        }
        widget.dataset.actionId = action.id;
        var index = Object.keys(this._preference).indexOf(action.id);
        widget.dataset.order = index >= 0 ? index : parent.childNodes.length;
        if (parent.hasAttribute("data-group") || action.group) {
            widget.dataset.groupId = parent.dataset.group || action.group;
        }
        parent.append(widget);
    };
    Et2Toolbar.prototype._makeButton = function (action, attrs) {
        var component = "et2-button";
        Object.assign(attrs, {
            noSubmit: true
        });
        if (typeof action.data.icon !== "undefined" || typeof action.iconUrl !== "undefined") {
            attrs.image = action.data.icon || action.iconUrl;
        }
        if (!attrs.image) {
            attrs.class = "toolbar--needsCaption";
        }
        if (egw_action_common_1.egwIsMobile()) {
            attrs.name = '';
        }
        return Et2Widget_1.loadWebComponent(component, attrs, this);
    };
    Et2Toolbar.prototype._makeSwitch = function (action, attrs) {
        var _a, _b;
        var component = "et2-switch";
        Object.assign(attrs, {
            value: (_a = action.checked) !== null && _a !== void 0 ? _a : false
        });
        if (typeof action.data.toggle_on !== "undefined") {
            attrs.toggleOn = action.data.toggle_on;
        }
        if (typeof action.data.toggle_off !== "undefined") {
            attrs.toggleOff = action.data.toggle_off;
        }
        if (action.data.onIcon || action.data.offIcon) {
            component = "et2-switch-icon";
            if (action.data.onIcon) {
                attrs["onIcon"] = action.data.onIcon;
            }
            if (action.data.offIcon) {
                attrs["offIcon"] = action.data.offIcon;
            }
        }
        else if (action.iconUrl || action.data.icon) {
            component = "et2-button-toggle";
            attrs['icon'] = (_b = action.data.icon) !== null && _b !== void 0 ? _b : action.iconUrl;
            attrs["exportparts"] = "form-control-label control";
        }
        return Et2Widget_1.loadWebComponent(component, attrs, this);
    };
    Et2Toolbar.prototype._makeToggle = function (action, attrs) {
        Object.assign(attrs, {
            image: action.data.icon || action.iconUrl || ''
        });
        return Et2Widget_1.loadWebComponent("et2-button-toggle", attrs, this);
    };
    /**
     * Makes sure preference is valid and contains the child / action
     *
     * @param {string} childId
     */
    Et2Toolbar.prototype._setPrefered = function (childId, state) {
        this._preference[childId] = state;
        this.egw().set_preference(this.preferenceApp, this.preferenceId, this._preference);
    };
    /**
     * Adjust the location of child inputs without destroying / re-creating them
     *
     * @protected
     */
    Et2Toolbar.prototype._organiseChildren = function () {
        var _this = this;
        this._isOverflowed = false;
        var elements = Array.from(this.querySelectorAll(':scope > *'));
        // Reset slot so it can participate in width calculations
        elements.forEach(function (el) {
            if (el instanceof shoelace_2.SlButtonGroup || el instanceof Et2Box_1.Et2Box) {
                el.childNodes.forEach(function (c) {
                    if (!_this._preference[c.id]) {
                        c.slot = "";
                        _this._placeInputInGroup(c);
                    }
                });
            }
            else if (!_this._preference[el.id]) {
                el.slot = "";
                _this._placeInputInGroup(el);
            }
        });
        elements = Array.from(this.querySelectorAll(':scope > *'));
        elements.sort(function (a, b) { return parseInt(b.dataset.order) - parseInt(a.dataset.order); });
        elements.forEach(function (el) {
            if (typeof el.dataset.group !== "undefined") {
                Array.from(el.childNodes).reverse().forEach(function (c) { return _this._organiseChild(c); });
            }
            else {
                _this._organiseChild(el);
            }
        });
        // Move any inputs that should be in the list
        Array.from(this.querySelectorAll(":scope > * > [slot='list']"))
            .forEach(function (el) { return _this.append(el); });
        // Set order directly since etemplate2.css doesn't like attr()
        Array.from(this.querySelectorAll("[data-order]"))
            .forEach(function (el) { return el.style.order = el.dataset.order; });
        // Do not trigger refresh to avoid looping
        this.shadowRoot.querySelector(".toolbar").classList.toggle("toolbar--overflowed", this._isOverflowed);
    };
    /**
     * Slot a child according to preference and available space
     *
     * @param {HTMLElement} child
     * @protected
     */
    Et2Toolbar.prototype._organiseChild = function (child) {
        if (!this.shadowRoot.querySelector(".toolbar-buttons")) {
            // Not ready yet
            return;
        }
        var isOverflowed = (child.offsetWidth + child.offsetLeft) > this.shadowRoot.querySelector(".toolbar-buttons").offsetWidth;
        if (isOverflowed || this._preference[child.id]) {
            this._isOverflowed = this._isOverflowed || isOverflowed;
            child.slot = "list";
        }
        else if (!this._preference[child.id]) {
            child.slot = "";
        }
        // Check if input needs to go in a group (moving the other way is done in _organiseChildren()
        this._placeInputInGroup(child);
    };
    /**
     * Put button in its button group, if needed
     *
     * @param {HTMLElement} child
     * @private
     */
    Et2Toolbar.prototype._placeInputInGroup = function (child) {
        var _a;
        var groupId = (_a = child.dataset) === null || _a === void 0 ? void 0 : _a.groupId;
        if (groupId && child.slot == "" && this.querySelector("sl-button-group[data-group=\"" + groupId + "\"]")) {
            this.querySelector("sl-button-group[data-group=\"" + groupId + "\"]").append(child);
        }
    };
    /**
     * Handle clicks on child widgets - call action when appropriate
     *
     * @param {Event} e
     */
    Et2Toolbar.prototype.handleClick = function (e) {
        var _a, _b;
        // If the element has an action, execute it
        if (e.target instanceof Et2Button_1.Et2Button && ((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.actionId) && !e.defaultPrevented) {
            // Please stop, action system has it
            e.stopPropagation();
            var action = this._actionManager.getActionById(e.target.dataset.actionId);
            // Pass it to the action system
            return this.handleAction(e, action);
        }
        // Otherwise, it's just a normal component
    };
    /**
     * Handle changes on child widgets - call action when appropriate
     *
     * @param {Event} e
     */
    Et2Toolbar.prototype.handleChange = function (e) {
        var _a, _b;
        // If the element has an action, execute it
        if (((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.actionId) && !e.defaultPrevented) {
            e.stopPropagation();
            // Pass it to the action system
            return this.handleAction(e, this._actionManager.getActionById(e.target.dataset.actionId));
        }
    };
    Et2Toolbar.prototype.handleResize = function (entries, observer) {
        var _a;
        var toolbar = (_a = entries[0]) === null || _a === void 0 ? void 0 : _a.target;
        if (!toolbar._actionsParsed) {
            return;
        }
        // Toolbar changed size, re-organise children
        // but wait a bit until things stop
        if (toolbar._layoutTimeout) {
            window.clearTimeout(toolbar._layoutTimeout);
        }
        toolbar._layoutTimeout = window.setTimeout(function () {
            toolbar._organiseChildren();
            toolbar.requestUpdate();
            toolbar.dispatchEvent(new Event("et2-resize", { bubbles: true, composed: true }));
        }, Et2Toolbar_1.LAYOUT_TIMEOUT);
    };
    Et2Toolbar.prototype.handleSettingsClick = function (e) {
        var _a;
        e.stopImmediatePropagation();
        // Show settings / preferences dialog
        this.settingsDialog();
        // Close the list
        (_a = this.shadowRoot.querySelector('sl-dropdown')) === null || _a === void 0 ? void 0 : _a.hide();
    };
    /**
     * Update preference, reset if requested
     * @param e
     */
    Et2Toolbar.prototype.handleSettingsClose = function (button_id, value, event) {
        var _this = this;
        if (button_id !== Et2Dialog_1.Et2Dialog.OK_BUTTON) {
            return;
        }
        if (value.reset || value.default) {
            // Admin change preferences for all
            this.egw().json('EGroupware\\Api\\Etemplate\\Widget\\Toolbar::ajax_setAdminSettings', [value, this.preferenceId, this.preferenceApp], function (_result) {
                _this.egw().message(_result);
            }).sendRequest(true);
        }
        this.settingsOptions().forEach(function (option) {
            _this._setPrefered(option.value, !value.actions.includes(option.value));
        });
        this._organiseChildren();
    };
    Et2Toolbar.prototype.handleAction = function (event, action) {
        if (action.checkbox) {
            action.set_checked(this.getWidgetById(action.id).value);
        }
        this.value = { action: action.id };
        if (!action.data) {
            action.data = {};
        }
        action.data.event = event;
        action.execute([]);
    };
    Et2Toolbar.prototype.settingsOptions = function () {
        var _this = this;
        var options = [];
        this.querySelectorAll("[id]").forEach(function (child) {
            var _a, _b, _c, _d, _e;
            var option = {
                value: child.id,
                label: child.id
            };
            // @ts-ignore
            option.label = (_a = child.label) !== null && _a !== void 0 ? _a : child.emptyLabel;
            // @ts-ignore
            option.icon = (_c = (_b = child.icon) !== null && _b !== void 0 ? _b : child.image) !== null && _c !== void 0 ? _c : child.onIcon;
            if (!option.icon && _this._actionManager) {
                // Try harder for icon, check original action
                var action = _this._actionManager.getActionById(option.value);
                option.icon = (_e = (_d = action === null || action === void 0 ? void 0 : action.data) === null || _d === void 0 ? void 0 : _d.icon) !== null && _e !== void 0 ? _e : action === null || action === void 0 ? void 0 : action.iconUrl;
            }
            if (option.label) {
                options.push(option);
            }
        });
        return options;
    };
    Et2Toolbar.prototype.settingsDialog = function () {
        var _this = this;
        var value = Object.keys(this._preference)
            .filter(function (key) { return !_this._preference[key]; });
        var dialog = Et2Widget_1.loadWebComponent("et2-dialog", {
            title: this.egw().lang("toolbar settings"),
            buttons: Et2Dialog_1.Et2Dialog.BUTTONS_OK_CANCEL,
            style: "--width: 40em",
            template: "api.toolbarAdminSettings",
            value: {
                content: {
                    actions: value,
                    isAdmin: this._isAdmin
                },
                sel_options: {
                    actions: this.settingsOptions()
                }
            },
            callback: this.handleSettingsClose
        }, this);
        document.body.append(dialog);
    };
    Et2Toolbar.prototype.overflowTemplate = function () {
        var hasListContent = this.hasSlotController.test("list");
        return !(this._isOverflowed || hasListContent || this._isAdmin) ? lit_1.nothing : lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <sl-dropdown placement=\"bottom-end\" hoist>\n                <et2-button-icon slot=\"trigger\"\n                                 part=\"trigger\"\n                                 class=\"toolbar-list-trigger\"\n                                 image=\"three-dots-vertical\" noSubmit=\"true\"\n                                 label=\"", "\"\n                                 ?readonly=", "\n                                 ?disabled=", "\n                ></et2-button-icon>\n                <sl-menu part=\"list\" class=\"toolbar-list\">\n                    <slot name=\"list\"></slot>\n                    <sl-divider data-order=\"99\"></sl-divider>\n                    <et2-button class=\"toolbar-admin-button\"\n                                image=\"gear\" data-order=\"99\" noSubmit\n                                label=\"", "\"\n                                @click=", "\n                    ></et2-button>\n                </sl-menu>\n            </sl-dropdown>\n\t\t"], ["\n            <sl-dropdown placement=\"bottom-end\" hoist>\n                <et2-button-icon slot=\"trigger\"\n                                 part=\"trigger\"\n                                 class=\"toolbar-list-trigger\"\n                                 image=\"three-dots-vertical\" noSubmit=\"true\"\n                                 label=\"", "\"\n                                 ?readonly=", "\n                                 ?disabled=", "\n                ></et2-button-icon>\n                <sl-menu part=\"list\" class=\"toolbar-list\">\n                    <slot name=\"list\"></slot>\n                    <sl-divider data-order=\"99\"></sl-divider>\n                    <et2-button class=\"toolbar-admin-button\"\n                                image=\"gear\" data-order=\"99\" noSubmit\n                                label=\"", "\"\n                                @click=", "\n                    ></et2-button>\n                </sl-menu>\n            </sl-dropdown>\n\t\t"])), this.egw().lang("More..."), this.readonly, this.disabled, this.egw().lang("settings"), this.handleSettingsClick);
    };
    Et2Toolbar.prototype.render = function () {
        var classes = {
            toolbar: true,
            'toolbar--disabled': this.disabled,
            'toolbar--readonly': this.readonly,
            'toolbar--overflowed': this._isOverflowed
        };
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div\n                    part=\"base\"\n                    class=", "\n                    @click=", "\n                    @change=", "\n            >\n                <div part=\"buttons\" class=\"toolbar-buttons\">\n                    <slot></slot>\n                </div>\n                ", "\n            </div>\n\t\t"], ["\n            <div\n                    part=\"base\"\n                    class=", "\n                    @click=", "\n                    @change=", "\n            >\n                <div part=\"buttons\" class=\"toolbar-buttons\">\n                    <slot></slot>\n                </div>\n                ", "\n            </div>\n\t\t"])), class_map_js_1.classMap(classes), this.handleClick, this.handleChange, this.overflowTemplate());
    };
    var Et2Toolbar_1;
    Et2Toolbar.LAYOUT_TIMEOUT = 100;
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Toolbar.prototype, "groupChildren", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Toolbar.prototype, "preferenceId", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Toolbar.prototype, "preferenceApp", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Toolbar.prototype, "_isAdmin", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Toolbar.prototype, "_isOverflowed", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2Toolbar.prototype, "actions", null);
    Et2Toolbar = Et2Toolbar_1 = __decorate([
        custom_element_js_1.customElement("et2-toolbar")
    ], Et2Toolbar);
    return Et2Toolbar;
}(Et2InputWidget_1.Et2InputWidget(Et2Box_1.Et2Box)));
exports.Et2Toolbar = Et2Toolbar;
var templateObject_1, templateObject_2;
