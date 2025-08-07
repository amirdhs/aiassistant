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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectAccountMixin = void 0;
exports.SelectAccountMixin = function (superclass) {
    var SelectAccount = /** @class */ (function (_super) {
        __extends(SelectAccount, _super);
        function SelectAccount() {
            var _this = _super.call(this) || this;
            /**
             * Hold on to accounts we had to fetch from the server
             * @type {any[]}
             * @protected
             */
            _this.account_options = [];
            _this.account_options = [];
            return _this;
        }
        SelectAccount.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback && _super.prototype.disconnectedCallback.call(this);
            this.account_options = [];
        };
        Object.defineProperty(SelectAccount.prototype, "value", {
            get: function () {
                return _super.prototype.value;
            },
            /**
             * If the value has an account that's not already in the list, check with the server.
             * We probably don't have all the accounts client side.  This is similar to freeEntries,
             * but a little safer because we don't allow just anything.
             *
             * @param {any} new_value
             */
            set: function (new_value) {
                var _this = this;
                _super.prototype.value = new_value;
                if (!new_value) {
                    return;
                }
                var val = Array.isArray(this.value) ? this.value : [this.value];
                if (this.isConnected) {
                    this._find_options(val);
                }
                else {
                    // If not already connected, wait until any provided select_options have been found
                    this.updateComplete.then(function () {
                        _this._find_options(val);
                        _this.requestUpdate('select_options');
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * OVerridden to do nothing, we handle it differently in _find_options()
         * @param {string} newValueElement
         * @protected
         */
        SelectAccount.prototype._missingOption = function (newValueElement) { };
        SelectAccount.prototype._find_options = function (val) {
            var _this = this;
            var _loop_1 = function (id) {
                // Don't add if it's already there
                if (this_1.select_options.findIndex(function (o) { return o.value == id; }) != -1) {
                    return "continue";
                }
                var account_name = null;
                var tempLabel = id + " ...";
                var option = { value: "" + id, label: tempLabel };
                this_1.account_options.push(option);
                if (this_1.value && (account_name = this_1.egw().link_title('api-accounts', id, false))) {
                    option.label = account_name;
                }
                else if (!account_name) {
                    // Not already cached, need to fetch it
                    this_1.egw().link_title('api-accounts', id, true).then(function (title) {
                        var _a;
                        option.label = title || '';
                        _this.requestUpdate();
                        _this.account_options.sort(_this.optionSort);
                        // Directly update if it's already there
                        var slOption = (_a = _this.select) === null || _a === void 0 ? void 0 : _a.querySelector('[value="' + id + '"]');
                        if (slOption) {
                            // Replace instead of changing the whole thing to preserve LitElement marker comments
                            slOption.textContent.replace(tempLabel, title);
                            _this.select.requestUpdate("value");
                        }
                    });
                }
            };
            var this_1 = this;
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var id = val_1[_i];
                _loop_1(id);
            }
            this.account_options.sort(this.optionSort);
        };
        Object.defineProperty(SelectAccount.prototype, "select_options", {
            get: function () {
                return __spreadArrays(new Map(__spreadArrays(this.account_options, (_super.prototype.select_options || [])).map(function (item) {
                    return [item.value, item];
                })).values()).sort(this.optionSort);
            },
            set: function (value) {
                _super.prototype.select_options = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Sort options
         * @param a
         * @param b
         * @returns {number}
         * @protected
         */
        SelectAccount.prototype.optionSort = function (a, b) {
            var _a, _b;
            // Sort accounts before groups, then by label
            var int_a = 0;
            var int_b = 0;
            if (typeof a.value === "string") {
                int_a = (_a = parseInt(a.value)) !== null && _a !== void 0 ? _a : 0;
            }
            if (typeof b.value === "string") {
                int_b = (_b = parseInt(b.value)) !== null && _b !== void 0 ? _b : 0;
            }
            if (int_a < 0 && int_b < 0 || int_a > 0 && int_b > 0) {
                return ('' + a.label).localeCompare(b.label);
            }
            // Accounts before groups
            return int_b - int_a;
        };
        return SelectAccount;
    }(superclass));
    return SelectAccount;
};
