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
exports.CachedQueueMixin = void 0;
/**
 * CachedQueueMixin allows a widget to request something from the server and the response be cached for future calls
 *
 * To implement, the widget class needs to set searchUrl.  Each instance then calls queueCache()
 * with the specific parameters to be sent to searchUrl.  These parameters are used to cache the results, so next time
 * an instance of the widget calls queueCache() with the same parameters, the same response is returned immediately
 * with no server call.
 *
 * export class MyWidget extends CachedQueueMixin(...) {
 *     protected static searchUrl = "\\EGroupware\\Api\\Etemplate\\Widget\\MyWidget::ajax_check";
 *     constructor() {
 *         ...
 *     }
 *
 *     set something(new_something) {
 *     	   // Do cleanup and validation of new_something ...
 *     	   // Call cachedQueue for data:
 *         this.cachedQueue({something: new_something}).then((cachedData) => {
 *         		// Do what is needed with the cachedData ...
 *         });
 *     }
 * }
 *
 * searchUrl should expect an array of parameters, and return the result indexed by the JSON stringification of the parameters:
 * 	public function ajax_check(array $parameterList) : array
 * 	{
 * 		$result = [];
 * 		foreach($parameterList as $parameters)
 * 		{
 * 				...
 * 				$result[json_encode($parameters)] = doCheck($parameters) ?? false;
 * 		}
 *
 * 		Response::get()->data($result);
 * 	}
 *
 * @param {T} superClass
 * @returns {Constructor<CachedQueueMixinClass> & T}
 * @constructor
 */
