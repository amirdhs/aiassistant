"use strict";
/**
 * EGroupware eTemplate2 - File selection WebComponent
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
exports.Et2VfsSelectDialog = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var lit_1 = require("lit");
var shoelace_1 = require("../Styles/shoelace");
var Et2VfsSelect_styles_1 = require("./Et2VfsSelect.styles");
var property_js_1 = require("lit/decorators/property.js");
var state_js_1 = require("lit/decorators/state.js");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
var slot_1 = require("../Et2Widget/slot");
var egw_global_1 = require("../../jsapi/egw_global");
var SearchMixin_1 = require("../Et2Widget/SearchMixin");
var Et2VfsSelectDialog = /** @class */ (function (_super) {
    __extends(Et2VfsSelectDialog, _super);
    function Et2VfsSelectDialog(parent_egw) {
        var _a;
        var _this = _super.call(this) || this;
        /** Currently selected files */
        _this.value = [];
        /**
         * The dialog’s label as displayed in the header.
         * You should always include a relevant label, as it is required for proper accessibility.
         */
        _this.title = "Select";
        /** Button label */
        _this.buttonLabel = "Select";
        /** Provide a suggested filename for saving */
        _this.filename = "";
        /** Allow selecting multiple files */
        _this.multiple = false;
        /** Start path in VFS.  Leave unset to use the last used path. */
        _this.path = "";
        /** Limit display to the given mime-type */
        _this.mime = "";
        /** List of mimetypes to allow user to filter.  */
        _this.mimeList = [
            {
                value: "/(application\\/vnd.oasis.opendocument.text|application\\/vnd.openxmlformats-officedocument.wordprocessingml.document)/i",
                label: "Documents"
            },
            {
                value: "/(application\\/vnd.oasis.opendocument.spreadsheet|application\\/vnd.openxmlformats-officedocument.spreadsheetml.sheet)/i",
                label: "Spreadsheets"
            },
            { value: "image/", label: "Images" },
            { value: "video/", label: "Videos" },
            { value: "message/rfc822", label: "Email" }
        ];
        /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
        _this.helpText = '';
        _this.open = false;
        _this.selectedFiles = [];
        _this._pathWritable = false;
        // SearchMixinInterface //
        _this.searchUrl = "EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_vfsSelectFiles";
        // End SearchMixinInterface //
        // Still need some server-side info
        _this._serverContent = Promise.resolve({});
        _this.hasSlotController = new slot_1.HasSlotController(_this, 'help-text', 'toolbar', 'footer');
        // @ts-ignore different types
        _this._appList = (_a = _this.egw().link_app_list("query")) !== null && _a !== void 0 ? _a : [];
        if (parent_egw) {
            _this._setApiInstance(parent_egw);
        }
        // Use filemanager translations
        _this.egw().langRequireApp(_this.egw().window, "filemanager", function () { _this.requestUpdate(); });
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleCreateDirectory = _this.handleCreateDirectory.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2VfsSelectDialog, "styles", {
        get: function () {
            return __spreadArrays([
                shoelace_1.default
            ], _super.styles, [
                Et2VfsSelect_styles_1.default
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_dialog", {
        // Internal accessors
        get: function () { return this.shadowRoot.querySelector("et2-dialog"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_filenameNode", {
        get: function () { return this.shadowRoot.querySelector("#filename"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_fileNodes", {
        get: function () { return Array.from(this.shadowRoot.querySelectorAll("et2-vfs-select-row")); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_resultNodes", {
        get: function () { return this._fileNodes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_searchNode", {
        get: function () { return this.shadowRoot.querySelector("#search"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_pathNode", {
        get: function () { return this.shadowRoot.querySelector("#path"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog.prototype, "_mimeNode", {
        get: function () { return this.shadowRoot.querySelector("#mimeFilter"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsSelectDialog, "translate", {
        /*
        * List of properties that get translated
        * Done separately to not interfere with properties - if we re-define label property,
        * labels go missing.
        */
        get: function () {
            return __assign(__assign({}, _super.translate), { title: true, buttonLabel: true });
        },
        enumerable: false,
        configurable: true
    });
    Et2VfsSelectDialog.prototype.connectedCallback = function () {
        var _a;
        _super.prototype.connectedCallback.call(this);
        if (this.path == "") {
            this.path = this.egw().getLocalStorageItem(this.egw().appName, this.constructor.name + "Path") ||
                ((_a = this.egw()) === null || _a === void 0 ? void 0 : _a.preference("startfolder", "filemanager")) ||
                "~";
        }
    };
    Et2VfsSelectDialog.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _a.sent();
                        // Need to wait for server content
                        return [4 /*yield*/, this._serverContent];
                    case 2:
                        // Need to wait for server content
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Et2VfsSelectDialog.prototype.firstUpdated = function () {
        var _this = this;
        this._dialog.updateComplete.then(function () {
            _this._dialog.panel.style.width = "60em";
            _this._dialog.panel.style.height = "40em";
        });
        // Get file list
        if (this.open) {
            this.startSearch();
        }
    };
    Et2VfsSelectDialog.prototype.willUpdate = function (changedProperties) {
        _super.prototype.willUpdate.call(this, changedProperties);
        if (changedProperties.has("mode")) {
            this.multiple = this.mode == "open-multiple";
        }
        if (changedProperties.has("path")) {
            this.startSearch();
        }
    };
    Et2VfsSelectDialog.prototype.setPath = function (path) {
        var _this = this;
        var oldValue = this.path;
        // Selection doesn't stay across sub-dirs.  Notify user we dropped them.
        if (this.value.length && path != oldValue) {
            var length_1 = this.value.length;
            this.value.length = 0;
            this.updateComplete.then(function () {
                lit_1.render(lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                    <sl-alert duration=\"5000\" closable open>\n                        <sl-icon slot=\"icon\" name=\"info-circle\"></sl-icon>\n                        ", "\n                    </sl-alert>"], ["\n                    <sl-alert duration=\"5000\" closable open>\n                        <sl-icon slot=\"icon\" name=\"info-circle\"></sl-icon>\n                        ", "\n                    </sl-alert>"])), _this.egw().lang("Selection of files can only be done in one folder.  %1 files unselected.", length_1)), _this);
            });
        }
        if (path == '..') {
            path = this.dirname(this.path);
        }
        this._pathNode.value = this.path = path;
        this.requestUpdate("path", oldValue);
        this.currentResult = null;
        return this._searchPromise;
    };
    /**
     * Get directory of a path
     *
     * @param {string} _path
     * @returns string
     */
    Et2VfsSelectDialog.prototype.dirname = function (_path) {
        var parts = _path.split('/');
        parts.pop();
        return parts.join('/') || '/';
    };
    /**
     * Get file information of currently displayed paths
     *
     * Returns null if the path is not currently displayed
     * @param _path
     */
    Et2VfsSelectDialog.prototype.fileInfo = function (_path) {
        return this._searchResults.find(function (f) { return f.path == _path; });
    };
    /**
     * Shows the dialog.
     */
    Et2VfsSelectDialog.prototype.show = function () {
        var _this = this;
        this.open = true;
        if (this.path && this._searchResults.length == 0) {
            this.startSearch();
        }
        return Promise.all([
            this.updateComplete,
            this._searchPromise
        ]).then(function () {
            return _this._dialog.show();
        }).then(function () {
            // Set current file to first value
            if (_this.value && _this.value[0]) {
                _this.setCurrentResult(_this._fileNodes.find(function (node) { return node.value.path == _this.value[0]; }));
            }
        });
    };
    /**
     * Hides the dialog.
     */
    Et2VfsSelectDialog.prototype.hide = function () {
        this.open = false;
        return this._dialog.hide();
    };
    Et2VfsSelectDialog.prototype.getComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._dialog.getComplete()];
                    case 2:
                        value = _a.sent();
                        return [4 /*yield*/, this.handleClose()];
                    case 3:
                        _a.sent();
                        value[1] = this.value;
                        return [2 /*return*/, value];
                }
            });
        });
    };
    Et2VfsSelectDialog.prototype.localSearch = function (search, searchOptions, localOptions) {
        if (localOptions === void 0) { localOptions = []; }
        return _super.prototype.localSearch.call(this, search, __assign(__assign({}, searchOptions), { mime: this.mime }), localOptions);
    };
    Et2VfsSelectDialog.prototype.searchMatch = function (search, searchOptions, option) {
        var result = _super.prototype.searchMatch.call(this, search, searchOptions, option);
        // Add in local mime check
        if (result && searchOptions.mime) {
            result = result && option.mime.match(searchOptions.mime);
        }
        return result;
    };
    Et2VfsSelectDialog.prototype.remoteSearch = function (search, options) {
        // Include a limit, even if options don't, to avoid massive lists breaking the UI
        var sendOptions = __assign({ path: this.path, mime: this.mime, num_rows: 100 }, options);
        return _super.prototype.remoteSearch.call(this, search, sendOptions);
    };
    Et2VfsSelectDialog.prototype.processRemoteResults = function (results) {
        var _a;
        var result = _super.prototype.processRemoteResults.call(this, results);
        if (typeof results.path === "string") {
            // Something like a redirect or link followed - server is sending us a "corrected" path
            this.path = results.path;
        }
        if (typeof results.writable !== "undefined") {
            this._pathWritable = results.writable;
            this.requestUpdate("_pathWritable");
        }
        this.helpText = (_a = results === null || results === void 0 ? void 0 : results.message) !== null && _a !== void 0 ? _a : "";
        return result;
    };
    /**
     * Inject application specific egw object with loaded translations into the dialog
     *
     * @param {string|egw} _egw_or_appname egw object with already loaded translations or application name to load translations for
     */
    Et2VfsSelectDialog.prototype._setApiInstance = function (_egw_or_appname) {
        if (typeof _egw_or_appname == 'undefined') {
            // @ts-ignore
            _egw_or_appname = egw_appName;
        }
        // if egw object is passed in because called from et2, just use it
        if (typeof _egw_or_appname != 'string') {
            this.__egw = _egw_or_appname;
        }
        // otherwise use given appname to create app-specific egw instance and load default translations
        else {
            this.__egw = egw_global_1.egw(_egw_or_appname);
            this.egw().langRequireApp(this.egw().window, _egw_or_appname);
        }
    };
    Et2VfsSelectDialog.prototype.handleClose = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var dialogValue, _d, result;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this._dialog.getComplete()];
                    case 1:
                        dialogValue = _e.sent();
                        _d = this.mode;
                        switch (_d) {
                            case "select-dir": return [3 /*break*/, 2];
                            case "saveas": return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        // If they didn't pick a specific directory and didn't cancel, use the current directory
                        if (this.value.length == 0) {
                            this.value.splice(0, 0, this.path);
                        }
                        return [3 /*break*/, 6];
                    case 3:
                        // Saveas wants a full path, including filename
                        this.value.splice(0, this.value.length, (_a = this.path + "/" + this._filenameNode.value) !== null && _a !== void 0 ? _a : this.filename);
                        if (!this.fileInfo(this.value[0])) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.overwritePrompt((_c = (_b = this._filenameNode) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : this.filename)];
                    case 4:
                        result = _e.sent();
                        if (result == null) {
                            return [2 /*return*/];
                        }
                        this.value.splice(0, this.value.length, this.path + "/" + result);
                        _e.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6:
                        // Save path for next time
                        this.egw().setLocalStorageItem(this.egw().appName, this.constructor.name + "Path", this.path);
                        this.dispatchEvent(new Event("change", { bubbles: true }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * User tried to saveas when we can see that file already exists.  Prompt to overwrite or rename.
     *
     * We offer a suggested new name by appending "(#)", and give back either the original filename, their
     * modified filename, or null if they cancel.
     *
     * @param filename
     * @returns {Promise<[number|string, Object]|null>} [Button,filename] or null if they cancel
     * @private
     */
    Et2VfsSelectDialog.prototype.overwritePrompt = function (filename) {
        // Make a filename suggestion
        var parts = filename.split(".");
        var extension = parts.pop();
        var newName = parts.join(".");
        var counter = 0;
        var suggestion;
        do {
            counter++;
            suggestion = newName + " (" + counter + ")." + extension;
        } while (this.fileInfo(suggestion));
        // Ask about it
        var saveModeDialogButtons = [
            {
                label: self.egw().lang("Yes"),
                id: "overwrite",
                class: "ui-priority-primary",
                "default": true,
                image: 'check'
            },
            { label: self.egw().lang("Rename"), id: "rename", image: 'edit' },
            { label: self.egw().lang("Cancel"), id: "cancel" }
        ];
        return Et2Dialog_1.Et2Dialog.show_prompt(null, self.egw().lang('Do you want to overwrite existing file %1 in directory %2?', filename, this.path), self.egw().lang('File %1 already exists', filename), suggestion, saveModeDialogButtons, null).getComplete().then(function (_a) {
            var button = _a[0], value = _a[1];
            if (button == "cancel") {
                return null;
            }
            return button == "rename" ? value.value : filename;
        });
    };
    /**
     * Sets the selected files
     * @param {Et2VfsSelectRow | Et2VfsSelectRow[]} file
     * @private
     */
    Et2VfsSelectDialog.prototype.setSelectedFiles = function (file) {
        var newSelectedOptions = Array.isArray(file) ? file : [file];
        // Clear existing selection
        this._fileNodes.forEach(function (el) {
            el.selected = false;
            el.requestUpdate("selected");
        });
        // Set the new selection
        if (newSelectedOptions.length) {
            newSelectedOptions.forEach(function (el) {
                el.selected = true;
                el.requestUpdate("selected");
            });
        }
        // Update selection, value, and display label
        this.searchResultSelected();
    };
    /**
     * Toggles a search result's selected state
     */
    Et2VfsSelectDialog.prototype.toggleResultSelection = function (result, force) {
        if (!this.multiple) {
            this._resultNodes.forEach(function (n) {
                n.selected = false;
                n.requestUpdate("selected");
            });
        }
        _super.prototype.toggleResultSelection.call(this, result, force);
    };
    /**
     * This method must be called whenever the selection changes. It will update the selected file cache, the current
     * value, and the display value
     */
    Et2VfsSelectDialog.prototype.searchResultSelected = function () {
        var _a, _b;
        var _c, _d;
        _super.prototype.searchResultSelected.call(this);
        // Update the value
        if (this.multiple) {
            (_a = this.value).splice.apply(_a, __spreadArrays([0, this.value.length], this.selectedResults.map(function (el) { return el.value.path; })));
        }
        else {
            (_b = this.value).splice.apply(_b, __spreadArrays([0, this.value.length], (_d = (((_c = this.selectedResults) === null || _c === void 0 ? void 0 : _c.length) ? [this.selectedResults[0].value.path] : [])) !== null && _d !== void 0 ? _d : []));
        }
    };
    /**
     * Create a new directory in the current one
     * @param {MouseEvent | KeyboardEvent} event
     * @returns {Promise<void>}
     * @protected
     */
    Et2VfsSelectDialog.prototype.handleCreateDirectory = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, button, value, dir;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Et2Dialog_1.Et2Dialog.show_prompt(null, this.egw().lang('New directory'), this.egw().lang('Create directory')).getComplete()];
                    case 1:
                        _a = _b.sent(), button = _a[0], value = _a[1];
                        dir = value.value;
                        if (button && dir) {
                            this.egw().request('EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_create_dir', [dir, this.path])
                                .then(function (msg) {
                                _this.egw().message(msg);
                                _this.setPath(_this.path + '/' + dir);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * SearchMixin handles the actual selection, we just reject directories here.
     *
     * @param {MouseEvent} event
     */
    Et2VfsSelectDialog.prototype.handleFileClick = function (event) {
        var _this = this;
        var target = event.target;
        var file = target.closest('et2-vfs-select-row');
        var oldValue = this.value;
        if (file && !file.disabled) {
            // Can't select a directory normally
            if (file.value.isDir) {
                this.setPath(file.value.path);
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            // can't select anything in "saveas", but set the file name
            else if (this.mode == "saveas") {
                this._filenameNode.value = file.value.name;
                event.preventDefault();
                event.stopPropagation();
                this.updateComplete.then(function () { return _this._filenameNode.focus(); });
                return;
            }
            // Set focus after updating so the value is announced by screen readers
            //this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
        }
    };
    Et2VfsSelectDialog.prototype.handleKeyDown = function (event) {
        // Ignore selects
        if (event.target.tagName.startsWith('ET2-SELECT')) {
            return;
        }
        // Grab any keypresses, avoid EgwAction reacting on them too
        event.stopPropagation();
        // Navigate options
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
            var files = this._fileNodes;
            var currentIndex = files.indexOf(this.currentResult);
            var newIndex = Math.max(0, currentIndex);
            // Prevent scrolling
            event.preventDefault();
            if (event.key === "ArrowDown") {
                newIndex = currentIndex + 1;
                if (newIndex > files.length - 1) {
                    return this._mimeNode.focus();
                }
            }
            else if (event.key === "ArrowUp") {
                newIndex = currentIndex - 1;
                if (newIndex < 0) {
                    return this._pathNode.focus();
                }
            }
            else if (event.key === "Home") {
                newIndex = 0;
            }
            else if (event.key === "End") {
                newIndex = files.length - 1;
            }
            this.setCurrentResult(files[newIndex]);
        }
        else if ([" "].includes(event.key) && this.currentResult) {
            // Prevent scrolling
            event.preventDefault();
            return this.handleFileClick(event);
        }
        else if (["Enter"].includes(event.key) && this.currentResult && !this.currentResult.disabled) {
            return this.handleFileClick(event);
        }
        else if (["Escape"].includes(event.key)) {
            this.open = false;
        }
    };
    Et2VfsSelectDialog.prototype.handleSearchKeyDown = function (event) {
        var _this = this;
        clearTimeout(this._searchTimeout);
        // Up / Down navigates options
        if (['ArrowDown', 'ArrowUp'].includes(event.key) && this._searchResults.length) {
            return _super.prototype.handleSearchKeyDown.call(this, event);
        }
        // Start search immediately
        else if (event.key == "Enter") {
            return _super.prototype.handleSearchKeyDown.call(this, event);
        }
        else if (event.key == "Escape") {
            _super.prototype.handleSearchKeyDown.call(this, event);
            event.preventDefault();
            this.value.length = 0;
            this.hide();
            return;
        }
        // Start the search automatically if they have something typed
        if (this._searchNode.value.length > 0) {
            this._searchTimeout = window.setTimeout(function () { _this.startSearch(); }, Et2VfsSelectDialog.SEARCH_TIMEOUT);
        }
    };
    Et2VfsSelectDialog.prototype.toolbarTemplate = function () {
        var _this = this;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"et2_toolbar\">\n                <et2-button statustext=\"Go to your home directory\" id=\"home\"\n                            image=\"filemanager/gohome\"\n                            aria-label=", "\n                            noSubmit=\"true\"\n                            @click=", "\n                ></et2-button>\n                <et2-button statustext=\"Up\" id=\"up\"\n                            image=\"filemanager/goup\" noSubmit=\"true\" aria-label=", "\n                            @click=", "\n                >\n                </et2-button>\n                <et2-button statustext=\"Favorites\" id=\"favorites\"\n                            aria-label=", "\n                            image=\"filemanager/fav_filter\" noSubmit=\"true\"\n                            @click=", "\n                ></et2-button>\n                <et2-select id=\"app\" emptyLabel=\"", "\" noLang=\"1\"\n                            .select_options=", "\n                            @change=", "\n                >\n                </et2-select>\n                <et2-button statustext=\"Create directory\" id=\"createdir\" class=\"createDir\"\n                            arial-label=", "\n                            ?disabled=", "\n                            noSubmit=\"true\"\n                            image=\"filemanager/button_createdir\"\n                            roImage=\"filemanager/createdir_disabled\"\n                            @click=", "\n                ></et2-button>\n                <file id=\"upload_file\" statustext=\"upload file\" progress_dropdownlist=\"true\" multiple=\"true\"\n                      ?disabled=", "\n                      onFinish=\"app.vfsSelectUI.storeFile\"\n                ></file>\n                <et2-searchbox id=\"search\"\n                               @keydown=", "\n                               @sl-clear=", "\n                ></et2-searchbox>\n            </div>\n\t\t"], ["\n            <div class=\"et2_toolbar\">\n                <et2-button statustext=\"Go to your home directory\" id=\"home\"\n                            image=\"filemanager/gohome\"\n                            aria-label=", "\n                            noSubmit=\"true\"\n                            @click=", "\n                ></et2-button>\n                <et2-button statustext=\"Up\" id=\"up\"\n                            image=\"filemanager/goup\" noSubmit=\"true\" aria-label=", "\n                            @click=", "\n                >\n                </et2-button>\n                <et2-button statustext=\"Favorites\" id=\"favorites\"\n                            aria-label=", "\n                            image=\"filemanager/fav_filter\" noSubmit=\"true\"\n                            @click=", "\n                ></et2-button>\n                <et2-select id=\"app\" emptyLabel=\"", "\" noLang=\"1\"\n                            .select_options=", "\n                            @change=", "\n                >\n                </et2-select>\n                <et2-button statustext=\"Create directory\" id=\"createdir\" class=\"createDir\"\n                            arial-label=", "\n                            ?disabled=", "\n                            noSubmit=\"true\"\n                            image=\"filemanager/button_createdir\"\n                            roImage=\"filemanager/createdir_disabled\"\n                            @click=", "\n                ></et2-button>\n                <file id=\"upload_file\" statustext=\"upload file\" progress_dropdownlist=\"true\" multiple=\"true\"\n                      ?disabled=", "\n                      onFinish=\"app.vfsSelectUI.storeFile\"\n                ></file>\n                <et2-searchbox id=\"search\"\n                               @keydown=", "\n                               @sl-clear=", "\n                ></et2-searchbox>\n            </div>\n\t\t"])), this.egw().lang("Go to your home folder"), function () { return _this.setPath("~"); }, this.egw().lang("Up"), function () { return _this.setPath(".."); }, this.egw().lang("Favorites"), function () { return _this.setPath("/apps/favorites"); }, this.egw().lang("Applications"), this._appList, function (e) { return _this.setPath("/apps/" + e.target.value); }, this.egw().lang("Create directory"), !this._pathWritable, this.handleCreateDirectory, !this._pathWritable, this.handleSearchKeyDown, this.startSearch);
    };
    Et2VfsSelectDialog.prototype.resultTemplate = function (file, index) {
        var classes = file.class ? Object.fromEntries((file.class).split(" ").map(function (k) { return [k, true]; })) : {};
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <et2-vfs-select-row\n                    class=", "\n                    ?disabled=", "\n                    .selected=", "\n                    .value=", "\n                    @mouseup=", "\n            ></et2-vfs-select-row>"], ["\n            <et2-vfs-select-row\n                    class=",
            "\n                    ?disabled=", "\n                    .selected=", "\n                    .value=", "\n                    @mouseup=", "\n            ></et2-vfs-select-row>"])), class_map_js_1.classMap({
            ...classes
        }), file.disabled || this.mode == "select-dir" && !file.isDir, this.value.includes(file.path), file, this.handleFileClick);
    };
    Et2VfsSelectDialog.prototype.noResultsTemplate = function () {
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <div class=\"search__empty vfs_select__empty\">\n                <et2-image src=\"filemanager\"></et2-image>\n                ", "\n            </div>"], ["\n            <div class=\"search__empty vfs_select__empty\">\n                <et2-image src=\"filemanager\"></et2-image>\n                ", "\n            </div>"])), this.egw().lang("no files in this directory."));
    };
    Et2VfsSelectDialog.prototype.mimeOptionsTemplate = function () {
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
    };
    Et2VfsSelectDialog.prototype.footerTemplate = function () {
        var image = "check";
        switch (this.mode) {
            case "saveas":
                image = "save_new";
                break;
        }
        var buttons = [
            { id: "ok", label: this.buttonLabel, image: image, button_id: Et2Dialog_1.Et2Dialog.OK_BUTTON },
            { id: "cancel", label: this.egw().lang("cancel"), image: "cancel", button_id: Et2Dialog_1.Et2Dialog.CANCEL_BUTTON }
        ];
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <slot name=\"footer\" slot=\"footer\"></slot>\n            ", ""], ["\n            <slot name=\"footer\" slot=\"footer\"></slot>\n            ",
            ""])), repeat_js_1.repeat(buttons, function (button) { return button.id; }, function (button, index) {
            // style=order is to allow slotted buttons an opportunity to choose where they go.  
            // Default is they'll go before our primary button
            return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                    <et2-button id=", "\n                                button_id=", "\n                                class=\"et2_button et2_vfs__button\"\n                                style=\"order: ", "\"\n                                label=", "\n                                variant=", "\n                                slot=\"footer\"\n                                .image=", "\n                                .noSubmit=", "\n                    >", "\n                    </et2-button>\n                "], ["\n                    <et2-button id=", "\n                                button_id=", "\n                                class=\"et2_button et2_vfs__button\"\n                                style=\"order: ", "\"\n                                label=", "\n                                variant=", "\n                                slot=\"footer\"\n                                .image=", "\n                                .noSubmit=", "\n                    >", "\n                    </et2-button>\n                "])), button.id, button.button_id, (index + 1) * 2, button.label, index == 0 ? "primary" : "default", if_defined_js_1.ifDefined(button.image), true, button.label);
        }));
    };
    Et2VfsSelectDialog.prototype.render = function () {
        var _this = this;
        var hasHelpTextSlot = this.hasSlotController.test('help-text');
        var hasFooterSlot = this.hasSlotController.test('footer');
        var hasToolbarSlot = this.hasSlotController.test('toolbar');
        var hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
        var hasToolbar = !!hasToolbarSlot;
        var hasFilename = this.mode == "saveas";
        var mime = typeof this.mime == "string" ? this.mime : (this.mimeList.length == 1 ? this.mimeList[0].value : "");
        return lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            <et2-dialog\n                    .isModal=", "\n                    .destroyOnClose=", "\n                    .title=", "\n                    .open=", "\n                    @keydown=", "\n                    @close=", "\n            >\n                ", "\n                <div\n                        part=\"toolbar\"\n                        id=\"toolbar\"\n                        class=\"vfs_select__toolbar\"\n                >\n                    <slot name=\"prefix\"></slot>\n                    <slot name=\"toolbar\">", "</slot>\n                    <slot name=\"suffix\"></slot>\n                </div>\n                <div\n                        part=\"path\"\n                >\n                    <et2-vfs-path id=\"path\"\n                                  .value=", "\n                                  @change=", "\n                    ></et2-vfs-path>\n                </div>\n                ", "\n                <slot></slot>\n                <sl-visually-hidden>\n                    <et2-label for=\"mimeFilter\">", "</et2-label>\n                </sl-visually-hidden>\n                <et2-select\n                        id=\"mimeFilter\"\n                        part=\"mimefilter\"\n                        class=\"vfs_select__mimefilter\"\n                        ?readonly=", "\n                        .emptyLabel=", "\n                        .select_options=", "\n                        .value=", "\n                        @change=", "\n                >\n                    ", "\n                </et2-select>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n                ", "\n            </et2-dialog>\n\t\t"], ["\n            <et2-dialog\n                    .isModal=", "\n                    .destroyOnClose=", "\n                    .title=", "\n                    .open=", "\n                    @keydown=", "\n                    @close=", "\n            >\n                ",
            "\n                <div\n                        part=\"toolbar\"\n                        id=\"toolbar\"\n                        class=\"vfs_select__toolbar\"\n                >\n                    <slot name=\"prefix\"></slot>\n                    <slot name=\"toolbar\">", "</slot>\n                    <slot name=\"suffix\"></slot>\n                </div>\n                <div\n                        part=\"path\"\n                >\n                    <et2-vfs-path id=\"path\"\n                                  .value=", "\n                                  @change=", "\n                    ></et2-vfs-path>\n                </div>\n                ", "\n                <slot></slot>\n                <sl-visually-hidden>\n                    <et2-label for=\"mimeFilter\">", "</et2-label>\n                </sl-visually-hidden>\n                <et2-select\n                        id=\"mimeFilter\"\n                        part=\"mimefilter\"\n                        class=\"vfs_select__mimefilter\"\n                        ?readonly=", "\n                        .emptyLabel=", "\n                        .select_options=", "\n                        .value=", "\n                        @change=",
            "\n                >\n                    ", "\n                </et2-select>\n                <div\n                        part=\"form-control-help-text\"\n                        id=\"help-text\"\n                        class=\"form-control__help-text\"\n                        aria-hidden=", "\n                >\n                    <slot name=\"help-text\">", "</slot>\n                </div>\n                ", "\n            </et2-dialog>\n\t\t"])), true, false, this.title, this.open, this.handleKeyDown, this.handleClose, hasFilename ? lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                    <et2-textbox id=\"filename\"\n                                 .value=", "\n                                 @change=", "\n                    >\n                    </et2-textbox>"], ["\n                    <et2-textbox id=\"filename\"\n                                 .value=", "\n                                 @change=", "\n                    >\n                    </et2-textbox>"])), this.filename, function (e) { _this.filename = e.target.value; }) : lit_1.nothing, hasToolbar ? lit_1.nothing : this.toolbarTemplate(), this.path, function () { _this.setPath(_this._pathNode.value); }, this.searchResultsTemplate(), this.egw().lang("mime filter"), this.mimeList.length == 1, this.egw().lang("All files"), this.mimeList, mime, function (e) {
            _this.mime = e.target.value;
            _this.startSearch();
        }, this.mimeOptionsTemplate(), hasHelpText ? 'false' : 'true', this.helpText, this.footerTemplate());
    };
    Et2VfsSelectDialog.SERVER_URL = "EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_vfsSelect_content";
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectDialog.prototype, "value", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectDialog.prototype, "title", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2VfsSelectDialog.prototype, "mode", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2VfsSelectDialog.prototype, "buttonLabel", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectDialog.prototype, "filename", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2VfsSelectDialog.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectDialog.prototype, "path", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectDialog.prototype, "mime", void 0);
    __decorate([
        property_js_1.property({ type: Array })
    ], Et2VfsSelectDialog.prototype, "mimeList", void 0);
    __decorate([
        property_js_1.property({ attribute: 'help-text' })
    ], Et2VfsSelectDialog.prototype, "helpText", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectDialog.prototype, "open", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectDialog.prototype, "currentResult", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectDialog.prototype, "selectedFiles", void 0);
    __decorate([
        state_js_1.state()
    ], Et2VfsSelectDialog.prototype, "_pathWritable", void 0);
    __decorate([
        property_js_1.property()
    ], Et2VfsSelectDialog.prototype, "searchUrl", void 0);
    return Et2VfsSelectDialog;
}(SearchMixin_1.SearchMixin(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement))));
exports.Et2VfsSelectDialog = Et2VfsSelectDialog;
customElements.define("et2-vfs-select-dialog", Et2VfsSelectDialog);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
