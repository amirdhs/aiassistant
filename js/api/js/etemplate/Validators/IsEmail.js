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
exports.IsEmail = void 0;
var StringValidators_1 = require("./StringValidators");
var IsEmail = /** @class */ (function (_super) {
    __extends(IsEmail, _super);
    /**
     *
     * @param _allowPlaceholders true: allow valid email-addresses OR something with placeholder(s)
     */
    function IsEmail(_allowPlaceholders) {
        return _super.call(this, _allowPlaceholders ? IsEmail.EMAIL_PLACEHOLDER_PREG : IsEmail.EMAIL_PREG) || this;
    }
    /**
     * Give a message about this field being required.  Could be customised according to MessageData.
     * @param {MessageData | undefined} data
     * @returns {Promise<string>}
     */
    IsEmail.getMessage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, data.formControl.egw().lang("Invalid email") + (data.modelValue ? ' "' + data.modelValue + '"' : "")];
            });
        });
    };
    /**
     * Regexes for validating email addresses incl. email in angle-brackets eg.
     * + "Ralf Becker <rb@egroupware.org>"
     * + "Ralf Becker (EGroupware GmbH) <rb@egroupware.org>"
     * + "<rb@egroupware.org>" or "rb@egroupware.org"
     * + '"Becker, Ralf" <rb@egroupware.org>'
     * + "'Becker, Ralf' <rb@egroupware.org>"
     * but NOT:
     * - "Becker, Ralf <rb@egroupware.org>" (contains comma outside " or ' enclosed block)
     * - "Becker < Ralf <rb@egroupware.org>" (contains <    ----------- " ---------------)
     *
     * About umlaut or IDN domains: we currently only allow German umlauts in domain part!
     * We forbid all non-ascii chars in local part, as Horde does not yet support SMTPUTF8 extension (rfc6531)
     * and we get a "SMTP server does not support internationalized header data" error otherwise.
     *
     * Using \042 instead of " to NOT stall minifyer!
     *
     * Similar, but not identical, preg is in Etemplate\Widget\Url PHP class!
     * We can not use "(?<![.\s])", used to check that name-part does not end in
     * a dot or white-space. The expression is valid in recent Chrome, but fails
     * eg. in Safari 11.0 or node.js 4.8.3 and therefore grunt uglify!
     * Server-side will fail in that case because it uses the full regexp.
     */
    IsEmail.EMAIL_PREG = /^(([^\042',<][^,<]+|\042[^\042]+\042|\'[^\']+\'|"(?:[^"\\]|\\.)*")\s?<)?[^\x00-\x20()\xe2\x80\x8b<>@,;:\042\[\]\x80-\xff]+@([a-z0-9ÄÖÜäöüß](|[a-z0-9ÄÖÜäöüß_-]*[a-z0-9ÄÖÜäöüß])\.)+[a-z]{2,}>?$/i;
    /**
     * Allow everything containing at least one placeholder e.g.:
     * - "{{email}}"
     * - "{{n_fn}} <{{email}}"
     * - "{{#<custom-field-name>}}"
     * - "{{info_contact/email}}" or "{{user/#<custom-field-name}}"
     * - we do NOT check if the placeholder is implemented by addressbook or a valid custom-field name!
     * - "test" or "{test}}" are NOT valid
     */
    IsEmail.EMAIL_PLACEHOLDER_PREG = new RegExp('^(.*{{[a-z0-9_/#]+}}.*|' + IsEmail.EMAIL_PREG.source.substr(1, IsEmail.EMAIL_PREG.source.length - 2) + ')$', 'i');
    return IsEmail;
}(StringValidators_1.Pattern));
exports.IsEmail = IsEmail;
