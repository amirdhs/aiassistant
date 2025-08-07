"use strict";
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
exports.Favorite = void 0;
var Favorite = /** @class */ (function () {
    function Favorite() {
    }
    /**
     * Load favorites from preferences
     *
     * @param app String Load favorites from this application
     */
    Favorite.load = function (egw, app) {
        return __awaiter(this, void 0, void 0, function () {
            var favorites, sortedList, preferences, pref_name, name_1, name_2, sortedListObj, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        favorites = {
                            'blank': {
                                name: window.egw.lang("No filters"),
                                state: {},
                                group: false
                            }
                        };
                        sortedList = [];
                        return [4 /*yield*/, window.egw.preference("*", app, true)];
                    case 1:
                        preferences = _a.sent();
                        for (pref_name in preferences) {
                            if (pref_name.indexOf(Favorite.PREFIX) == 0 && typeof preferences[pref_name] == 'object') {
                                name_1 = pref_name.substr(Favorite.PREFIX.length);
                                favorites[name_1] = preferences[pref_name];
                                // Keep older favorites working - they used to store nm filters in 'filters',not state
                                if (preferences[pref_name]["filters"]) {
                                    favorites[pref_name]["state"] = preferences[pref_name]["filters"];
                                }
                            }
                            if (pref_name == 'fav_sort_pref') {
                                sortedList = preferences[pref_name];
                                //Make sure sorted list is always an array, seems some old fav are not array
                                if (!Array.isArray(sortedList) && typeof sortedList == "string") {
                                    // @ts-ignore What's the point of a typecheck if IDE still errors
                                    sortedList = sortedList.split(',');
                                }
                            }
                        }
                        for (name_2 in favorites) {
                            if (sortedList.indexOf(name_2) < 0) {
                                sortedList.push(name_2);
                            }
                        }
                        window.egw.set_preference(app, 'fav_sort_pref', sortedList);
                        if (sortedList.length > 0) {
                            sortedListObj = {};
                            for (i = 0; i < sortedList.length; i++) {
                                if (typeof favorites[sortedList[i]] != 'undefined') {
                                    sortedListObj[sortedList[i]] = favorites[sortedList[i]];
                                }
                                else {
                                    sortedList.splice(i, 1);
                                    window.egw.set_preference(app, 'fav_sort_pref', sortedList);
                                }
                            }
                            favorites = Object.assign(sortedListObj, favorites);
                        }
                        return [2 /*return*/, favorites];
                }
            });
        });
    };
    Favorite.applyFavorite = function (egw, app, favoriteName) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var favorites, fav;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Favorite.load(egw, app)];
                    case 1:
                        favorites = _b.sent();
                        fav = favoriteName == "blank" ? {} : (_a = favorites[favoriteName]) !== null && _a !== void 0 ? _a : {};
                        // use app[appname].setState if available to allow app to overwrite it (eg. change to non-listview in calendar)
                        //@ts-ignore TS doesn't know about window.app
                        if (typeof window.app[app] != 'undefined') {
                            //@ts-ignore TS doesn't know about window.app
                            window.app[app].setState(fav);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Favorite.remove = function (egw, app, favoriteName) {
        return __awaiter(this, void 0, void 0, function () {
            var favorites, fav;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Favorite.load(egw, app)];
                    case 1:
                        favorites = _a.sent();
                        fav = favorites[favoriteName];
                        if (!fav) {
                            return [2 /*return*/, Promise.reject("No such favorite")];
                        }
                        return [2 /*return*/, egw.request("EGroupware\\Api\\Framework::ajax_set_favorite", [app, favoriteName, "delete", "" + fav.group, ''])];
                }
            });
        });
    };
    // Favorites are prefixed in preferences
    Favorite.PREFIX = "favorite_";
    Favorite.ADD_VALUE = "~add~";
    return Favorite;
}());
exports.Favorite = Favorite;
