"use strict";
/**
 * EGroupware eTemplate2 - Letter Avatar widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Hadi Nategh
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
exports.Et2LAvatar = void 0;
var Et2Avatar_1 = require("./Et2Avatar");
var shoelace_1 = require("../Styles/shoelace");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var utils_1 = require("../Et2Email/utils");
var egw_global_1 = require("../../jsapi/egw_global");
/**
 * Avatars are used to represent a person or profile.  LAvatar has a coloured background.
 *
 * @slot icon The default icon to use when no image or initials are provided.
 *
 * @event sl-error	The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
 *
 * @csspart base	The component’s base wrapper.
 * @csspart icon	The container that wraps the avatar’s icon.
 * @csspart initials	The container that wraps the avatar’s initials.
 * @csspart image	The avatar image. Only shown when the image attribute is set, or when contactId has an associated avatar image
 */
var Et2LAvatar = /** @class */ (function (_super) {
    __extends(Et2LAvatar, _super);
    function Et2LAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lname = "";
        _this.fname = "";
        return _this;
    }
    Object.defineProperty(Et2LAvatar, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t[part='base'] {\n\t\t\t\t\tbackground-color: var(--background-color, var(--sl-color-neutral-400));\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t[part='base'] {\n\t\t\t\t\tbackground-color: var(--background-color, var(--sl-color-neutral-400));\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Handle changes that have to happen based on changes to properties
     *
     */
    Et2LAvatar.prototype.willUpdate = function (changedProperties) {
        return __awaiter(this, void 0, void 0, function () {
            var parsed, lavatar, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.willUpdate.call(this, changedProperties);
                        if (!(changedProperties.has("lname") || changedProperties.has("fname") || changedProperties.has("contactId") || changedProperties.has("image"))) return [3 /*break*/, 3];
                        if (changedProperties.has("contactId") && this.contactId.startsWith("email:") && this.contactId.includes("<")) {
                            parsed = utils_1.parseEmail(this.contactId.substr(6));
                            this.lname = this.lname || parsed.lname;
                            this.fname = this.fname || parsed.fname;
                            this.statustext = parsed.label;
                            // Accept ONLY the email, including the name with it changes the lavatar color
                            this.contactId = "email:" + parsed.email;
                        }
                        if (!((!this.image || decodeURIComponent(this.image).match("lavatar=1")) || (this.fname || this.lname))) return [3 /*break*/, 2];
                        return [4 /*yield*/, Et2LAvatar.lavatar(this.fname, this.lname, this.contactId)];
                    case 1:
                        lavatar = _a.sent();
                        this.initials = lavatar.initials;
                        _a.label = 2;
                    case 2:
                        if (this.lname || this.fname) {
                            label = (this.egw().preference("account_display", "common") || "firstname").includes("first") || !this.lname || !this.fname ?
                                this.fname + " " + this.lname :
                                this.lname + ", " + this.fname;
                            if (label != this.statustext && !egwIsMobile()) {
                                this.statustext = label.trim();
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Et2LAvatar.prototype.updated = function (changedProperties) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var lavatar;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _super.prototype.updated.call(this, changedProperties);
                        if (!(changedProperties.has("lname") || changedProperties.has("fname") || changedProperties.has("contactId") || changedProperties.has("image"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, Et2LAvatar.lavatar(this.fname, this.lname, this.contactId)];
                    case 1:
                        lavatar = _b.sent();
                        (_a = this._baseNode) === null || _a === void 0 ? void 0 : _a.style.setProperty("--background-color", lavatar.background);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Et2LAvatar.prototype.getDetachedAttributes = function (_attrs) {
        _super.prototype.getDetachedAttributes.call(this, _attrs);
        _attrs.push("lname", "fname");
    };
    /**
     * Generate letter avatar with given data
     * @param {type} _fname
     * @param {type} _lname
     * @param {type} _id
     * @returns {string} return data url
     */
    Et2LAvatar.lavatar = function (_fname, _lname, _id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var str, getBgColor, bg, count, text, account_id_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        str = _fname + _lname + _id;
                        getBgColor = function (_str) {
                            var hash = 0;
                            for (var i = 0; i < _str.length; i++) {
                                hash = _str[i].charCodeAt(0) + hash;
                            }
                            return Et2LAvatar.LAVATAR_BG_COLORS[hash % Et2LAvatar.LAVATAR_BG_COLORS.length];
                        };
                        bg = getBgColor(str);
                        count = (_a = egw_global_1.egw.preference("avatar_display", "common")) !== null && _a !== void 0 ? _a : 0;
                        text = (_fname ? _fname[0].toUpperCase() : "") + (_lname ? _lname[0].toUpperCase() : "");
                        if (!(count > 0 && _id && _id.startsWith("account:"))) return [3 /*break*/, 2];
                        account_id_1 = _id.split(":").pop();
                        return [4 /*yield*/, (egw_global_1.egw.accountData(account_id_1, 'account_lid', true, null, null)
                                .then(function (data) { return data[account_id_1]; }))];
                    case 1:
                        text = ((_b.sent()) || text).substring(0, count);
                        _b.label = 2;
                    case 2: return [2 /*return*/, { background: bg, initials: text }];
                }
            });
        });
    };
    /**
     * background color codes
     */
    Et2LAvatar.LAVATAR_BG_COLORS = [
        '#5a8770', '#b2b7bb', '#6fa9ab', '#f5af29',
        '#0088b9', '#f18636', '#d93a37', '#a6b12e',
        '#0088b9', '#f18636', '#d93a37', '#a6b12e',
        '#5c9bbc', '#f5888d', '#9a89b5', '#407887',
        '#9a89b5', '#5a8770', '#d33f33', '#a2b01f',
        '#f0b126', '#0087bf', '#f18636', '#0087bf',
        '#b2b7bb', '#72acae', '#9c8ab4', '#5a8770',
        '#eeb424', '#407887'
    ];
    __decorate([
        property_js_1.property()
    ], Et2LAvatar.prototype, "lname", void 0);
    __decorate([
        property_js_1.property()
    ], Et2LAvatar.prototype, "fname", void 0);
    return Et2LAvatar;
}(Et2Avatar_1.Et2Avatar));
exports.Et2LAvatar = Et2LAvatar;
customElements.define("et2-lavatar", Et2LAvatar);
var templateObject_1;
