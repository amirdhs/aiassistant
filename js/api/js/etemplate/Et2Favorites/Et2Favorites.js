"use strict";
/**
 * EGroupware eTemplate2 - JS Favorite widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2022
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Favorites = void 0;
var Et2DropdownButton_1 = require("../Et2DropdownButton/Et2DropdownButton");
var lit_1 = require("lit");
var Et2Image_1 = require("../Et2Image/Et2Image");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var Favorite_1 = require("./Favorite");
/**
 * Favorites widget, designed for use in the nextmatch header
 *
 * The primary control is a split/dropdown button.  Clicking on the left side of the button filters the
 * nextmatch list by the user's default filter.  The right side of the button gives a list of
 * saved filters, pulled from preferences.  Clicking a filter from the dropdown list sets the
 * filters as saved.
 *
 * Favorites can also automatically be shown in the sidebox, using the special ID favorite_sidebox.
 * Use the following code to generate the sidebox section:
 *  display_sidebox($appname,lang('Favorites'),array(
 *	array(
 *		'no_lang' => true,
 *		'text'=>'<span id="favorite_sidebox"/>',
 *		'link'=>false,
 *		'icon' => false
 *	)
 * ));
 * This sidebox list will be automatically generated and kept up to date.
 *
 *
 * Favorites are implemented by saving the values for [column] filters.  Filters are stored
 * in preferences, with the name favorite_<name>.  The favorite favorite used for clicking on
 * the filter button is stored in nextmatch-<columnselection_pref>-favorite.
 *
 * @event et2-load Fires when the favourites are loaded.  The favourite list is in event.detail, and can be filtered.
 */
