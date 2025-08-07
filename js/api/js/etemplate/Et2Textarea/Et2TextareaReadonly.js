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
exports.Et2TextareaReadonly = void 0;
var Et2Description_1 = require("../Et2Description/Et2Description");
/**
 * A readonly textbox is just a description.  You should use that instead, but here it is.
 */
var Et2TextareaReadonly = /** @class */ (function (_super) {
    __extends(Et2TextareaReadonly, _super);
    function Et2TextareaReadonly() {
        var _this = _super.call(this) || this;
        _this.noLang = true; // never translation r/o textareas
        return _this;
    }
    return Et2TextareaReadonly;
}(Et2Description_1.Et2Description));
exports.Et2TextareaReadonly = Et2TextareaReadonly;
// We can't bind the same class to a different tag
// @ts-ignore TypeScript is not recognizing that Et2Textbox is a LitElement
customElements.define("et2-textarea_ro", Et2TextareaReadonly);
