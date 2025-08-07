"use strict";
/**
 * EGroupware eTemplate2 - JS Link object
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
exports.Et2Link = void 0;
var ExposeMixin_1 = require("../Expose/ExposeMixin");
var lit_1 = require("lit");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
/**
 * Display a specific, single entry from an application
 *
 * The entry is specified with the application name, and the app's ID for that entry.
 * You can set it directly in the properties (application, entryId) or use set_value() to
 * pass an object {app: string, id: string, [title: string]} or string in the form <application>::<ID>.
 * If title is not specified, it will be fetched using framework's egw.link_title()
 *
 */
// @ts-ignore TypeScript says there's something wrong with types
var Et2Link = /** @class */ (function (_super) {
    __extends(Et2Link, _super);
    function Et2Link() {
        var _this = _super.call(this) || this;
        _this._title = Et2Link.MISSING_TITLE;
        _this.__linkHook = "view";
        return _this;
    }
    Object.defineProperty(Et2Link, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  :host {\n\t\t\t\tdisplay: block;\n\t\t\t\tcursor: pointer;\n\t\t\t  }\n\n\t\t\t  .link {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 0.5rem;\n\t\t\t  }\n\n\t\t\t  .link__title {\n\t\t\t\tflex: 2 1 50%;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                max-width: max-content;\n                width: 0;\n\t\t\t  }\n\n\t\t\t  .link__remark {\n\t\t\t\tflex: 1 1 50%;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                max-width: max-content;\n                width: 0;\n\t\t\t  }\n\n\t\t\t  :host:hover {\n\t\t\t\ttext-decoration: underline\n\t\t\t  }\n\n\t\t\t  /** Style based on parent **/\n\n\t\t\t  :host(et2-link-string) div {\n\t\t\t\tdisplay: inline;\n\t\t\t  }\n\n\t\t\t  :host-context(et2-link-list):hover {\n\t\t\t\ttext-decoration: none;\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t  :host {\n\t\t\t\tdisplay: block;\n\t\t\t\tcursor: pointer;\n\t\t\t  }\n\n\t\t\t  .link {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 0.5rem;\n\t\t\t  }\n\n\t\t\t  .link__title {\n\t\t\t\tflex: 2 1 50%;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                max-width: max-content;\n                width: 0;\n\t\t\t  }\n\n\t\t\t  .link__remark {\n\t\t\t\tflex: 1 1 50%;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                max-width: max-content;\n                width: 0;\n\t\t\t  }\n\n\t\t\t  :host:hover {\n\t\t\t\ttext-decoration: underline\n\t\t\t  }\n\n\t\t\t  /** Style based on parent **/\n\n\t\t\t  :host(et2-link-string) div {\n\t\t\t\tdisplay: inline;\n\t\t\t  }\n\n\t\t\t  :host-context(et2-link-list):hover {\n\t\t\t\ttext-decoration: none;\n\t\t\t  }\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Link, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Specify the application for the entry
                 */
                app: {
                    type: String,
                    reflect: true,
                }, 
                /**
                 * Application entry ID
                 */
                entryId: {
                    type: String,
                    reflect: true
                }, 
                /**
                 * Pass value as an object, will be parsed to set application & entryId
                 */
                value: {
                    type: Object,
                    reflect: false
                }, 
                /**
                 * View link type
                 * Used for displaying the linked entry
                 * [view|edit|add]
                 * default "view"
                 */
                linkHook: {
                    type: String
                }, 
                /**
                 * Target application
                 *
                 * Passed to egw.open() to open entry in specified application
                 */
                targetApp: {
                    type: String
                }, 
                /**
                 * Optional parameter to be passed to egw().open in order to open links in specified target eg. _blank
                 */
                extraLinkTarget: {
                    type: String
                }, 
                /**
                 * Breaks title into multiple lines based on this delimiter by replacing it with '\r\n'"
                 */
                breakTitle: {
                    type: String
                } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Link.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
    };
    Et2Link.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _a.sent();
                        if (!this._titlePromise) return [3 /*break*/, 3];
                        // Wait for the title to arrive before we say we're done
                        return [4 /*yield*/, this._titlePromise];
                    case 2:
                        // Wait for the title to arrive before we say we're done
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Build a thumbnail for the link
     * @param link
     * @returns {TemplateResult}
     * @protected
     */
    Et2Link.prototype._thumbnailTemplate = function (link) {
        var _a;
        // If we have a mimetype, use a Et2VfsMime
        // Files have path set in 'icon' property, and mime in 'type'
        if (link.type && link.icon) {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <et2-vfs-mime part=\"icon\" class=\"link__icon\" ._parent=", " .value=", "\n                ></et2-vfs-mime>"], ["\n                <et2-vfs-mime part=\"icon\" class=\"link__icon\" ._parent=", " .value=",
                "\n                ></et2-vfs-mime>"])), this, Object.assign({
                name: link.title,
                mime: link.type,
                path: link.icon
            }, link));
        }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <et2-image-expose\n                    part=\"icon\"\n                    class=\"link__icon\"\n                    ._parent=", "\n                    href=\"", "\"\n                    src=", "\n                    ?disabled=", "\n            ></et2-image-expose>"], ["\n            <et2-image-expose\n                    part=\"icon\"\n                    class=\"link__icon\"\n                    ._parent=", "\n                    href=\"", "\"\n                    src=", "\n                    ?disabled=", "\n            ></et2-image-expose>"])), this, link.href, (_a = link.src) !== null && _a !== void 0 ? _a : this.egw().image("" + link.icon), !(link.href || link.icon));
    };
    Et2Link.prototype.render = function () {
        var title = this.title;
        if (this.breakTitle) {
            // Set up title to optionally break on the provided character - replace all space with nbsp, add a
            // zero-width space after the break string
            title = title
                .replace(this.breakTitle, this.breakTitle.trimEnd() + "\u200B")
                .replace(/ /g, '\u00a0')
                // Change hyphen to non-breaking hyphen
                .replace(/-/g, '‑');
        }
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <div part=\"base\" class=\"link et2_link\" draggable=\"", "\" @dragstart=", ">\n                ", "\n                <span part=\"title\" class=\"link__title\">", "</span>\n                <span part=\"remark\" class=\"link__remark\">", "</span>\n            </div>"], ["\n            <div part=\"base\" class=\"link et2_link\" draggable=\"", "\" @dragstart=", ">\n                ", "\n                <span part=\"title\" class=\"link__title\">", "</span>\n                <span part=\"remark\" class=\"link__remark\">", "</span>\n            </div>"])), this.app == 'file', this._handleDragStart.bind(this, this.dataset), this._thumbnailTemplate({ id: this.entryId, app: this.app, ...this.dataset }), title, this.dataset.remark);
    };
    Object.defineProperty(Et2Link.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (_title) {
            this._title = _title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Link.prototype, "value", {
        /**
         * Get a value representation of the link.
         *
         * @returns {LinkInfo | string}
         */
        get: function () {
            return this.app && this.entryId ? this.app + ":" + this.entryId : "";
        },
        set: function (_value) {
            var _this = this;
            if (!_value) {
                this.entryId = "";
                this.title = "";
                return;
            }
            if (typeof _value != 'object' && _value) {
                if (("" + _value).indexOf(':') >= 0) {
                    // application_name:ID
                    var app = _value.split(':', 1);
                    var id = _value.substr(app[0].length + 1);
                    _value = { app: app[0], id: id };
                }
                else if (this.app) {
                    // Application set, just passed ID
                    _value = { app: this.app, id: _value };
                }
                else {
                    console.warn("Bad value for link widget.  Need an object with keys 'app', 'id', and optionally 'title'", _value);
                    return;
                }
            }
            if (typeof _value !== "string") {
                this.app = _value.app;
                this.entryId = _value.id;
                if (_value.title) {
                    this._title = _value.title;
                }
                Object.keys(_value).forEach(function (key) {
                    // Skip these, they're either handled explicitly, or ID which we don't want to mess with
                    if (["app", "entryId", "title", "id"].indexOf(key) != -1) {
                        return;
                    }
                    // we should not let null value being stored into dataset as 'null'
                    if (_value[key] === null) {
                        _this.dataset[key] = "";
                    }
                    else {
                        _this.dataset[key] = _value[key];
                    }
                });
            }
            this.requestUpdate("value");
        },
        enumerable: false,
        configurable: true
    });
    Et2Link.prototype.set_value = function (_value) {
        this.value = _value;
    };
    Object.defineProperty(Et2Link.prototype, "exposeValue", {
        get: function () {
            var info = {
                app: this.app,
                id: this.entryId,
                path: this.dataset['icon']
            };
            info['label'] = this.title;
            info = Object.assign(info, this.dataset);
            if (info['remark']) {
                info['label'] += " - " + info['remark'];
            }
            if (!info.path && this.app == "file") {
                // Fallback to check the "normal" place if path wasn't available
                info.path = "/webdav.php/apps/" + this.dataset.app2 + "/" + this.dataset.id2 + "/" + this.entryId;
            }
            if (typeof info["type"] !== "undefined") {
                // Links use "type" for mimetype.
                info.mime = info["type"];
            }
            return info;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If app or entryId has changed, we'll update the title
     *
     * @param changedProperties
     */
    Et2Link.prototype.willUpdate = function (changedProperties) {
        var _this = this;
        var _a;
        _super.prototype.willUpdate.call(this, changedProperties);
        _super.prototype.requestUpdate.call(this);
        if (changedProperties.has("app") || changedProperties.has("entryId")) {
            if (this.app && this.entryId && !this._title) {
                this._title = Et2Link.MISSING_TITLE;
            }
            if (this.app && this.entryId && this._title == Et2Link.MISSING_TITLE) {
                // Title will be fetched from server and then set
                this._titlePromise = (_a = this.egw()) === null || _a === void 0 ? void 0 : _a.link_title(this.app, this.entryId, true).then(function (title) {
                    _this._title = title;
                    // It's probably already been rendered
                    _this.requestUpdate();
                });
            }
        }
    };
    /**
     * Handle dragstart event for dragging out a file
     *
     * @param _data
     * @param _ev
     * @protected
     */
    Et2Link.prototype._handleDragStart = function (_data, _ev) {
        // // Unfortunately, dragging files is currently only supported by Chrome
        if (navigator && navigator.userAgent.indexOf('Chrome') >= 0) {
            if (_ev.dataTransfer == null) {
                return;
            }
            if (_data && _data.type && _data.download_url) {
                _ev.dataTransfer.dropEffect = "copy";
                _ev.dataTransfer.effectAllowed = "copy";
                var url = _data.download_url;
                // NEED an absolute URL
                if (url[0] == '/') {
                    url = this.egw().link(url);
                }
                // egw.link adds the webserver, but that might not be an absolute URL - try again
                if (url[0] == '/')
                    url = window.location.origin + url;
                // Unfortunately, dragging files is currently only supported by Chrome
                if (navigator && navigator.userAgent.indexOf('Chrome')) {
                    _ev.dataTransfer.setData("DownloadURL", _data.type + ':' + this.title + ':' + url);
                }
                // Include URL as a fallback
                _ev.dataTransfer.setData("text/uri-list", url);
            }
            if (_ev.dataTransfer.types.length == 0) {
                // No file data? Abort: drag does nothing
                _ev.preventDefault();
                return;
            }
        }
    };
    Et2Link.prototype._handleClick = function (_ev) {
        // If we don't have app & entryId, nothing we can do
        if (!this.app || !this.entryId || typeof this.entryId !== "string") {
            return false;
        }
        // If super didn't handle it (returns false), just use egw.open()
        if (_super.prototype._handleClick.call(this, _ev)) {
            this.egw().open(Object.assign({
                app: this.app,
                id: this.entryId
            }, this.dataset), "", this.linkHook, this.dataset.extra_args, this.extraLinkTarget || this.app, this.targetApp || this.app);
        }
        _ev.stopImmediatePropagation();
        return false;
    };
    Object.defineProperty(Et2Link.prototype, "innerText", {
        get: function () {
            return this.title;
        },
        enumerable: false,
        configurable: true
    });
    Et2Link.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("app", "entryId", "statustext");
    };
    Et2Link.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2Link.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var k in _values) {
            this[k] = _values[k];
        }
    };
    Et2Link.MISSING_TITLE = "??";
    return Et2Link;
}(ExposeMixin_1.ExposeMixin(Et2Widget_1.Et2Widget(lit_1.LitElement))));
exports.Et2Link = Et2Link;
// @ts-ignore TypeScript says there's something wrong with types
customElements.define("et2-link", Et2Link);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