exports.CachedQueueMixin = function (superClass) {
    var CachedQueueMixinClass = /** @class */ (function (_super) {
        __extends(CachedQueueMixinClass, _super);
        function CachedQueueMixinClass() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            // Automatically set widgetCacheKey based on widget name
            if (!_this.staticThis.widgetCacheKey) {
                _this.staticThis.widgetCacheKey = _this.constructor.name;
            }
            return _this;
        }
        CachedQueueMixinClass.prototype.cachedQueue = function (parameters) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, cache, pending;
                var _this = this;
                return __generator(this, function (_b) {
                    if (!this.staticThis.widgetCacheKey) {
                        throw new Error("CachedQueueMixin: widget widgetCacheKey not set");
                    }
                    if (!this.staticThis.searchUrl) {
                        throw new Error("CachedQueueMixin: widget searchUrl not set");
                    }
                    cacheKey = this.getCacheKey(parameters);
                    if (!cacheKey || cacheKey.trim() == "") {
                        throw new Error("CachedQueueMixin: widget cacheKey() is missing or invalid");
                    }
                    cache = this.getFromCache(cacheKey);
                    // Already have the data cached, return it
                    if (typeof cache !== "undefined" && cache !== null) {
                        return [2 /*return*/, Promise.resolve(cache)];
                    }
                    // Check for pending request
                    if (CachedQueueMixinClass._queues.has(this.staticThis.widgetCacheKey)) {
                        pending = (_a = CachedQueueMixinClass._queues.get(this.staticThis.widgetCacheKey)) === null || _a === void 0 ? void 0 : _a.find(function (item) {
                            return item.cacheKey == cacheKey;
                        });
                        if (pending) {
                            return [2 /*return*/, new Promise(pending.resolve)];
                        }
                    }
                    // Add to the queue and fire when ready
                    return [2 /*return*/, new Promise(function (resolve) {
                            // Add to the queue
                            if (!CachedQueueMixinClass._queues.has(_this.staticThis.widgetCacheKey)) {
                                CachedQueueMixinClass._queues.set(_this.staticThis.widgetCacheKey, []);
                            }
                            CachedQueueMixinClass._queues.get(_this.staticThis.widgetCacheKey).push({
                                owner: _this,
                                parameters: parameters,
                                cacheKey: _this.getCacheKey(parameters),
                                resolve: resolve
                            });
                            // Start the queue if it's not already running
                            if (!CachedQueueMixinClass._queue_timeouts[_this.staticThis.widgetCacheKey]) {
                                CachedQueueMixinClass._queue_timeouts[_this.staticThis.widgetCacheKey] = setTimeout(function () { CachedQueueMixinClass._sendQueue(_this.staticThis.widgetCacheKey); }, CachedQueueMixinClass._queue_timeout_delay);
                                // Force queue processing after max timeout
                                setTimeout(function () {
                                    var _a;
                                    if (((_a = CachedQueueMixinClass._queues.get(_this.staticThis.widgetCacheKey)) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                        CachedQueueMixinClass._sendQueue(_this.staticThis.widgetCacheKey);
                                    }
                                }, CachedQueueMixinClass._queue_timeout_max);
                            }
                        })];
                });
            });
        };
        Object.defineProperty(CachedQueueMixinClass.prototype, "staticThis", {
            // Helper method to access static members
            get: function () {
                return this.constructor;
            },
            enumerable: false,
            configurable: true
        });
        // Get a string key for indexing into the cache for this widget class
        CachedQueueMixinClass.prototype.getCacheStorageKey = function (cacheKey) {
            // cacheKey not actually used at the widget level right now
            return "api-" + this.staticThis.widgetCacheKey;
        };
        // Get a string key for this particular widget's queuedCache() call
        CachedQueueMixinClass.prototype.getCacheKey = function (parameters) {
            return JSON.stringify(parameters);
        };
        // Get cached data
        CachedQueueMixinClass.prototype.getFromCache = function (cacheKey) {
            var storageKey = this.getCacheStorageKey(cacheKey);
            var cached = this.egw().getSessionItem(storageKey, cacheKey);
            return cached ? JSON.parse(cached) : undefined;
        };
        // Set cached data
        CachedQueueMixinClass.prototype.setToCache = function (cacheKey, data) {
            var storageKey = this.getCacheStorageKey(cacheKey);
            // Here is where we actually hold on to the data.
            // If we want to change how long / where the data is held, this (& get...) is the place to change
            this.egw().setSessionItem(storageKey, cacheKey, JSON.stringify(data));
        };
        /**
         * Send a request for the accumulated data in a particular widget queue, then pass it back to the individual
         * widgets and cache it for next time.
         *
         * @param {string} widgetCacheKey
         * @returns {Promise<any>}
         * @private
         */
        CachedQueueMixinClass._sendQueue = function (widgetCacheKey) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var queue, first, widget, uniqueParams, data, i, item, widgetData;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            queue = (_a = CachedQueueMixinClass._queues.get(widgetCacheKey)) !== null && _a !== void 0 ? _a : [];
                            // Clear the timeout
                            if (CachedQueueMixinClass._queue_timeouts[widgetCacheKey]) {
                                clearTimeout(CachedQueueMixinClass._queue_timeouts[widgetCacheKey]);
                                CachedQueueMixinClass._queue_timeouts[widgetCacheKey] = null;
                            }
                            // Nothing to do
                            if (queue.length == 0) {
                                return [2 /*return*/];
                            }
                            first = queue[0];
                            widget = first.owner;
                            uniqueParams = Array.from(new Set(queue.map(function (item) { return item.cacheKey; })))
                                .map(function (item) { return JSON.parse(item); });
                            if (uniqueParams.length !== queue.length) {
                                // Should not be here, figure out how we got a duplicate in the queue
                                debugger;
                            }
                            return [4 /*yield*/, widget.egw().request(widget.staticThis.searchUrl, [uniqueParams])];
                        case 1:
                            data = (_b = _c.sent()) !== null && _b !== void 0 ? _b : {};
                            // Map results back to all queued items
                            for (i = queue.length - 1; i >= 0; i--) {
                                item = queue[i];
                                widgetData = data[item.cacheKey];
                                if (typeof widgetData === "undefined") {
                                    // No response yet - either coming in the next one, or server didn't give an answer for it
                                    return [2 /*return*/];
                                }
                                // Cache it
                                widget.setToCache(item.cacheKey, widgetData);
                                // Resolve the promise for this request
                                item.resolve(widgetData);
                                // Remove from the cache
                                queue.splice(i, 1);
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        CachedQueueMixinClass.widgetCacheKey = "";
        CachedQueueMixinClass.searchUrl = "";
        CachedQueueMixinClass._queues = new Map();
        CachedQueueMixinClass._queue_timeouts = new Map();
        CachedQueueMixinClass._queue_timeout_delay = 100;
        CachedQueueMixinClass._queue_timeout_max = 1000;
        return CachedQueueMixinClass;
    }(superClass));
    return CachedQueueMixinClass;
};
