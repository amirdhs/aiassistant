"use strict";
/**
 * EGroupware eTemplate2 - Readonly select WebComponent
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.Et2SelectLangReadonly = exports.Et2SelectYearReadonly = exports.Et2SelectTimezoneReadonly = exports.Et2SelectStateReadonly = exports.Et2SelectPriorityReadonly = exports.Et2SelectNumberReadonly = exports.Et2SelectMonthReadonly = exports.Et2SelectHourReadonly = exports.Et2SelectDayOfWeekReadonly = exports.Et2SelectDayReadonly = exports.Et2SelectCountryReadonly = exports.Et2SelectPercentReadonly = exports.Et2SelectCategoryReadonly = exports.Et2SelectBoolReadonly = exports.Et2SelectBitwiseReadonly = exports.Et2SelectAppReadonly = exports.Et2SelectAccountReadonly = exports.Et2SelectReadonly = void 0;
var lit_1 = require("lit");
var repeat_js_1 = require("lit/directives/repeat.js");
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var StaticOptions_1 = require("../StaticOptions");
var FindSelectOptions_1 = require("../FindSelectOptions");
var SelectAccountMixin_1 = require("../SelectAccountMixin");
var property_js_1 = require("lit/decorators/property.js");
/**
 * This is a stripped-down read-only widget used in nextmatch
 * (and other read-only usages)
 */
