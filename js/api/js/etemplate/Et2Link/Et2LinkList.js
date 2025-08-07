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
exports.Et2LinkList = void 0;
var lit_1 = require("lit");
var repeat_js_1 = require("lit/directives/repeat.js");
var egw_global_1 = require("../../jsapi/egw_global");
var Et2LinkString_1 = require("./Et2LinkString");
var egw_menu_1 = require("../../egw_action/egw_menu");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
/**
 * Display a list of entries in a comma separated list
 *
 * Given an application & entry ID, will query the list of links and display
 *
 * @see Et2Link
 *
 * To make things easy and consistent for ExposeMixin, we don't want children in the shadow dom, so they are slotted
 * in.  When rendering we generate a slot for each link, then let browser slot them in using the slot name.
 *
 * Templates:
 * _listTemplate - generates the list
 * 	_rowTemplate - creates the slots
 * 	_linkTemplate - generates the content _inside_ each slot
 * 		_thumbnailTemplate - generates the thumbnail image
 */
// @ts-ignore TypeScript says there's something wrong with types
var Et2LinkList = /** @class */ (function (_super) {
    __extends(Et2LinkList, _super);
    function Et2LinkList() {
        var _this = _super.call(this) || this;
        _this.readonly = false;
        _this._handleRowContext = _this._handleRowContext.bind(_this);
        _this._handleChange = _this._handleChange.bind(_this);
        _this._handleLinkToChange = _this._handleLinkToChange.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2LinkList, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tcolumn-gap: 10px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\tdiv {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 10px;\n\t\t\t\t}\n\n\t\t\t\tdiv:hover {\n\t\t\t\t\tbackground-color: var(--highlight-background-color);\n\t\t\t\t}\n\n\t\t\t\tdiv.zip_highlight {\n\t\t\t\t\tanimation-name: new_entry_pulse, new_entry_clear;\n\t\t\t\t\tanimation-duration: 5s;\n\t\t\t\t\tanimation-delay: 0s, 30s;\n\t\t\t\t\tanimation-fill-mode: forwards;\n\t\t\t\t}\n\n\t\t\t\t/* CSS for child elements */\n\n\t\t\t\tet2-link::part(title):after {\n\t\t\t\t\t/* Reset from Et2LinkString */\n\t\t\t\t\tcontent: initial;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(icon) {\n\t\t\t\t\twidth: 1rem;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(remark) {\n\t\t\t\t\t/* Reset from Et2LinkString */\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t\t/*edit windows link tabs highlight comments*/\n\t\t\t\t\tmargin-left:auto;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-style: italic;\n\t\t\t\t\tcolor: var(--sl-color-gray-700)\n\t\t\t\t}\n\n\t\t\t\tet2-link {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t}\n\n\t\t\t\tet2-link:hover {\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(base) {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\n\t\t\t\t.remark {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\twidth: 20%;\n\t\t\t\t}\n\n\t\t\t\tdiv et2-image[part=delete-button] {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\twidth: 16px;\n\t\t\t\t\torder: 5;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\tdiv:hover et2-image[part=delete-button] {\n\t\t\t\t\tvisibility: initial;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tcolumn-gap: 10px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\tdiv {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 10px;\n\t\t\t\t}\n\n\t\t\t\tdiv:hover {\n\t\t\t\t\tbackground-color: var(--highlight-background-color);\n\t\t\t\t}\n\n\t\t\t\tdiv.zip_highlight {\n\t\t\t\t\tanimation-name: new_entry_pulse, new_entry_clear;\n\t\t\t\t\tanimation-duration: 5s;\n\t\t\t\t\tanimation-delay: 0s, 30s;\n\t\t\t\t\tanimation-fill-mode: forwards;\n\t\t\t\t}\n\n\t\t\t\t/* CSS for child elements */\n\n\t\t\t\tet2-link::part(title):after {\n\t\t\t\t\t/* Reset from Et2LinkString */\n\t\t\t\t\tcontent: initial;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(icon) {\n\t\t\t\t\twidth: 1rem;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(remark) {\n\t\t\t\t\t/* Reset from Et2LinkString */\n\t\t\t\t\tdisplay: initial;\n\t\t\t\t\t/*edit windows link tabs highlight comments*/\n\t\t\t\t\tmargin-left:auto;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tfont-style: italic;\n\t\t\t\t\tcolor: var(--sl-color-gray-700)\n\t\t\t\t}\n\n\t\t\t\tet2-link {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t}\n\n\t\t\t\tet2-link:hover {\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\n\t\t\t\tet2-link::part(base) {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\n\t\t\t\t.remark {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\twidth: 20%;\n\t\t\t\t}\n\n\t\t\t\tdiv et2-image[part=delete-button] {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\twidth: 16px;\n\t\t\t\t\torder: 5;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\tdiv:hover et2-image[part=delete-button] {\n\t\t\t\t\tvisibility: initial;\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkList, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                // JS code which is executed when the links change
                onchange: { type: Function }, 
                // Does NOT allow user to enter data, just displays existing data
                // Disables delete, etc.
                readonly: { type: Boolean } });
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkList.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // Look for LinkTo and listen for change so we can update
        if (this.getInstanceManager()) {
            this.getInstanceManager().DOMContainer.querySelectorAll("et2-link-to").forEach(function (link) {
                link.addEventListener("et2-change", _this._handleLinkToChange);
            });
        }
        this.addEventListener("change", this._handleChange);
    };
    Et2LinkList.prototype.disconnectedCallback = function () {
        var _this = this;
        _super.prototype.disconnectedCallback.call(this);
        if (this.getInstanceManager()) {
            this.getInstanceManager().DOMContainer.querySelectorAll("et2-link-to").forEach(function (link) {
                link.removeEventListener("et2-change", _this._handleLinkToChange);
            });
        }
        this.removeEventListener("change", this._handleChange);
    };
    Et2LinkList.prototype._listTemplate = function () {
        var _this = this;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            ", "\n\t\t"], ["\n            ",
            "\n\t\t"])), repeat_js_1.repeat(this._link_list, function (link) { return link.app + ":" + link.id; }, function (link) { return _this._rowTemplate(link); }));
    };
    Et2LinkList.prototype.moreResultsTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this._totalResults <= 0 || !this._loadingPromise) {
                    return [2 /*return*/, lit_1.nothing];
                }
                return [2 /*return*/, this._loadingPromise.then(function () {
                        var moreCount = _this._totalResults - _this._link_list.length;
                        var more = _this.egw().lang("%1 more...", moreCount);
                        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", ""], ["",
                            ""])), moreCount > 0 ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <et2-button image=\"box-arrow-down\" label=\"", "\" noSubmit=\"true\"\n                            ._parent=", "\n                            @click=\"", "\"\n                ></et2-button>"], ["\n                <et2-button image=\"box-arrow-down\" label=\"", "\" noSubmit=\"true\"\n                            ._parent=", "\n                            @click=\"",
                            "\"\n                ></et2-button>"])), more, _this, function (e) {
                            // Change icon for some feedback
                            e.target.querySelectorAll("[slot=prefix]").forEach(function (n) { return n.remove(); });
                            e.target.append(Object.assign(document.createElement("sl-spinner"), { slot: "prefix" }));
                            // Get the next batch
                            var start = _this._link_list.filter(function (l) { return l.app !== "file"; }).length;
                            _this.get_links([], start);
                        }) : lit_1.nothing);
                    })];
            });
        });
    };
    /**
     * Render a list of links inside the list
     * These get put inside the shadow dom rather than slotted
     *
     * @param links
     * @protected
     */
    Et2LinkList.prototype._addLinks = function (links) {
        var _this = this;
        this._link_list = links;
        this.requestUpdate();
        this.updateComplete.then(function () { return _super.prototype._addLinks.call(_this, links); });
    };
    /**
     * Render one link
     * These elements are slotted and are found in the light DOM (use this.querySelector(...) to find them)
     *
     * @param link
     * @returns {TemplateResult}
     * @protected
     */
    Et2LinkList.prototype._linkTemplate = function (link) {
        var id = typeof link.id === "string" ? link.id : link.link_id;
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            <et2-link app=\"", "\" entryId=\"", "\" statustext=\"", "\"\n                      ._parent=", "\n                      .value=", "></et2-link>\n            ", "\n\t\t"], ["\n            <et2-link app=\"", "\" entryId=\"", "\" statustext=\"", "\"\n                      ._parent=", "\n                      .value=", "></et2-link>\n            ", "\n\t\t"])), link.app, id, link.title, this, link, this._deleteButtonTemplate(link));
    };
    /**
     * Render the row for one link.
     * This is just the structure and slot, actual row contents are done in _linkTemplate.
     * These rows are found in the shadowRoot.  Use this.shadowRoot.querySelector(...) to find them.
     *
     * @param link
     * @returns {TemplateResult}
     * @protected
     */
    Et2LinkList.prototype._rowTemplate = function (link) {
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            <div id=\"", "\"\n                 @contextmenu=", ">\n                ", "\n            </div>"], ["\n            <div id=\"", "\"\n                 @contextmenu=", ">\n                ", "\n            </div>"])), this._get_row_id(link), this._handleRowContext, this._linkTemplate(link));
    };
    /**
     * Handle & pass on an internal change
     * @param {ChangeEvent} _event
     * @protected
     */
    Et2LinkList.prototype._handleChange = function (_event) {
        if (!this.onchange) {
            return;
        }
        this.onchange(this, _event.data, _event);
    };
    /**
     * We listen to LinkTo widgets so we can update
     *
     * @param _ev
     * @protected
     */
    Et2LinkList.prototype._handleLinkToChange = function (_ev) {
        if (_ev && typeof _ev.currentTarget) {
            var _loop_1 = function (link) {
                if (!this_1._link_list.some(function (l) { return l.app == link.app && (l.id == link.id ||
                    // Unsaved
                    typeof link.id == "object" && typeof l.id == "object" && link.id.id == l.id.id); })) {
                    this_1._link_list.unshift(link);
                }
            };
            var this_1 = this;
            // Add in new links from LinkTo
            for (var _i = 0, _a = Object.values(_ev.detail || []); _i < _a.length; _i++) {
                var link = _a[_i];
                _loop_1(link);
            }
            // No need to ask server if we got it in the event
            if (_ev.detail.length) {
                this.requestUpdate();
            }
            else {
                // Event didn't have it, need to ask
                this.get_links();
            }
        }
    };
    /**
     * Build the delete button
     *
     * @param {LinkInfo} link
     * @returns {TemplateResult}
     * @protected
     */
    Et2LinkList.prototype._deleteButtonTemplate = function (link) {
        var _this = this;
        if (this.readonly) {
            return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
        }
        return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            <et2-image class=\"delete_button\" slot=\"", "\" src=\"delete\"\n                       part=\"delete-button\"\n                       ._parent=", "\n                       .onclick=", "\n                       aria-label=\"", "\"\n            >\n            </et2-image>"], ["\n            <et2-image class=\"delete_button\" slot=\"", "\" src=\"delete\"\n                       part=\"delete-button\"\n                       ._parent=", "\n                       .onclick=",
            "\n                       aria-label=\"", "\"\n            >\n            </et2-image>"])), this._get_row_id(link), this, function () {
            _this._delete_link(link);
        }, this.egw().lang(link.app === "file" ? "Delete" : "Unlink"));
    };
    /**
     * Get an ID for a link
     * @param {LinkInfo} link
     * @protected
     */
    Et2LinkList.prototype._get_row_id = function (link) {
        return "link_" + (link.dom_id ? link.dom_id : (typeof link.link_id == "string" ? link.link_id.replace(/[:.]/g, '_') : link.link_id || link.id));
    };
    /**
     * Delete a link
     * @protected
     */
    Et2LinkList.prototype._delete_link = function (link) {
        var _this = this;
        var link_element = this.shadowRoot.querySelector("[id='" + this._get_row_id(link) + "']");
        link_element.classList.add("loading");
        this.dispatchEvent(new CustomEvent("et2-before-delete", { detail: link }));
        var removeLink = function () {
            _this.shadowRoot.querySelectorAll("[id='" + _this._get_row_id(link) + "']").forEach(function (e) { return e.remove(); });
            if (_this._link_list.indexOf(link) != -1) {
                _this._link_list.splice(_this._link_list.indexOf(link), 1);
                _this._totalResults--;
            }
            _this.requestUpdate();
            _this.updateComplete.then(function () {
                _this.dispatchEvent(new CustomEvent("et2-delete", { bubbles: true, detail: link }));
                var change = new Event("change", { bubbles: true });
                change['data'] = link;
                _this.dispatchEvent(change);
            });
        };
        // Unsaved entry, had no ID yet
        if (!this.entryId || typeof this.entryId !== "string" && this.entryId[link.link_id]) {
            if (this.entryId) {
                delete this.entryId[link.link_id];
            }
            removeLink();
        }
        else if (typeof this.entryId == "string" && link.link_id) {
            egw_global_1.egw.json("EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_delete", [link.link_id]).sendRequest()
                .then(function (data) {
                if (data) {
                    removeLink();
                }
            });
        }
    };
    Object.defineProperty(Et2LinkList.prototype, "value", {
        /**
         * Handle values passed as an array
         *
         * @param _value
         */
        set: function (_value) {
            this._link_list = [];
            // Handle case where server passed a list of links that aren't ready yet
            if (_value && typeof _value == "object") {
                var list = [];
                if (!Array.isArray(_value) && _value.to_id && typeof _value.to_id == "object") {
                    list = _value.to_id;
                }
                else if (Array.isArray(_value) && _value.length) {
                    list = _value;
                }
                if (list.length > 0) {
                    for (var id in list) {
                        var link = list[id];
                        if (!link.app && typeof list.splice !== "undefined") {
                            list.splice(parseInt(id), 1);
                            continue;
                        }
                        else if (link.app) {
                            // Temp IDs can cause problems since the ID includes the file name or :
                            if (link.link_id && typeof link.link_id != 'number') {
                                link.dom_id = 'temp_' + egw_global_1.egw.uid();
                            }
                            // Icon should be in registry
                            if (!link.icon) {
                                link.icon = egw_global_1.egw.link_get_registry(link.app, 'icon');
                                // No icon, try by mime type - different place for un-saved entries
                                if (link.icon == false && link.id.type) {
                                    // Triggers icon by mime type, not thumbnail or app
                                    link.type = link.id.type;
                                    link.icon = true;
                                }
                            }
                            // Special handling for file - if not existing, we can't ask for title
                            if (typeof link.id == 'object' && !link.title) {
                                link.title = link.id.name || '';
                            }
                        }
                    }
                    this._addLinks(list);
                }
                else {
                    _super.prototype.set_value.call(this, _value);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkList.prototype._createContextMenu = function () {
        var _this = this;
        // Set up context menu
        this.context = new egw_menu_1.egwMenu();
        this.context.addItem("comment", this.egw().lang("Comment"), "", function () {
            Et2Dialog_1.Et2Dialog.show_prompt(function (button, comment) {
                if (button != Et2Dialog_1.Et2Dialog.OK_BUTTON) {
                    return;
                }
                _this._set_comment(_this.context.data, comment);
            }, '', _this.egw().lang("Comment"), _this.context.data.remark || '');
        });
        this.context.addItem("file_info", this.egw().lang("File information"), this.egw().image("edit"), function () {
            var link_data = _this.context.data;
            if (link_data.app == 'file') {
                // File info is always the same
                var url = '/apps/' + link_data.app2 + '/' + link_data.id2 + '/' + decodeURIComponent(link_data.id);
                if (typeof url == 'string' && url.indexOf('webdav.php')) {
                    // URL is url to file in webdav, so get rid of that part
                    url = url.replace('/webdav.php', '');
                }
                _this.egw().open(url, "filemanager", "edit");
            }
        });
        this.context.addItem("-", "-");
        this.context.addItem("save", this.egw().lang("Save as"), this.egw().image('save'), function () {
            var link_data = _this.context.data;
            // Download file
            if (link_data.download_url) {
                var url = link_data.download_url;
                if (url[0] == '/') {
                    url = egw_global_1.egw.link(url);
                }
                var a = document.createElement('a');
                if (typeof a.download == "undefined") {
                    window.location.href = url + "?download";
                    return false;
                }
                // Multiple file download for those that support it
                a.setAttribute("href", url);
                a.setAttribute("download", link_data.title || "");
                _this.getInstanceManager().DOMContainer.appendChild(a);
                var evt = document.createEvent('MouseEvent');
                evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(evt);
                a.remove();
                return false;
            }
            _this.egw().open(link_data, "", "view", 'download', link_data.target ? link_data.target : link_data.app, link_data.app);
        });
        this.context.addItem("zip", this.egw().lang("Save as Zip"), this.egw().image('save_zip'), function () {
            // Highlight files for nice UI indicating what will be in the zip.
            // Files have negative IDs.
            _this.shadowRoot.querySelectorAll('div[id^="link_-"]').forEach(function (row) { return row.classList.add("zip_highlight"); });
            // Download ZIP
            window.location.href = _this.egw().link('/index.php', {
                menuaction: 'api.EGroupware\\Api\\Etemplate\\Widget\\Link.download_zip',
                app: _this.application,
                id: _this.entryId
            });
        });
        // Only allow this option if the entry has been saved, and has a real ID
        if (this.to_id && typeof this.to_id != 'object' || this.entryId && this.application) {
            this.context.addItem("copy_to", this.egw().lang("Copy to"), this.egw().image('copy'), function () {
                // Highlight files for nice UI indicating what will be copied
                _this.shadowRoot.querySelectorAll('div[id^="link_-"]').forEach(function (row) { return row.classList.add("zip_highlight"); });
                // Get target
                var select_attrs = {
                    mode: "select-dir",
                    image: 'copy',
                    buttonLabel: egw_global_1.egw.lang("copy"),
                    //extra_buttons: [{text: egw.lang("link"),	id:"link", image: "link"}],
                    dialog_title: egw_global_1.egw.lang('Copy to'),
                    method: "EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_copy_to",
                };
                var vfs_select = Et2Widget_1.loadWebComponent("et2-vfs-select", select_attrs, _this);
                vfs_select.methodId = _this.context.data;
                document.body.append(vfs_select);
                // No button, just open it
                vfs_select.click();
                vfs_select.addEventListener("change", function (e) { vfs_select.remove(); });
            });
        }
        this.context.addItem("-", "-");
        this.context.addItem("delete", this.egw().lang("Delete link"), this.egw().image("delete"), function () {
            Et2Dialog_1.Et2Dialog.show_dialog(function (button) {
                if (button == Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                    _this._delete_link(_this.context.data);
                }
            }, egw_global_1.egw.lang('Delete link?'));
        });
    };
    Et2LinkList.prototype._handleRowContext = function (_ev) {
        // Do not trigger expose view if one of the operator keys are held
        if (this.readonly || _ev.altKey || _ev.ctrlKey || _ev.shiftKey || _ev.metaKey) {
            return;
        }
        if (!this.context) {
            this._createContextMenu();
        }
        // Find the link
        var link = _ev.currentTarget.querySelector("et2-link");
        var _link_data = Object.assign({ app: link.app, id: link.entryId }, link.dataset);
        // Comment only available if link_id is there and not readonly
        this.context.getItem("comment").set_enabled(typeof _link_data.link_id != 'undefined' && !this.readonly);
        // File info only available for existing files
        this.context.getItem("file_info").set_enabled(typeof _link_data.id != 'object' && _link_data.app == 'file');
        this.context.getItem("save").set_enabled(typeof _link_data.id != 'object' && _link_data.app == 'file');
        // Zip download only offered if there are at least 2 files
        this.context.getItem("zip").set_enabled(this._link_list.length >= 2);
        // Show delete item only if the widget is not readonly
        this.context.getItem("delete").set_enabled(!this.readonly);
        this.context.getItem("delete").caption = _link_data.app === "file" ? this.egw().lang("Delete file") : this.egw().lang("Delete link");
        this.context.data = _link_data;
        this.context.showAt(_ev.pageX, _ev.pageY, true);
        _ev.preventDefault();
    };
    Et2LinkList.prototype._set_comment = function (link, comment) {
        var remark = this.shadowRoot.querySelector("#" + this._get_row_id(link) + " et2-link");
        if (!remark) {
            console.warn("Could not find link to comment on", link);
            return;
        }
        /* // TODO
        if(isNaN(link.link_id))	// new entry, not yet stored
        {
            remark.text(comment);
            // Look for a link-to with the same ID, refresh it

            if(link.link_id)
            {
                var _widget = link_id.widget || null;
                self.getRoot().iterateOver(
                    function(widget)
                    {
                        if(widget.id == self.id)
                        {
                            _widget = widget;
                        }
                    },
                    self, et2_link_to
                );
                var value = _widget != null ? _widget.getValue() : false;
                if(_widget && value && value.to_id)
                {
                    value.to_id[self.context.data.link_id].remark = comment;
                }
            }
            return;
        }

         */
        remark.classList.add("loading");
        egw_global_1.egw.json("EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link_comment", [link.link_id, comment]).sendRequest()
            .then(function () {
            if (remark) {
                // Append "" to make sure it's a string, not undefined
                remark.classList.remove("loading");
                // Update internal data
                link.remark = comment + "";
                // Update link widget
                remark.value = link;
            }
        });
    };
    return Et2LinkList;
}(Et2LinkString_1.Et2LinkString));
exports.Et2LinkList = Et2LinkList;
// @ts-ignore TypeScript says there's something wrong with types
customElements.define("et2-link-list", Et2LinkList);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
