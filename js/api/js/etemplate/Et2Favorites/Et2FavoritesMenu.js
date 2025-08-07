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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2FavoritesMenu = void 0;
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var Favorite_1 = require("./Favorite");
var property_js_1 = require("lit/decorators/property.js");
var until_js_1 = require("lit/directives/until.js");
var repeat_js_1 = require("lit/directives/repeat.js");
/**
 * @summary A menu listing a user's favorites.  Populated from the user's preferences.
 *
 * @dependency sl-menu
 * @dependency sl-menu-item
 * @dependency sl-menu-label
 * @dependency et2-image
 *
 * @slot - Add additional menu items
 */
var Et2FavoritesMenu = /** @class */ (function (_super) {
    __extends(Et2FavoritesMenu, _super);
    function Et2FavoritesMenu() {
        var _a;
        var _this = _super.call(this) || this;
        _this.noAdd = false;
        _this.favorites = {
            'blank': {
                name: typeof ((_a = _this.egw()) === null || _a === void 0 ? void 0 : _a.lang) == "function" ? _this.egw().lang("No filters") : "No filters",
                state: {},
                group: false
            }
        };
        _this.loadingPromise = Promise.resolve();
        _this.handlePreferenceChange = _this.handlePreferenceChange.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2FavoritesMenu, "styles", {
        get: function () {
            return [
                _super.styles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tmin-width: 15em;\n\t\t\t\t}\n\n\t\t\t\tet2-image[src=\"trash\"] {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item:hover et2-image[src=\"trash\"] {\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t}"], ["\n\t\t\t\t:host {\n\t\t\t\t\tmin-width: 15em;\n\t\t\t\t}\n\n\t\t\t\tet2-image[src=\"trash\"] {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\tsl-menu-item:hover et2-image[src=\"trash\"] {\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t}"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    ;
    Et2FavoritesMenu.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.application) {
            this._load();
        }
        document.addEventListener("preferenceChange", this.handlePreferenceChange);
    };
    Et2FavoritesMenu.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        document.removeEventListener("preferenceChange", this.handlePreferenceChange);
    };
    Et2FavoritesMenu.prototype._load = function () {
        var _this = this;
        this.loadingPromise = Favorite_1.Favorite.load(this.egw(), this.application).then(function (favorites) {
            _this.favorites = favorites;
        });
    };
    Et2FavoritesMenu.prototype.handlePreferenceChange = function (e) {
        var _a;
        if (e && ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.application) == this.application) {
            this._load();
            this.requestUpdate();
        }
    };
    Et2FavoritesMenu.prototype.handleSelect = function (event) {
        if (event.detail.item.value == Favorite_1.Favorite.ADD_VALUE) {
            return this.handleAdd(event);
        }
        Favorite_1.Favorite.applyFavorite(this.egw(), this.application, event.detail.item.value);
    };
    Et2FavoritesMenu.prototype.handleAdd = function (event) {
        event.stopPropagation();
        if (this.egw().window && this.egw().window.app[this.application]) {
            this.egw().window.app[this.application].add_favorite({});
        }
    };
    Et2FavoritesMenu.prototype.handleDelete = function (event) {
        var _this = this;
        // Don't trigger click
        event.stopPropagation();
        var menuItem = event.target.closest("sl-menu-item");
        menuItem.setAttribute("loading", "");
        var favoriteName = menuItem.value;
        // Remove from server
        Favorite_1.Favorite.remove(this.egw(), this.application, favoriteName).then(function () {
            // Remove from widget
            delete _this.favorites[favoriteName];
            _this.requestUpdate();
            _this.updateComplete.then(function () {
                _this.dispatchEvent(new CustomEvent("preferenceChange", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        application: _this.application,
                        preference: favoriteName
                    }
                }));
            });
        });
        this.requestUpdate();
    };
    Et2FavoritesMenu.prototype.menuItemTemplate = function (name, favorite) {
        var _a, _b, _c, _d;
        var is_admin = (typeof ((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.app) == "function") && (typeof ((_b = this.egw()) === null || _b === void 0 ? void 0 : _b.app('admin')) != "undefined");
        //@ts-ignore option.group does not exist
        var icon = (favorite.group !== false && !is_admin || ['blank', '~add~'].includes(name)) ? "" : lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-image slot=\"suffix\" src=\"trash\" icon @click=", "\n                       statustext=\"", "\"></et2-image>"], ["\n            <et2-image slot=\"suffix\" src=\"trash\" icon @click=", "\n                       statustext=\"", "\"></et2-image>"])), this.handleDelete, (_d = (_c = this.egw()) === null || _c === void 0 ? void 0 : _c.lang("Delete")) !== null && _d !== void 0 ? _d : "Delete");
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <sl-menu-item value=\"", "\">\n                ", "\n                ", "\n            </sl-menu-item>"], ["\n            <sl-menu-item value=\"", "\">\n                ", "\n                ", "\n            </sl-menu-item>"])), name, icon, favorite.name);
    };
    Et2FavoritesMenu.prototype.loadingTemplate = function () {
        var _a;
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <sl-menu-item loading>", "\n            </sl-menu-item>"], ["\n            <sl-menu-item loading>", "\n            </sl-menu-item>"])), typeof ((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.lang) == "function" ? this.egw().lang("Loading") : "Loading");
    };
    Et2FavoritesMenu.prototype.render = function () {
        var _this = this;
        var content = this.loadingPromise.then(function () {
            return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                <sl-menu\n                        part=\"menu\"\n                        @sl-select=", "\n                >\n                    ", "\n                    ", "\n                    <slot></slot>\n                    ", "\n                </sl-menu>\n\t\t\t"], ["\n                <sl-menu\n                        part=\"menu\"\n                        @sl-select=", "\n                >\n                    ",
                "\n                    ", "\n                    <slot></slot>\n                    ",
                "\n                </sl-menu>\n\t\t\t"])), _this.handleSelect, _this.label ? lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                        <sl-menu-label>", "</sl-menu-label>"], ["\n                        <sl-menu-label>", "</sl-menu-label>"])), _this.label) : lit_1.nothing, repeat_js_1.repeat(Object.keys(_this.favorites), function (i) { return _this.menuItemTemplate(i, _this.favorites[i]); }), _this.noAdd ? lit_1.nothing : lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                        <sl-menu-item value=", "\n                                      @sl-select=", "\n                        >\n                            <sl-icon name=\"plus\" slot=\"prefix\"></sl-icon>\n                            ", "\n                        </sl-menu-item>"], ["\n                        <sl-menu-item value=", "\n                                      @sl-select=", "\n                        >\n                            <sl-icon name=\"plus\" slot=\"prefix\"></sl-icon>\n                            ", "\n                        </sl-menu-item>"])), Favorite_1.Favorite.ADD_VALUE, _this.handleAdd, _this.egw().lang("Current view as favourite")));
        });
        return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            ", "\n\t\t"], ["\n            ", "\n\t\t"])), until_js_1.until(content, this.loadingTemplate()));
    };
    __decorate([
        property_js_1.property()
    ], Et2FavoritesMenu.prototype, "application", void 0);
    __decorate([
        property_js_1.property()
    ], Et2FavoritesMenu.prototype, "noAdd", void 0);
    Et2FavoritesMenu = __decorate([
        custom_element_js_1.customElement("et2-favorites-menu")
    ], Et2FavoritesMenu);
    return Et2FavoritesMenu;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2FavoritesMenu = Et2FavoritesMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
