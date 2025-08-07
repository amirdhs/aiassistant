"use strict";
/**
 * Email address UI utilities
 *
 * You probably want formatEmailAddress(address)
 */
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
exports.formatEmailAddress = exports.parseEmail = exports.splitEmail = exports.checkContact = void 0;
function _getEmailDisplayPreference() {
    var _a;
    var pref = (_a = window.egw.preference("emailTag", "mail")) !== null && _a !== void 0 ? _a : "";
    switch (pref) {
        case "fullemail":
            return "full";
        default:
        case "onlyname":
            return "name";
        case "onlyemail":
            return "email";
        case "domain":
            return "domain";
    }
}
var email_cache = {};
var contact_request;
var contact_requests = {};
/**
 * Get contact information using an email address
 *
 * @param {string} email
 * @returns {Promise<boolean | ContactInfo>}
 */
function checkContact(email) {
    if (typeof email_cache[email] !== "undefined") {
        return Promise.resolve(email_cache[email]);
    }
    if (!contact_request && window.egw) {
        contact_request = window.egw.jsonq('EGroupware\\Api\\Etemplate\\Widget\\Url::ajax_contact', [[]], null, null, function (parameters) {
            for (var email_1 in contact_requests) {
                parameters[0].push(email_1);
            }
        }).then(function (result) {
            var _loop_1 = function (email_2) {
                email_cache[email_2] = result[email_2];
                contact_requests[email_2].forEach(function (resolve) {
                    resolve(result[email_2]);
                });
            };
            for (var email_2 in contact_requests) {
                _loop_1(email_2);
            }
            contact_request = null;
            contact_requests = {};
        });
    }
    if (typeof contact_requests[email] === 'undefined') {
        contact_requests[email] = [];
    }
    return new Promise(function (resolve) {
        contact_requests[email].push(resolve);
    });
}
exports.checkContact = checkContact;
/**
 * if we have a "name <email>" value split it into name & email
 * @param email_string
 *
 * @return {name:string, email:string}
 */
function splitEmail(email_string) {
    var split = { name: "", email: email_string };
    if (email_string && email_string.indexOf('<') !== -1) {
        var parts = email_string.split('<');
        if (parts.length > 1) {
            split.email = parts.pop();
            split.email = split.email.substring(0, split.email.length - 1).trim();
            split.name = parts.join("<").trim();
            // remove quotes
            while (split.name.length > 1 && (split.name[0] === '"' || split.name[0] === "'") && split.name[0] === split.name.substring(split.name.length - 1)) {
                split.name = split.name.substring(1, split.name.length - 1);
            }
        }
        else // <email> --> email
         {
            split.email = parts[1].substring(0, email_string.length - 1);
        }
    }
    return split;
}
exports.splitEmail = splitEmail;
/**
 * Parse a full email address and extract first & last name
 * Takes into account lastname, firstname and some common prefixes
 *
 * 	 - "Ralf Becker <rb@egroupware.org>" --> ["fname" => "Ralf", "lname" => "Becker"]
 * 	 - "'Becker, Ralf' <rb@egroupware.org> --> dito
 * 	 - "ralf.becker@egroupware.org" --> dito
 * 	 - "rb@egroupware.org" --> ["fname" --> "r", "lname" => "b"]
 *
 * @param {string} address
 * @returns {{lname : string, fname : string, label : string, email : string}}
 */
function parseEmail(address) {
    var _a, _b;
    var split = splitEmail(address);
    var parsed = { lname: "", fname: "", label: "", email: split.email };
    if (!address) {
        return parsed;
    }
    var matches = [];
    var parts = [];
    if (matches = address.match(/^\"?'?(.*?)'?\"?\s+<([^<>'\"]+)>$/)) {
        if ((parts = matches[1].split(/[, ]+/))) {
            // if we have a usual title prefixing the name, skip it
            while (parts[0].match(/^(Hr\.|Herr|Mr.|Mister|Fr\.|Frau|Ms.|Miss|Dr\.|Doktor|Prof.|Professor)/)) {
                parts.shift();
            }
            parsed.fname = (_a = parts.shift()) !== null && _a !== void 0 ? _a : "";
            parsed.lname = (_b = parts.shift()) !== null && _b !== void 0 ? _b : "";
            parsed.label = matches[1];
            return parsed;
        }
        address = matches[2];
    }
    if ((parts = address.split(/[._]/)) && parts.length >= 2) {
        parsed.fname = parts.shift();
        parsed.lname = parts.shift();
        parsed.label = address;
    }
    return parsed;
}
exports.parseEmail = parseEmail;
/**
 * Format an email address according to user preference
 *
 * @param address
 * @param {"full" | "email" | "name" | "domain"} emailDisplayFormat
 * @returns {any}
 */
function formatEmailAddress(address, emailDisplayFormat) {
    return __awaiter(this, void 0, void 0, function () {
        var split, content, contact, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!address || !address.trim()) {
                        return [2 /*return*/, ""];
                    }
                    if (!emailDisplayFormat) {
                        emailDisplayFormat = _getEmailDisplayPreference();
                    }
                    split = splitEmail(address);
                    content = address;
                    _a = emailDisplayFormat !== 'email' && !split.name;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, checkContact(address)];
                case 1:
                    _a = (contact = _b.sent());
                    _b.label = 2;
                case 2:
                    if (_a) {
                        split.name = contact.n_fn;
                    }
                    if (split.name) {
                        switch (emailDisplayFormat) {
                            case "full":
                                content = split.name + " <" + split.email + ">";
                                break;
                            case "email":
                                content = split.email;
                                break;
                            case "name":
                            default:
                                content = split.name;
                                break;
                            case "domain":
                                content = split.name + " (" + split.email.split("@").pop() + ")";
                                break;
                        }
                    }
                    return [2 /*return*/, content];
            }
        });
    });
}
exports.formatEmailAddress = formatEmailAddress;
