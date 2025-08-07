"use strict";
/**
 * EGroupware eTemplate2 - JS Link list object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright 2022 Nathan Gray
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
exports.Et2LinkString = void 0;
var lit_1 = require("lit");
var until_js_1 = require("lit/directives/until.js");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var repeat_js_1 = require("lit/directives/repeat.js");
/**
 * Display a list of entries in a comma separated list
 *
 * Given an application & entry ID, will query the list of links and display
 *
 * @see Et2Link
 */
// @ts-ignore TypeScript says there's something wrong with types
var Et2LinkString = /** @class */ (function (_super) {
    __extends(Et2LinkString, _super);
    function Et2LinkString() {
        var _this = _super.call(this) || this;
        /**
         * Show links that are marked as deleted, being held for purge
         */
        _this.showDeleted = false;
        /**
         * Number of application-links to load (file-links are always fully loaded currently)
         *
         * If number is exceeded, a "Load more links ..." button is displayed, which will load the double amount of links each time clicked
         */
        _this.limit = 0;
        _this._totalResults = 0;
        _this._link_list = [];
        _this._loadingPromise = Promise.resolve([]);
        _this._loading = false;
        if (_this.limit == 0) {
            _this.egw().preference("maxmatchs", "common", true).then(function (pref) {
                // If limit was set via attribute, it will no longer be 0
                if (_this.limit == 0) {
                    _this.limit = parseInt(pref !== null && pref !== void 0 ? pref : 20);
                }
            });
        }
        return _this;
    }
    Object.defineProperty(Et2LinkString, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tlist-style-type: none;\n\t\t\t\t\tdisplay: inline;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t}\n\n\t\t\t\tet2-link, et2-link::part(base), et2-description {\n\t\t\t\t\tdisplay: inline;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(icon), et2-link::part(remark) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\tet2-link:hover {\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t}\n\n\n\t\t\t\t/* CSS for child elements */\n\n\t\t\t\tet2-link::part(title):after {\n\t\t\t\t\tcontent: \", \"\n\t\t\t\t}\n\n\t\t\t\tet2-link:last-child::part(title):after {\n\t\t\t\t\tcontent: initial;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tlist-style-type: none;\n\t\t\t\t\tdisplay: inline;\n\t\t\t\t\tpadding: 0px;\n\t\t\t\t}\n\n\t\t\t\tet2-link, et2-link::part(base), et2-description {\n\t\t\t\t\tdisplay: inline;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(icon), et2-link::part(remark) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\tet2-link:hover {\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t}\n\n\n\t\t\t\t/* CSS for child elements */\n\n\t\t\t\tet2-link::part(title):after {\n\t\t\t\t\tcontent: \", \"\n\t\t\t\t}\n\n\t\t\t\tet2-link:last-child::part(title):after {\n\t\t\t\t\tcontent: initial;\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkString.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _a.sent();
                        if (!this._loadingPromise) return [3 /*break*/, 3];
                        // Wait for the values to arrive before we say we're done
                        return [4 /*yield*/, this._loadingPromise];
                    case 2:
                        // Wait for the values to arrive before we say we're done
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Set the value of the list
     *
     * Value can be:
     * - String: CSV list of entries in either app:ID or just ID if application is set.
     * - Object: {to_app: <appname>, to_id: <Entry ID>} List of linked entries will be fetched from the server
     * - Array: {app: <appname>, id: <ID>}[]
     * @param _value
     */
    Et2LinkString.prototype.set_value = function (_value) {
        var _this = this;
        this._link_list = [];
        if (typeof _value["total"] !== "undefined") {
            this._totalResults = _value["total"];
            delete _value["total"];
        }
        if (typeof _value == "object" && !Array.isArray(_value) && !_value.to_app && this.application) {
            _value.to_app = this.application;
        }
        // We have app & ID - fetch list
        if (typeof _value == 'object' && !Array.isArray(_value) && _value.to_app && _value.to_id && (typeof _value.to_id === "string" || typeof _value.to_id == "number")) {
            this.application = _value.to_app;
            this.entryId = _value.to_id;
            // Let update complete finish first, if it's not done yet
            this.updateComplete.then(function () {
                _this.get_links();
            });
            return;
        }
        // CSV list of IDs for one app
        if (typeof _value === "string") {
            var ids = _value.split(",");
            ids.forEach(function (id) { return _this._link_list.push({ app: _this.application, id: id }); });
        }
        // List of LinkInfo
        else if (Array.isArray(_value) || typeof _value[0] == "object") {
            this._link_list = Object.values(_value);
        }
        // List of LinkInfo stuffed into to_id - entry is not yet saved
        else if (_value.to_id && typeof _value.to_id !== "string") {
            this.entryId = _value.to_id;
            Object.keys(_value.to_id).forEach(function (key) {
                _this._link_list.push(_value.to_id[key]);
            });
        }
        this.requestUpdate();
    };
    Et2LinkString.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if ((changedProperties.has("application") || changedProperties.has("entryId") || changedProperties.has("onlyApp") || changedProperties.has("linkType")) &&
            this.application && this.entryId) {
            // Something changed, and we have the information needed to get the matching links
            this.get_links();
        }
    };
    Et2LinkString.prototype.render = function () {
        var _this = this;
        var _a;
        // This shows loading template until loadingPromise resolves, then shows _listTemplate
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            ", "\n            ", "\n\t\t"], ["\n            ",
            "\n            ", "\n\t\t"])), until_js_1.until((_a = this._loadingPromise) === null || _a === void 0 ? void 0 : _a.then(function (res) {
            return _this._listTemplate();
        }), this._loadingTemplate()), until_js_1.until(this.moreResultsTemplate(), lit_1.nothing));
    };
    Et2LinkString.prototype._listTemplate = function () {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", "\n\t\t"], ["\n            ", "\n\t\t"])), repeat_js_1.repeat(this._link_list, function (l) { return l.link_id; }, this._linkTemplate));
    };
    /**
     * Render one link
     *
     * @param link
     * @returns {TemplateResult}
     * @protected
     */
    Et2LinkString.prototype._linkTemplate = function (link) {
        var id = typeof link.id === "string" ? link.id : link.link_id;
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <et2-link part=\"link\" class=\"et2_link\"\n                      app=\"", "\" entryId=\"", "\" .value=", " ._parent=", "\n            ></et2-link>"], ["\n            <et2-link part=\"link\" class=\"et2_link\"\n                      app=\"", "\" entryId=\"", "\" .value=", " ._parent=", "\n            ></et2-link>"])), link.app, id, link, this);
    };
    /**
     * Render that we're waiting for data
     * @returns {TemplateResult}
     * @protected
     */
    Et2LinkString.prototype._loadingTemplate = function () {
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <div class=\"search__loading\">\n                <sl-spinner></sl-spinner>\n            </div>\n\t\t"], ["\n            <div class=\"search__loading\">\n                <sl-spinner></sl-spinner>\n            </div>\n\t\t"])));
    };
    Et2LinkString.prototype.moreResultsTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this._totalResults <= 0 || !this._loadingPromise) {
                    return [2 /*return*/, lit_1.nothing];
                }
                return [2 /*return*/, this._loadingPromise.then(function () {
                        var moreCount = _this._totalResults - _this._link_list.length;
                        var more = lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                <et2-description statustext=\"", "\">...\n                </et2-description>"], ["\n                <et2-description statustext=\"", "\">...\n                </et2-description>"])), _this.egw().lang("%1 more...", moreCount));
                        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["", ""], ["", ""])), moreCount > 0 ? more : lit_1.nothing);
                    })];
            });
        });
    };
    /**
     * Render a list of links inside the list
     * These get slotted, rather than put inside the shadow dom
     *
     * @param links
     * @protected
     */
    Et2LinkString.prototype._addLinks = function (links) {
        var _this = this;
        return;
        // Remove anything there right now
        while (this.lastChild) {
            this.removeChild(this.lastChild);
        }
        links.forEach(function (link) {
            var temp = document.createElement("div");
            lit_1.render(_this._linkTemplate(link), temp);
            temp.childNodes.forEach(function (node) { return _this.appendChild(node); });
        });
        /*
        This should work, and it does, but only once.
        It fails if you try and update then run it again - none of the children get added
        Something about how lit renders
        render(html`${repeat(links,
                (link) => link.app + ":" + link.id,
                (link) => this._linkTemplate(link))}`,
            <HTMLElement><unknown>this
        );

         */
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };
    /**
     * Starts the request for link list to the server
     *
     * Called internally to fetch the list.  May be called externally to trigger a refresh if a link is added.
     *
     */
    Et2LinkString.prototype.get_links = function (not_saved_links, offset) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (this._loading) {
            // Already waiting
            return;
        }
        this._loading = true;
        if (typeof not_saved_links === "undefined") {
            not_saved_links = [];
        }
        var _value = {
            to_app: this.application,
            to_id: this.entryId,
            only_app: this.onlyApp,
            show_deleted: this.showDeleted,
            limit: [offset, /* num_rows: */ this.limit]
        };
        this._loadingPromise = (this.egw().jsonq('EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link_list', [_value]))
            .then(function (_value) {
            if (typeof _value.total) {
                _this._totalResults = _value.total;
                delete _value.total;
            }
            if (_value) {
                var _loop_1 = function (link) {
                    // Avoid duplicates, files are always sent
                    if (!not_saved_links.some(function (l) { return l.app == link.app && l.id == link.id; }) &&
                        !_this._link_list.some(function (l) { return l.app == link.app && l.id == link.id; })) {
                        _this._link_list.push(link);
                    }
                };
                for (var _i = 0, _a = Object.values(_value); _i < _a.length; _i++) {
                    var link = _a[_i];
                    _loop_1(link);
                }
            }
            _this._loading = false;
            _this.requestUpdate();
        });
    };
    Et2LinkString.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("application", "entryId", "statustext");
    };
    Et2LinkString.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2LinkString.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var k in _values) {
            this[k] = _values[k];
            this.requestUpdate(k);
        }
    };
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2LinkString.prototype, "application", void 0);
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2LinkString.prototype, "entryId", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2LinkString.prototype, "onlyApp", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2LinkString.prototype, "linkType", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2LinkString.prototype, "showDeleted", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2LinkString.prototype, "value", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2LinkString.prototype, "limit", void 0);
    Et2LinkString = __decorate([
        custom_element_js_1.customElement('et2-link-string')
    ], Et2LinkString);
    return Et2LinkString;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2LinkString = Et2LinkString;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
