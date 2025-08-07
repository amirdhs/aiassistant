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
exports.Et2EntryFilterHeader = void 0;
var FilterMixin_1 = require("./FilterMixin");
var Et2LinkEntry_1 = require("../../Et2Link/Et2LinkEntry");
/**
 * Filter using a selected entry
 */
var Et2EntryFilterHeader = /** @class */ (function (_super) {
    __extends(Et2EntryFilterHeader, _super);
    function Et2EntryFilterHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2EntryFilterHeader.prototype, "value", {
        /**
         * Override to always return a string appname:id (or just id) for simple (one real selection)
         * cases, parent returns an object.  If multiple are selected, or anything other than app and
         * id, the original parent value is returned.
         */
        get: function () {
            var value = _super.prototype.value;
            if (typeof value == "object" && value != null) {
                if (!value.app || !value.id) {
                    return null;
                }
                // If simple value, format it legacy string style, otherwise
                // we return full value
                if (typeof value.id == 'string') {
                    value = value.app + ":" + value.id;
                }
            }
            return value;
        },
        set: function (new_value) {
            _super.prototype.value = new_value;
        },
        enumerable: false,
        configurable: true
    });
    return Et2EntryFilterHeader;
}(FilterMixin_1.FilterMixin(Et2LinkEntry_1.Et2LinkEntry)));
exports.Et2EntryFilterHeader = Et2EntryFilterHeader;
customElements.define("et2-nextmatch-header-entry", Et2EntryFilterHeader);
