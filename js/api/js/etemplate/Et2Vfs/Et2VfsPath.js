"use strict";
/**
 * EGroupware eTemplate2 - Vfs path WebComponent
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2VfsPath = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var shoelace_1 = require("../Styles/shoelace");
var Et2VfsPath_styles_1 = require("./Et2VfsPath.styles");
var property_js_1 = require("lit/decorators/property.js");
var state_js_1 = require("lit/decorators/state.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var shoelace_2 = require("@shoelace-style/shoelace");
var slot_1 = require("../Et2Widget/slot");
var until_js_1 = require("lit/directives/until.js");
/**
 * @summary Display an editable path from the VFS
 * @since
 *
 * @slot label - The input’s label. Alternatively, you can use the label attribute.
 * @slot prefix - Before the path
 * @slot suffix - Like prefix, but after
 * @slot edit-icon - The icon that switches to editing the path as text.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event change - Emitted when the control's value changes.
 * @event {CustomEvent} click - Emitted when the user clicks on part of the path.  `event.detail` contains the path.
 *
 * @csspart form-control-input - The textbox's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 *
 */
var Et2VfsPath = /** @class */ (function (_super) {
    __extends(Et2VfsPath, _super);
    function Et2VfsPath() {
        var _this = _super.call(this) || this;
        /** The component's help text. If you need to display HTML, use the `help-text` slot instead. */
        _this.helpText = '';
        /* User is directly editing the path as a string */
        _this.editing = false;
        _this.hasSlotController = new slot_1.HasSlotController(_this, 'help-text', 'label');
        _this._value = "";
        _this.handleEditMouseDown = _this.handleEditMouseDown.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handlePathClick = _this.handlePathClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2VfsPath, "styles", {
        get: function () {
            return __spreadArrays([
                shoelace_1.default
            ], _super.styles, [
                Et2VfsPath_styles_1.default
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsPath.prototype, "_edit", {
        get: function () { return this.shadowRoot.querySelector("input"); },
        enumerable: false,
        configurable: true
    });
    Et2VfsPath.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        this.checkPathOverflow();
    };
    Object.defineProperty(Et2VfsPath.prototype, "value", {
        get: function () { return this._value; },
        set: function (_value) {
            try {
                _value = this.egw().decodePath(_value);
            }
            catch (e) {
                this.set_validation_error('Error! ' + _value);
                return;
            }
            var oldValue = this._value;
            this._value = _value;
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Et2VfsPath.prototype.setValue = function (_value) {
        if (typeof _value != "string" && _value.path) {
            _value = _value.path;
        }
        this.value = _value;
    };
    Et2VfsPath.prototype.getValue = function () {
        return (this.readonly || this.disabled) ? null : (this.egw().encodePath(this._value || ''));
    };
    Et2VfsPath.prototype.focus = function () {
        this.edit();
    };
    Et2VfsPath.prototype.blur = function () {
        var _this = this;
        var oldEditing = this.editing;
        this.editing = false;
        this.requestUpdate("editing", oldEditing);
        if (!this._edit) {
            return;
        }
        var oldValue = this.value;
        this.value = this._edit.value;
        if (oldValue != this.value) {
            this.updateComplete.then(function () {
                _this.dispatchEvent(new Event("change"));
            });
        }
    };
    Et2VfsPath.prototype.edit = function () {
        var _this = this;
        var oldValue = this.editing;
        this.editing = true;
        this.requestUpdate("editing", oldValue);
        this.updateComplete.then(function () {
            var _a;
            (_a = _this._edit) === null || _a === void 0 ? void 0 : _a.focus();
        });
    };
    Et2VfsPath.prototype.checkPathOverflow = function () {
        var _a;
        var wrapper = this.shadowRoot.querySelector(".vfs-path__scroll");
        var path = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector("sl-breadcrumb");
        var scroll = (_a = path === null || path === void 0 ? void 0 : path.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("nav");
        if (!wrapper || !scroll) {
            return;
        }
        wrapper.parentElement.classList.remove("vfs-path__overflow");
        path.updateComplete.then(function () {
            if (wrapper.clientWidth < scroll.scrollWidth) {
                // Too small
                wrapper.parentElement.classList.add("vfs-path__overflow");
                wrapper.scrollLeft = scroll.scrollWidth - wrapper.clientWidth;
            }
        });
    };
    Et2VfsPath.prototype.handleLabelClick = function () {
        this.edit();
    };
    Et2VfsPath.prototype.handleEditMouseDown = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.edit();
    };
    Et2VfsPath.prototype.handleKeyDown = function (event) {
        var _this = this;
        switch (event.key) {
            case "Enter":
                var oldValue = this.value;
                this.value = this._edit.value;
                this.requestUpdate("value", oldValue);
                if (oldValue != this.value) {
                    this.updateComplete.then(function () {
                        _this.dispatchEvent(new Event("change"));
                    });
                }
            // Fall through
            case "Escape":
                event.stopPropagation();
                event.preventDefault();
                this._edit.value = this.value;
                this.blur();
                break;
        }
    };
    Et2VfsPath.prototype.handlePathClick = function (event) {
        var _this = this;
        var _a;
        var target = event.target;
        if (target.slot == "separator") {
            target = target.parentNode;
        }
        else if (target instanceof Image && target.parentElement.slot == "prefix") {
            // Icon
            target = target.parentElement.parentElement;
        }
        if (target instanceof shoelace_2.SlBreadcrumbItem && event.composedPath().includes(this)) {
            event.preventDefault();
            event.stopPropagation();
            var dirs = (_a = Array.from(target.parentElement.querySelectorAll('sl-breadcrumb-item'))) !== null && _a !== void 0 ? _a : [];
            var stopIndex = dirs.indexOf(target) + 1;
            var newPath = dirs.slice(0, stopIndex)
                // Strip out any extra space
                .map(function (d) { var _a; return ((_a = d.dataset.value) !== null && _a !== void 0 ? _a : "").trim().replace(/\/*$/, '').trim() + "/"; })
                .filter(function (p) { return p; });
            if (newPath[0] !== '/') {
                // Make sure we start at /, breadcrumb parsing above might lose it
                newPath.unshift('/');
            }
            if (!(this.disabled || this.readonly)) {
                var oldValue = this.value;
                this.value = newPath.join("");
                // No trailing slash in the value
                if (this.value !== "/" && this.value.endsWith("/")) {
                    this.value = this.value.replace(/\/*$/, '');
                }
                if (oldValue != this.value) {
                    this.updateComplete.then(function () {
                        _this.dispatchEvent(new Event("change"));
                    });
                }
            }
            // Can still click on it when disabled I guess
            if (!this.disabled) {
                this.dispatchEvent(new CustomEvent("click", {
                    bubbles: true,
                    cancelable: true,
                    detail: newPath.join("")
                }));
            }
        }
    };
    Et2VfsPath.prototype.handleScroll = function (event) {
        this.shadowRoot.querySelector(".vfs-path__scroll").scrollLeft += event.deltaY;
    };
    Et2VfsPath.prototype._getIcon = function (pathParts) {
        var image = this.egw().image("navbar", "filemanager");
        if (pathParts.length > 2 && (pathParts[1] == "apps" || pathParts[1] == "templates")) {
            var app = this.egw().app(pathParts[2], 'name') || this.egw().appByTitle(pathParts[2], 'name');
            if (app && !(image = this.egw().image('navbar', app))) {
                image = this.egw().image('navbar', 'api');
            }
        }
        return image;
    };
    Et2VfsPath.prototype.pathPartTemplate = function (pathParts, path, index) {
        var pathName = path.trim();
        if (pathParts.length > 1 && (pathParts[1] == "apps" || pathParts[1] == "templates")) {
            switch (index) {
                case 1:
                    pathName = this.egw().lang(pathParts[1] == "apps" ? "Applications" : "Templates");
                    break;
                case 2:
                    pathName = this.egw().lang(pathName);
                    break;
                case 3:
                    if (!isNaN(pathName) && pathParts[1] !== "templates") {
                        pathName = lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), until_js_1.until(this.egw().link_title(pathParts[2], pathParts[3], true) || pathName, pathName));
                    }
            }
        }
        // we want / aka pathParts [''] to be displayed as /, therefore we need to add another '' to it
        else if (pathParts.length === 1) {
            pathParts.unshift('');
        }
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <sl-breadcrumb-item class=\"vfs-path__directory\" data-value=\"", "\">\n                ", "\n                <span slot=\"separator\">/</span>\n            </sl-breadcrumb-item>"], ["\n            <sl-breadcrumb-item class=\"vfs-path__directory\" data-value=\"", "\">\n                ", "\n                <span slot=\"separator\">/</span>\n            </sl-breadcrumb-item>"])), path.trim(), pathName);
    };
    Et2VfsPath.prototype.render = function () {
        var _this = this;
        var hasLabelSlot = this.hasSlotController.test('label');
        var hasHelpTextSlot = this.hasSlotController.test('help-text');
        var hasLabel = this.label ? true : !!hasLabelSlot;
        var hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        // No trailing slash in the path
        var pathParts = this.value
            // Remove trailing /
            .replace(/\/*$/, '')
            .split('/');
        var isEditable = !(this.disabled || this.readonly);
        var editing = this.editing && isEditable;
        var icon = this._getIcon(pathParts);
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                        @click=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\"\n                     @click=", "\n                     @mouseout=", "\n                >\n                    <slot part=\"prefix\" name=\"prefix\">\n                        ", "\n                    </slot>\n                    ", "\n                    <slot part=\"suffix\" name=\"suffix\"></slot>\n                </div>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                <label\n                        id=\"label\"\n                        part=\"form-control-label\"\n                        class=\"form-control__label\"\n                        aria-hidden=", "\n                        @click=", "\n                >\n                    <slot name=\"label\">", "</slot>\n                </label>\n                <div part=\"form-control-input\" class=\"form-control-input\"\n                     @click=", "\n                     @mouseout=",
            "\n                >\n                    <slot part=\"prefix\" name=\"prefix\">\n                        ",
            "\n                    </slot>\n                    ",
            "\n                    <slot part=\"suffix\" name=\"suffix\"></slot>\n                </div>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'vfs-path': true,
            'vfs-path__readonly': !isEditable,
            'vfs-path__disabled': this.disabled,
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': hasLabel,
            'form-control--has-help-text': hasHelpText
        }), hasLabel ? 'false' : 'true', this.handleLabelClick, this.label, function () { return _this.focus(); }, function (e) {
            if (e.target.classList.contains("form-control-input")) {
                _this.checkPathOverflow();
            }
        }, icon ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                            <et2-image src=\"", "\" slot=\"prefix\" height=\"1.5em\"\n                                       @click=", "\n                            ></et2-image>"], ["\n                            <et2-image src=\"", "\" slot=\"prefix\" height=\"1.5em\"\n                                       @click=",
            "\n                            ></et2-image>"])), icon, function (e) {
            _this.setValue("/");
            _this.updateComplete.then(function () { _this.dispatchEvent(new Event("change", { bubbles: true })); });
        }) : lit_1.nothing, editing ? lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        <input\n                                class=\"vfs-path__value-input\"\n                                type=\"text\"\n                                ?disabled=", "\n                                ?required=", "\n                                .value=", "\n                                tabindex=\"-1\"\n                                @blur=", "\n                                @keydown=", "\n                        />\n                        <div class=\"vfs-path__edit\"/>"], ["\n                        <input\n                                class=\"vfs-path__value-input\"\n                                type=\"text\"\n                                ?disabled=", "\n                                ?required=", "\n                                .value=", "\n                                tabindex=\"-1\"\n                                @blur=", "\n                                @keydown=", "\n                        />\n                        <div class=\"vfs-path__edit\"/>"])), this.disabled, this.required, this.value, function () { return _this.blur(); }, this.handleKeyDown) : lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                        <sl-icon-button name=\"caret-left\"\n                                        @click=", "></sl-icon-button>\n                        <div class=\"vfs-path__scroll\"\n                             @wheel=", "\n                        >\n                        <sl-breadcrumb\n                                label=", "\n                                class=\"vfs-path__breadcrumb\"\n                                @click=", "\n                        >\n                            <span slot=\"separator\">/</span>\n                            ", "\n                        </sl-breadcrumb>\n                        </div>\n                        <sl-icon-button name=\"caret-right\"\n                                        @click=", "></sl-icon-button>\n                        ", "\n                    "], ["\n                        <sl-icon-button name=\"caret-left\"\n                                        @click=",
            "></sl-icon-button>\n                        <div class=\"vfs-path__scroll\"\n                             @wheel=", "\n                        >\n                        <sl-breadcrumb\n                                label=", "\n                                class=\"vfs-path__breadcrumb\"\n                                @click=", "\n                        >\n                            <span slot=\"separator\">/</span>\n                            ", "\n                        </sl-breadcrumb>\n                        </div>\n                        <sl-icon-button name=\"caret-right\"\n                                        @click=",
            "></sl-icon-button>\n                        ",
            "\n                    "])), function (e) {
            e.stopPropagation();
            _this.handleScroll({ deltaY: -20 });
        }, this.handleScroll, this.label || this.egw().lang("path"), this.handlePathClick, repeat_js_1.repeat(pathParts, function (part, i) { return _this.pathPartTemplate(pathParts, part, i); }), function (e) {
            e.stopPropagation();
            _this.handleScroll({ deltaY: 20 });
        }, !isEditable ? lit_1.nothing : lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                            <button\n                                    part=\"edit-button\"\n                                    class=\"vfs-path__edit\"\n                                    type=\"button\"\n                                    aria-label=", "\n                                    @click=", "\n                                    tabindex=\"-1\"\n                            >\n                                <slot name=\"edit-icon\">\n                                    <sl-icon name=\"pencil\"></sl-icon>\n                                </slot>\n                            </button>"], ["\n                            <button\n                                    part=\"edit-button\"\n                                    class=\"vfs-path__edit\"\n                                    type=\"button\"\n                                    aria-label=", "\n                                    @click=", "\n                                    tabindex=\"-1\"\n                            >\n                                <slot name=\"edit-icon\">\n                                    <sl-icon name=\"pencil\"></sl-icon>\n                                </slot>\n                            </button>"])), this.egw().lang('edit'), this.handleEditMouseDown)), hasHelpText ? 'false' : 'true', this.helpText);
    };
    __decorate([
        property_js_1.property({ attribute: 'help-text' })
    ], Et2VfsPath.prototype, "helpText", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsPath.prototype, "editing", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsPath.prototype, "value", null);
    return Et2VfsPath;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2VfsPath = Et2VfsPath;
customElements.define("et2-vfs-path", Et2VfsPath);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
