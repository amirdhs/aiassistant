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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Template = void 0;
/**
 * EGroupware eTemplate2 - Email WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var lit_1 = require("lit");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var shoelace_1 = require("../Styles/shoelace");
var Et2Template_styles_1 = require("./Et2Template.styles");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var et2_core_xml_1 = require("../et2_core_xml");
var until_js_1 = require("lit/directives/until.js");
var class_map_js_1 = require("lit/directives/class-map.js");
// @ts-ignore
/**
 * @summary Load & populate a template (.xet file) into the DOM
 *
 * @slot - The template's contents
 * @event load - Emitted when all elements are loaded
 *
 * @csspart template - Wrapper around template content
 * @csspart loader - Displayed while the template contents are being loaded
 */
var Et2Template = /** @class */ (function (_super) {
    __extends(Et2Template, _super);
    function Et2Template(egw) {
        var _this = _super.call(this) || this;
        _this.__egw = null;
        // Internal flag to indicate loading is in progress, since we can't monitor a promise
        _this.__isLoading = false;
        if (egw) {
            _this.__egw = egw;
        }
        _this.loading = Promise.resolve();
        return _this;
    }
    Et2Template_1 = Et2Template;
    Object.defineProperty(Et2Template, "styles", {
        get: function () {
            return [
                shoelace_1.default,
                _super.styles,
                Et2Template_styles_1.default
            ];
        },
        enumerable: false,
        configurable: true
    });
    Et2Template.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.__egw = null;
    };
    Et2Template.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.addEventListener("load", this.handleLoad);
        // If we can, start loading immediately
        if (this.template || this.id || this.url) {
            this.load();
        }
    };
    Et2Template.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("load", this.handleLoad);
    };
    Et2Template.prototype.getUpdateComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.getUpdateComplete.call(this)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.loading];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Et2Template.prototype.willUpdate = function (changedProperties) {
        // If content index was changed, re-check / create namespace
        if (changedProperties.has("content")) {
            this.checkCreateNamespace();
        }
        // Load if template (template, id or URL) or content index changed
        // (as long as we're not currently already loading, to prevent loops if load changes an attribute)
        if (!this.__isLoading && ["template", "id", "url", "content"].filter(function (v) { return changedProperties.has(v); }).length > 0) {
            this.load();
        }
    };
    /**
     * Searches for a DOM widget by id in the tree, descending into the child levels.
     *
     * @param _id is the id you're searching for
     */
    Et2Template.prototype.getDOMWidgetById = function (_id) {
        var widget = this.getWidgetById(_id);
        if (widget && (widget instanceof HTMLElement || widget.instanceOf(Et2Widget_1.Et2Widget))) {
            return widget;
        }
        return null;
    };
    /**
     * Searches for a Value widget by id in the tree, descending into the child levels.
     *
     * @param _id is the id you're searching for
     */
    Et2Template.prototype.getInputWidgetById = function (_id) {
        var widget = this.getWidgetById(_id);
        // instead of checking widget to be an instance of valueWidget (which would create a circular dependency)
        // we check for the interface/methods of valueWidget
        if (widget && typeof widget.get_value === 'function' && typeof widget.set_value === 'function') {
            return widget;
        }
        return null;
    };
    /**
     * Set the value for a child widget, specified by the given ID
     *
     * @param id  string The ID you're searching for
     * @param value Value for the widget
     *
     * @return Returns the result of widget's set_value(), though this is usually undefined
     *
     * @throws Error If the widget cannot be found or it does not have a set_value() function
     */
    Et2Template.prototype.setValueById = function (id, value) {
        var widget = this.getWidgetById(id);
        if (!widget) {
            throw 'Could not find widget ' + id;
        }
        // Don't care about what class it is, just that it has the function
        // @ts-ignore
        if (typeof widget.set_value !== 'function') {
            throw 'Widget ' + id + ' does not have a set_value() function';
        }
        // @ts-ignore
        return widget.set_value(value);
    };
    /**
     * Get the current value of a child widget, specified by the given ID
     *
     * This is the current value of the widget, which may be different from the original value given in content
     *
     * @param id  string The ID you're searching for
     * @throws Error If the widget cannot be found or it does not have a set_value() function
     */
    Et2Template.prototype.getValueById = function (id) {
        var widget = this.getWidgetById(id);
        if (!widget) {
            throw 'Could not find widget ' + id;
        }
        // Don't care about what class it is, just that it has the function
        // @ts-ignore
        if (typeof widget.get_value !== 'function' && typeof widget.value == "undefined") {
            throw 'Widget ' + id + ' does not have a get_value() function';
        }
        // @ts-ignore
        return typeof widget.get_value == "function" ? widget.get_value() : widget.value;
    };
    /**
     * Set the value for a child widget, specified by the given ID
     *
     * @param id  string The ID you're searching for
     * @param value new value to set
     * @throws Error If the widget cannot be found, or it does not have a set_value() function
     */
    Et2Template.prototype.setDisabledById = function (id, value) {
        var widget = this.getWidgetById(id);
        if (!widget) {
            throw 'Could not find widget ' + id;
        }
        // Don't care about what class it is, just that it has the function
        // @ts-ignore
        if (typeof widget.set_disabled !== 'function') {
            throw 'Widget ' + id + ' does not have a set_disabled() function';
        }
        // @ts-ignore
        return widget.set_disabled(value);
    };
    Et2Template.prototype.egw = function () {
        if (this.__egw) {
            return this.__egw;
        }
        else {
            return _super.prototype.egw.call(this);
        }
    };
    /**
     * Get the template XML and create widgets from it
     *
     * Asks the server if we don't have that template on the client yet, then takes the template
     * node and goes through it, creating widgets.  This is normally called automatically when the
     * template is added to the DOM, but if you want to re-load or not put it in the DOM you need to call load() yourself.
     *
     *
     * @returns {Promise<void>}
     * @protected
     */
    Et2Template.prototype.load = function (newContent, newSelectOptions, newReadonlys, newModifications) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // @ts-ignore can't find disabled, it's in Et2Widget
                if (this.disabled) {
                    this.loading = Promise.resolve();
                    return [2 /*return*/, this.loading];
                }
                // No double-loading
                // Can happen if you disconnect/reconnect the template while its loading
                if (this.__isLoading) {
                    return [2 /*return*/, this.loading];
                }
                if (typeof newContent != "undefined") {
                    // @ts-ignore ArrayMgr still expects et2_widgets
                    this.setArrayMgr("content", this.getArrayMgr("content").openPerspective(this, newContent));
                }
                if (typeof newSelectOptions != "undefined") {
                    // @ts-ignore ArrayMgr still expects et2_widgets
                    this.setArrayMgr("sel_options", this.getArrayMgr("sel_options").openPerspective(this, newSelectOptions));
                }
                if (typeof newReadonlys != "undefined") {
                    // @ts-ignore ArrayMgr still expects et2_widgets
                    this.setArrayMgr("readonlys", this.getArrayMgr("readonlys").openPerspective(this, newReadonlys));
                }
                if (typeof newModifications != "undefined") {
                    // @ts-ignore ArrayMgr still expects et2_widgets
                    this.setArrayMgr("modifications", this.getArrayMgr("modifications").openPerspective(this, newModifications));
                }
                this.__isLoading = true;
                this.loading = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var xml, e_1, attrs_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // No template, no point in continuing
                                if (!(this.template || this.id)) {
                                    console.debug("No template name, aborting load", this);
                                    resolve();
                                    return [2 /*return*/];
                                }
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.findTemplate()];
                            case 2:
                                xml = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                e_1 = _a.sent();
                                reject(e_1);
                                return [2 /*return*/];
                            case 4:
                                // Trying to load with no template, but it has children
                                // Something weird happening, maybe DOM copying?
                                if (!xml && this.childElementCount) {
                                    resolve();
                                    return [2 /*return*/];
                                }
                                // Empty in case load was called again
                                this.clear();
                                // Read the XML structure of the requested template
                                if (typeof xml != 'undefined') {
                                    attrs_1 = {};
                                    xml.getAttributeNames().forEach(function (attribute) {
                                        attrs_1[attribute] = xml.getAttribute(attribute);
                                    });
                                    // Don't change ID, keep what we've got
                                    // only if we have an ID, otherwise further templates in an overlay have no id!
                                    if (this.id)
                                        delete attrs_1["id"];
                                    this.transformAttributes(attrs_1);
                                    // Load children into template
                                    this.loadFromXML(xml);
                                }
                                else {
                                    reject("Could not find template");
                                    return [2 /*return*/];
                                }
                                // Wait for widgets to be complete
                                return [4 /*yield*/, this.loadFinished()];
                            case 5:
                                // Wait for widgets to be complete
                                _a.sent();
                                console.groupEnd();
                                this.__isLoading = false;
                                // Resolve promise, this.updateComplete now resolved
                                resolve();
                                // Yield to give anything else a chance to run
                                setTimeout(function () {
                                    // Notification event
                                    _this.dispatchEvent(new CustomEvent("load", {
                                        bubbles: true,
                                        composed: true,
                                        detail: _this
                                    }));
                                }, 0);
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (reason) {
                    _this.loadFailed(reason);
                });
                return [2 /*return*/, this.loading];
            });
        });
    };
    /**
     * Find the template XML node, either from the local cache or the server
     *
     * @returns {Promise<any>}
     * @protected
     */
    Et2Template.prototype.findTemplate = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var parts, cache_buster, template_name, xml, root, top_name, url, templates, e_2, fallback, i, template;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        parts = (this.template || this.id).split('?');
                        cache_buster = parts.length > 1 ? parts.pop() : null;
                        template_name = parts.pop();
                        xml = Et2Template_1.templateCache[template_name];
                        // Check to see if ID is short form --> prepend parent/top-level name
                        if (!xml && template_name.indexOf('.') < 0) {
                            root = this.getRoot();
                            top_name = root && root.getInstanceManager() ? root.getInstanceManager().name : null;
                            if (top_name && template_name.indexOf('.') < 0) {
                                template_name = top_name + '.' + template_name;
                                xml = Et2Template_1.templateCache[template_name];
                            }
                        }
                        if (!!xml) return [3 /*break*/, 5];
                        url = this.getUrl();
                        templates = {};
                        if (!url) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loadFromFile(url)];
                    case 2:
                        templates = _b.sent();
                        if (!templates) {
                            throw new Error("No templates found in template file " + url);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        throw new Error("Could not load template file " + url);
                    case 4:
                        fallback = void 0;
                        for (i = 0; i < ((_a = templates.childNodes) === null || _a === void 0 ? void 0 : _a.length); i++) {
                            template = templates.childNodes[i];
                            if (!["template", "et2-template"].includes(template.nodeName.toLowerCase())) {
                                continue;
                            }
                            if (template.getAttribute("id")) {
                                Et2Template_1.templateCache[template.getAttribute("id")] = template;
                            }
                            if (template.getAttribute("id") == template_name) {
                                xml = template;
                            }
                            fallback = template;
                        }
                        // Take last template in the file if we had no better match
                        if (!xml) {
                            xml = fallback;
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, xml];
                }
            });
        });
    };
    /**
     * Load the xml from the given file
     *
     * Broken out here so it can be stubbed for testing
     *
     * @param path
     * @returns {Promise<Element | void>}
     * @protected
     */
    Et2Template.prototype.loadFromFile = function (path) {
        return et2_core_xml_1.et2_loadXMLFromURL(path, null, this);
    };
    /**
     * The template has been loaded, wait for child widgets to be complete.
     *
     * For webComponents, we wait for the widget's updateComplete.
     * For legacy widgets, we let them finish and wait for their doLoadingFinished Promise
     *
     * @protected
     */
    Et2Template.prototype.loadFinished = function () {
        var _this = this;
        // List of Promises from widgets that are not quite fully loaded
        var deferred = [];
        // Inform the widget tree that it has been successfully loaded.
        _super.prototype.loadingFinished.call(this, deferred);
        // Don't wait for ourselves, it will never happen
        deferred = deferred.filter(function (d) { return d.widget !== _this; });
        var ready = false;
        // Wait for everything to be loaded, then finish it up.  Use timeout to give anything else a chance
        // to run.
        return Promise.race([
            Promise.all(deferred).then(function () {
                var _a;
                ready = true;
                deferred.splice(0, deferred.length);
                // Clean up load timeout if it's there, we did eventually finish
                (_a = _this.querySelector(":scope > #load-error")) === null || _a === void 0 ? void 0 : _a.remove();
            }),
            // If loading takes too long, give some feedback so we can try to track down why
            new Promise(function (resolve) {
                setTimeout(function () {
                    if (ready) {
                        return;
                    }
                    _this.loadFailed("Load timeout");
                    console.debug(_this.templateName + " @ " + _this.getUrl() + " widget loading took too long.  This is the deferred widget list, look for widgets still pending to find the problem", deferred);
                    resolve();
                }, 15000);
            })
        ]);
    };
    Et2Template.prototype.clear = function () {
        // Clear
        while (this.firstChild)
            this.removeChild(this.lastChild);
    };
    Et2Template.prototype.loadFailed = function (reason) {
        var message = (this.templateName) + " @ " + this.getUrl() + (reason ? " \n" + reason : "");
        lit_1.render(this.errorTemplate(message), this);
        this.egw().debug("warn", "Loading failed: " + message);
    };
    Et2Template.prototype.getUrl = function () {
        if (this.url) {
            return this.url;
        }
        var url = "";
        var parts = ((this.template || this.id) + "").split('?');
        var cache_buster = parts.length > 1 ? parts.pop() : ((new Date).valueOf() / 86400 | 0).toString();
        var template_name = this.templateName;
        // Full URL passed as template?
        if (template_name.startsWith(this.egw().webserverUrl) && template_name.endsWith("xet")) {
            url = template_name;
        }
        else {
            var splitted = template_name.split('.');
            var app = splitted.shift();
            // Not a valid URL, skip out
            if (splitted.length == 0) {
                return '';
            }
            url = this.egw().link('/' + app + "/templates/default/" + splitted.join('.') + ".xet", { download: cache_buster });
        }
        // if we have no cache-buster, reload daily
        if (url.indexOf('?') === -1) {
            url += '?download=' + cache_buster;
        }
        return url;
    };
    Object.defineProperty(Et2Template.prototype, "app", {
        get: function () {
            var parts = ((this.template || this.id) + "").split('?');
            var cache_buster = parts.length > 1 ? parts.pop() : null;
            var template_name = parts.pop();
            var splitted = template_name.split('.');
            return splitted.shift() || "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Template.prototype, "templateName", {
        get: function () {
            var parts = ((this.template || this.id) + "").split('?');
            var cache_buster = parts.length > 1 ? parts.pop() : null;
            var template_name = parts.pop() || "";
            return template_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Override parent to support content attribute
     * Templates always have ID set, but seldom do we want them to
     * create a namespace based on their ID.
     */
    Et2Template.prototype.checkCreateNamespace = function () {
        if (this.content) {
            var old_id = this.id;
            this._widget_id = this.content;
            _super.prototype.checkCreateNamespace.apply(this, arguments);
            this._widget_id = old_id;
        }
    };
    Et2Template.prototype._createNamespace = function () {
        return this.content && this.content != this.id;
    };
    Et2Template.prototype.handleLoad = function (event) {
        if (this.onload && typeof this.onload == "function") {
            // Make sure function gets a reference to the widget
            var args = Array.prototype.slice.call(arguments);
            if (args.indexOf(this) == -1) {
                args.push(this);
            }
            return this.onload.apply(this, args);
        }
    };
    Et2Template.prototype.loadingTemplate = function () {
        var loading = lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <sl-spinner></sl-spinner>"], ["\n            <sl-spinner></sl-spinner>"])));
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div part=\"loader\" class=\"template--loading\">", "</div>"], ["\n            <div part=\"loader\" class=\"template--loading\">", "</div>"])), loading);
    };
    Et2Template.prototype.errorTemplate = function (errorMessage) {
        if (errorMessage === void 0) { errorMessage = ""; }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <sl-alert id=\"load-error\" variant=\"warning\" open>\n                <sl-icon slot=\"icon\" name=\"exclamation-triangle\"></sl-icon>\n                <strong>", "</strong><br/>\n                ", "\n            </sl-alert>"], ["\n            <sl-alert id=\"load-error\" variant=\"warning\" open>\n                <sl-icon slot=\"icon\" name=\"exclamation-triangle\"></sl-icon>\n                <strong>", "</strong><br/>\n                ", "\n            </sl-alert>"])), this.egw().lang("Loading failed"), errorMessage);
    };
    Et2Template.prototype.render = function () {
        var classes = {
            template: true,
            'template--disabled': this.disabled,
            'template--readonly': this.readonly
        };
        if (this.app) {
            classes["template--app-" + this.app] = true;
        }
        if (this.layout != "none") {
            classes["layout-" + this.layout] = true;
            classes["template--layout-" + this.layout] = true;
        }
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            <div\n                    part=\"base\"\n                    class=", "\n            >\n                ", "\n                <slot></slot>\n            </div>"], ["\n            <div\n                    part=\"base\"\n                    class=", "\n            >\n                ", "\n                <slot></slot>\n            </div>"])), class_map_js_1.classMap(classes), until_js_1.until(this.loading.then(function () { return lit_1.nothing; }), this.loadingTemplate()));
    };
    var Et2Template_1;
    /**
     * Cache of known templates
     * @type {{[name : string] : Element}}
     */
    Et2Template.templateCache = {};
    __decorate([
        property_js_1.property()
    ], Et2Template.prototype, "template", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Template.prototype, "url", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Template.prototype, "content", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Template.prototype, "onload", void 0);
    Et2Template = Et2Template_1 = __decorate([
        custom_element_js_1.customElement("et2-template")
    ], Et2Template);
    return Et2Template;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2Template = Et2Template;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
