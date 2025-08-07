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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2ImageExpose = void 0;
var ExposeMixin_1 = require("./ExposeMixin");
var Et2Image_1 = require("../Et2Image/Et2Image");
/**
 * Shows an image and if you click on it it gets bigger
 *
 * Set src property for the thumbnail / small image
 * Set href property to the URL of the full / large image
 */
//@ts-ignore Something not right with types & inheritance according to TypeScript
var Et2ImageExpose = /** @class */ (function (_super) {
    __extends(Et2ImageExpose, _super);
    function Et2ImageExpose() {
        return _super.call(this) || this;
    }
    Et2ImageExpose.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
    };
    Object.defineProperty(Et2ImageExpose.prototype, "exposeValue", {
        /**
         * Used to determine if this widget is exposable.  Images always are, even if we don't actually
         * know the mime type.
         *
         * @returns {ExposeValue}
         */
        get: function () {
            return {
                mime: "image/*",
                path: this.href,
                download_url: this.href,
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get the info needed to show this image as slide(s)
     */
    Et2ImageExpose.prototype.getMedia = function (_value) {
        var media = _super.prototype.getMedia.call(this, _value);
        media[0].title = this.label;
        media[0].thumbnail = this.src;
        return media;
    };
    return Et2ImageExpose;
}(ExposeMixin_1.ExposeMixin(Et2Image_1.Et2Image)));
exports.Et2ImageExpose = Et2ImageExpose;
customElements.define("et2-image-expose", Et2ImageExpose);
