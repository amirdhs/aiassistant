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
exports.hasValidFileSize = exports.checkMime = exports.Et2File = void 0;
var lit_1 = require("lit");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var state_js_1 = require("lit/decorators/state.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var if_defined_js_1 = require("lit/directives/if-defined.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var shoelace_1 = require("../Styles/shoelace");
var Et2File_styles_1 = require("./Et2File.styles");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var resumable_1 = require("../../Resumable/resumable");
var slot_1 = require("../Et2Widget/slot");
/**
 * @summary Displays a button to select files to upload
 *
 *
 * @dependency sl-format-bytes
 * @dependency sl-progress-bar
 * @dependency sl-icon
 *
 * @slot image - The component's image
 * @slot label - Button label
 * @slot prefix	- Used to prepend a presentational icon or similar element before the button.
 * @slot suffix - Used to append a presentational icon or similar element after the button.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
 * @slot button - A button to use in lieu of the default button
 * @slot list - Selected files are listed here.  Place something in this slot to override the normal file list.
 *
 * @event et2-add - Emitted when a file is added
 * @event et2-load - Emitted when file is complete
 * @event change - Emitted when all selected files are complete
 *
 * @csspart base - Component internal wrapper
 * @csspart button - Button that opens browser's file selection dialog
 * @csspart list - List of files
 */
var Et2File = /** @class */ (function (_super) {
    __extends(Et2File, _super);
    function Et2File() {
        var _this = _super.call(this) || this;
        /** A string that defines the file types the file should accept. Defaults to all. */
        _this.accept = "";
        /** Indicates if multiple files can be uploaded */
        _this.multiple = false;
        /** Draws the item in a loading state. */
        _this.loading = false;
        /** If true, no file list will be shown */
        _this.noFileList = false;
        _this.display = "large";
        /** Show the files inline instead of floating over the rest of the page.  This can cause the page to reflow */
        _this.inline = false;
        /** The button's image */
        _this.image = "paperclip";
        /** Server path to receive uploaded file */
        _this.uploadTarget = "EGroupware\\Api\\Etemplate\\Widget\\File::ajax_upload";
        /** Chunk size can be altered by the server */
        _this.chunkSize = 1020 * 1024;
        _this.files = [];
        // Allows us to check to see if label or help-text is set.  Overridden to check additional slots.
        _this.hasSlotController = new slot_1.HasSlotController(_this, 'help-text', 'label', 'button', 'list');
        _this.resumable = null;
        _this.__value = {};
        // In case we need to do things between file added and start of upload, we wait
        _this._uploadPending = {};
        _this.resumableQuery = _this.resumableQuery.bind(_this);
        _this.handleFileClick = _this.handleFileClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2File, "styles", {
        get: function () {
            return [
                shoelace_1.default,
                _super.styles,
                Et2File_styles_1.default
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2File.prototype, "value", {
        get: function () {
            return this.__value;
        },
        /** Files already uploaded */
        set: function (newValue) {
            var oldValue = this.value;
            if (typeof newValue !== 'object' || !newValue) {
                newValue = {};
            }
            if (typeof newValue.length !== "undefined") {
                // We use an object, not an Array
                newValue = __assign({}, newValue);
            }
            Object.keys(newValue).forEach(function (key) {
                var _a;
                if (typeof newValue[key].uniqueIdentifier == "undefined") {
                    newValue[key].uniqueIdentifier = ((_a = newValue[key]['ino']) !== null && _a !== void 0 ? _a : key) + newValue[key].path;
                }
            });
            this.__value = newValue;
            this.requestUpdate("value");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2File.prototype, "fileInput", {
        get: function () { var _a; return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#file-input"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2File.prototype, "list", {
        get: function () {
            var _a, _b, _c, _d, _e;
            return this.fileListTarget ? (_b = (_a = this.parentNode.querySelector(this.fileListTarget)) !== null && _a !== void 0 ? _a : this.egw().window.document.querySelector(this.fileListTarget)) !== null && _b !== void 0 ? _b : (_d = (_c = this.getRoot()) === null || _c === void 0 ? void 0 : _c.getWidgetById(this.fileListTarget)) === null || _d === void 0 ? void 0 : _d.getDOMNode() : (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector("slot[name='list']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2File.prototype, "fileItemList", {
        get: function () {
            var _a, _b;
            return (_b = Array.from((_a = this.list) === null || _a === void 0 ? void 0 : _a.querySelectorAll("et2-file-item"))) !== null && _b !== void 0 ? _b : [];
        },
        enumerable: false,
        configurable: true
    });
    Et2File.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._uploadDelayTimeout) {
            window.clearTimeout(this._uploadDelayTimeout);
        }
        if (this.resumable) {
            this.resumable.cancel();
            this.resumable = null;
        }
    };
    Et2File.prototype.willUpdate = function (changedProperties) {
        _super.prototype.willUpdate.call(this, changedProperties);
    };
    Et2File.prototype.firstUpdated = function () {
        this.resumable = this.createResumable();
    };
    Et2File.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (this.fileListTarget && this.list) {
            lit_1.render(this.fileListTemplate(), this.list);
        }
    };
    Et2File.prototype.loadFromXML = function (node) {
        _super.prototype.loadFromXML.call(this, node);
        // If it's readonly, don't care if multiple wasn't set, show all files
        if (this.readonly && !node.hasAttribute("multiple") && this.value && Object.values(this.value).length > 1) {
            this.multiple = true;
            this.egw().debug("log", "Setting multiple=true for readonly file widget with more than one file");
        }
        // If it's readonly and inline was not set, show as inline not dropdown
        if (this.readonly && !node.hasAttribute("inline")) {
            this.inline = true;
            this.egw().debug("log", "Setting inline=true for readonly file widget (no popup)");
        }
        // Set display to "small" for multiple=false && nothing else set
        if (!node.hasAttribute("display") && !this.multiple) {
            this.display = "small";
        }
    };
    Et2File.prototype.createResumable = function () {
        var _a;
        var resumable = new resumable_1.default(this.resumableOptions);
        resumable.assignBrowse(this.fileInput);
        if (this.dropTarget) {
            var target = (_a = this.getRoot().getWidgetById(this.dropTarget)) !== null && _a !== void 0 ? _a : this.egw().window.document.getElementById(this.dropTarget);
            if (target) {
                resumable.assignDrop([target]);
            }
        }
        resumable.on('fileAdded', this.resumableFileAdded.bind(this));
        resumable.on('fileProgress', this.resumableFileProgress.bind(this));
        resumable.on('fileSuccess', this.resumableFileComplete.bind(this));
        resumable.on('fileError', this.resumableFileError.bind(this));
        resumable.on('complete', this.resumableUploadComplete.bind(this));
        return resumable;
    };
    Object.defineProperty(Et2File.prototype, "resumableOptions", {
        get: function () {
            var _a;
            var options = {
                target: this.egw().ajaxUrl(this.uploadTarget),
                query: this.resumableQuery,
                chunkSize: this.chunkSize,
                // Checking for already uploaded chunks - resumable uploads
                testChunks: true,
                testTarget: this.egw().ajaxUrl("EGroupware\\Api\\Etemplate\\Widget\\File::ajax_test_chunk"),
            };
            if (this.accept) {
                options["fileType"] = this.accept.split(",").map(function (f) { return f.trim(); });
            }
            if (this.maxFiles || !this.multiple) {
                options["maxFiles"] = (_a = this.maxFiles) !== null && _a !== void 0 ? _a : 1;
            }
            if (this.maxFileSize) {
                options['maxFileSize'] = this.maxFileSize;
            }
            Object.assign(options, this.uploadOptions);
            return options;
        },
        enumerable: false,
        configurable: true
    });
    Et2File.prototype.resumableQuery = function (file /*: ResumableFile*/, chunk /*: ResumableChunk */) {
        var _a;
        return {
            request_id: (_a = this.getInstanceManager()) === null || _a === void 0 ? void 0 : _a.etemplate_exec_id,
            widget_id: this.id,
        };
    };
    Et2File.prototype.findFileItem = function (file) {
        var searchIdentifier = file.uniqueIdentifier;
        var fileInfo = this.files.find(function (i) { return i.file.uniqueIdentifier == searchIdentifier; });
        if (!fileInfo) {
            var source = Object.values(this.value);
            fileInfo = source.find(function (e) { return e.uniqueIdentifier == searchIdentifier; });
        }
        file = fileInfo;
        var fileItem = this.fileItemList.find(function (i) { return i.dataset.fileId == searchIdentifier; });
        return fileItem;
    };
    Et2File.prototype.resumableFileAdded = function (file, event) {
        return __awaiter(this, void 0, void 0, function () {
            var fileItem, ev;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.set_validation_error(false);
                        file = __assign({ accepted: true, loading: true }, file);
                        if (!file.accepted) {
                            return [2 /*return*/];
                        }
                        this.files = this.multiple ? __spreadArrays(this.files, [file]) : [file];
                        if (!this.multiple) {
                            // New selection overwrites existing
                            this.__value = {};
                        }
                        this.requestUpdate();
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        fileItem = this.findFileItem(file);
                        if (!fileItem) {
                            return [2 /*return*/];
                        }
                        fileItem.loading = true;
                        fileItem.requestUpdate("loading");
                        // Bind close => abort upload
                        fileItem.addEventListener("sl-hide", function () {
                            file.abort();
                            _this.resumable.removeFile(file);
                        }, { once: true });
                        // Actually start uploading
                        return [4 /*yield*/, fileItem.updateComplete];
                    case 2:
                        // Actually start uploading
                        _a.sent();
                        ev = new CustomEvent("et2-add", { bubbles: true, detail: file });
                        this.dispatchEvent(ev);
                        if (typeof this.onStart == "function") {
                            this.onStart(ev);
                        }
                        if (ev.defaultPrevented) {
                            // Event handling canceled the upload
                            file.cancel();
                        }
                        // We can't pause individual files, just the upload as a whole, so wait together
                        if (this._uploadDelayTimeout) {
                            window.clearTimeout(this._uploadDelayTimeout);
                        }
                        this._uploadDelayTimeout = window.setTimeout(function () {
                            Promise.allSettled(Object.values(_this._uploadPending)).then(function () {
                                _this._uploadPending = {};
                                _this._uploadDelayTimeout = null;
                                window.setTimeout(_this.resumable.upload);
                            });
                        }, 100);
                        return [2 /*return*/];
                }
            });
        });
    };
    Et2File.prototype.resumableFileProgress = function (file, event) {
        var fileItem = this.findFileItem(file);
        if (fileItem && file.progress()) {
            fileItem.progress = file.progress() * 100;
            // Show indeterminate while processing
            if (fileItem.progress == 100) {
                delete fileItem.progress;
            }
            fileItem.requestUpdate("progress");
        }
    };
    Et2File.prototype.resumableFileComplete = function (file, jsonResponse) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        var response = (_c = ((_b = ((_a = JSON.parse(jsonResponse)['response']) !== null && _a !== void 0 ? _a : {}).find(function (i) { return i['type'] == "data"; })) !== null && _b !== void 0 ? _b : {})['data']) !== null && _c !== void 0 ? _c : {};
        var fileItem = this.findFileItem(file);
        file.loading = false;
        file.progress = function () { return 100; };
        if (fileItem) {
            fileItem.progress = 100;
            fileItem.loading = false;
        }
        if ((!response || response.length || Object.entries(response).length == 0 || response[(_d = file.file) === null || _d === void 0 ? void 0 : _d.name]) || (Object.values(response).length == 1 && typeof Object.values(response)[0] == "string")) {
            console.warn("Problem uploading", jsonResponse);
            file.warning = (_g = (_f = response[(_e = file === null || file === void 0 ? void 0 : file.file) === null || _e === void 0 ? void 0 : _e.name]) !== null && _f !== void 0 ? _f : Object.values(response).pop()) !== null && _g !== void 0 ? _g : "No response";
            if (fileItem) {
                fileItem.variant = "warning";
                fileItem.innerHTML += "<br />" + file.warning;
            }
        }
        else {
            var ev_1 = new CustomEvent("et2-load", { bubbles: true, detail: file });
            Object.keys(response).forEach(function (tempName) {
                var _a, _b, _c;
                if (fileItem) {
                    fileItem.variant = "success";
                }
                file['tempName'] = tempName;
                _this.dispatchEvent(ev_1);
                // Add file into value
                if (typeof _this.value !== 'object' || !_this.value) {
                    _this.value = {};
                }
                _this.value[tempName] = __assign(__assign({ file: file.file, uniqueIdentifier: file.uniqueIdentifier, src: (_c = (_b = (_a = fileItem === null || fileItem === void 0 ? void 0 : fileItem.shadowRoot.querySelector("slot[name='image']")) === null || _a === void 0 ? void 0 : _a.assignedElements()[0]) === null || _b === void 0 ? void 0 : _b.src) !== null && _c !== void 0 ? _c : "" }, response[tempName]), { accepted: true });
                // Remove file from file input & resumable
                _this.resumable.removeFile(file);
                _this.removeFile(file);
            });
            if (typeof this.onFinishOne == "function") {
                this.onFinishOne(ev_1);
            }
        }
        if (fileItem) {
            fileItem.requestUpdate("loading");
            fileItem.requestUpdate("progress");
            fileItem.requestUpdate("variant");
        }
    };
    Et2File.prototype.resumableFileError = function (file, jsonResponse) {
        var _a, _b, _c, _d, _e, _f, _g;
        var fileItem = this.findFileItem(file);
        var response = (_c = ((_b = ((_a = JSON.parse(jsonResponse)['response']) !== null && _a !== void 0 ? _a : {}).find(function (i) { return i['type'] == "data"; })) !== null && _b !== void 0 ? _b : {})['data']) !== null && _c !== void 0 ? _c : {};
        if ((!response || response.length || Object.entries(response).length == 0 || response[(_d = file.file) === null || _d === void 0 ? void 0 : _d.name]) || (Object.values(response).length == 1 && typeof Object.values(response)[0] == "string")) {
            console.warn("Problem uploading", jsonResponse);
            file.warning = (_g = (_f = response[(_e = file === null || file === void 0 ? void 0 : file.file) === null || _e === void 0 ? void 0 : _e.name]) !== null && _f !== void 0 ? _f : Object.values(response).pop()) !== null && _g !== void 0 ? _g : "No response";
            if (fileItem) {
                fileItem.variant = "warning";
                fileItem.error(file.warning);
            }
        }
        fileItem.loading = false;
        fileItem.requestUpdate("variant");
        fileItem.requestUpdate("loading");
    };
    Et2File.prototype.resumableUploadComplete = function () {
        var _this = this;
        this.requestUpdate();
        this.updateComplete.then(function () {
            var ev = new CustomEvent("change", { detail: _this.value, bubbles: true });
            _this.dispatchEvent(ev);
            if (typeof _this.onFinish == "function") {
                var fileWidget_1 = _this;
                Object.defineProperty(ev, 'data', {
                    get: function () {
                        console.warn("event.data is deprecated, use event.detail");
                        return fileWidget_1;
                    }
                });
                _this.onFinish(ev, Object.values(_this.value).length);
            }
        });
    };
    Et2File.prototype.show = function () {
        return this.handleBrowseFileClick();
    };
    Et2File.prototype.addFile = function (file) {
        var _this = this;
        if (typeof file !== "object" || !file.name || !file.type || !file.size) {
            console.warn("Invalid file", file);
            return;
        }
        if (this.maxFiles && this.files.length >= this.maxFiles) {
            // TODO : Warn too many files
            return;
        }
        var fileInfo = {
            abort: function () { return false; },
            cancel: function () { return false; },
            uniqueIdentifier: file.name,
            file: file,
            progress: function () { return 0; }
        };
        if (!checkMime(file, this.accept)) {
            fileInfo.accepted = false;
            fileInfo.warning = this.egw().lang("File is of wrong type (%1 != %2)!", file.type, this.accept);
        }
        else if (!hasValidFileSize(file, this.maxFileSize)) {
            fileInfo.accepted = false;
            // TODO: Stop using et2_vfsSize
            //fileInfo.warning = this.egw().lang("File too large.  Maximum %1", et2_vfsSize.prototype.human_size(this.maxFileSize));
        }
        else {
            fileInfo.accepted = true;
        }
        this.files = this.multiple ? __spreadArrays(this.files, [fileInfo]) : [fileInfo];
        this.requestUpdate("files");
        if (fileInfo.accepted) {
            this.updateComplete.then(function () {
                _this.resumable.addFile(fileInfo.file);
            });
        }
    };
    Et2File.prototype.removeFile = function (file) {
        var _a;
        var fileInfo = this.files.find(function (i) { return i.uniqueIdentifier == file.uniqueIdentifier; });
        var fileIndex = (_a = this.files.indexOf(fileInfo)) !== null && _a !== void 0 ? _a : null;
        if (fileIndex != -1) {
            this.files.splice(fileIndex, 1);
        }
        this.requestUpdate("files");
    };
    Et2File.prototype.handleFiles = function (fileList) {
        var _this = this;
        if (!fileList || fileList.length === 0) {
            return;
        }
        if (!this.multiple && fileList.length > 1) {
            // TODO : Warn too many files
            return;
        }
        Object.values(fileList).forEach(function (file) {
            if (typeof file === "object" && file.name && file.type && file.size) {
                _this.addFile(file);
            }
        });
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, detail: this.files }));
    };
    Et2File.prototype.handleBrowseFileClick = function () {
        if (this.disabled) {
            return;
        }
        this.fileInput.click();
    };
    Et2File.prototype.handleFileInputChange = function () {
        var _this = this;
        this.loading = true;
        this.requestUpdate("loading");
        setTimeout(function () {
            _this.handleFiles(_this.fileInput.files);
            _this.loading = false;
            _this.requestUpdate("loading");
        });
    };
    Et2File.prototype.handleFileRemove = function (info) {
        var _this = this;
        var index = this.files.indexOf(info);
        if (index === -1) {
            var source = Object.values(this.value);
            index = source.indexOf(info);
            delete this.value[Object.keys(this.value)[index]];
        }
        else {
            this.files.splice(index, 1);
        }
        if (index === -1) {
            return;
        }
        if (info && typeof info.progress == "function" && typeof info.abort == "function") {
            info.progress() < 1 ? info.abort() : this.resumable.removeFile(this.resumable.getFromUniqueIdentifier(info.uniqueIdentifier));
        }
        this.requestUpdate();
        this.updateComplete.then(function () {
            _this.dispatchEvent(new CustomEvent("change", { detail: _this.files }));
        });
    };
    Et2File.prototype.handleFileListChange = function (list) {
        debugger;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var mutation = list_1[_i];
            if (mutation.type === "childList") {
            }
        }
    };
    Et2File.prototype.handleFileClick = function (e) {
        var _a, _b;
        // If super didn't handle it (returns false), just use egw.open()
        if (_super.prototype._handleClick.call(this, e) && ((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.dataset) === null || _b === void 0 ? void 0 : _b.path)) {
            this.egw().open({
                path: e.target.dataset.path,
                type: e.target.dataset.type
            }, "file");
            e.stopImmediatePropagation();
            return;
        }
    };
    Et2File.prototype.fileListTemplate = function () {
        var _this = this;
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <div part=\"list\" class=\"file__file-list\" id=\"file-list\"\n                 @click=", "\n            >\n            ", "\n            ", "\n            </div>\n\t\t"], ["\n            <div part=\"list\" class=\"file__file-list\" id=\"file-list\"\n                 @click=", "\n            >\n            ", "\n            ", "\n            </div>\n\t\t"])), this.handleFileClick, repeat_js_1.repeat(this.files, function (file) { return file.uniqueIdentifier; }, function (item, index) { return _this.fileItemTemplate(item, index); }), repeat_js_1.repeat(Object.values(this.value), function (file) { return file.uniqueIdentifier; }, function (item, index) { return _this.fileItemTemplate(item, index); }));
    };
    Et2File.prototype.fileItemTemplate = function (fileInfo, index) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var label = (_b = (fileInfo.accepted ? ((_a = fileInfo['name']) !== null && _a !== void 0 ? _a : fileInfo.file.name) : fileInfo.warning)) !== null && _b !== void 0 ? _b : fileInfo['name'];
        var icon = (_c = fileInfo.icon) !== null && _c !== void 0 ? _c : (fileInfo.warning ? "exclamation-triangle" : undefined);
        // Pull thumbnail from file if we can
        var type = (_e = (_d = fileInfo.file) === null || _d === void 0 ? void 0 : _d.type) !== null && _e !== void 0 ? _e : fileInfo["type"];
        var thumbnail;
        //fileInfo.file can be string this leads to js error
        // so we check if it is actually a file
        if (!icon && fileInfo.file instanceof File && (type === null || type === void 0 ? void 0 : type.startsWith("image/"))) {
            try {
                thumbnail = URL.createObjectURL(fileInfo.file);
            }
            catch (e) {
                // Thumbnail creation failed, but we don't really care
            }
        }
        var variant = !fileInfo.warning ? "default" : "warning";
        var closable = !this.readonly && (fileInfo.accepted || Object.values(this.value).indexOf(fileInfo) !== -1);
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <et2-file-item\n                    display=", "\n                    size=", "\n                    variant=", "\n                    ?closable=", "\n                    ?loading=", "\n                    image=", "\n                    progress=", "\n                    data-file-index=", "\n                    data-file-id=", "\n                    data-path=", "\n                    data-type=", "\n                    @sl-after-hide=", "\n            >\n                ", "\n                ", "\n                ", "\n            </et2-file-item>\n\t\t"], ["\n            <et2-file-item\n                    display=", "\n                    size=", "\n                    variant=", "\n                    ?closable=", "\n                    ?loading=", "\n                    image=", "\n                    progress=", "\n                    data-file-index=", "\n                    data-file-id=", "\n                    data-path=", "\n                    data-type=", "\n                    @sl-after-hide=",
            "\n            >\n                ",
            "\n                ",
            "\n                ", "\n            </et2-file-item>\n\t\t"])), this.display, fileInfo.accepted ? (fileInfo.file.size) : (_f = fileInfo.size) !== null && _f !== void 0 ? _f : lit_1.nothing, variant, closable, fileInfo.loading, if_defined_js_1.ifDefined(icon), typeof fileInfo.progress == "function" ? fileInfo.progress() : ((_g = fileInfo.progress) !== null && _g !== void 0 ? _g : lit_1.nothing), index, fileInfo.uniqueIdentifier, (_h = fileInfo.path) !== null && _h !== void 0 ? _h : lit_1.nothing, (_l = (_k = (_j = fileInfo.file) === null || _j === void 0 ? void 0 : _j.type) !== null && _k !== void 0 ? _k : fileInfo.type) !== null && _l !== void 0 ? _l : lit_1.nothing, function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (thumbnail) {
                // Unload thumnail, don't need it anymore
                URL.revokeObjectURL(thumbnail);
            }
            _this.handleFileRemove(fileInfo);
        }, !icon && thumbnail || !type ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    <et2-image slot=\"image\"\n                               src=", "\n                    />\n                "], ["\n                    <et2-image slot=\"image\"\n                               src=", "\n                    />\n                "])), thumbnail !== null && thumbnail !== void 0 ? thumbnail : "upload") : lit_1.nothing, !icon && !thumbnail && type ? lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                    <et2-vfs-mime\n                            slot=\"image\"\n                            mime=", "\n                            .value=", "\n                    ></et2-vfs-mime>"], ["\n                    <et2-vfs-mime\n                            slot=\"image\"\n                            mime=", "\n                            .value=", "\n                    ></et2-vfs-mime>"])), type, { ...fileInfo, mime: type }) : lit_1.nothing, label);
    };
    Et2File.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d;
        var filesList = this.fileListTemplate();
        var hasButtonSlot = (_a = this.hasSlotController) === null || _a === void 0 ? void 0 : _a.test('button');
        var anchorTarget = hasButtonSlot ? (_c = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("slot[name='button']")) === null || _c === void 0 ? void 0 : _c.assignedNodes()[0] : null;
        return lit_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            <div\n                    part=\"base\"\n                    class=", "\n            >\n                <div\n                        @click=\"", "\"\n                >\n                    <slot name=\"prefix\"></slot>\n                    <slot name=\"button\">\n                        <et2-button part=\"button\"\n                                    class=\"file__button\"\n                                    id=\"visible-button\"\n                                    ?disabled=", "\n                                    title=", "\n                                    noSubmit\n                                    image=", "\n                        >\n                            ", "\n                            ", "\n                        </et2-button>\n                    </slot>\n                    ", "\n                    <slot name=\"suffix\"></slot>\n                </div>\n                <input type=\"file\"\n                       id=\"file-input\"\n                       style=\"display: none;\"\n                       accept=", "\n                       ?multiple=", "\n                       ?readonly=", "\n                       ?disabled=", "\n                       @change=", "\n                       value=", "\n                />\n                ", "\n                ", "\n            </div>"], ["\n            <div\n                    part=\"base\"\n                    class=",
            "\n            >\n                <div\n                        @click=\"",
            "\"\n                >\n                    <slot name=\"prefix\"></slot>\n                    <slot name=\"button\">\n                        <et2-button part=\"button\"\n                                    class=\"file__button\"\n                                    id=\"visible-button\"\n                                    ?disabled=", "\n                                    title=", "\n                                    noSubmit\n                                    image=", "\n                        >\n                            ",
            "\n                            ", "\n                        </et2-button>\n                    </slot>\n                    ",
            "\n                    <slot name=\"suffix\"></slot>\n                </div>\n                <input type=\"file\"\n                       id=\"file-input\"\n                       style=\"display: none;\"\n                       accept=", "\n                       ?multiple=", "\n                       ?readonly=", "\n                       ?disabled=", "\n                       @change=", "\n                       value=",
            "\n                />\n                ",
            "\n                ", "\n            </div>"])), class_map_js_1.classMap({
            "file": true,
            //@ts-ignore disabled comes from Et2Widget
            "file--disabled": this.disabled,
            "file--hidden": this.hidden,
            "file--multiple": this.multiple,
            "file--single": !this.multiple
        }), function (e) {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopPropagation();
            _this.handleBrowseFileClick();
        }, this.disabled, (_d = this.helptext) !== null && _d !== void 0 ? _d : this.egw().lang("fileupload"), !this.loading ? this.image : "", this.loading ? lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                                <sl-spinner slot=\"prefix\"></sl-spinner>"], ["\n                                <sl-spinner slot=\"prefix\"></sl-spinner>"]))) : lit_1.nothing, this._labelTemplate(), this.multiple || this.noFileList || this.fileListTarget ? lit_1.nothing : lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                        <slot name=\"list\">\n                            ", "\n                        </slot>"], ["\n                        <slot name=\"list\">\n                            ", "\n                        </slot>"])), filesList), if_defined_js_1.ifDefined(this.accept), this.multiple || this.maxFiles > 1, this.readonly, this.disabled, this.handleFileInputChange, Array.isArray(this.value)
            ? this.value.map(function (f) { return (f instanceof File ? f.name : f); }).join(",")
            : "", (this.noFileList || this.fileListTarget || !this.multiple) ? lit_1.nothing : lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                    <slot name=\"list\">\n                        ", "\n                    </slot>"], ["\n                    <slot name=\"list\">\n                        ",
            "\n                    </slot>"])), this.inline ? lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                            ", "\n                        "], ["\n                            ", "\n                        "])), filesList) : lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                            <sl-popup\n                                    part=\"list\"\n                                    class=\"file__file-list\"\n                                    id=\"file-list\"\n                                    .anchor=", "\n                                    ?active=", "\n                                    strategy=\"fixed\"\n                                    placement=", "\n                                    flip\n                                    flip-fallback-placements=\"top-end\"\n                                    auto-size=\"vertical\"\n                                    @click=", "\n                            >", "\n                            </sl-popup>"], ["\n                            <sl-popup\n                                    part=\"list\"\n                                    class=\"file__file-list\"\n                                    id=\"file-list\"\n                                    .anchor=", "\n                                    ?active=", "\n                                    strategy=\"fixed\"\n                                    placement=", "\n                                    flip\n                                    flip-fallback-placements=\"top-end\"\n                                    auto-size=\"vertical\"\n                                    @click=", "\n                            >", "\n                            </sl-popup>"])), anchorTarget !== null && anchorTarget !== void 0 ? anchorTarget : "visible-button", this.files.length > 0 || Object.values(this.value).length > 0, "bottom-start", this.handleFileClick, filesList)), this._helpTextTemplate());
    };
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2File.prototype, "accept", void 0);
    __decorate([
        property_js_1.property({ type: Number, attribute: "max-file-size" })
    ], Et2File.prototype, "maxFileSize", void 0);
    __decorate([
        property_js_1.property({ type: Number, attribute: "max-files" })
    ], Et2File.prototype, "maxFiles", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2File.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2File.prototype, "loading", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true, attribute: "no-file-list" })
    ], Et2File.prototype, "noFileList", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2File.prototype, "fileListTarget", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2File.prototype, "dropTarget", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2File.prototype, "display", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2File.prototype, "inline", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2File.prototype, "image", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2File.prototype, "uploadTarget", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2File.prototype, "uploadOptions", void 0);
    __decorate([
        property_js_1.property({ type: Number })
    ], Et2File.prototype, "chunkSize", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2File.prototype, "onStart", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2File.prototype, "onFinishOne", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2File.prototype, "onFinish", void 0);
    __decorate([
        state_js_1.state()
    ], Et2File.prototype, "files", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2File.prototype, "value", null);
    Et2File = __decorate([
        custom_element_js_1.customElement("et2-file")
    ], Et2File);
    return Et2File;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2File = Et2File;
/**
 * Check to see if the provided file's mimetype matches
 *
 * @param f File object
 * @return boolean
 */
function checkMime(f, accept) {
    if (accept === void 0) { accept = ""; }
    if (!accept || accept == "*") {
        return true;
    }
    var mime = '';
    if (accept.indexOf("/") != 0) {
        // Lower case it now, if it's not a regex
        mime = accept.toLowerCase();
    }
    else {
        // Convert into a js regex
        var parts = accept.substr(1).match(/(.*)\/([igm]?)$/);
        mime = new RegExp(parts[1], parts.length > 2 ? parts[2] : "");
    }
    // If missing, let the server handle it
    if (!mime || !f.type) {
        return true;
    }
    var is_preg = (typeof mime == "object");
    if (!is_preg && f.type.toLowerCase() == mime || is_preg && mime.test(f.type)) {
        return true;
    }
    // Not right mime
    return false;
}
exports.checkMime = checkMime;
function hasValidFileSize(file, maxFileSize) {
    return !maxFileSize || file.size <= maxFileSize;
}
exports.hasValidFileSize = hasValidFileSize;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