var Et2SelectReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectReadonly, _super);
    function Et2SelectReadonly() {
        var _this = _super.call(this) || this;
        _this.__fetchComplete = null;
        _this.type = "";
        _this.__select_options = [];
        _this.__value = [];
        return _this;
    }
    Object.defineProperty(Et2SelectReadonly.prototype, "emptyLabel", {
        get: function () {
            return this.__emptyLabel;
        },
        set: function (_label) {
            this.__emptyLabel = _label;
            this.select_options = this.__select_options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2SelectReadonly, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nul {\n    margin: 0px;\n    padding: 0px;\n    display: inline-block;\n}\n\nli {\n    text-decoration: none;\n    list-style-image: none;\n    list-style-type: none;\n}\n\t\t\t"], ["\nul {\n    margin: 0px;\n    padding: 0px;\n    display: inline-block;\n}\n\nli {\n    text-decoration: none;\n    list-style-image: none;\n    list-style-type: none;\n}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2SelectReadonly, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { value: String, select_options: { type: Array }, searchUrl: String // Used for options from file
             });
        },
        enumerable: false,
        configurable: true
    });
    Et2SelectReadonly.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.__fetchComplete) return [3 /*break*/, 3];
                        return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.__fetchComplete];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 3: return [2 /*return*/, _super.prototype.getUpdateComplete.call(this)];
                }
            });
        });
    };
    Et2SelectReadonly.prototype.find_select_options = function (_attrs) {
        var _this = this;
        var sel_options = FindSelectOptions_1.find_select_options(this, _attrs['select_options']);
        if (sel_options.length > 0) {
            this.select_options = sel_options;
        }
        // Cache options from file
        if (this.searchUrl && this.searchUrl.includes(".json") && this.__fetchComplete == null) {
            this.__fetchComplete = StaticOptions_1.StaticOptions.cached_from_file(this, this.searchUrl)
                .then(function (options) {
                _this.select_options = options;
                _this.requestUpdate();
            });
        }
    };
    Et2SelectReadonly.prototype.transformAttributes = function (_attrs) {
        /*
        TODO: Check with more / different nextmatch data to see if this becomes faster.
        Currently it's faster for the nextmatch to re-do transformAttributes() and find_select_options()
         on every row than it is to use widget.clone()

        // If there's no parent, there's a good chance we're in a nextmatch row so skip the transform
        if(!this.getParent())
        {
            return;
        }
         */
        _super.prototype.transformAttributes.call(this, _attrs);
        this.find_select_options(_attrs);
    };
    /**
     * @deprecated assign to value
     * @param value
     */
    Et2SelectReadonly.prototype.set_value = function (value) {
        this.value = value;
    };
    /**
     * @deprecated use value
     * @param value
     */
    Et2SelectReadonly.prototype.get_value = function (value) {
        return this.value;
    };
    /**
     * @deprecated use value
     * @param value
     */
    Et2SelectReadonly.prototype.getValue = function (value) {
        return this.value;
    };
    Et2SelectReadonly.prototype.getValueAsArray = function () {
        return (Array.isArray(this.value) ? this.value : [this.value]);
    };
    Object.defineProperty(Et2SelectReadonly.prototype, "value", {
        get: function () {
            return this.__value;
        },
        set: function (new_value) {
            // Split anything that is still a CSV
            if (typeof new_value == "string" && new_value.indexOf(",") != -1) {
                new_value = new_value.split(",");
            }
            // Wrap any single value into an array for consistent rendering
            if (typeof new_value == "string" || typeof new_value == "number") {
                new_value = ["" + new_value];
            }
            var oldValue = this.__value;
            this.__value = new_value;
            this.requestUpdate("value", oldValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2SelectReadonly.prototype, "select_options", {
        get: function () {
            return this.__select_options;
        },
        /**
         * Set the select options
         *
         * @param {SelectOption[]} new_options
         */
        set: function (new_options) {
            if (!Array.isArray(new_options)) {
                var fixed_options = [];
                for (var key in new_options) {
                    fixed_options.push({ value: key, label: new_options[key] });
                }
                console.warn(this.id + " passed a key => value map instead of array");
                this.select_options = fixed_options;
                return;
            }
            this.__select_options = new_options;
            if (this.emptyLabel) {
                this.__select_options.unshift({ value: '', label: this.emptyLabel });
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Flatten hierarchical option with children like e.g. categories for use with Et2SelectReadonly
     *
     * @param _options
     * @protected
     */
    Et2SelectReadonly.prototype.flattenOptions = function (_options) {
        var _this = this;
        var options = [];
        _options.forEach(function (opt) {
            options.push(opt);
            if (opt.children && opt.children.length > 0) {
                options.push.apply(options, _this.flattenOptions(opt.children));
            }
        });
        return options;
    };
    /**
     * Set the select options
     *
     * @deprecated assign to select_options
     * @param new_options
     */
    Et2SelectReadonly.prototype.set_select_options = function (new_options) {
        this.select_options = new_options;
    };
    Object.defineProperty(Et2SelectReadonly.prototype, "innerText", {
        get: function () {
            var _this = this;
            return typeof this.value == "string" ? this.select_options.find(function (o) { return o.value == _this.value; }) :
                this.select_options
                    .filter(function (o) { return _this.value.includes("" + o.value); })
                    .map(function (o) { return o.label; })
                    .join(", ");
        },
        enumerable: false,
        configurable: true
    });
    Et2SelectReadonly.prototype.render = function () {
        var _this = this;
        var value = this.getValueAsArray();
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <label part=\"label\">", "\n            <ul>\n                ", "\n            </ul>\n            </label>\n\t\t"], ["\n            <label part=\"label\">", "\n            <ul>\n                ",
            "\n            </ul>\n            </label>\n\t\t"])), this.label, repeat_js_1.repeat(this.getValueAsArray(), function (val) { return val; }, function (val) {
            var option = _this.select_options.find(function (option) { return option.value == val; });
            if (!option) {
                return "";
            }
            return _this._readonlyRender(option);
        }));
    };
    Et2SelectReadonly.prototype._readonlyRender = function (option) {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <li>", "</li>\n\t\t"], ["\n            <li>", "</li>\n\t\t"])), this.noLang ? option.label : this.egw().lang(option.label + ""));
    };
    Et2SelectReadonly.prototype.getDetachedAttributes = function (attrs) {
        attrs.push("id", "value", "class", "statustext", "emptyLabel");
    };
    Et2SelectReadonly.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2SelectReadonly.prototype.setDetachedAttributes = function (_nodes, _values, _data) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    Et2SelectReadonly.prototype.loadFromXML = function () {
        // nope
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2SelectReadonly.prototype, "emptyLabel", null);
    return Et2SelectReadonly;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2SelectReadonly = Et2SelectReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select_ro", Et2SelectReadonly);
var Et2SelectAccountReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectAccountReadonly, _super);
    function Et2SelectAccountReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Et2SelectAccountReadonly;
}(SelectAccountMixin_1.SelectAccountMixin(Et2SelectReadonly)));
exports.Et2SelectAccountReadonly = Et2SelectAccountReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-account_ro", Et2SelectAccountReadonly);
var Et2SelectAppReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectAppReadonly, _super);
    function Et2SelectAppReadonly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Which apps to show: 'user'=apps of current user, 'enabled', 'installed' (default), 'all' = not installed ones too, 'all+setup'
         */
        _this.apps = 'installed';
        return _this;
    }
    Et2SelectAppReadonly.prototype.find_select_options = function (_attrs) {
        var _this = this;
        this.fetchComplete = StaticOptions_1.StaticOptions.app(this, _attrs).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    __decorate([
        property_js_1.property({ type: String })
    ], Et2SelectAppReadonly.prototype, "apps", void 0);
    return Et2SelectAppReadonly;
}(StaticOptions_1.Et2StaticSelectMixin(Et2SelectReadonly)));
exports.Et2SelectAppReadonly = Et2SelectAppReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-app_ro", Et2SelectAppReadonly);
var Et2SelectBitwiseReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectBitwiseReadonly, _super);
    function Et2SelectBitwiseReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Et2SelectBitwiseReadonly;
}(Et2SelectReadonly));
exports.Et2SelectBitwiseReadonly = Et2SelectBitwiseReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-bitwise_ro", Et2SelectBitwiseReadonly);
var Et2SelectBoolReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectBoolReadonly, _super);
    function Et2SelectBoolReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectBoolReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.bool(this);
    };
    return Et2SelectBoolReadonly;
}(StaticOptions_1.Et2StaticSelectMixin(Et2SelectReadonly)));
exports.Et2SelectBoolReadonly = Et2SelectBoolReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-bool_ro", Et2SelectBoolReadonly);
var Et2SelectCategoryReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectCategoryReadonly, _super);
    function Et2SelectCategoryReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectCategoryReadonly.prototype.find_select_options = function (_attrs) {
        var _this = this;
        // Need to do this in find_select_options so attrs can be used to get proper options
        StaticOptions_1.StaticOptions.cat(this).then(function (_options) {
            // need to flatten hierarchical categories (with children) for use in Et2SelectReadonly
            _this.select_options = _this.flattenOptions(_options);
            // on first load we have the value before the options arrive --> need to request an update
            if (_this.value && (!Array.isArray(_this.value) || _this.value.length)) {
                _this.requestUpdate('value');
            }
        });
    };
    return Et2SelectCategoryReadonly;
}(Et2SelectReadonly));
exports.Et2SelectCategoryReadonly = Et2SelectCategoryReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-cat_ro", Et2SelectCategoryReadonly);
var Et2SelectPercentReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectPercentReadonly, _super);
    function Et2SelectPercentReadonly() {
        var _this = _super.apply(this, arguments) || this;
        _this.select_options = StaticOptions_1.StaticOptions.percent(_this);
        return _this;
    }
    return Et2SelectPercentReadonly;
}(Et2SelectReadonly));
exports.Et2SelectPercentReadonly = Et2SelectPercentReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-percent_ro", Et2SelectPercentReadonly);
var Et2SelectCountryReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectCountryReadonly, _super);
    function Et2SelectCountryReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectCountryReadonly.prototype.find_select_options = function (_attrs) {
        var _this = this;
        this.fetchComplete = StaticOptions_1.StaticOptions.country(this, _attrs, true)
            .then(function (options) { _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options)); });
    };
    return Et2SelectCountryReadonly;
}(StaticOptions_1.Et2StaticSelectMixin(Et2SelectReadonly)));
exports.Et2SelectCountryReadonly = Et2SelectCountryReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-country_ro", Et2SelectCountryReadonly);
var Et2SelectDayReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectDayReadonly, _super);
    function Et2SelectDayReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectDayReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.day(this, { other: this.other || [] });
    };
    return Et2SelectDayReadonly;
}(Et2SelectReadonly));
exports.Et2SelectDayReadonly = Et2SelectDayReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-day_ro", Et2SelectDayReadonly);
var Et2SelectDayOfWeekReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectDayOfWeekReadonly, _super);
    function Et2SelectDayOfWeekReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectDayOfWeekReadonly.prototype.find_select_options = function (_attrs) {
        var _this = this;
        // Wait for connected instead of constructor because attributes make a difference in
        // which options are offered
        this.fetchComplete = StaticOptions_1.StaticOptions.dow(this, { other: this.other || [] }).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    Et2SelectDayOfWeekReadonly.prototype.getValueAsArray = function () {
        if (Array.isArray(this.value)) {
            return this.value;
        }
        var expanded_value = [];
        var int_value = parseInt(this.value);
        var options = this.select_options;
        for (var index in options) {
            var right = parseInt(options[index].value);
            if ((int_value & right) == right) {
                expanded_value.push("" + right);
            }
        }
        return expanded_value;
    };
    return Et2SelectDayOfWeekReadonly;
}(StaticOptions_1.Et2StaticSelectMixin(Et2SelectReadonly)));
exports.Et2SelectDayOfWeekReadonly = Et2SelectDayOfWeekReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-dow_ro", Et2SelectDayOfWeekReadonly);
var Et2SelectHourReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectHourReadonly, _super);
    function Et2SelectHourReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectHourReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.hour(this, { other: this.other || [] });
    };
    return Et2SelectHourReadonly;
}(Et2SelectReadonly));
exports.Et2SelectHourReadonly = Et2SelectHourReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-hour_ro", Et2SelectHourReadonly);
var Et2SelectMonthReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectMonthReadonly, _super);
    function Et2SelectMonthReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectMonthReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.month(this);
    };
    return Et2SelectMonthReadonly;
}(Et2SelectReadonly));
exports.Et2SelectMonthReadonly = Et2SelectMonthReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-month_ro", Et2SelectMonthReadonly);
var Et2SelectNumberReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectNumberReadonly, _super);
    function Et2SelectNumberReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectNumberReadonly.prototype.find_select_options = function (_attrs) {
        this._static_options = StaticOptions_1.StaticOptions.number(this, _attrs);
    };
    return Et2SelectNumberReadonly;
}(StaticOptions_1.Et2StaticSelectMixin(Et2SelectReadonly)));
exports.Et2SelectNumberReadonly = Et2SelectNumberReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-number_ro", Et2SelectNumberReadonly);
var Et2SelectPriorityReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectPriorityReadonly, _super);
    function Et2SelectPriorityReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectPriorityReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.priority(this);
    };
    return Et2SelectPriorityReadonly;
}(Et2SelectReadonly));
exports.Et2SelectPriorityReadonly = Et2SelectPriorityReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-priority_ro", Et2SelectPriorityReadonly);
var Et2SelectStateReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectStateReadonly, _super);
    function Et2SelectStateReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectStateReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.state(this, { other: this.other || [] });
    };
    return Et2SelectStateReadonly;
}(Et2SelectReadonly));
exports.Et2SelectStateReadonly = Et2SelectStateReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-state_ro", Et2SelectStateReadonly);
var Et2SelectTimezoneReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectTimezoneReadonly, _super);
    function Et2SelectTimezoneReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectTimezoneReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.timezone(this, { other: this.other || [] });
    };
    return Et2SelectTimezoneReadonly;
}(Et2SelectReadonly));
exports.Et2SelectTimezoneReadonly = Et2SelectTimezoneReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-timezone_ro", Et2SelectTimezoneReadonly);
var Et2SelectYearReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectYearReadonly, _super);
    function Et2SelectYearReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectYearReadonly.prototype.find_select_options = function (_attrs) {
        this.select_options = StaticOptions_1.StaticOptions.year(this, { other: this.other || [] });
    };
    return Et2SelectYearReadonly;
}(Et2SelectReadonly));
exports.Et2SelectYearReadonly = Et2SelectYearReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-year_ro", Et2SelectYearReadonly);
var Et2SelectLangReadonly = /** @class */ (function (_super) {
    __extends(Et2SelectLangReadonly, _super);
    function Et2SelectLangReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2SelectLangReadonly.prototype.find_select_options = function (_attrs) {
        var _this = this;
        this.fetchComplete = StaticOptions_1.StaticOptions.lang(this, { other: this.other || [] }).then(function (options) {
            _this.set_static_options(FindSelectOptions_1.cleanSelectOptions(options));
        });
    };
    return Et2SelectLangReadonly;
}(StaticOptions_1.Et2StaticSelectMixin(Et2SelectReadonly)));
exports.Et2SelectLangReadonly = Et2SelectLangReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-select-lang_ro", Et2SelectLangReadonly);
var templateObject_1, templateObject_2, templateObject_3;
