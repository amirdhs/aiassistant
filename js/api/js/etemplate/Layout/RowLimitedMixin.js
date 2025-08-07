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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowLimitedMixin = void 0;
/**
 * Mixin to support widgets that have a set number of rows.
 * Whether that's a maximum or a fixed size, implementation is up to the widget.
 * Set rows=0 to clear.
 *
 * To implement in a webcomponent set height or max-height based on the --rows CSS variable:
 *  max-height: calc(var(--rows, 5) * 1.3rem);
 * @param {T} superclass
 * @constructor
 */
exports.RowLimitedMixin = function (superclass) {
    var RowLimit = /** @class */ (function (_super) {
        __extends(RowLimit, _super);
        function RowLimit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RowLimit, "properties", {
            get: function () {
                return __assign({}, _super.properties);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RowLimit.prototype, "rows", {
            get: function () {
                return this.style.getPropertyValue("--rows");
            },
            set: function (row_count) {
                if (isNaN(Number(row_count)) || !row_count) {
                    this.style.removeProperty("--rows");
                    this.removeAttribute("rows");
                }
                else {
                    this.style.setProperty("--rows", row_count);
                    this.setAttribute("rows", row_count);
                }
            },
            enumerable: false,
            configurable: true
        });
        return RowLimit;
    }(superclass));
    return RowLimit; // as unknown as superclass & T;
};