var Et2Favorites = /** @class */ (function (_super) {
    __extends(Et2Favorites, _super);
    function Et2Favorites() {
        var _this = _super.call(this) || this;
        _this.favSortedList = [];
        _this.__statustext = "Favorite queries";
        _this._handleRadio = _this._handleRadio.bind(_this);
        _this._handleDelete = _this._handleDelete.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Favorites, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\t  :host {\n\t\t\t\t  min-width: 8ex;\n\t\t\t  }\n\n\t\t\t  et2-image {\n\t\t\t\t  display: block;\n\t\t\t\t  position: relative;\n                font-size: ", ";\n\t\t\t\ttop: -2px;\n\t\t\t  }\n\n\t\t\t  et2-image[src=\"trash\"] {\n\t\t\t\tdisplay: none;\n\t\t\t  }\n\n\t\t\t  sl-menu {\n\t\t\t\tmin-width: 15em;\n\t\t\t  }\n\n\t\t\t\tsl-menu-item:hover et2-image[src=\"trash\"] {\n\t\t\t\tdisplay: initial;\n\t\t\t  }\n\n\t\t\t  /* Add star icons - radio button is already in prefix */\n\n\t\t\t\tsl-menu-item::part(base) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 16px 16px;\n\t\t\t\tbackground-position: 5px center;\n\t\t\t  }\n\n\t\t\t\tsl-menu-item[checked]::part(base) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t  }\n\n\t\t\t\tsl-menu-item:last-child::part(base) {\n\t\t\t\tbackground-image: none;\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t  :host {\n\t\t\t\t  min-width: 8ex;\n\t\t\t  }\n\n\t\t\t  et2-image {\n\t\t\t\t  display: block;\n\t\t\t\t  position: relative;\n                font-size: ", ";\n\t\t\t\ttop: -2px;\n\t\t\t  }\n\n\t\t\t  et2-image[src=\"trash\"] {\n\t\t\t\tdisplay: none;\n\t\t\t  }\n\n\t\t\t  sl-menu {\n\t\t\t\tmin-width: 15em;\n\t\t\t  }\n\n\t\t\t\tsl-menu-item:hover et2-image[src=\"trash\"] {\n\t\t\t\tdisplay: initial;\n\t\t\t  }\n\n\t\t\t  /* Add star icons - radio button is already in prefix */\n\n\t\t\t\tsl-menu-item::part(base) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 16px 16px;\n\t\t\t\tbackground-position: 5px center;\n\t\t\t  }\n\n\t\t\t\tsl-menu-item[checked]::part(base) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t  }\n\n\t\t\t\tsl-menu-item:last-child::part(base) {\n\t\t\t\tbackground-image: none;\n\t\t\t  }\n\t\t\t"])), egwIsMobile() ? lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["4ex"], ["4ex"]))) : lit_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["20px"], ["20px"]))), Et2Widget_1.cssImage("fav_filter"), Et2Widget_1.cssImage("favorites")),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Favorites, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                // Where we keep the "default" preference
                defaultPref: { type: String }, 
                // Application to show favorites for
                app: { type: String }, 
                // Extra filters to include in the saved favorite
                filters: { type: Object } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Favorites.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        if (!this.id) {
            this.id = "favorite";
        }
        this._preferred = this.egw().preference(this.defaultPref, this.app);
        // Need to wait until update is done and these exist
        this.updateComplete.then(function () {
            if (_this.buttonNode) {
                var img = new Et2Image_1.Et2Image();
                img.src = "fav_filter";
                _this.buttonNode.append(img);
            }
        });
    };
    Object.defineProperty(Et2Favorites.prototype, "select_options", {
        get: function () {
            if (this.__select_options.length) {
                return this.__select_options;
            }
        },
        set: function (_new_options) {
            // We don't actually want your options, thanks.
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Favorites.prototype, "preferred", {
        get: function () {
            return this._preferred;
        },
        enumerable: false,
        configurable: true
    });
    Et2Favorites.prototype._optionTemplate = function (option) {
        var radio = lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<input type=\"radio\" slot=\"prefix\" name=\"favorite\" value=\"", "\"\n                                ?checked=\"", "\"\n                                @change=", "\n                                title=\"", "\"/>"], ["<input type=\"radio\" slot=\"prefix\" name=\"favorite\" value=\"", "\"\n                                ?checked=\"", "\"\n                                @change=", "\n                                title=\"", "\"/>"])), option.value, option.value == this._preferred, this._handleRadio, this.egw().lang('Set as default'));
        //@ts-ignore TS doesn't know about window.app
        var is_admin = (typeof this.egw().app('admin') != "undefined");
        //@ts-ignore option.group does not exist
        var icon = (option.group !== false && !is_admin || ['blank', '~add~'].includes(option.value)) ? "" : lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <et2-image slot=\"suffix\" src=", " icon @click=", "\n                       statustext=\"", "\"></et2-image>"], ["\n            <et2-image slot=\"suffix\" src=", " icon @click=", "\n                       statustext=\"", "\"></et2-image>"])), "trash", this._handleDelete, this.egw().lang("Delete"));
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            <sl-menu-item value=\"", "\">\n                ", "\n                ", "\n                ", "\n            </sl-menu-item>"], ["\n            <sl-menu-item value=\"", "\">\n                ", "\n                ", "\n                ", "\n            </sl-menu-item>"])), option.value, option.value !== Et2Favorites.ADD_VALUE ? radio : "", icon, option.label);
    };
    /** @param changedProperties */
    Et2Favorites.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("app")) {
            this._preferred = this.egw().preference(this.defaultPref, this.app);
            this._load_favorites(this.app);
        }
    };
    /**
     * Load favorites from preferences
     *
     * @param app String Load favorites from this application
     */
    Et2Favorites.prototype._load_favorites = function (app) {
        var _this = this;
        Favorite_1.Favorite.load(this.egw(), app).then(function (favourites) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.dispatchEvent(new CustomEvent("et2-load", { detail: favourites, bubbles: true }));
                        if (this.onLoad && typeof this.onLoad == "function") {
                            return [2 /*return*/, this.onLoad(favourites)];
                        }
                        return [2 /*return*/, favourites];
                }
            });
        }); }).then(function (favourites) {
            var options = [];
            Object.keys(favourites).forEach(function (name) {
                options.push(Object.assign({ value: name, label: favourites[name].name || name }, favourites[name]));
            });
            // Only add 'Add current' if we have a nextmatch
            if (_this._nextmatch) {
                options.push({ value: Et2Favorites.ADD_VALUE, label: _this.egw().lang('Add current') });
            }
            _this.__select_options = options;
            _this.requestUpdate("select_options");
        });
    };
    Et2Favorites.prototype.load_favorites = function (app) {
        this._load_favorites(app);
    };
    /**
     * Add the current settings as a new favorite
     */
    Et2Favorites.prototype._add_current = function () {
        var _a;
        // Get current filters
        var current_filters = Object.assign({}, this._nextmatch.activeFilters);
        // Add in extras
        for (var extra in this.filters) {
            // Don't overwrite what nm has, chances are nm has more up-to-date value
            if (typeof current_filters == 'undefined') {
                // @ts-ignore
                current_filters[extra] = this._nextmatch.options.settings[extra];
            }
        }
        // Skip columns
        delete current_filters.selectcols;
        // Add in application's settings
        if (this.filters != true) {
            for (var i = 0; i < this.filters.length; i++) {
                current_filters[this.filters[i]] = this._nextmatch.options.settings[this.filters[i]];
            }
        }
        // Call framework
        if ((_a = window.app[this.app]) === null || _a === void 0 ? void 0 : _a.add_favorite) {
            window.app[this.app].add_favorite(current_filters);
        }
        // Sub-app with no app.js
        else if (this.app.includes("-")) {
            var app = this.app.split("-")[0];
            window.app[app].add_favorite(current_filters);
        }
    };
    /**
     * Get a favorite from the list by id
     */
    Et2Favorites.prototype.favoriteByID = function (id) {
        if (!id) {
            return null;
        }
        return this.__select_options.find(function (f) { return f.value == id; });
    };
    /**
     * Clicked on an option
     *
     * @param ev
     * @protected
     */
    Et2Favorites.prototype._handleSelect = function (ev) {
        if (ev.detail.item.value == Et2Favorites.ADD_VALUE) {
            return this._add_current();
        }
        this._value = ev.detail.item.value;
        Favorite_1.Favorite.applyFavorite(this.egw(), this.app, ev.detail.item.value);
    };
    /**
     * Handle the click from the main button
     *
     * @param {MouseEvent} event
     * @protected
     */
    Et2Favorites.prototype._handleClick = function (event) {
        Favorite_1.Favorite.applyFavorite(this.egw, this.app, this.preferred);
    };
    /**
     * Clicked a radio button
     *
     * @param _ev
     * @protected
     */
    Et2Favorites.prototype._handleRadio = function (_ev) {
        // Don't do the menu
        _ev.stopImmediatePropagation();
        // Save as default favorite - used when you click the button
        var pref = _ev.target.value;
        this.egw().set_preference(this.app, this.defaultPref, pref);
        this._preferred = pref;
        this.dropdownNode.hide();
        this.requestUpdate("select_options");
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };
    Et2Favorites.prototype._handleDelete = function (_ev) {
        // Don't do the menu
        _ev.stopImmediatePropagation();
        var trash = _ev.target;
        var line = trash.parentNode;
        var fav = this.favoriteByID(line.value);
        line.classList.add("loading");
        // Make sure first
        var do_delete = function (button_id) {
            var _this = this;
            if (button_id != Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                line.classList.remove('loading');
                return;
            }
            // Hide the trash
            trash.remove();
            // Delete preference server side, returns boolean
            Favorite_1.Favorite.remove(this.egw(), this.app, line.value).then(function (result) {
                line.classList.remove("loading");
                _this.dispatchEvent(new CustomEvent("preferenceChange", {
                    bubbles: true,
                    composed: true,
                    detail: {
                        application: _this.application,
                        preference: line.value
                    }
                }));
                if (result) {
                    // Remove line from list
                    line.remove();
                    // Remove favorite from options
                    _this.__select_options = _this.__select_options.filter(function (f) { return f.value != fav.value; });
                }
                else {
                    // Something went wrong server side
                    line.classList.add('error');
                }
            });
        }.bind(this);
        Et2Dialog_1.Et2Dialog.show_dialog(do_delete, (this.egw().lang("Delete") + " " + fav.name + "?"), "Delete", null, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO, Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE);
        return false;
    };
    /**
     * Set the nextmatch to filter
     * From et2_INextmatchHeader interface
     *
     * @param {et2_nextmatch} nextmatch
     */
    Et2Favorites.prototype.setNextmatch = function (nextmatch) {
        this._nextmatch = nextmatch;
        if (this.nm_filter) {
            this.set_value(this.nm_filter);
            this.nm_filter = false;
        }
        // Re-generate filter list so we can add 'Add current'
        this._load_favorites(this.app);
    };
    // Favorites are prefixed in preferences
    Et2Favorites.PREFIX = "favorite_";
    Et2Favorites.ADD_VALUE = "~add~";
    return Et2Favorites;
}(Et2DropdownButton_1.Et2DropdownButton));
exports.Et2Favorites = Et2Favorites;
customElements.define("et2-favorites", Et2Favorites);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
