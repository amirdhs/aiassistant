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
exports.Pattern = exports.MinMaxLength = exports.MaxLength = exports.MinLength = exports.EqualsLength = exports.IsString = void 0;
var Validator_1 = require("./Validator");
/**
 * @param {?} value
 */
var isString = function (value) { return typeof value === 'string'; };
var IsString = /** @class */ (function (_super) {
    __extends(IsString, _super);
    function IsString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IsString, "validatorName", {
        get: function () {
            return 'IsString';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {?} value
     */
    // eslint-disable-next-line class-methods-use-this
    IsString.prototype.execute = function (value) {
        var hasError = false;
        if (!isString(value)) {
            hasError = true;
        }
        return hasError;
    };
    return IsString;
}(Validator_1.Validator));
exports.IsString = IsString;
var EqualsLength = /** @class */ (function (_super) {
    __extends(EqualsLength, _super);
    function EqualsLength() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EqualsLength, "validatorName", {
        get: function () {
            return 'EqualsLength';
        },
        enumerable: false,
        configurable: true
    });
    EqualsLength.prototype.execute = function (value, length) {
        if (length === void 0) { length = this.param; }
        var hasError = false;
        if (!isString(value) || value.length !== length) {
            hasError = true;
        }
        return hasError;
    };
    return EqualsLength;
}(Validator_1.Validator));
exports.EqualsLength = EqualsLength;
var MinLength = /** @class */ (function (_super) {
    __extends(MinLength, _super);
    function MinLength() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MinLength, "validatorName", {
        get: function () {
            return 'MinLength';
        },
        enumerable: false,
        configurable: true
    });
    MinLength.prototype.execute = function (value, min) {
        if (min === void 0) { min = this.param; }
        var hasError = false;
        if (!isString(value) || value.length < min) {
            hasError = true;
        }
        return hasError;
    };
    return MinLength;
}(Validator_1.Validator));
exports.MinLength = MinLength;
var MaxLength = /** @class */ (function (_super) {
    __extends(MaxLength, _super);
    function MaxLength() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MaxLength, "validatorName", {
        get: function () {
            return 'MaxLength';
        },
        enumerable: false,
        configurable: true
    });
    MaxLength.prototype.execute = function (value, max) {
        if (max === void 0) { max = this.param; }
        var hasError = false;
        if (!isString(value) || value.length > max) {
            hasError = true;
        }
        return hasError;
    };
    return MaxLength;
}(Validator_1.Validator));
exports.MaxLength = MaxLength;
var MinMaxLength = /** @class */ (function (_super) {
    __extends(MinMaxLength, _super);
    function MinMaxLength() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MinMaxLength, "validatorName", {
        get: function () {
            return 'MinMaxLength';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {?} value
     */
    MinMaxLength.prototype.execute = function (value, _a) {
        var _b = _a === void 0 ? this.param : _a, _c = _b.min, min = _c === void 0 ? 0 : _c, _d = _b.max, max = _d === void 0 ? 0 : _d;
        var hasError = false;
        if (!isString(value) || value.length < min || value.length > max) {
            hasError = true;
        }
        return hasError;
    };
    return MinMaxLength;
}(Validator_1.Validator));
exports.MinMaxLength = MinMaxLength;
/**
 * @param {?} value
 * @param {RegExp} pattern
 */
var hasPattern = function (value, pattern) { return pattern.test(value); };
var Pattern = /** @class */ (function (_super) {
    __extends(Pattern, _super);
    function Pattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Pattern, "validatorName", {
        get: function () {
            return 'Pattern';
        },
        enumerable: false,
        configurable: true
    });
    Pattern.prototype.execute = function (value, pattern) {
        if (pattern === void 0) { pattern = this.param; }
        if (!(pattern instanceof RegExp)) {
            throw new Error('Psst... Pattern validator expects RegExp object as parameter e.g, new Pattern(/#LionRocks/) or new Pattern(RegExp("#LionRocks")');
        }
        var hasError = false;
        if (!isString(value) || !hasPattern(value, pattern)) {
            hasError = true;
        }
        return hasError;
    };
    return Pattern;
}(Validator_1.Validator));
exports.Pattern = Pattern;
