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
exports.FilterMixin = void 0;
var egw_global_1 = require("../../../jsapi/egw_global");
/**
 * Base class for things that do filter type behaviour in nextmatch header
 * Separated to keep things a little simpler.
 *
 * Currently I assume we're extending an Et2Select, so changes may need to be made for better abstraction
 */
exports.FilterMixin = function (superclass) { return /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Override to add change handler
     *
     */
    class_1.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // Make sure there's an option for all
        if (!this.emptyLabel && Array.isArray(this.select_options) && !this.select_options.find(function (o) { return o.value == ""; })) {
            this.emptyLabel = this.label ? this.label : egw_global_1.egw.lang("All");
        }
        this.handleChange = this.handleChange.bind(this);
        // Bind late, maybe that helps early change triggers?
        this.updateComplete.then(function () {
            _this.addEventListener("change", _this.handleChange);
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("change", this.handleChange);
    };
    class_1.prototype.handleChange = function (event) {
        if (typeof this.nextmatch == 'undefined') {
            // Not fully set up yet
            return;
        }
        var col_filter = {};
        col_filter[this.id] = this.value;
        this.nextmatch.applyFilters({ col_filter: col_filter });
    };
    /**
     * Set nextmatch is the function which has to be implemented for the
     * et2_INextmatchHeader interface.
     *
     * @param {et2_nextmatch} _nextmatch
     */
    class_1.prototype.setNextmatch = function (_nextmatch) {
        this.nextmatch = _nextmatch;
        // Set current filter value from nextmatch settings
        if (this.nextmatch.activeFilters.col_filter && this.nextmatch.activeFilters.col_filter[this.id]) {
            this.set_value(this.nextmatch.activeFilters.col_filter[this.id]);
        }
    };
    return class_1;
}(superclass)); };
