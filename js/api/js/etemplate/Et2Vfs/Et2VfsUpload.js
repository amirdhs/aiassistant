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
exports.Et2VfsUpload = void 0;
var Et2File_1 = require("../Et2File/Et2File");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var property_js_1 = require("lit/decorators/property.js");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
/**
 * @summary Displays a button to select files from the user's computer to upload into the VFS
 *
 * @dependency et2-file
 *
 * @slot image - The component's image
 * @slot label - Button label
 * @slot prefix	- Used to prepend a presentational icon or similar element before the button.
 * @slot suffix - Used to append a presentational icon or similar element after the button.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
 * @slot button - A button to use in lieu of the default button
 * @slot list - Selected files are listed here.  Place something in this slot to override the normal file list.
 *
 *
 * @csspart base - Component internal wrapper
 */
var Et2VfsUpload = /** @class */ (function (_super) {
    __extends(Et2VfsUpload, _super);
    function Et2VfsUpload() {
        var _this = _super.call(this) || this;
        _this.conflict = "ask";
        _this.__path = "";
        _this.uploadTarget = "EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_upload";
        return _this;
    }
    Et2VfsUpload.prototype.resumableQuery = function (file /*: ResumableFile*/, chunk /*: ResumableChunk */) {
        return Object.assign(_super.prototype.resumableQuery.call(this, file, chunk), {
            path: this.__path
        });
    };
    Object.defineProperty(Et2VfsUpload.prototype, "path", {
        get: function () { return this.__path; },
        /**
         * Target VFS path.  Specifying a directory will allow multiple files.  Including the filename will rename the file.
         * @param {string} newPath
         */
        set: function (newPath) {
            this.__path = newPath !== null && newPath !== void 0 ? newPath : "";
            this.multiple = this.__path.endsWith("/");
        },
        enumerable: false,
        configurable: true
    });
    Et2VfsUpload.prototype.handleFileRemove = function (info) {
        var _this = this;
        var _a;
        // Unable to delete from server.  Probably failed upload.
        if (!info.path) {
            return _super.prototype.handleFileRemove.call(this, info);
        }
        var superFileRemove = _super.prototype.handleFileRemove.bind(this);
        // Set some user feedback that something is happening
        var item = this.findFileItem(info);
        var closable = (_a = item === null || item === void 0 ? void 0 : item.closable) !== null && _a !== void 0 ? _a : true;
        if (item) {
            item.hidden = false;
            item.loading = true;
            item.closable = false;
            item.requestUpdate("loading");
            item.requestUpdate("closable");
        }
        return this.confirmDelete(info).then(function (_a) {
            var button = _a[0], value = _a[1];
            return __awaiter(_this, void 0, void 0, function () {
                var data;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (item) {
                                item.loading = false;
                                item.closable = closable;
                                item.requestUpdate("loading");
                                item.requestUpdate("closable");
                            }
                            if (button !== Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.egw().request("EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_remove", [
                                    (_b = this.getInstanceManager()) === null || _b === void 0 ? void 0 : _b.etemplate_exec_id,
                                    this.id,
                                    info.path.replace(/&quot/g, "'") // path
                                ])];
                        case 1:
                            data = _c.sent();
                            // Remove file from widget
                            if (data && data.errs == 0) {
                                superFileRemove(info);
                            }
                            else if (data && data.msg) {
                                this.egw().message(data.msg, data.errs == 0 ? 'success' : 'error');
                            }
                            return [2 /*return*/];
                    }
                });
            });
        });
    };
    Et2VfsUpload.prototype.resumableFileAdded = function (info, event) {
        var _this = this;
        var _a, _b, _c;
        var superAdded = _super.prototype.resumableFileAdded.bind(this);
        // Always overwriting, no need to check
        if (this.conflict == "overwrite") {
            return superAdded(info, event);
        }
        // Pause uploads while we check
        this.resumable.pause();
        try {
            Et2Dialog_1.Et2Dialog.confirm_file((_a = this.getInstanceManager()) === null || _a === void 0 ? void 0 : _a.etemplate_exec_id, this.path, info.file.name, info.file.type, this.conflict == "rename", this.egw()).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Cancel
                            if (data == false) {
                                info.cancel();
                                return [2 /*return*/];
                            }
                            if (data) {
                                // Server provided a new name
                                info.fileName = data;
                            }
                            return [4 /*yield*/, superAdded(info, event)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (e) {
            var item = this.findFileItem(info);
            if (item) {
                item.error((_c = (_b = e.getMessage()) !== null && _b !== void 0 ? _b : e.toString()) !== null && _c !== void 0 ? _c : e);
            }
        }
    };
    Et2VfsUpload.prototype.confirmDelete = function (info) {
        var confirm = Et2Dialog_1.Et2Dialog.show_dialog(undefined, this.egw().lang("Delete file") + "?", this.egw().lang("Confirmation required"), {}, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO, Et2Dialog_1.Et2Dialog.WARNING_MESSAGE, undefined, this.egw());
        return confirm.getComplete();
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2VfsUpload.prototype, "conflict", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2VfsUpload.prototype, "path", null);
    Et2VfsUpload = __decorate([
        custom_element_js_1.customElement('et2-vfs-upload')
    ], Et2VfsUpload);
    return Et2VfsUpload;
}(Et2File_1.Et2File));
exports.Et2VfsUpload = Et2VfsUpload;
