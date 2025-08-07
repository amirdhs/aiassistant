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
exports.Et2MergeDialog = void 0;
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var lit_1 = require("lit");
var shoelace_1 = require("../Styles/shoelace");
var property_js_1 = require("lit/decorators/property.js");
var Et2Dialog_1 = require("./Et2Dialog");
var state_js_1 = require("lit/decorators/state.js");
var Et2MergeDialog = /** @class */ (function (_super) {
    __extends(Et2MergeDialog, _super);
    function Et2MergeDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Can't merge "& send" if no email template selected
        _this.canEmail = false;
        return _this;
    }
    Object.defineProperty(Et2MergeDialog, "styles", {
        get: function () {
            return [
                _super.styles,
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t}\n\n\t\t\t\tet2-details::part(content) {\n\t\t\t\t\tdisplay: grid;\n\t\t\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t\t\t\tgap: var(--sl-spacing-medium);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t}\n\n\t\t\t\tet2-details::part(content) {\n\t\t\t\t\tdisplay: grid;\n\t\t\t\t\tgrid-template-columns: repeat(3, 1fr);\n\t\t\t\t\tgap: var(--sl-spacing-medium);\n\t\t\t\t}\n\t\t\t"]))),
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2MergeDialog.prototype, "dialog", {
        get: function () {
            return this.shadowRoot.querySelector("et2-vfs-select-dialog");
        },
        enumerable: false,
        configurable: true
    });
    Et2MergeDialog.prototype.getComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, button, value, documents, options;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.dialog.getComplete()];
                    case 2:
                        _a = _b.sent(), button = _a[0], value = _a[1];
                        if (!button) {
                            return [2 /*return*/, { documents: [], options: this.optionValues }];
                        }
                        documents = [];
                        Array.from(value).forEach(function (value) {
                            var _a;
                            var fileInfo = (_a = _this.dialog.fileInfo(value)) !== null && _a !== void 0 ? _a : [];
                            documents.push({ path: value, mime: fileInfo.mime });
                        });
                        options = this.optionValues;
                        if (button == Et2Dialog_1.Et2Dialog.OK_BUTTON) {
                            options.download = true;
                        }
                        return [2 /*return*/, { documents: documents, options: options }];
                }
            });
        });
    };
    Object.defineProperty(Et2MergeDialog.prototype, "optionValues", {
        get: function () {
            var optionValues = {
                download: false
            };
            this.dialog.querySelectorAll(":not([slot='footer'])").forEach(function (e) {
                if (typeof e.getValue == "function") {
                    optionValues[e.getAttribute("id")] = e.getValue() === "true" ? true : e.getValue();
                }
            });
            return optionValues;
        },
        enumerable: false,
        configurable: true
    });
    Et2MergeDialog.prototype.option = function (component_name) {
        return this.dialog.querySelector("et2-details > [id='" + component_name + "']");
    };
    Et2MergeDialog.prototype.handleFileSelect = function (event) {
        var _this = this;
        // Disable PDF checkbox for only email files selected
        var canPDF = false;
        var oldCanEmail = this.canEmail;
        this.canEmail = false;
        this.dialog.value.forEach(function (path) {
            if (_this.dialog.fileInfo(path).mime !== "message/rfc822") {
                canPDF = true;
            }
            else {
                _this.canEmail = true;
            }
        });
        this.option("pdf").disabled = !canPDF;
        this.requestUpdate("canEmail", oldCanEmail);
    };
    Et2MergeDialog.prototype.render = function () {
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <et2-vfs-select-dialog\n                    class=egw_app_merge_document\"\n                    path=", "\n                    multiple=\"true\"\n                    buttonLabel=", "\n                    .title=\"", "\"\n                    .open=", "\n                    @et2-select=", "\n            >\n                ", "\n                <et2-details>\n                    <span slot=\"summary\">", "</span>\n                    <et2-checkbox label=", " id=\"pdf\"></et2-checkbox>\n                    <et2-checkbox id=\"link\"\n                                  label=\"", "\"\n                    ></et2-checkbox>\n                    <et2-checkbox label=", " id=\"individual\"></et2-checkbox>\n                    <et2-checkbox label=", "\n                                  id=\"smime-sign\"\n                                  disabled\n                    ></et2-checkbox>\n                    <et2-checkbox label=", "\n                                  id=\"smime-encrypted\"\n                                  disabled\n                    ></et2-checkbox>\n                    <slot></slot>\n                </et2-details>\n            </et2-vfs-select-dialog>"], ["\n            <et2-vfs-select-dialog\n                    class=egw_app_merge_document\"\n                    path=", "\n                    multiple=\"true\"\n                    buttonLabel=", "\n                    .title=\"", "\"\n                    .open=", "\n                    @et2-select=", "\n            >\n                ",
            "\n                <et2-details>\n                    <span slot=\"summary\">", "</span>\n                    <et2-checkbox label=", " id=\"pdf\"></et2-checkbox>\n                    <et2-checkbox id=\"link\"\n                                  label=\"", "\"\n                    ></et2-checkbox>\n                    <et2-checkbox label=", " id=\"individual\"></et2-checkbox>\n                    <et2-checkbox label=", "\n                                  id=\"smime-sign\"\n                                  disabled\n                    ></et2-checkbox>\n                    <et2-checkbox label=", "\n                                  id=\"smime-encrypted\"\n                                  disabled\n                    ></et2-checkbox>\n                    <slot></slot>\n                </et2-details>\n            </et2-vfs-select-dialog>"])), this.path, this.egw().lang("Download"), this.egw().lang("Insert in document"), true, this.handleFileSelect, this.canEmail ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                      <et2-button slot=\"footer\" id=\"send\" label=", " image=\"mail\"\n                                  noSubmit=\"true\"></et2-button> "], ["\n                      <et2-button slot=\"footer\" id=\"send\" label=", " image=\"mail\"\n                                  noSubmit=\"true\"></et2-button> "])), this.egw().lang("Merge & send")) : lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                      <et2-button slot=\"footer\" id=\"send\" label=", " image=\"etemplate/merge\"\n                                  noSubmit=\"true\"></et2-button>"], ["\n                      <et2-button slot=\"footer\" id=\"send\" label=", " image=\"etemplate/merge\"\n                                  noSubmit=\"true\"></et2-button>"])), this.egw().lang("Merge")), this.egw().lang("Merge options"), this.egw().lang("Save as PDF"), this.egw().lang("Link to each entry"), this.egw().lang("Merge individually"), this.egw().lang("smime signed message"), this.egw().lang("smime encrypted message"));
    };
    __decorate([
        property_js_1.property()
    ], Et2MergeDialog.prototype, "application", void 0);
    __decorate([
        property_js_1.property()
    ], Et2MergeDialog.prototype, "path", void 0);
    __decorate([
        state_js_1.state()
    ], Et2MergeDialog.prototype, "canEmail", void 0);
    Et2MergeDialog = __decorate([
        custom_element_js_1.customElement("et2-merge-dialog")
    ], Et2MergeDialog);
    return Et2MergeDialog;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2MergeDialog = Et2MergeDialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
