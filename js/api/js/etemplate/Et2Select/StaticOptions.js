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
exports.StaticOptions = exports.Et2StaticSelectMixin = void 0;
/**
 * Some static options, no need to transfer them over and over.
 * We still need the same thing on the server side to validate, so they
 * have to match.  See Etemplate\Widget\Select::typeOptions()
 * The type specific legacy options wind up in attrs.other, but should be explicitly
 * defined and set.
 *
 * @param {type} widget
 */
var egw_action_common_1 = require("../../egw_action/egw_action_common");
var FindSelectOptions_1 = require("./FindSelectOptions");
var state_js_1 = require("lit/decorators/state.js");
/**
 * Base class for things that have static options
 *
 * We keep static options separate and concatenate them in to allow for extra options without
 * overwriting them when we get static options from the server
 */
exports.Et2StaticSelectMixin = function (superclass) {
    var Et2StaticSelectOptions = /** @class */ (function (_super) {
        __extends(Et2StaticSelectOptions, _super);
        function Et2StaticSelectOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Hold the static widget options separately so other options (like sent from server in sel_options) won't
            // conflict or be wiped out
            _this._static_options = [];
            // If widget needs to fetch options from server, we might want to wait for them
            _this.fetchComplete = Promise.resolve();
            return _this;
        }
        Et2StaticSelectOptions.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback.call(this);
            this._static_options = [];
        };
        Et2StaticSelectOptions.prototype.getUpdateComplete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                        case 1:
                            result = _a.sent();
                            return [4 /*yield*/, this.fetchComplete];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        Object.defineProperty(Et2StaticSelectOptions.prototype, "select_options", {
            get: function () {
                // @ts-ignore
                var options = _super.prototype.select_options || [];
                var statics = this._static_options || [];
                if (options.length == 0) {
                    return statics;
                }
                if (statics.length == 0) {
                    return options;
                }
                // Merge & make sure result is unique
                return __spreadArrays(new Map(__spreadArrays(options, (this._static_options || [])).map(function (item) {
                    return [item.value, item];
                })).values());
            },
            set: function (new_options) {
                // @ts-ignore IDE doesn't recognise property
                _super.prototype.select_options = new_options;
            },
            enumerable: false,
            configurable: true
        });
        Et2StaticSelectOptions.prototype.set_static_options = function (new_static_options) {
            this._static_options = new_static_options;
            this.requestUpdate("select_options");
            // Shoelace select may have rejected our value due to missing option by now, so re-set it
            if (this.value && this.select && this.value !== this.select.value) {
                this.value = this.value;
            }
        };
        /**
         * Override the parent _missingOption to wait for server-side options
         * to come back before we check to see if the value is not there.
         *
         * @param {string} newValueElement
         * @protected
         */
        Et2StaticSelectOptions.prototype._missingOption = function (newValueElement) {
            var _this = this;
            this.fetchComplete.then(function () {
                if (_this.optionSearch(newValueElement) == null) {
                    _super.prototype._missingOption.call(_this, newValueElement);
                }
            });
        };
        /**
         * Override the parent fix_bad_value() to wait for server-side options
         * to come back before we check to see if the value is not there.
         */
        Et2StaticSelectOptions.prototype.fix_bad_value = function () {
            var _this = this;
            this.fetchComplete.then(function () {
                // @ts-ignore Doesn't know it's an Et2Select
                if (typeof _super.prototype.fix_bad_value == "function") {
                    // @ts-ignore Doesn't know it's an Et2Select
                    _super.prototype.fix_bad_value.call(_this);
                }
            });
        };
        __decorate([
            state_js_1.state()
        ], Et2StaticSelectOptions.prototype, "_static_options", void 0);
        __decorate([
            state_js_1.state()
        ], Et2StaticSelectOptions.prototype, "fetchComplete", void 0);
        return Et2StaticSelectOptions;
    }((superclass)));
    return Et2StaticSelectOptions;
};
/**
 * Some options change, or are too complicated to have twice, so we get the
 * options from the server once, then keep them to use if they're needed again.
 * We use the options string to keep the different possibilities (eg. categories
 * for different apps) separate.
 *
 * @param {et2_selectbox} widget Selectbox we're looking at
 * @param {string} options_string
 * @param {Object} attrs Widget attributes (not yet fully set)
 * @param {boolean} return_promise true: always return a promise
 * @returns {Object[]|Promise<Object[]>} Array of options, or empty and they'll get filled in later, or Promise
 */
