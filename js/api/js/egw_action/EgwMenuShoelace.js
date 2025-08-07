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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EgwMenuShoelace = void 0;
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var ref_js_1 = require("lit/directives/ref.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var bootstrap_icons_1 = require("../etemplate/Styles/bootstrap-icons");
var until_js_1 = require("lit/directives/until.js");
var EgwMenuShoelace = /** @class */ (function (_super) {
    __extends(EgwMenuShoelace, _super);
    function EgwMenuShoelace(_structure) {
        var _this = _super.call(this) || this;
        _this.structure = [];
        _this.popup = null;
        _this.hideCallback = null;
        _this.structure = _structure;
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
        _this.handleKeypress = _this.handleKeypress.bind(_this);
        return _this;
    }
    Object.defineProperty(EgwMenuShoelace, "styles", {
        get: function () {
            return [
                bootstrap_icons_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\n\t\t\t\t.default-item::part(label) {\n\t\t\t\t\tfont-weight: var(--sl-font-weight-bold, bold);\n\t\t\t\t}\n\n\t\t\t\tsl-menu {\n\t\t\t\t\tbox-shadow: var(--sl-shadow-x-large);\n\t\t\t\t}\n\n\t\t\t\t/* sl-menu-item:host overrides display */\n\n\t\t\t\tsl-menu-item[hidden], sl-divider[hidden] {\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item::part(base) {\n\t\t\t\t\theight: 1.7em;\n\t\t\t\t\tline-height: var(--sl-line-height-dense);\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item::part(prefix) {\n\t\t\t\t\tmin-width: var(--sl-spacing-2x-large);\n\t\t\t\t}\n\n\t\t\t\t/* Customise checkbox menuitem */\n\n\t\t\t\tsl-menu-item[type=\"checkbox\"]::part(checked-icon) {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item[type=\"checkbox\"]:not([checked])::part(checked-icon) {\n\t\t\t\t\tcolor: var(--sl-color-neutral-300);\n\t\t\t\t}\n\n\t\t\t\tet2-image {\n\t\t\t\t\tline-height: normal;\n\t\t\t\t\twidth: 1.3em;\n\t\t\t\t}\n\t\t\t\tet2-image::before {\n\t\t\t\t\tfont-size: 1.3em; /*make bi icons same size as et2-image img*/\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\n\t\t\t\t.default-item::part(label) {\n\t\t\t\t\tfont-weight: var(--sl-font-weight-bold, bold);\n\t\t\t\t}\n\n\t\t\t\tsl-menu {\n\t\t\t\t\tbox-shadow: var(--sl-shadow-x-large);\n\t\t\t\t}\n\n\t\t\t\t/* sl-menu-item:host overrides display */\n\n\t\t\t\tsl-menu-item[hidden], sl-divider[hidden] {\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item::part(base) {\n\t\t\t\t\theight: 1.7em;\n\t\t\t\t\tline-height: var(--sl-line-height-dense);\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item::part(prefix) {\n\t\t\t\t\tmin-width: var(--sl-spacing-2x-large);\n\t\t\t\t}\n\n\t\t\t\t/* Customise checkbox menuitem */\n\n\t\t\t\tsl-menu-item[type=\"checkbox\"]::part(checked-icon) {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item[type=\"checkbox\"]:not([checked])::part(checked-icon) {\n\t\t\t\t\tcolor: var(--sl-color-neutral-300);\n\t\t\t\t}\n\n\t\t\t\tet2-image {\n\t\t\t\t\tline-height: normal;\n\t\t\t\t\twidth: 1.3em;\n\t\t\t\t}\n\t\t\t\tet2-image::before {\n\t\t\t\t\tfont-size: 1.3em; /*make bi icons same size as et2-image img*/\n\t\t\t\t}\n\t\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EgwMenuShoelace.prototype, "menu", {
        get: function () { var _a; return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("sl-menu"); },
        enumerable: false,
        configurable: true
    });
    EgwMenuShoelace.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        document.addEventListener("click", this.handleDocumentClick);
        document.addEventListener("keydown", this.handleKeypress);
    };
    EgwMenuShoelace.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        document.removeEventListener("click", this.handleDocumentClick);
        document.removeEventListener("keydown", this.handleKeypress);
        if (this.popup) {
            this.popup.remove();
            this.popup = null;
        }
        if (this.hideCallback) {
            this.hideCallback.call();
        }
    };
    EgwMenuShoelace.prototype.showAt = function (_x, _y, _onHide) {
        var _this = this;
        this.hideCallback = _onHide;
        if (this.popup == null) {
            this.popup = Object.assign(document.createElement("sl-popup"), {
                placement: "right-start",
                autoSize: "vertical",
                flip: true,
                shift: true
            });
            this.popup.append(this);
            this.popup.classList.add("egw_menu");
            document.body.append(this.popup);
        }
        // Open where instructed
        var menu = this;
        this.popup.anchor = {
            getBoundingClientRect: function () {
                return {
                    x: _x,
                    y: _y,
                    width: 0,
                    height: menu.clientHeight,
                    top: _y,
                    left: _x,
                    right: _x,
                    bottom: _y
                };
            }
        };
        this.popup.active = true;
        Promise.all([this.updateComplete, this.popup.updateComplete]).then(function () {
            var _a;
            // Causes scroll issues if we don't position
            _this.popup.popup.style = "top: 0px";
            (_a = _this.menu.querySelector('sl-menu-item')) === null || _a === void 0 ? void 0 : _a.focus();
        });
    };
    /**
     * Update the menu items with current disabled / visible settings
     *
     * @param _links
     */
    EgwMenuShoelace.prototype.applyContext = function (_links, _selected, _target) {
        var _this = this;
        // Reset & hide all, in case some actions were not included in links
        this.menu.querySelectorAll("sl-menu-item").forEach(function (i) { return i.disabled = i.hidden = true; });
        this.menu.querySelectorAll("sl-divider").forEach(function (i) { return i.hidden = false; });
        Object.keys(_links).forEach(function (actionId) {
            var _a;
            // Take the last one if there's more than one with the same ID as a work-around to automatic drag actions getting added twice
            // in different places in some cases (nextmatch_controller vs EgwPopupActionImplementation)
            var menuItem = Array.from(_this.shadowRoot.querySelectorAll("[data-action-id='" + actionId + "']")).pop();
            if (!menuItem) {
                return;
            }
            menuItem.disabled = !_links[actionId].enabled;
            menuItem.hidden = !_links[actionId].visible;
            if (menuItem.type == "checkbox") {
                menuItem.checked = (_a = _links[actionId].actionObj.checked) !== null && _a !== void 0 ? _a : false;
            }
        });
        // Hide dividers before empty sections
        try {
            this.menu.querySelectorAll("sl-divider:not(:has( + sl-menu-item:not([hidden])))").forEach(function (i) { return i.hidden = true; });
        }
        catch (e) {
            console.log("It appears you are using an older browser version, please consider updating");
        }
        // Copy caption changes
        var osClipboard;
        if (_links.egw_os_clipboard && (osClipboard = this.shadowRoot.querySelector("[data-action-id='egw_os_clipboard']"))) {
            osClipboard.innerText = _links.egw_os_clipboard.actionObj.caption;
        }
    };
    EgwMenuShoelace.prototype.hide = function () {
        if (this.popup) {
            this.popup.active = false;
        }
        if (this.hideCallback) {
            this.hideCallback.call();
        }
    };
    EgwMenuShoelace.prototype.handleSelect = function (event) {
        // If not open, skip
        if (!this.popup) {
            return;
        }
        if (event.detail.item.value) {
            var item = event.detail.item.value;
            if (item.checkbox) {
                // Update our internal data
                item.data.checked = item.checked = event.detail.item.checked;
                // Update image of a checkbox item to be toggle on or off
                // this happens by requesting an update because item.checked has changed
                event.detail.item.querySelector('et2-image').src = item.checked ? "toggle-on" : "toggle-off";
                return;
            }
            if (typeof item.onClick == "function") {
                this.hide();
                item.onClick.call(event.detail.item, item, event);
            }
        }
    };
    EgwMenuShoelace.prototype.handleCheckboxClick = function (event) {
        var check = event.target.closest("sl-menu-item");
        if (!check || check.parentElement == this) {
            return;
        }
        // Make sure sub-menu does not close
        event.stopPropagation();
        // Normal select event
        check.checked = !check.checked;
        check.dispatchEvent(new CustomEvent("sl-select", {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: { item: check }
        }));
    };
    EgwMenuShoelace.prototype.handleDocumentClick = function (event) {
        if (!event.composedPath().includes(this)) {
            this.hide();
        }
    };
    EgwMenuShoelace.prototype.handleKeypress = function (event) {
        if (event.key == "Escape") {
            event.preventDefault();
            event.stopPropagation();
            this.hide();
        }
    };
    EgwMenuShoelace.prototype.itemTemplate = function (item) {
        var _this = this;
        if (item.caption == "-") {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <sl-divider></sl-divider>"], ["\n                <sl-divider></sl-divider>"])));
        }
        //if we have a checkbox, change the icon to be a toggle slider. Either on or off
        if (item.checkbox) {
            item.iconUrl = item.checked ? "toggle-on" : "toggle-off";
        }
        var id = CSS.escape(item.id);
        // Defer loading of sub-menus because the forced repaint takes too long with lots of children
        var childPromise = Promise.resolve(lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""]))));
        if (item.children.length > 0) {
            childPromise = new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        <sl-menu slot=\"submenu\">\n                        ", "\n                        </sl-menu>\n\t\t\t\t\t"], ["\n                        <sl-menu slot=\"submenu\">\n                        ", "\n                        </sl-menu>\n\t\t\t\t\t"])), repeat_js_1.repeat(item.children, function (i) { return _this.itemTemplate(i); })));
                }, item.children.length);
            });
        }
        // Remove the loading attribute when sub-menu is done
        var updateLoading = function (element) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (item.children.length == 0 || !element) {
                    return [2 /*return*/];
                }
                // Menu item was rendered, but give children a chance to render
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // Wait for child creation
                            return [4 /*yield*/, childPromise];
                            case 1:
                                // Wait for child creation
                                _a.sent();
                                // Wait for child render
                                return [4 /*yield*/, Promise.all(Array.from(element.querySelectorAll('sl-menu-item'))
                                        .map(function (e) { return e.updateComplete; }))];
                            case 2:
                                // Wait for child render
                                _a.sent();
                                // No longer loading
                                setTimeout(function () {
                                    element.loading = false;
                                }, 100);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        var captionStyle = item.color ? "color:" + item.color + ";" : '' + item.indentation ? "padding-left:" + item.indentation + "em;" : '';
        return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <sl-menu-item\n                    class=", "\n                    id=", "\n                    type=\"", "\"\n                    data-action-id=\"", "\"\n                    ?checked=", "\n                    ?disabled=", "\n                    ?loading=", "\n                    .value=", "\n                    @click=", "\n                    ", "\n            >\n                ", "\n\t\t\t\t<span style=", ">", "</span>\n                ", "\n                ", "\n            </sl-menu-item>\n\t\t"], ["\n            <sl-menu-item\n                    class=",
            "\n                    id=", "\n                    type=\"", "\"\n                    data-action-id=\"", "\"\n                    ?checked=", "\n                    ?disabled=", "\n                    ?loading=", "\n                    .value=", "\n                    @click=", "\n                    ", "\n            >\n                ",
            "\n\t\t\t\t<span style=", ">", "</span>\n                ",
            "\n                ",
            "\n            </sl-menu-item>\n\t\t"])), class_map_js_1.classMap({
            "default-item": item.default
        }), id, item.checkbox ? "checkbox" : "normal", item.id, item.checkbox && item.checked, !item.enabled, item.children.length > 0, item, item.checkbox ? this.handleCheckboxClick : lit_1.nothing, ref_js_1.ref(updateLoading), item.iconUrl ? lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    <et2-image slot=\"prefix\" src=\"", "\"></et2-image>"], ["\n                    <et2-image slot=\"prefix\" src=\"", "\"></et2-image>"])), item.iconUrl) : lit_1.nothing, captionStyle || lit_1.nothing, item.caption, item.shortcutCaption ? lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<span slot=\"suffix\" class=\"keyboard_shortcut\">\n\t\t\t\t\t", "\n\t\t\t\t</span>"], ["<span slot=\"suffix\" class=\"keyboard_shortcut\">\n\t\t\t\t\t", "\n\t\t\t\t</span>"])), item.shortcutCaption) : lit_1.nothing, item.children.length == 0 ? lit_1.nothing : lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                        ", "\n                "], ["\n                        ", "\n                "])), until_js_1.until(childPromise)));
    };
    EgwMenuShoelace.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            <sl-menu\n                    @sl-select=", "\n                    @contextmenu=", "\n            >\n                ", "\n            </sl-menu>"], ["\n            <sl-menu\n                    @sl-select=", "\n                    @contextmenu=",
            "\n            >\n                ", "\n            </sl-menu>"])), this.handleSelect, function (e) {
            if (!e.ctrlKey) {
                e.preventDefault();
            }
        }, repeat_js_1.repeat(this.structure, function (i) { return _this.itemTemplate(i); }));
    };
    EgwMenuShoelace = __decorate([
        custom_element_js_1.customElement("egw-menu-shoelace")
    ], EgwMenuShoelace);
    return EgwMenuShoelace;
}(lit_1.LitElement));
exports.EgwMenuShoelace = EgwMenuShoelace;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
