"use strict";
/**
 * EGroupware eTemplate2 - Image widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Image = void 0;
var lit_1 = require("lit");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var until_js_1 = require("lit/directives/until.js");
var unsafe_html_js_1 = require("lit/directives/unsafe-html.js");
var Et2Image = /** @class */ (function (_super) {
    __extends(Et2Image, _super);
    function Et2Image() {
        var _this = _super.call(this) || this;
        /** Et2Image has no shadow DOM, styles in etemplate2.css
        static get styles()
        {
            return [
                ...super.styles,
                css`
                    :host {
                        display: inline-block;
                    }
    
                    ::slotted(img) {
                        max-height: 100%;
                        max-width: 100%;
                    }
    
                    :host([icon]) {
                        height: 1.3rem;
                        font-size: 1.3rem !important;
                    }
                `];
        }
         */
        /**
         * The label of the image
         * Actually not used as label, but we put it as title
         */
        _this.label = "";
        /**
         * Default image
         * Image to use if src is not found
         */
        _this.defaultSrc = "";
        /**
         * Link Target
         * Link URL, empty if you don't wan't to display a link.
         */
        _this.href = "";
        /**
         * Link target
         * Link target descriptor
         */
        _this.extraLinkTarget = "_self";
        /**
         * Popup
         * widthxheight, if popup should be used, eg. 640x480
         */
        _this.extraLinkPopup = "";
        _this._handleClick = _this._handleClick.bind(_this);
        return _this;
    }
    Et2Image_1 = Et2Image;
    Object.defineProperty(Et2Image.prototype, "src", {
        get: function () {
            return this.__src;
        },
        /**
         * Image
         * Displayed image
         */
        set: function (_src) {
            var _this = this;
            this.classList.forEach(function (_class) {
                if (_class.startsWith('bi-')) {
                    _this.classList.remove(_class);
                }
            });
            this.__src = _src;
            var url = this.parse_href(_src) || this.parse_href(this.defaultSrc);
            if (!url) {
                // Hide if no valid image
                if (this._img)
                    this._img.src = '';
                return;
            }
            var bootstrap = url.match(/\/node_modules\/bootstrap-icons\/icons\/([^.]+)\.svg/);
            if (bootstrap && !this._img) {
                this.classList.add('bi-' + bootstrap[1]);
                return;
            }
            // change between bootstrap and regular img
            this.requestUpdate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Image.prototype, "width", {
        get: function () {
            var _a;
            return (_a = this.style) === null || _a === void 0 ? void 0 : _a.width;
        },
        /**
         * Width of image:
         * - either number of px (e.g. 32) or
         * - string incl. CSS unit (e.g. "32px") or
         * - even CSS functions like e.g. "calc(1rem + 2px)"
         */
        set: function (_width) {
            if (this.style) {
                this.style.width = isNaN(_width) ? _width : _width + 'px';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Image.prototype, "height", {
        get: function () {
            return this.style.height;
        },
        /**
         * Height of image:
         * - either number of px (e.g. 32) or
         * - string incl. CSS unit (e.g. "32px") or
         * - even CSS functions like e.g. "calc(1rem + 2px)"
         */
        set: function (_height) {
            if (this.style) {
                this.style.height = isNaN(_height) ? _height : _height + 'px';
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2Image.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
    };
    Et2Image.prototype.render = function () {
        var url = this.parse_href(this.src) || this.parse_href(this.defaultSrc);
        if (!url) {
            // Hide if no valid image
            return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
        }
        // set title on et2-image for both bootstrap-image via css-class and embedded img tag
        this.title = this.statustext || this.label || "";
        var bootstrap = url.match(/\/node_modules\/bootstrap-icons\/icons\/([^.]+)\.svg/);
        if (bootstrap) {
            this.classList.add('bi-' + bootstrap[1]);
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
        }
        // our own svg images
        // We have svg images prefixed "bi-". These are used like bootstrap font icons.
        // We inline them to be able to control there color etc. directly via css
        //only call unsafeHtml when we are inside /egroupware/
        var ourSvg = url.startsWith(this.egw().webserverUrl + '/'); //checks if source is trusted
        if (ourSvg && url.match(/\/bi-.*\.svg/)) {
            var svg = fetch(url)
                .then(function (res) { return res.text()
                .then(function (text) { return unsafe_html_js_1.unsafeHTML(text); }); });
            return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                ", "\n            "], ["\n                ", "\n            "])), until_js_1.until(svg, lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<span>...</span>"], ["<span>...</span>"])))));
        }
        // fallback case (no svg, web source)
        return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            <img ", "\n                 src=\"", "\"\n                 alt=\"", "\"\n\t\t\t\t style=\"", "\"\n                 part=\"image\"\n                 loading=\"lazy\"\n            >"], ["\n            <img ", "\n                 src=\"", "\"\n                 alt=\"", "\"\n\t\t\t\t style=\"", "\"\n                 part=\"image\"\n                 loading=\"lazy\"\n            >"])), this.id ? lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["id=\"", "\""], ["id=\"", "\""])), this.id) : '', url, this.label || this.statustext, this.height ? 'max-height: 100%; width: auto' : 'max-width: 100%; height: auto');
    };
    /**
     * Puts the rendered content / img-tag in light DOM
     * @link https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
     */
    Et2Image.prototype.createRenderRoot = function () {
        return this;
    };
    Et2Image.prototype.parse_href = function (img_href) {
        var _a;
        img_href = img_href || '';
        // allow url's too
        if (img_href[0] == '/' || img_href.substr(0, 4) == 'http' ||
            img_href.substr(0, 5) == 'data:' ||
            img_href.substr(0, 5) == 'blob:') {
            return img_href;
        }
        var src = this.egw() && typeof this.egw().image == "function" ? (_a = this.egw()) === null || _a === void 0 ? void 0 : _a.image(img_href) : "";
        if (src) {
            return src;
        }
        return "";
    };
    Et2Image.prototype._handleClick = function (_ev) {
        if (this.href) {
            this.egw().open_link(this.href, this.extraLinkTarget, this.extraLinkPopup);
        }
        else {
            return _super.prototype._handleClick.call(this, _ev);
        }
    };
    Object.defineProperty(Et2Image.prototype, "_img", {
        get: function () {
            return this.querySelector('img');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Handle changes that have to happen based on changes to properties
     *
     */
    Et2Image.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        // if there's an href or onclick, make it look clickable
        if (changedProperties.has("href") || typeof this.onclick !== "undefined") {
            this.classList.toggle("et2_clickable", this.href || typeof this.onclick !== "undefined");
        }
        for (var changedPropertiesKey in changedProperties) {
            if (Et2Image_1.getPropertyOptions()[changedPropertiesKey] &&
                !(changedPropertiesKey === 'label' || changedPropertiesKey === 'statustext')) {
                this._img[changedPropertiesKey] = this[changedPropertiesKey];
            }
        }
    };
    Et2Image.prototype.transformAttributes = function (_attrs) {
        _super.prototype.transformAttributes.call(this, _attrs);
        // Expand src with additional stuff
        // This should go away, since we're not checking for $ or @
        if (typeof _attrs["src"] != "undefined") {
            var manager = this.getArrayMgr("content");
            if (manager && _attrs["src"]) {
                var src = manager.getEntry(_attrs["src"], false, true);
                if (typeof src != "undefined" && src !== null) {
                    if (typeof src == "object") {
                        this.src = this.egw().link('/index.php', src);
                    }
                    else {
                        this.src = src;
                    }
                }
            }
        }
    };
    /**
     * Code for implementing et2_IDetachedDOM
     *
     * Individual widgets are detected and handled by the grid, but the interface is needed for this to happen
     *
     * @param {array} _attrs array to add further attributes to
     */
    Et2Image.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("src", "label", "href", "statustext");
    };
    Et2Image.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2Image.prototype.setDetachedAttributes = function (_nodes, _values) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    var Et2Image_1;
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "label", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "src", null);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "defaultSrc", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "href", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "extraLinkTarget", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "extraLinkPopup", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "width", null);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Image.prototype, "height", null);
    Et2Image = Et2Image_1 = __decorate([
        custom_element_js_1.customElement("et2-image")
    ], Et2Image);
    return Et2Image;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2Image = Et2Image;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