exports.StaticOptions = new /** @class */ (function () {
    function StaticOptionsType() {
    }
    StaticOptionsType.prototype.cached_server_side = function (widget, type, options_string, return_promise) {
        // normalize options by removing trailing commas
        options_string = options_string.replace(/,+$/, '');
        var cache_id = widget.nodeName + '_' + options_string;
        var cache_owner = widget.egw().getCache('Et2Select');
        var cache = cache_owner[cache_id];
        if (typeof cache === 'undefined') {
            // Fetch with json instead of jsonq because there may be more than
            // one widget listening for the response by the time it gets back,
            // and we can't do that when it's queued.
            var req = widget.egw().json('EGroupware\\Api\\Etemplate\\Widget\\Select::ajax_get_options', [type, options_string, widget.value]).sendRequest();
            if (typeof cache === 'undefined') {
                cache_owner[cache_id] = req;
            }
            cache = req;
        }
        if (typeof cache.then === 'function') {
            // pending, wait for it
            var promise = cache.then(function (response) {
                cache = cache_owner[cache_id] = response.response[0].data || undefined;
                if (return_promise)
                    return cache;
                // Set select_options in attributes in case we get a response before
                // the widget is finished loading (otherwise it will re-set to {})
                //widget.select_options = cache;
                // Avoid errors if widget is destroyed before the timeout
                if (widget && typeof widget.id !== 'undefined') {
                    if (typeof widget.set_static_options == "function") {
                        widget.set_static_options(cache);
                    }
                    else if (typeof widget.set_select_options == "function") {
                        widget.set_select_options(FindSelectOptions_1.find_select_options(widget, {}, cache));
                    }
                }
            });
            return return_promise ? promise : [];
        }
        else {
            // Check that the value is in there
            // Make sure we are not requesting server for an empty value option or
            // other widgets but select-timezone as server won't find anything and
            // it will fall into an infinitive loop, e.g. select-cat widget.
            if (widget.value && widget.value != "" && widget.value != "0" && type == "select-timezone") {
                var missing_option = true;
                for (var i = 0; i < cache.length && missing_option; i++) {
                    if (cache[i].value == widget.value) {
                        missing_option = false;
                    }
                }
                // Try again - ask the server with the current value this time
                if (missing_option) {
                    delete cache_owner[cache_id];
                    return this.cached_server_side(widget, type, options_string);
                }
                else {
                    if (widget.value && widget && widget.get_value() !== widget.value) {
                        egw.window.setTimeout(function () {
                            // Avoid errors if widget is destroyed before the timeout
                            if (this.widget && typeof this.widget.id !== 'undefined') {
                                this.widget.set_value(this.widget.options.value);
                            }
                        }.bind({ widget: widget }), 1);
                    }
                }
            }
            return return_promise ? Promise.resolve(cache) : cache;
        }
    };
    StaticOptionsType.prototype.cached_from_file = function (widget, file) {
        var cache_owner = widget.egw().getCache('Et2Select');
        var cache = cache_owner[file];
        if (typeof cache === 'undefined') {
            cache_owner[file] = cache = widget.egw().window.fetch(file)
                .then(function (response) {
                // Get the options
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            })
                .then(function (options) {
                var _a;
                // Need to clean the options because file may be key=>value, may have option list, may be mixed
                cache_owner[file] = (_a = FindSelectOptions_1.cleanSelectOptions(options)) !== null && _a !== void 0 ? _a : [];
                return cache_owner[file];
            });
        }
        else if (cache && typeof cache.then === "undefined") {
            return Promise.resolve(cache);
        }
        return cache;
    };
    StaticOptionsType.prototype.priority = function (widget) {
        return [
            { value: "1", label: 'low' },
            { value: "2", label: 'normal' },
            { value: "3", label: 'high' },
            { value: "0", label: 'undefined' }
        ];
    };
    StaticOptionsType.prototype.bool = function (widget) {
        return [
            { value: "0", label: 'no' },
            { value: "1", label: 'yes' }
        ];
    };
    StaticOptionsType.prototype.month = function (widget) {
        return [
            { value: "1", label: 'January' },
            { value: "2", label: 'February' },
            { value: "3", label: 'March' },
            { value: "4", label: 'April' },
            { value: "5", label: 'May' },
            { value: "6", label: 'June' },
            { value: "7", label: 'July' },
            { value: "8", label: 'August' },
            { value: "9", label: 'September' },
            { value: "10", label: 'October' },
            { value: "11", label: 'November' },
            { value: "12", label: 'December' }
        ];
    };
    StaticOptionsType.prototype.number = function (widget, attrs) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (attrs === void 0) { attrs = {}; }
        var options = [];
        var min = parseFloat((_b = (_a = attrs.min) !== null && _a !== void 0 ? _a : widget.min) !== null && _b !== void 0 ? _b : 1);
        var max = parseFloat((_d = (_c = attrs.max) !== null && _c !== void 0 ? _c : widget.max) !== null && _d !== void 0 ? _d : 10);
        var interval = parseFloat((_f = (_e = attrs.interval) !== null && _e !== void 0 ? _e : widget.interval) !== null && _f !== void 0 ? _f : 1);
        var format = (_g = attrs.format) !== null && _g !== void 0 ? _g : '%d';
        // leading zero specified in interval
        if (widget.leading_zero && widget.leading_zero[0] == '0') {
            format = '%0' + ('' + interval).length + 'd';
        }
        // Suffix
        if (widget.suffix) {
            format += widget.egw().lang(widget.suffix);
        }
        // Avoid infinite loop if interval is the wrong direction
        if ((min <= max) != (interval > 0)) {
            interval = -interval;
        }
        for (var i = 0, n = min; n <= max && i <= 100; n += interval, ++i) {
            options.push({ value: "" + n, label: egw_action_common_1.sprintf(format, n) });
        }
        return options;
    };
    StaticOptionsType.prototype.percent = function (widget) {
        return this.number(widget, { min: 0, max: 100, interval: 10, format: "%d%%" });
    };
    StaticOptionsType.prototype.year = function (widget, attrs) {
        var _a, _b, _c, _d;
        if (typeof attrs != 'object') {
            attrs = {};
        }
        var t = new Date();
        attrs.min = t.getFullYear() + parseInt((_b = (_a = attrs.min) !== null && _a !== void 0 ? _a : widget.min) !== null && _b !== void 0 ? _b : -3);
        attrs.max = t.getFullYear() + parseInt((_d = (_c = attrs.max) !== null && _c !== void 0 ? _c : widget.max) !== null && _d !== void 0 ? _d : 2);
        return this.number(widget, attrs);
    };
    StaticOptionsType.prototype.day = function (widget, attrs) {
        return this.number(widget, { min: 1, max: 31, interval: 1 });
    };
    StaticOptionsType.prototype.hour = function (widget, attrs) {
        var options = [];
        var timeformat = widget.egw().preference('common', 'timeformat');
        for (var h = 0; h <= 23; ++h) {
            options.push({
                value: "" + h,
                label: timeformat == 12 ?
                    ((12 ? h % 12 : 12) + ' ' + (h < 12 ? egw.lang('am') : egw.lang('pm'))) :
                    egw_action_common_1.sprintf('%02d', h)
            });
        }
        return options;
    };
    StaticOptionsType.prototype.app = function (widget, attrs) {
        var options = widget.apps ? ',,' + widget.apps : widget.options || '';
        return this.cached_server_side(widget, 'select-app', options, true);
    };
    StaticOptionsType.prototype.access = function (widget) {
        return [
            { value: "private", label: "Private" },
            { value: "public", label: "Global public" },
            { value: "group", label: "Group public" }
        ];
    };
    StaticOptionsType.prototype.cat = function (widget) {
        var options = [widget.globalCategories, /*?*/ , widget.application, widget.parentCat];
        if (typeof options[3] == 'undefined') {
            options[3] = widget.application ||
                // When the widget is first created, it doesn't have a parent and can't find it's instanceManager
                (widget.getInstanceManager() && widget.getInstanceManager().app) ||
                widget.egw().app_name();
        }
        return this.cached_server_side(widget, 'select-cat', options.join(','), true);
    };
    StaticOptionsType.prototype.country = function (widget, attrs, return_promise) {
        var options = ',';
        return this.cached_server_side(widget, 'select-country', options, return_promise);
    };
    StaticOptionsType.prototype.state = function (widget, attrs) {
        var options = attrs.country_code ? attrs.country_code : 'de';
        return this.cached_server_side(widget, 'select-state', options, true);
    };
    StaticOptionsType.prototype.dow = function (widget, attrs) {
        var options = (widget.rows || "") + ',' + (attrs.other || []).join(',');
        return this.cached_server_side(widget, 'select-dow', options, true);
    };
    StaticOptionsType.prototype.lang = function (widget, attrs) {
        var options = ',' + (attrs.other || []).join(',');
        return this.cached_server_side(widget, 'select-lang', options, true);
    };
    StaticOptionsType.prototype.timezone = function (widget, attrs) {
        var options = ',' + (attrs.other || []).join(',');
        return this.cached_server_side(widget, 'select-timezone', options, true);
    };
    return StaticOptionsType;
}());
