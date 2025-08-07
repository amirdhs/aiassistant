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
exports.getClipboardFiles = exports.Et2LinkPasteDialog = void 0;
var Et2VfsSelectDialog_1 = require("../Et2Vfs/Et2VfsSelectDialog");
var lit_1 = require("lit");
/**
 * Select files from the file clipboard to paste
 */
var Et2LinkPasteDialog = /** @class */ (function (_super) {
    __extends(Et2LinkPasteDialog, _super);
    function Et2LinkPasteDialog() {
        var _this = _super.call(this) || this;
        _this.searchUrl = "";
        _this.multiple = true;
        _this._appList = [];
        return _this;
    }
    Object.defineProperty(Et2LinkPasteDialog, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t/* Hide the unwanted stuff */\n\n\t\t\t\t#toolbar, #path {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t/* Hide the unwanted stuff */\n\n\t\t\t\t#toolbar, #path {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2LinkPasteDialog.prototype.localSearch = function (search, searchOptions, localOptions) {
        if (localOptions === void 0) { localOptions = []; }
        return __awaiter(this, void 0, void 0, function () {
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getClipboardFiles()];
                    case 1:
                        files = _a.sent();
                        // We don't care if they're directories, treat them all as files (no double click, all selectable)
                        files.forEach(function (f) { return f.isDir = false; });
                        return [2 /*return*/, _super.prototype.localSearch.call(this, search, searchOptions, files)];
                }
            });
        });
    };
    Et2LinkPasteDialog.prototype.noResultsTemplate = function () {
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"search__empty vfs_select__empty\">\n                <et2-image src=\"filemanager\"></et2-image>\n                ", "\n            </div>"], ["\n            <div class=\"search__empty vfs_select__empty\">\n                <et2-image src=\"filemanager\"></et2-image>\n                ", "\n            </div>"])), this.egw().lang("clipboard is empty!"));
    };
    return Et2LinkPasteDialog;
}(Et2VfsSelectDialog_1.Et2VfsSelectDialog));
exports.Et2LinkPasteDialog = Et2LinkPasteDialog;
/**
 * Get any files that are in the system clipboard
 *
 * @return {string[]} Paths
 */
function getClipboardFiles() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var clipboard_files, clipboard, i, split, app, data, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    clipboard_files = [];
                    if (!(typeof window.egw.getSessionItem('phpgwapi', 'egw_clipboard') != 'undefined')) return [3 /*break*/, 5];
                    clipboard = JSON.parse(window.egw.getSessionItem('phpgwapi', 'egw_clipboard')) || {
                        type: [],
                        selected: []
                    };
                    i = 0;
                    _h.label = 1;
                case 1:
                    if (!(i < clipboard.selected.length)) return [3 /*break*/, 5];
                    split = clipboard.selected[i].id.split('::');
                    app = split.shift();
                    if (!(app == 'filemanager')) return [3 /*break*/, 2];
                    data = (_a = clipboard.selected[i].data) !== null && _a !== void 0 ? _a : {};
                    clipboard_files.push({
                        value: clipboard.selected[i].id,
                        app: app,
                        id: split.join("::"),
                        name: (_b = data.name) !== null && _b !== void 0 ? _b : clipboard.selected[i].id,
                        mime: data.mime,
                        isDir: (_c = data.is_dir) !== null && _c !== void 0 ? _c : false,
                        path: (_d = data.path) !== null && _d !== void 0 ? _d : split.join("::"),
                        downloadUrl: data.download_url
                    });
                    return [3 /*break*/, 4];
                case 2:
                    _f = (_e = clipboard_files).push;
                    _g = {
                        value: clipboard.selected[i].id,
                        app: app,
                        id: split.join("::"),
                        path: clipboard.selected[i].id
                    };
                    return [4 /*yield*/, window.egw().link_title(app, split.join("::"), true)];
                case 3:
                    _f.apply(_e, [(_g.name = _h.sent(),
                            _g.mime = "egroupware/" + app,
                            _g.icon = window.egw().image("navbar", app),
                            _g.symlink = true,
                            _g)]);
                    _h.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/, clipboard_files];
            }
        });
    });
}
exports.getClipboardFiles = getClipboardFiles;
customElements.define("et2-link-paste-dialog", Et2LinkPasteDialog);
var templateObject_1, templateObject_2;
