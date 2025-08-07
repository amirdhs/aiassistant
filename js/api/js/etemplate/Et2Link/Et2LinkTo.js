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
exports.Et2LinkTo = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var Et2Button_1 = require("../Et2Button/Et2Button");
var Et2LinkEntry_1 = require("./Et2LinkEntry");
var egw_global_1 = require("../../jsapi/egw_global");
var ManualMessage_1 = require("../Validators/ManualMessage");
var Et2VfsSelectButton_1 = require("../Et2Vfs/Et2VfsSelectButton");
var Et2LinkPasteDialog_1 = require("./Et2LinkPasteDialog");
var event_1 = require("../Et2Widget/event");
var class_map_js_1 = require("lit/directives/class-map.js");
/**
 * Choose an existing entry, VFS file or local file, and link it to the current entry.
 *
 * If there is no "current entry", link information will be stored for submission instead
 * of being directly linked.
 */
var Et2LinkTo = /** @class */ (function (_super) {
    __extends(Et2LinkTo, _super);
    function Et2LinkTo() {
        var _this = _super.call(this) || this;
        _this.noFiles = false;
        _this.handleFilesUploaded = _this.handleFilesUploaded.bind(_this);
        _this.handleEntrySelected = _this.handleEntrySelected.bind(_this);
        _this.handleEntryCleared = _this.handleEntryCleared.bind(_this);
        _this.handleLinkButtonClick = _this.handleLinkButtonClick.bind(_this);
        _this.handleVfsSelected = _this.handleVfsSelected.bind(_this);
        _this.handleLinkDeleted = _this.handleLinkDeleted.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2LinkTo, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Hide buttons to attach files
                 */
                noFiles: { type: Boolean }, 
                /**
                 * Limit to just this application - hides app selection
                 */
                onlyApp: { type: String }, 
                /**
                 * Limit to the listed applications (comma seperated)
                 */
                applicationList: { type: String }, value: { type: Object } });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host(.can_link) #link_button {\n\t\t\t\tdisplay: initial;\n\t\t\t}\n\t\t\t#link_button {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\tet2-link-entry {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t}\n\t\t\t.input-group__container {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\tgap: 0.5rem;\n\t\t\t}\n\t\t\t::slotted(.et2_file) {\n\t\t\t\twidth: 30px;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host(.can_link) #link_button {\n\t\t\t\tdisplay: initial;\n\t\t\t}\n\t\t\t#link_button {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\tet2-link-entry {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t}\n\t\t\t.input-group__container {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t}\n\n\t\t\t\t.form-control-input {\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\tgap: 0.5rem;\n\t\t\t}\n\t\t\t::slotted(.et2_file) {\n\t\t\t\twidth: 30px;\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo, "scopedElements", {
        // Still not sure what this does, but it's important.
        // Seems to be related to rendering and what's available "inside"
        get: function () {
            return __assign(__assign({}, _super.scopedElements), { 'et2-button': Et2Button_1.Et2Button, 'et2-link-entry': Et2LinkEntry_1.Et2LinkEntry, 'et2-vfs-select': Et2VfsSelectButton_1.Et2VfsSelectButton, 'et2-link-paste-dialog': Et2LinkPasteDialog_1.Et2LinkPasteDialog });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo.prototype, "fileUpload", {
        get: function () { var _a; return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("et2-file"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo.prototype, "pasteButton", {
        get: function () { var _a; return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#paste"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo.prototype, "pasteDialog", {
        get: function () { var _a; return (_a = this.pasteButton) === null || _a === void 0 ? void 0 : _a.querySelector("et2-link-paste-dialog"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo.prototype, "vfsDialog", {
        get: function () { var _a; return (_a = this.shadowRoot.querySelector("#link")) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector("et2-vfs-select-dialog"); },
        enumerable: false,
        configurable: true
    });
    Et2LinkTo.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.getInstanceManager().DOMContainer.addEventListener("et2-delete", this.handleLinkDeleted);
    };
    Et2LinkTo.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.getInstanceManager().DOMContainer.removeEventListener("et2-delete", this.handleLinkDeleted);
    };
    Et2LinkTo.prototype._inputGroupBeforeTemplate = function () {
        var _this = this;
        var _a, _b;
        // only set server-side callback, if we have a real application-id (not null or array)
        // otherwise it only gives an error on server-side
        var method = null;
        var method_id = null;
        var pasteEnabled = false;
        var pasteTooltip = "";
        if (this.value && this.value.to_id && typeof this.value.to_id != 'object') {
            method = 'EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link_existing';
            method_id = this.value.to_app + ':' + this.value.to_id;
            Et2LinkPasteDialog_1.getClipboardFiles().then(function (files) {
                if (files.length > 0 && !_this.disabled && !_this.readonly) {
                    _this.pasteButton.removeAttribute("disabled");
                }
            });
        }
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <slot name=\"before\"></slot>\n            <et2-file multiple id=", "\n                      ?disabled=", "\n                      ?readonly=", "\n                      title=", "\n                      dropTarget=\"popupMainDiv\"\n                      @et2-add=", "\n                      @change=", "\n            ></et2-file>\n            <et2-vfs-select\n                    part=\"vfs button\"\n                    exportparts=\"base:button_base\"\n                    id=\"link\"\n                    ?disabled=", "\n                    ?readonly=", "\n                    method=", "\n                    method-id=", "\n                    multiple\n                    title=", "\n                    .buttonLabel=", "\n                    @change=", "\n            >\n                <et2-button slot=\"footer\" image=\"copy\" id=\"copy\" style=\"order:3\" noSubmit=\"true\"\n                            label=", "></et2-button>\n                <et2-button slot=\"footer\" image=\"move\" id=\"move\" style=\"order:3\" noSubmit=\"true\" ?disabled=", "\n                            label=", "></et2-button>\n            </et2-vfs-select>\n            <et2-vfs-select\n                    part=\"vfs button clipboard\"\n                    exportparts=\"base:button_base\"\n                    id=\"paste\"\n                    image=\"clipboard-data\" aria-label=", " noSubmit=\"true\"\n                    title=", "\n                    ?readonly=", "\n                    disabled\n                    multiple\n                    @click=", "\n            >\n                <et2-link-paste-dialog open\n                                       title=", "\n                                       .buttonLabel=", "\n                >\n                    <et2-button slot=\"footer\" image=\"copy\" id=\"copy\" style=\"order:3\" noSubmit=\"true\"\n                                ?disabled=", "\n                                label=", "\n                                title=", "\n                    ></et2-button>\n                    <et2-button slot=\"footer\" image=\"move\" id=\"move\" style=\"order:3\" noSubmit=\"true\"\n                                ?disabled=", "\n                                label=", "\n                                title=", "\n                    ></et2-button>\n                </et2-link-paste-dialog>\n            </et2-vfs-select>\n\t\t"], ["\n            <slot name=\"before\"></slot>\n            <et2-file multiple id=", "\n                      ?disabled=", "\n                      ?readonly=", "\n                      title=", "\n                      dropTarget=\"popupMainDiv\"\n                      @et2-add=", "\n                      @change=", "\n            ></et2-file>\n            <et2-vfs-select\n                    part=\"vfs button\"\n                    exportparts=\"base:button_base\"\n                    id=\"link\"\n                    ?disabled=", "\n                    ?readonly=", "\n                    method=", "\n                    method-id=", "\n                    multiple\n                    title=", "\n                    .buttonLabel=", "\n                    @change=",
            "\n            >\n                <et2-button slot=\"footer\" image=\"copy\" id=\"copy\" style=\"order:3\" noSubmit=\"true\"\n                            label=", "></et2-button>\n                <et2-button slot=\"footer\" image=\"move\" id=\"move\" style=\"order:3\" noSubmit=\"true\" ?disabled=", "\n                            label=", "></et2-button>\n            </et2-vfs-select>\n            <et2-vfs-select\n                    part=\"vfs button clipboard\"\n                    exportparts=\"base:button_base\"\n                    id=\"paste\"\n                    image=\"clipboard-data\" aria-label=", " noSubmit=\"true\"\n                    title=", "\n                    ?readonly=", "\n                    disabled\n                    multiple\n                    @click=",
            "\n            >\n                <et2-link-paste-dialog open\n                                       title=", "\n                                       .buttonLabel=", "\n                >\n                    <et2-button slot=\"footer\" image=\"copy\" id=\"copy\" style=\"order:3\" noSubmit=\"true\"\n                                ?disabled=", "\n                                label=", "\n                                title=", "\n                    ></et2-button>\n                    <et2-button slot=\"footer\" image=\"move\" id=\"move\" style=\"order:3\" noSubmit=\"true\"\n                                ?disabled=", "\n                                label=", "\n                                title=", "\n                    ></et2-button>\n                </et2-link-paste-dialog>\n            </et2-vfs-select>\n\t\t"])), this.id, this.disabled, this.readonly, this.egw().lang("File upload"), function (e) { _this.closest("et2-tabbox").activateTab(_this); }, function (e) { _this.handleFilesUploaded(e); }, this.disabled, this.readonly, method || lit_1.nothing, method_id || lit_1.nothing, this.egw().lang("select file(s) from vfs"), this.egw().lang('Link'), function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.handleVfsSelected;
                        return [4 /*yield*/, this.vfsDialog.getComplete()];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        }); }, this.egw().lang("copy"), !method_id, this.egw().lang("move"), this.egw().lang("clipboard contents"), this.egw().lang("Clipboard contents"), this.readonly, function (e) { return __awaiter(_this, void 0, void 0, function () {
            var files, cbFiles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = [];
                        return [4 /*yield*/, Et2LinkPasteDialog_1.getClipboardFiles()];
                    case 1:
                        cbFiles = _a.sent();
                        cbFiles.forEach(function (f) { return files.push(f.path); });
                        e.target.firstElementChild.value = files;
                        e.target.firstElementChild.requestUpdate();
                        event_1.waitForEvent(e.target._dialog, "sl-after-show").then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this.handleFilePaste;
                                        return [4 /*yield*/, this.pasteDialog.getComplete()];
                                    case 1:
                                        _a.apply(this, [_b.sent()]);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); }, this.egw().lang("Clipboard contents"), this.egw().lang("link"), !((_a = this.value) === null || _a === void 0 ? void 0 : _a.to_id), this.egw().lang("copy"), this.egw().lang("Copy selected files"), !((_b = this.value) === null || _b === void 0 ? void 0 : _b.to_id), this.egw().lang("move"), this.egw().lang("Move selected files"));
    };
    /**
     * @return {TemplateResult}
     * @protected
     */
    Et2LinkTo.prototype._inputGroupInputTemplate = function () {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <et2-link-entry .onlyApp=\"", "\"\n                            .applicationList=\"", "\"\n                            .readonly=", "\n                            ?disabled=", "\n                            @sl-change=", "\n                            @sl-clear=\"", "\">\n            </et2-link-entry>\n            <et2-button id=\"link_button\" label=\"Link\" class=\"link\" .noSubmit=", "\n                        @click=", ">\n            </et2-button>\n\t\t"], ["\n            <et2-link-entry .onlyApp=\"", "\"\n                            .applicationList=\"", "\"\n                            .readonly=", "\n                            ?disabled=", "\n                            @sl-change=", "\n                            @sl-clear=\"", "\">\n            </et2-link-entry>\n            <et2-button id=\"link_button\" label=\"Link\" class=\"link\" .noSubmit=", "\n                        @click=", ">\n            </et2-button>\n\t\t"])), this.onlyApp, this.applicationList, this.readonly, this.disabled, this.handleEntrySelected, this.handleEntryCleared, true, this.handleLinkButtonClick);
    };
    /**
     * Create links
     *
     * Using current value for one end of the link, create links to the provided files or entries
     *
     * @param _links
     */
    Et2LinkTo.prototype.createLink = function (_links) {
        var _this = this;
        var links;
        if (typeof _links == 'undefined') {
            links = [];
        }
        else {
            links = _links;
        }
        // If no link array was passed in, don't make the ajax call
        if (links.length > 0) {
            egw_global_1.egw.request("EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link", [this.value.to_app, this.value.to_id, links]).then(function (result) { return _this._link_result(result); });
        }
    };
    /**
     * Sent some links, server has a result
     *
     * @param {Object} success
     */
    Et2LinkTo.prototype._link_result = function (success) {
        var _a, _b;
        if (success) {
            // Show some kind of success...
            // Reset
            this.resetAfterLink();
            // Server says it's OK, but didn't store - we'll send this again on submit
            // This happens if you link to something before it's saved to the DB
            if (typeof success == "object") {
                // Save as appropriate in value
                if (typeof this.value != "object") {
                    this.value = {};
                }
                this.value.to_id = success;
                for (var link in success) {
                    // Thumbnail might already be there
                    if (typeof ((_a = success[link]['id']) === null || _a === void 0 ? void 0 : _a.src) == "string") {
                        success[link]['src'] = (_b = success[link]['id']) === null || _b === void 0 ? void 0 : _b.src;
                    }
                    // Icon should be in registry
                    if (typeof success[link].icon == 'undefined') {
                        success[link].icon = egw_global_1.egw.link_get_registry(success[link].app, 'icon');
                        // No icon, try by mime type - different place for un-saved entries
                        if (success[link].icon == false && success[link].id.type) {
                            // Triggers icon by mime type, not thumbnail or app
                            success[link].type = success[link].id.type;
                            success[link].icon = true;
                        }
                    }
                    // Special handling for file - if not existing, we can't ask for title
                    if (success[link].app == 'file' && typeof success[link].title == 'undefined') {
                        success[link].title = success[link].id.name || '';
                    }
                }
            }
            // Send an event so listeners can update
            this.dispatchEvent(new CustomEvent("et2-change", {
                bubbles: true,
                detail: typeof success == "object" ? Object.values(success) : []
            }));
        }
        else {
            this.validators.push(new ManualMessage_1.ManualMessage(this.egw().lang("failed")));
        }
        this.dispatchEvent(new CustomEvent('link.et2_link_to', { bubbles: true, detail: success }));
    };
    /**
     * A link was attempted.  Reset internal values to get ready for the next one.
     */
    Et2LinkTo.prototype.resetAfterLink = function () {
        // Hide link button again
        this.classList.remove("can_link");
        this.link_button.image = "";
        // Clear internal
        delete this.value.app;
        delete this.value.id;
        // Clear file upload
        this.fileUpload.value = {};
        this.fileUpload.requestUpdate("value");
        // Clear link entry
        this.select.value = { app: this.select.app, id: "" };
        this.select._searchNode.clearSearch();
        this.select._searchNode.select_options = [];
    };
    Et2LinkTo.prototype.handleSlChange = function (event) {
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };
    /**
     * Files have been uploaded (successfully), ready to link
     *
     * @param event
     * @protected
     */
    Et2LinkTo.prototype.handleFilesUploaded = function (event) {
        this.classList.add("can_link");
        var links = [];
        // Get files from file upload widget
        var files = this.fileUpload.value;
        for (var file in files) {
            links.push({
                app: 'file',
                id: file,
                name: files[file].name,
                type: files[file].type,
                src: files[file].src
            });
        }
        if (links.length) {
            this.createLink(links);
        }
    };
    /**
     * An entry has been selected, ready to link
     *
     */
    Et2LinkTo.prototype.handleEntrySelected = function (event) {
        // Could be the app, could be they selected an entry
        if (event.target == this.select && (typeof this.select.value == "string" && this.select.value ||
            typeof this.select.value == "object" && this.select.value.id)) {
            this.classList.add("can_link");
            this.link_button.focus();
        }
    };
    /**
     * An entry was selected, but instead of clicking "Link", the user cleared the selection
     */
    Et2LinkTo.prototype.handleEntryCleared = function (event) {
        this.classList.remove("can_link");
    };
    Et2LinkTo.prototype.handleLinkButtonClick = function (event) {
        this.link_button.image = "loading";
        var link_info = [];
        if (this.select.value) {
            var selected = this.select.value;
            // Extra complicated because LinkEntry doesn't always return a LinkInfo
            if (this.onlyApp) {
                selected = { app: this.onlyApp, id: selected };
            }
            link_info.push(selected);
        }
        this.createLink(link_info);
    };
    /**
     * Handle a link being removed
     *
     * Event is thrown every time a link is removed (from a LinkList) but we only care if the
     * entry hasn't been saved yet and has no ID.  In this case we've been keeping the list
     * to submit and link server-side so we have to remove the deleted link from our list.
     *
     * @param {CustomEvent} e
     */
    Et2LinkTo.prototype.handleLinkDeleted = function (e) {
        if (e && e.detail && this.value && typeof this.value.to_id == "object") {
            delete this.value.to_id[e.detail.link_id || ""];
        }
    };
    Et2LinkTo.prototype.handleFilePaste = function (_a) {
        var _this = this;
        var button = _a[0], selected = _a[1];
        var fileInfo = [];
        selected.forEach(function (file) {
            var info = _this.pasteDialog.fileInfo(file);
            fileInfo.push(info);
        });
        this.handleVfsFile(button, fileInfo);
        this.pasteButton.value = [];
    };
    Et2LinkTo.prototype.handleVfsSelected = function (_a) {
        var _this = this;
        var button = _a[0], selected = _a[1];
        var fileInfo = [];
        selected.forEach(function (file) {
            var info = __assign({}, _this.vfsDialog.fileInfo(file));
            if (!_this.value.to_id || typeof _this.value.to_id == 'object') {
                info['app'] = button == "copy" ? "file" : "link";
                info['path'] = button == "copy" ? "vfs://default" + info.path : info.path;
            }
            fileInfo.push(info);
        });
        this.handleVfsFile(button, fileInfo);
    };
    Et2LinkTo.prototype.handleVfsFile = function (button, selectedFileInfo) {
        if (!button) {
            return;
        }
        var values = true;
        // If entry not yet saved, store for linking on server
        if (!this.value.to_id || typeof this.value.to_id == 'object') {
            values = this.value.to_id || {};
            selectedFileInfo.forEach(function (info) {
                var _a;
                debugger;
                values['link:' + info.path] = {
                    app: info === null || info === void 0 ? void 0 : info.app,
                    id: (_a = info.path) !== null && _a !== void 0 ? _a : info.id,
                    type: 'unknown',
                    icon: 'link',
                    remark: '',
                    title: info.path
                };
            });
        }
        else {
            // Send to server to link
            var files_1 = [];
            var links_1 = [];
            selectedFileInfo.forEach(function (info) {
                switch (info === null || info === void 0 ? void 0 : info.app) {
                    case "filemanager":
                        files_1.push(info.path);
                        break;
                    default:
                        links_1.push({ app: info.app, id: info.id });
                }
            });
            if (files_1.length > 0) {
                var file_method = 'EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link_existing';
                var methodId = this.value.to_app + ':' + this.value.to_id;
                this.egw().request(file_method, [methodId, files_1, button]);
            }
            if (links_1.length > 0) {
                this.createLink(links_1);
            }
        }
        this._link_result(values);
    };
    Object.defineProperty(Et2LinkTo.prototype, "link_button", {
        get: function () {
            return this.shadowRoot.querySelector("#link_button");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo.prototype, "select", {
        get: function () {
            return this.shadowRoot.querySelector("et2-link-entry");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2LinkTo, "validationTypes", {
        /**
         * Types of validation supported by this FormControl (for instance 'error'|'warning'|'info')
         *
         * @type {ValidationType[]}
         */
        get: function () {
            return ['error', 'success'];
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkTo.prototype.render = function () {
        var labelTemplate = this._labelTemplate();
        var helpTemplate = this._helpTextTemplate();
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <div\n                    part=\"form-control\"\n                    class=", "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\" @sl-change=", ">\n                    ", "\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"], ["\n            <div\n                    part=\"form-control\"\n                    class=",
            "\n            >\n                ", "\n                <div part=\"form-control-input\" class=\"form-control-input\" @sl-change=", ">\n                    ", "\n                    ", "\n                </div>\n                ", "\n            </div>\n\t\t"])), class_map_js_1.classMap({
            'form-control': true,
            'form-control--medium': true,
            'form-control--has-label': labelTemplate !== lit_1.nothing,
            'form-control--has-help-text': helpTemplate !== lit_1.nothing
        }), labelTemplate, this.handleSlChange, this._inputGroupBeforeTemplate(), this._inputGroupInputTemplate(), helpTemplate);
    };
    return Et2LinkTo;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2LinkTo = Et2LinkTo;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-link-to", Et2LinkTo);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
