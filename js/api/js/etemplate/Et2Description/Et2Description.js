"use strict";
/**
 * EGroupware eTemplate2 - Description WebComponent
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
exports.Et2Label = exports.Et2Description = void 0;
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var lit_1 = require("lit");
var ActivateLinksDirective_1 = require("../ActivateLinksDirective");
var et2_core_common_1 = require("../et2_core_common");
var Et2Description = /** @class */ (function (_super) {
    __extends(Et2Description, _super);
    function Et2Description() {
        var _this = _super.call(this) || this;
        _this._value = "";
        _this._forTarget = null;
        // Initialize properties
        _this.activateLinks = false;
        _this.extraLinkPopup = "";
        _this.extraLinkTarget = "_browser";
        // Don't initialize this to avoid href(unknown) when rendered
        //this.href = "";
        _this.value = "";
        _this._handleClick = _this._handleClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Description, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t* {\n\t\t\t\twhite-space: pre-wrap;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\tdisplay:flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: flex-start;\n\t\t\t\tflex: 0 1 auto !important;\n\t\t\t}\n\n\t\t\t\tlabel {\n\t\t\t\t\tpadding-inline-end: 1ex;\n\t\t\t\t}\n\n\t\t\t\t.split-label label {\n\t\t\t\t\tdisplay: contents;\n\t\t\t\t}\n\t\t\t::slotted(a) {\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: var(--sl-color-primary-700);\n\t\t\t\ttext-decoration: none;\n\t\t\t  \tdisplay: inherit;\n\t\t\t}"], ["\n\t\t\t* {\n\t\t\t\twhite-space: pre-wrap;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\tdisplay:flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: flex-start;\n\t\t\t\tflex: 0 1 auto !important;\n\t\t\t}\n\n\t\t\t\tlabel {\n\t\t\t\t\tpadding-inline-end: 1ex;\n\t\t\t\t}\n\n\t\t\t\t.split-label label {\n\t\t\t\t\tdisplay: contents;\n\t\t\t\t}\n\t\t\t::slotted(a) {\n\t\t\t\tcursor: pointer;\n\t\t\t\tcolor: var(--sl-color-primary-700);\n\t\t\t\ttext-decoration: none;\n\t\t\t  \tdisplay: inherit;\n\t\t\t}"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Description, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Scan the value, and if there are any links (URL, mailto:) then wrap them in a clickable
                 * <a/> tag
                 */
                activateLinks: {
                    type: Boolean,
                    reflect: true
                }, 
                /**
                 * Extra link target
                 * Goes with href.  If provided, that's the target for opening the link.
                 */
                extraLinkTarget: {
                    type: String,
                    reflect: true
                }, 
                /**
                 * widthxheight, if popup should be used, eg. 640x480
                 */
                extraLinkPopup: {
                    type: String,
                    reflect: true
                }, 
                /**
                 * Link URL
                 * If provided, will be clickable and open this URL
                 */
                href: {
                    type: String,
                    reflect: true
                }, value: {
                    type: String,
                    noAccessor: true
                }, for: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Description.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.for) {
            this._forTarget = this.getRoot().getWidgetById(this.for);
            if (this._forTarget) {
                this._forTarget.ariaLabel = this.value;
            }
        }
        // Put content directly in DOM
        if (this.value) {
            lit_1.render(this._renderContent(), this);
        }
    };
    Et2Description.prototype.set_value = function (value) {
        this.value = value;
    };
    Object.defineProperty(Et2Description.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (_value) {
            var oldValue = this.value;
            if (!_value) {
                _value = "";
            }
            // Do we do this here, or in transformAttributes()?
            if (_value && !this.noLang) {
                _value = this.egw().lang(_value);
            }
            if (_value && (_value + "").indexOf('%s') != -1) {
                _value = _value.replace(/%s/g, _value);
            }
            this._value = _value;
            this.requestUpdate('value', oldValue);
            if (this._forTarget) {
                this._forTarget.ariaLabel = this._value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2Description.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        // Due to how we do the rendering into the light DOM (not sure it's right) we need this after
        // value change or it won't actually show up
        if ((changedProperties.has("value") || changedProperties.has("href") || changedProperties.has("activateLinks")) && this.parentNode) {
            lit_1.render(this._renderContent(), this);
        }
    };
    Et2Description.prototype._renderContent = function () {
        var render = null;
        // Add hover action button (Edit)
        if (this.hover_action) {
            // TODO
        }
        // If there's a link, wrap that
        if (this.href && this.value) {
            render = this.wrapLink(this.href, this.value);
        }
        // If we want to activate links inside, do that
        else if (this.activateLinks && this.value) {
            render = this.getActivatedValue(this.value, this.href ? this.extraLinkTarget : '_blank');
        }
        // Just do the value
        else {
            render = lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), this.value);
        }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<span part=\"content\" class=\"description--content\">", "</span>"], ["<span part=\"content\" class=\"description--content\">", "</span>"])), render);
    };
    Et2Description.prototype.render = function () {
        var label = this.label;
        var after;
        if (label) {
            // Split the label at the "%s"
            var parts = et2_core_common_1.et2_csvSplit(label, 2, "%s");
            if (parts.length > 1) {
                after = lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<label>", "</label>"], ["<label>", "</label>"])), parts[1]);
                label = parts[0];
            }
        }
        // Turn off IDE reformatting, or it will add an extra line break into the template
        // @formatter:off
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<slot part=\"form-control-label\" name=\"label\" class=", "><label>", "</label></slot><slot part=\"form-control-value\"></slot>", ""], ["<slot part=\"form-control-label\" name=\"label\" class=", "><label>", "</label></slot><slot part=\"form-control-value\"></slot>", ""])), after ? "split-label" : "", label, after);
        // @formatter:on
    };
    Et2Description.prototype.firstUpdated = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.removeEventListener('click.extra_link', this._handleClick);
                if (this.extraLinkPopup || this.mime) {
                    // Add click listener
                    this.addEventListener('click.extra_link', this._handleClick);
                }
                return [2 /*return*/];
            });
        });
    };
    Et2Description.prototype._handleClick = function (_ev) {
        var _a;
        // call super to get the onclick handling running
        if (_super.prototype._handleClick.call(this, _ev) && !_ev.defaultPrevented && ((_a = this._forTarget) === null || _a === void 0 ? void 0 : _a.focus)) {
            this._forTarget.focus();
            _ev.preventDefault();
            return false;
        }
        if (this.mimeData || this.href) {
            egw(window).open_link(this.mimeData || this.href, this.extraLinkTarget, this.extraLinkPopup, null, null, this.mime);
            _ev.preventDefault();
            return false;
        }
        else if (_ev.target.nodeName !== "A") {
            // If it's not an activated link, just stop
            _ev.preventDefault();
            return false;
        }
        // Let links (present if activateLinks = true) do their thing normally
    };
    Et2Description.prototype.wrapLink = function (href, value) {
        var _a;
        if (href.indexOf('/') == -1 && href.split('.').length >= 3 &&
            !(href.indexOf('mailto:') != -1 || href.indexOf('://') != -1 || href.indexOf('javascript:') != -1)) {
            href = "/index.php?menuaction=" + href;
        }
        if (href.charAt(0) == '/') // link relative to eGW
         {
            href = egw.link(href);
        }
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["<a href=\"", "\" target=\"", "\">", "</a>"], ["<a href=\"", "\" target=\"", "\">", "</a>"])), href, (_a = this.target) !== null && _a !== void 0 ? _a : "_blank", value);
    };
    Et2Description.prototype.getActivatedValue = function (value, target) {
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["", ""], ["", ""])), ActivateLinksDirective_1.activateLinks(value, target));
    };
    Et2Description.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "label", "value", "class", "href", "statustext");
    };
    Et2Description.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2Description.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    Et2Description.prototype.loadFromXML = function () {
        // nope
    };
    return Et2Description;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2Description = Et2Description;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-description", Et2Description);
var Et2Label = /** @class */ (function (_super) {
    __extends(Et2Label, _super);
    function Et2Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Et2Label;
}(Et2Description));
exports.Et2Label = Et2Label;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-label", Et2Label);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
