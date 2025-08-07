"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    /**
     *
     * @param {?} [param]
     * @param {Object.<string,?>} [config]
     */
    function Validator(param, config) {
        /** @type {?} */
        this.__param = param;
        /** @type {Object.<string,?>} */
        this.__config = config || {};
        this.type = (config && config.type) || 'error'; // Default type supported by ValidateMixin
    }
    Object.defineProperty(Validator, "validatorName", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @desc The function that returns a Boolean
     * @param {?} [modelValue]
     * @param {?} [param]
     * @param {{}} [config]
     * @returns {Boolean|Promise<Boolean>}
     */
    // eslint-disable-next-line no-unused-vars, class-methods-use-this
    Validator.prototype.execute = function (modelValue, param, config) {
        var ctor = /** @type {typeof Validator} */ (this.constructor);
        if (!ctor.validatorName) {
            throw new Error('A validator needs to have a name! Please set it via "static get validatorName() { return \'IsCat\'; }"');
        }
        return true;
    };
    Object.defineProperty(Validator.prototype, "param", {
        get: function () {
            return this.__param;
        },
        set: function (p) {
            this.__param = p;
            if (this.dispatchEvent) {
                this.dispatchEvent(new Event('param-changed'));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "config", {
        get: function () {
            return this.__config;
        },
        set: function (c) {
            this.__config = c;
            if (this.dispatchEvent) {
                this.dispatchEvent(new Event('config-changed'));
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @overridable
     * @param {MessageData} [data]
     * @returns {Promise<string|Node>}
     * @protected
     */
    Validator.prototype._getMessage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var ctor, composedData;
            return __generator(this, function (_a) {
                ctor = (this.constructor);
                composedData = __assign({ name: ctor.validatorName, type: this.type, params: this.param, config: this.config }, data);
                if (this.config.getMessage) {
                    if (typeof this.config.getMessage === 'function') {
                        return [2 /*return*/, this.config.getMessage(composedData)];
                    }
                    throw new Error("You must provide a value for getMessage of type 'function', you provided a value of type: " + typeof this
                        .config.getMessage);
                }
                return [2 /*return*/, ctor.getMessage(composedData)];
            });
        });
    };
    return Validator;
}());
exports.Validator = Validator;
