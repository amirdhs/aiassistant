"use strict";
/**
 * EGroupware eTemplate2 - JS file which contains the complete et2 module
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
 * @copyright EGroupware GmbH 2011-2021
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
exports.etemplate2 = void 0;
var et2_core_widget_1 = require("./et2_core_widget");
var et2_core_baseWidget_1 = require("./et2_core_baseWidget");
var egw_app_1 = require("../jsapi/egw_app");
var et2_core_interfaces_1 = require("./et2_core_interfaces");
var egw_global_1 = require("../jsapi/egw_global");
var et2_core_arrayMgr_1 = require("./et2_core_arrayMgr");
var et2_extension_nextmatch_1 = require("./et2_extension_nextmatch");
require("../jsapi/egw_json.js");
var egw_action_common_1 = require("../egw_action/egw_action_common");
require("./Layout/Et2Box/Et2Box");
require("./Layout/Et2Details/Et2Details");
require("./Layout/Et2Dropdown/Et2Dropdown");
require("./Layout/Et2Groupbox/Et2Groupbox");
require("./Layout/Et2Tabs/Et2Tab");
require("./Layout/Et2Tabs/Et2Tabs");
require("./Layout/Et2Tabs/Et2TabPanel");
require("./Layout/Et2Tabs/Et2TabsMobile");
require("./Et2Avatar/Et2Avatar");
require("./Et2Avatar/Et2AvatarGroup");
require("./Et2Badge/Et2Badge");
require("./Et2Button/Et2Button");
require("./Et2Button/Et2ButtonCopy");
require("./Et2Button/Et2ButtonIcon");
require("./Et2Button/Et2ButtonScroll");
require("./Et2Button/Et2ButtonTimestamper");
require("./Et2Button/Et2ButtonToggle");
require("./Et2Checkbox/Et2Checkbox");
require("./Et2Checkbox/Et2CheckboxReadonly");
require("./Et2Date/Et2Date");
require("./Et2Date/Et2DateDuration");
require("./Et2Date/Et2DateDurationReadonly");
require("./Et2Date/Et2DateRange");
require("./Et2Date/Et2DateReadonly");
require("./Et2Date/Et2DateSince");
require("./Et2Date/Et2DateTime");
require("./Et2Date/Et2DateTimeOnly");
require("./Et2Date/Et2DateTimeOnlyReadonly");
require("./Et2Date/Et2DateTimeReadonly");
require("./Et2Date/Et2DateTimeToday");
require("./Et2Description/Et2Description");
require("./Et2Dialog/Et2Dialog");
require("./Et2Dialog/Et2MergeDialog");
require("./Et2Diff/Et2Diff");
require("./Et2DropdownButton/Et2DropdownButton");
require("./Et2Email/Et2Email");
require("./Expose/Et2ImageExpose");
require("./Expose/Et2DescriptionExpose");
require("./Et2Favorites/Et2Favorites");
require("./Et2Favorites/Et2FavoritesMenu");
require("./Et2File/Et2File");
require("./Et2File/Et2FileItem");
require("./Et2Image/Et2Image");
require("./Et2Image/Et2AppIcon");
require("./Et2Avatar/Et2LAvatar");
require("./Et2Link/Et2Link");
require("./Et2Link/Et2LinkAdd");
require("./Et2Link/Et2LinkAppSelect");
require("./Et2Link/Et2LinkEntry");
require("./Et2Link/Et2LinkList");
require("./Et2Link/Et2LinkSearch");
require("./Et2Link/Et2LinkString");
require("./Et2Link/Et2LinkTo");
require("./Et2Nextmatch/ColumnSelection");
require("./Et2Nextmatch/Headers/AccountFilterHeader");
require("./Et2Nextmatch/Headers/CustomFilterHeader");
require("./Et2Nextmatch/Headers/EntryHeader");
require("./Et2Nextmatch/Headers/FilterHeader");
require("./Et2MenuItem/Et2MenuItem");
require("./Et2Select/Et2Listbox");
require("./Et2Select/Et2Select");
require("./Et2Select/SelectTypes");
require("./Et2Select/Tag/Et2Tag");
require("./Et2Select/Tag/Et2CategoryTag");
require("./Et2Select/Tag/Et2EmailTag");
require("./Et2Select/Tag/Et2ThumbnailTag");
require("./Et2Spinner/Et2Spinner");
require("./Et2Switch/Et2Switch");
require("./Et2Switch/Et2SwitchIcon");
require("./Et2Template/Et2Template");
require("./Et2Textarea/Et2Textarea");
require("./Et2Textarea/Et2TextareaReadonly");
require("./Et2Textbox/Et2Textbox");
require("./Et2Textbox/Et2TextboxReadonly");
require("./Et2Textbox/Et2Number");
require("./Et2Textbox/Et2NumberReadonly");
require("./Et2Toolbar/Et2Toolbar");
require("./Et2Colorpicker/Et2Colorpicker");
require("./Et2Url/Et2Url");
require("./Et2Url/Et2UrlReadonly");
require("./Et2Url/Et2UrlEmail");
require("./Et2Url/Et2UrlEmailReadonly");
require("./Et2Url/Et2UrlPhone");
require("./Et2Url/Et2UrlPhoneReadonly");
require("./Et2Url/Et2UrlFax");
require("./Et2Url/Et2UrlFaxReadonly");
require("./Layout/Et2Split/Et2Split");
require("./Layout/RowLimitedMixin");
require("./Et2Vfs/Et2VfsMime");
require("./Et2Vfs/Et2VfsPath");
require("./Et2Vfs/Et2VfsSelectButton");
require("./Et2Vfs/Et2VfsSelectDialog");
require("./Et2Vfs/Et2VfsSelectRow");
require("./Et2Vfs/Et2VfsUid");
require("./Et2Vfs/Et2VfsName");
require("./Et2Vfs/Et2VfsUpload");
require("./Validators/EgwValidationFeedback");
require("./Et2Textbox/Et2Password");
require("./Et2Textbox/Et2Searchbox");
require("./Et2Tree/Et2Tree");
require("./Et2Tree/Et2TreeDropdown");
/* Include all widget classes here, we only care about them registering, not importing anything*/
require("./et2_widget_vfs"); // Vfs must be first (before et2_widget_file) due to import cycle
require("./et2_widget_template");
require("./et2_widget_grid");
require("./et2_widget_box");
require("./et2_widget_hbox");
require("./et2_widget_button");
require("./et2_widget_entry");
require("./et2_widget_textbox");
require("./et2_widget_number");
require("./et2_widget_selectbox");
require("./et2_widget_radiobox");
require("./et2_widget_date");
require("./et2_widget_dialog");
require("./et2_widget_diff");
require("./et2_widget_styles");
require("./et2_widget_html");
require("./et2_widget_htmlarea");
require("./et2_widget_taglist");
require("./et2_widget_toolbar");
require("./et2_widget_historylog");
require("./et2_widget_hrule");
require("./et2_widget_iframe");
require("./et2_widget_file");
require("./et2_widget_placeholder");
require("./et2_widget_progress");
require("./et2_widget_portlet");
require("./et2_widget_selectAccount");
require("./et2_widget_ajaxSelect");
require("./et2_widget_video");
require("./et2_widget_audio");
require("./et2_widget_barcode");
require("./et2_widget_itempicker");
require("./et2_widget_script");
require("./et2_widget_countdown");
require("./et2_extension_nextmatch");
require("./et2_extension_customfields");
var Et2Dialog_1 = require("./Et2Dialog/Et2Dialog");
var Et2Template_1 = require("./Et2Template/Et2Template");
/**
 * The etemplate2 class manages a certain etemplate2 instance.
 *
 * @param _container is the DOM-Node into which the DOM-Nodes of this instance
 * 	should be inserted
 * @param _menuaction is the URL to which the form data should be submitted.
 */
var etemplate2 = /** @class */ (function () {
    function etemplate2(_container, _menuaction, _uniqueId) {
        /**
         * Flag indicating that all loading is done, and the etemplate is ready to be used by app.js
         *
         * onChange handler checks this to ignore change events before the etemplate is ready
         */
        this.ready = false;
        if (typeof _menuaction == "undefined") {
            _menuaction = "EGroupware\\Api\\Etemplate::ajax_process_content";
        }
        // Copy the given parameters
        this._DOMContainer = _container;
        this.menuaction = _menuaction;
        // Unique ID to prevent DOM collisions across multiple templates
        this.uniqueId = _uniqueId ? _uniqueId : (_container.getAttribute("id") ? _container.getAttribute("id").replace('.', '-') : '');
        /**
         * Preset the object variable
         */
        this._widgetContainer = null;
        // List of templates (XML) that are known, not always used.  Indexed by id.
        // We share list of templates with iframes and popups
        try {
            if (opener && opener.Et2Template) {
                Et2Template_1.Et2Template.templateCache = opener.Et2Template.templateCache;
            }
            // @ts-ignore
            else if (top.Et2Template) {
                // @ts-ignore
                Et2Template_1.Et2Template.templateCache = top.Et2Template.templateCache;
            }
        }
        catch (e) {
            // catch security exception if opener is from a different domain
            console.log('Security exception accessing etemplate2.prototype of opener or top!');
        }
        if (typeof etemplate2.templates == "undefined") {
            etemplate2.templates = {};
        }
    }
    /**
     * Calls the resize event of all widgets
     *
     * @param {jQuery.event} e
     */
    etemplate2.prototype.resize = function (e) {
        var event = e;
        var self = this;
        var excess_height = false;
        // Check if the framework has an specific excess height calculation
        if (typeof window.framework != 'undefined' && typeof window.framework.get_wExcessHeight != 'undefined') {
            excess_height = window.framework.get_wExcessHeight(window);
        }
        //@TODO implement getaccess height for other framework and remove
        if (typeof event != 'undefined' && event.type == 'resize') {
            if (this.resize_timeout) {
                clearTimeout(this.resize_timeout);
            }
            this.resize_timeout = setTimeout(function () {
                var _a, _b, _c;
                self.resize_timeout = false;
                if (self._widgetContainer) {
                    var appHeader = jQuery('#divAppboxHeader');
                    //Calculate the excess height
                    var frameworkHeight = 0;
                    switch ((_c = (_b = (_a = window.framework) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : "") {
                        case 'EgwFramework':
                            // KDots doesn't need extra
                            break;
                        //break;
                        default:
                            frameworkHeight = 11;
                            break;
                    }
                    excess_height = egw_global_1.egw(window).is_popup() ? jQuery(window).height() - jQuery(self._DOMContainer).height() - appHeader.outerHeight() + frameworkHeight : 0;
                    // Recalculate excess height if the appheader is shown
                    if (appHeader.length > 0 && appHeader.is(':visible')) {
                        excess_height -= appHeader.outerHeight() - 9;
                    }
                    // Do not resize if the template height is bigger than screen available height
                    // For templates which have sub templates and they are bigger than screenHeight
                    if (screen.availHeight < jQuery(self._DOMContainer).height()) {
                        excess_height = 0;
                    }
                    // If we're visible, call the "resize" event of all functions which implement the
                    // "IResizeable" interface
                    if (jQuery(self.DOMContainer).is(":visible")) {
                        self._widgetContainer.iterateOver(function (_widget) {
                            if (typeof _widget.resize === 'function') {
                                _widget.resize(excess_height);
                            }
                        }, self, et2_core_interfaces_1.et2_IResizeable);
                    }
                }
            }, 100);
        }
        // Initial resize needs to be resized immediately (for instance for nextmatch resize)
        else if (this._widgetContainer) {
            // Call the "resize" event of all functions which implement the
            // "IResizeable" interface
            this._widgetContainer.iterateOver(function (_widget) {
                _widget.resize(excess_height);
            }, this, et2_core_interfaces_1.et2_IResizeable);
        }
    };
    ;
    /**
     * Clears the current instance.
     * @param _keep_app_object keep app object
     * @param _keep_session keep server-side et2 session eg. for vfs-select
     */
    etemplate2.prototype.clear = function (_keep_app_object, _keep_session) {
        this.DOMContainer.dispatchEvent(new Event("clear", { bubbles: true }));
        // Remove any handlers on window (resize)
        if (this.uniqueId) {
            jQuery(window).off("." + this.uniqueId);
        }
        // call our destroy_session handler, if it is not already unbind, and unbind it after
        if (this.destroy_session) {
            if (!_keep_session) {
                this.destroy_session();
            }
            this.unbind_unload();
        }
        if (this._widgetContainer != null) {
            // Un-register handler
            this._widgetContainer.egw().unregisterJSONPlugin(this.handle_assign, this, 'assign');
            // Unreference from any app objects
            for (var _i = 0, EgwApp_1 = egw_app_1.EgwApp; _i < EgwApp_1.length; _i++) {
                var app = EgwApp_1[_i];
                if (app.et2 == this.widgetContainer) {
                    app.et2 = null;
                }
            }
            this._widgetContainer.destroy();
            this._widgetContainer = null;
        }
        while (this.DOMContainer.lastChild)
            this.DOMContainer.lastChild.remove();
        // Remove self from the index
        for (var name_1 in Et2Template_1.Et2Template.templateCache) {
            if (typeof etemplate2._byTemplate[name_1] == "undefined") {
                continue;
            }
            for (var i = 0; i < etemplate2._byTemplate[name_1].length; i++) {
                if (etemplate2._byTemplate[name_1][i] === this) {
                    etemplate2._byTemplate[name_1].splice(i, 1);
                }
            }
        }
        // If using a private app object, remove all of them
        if (!_keep_app_object && this.app_obj !== window.app) {
            for (var app_name in this.app_obj) {
                if (this.app_obj[app_name] instanceof egw_app_1.EgwApp) {
                    this.app_obj[app_name].destroy(this.app_obj);
                }
            }
        }
    };
    Object.defineProperty(etemplate2.prototype, "widgetContainer", {
        get: function () {
            return this._widgetContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(etemplate2.prototype, "DOMContainer", {
        get: function () {
            return this._DOMContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(etemplate2.prototype, "etemplate_exec_id", {
        get: function () {
            return this._etemplate_exec_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(etemplate2.prototype, "isReady", {
        get: function () {
            return this.ready;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates an associative array containing the data array managers for each part
     * of the associative data array. A part is something like "content", "readonlys"
     * or "sel_options".
     *
     * @param {object} _data object with values for attributes content, sel_options, readonlys, modifications
     */
    etemplate2.prototype._createArrayManagers = function (_data) {
        if (typeof _data == "undefined") {
            _data = {};
        }
        // Create all neccessary _data entries
        var neededEntries = ["content", "sel_options", "readonlys", "modifications",
            "validation_errors"];
        for (var i = 0; i < neededEntries.length; i++) {
            if (typeof _data[neededEntries[i]] == "undefined" || !_data[neededEntries[i]]) {
                egw_global_1.egw.debug("log", "Created not passed entry '" + neededEntries[i] +
                    "' in data array.");
                _data[neededEntries[i]] = {};
            }
        }
        var result = {};
        // Create an array manager object for each part of the _data array.
        for (var key in _data) {
            switch (key) {
                case "etemplate_exec_id": // already processed
                case "app_header":
                    break;
                case "readonlys":
                    result[key] = new et2_core_arrayMgr_1.et2_readonlysArrayMgr(_data[key]);
                    result[key].perspectiveData.owner = this._widgetContainer;
                    break;
                default:
                    result[key] = new et2_core_arrayMgr_1.et2_arrayMgr(_data[key]);
                    result[key].perspectiveData.owner = this._widgetContainer;
            }
        }
        return result;
    };
    /**
     * Bind our unload handler to notify server that eT session/request no longer needed
     *
     * We only bind, if we have an etemplate_exec_id: not the case for pure client-side
     * calls, eg. via et2_dialog.
     */
    etemplate2.prototype.bind_unload = function () {
        var _a;
        // Prompt user to save for dirty popups
        if (window !== egw_topWindow() && !this.close_prompt) {
            this.close_prompt = this._close_changed_prompt.bind(this);
            window.addEventListener("beforeunload", this.close_prompt);
        }
        else if (window == egw_topWindow()) {
            window.addEventListener("beforeunload", this.destroy_session);
        }
        if (this._etemplate_exec_id) {
            this.destroy_session = jQuery.proxy(function (ev) {
                // need to use async === "keepalive" to run via beforeunload
                egw_global_1.egw.json("EGroupware\\Api\\Etemplate::ajax_destroy_session", [this._etemplate_exec_id], null, null, "keepalive").sendRequest();
            }, this);
            window.addEventListener("unload", this.destroy_session);
        }
        // If in a popup, remove the associated helper iframe when the popup closes
        if (window !== egw_topWindow()) {
            var iframe_1 = (_a = this.DOMContainer.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector("[name='egw_iframe_autocomplete_helper']");
            if (iframe_1) {
                window.addEventListener("pagehide", function () {
                    // Clean up the iframe
                    iframe_1.remove();
                });
            }
        }
    };
    etemplate2.prototype._close_changed_prompt = function (e) {
        if (this._skip_close_prompt || !this.isDirty()) {
            this.clear();
            return;
        }
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = '';
        return "";
    };
    etemplate2.prototype.skip_close_prompt = function (skip) {
        if (skip === void 0) { skip = true; }
        this._skip_close_prompt = skip;
    };
    /**
     * Unbind our unload handler
     */
    etemplate2.prototype.unbind_unload = function () {
        window.removeEventListener("beforeunload", this.destroy_session);
        window.removeEventListener("beforeunload", this.close_prompt);
        if (window.onbeforeunload === this.destroy_session) {
            window.onbeforeunload = null;
        }
        else {
            var onbeforeunload_1 = window.onbeforeunload;
            window.onbeforeunload = null;
            // bind unload handler again (can NOT do it direct, as this would be quick enough to be still triggered!)
            window.setTimeout(function () {
                window.onbeforeunload = onbeforeunload_1;
            }, 100);
        }
        delete this.destroy_session;
    };
    /**
     * Download a URL not triggering our unload handler and therefore destroying our et2 request
     *
     * We use a new anchor element to avoid not destroying other etemplates as well, which
     * is what happens if we use window.location
     *
     * @param {string} _url
     */
    etemplate2.prototype.download = function (_url) {
        var a = document.createElement('a');
        a.href = _url;
        a.download = 'download';
        // Programmatically trigger a click on the anchor element
        a.click();
    };
    /**
     * Loads the template from the given URL and sets the data object
     *
     * @param {string} _name name of template
     * @param {string} _url url to load template
     * @param {object} _data object with attributes content, langRequire, etemplate_exec_id, ...
     * @param {function} _callback called after template is loaded
     * @param {object} _app local app object
     * @param {boolean} _no_et2_ready true: do not send et2_ready, used by et2_dialog to not overwrite app.js et2 object
     * @param {string} _open_target flag of string to distinguish between tab target and normal app object
     * @return Promise
     */
    etemplate2.prototype.load = function (_name, _url, _data, _callback, _app, _no_et2_ready, _open_target) {
        return __awaiter(this, void 0, void 0, function () {
            var app, currentapp, appname, msg, start_time, promisses;
            var _this = this;
            return __generator(this, function (_a) {
                this.ready = false;
                app = _app || window.app;
                this.name = _name; // store top-level template name to have it available in widgets
                // store template base url, in case initial template is loaded via webdav, to use that for further loads too
                // need to split off domain first, as it could contain app-name part of template eg. stylite.report.xet and https://my.stylite.de/egw/...
                if (_url && _url[0] != '/') {
                    this.template_base_url = _url.match(/https?:\/\/[^/]+/).shift();
                    _url = _url.split(this.template_base_url)[1];
                }
                else {
                    this.template_base_url = '';
                }
                this.template_base_url += _url.split(_name.split('.').shift())[0];
                egw_global_1.egw().debug("info", "Loaded data", _data);
                currentapp = this.app = _data.currentapp || egw_global_1.egw().app_name();
                appname = _name.split('.')[0];
                // if no app object provided and template app is not currentapp (eg. infolog CRM view)
                // create private app object / closure with just classes / prototypes
                if (!_app && appname && appname != currentapp || _open_target) {
                    app = { classes: window.app.classes };
                }
                // remember used app object, to eg. use: onchange="widget.getInstanceMgr().app_object[app].callback()"
                this.app_obj = app;
                msg = _data.content.msg;
                if (typeof msg != 'undefined') {
                    egw_global_1.egw(window).message(msg);
                    delete _data.content.msg;
                }
                // Register a handler for AJAX responses
                egw_global_1.egw(currentapp, window).registerJSONPlugin(this.handle_assign, this, 'assign');
                if (egw_global_1.egw.debug_level() >= 3) {
                    if (console.groupCollapsed) {
                        egw_global_1.egw.window.console.groupCollapsed("Loading %s into ", _name, '#' + this._DOMContainer.id);
                    }
                }
                // Timing & profiling on debug level 'log' (4)
                if (egw_global_1.egw.debug_level() >= 4) {
                    if (console.time) {
                        console.time(_name);
                    }
                    if (console.profile) {
                        console.profile(_name);
                    }
                    start_time = (new Date).getTime();
                }
                promisses = [window.egw_ready];
                if (Array.isArray(_data.langRequire)) {
                    promisses.push(egw_global_1.egw(currentapp, window).langRequire(window, _data.langRequire));
                }
                if (appname && typeof app[appname] !== "object") {
                    /*
                    Don't have the app.ts code - load it here and delay load until its ready
                                promisses.push(import(egw.webserverUrl + "/" + appname + "/js/app.min.js?" + ((new Date).valueOf() / 86400 | 0).toString())
                                    .then(() =>
                                    {
                                        if(typeof app.classes[appname] === "undefined")
                                        {
                                            throw new Error("app.classes." + appname + " not found!");
                                        }
                                    }));
                    */
                }
                return [2 /*return*/, Promise.all(promisses).catch(function (err) {
                        console.log("et2.load(): error loading lang-files and app.js: " + err.message);
                    }).then(function () {
                        _this.clear();
                        // Initialize application js
                        var app_callback = null;
                        // Only initialize once
                        // new app class with constructor function in app.classes[appname]
                        if (typeof app[appname] !== 'object' && typeof app.classes[appname] == 'function') {
                            app[appname] = new app.classes[appname]();
                        }
                        else if (appname && typeof app[appname] !== "object") {
                            egw_global_1.egw.debug("warn", "Did not load '%s' JS object", appname);
                        }
                        // If etemplate current app does not match app owning the template,
                        // initialize the current app too
                        if (typeof app[_this.app] !== 'object' && typeof app.classes[_this.app] == 'function') {
                            app[_this.app] = new app.classes[_this.app]();
                        }
                        if (typeof app[appname] == "object") {
                            app_callback = function (_et2, _name) {
                                app[appname].et2_ready(_et2, _name);
                            };
                        }
                        // Create the basic widget container and attach it to the DOM
                        _this._widgetContainer = new Et2Template_1.Et2Template(egw_global_1.egw(currentapp, egw_global_1.egw.elemWindow(_this._DOMContainer)));
                        _this._widgetContainer.setInstanceManager(_this);
                        _this._widgetContainer.template = _this.name;
                        if (_url) {
                            _this._widgetContainer.url = _url;
                        }
                        // Set array managers first, or errors will happen
                        _this._widgetContainer.setArrayMgrs(_this._createArrayManagers(_data));
                        // Template starts loading when added
                        _this.DOMContainer.append(_this._widgetContainer);
                        // store the id to submit it back to server
                        if (_data) {
                            _this._etemplate_exec_id = _data.etemplate_exec_id;
                            // set app_header
                            if (typeof _data.app_header == 'string') {
                                // @ts-ignore
                                window.egw_app_header(_data.app_header);
                            }
                            // bind our unload handler
                            _this.bind_unload();
                        }
                        var _load = function () {
                            var _this = this;
                            // Add into indexed list - do this before, so anything looking can find it,
                            // even if it's not loaded
                            if (typeof etemplate2._byTemplate[_name] == "undefined") {
                                etemplate2._byTemplate[_name] = [];
                            }
                            etemplate2._byTemplate[_name].push(this);
                            // Connect to the window resize event
                            jQuery(window).on("resize." + this.uniqueId, this, function (e) {
                                e.data.resize(e);
                            });
                            if (egw_global_1.egw.debug_level() >= 3 && console.groupEnd) {
                                if (console.timeStamp) {
                                    console.timeStamp("loading finished, waiting for deferred");
                                }
                                egw_global_1.egw.window.console.groupEnd();
                            }
                            // Wait for everything to be loaded, then finish it up.  Use timeout to give anything else a chance
                            // to run.
                            setTimeout(function () {
                                _this._widgetContainer.updateComplete.then(function () {
                                    // Clear dirty now that it's all loaded
                                    _this.widgetContainer.iterateOver(function (_widget) {
                                        _widget.resetDirty();
                                    }, _this, et2_core_interfaces_1.et2_IInput);
                                    egw_global_1.egw.debug("log", "Finished loading %s, triggering load event", _name);
                                    if (typeof window.framework != 'undefined' && typeof window.framework.et2_loadingFinished != 'undefined') {
                                        //Call loading finished method of the framework with local window
                                        window.framework.et2_loadingFinished(egw_global_1.egw(window).window);
                                    }
                                    // Trigger the "resize" event
                                    _this.resize();
                                    // Automatically set focus to first visible input for popups
                                    if (_this._widgetContainer.egw().is_popup() && jQuery('[autofocus]', _this._DOMContainer).focus().length == 0) {
                                        _this.focusOnFirstInput();
                                    }
                                    // Now etemplate is ready for others to interact with (eg: app.js)
                                    _this.ready = true;
                                    // Tell others about it
                                    if (typeof _callback == "function") {
                                        _callback.call(window, _this, _name);
                                    }
                                    if (app_callback && _callback != app_callback && !_no_et2_ready) {
                                        app_callback.call(window, _this, _name);
                                    }
                                    if (appname && appname != _this.app && typeof app[_this.app] == "object" && !_no_et2_ready) {
                                        // Loaded a template from a different application?
                                        // Let the application that loaded it know too
                                        app[_this.app].et2_ready(_this, _this.name);
                                    }
                                    // Dispatch an event that will bubble through shadow DOM boundary (pass through custom elements)
                                    _this._DOMContainer.dispatchEvent(new CustomEvent('load', {
                                        bubbles: true,
                                        composed: true,
                                        detail: _this
                                    }));
                                    // Profiling
                                    if (egw_global_1.egw.debug_level() >= 4) {
                                        if (console.timeEnd) {
                                            console.timeEnd(_name);
                                        }
                                        if (console.profileEnd) {
                                            console.profileEnd(_name);
                                        }
                                        var end_time = (new Date).getTime();
                                        var gen_time_div = jQuery('#divGenTime_' + appname);
                                        if (!gen_time_div.length) {
                                            gen_time_div = jQuery('.pageGenTime');
                                        }
                                        gen_time_div.find('.et2RenderTime').remove();
                                        gen_time_div.append('<span class="et2RenderTime">' + egw_global_1.egw.lang('eT2 rendering took %1s', '' + ((end_time - start_time) / 1000)) + '</span>');
                                    }
                                });
                            });
                        };
                        // Load & process
                        _load.apply(_this, []);
                    }).then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this._widgetContainer.updateComplete];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
            });
        });
    };
    etemplate2.prototype.focusOnFirstInput = function () {
        var $input = jQuery('input:visible,et2-textbox:visible,et2-select-email:visible', this.DOMContainer)
            // Date fields open the calendar popup on focus
            .not('.et2_date')
            .filter(function () {
            // Skip inputs that are out of tab ordering
            var $this = jQuery(this);
            return !$this.attr('tabindex') || parseInt($this.attr('tabIndex')) >= 0;
        }).first();
        // mobile device, focus only if the field is empty (usually means new entry)
        // should focus always for non-mobile one
        if (egw_action_common_1.egwIsMobile() && $input.val() == "" || !egw_action_common_1.egwIsMobile()) {
            $input.focus();
        }
    };
    /**
     * Check if template contains any dirty (unsaved) content
     *
     * @returns {Boolean}
     */
    etemplate2.prototype.isDirty = function () {
        var _a;
        var dirty = false;
        (_a = this._widgetContainer) === null || _a === void 0 ? void 0 : _a.iterateOver(function (_widget) {
            if (_widget.isDirty && _widget.isDirty()) {
                console.info(_widget.id + " is dirty", _widget);
                dirty = true;
            }
        }, this);
        return dirty;
    };
    /**
     * Submit the et2_container form to a blank iframe in order to activate browser autocomplete
     */
    etemplate2.prototype.autocomplete_fixer = function () {
        var self = this;
        var form = self._DOMContainer;
        // Safari always do the autofill for password field regardless of autocomplete = off
        // and since there's no other way to switch the autocomplete of, we should switch the
        // form autocomplete off (e.g. compose dialog, attachment password field)
        if (navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i)
            && jQuery('input[type="password"]').length > 0) {
            return;
        }
        if (form) {
            // Stop submit propagation in order to not fire other possible submit events
            form.onsubmit = function (e) {
                e.stopPropagation();
                // Avoid blank popup
                e.preventDefault();
            };
            // Firefox give a security warning when transmitting to "about:blank" from a https site
            // we work around that by giving existing etemplate/empty.html url
            // Safari shows same warning, thought Chrome userAgent also includes Safari
            if (navigator.userAgent.match(/(firefox|safari|iceweasel)/i) && !navigator.userAgent.match(/chrome/i)) {
                jQuery(form).attr({ action: egw_global_1.egw.webserverUrl + '/api/templates/default/empty.html', method: 'post' });
            }
            // need to trigger submit because submit() would not trigger onsubmit event
            // since the submit does not get fired directly via user interaction.
            jQuery(form).trigger('submit');
        }
    };
    etemplate2.prototype._set_button = function (button, values) {
        if (typeof button == 'string') {
            button = this._widgetContainer.getWidgetById(button);
        }
        // Button parameter used for submit buttons in datagrid
        // TODO: This should probably go in nextmatch's getValues(), along with selected rows somehow.
        // I'm just not sure how.
        if (button && !values.button) {
            var i = void 0;
            values.button = {};
            var path = button.getPath();
            var target = values;
            for (i = 0; i < path.length; i++) {
                if (!values[path[i]]) {
                    values[path[i]] = {};
                }
                target = values[path[i]];
            }
            if (target != values || button.id.indexOf('[') != -1 && path.length == 0) {
                var indexes = button.id.split('[');
                if (indexes.length > 1) {
                    indexes = [indexes.shift(), indexes.join('[')];
                    indexes[1] = indexes[1].substring(0, indexes[1].length - 1);
                    var children = indexes[1].split('][');
                    if (children.length) {
                        indexes = jQuery.merge([indexes[0]], children);
                    }
                }
                var idx = '';
                for (i = 0; i < indexes.length; i++) {
                    idx = indexes[i];
                    if (!target[idx] || target[idx]['$row_cont']) {
                        target[idx] = i < indexes.length - 1 ? {} : true;
                    }
                    target = target[idx];
                }
            }
            else if (typeof values.button == 'undefined' || jQuery.isEmptyObject(values.button)) {
                delete values.button;
                values[button.id] = true;
            }
        }
    };
    /**
     * Check if there is an invalid widget / all widgets are valid
     *
     * @param container
     * @param values
     * @return Promise<et2_widget>|Promise<Et2Widget>|null
     */
    etemplate2.prototype.isInvalid = function (container, values) {
        return __awaiter(this, void 0, void 0, function () {
            var invalid;
            return __generator(this, function (_a) {
                if (typeof container === 'undefined') {
                    container = this._widgetContainer;
                }
                if (typeof values === 'undefined') {
                    values = this.getValues(container);
                }
                invalid = [];
                container.iterateOver(function (_widget) {
                    var submit = _widget.submit(values);
                    if (submit === false) {
                        invalid.push(_widget);
                    }
                    else if (submit instanceof Promise) {
                        invalid.push(submit.then(function (ok) {
                            return ok ? false : this;
                        }.bind(_widget)));
                    }
                }, this, et2_core_interfaces_1.et2_ISubmitListener);
                return [2 /*return*/, Promise.all(invalid)];
            });
        });
    };
    /**
     * Submit form via ajax
     *
     * @param {(et2_button|string)} button button widget or string with id
     * @param {boolean|string} async true: do an asynchronious submit, string: spinner message (please wait...)
     * default is asynchronoush with message
     * @param {boolean} no_validation - Do not do individual widget validation, just submit their current values
     * @param {et2_widget|undefined} _container container to submit, default whole template
     * @return {boolean} true if submit was send, false if eg. validation stoped submit
     */
    etemplate2.prototype.submit = function (button, async, no_validation, _container) {
        var _this = this;
        var api = this._widgetContainer.egw();
        if (typeof no_validation == 'undefined') {
            no_validation = false;
        }
        var container = _container || this._widgetContainer;
        // Get the form values
        var values = this.getValues(container);
        var doSubmit = function () {
            if (typeof async == 'undefined' || typeof async == 'string') {
                api.loading_prompt('et2_submit_spinner', true, api.lang(typeof async == 'string' ? async : 'Please wait...'));
                async = true;
            }
            if (button) {
                _this._set_button(button, values);
            }
            // Create the request object
            if (_this.menuaction) {
                //Autocomplete
                _this.autocomplete_fixer();
                // unbind our session-destroy handler, as we are submitting
                _this.unbind_unload();
                var request = api.json(_this.menuaction, [_this._etemplate_exec_id, values, no_validation], function () {
                    api.loading_prompt('et2_submit_spinner', false);
                }, _this, async);
                var request_promise = request.sendRequest();
                // Set up timeout for 30 seconds
                var warning_message_1 = null;
                var timeout_id_1 = window.setTimeout(function () {
                    // Do not abort request, it might still come
                    api.debug("warn", "Request '" + _this.menuaction + "' timeout");
                    warning_message_1 = api.message(api.lang("No response from server: your data is probably NOT saved"), "warning");
                    api.loading_prompt('et2_submit_spinner', false);
                }, 30000);
                // Cancel timeout
                request_promise.then(function () {
                    // Responded  * and response processed *
                    clearTimeout(timeout_id_1);
                    if (warning_message_1) {
                        warning_message_1.close();
                    }
                });
            }
            else {
                _this._widgetContainer.egw().debug("warn", "Missing menuaction for submit.  Values: ", values);
            }
        };
        // Trigger the submit event
        var canSubmit = true;
        var invalid = null;
        if (!no_validation) {
            canSubmit = !(invalid = this.isInvalid(container, values));
            invalid === null || invalid === void 0 ? void 0 : invalid.then(function (widgets) {
                var invalid_widgets = widgets.filter(function (widget) { return widget; });
                if (invalid_widgets.length && !(invalid_widgets[0] instanceof et2_core_widget_1.et2_widget)) {
                    // Handle validation_error (messages coming back from server as a response) if widget is children of a tabbox
                    var tmpWidget = invalid_widgets[0];
                    while (tmpWidget.getParent() && tmpWidget.getType() !== 'ET2-TABBOX') {
                        tmpWidget = tmpWidget.getParent();
                    }
                    //Activate the tab where the widget with validation error is located
                    if (tmpWidget.getType() === 'ET2-TABBOX') {
                        tmpWidget.activateTab(invalid_widgets[0]);
                    }
                    // scroll the widget into view
                    if (typeof tmpWidget.scrollIntoView === 'function') {
                        tmpWidget.scrollIntoView();
                    }
                }
                else {
                    doSubmit();
                }
            });
        }
        else {
            doSubmit();
        }
        return canSubmit;
    };
    /**
     * Does a full form post submit necessary for downloads
     *
     * Only use this one if you need it, use the ajax submit() instead.
     * It ensures eT2 session continues to exist on server by unbinding unload handler and rebinding it.
     *
     * @param {(et2_button|string)} button button widget or string with id
     */
    etemplate2.prototype.postSubmit = function (button) {
        // Get the form values
        var values = this.getValues(this._widgetContainer);
        // Trigger the submit event
        var canSubmit = true;
        this._widgetContainer.iterateOver(function (_widget) {
            if (_widget.submit(values) === false) {
                canSubmit = false;
            }
        }, this, et2_core_interfaces_1.et2_ISubmitListener);
        if (canSubmit) {
            if (button) {
                this._set_button(button, values);
            }
            // unbind our session-destroy handler, as we are submitting
            this.unbind_unload();
            var form = jQuery("<form id='form' action='" + egw_global_1.egw().webserverUrl +
                "/index.php?menuaction=" + this._widgetContainer.egw().getAppName() + ".EGroupware\\Api\\Etemplate.process_exec&cd=popup' method='POST'>");
            var etemplate_id = jQuery(document.createElement("input"))
                .attr("name", 'etemplate_exec_id')
                .attr("type", 'hidden')
                .val(this._etemplate_exec_id)
                .appendTo(form);
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = 'value';
            input.value = egw_global_1.egw().jsonEncode(values);
            form.append(input);
            form.appendTo(jQuery('body')).submit();
            // bind unload handler again (can NOT do it direct, as this would be quick enough to be still triggered!)
            window.setTimeout(jQuery.proxy(this.bind_unload, this), 100);
        }
    };
    /**
     * Fetches all input element values and returns them in an associative
     * array. Widgets which introduce namespacing can use the internal _target
     * parameter to add another layer.
     *
     * @param {et2_widget} _root widget to start iterating
     * @param {boolean} skip_reset_dirty true: do NOT reset dirty status
     */
    etemplate2.prototype.getValues = function (_root, skip_reset_dirty) {
        var result = {};
        // Iterate over the widget tree
        _root.iterateOver(function (_widget) {
            // The widget must have an id to be included in the values array
            if (_widget.id === undefined || _widget.id === "") {
                return;
            }
            // Get the path to the node we have to store the value at
            var path = _widget.getPath();
            // check if id contains a hierachical name, eg. "button[save]"
            var id = _widget.id || "";
            var indexes = id === null || id === void 0 ? void 0 : id.split('[');
            if ((indexes === null || indexes === void 0 ? void 0 : indexes.length) > 1) {
                indexes = [indexes.shift(), indexes.join('[')];
                indexes[1] = indexes[1].substring(0, indexes[1].length - 1);
                var children = indexes[1].split('][');
                if (children.length) {
                    indexes = jQuery.merge([indexes[0]], children);
                }
                path = path.concat(indexes);
                // Take the last one as the ID
                id = path.pop();
            }
            // Set the _target variable to that node
            var _target = result;
            for (var i = 0; i < path.length; i++) {
                // Create a new object for not-existing path nodes
                if (typeof _target[path[i]] === 'undefined') {
                    _target[path[i]] = {};
                }
                // Check whether the path node is really an object
                if (typeof _target[path[i]] === 'object') {
                    _target = _target[path[i]];
                }
                else {
                    egw_global_1.egw.debug("error", "ID collision while writing at path " +
                        "node '" + path[i] + "'");
                }
            }
            // Handle arrays, eg radio[]
            if (id === "") {
                id = typeof _target == "undefined" ? 0 : Object.keys(_target).length;
            }
            var value = _widget.getValue(true); // true: let widget know getValue() / submit is calling it
            // Check whether the entry is really undefined
            if (typeof _target[id] != "undefined" && (typeof _target[id] != 'object' || typeof value != 'object')) {
                // Don't warn about children of nextmatch header - they're part of nm value
                if (!_widget.getParent().instanceOf(et2_extension_nextmatch_1.et2_nextmatch_header_bar)) {
                    egw_global_1.egw.debug("warn", _widget, "Overwriting value of '" + _widget.id +
                        "', id exists twice!");
                }
            }
            // Store the value of the widget and reset its dirty flag
            if (value !== null) {
                // Merge, if possible (link widget)
                if (typeof _target[id] == 'object' && typeof value == 'object') {
                    _target[id] = jQuery.extend({}, _target[id], value);
                }
                else {
                    _target[id] = value;
                }
            }
            else if (jQuery.isEmptyObject(_target)) {
                // Avoid sending back empty sub-arrays
                _target = result;
                for (var i = 0; i < path.length - 1; i++) {
                    _target = _target[path[i]];
                }
                delete _target[path[path.length - 1]];
            }
            if (!skip_reset_dirty) {
                _widget.resetDirty();
            }
        }, this, et2_core_interfaces_1.et2_IInput);
        egw_global_1.egw().debug("info", "Value", result);
        return result;
    };
    /**
     * "Intelligently" refresh the template based on the given ID
     *
     * Rather than blindly re-load the entire template, we try to be a little smarter about it.
     * If there's a message provided, we try to find where it goes and set it directly.  Then
     * we look for a nextmatch widget, and tell it to refresh its data based on that ID.
     *
     * @see egw_message.refresh()
     *
     * @param {string} msg message to try to display.  eg: "Entry added" (not used anymore, handeled by egw_refresh and egw_message)
     * @param {string} app app-name
     * @param {(string|null)} id application specific entry ID to try to refresh
     * @param {(string|null)} type type of change.  One of 'update','edit', 'delete', 'add' or null
     * @return {boolean} true if nextmatch found and refreshed, false if not
     */
    etemplate2.prototype.refresh = function (msg, app, id, type) {
        // msg, app;	// unused but required by function signature
        var refresh_done = false;
        // Refresh nextmatches
        this._widgetContainer.iterateOver(function (_widget) {
            // Trigger refresh
            _widget.refresh(id, type);
            refresh_done = true;
        }, this, et2_extension_nextmatch_1.et2_nextmatch);
        return refresh_done;
    };
    /**
     * "Intelligently" refresh a given app
     *
     * @see egw_message.refresh()
     *
     * @param {string} _msg message to try to display.  eg: "Entry added" (not used anymore, handeled by egw_refresh and egw_message)
     * @param {string} _app app-name
     * @param {(string|null)} _id application specific entry ID to try to refresh
     * @param {(string|null)} _type type of change.  One of 'update','edit', 'delete', 'add' or null
     * @return {boolean} true if nextmatch found and refreshed, false if not
     */
    etemplate2.app_refresh = function (_msg, _app, _id, _type) {
        var refresh_done = false;
        var app = _app.split('-');
        var et2 = etemplate2.getByApplication(app[0]);
        for (var i = 0; i < et2.length; i++) {
            if (app[1]) {
                if (et2[i]['uniqueId'].match(_app)) {
                    refresh_done = et2[i].refresh(_msg, app[0], _id, _type) || refresh_done;
                    break;
                }
            }
            else {
                refresh_done = et2[i].refresh(_msg, app[0], _id, _type) || refresh_done;
            }
        }
        return refresh_done;
    };
    /**
     * "Intelligently" print a given etemplate
     *
     * Mostly, we let the nextmatch change how many rows it's showing, so you don't
     * get just one printed page.
     *
     * @return {Deferred[]} A list of Deferred objects that must complete before
     *  actual printing can begin.
     */
    etemplate2.prototype.print = function () {
        // Sometimes changes take time
        var deferred = [];
        // Skip hidden etemplates
        if (jQuery(this._DOMContainer).filter(':visible').length === 0) {
            return [];
        }
        // Allow any widget to change for printing
        this._widgetContainer.iterateOver(function (_widget) {
            // Skip widgets from a different etemplate (home)
            if (_widget.getInstanceManager() != this) {
                return;
            }
            // Skip hidden widgets
            if (jQuery(_widget.getDOMNode()).filter(':visible').length === 0) {
                return;
            }
            var result = _widget.beforePrint();
            if (typeof result == "object") {
                deferred.push(result);
            }
        }, this, et2_core_interfaces_1.et2_IPrint);
        return deferred;
    };
    // Some static things to make getting into widget context a little easier //
    /**
     * Get a list of etemplate2 objects that loaded the given template name
     *
     * @param template String Name of the template that was loaded
     *
     * @return Array list of etemplate2 that have that template
     */
    etemplate2.getByTemplate = function (template) {
        if (typeof etemplate2._byTemplate[template] != "undefined") {
            return etemplate2._byTemplate[template];
        }
        else {
            // Return empty array so you can always iterate over results
            return [];
        }
    };
    /**
     * Get a list of etemplate2 objects that are associated with the given application
     *
     * "Associated" is determined by the first part of the template
     *
     * @param {string} app app-name
     * @return {etemplate2[]} list of etemplate2 that have that app as the first part of their loaded template
     */
    etemplate2.getByApplication = function (app) {
        var list = [];
        for (var name_2 in etemplate2._byTemplate) {
            if (name_2.indexOf(app + ".") == 0) {
                list = list.concat(etemplate2._byTemplate[name_2]);
            }
        }
        return list;
    };
    /**
     * Get all etemplate2 objects with the given etemplate_exec_id
     *
     * @param {string} exec_id name of server-side eTemplate session
     * @returns {etemplate2[]}
     */
    etemplate2.getByEtemplateExecId = function (exec_id) {
        var list = [];
        for (var name_3 in etemplate2._byTemplate) {
            for (var i = 0; i < etemplate2._byTemplate[name_3].length; i++) {
                var et = etemplate2._byTemplate[name_3][i];
                if (et._etemplate_exec_id === exec_id) {
                    list.push(et);
                }
            }
        }
        return list;
    };
    /**
     * Get a etemplate2 object from the given DOM ID
     *
     * @param {string} id DOM ID of the container node
     * @returns {etemplate2|null}
     */
    etemplate2.getById = function (id) {
        for (var name_4 in etemplate2._byTemplate) {
            for (var i = 0; i < etemplate2._byTemplate[name_4].length; i++) {
                var et = etemplate2._byTemplate[name_4][i];
                if (et._DOMContainer.getAttribute("id") == id) {
                    return et;
                }
            }
        }
        return null;
    };
    /**
     * Plugin for egw.json type "et2_load"
     *
     * @param _type
     * @param _response
     * @returns Promise
     */
    etemplate2.handle_load = function (_type, _response) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var data, dialog, egw_1, egw, load, node, uniqueId, old, et2;
            var _this = this;
            return __generator(this, function (_d) {
                data = _response.data;
                dialog = (_b = (_a = document.querySelector('et2-dialog > form' + (data.DOMNodeID ? '#' + data.DOMNodeID : '.dialog_content'))) === null || _a === void 0 ? void 0 : _a.parentNode) !== null && _b !== void 0 ? _b : 
                // Reloaded into same container
                (((_c = this === null || this === void 0 ? void 0 : this.DOMContainer) === null || _c === void 0 ? void 0 : _c.parentNode) instanceof Et2Dialog_1.Et2Dialog ? this.DOMContainer.parentNode : undefined);
                if (dialog) {
                    // stop dialogs from being closed on button click
                    dialog.callback = function () { return false; };
                }
                // handle Api\Framework::refresh_opener()
                if (Array.isArray(data['refresh-opener'])) {
                    if (window.opener || dialog) // && typeof window.opener.egw_refresh == 'function')
                     {
                        egw_1 = window.egw(dialog ? window : opener);
                        egw_1.refresh.apply(egw_1, data['refresh-opener']);
                    }
                }
                egw = window.egw(window);
                // need to set app_header before message, as message temp. replaces app_header
                if (typeof data.data == 'object' && typeof data.data.app_header == 'string') {
                    if (dialog) {
                        dialog.title = data.data.app_header;
                    }
                    else {
                        egw.app_header(data.data.app_header, data.data.currentapp || null);
                    }
                    delete data.data.app_header;
                }
                // handle Api\Framework::message()
                if (Array.isArray(data.message)) {
                    egw.message.apply(egw, data.message);
                }
                // handle Api\Framework::window_close(), this will terminate execution
                if (data['window-close']) {
                    // Let anything else in the response run first
                    egw.window.setTimeout(function () {
                        if (typeof data['window-close'] == 'string' && data['window-close'] !== 'true') {
                            alert(data['window-close']);
                        }
                        if (dialog) {
                            // Dialog skips close prompt & cleanup
                            _this === null || _this === void 0 ? void 0 : _this.clear();
                            return dialog.close();
                        }
                        egw.close();
                    });
                    return [2 /*return*/, true];
                }
                // handle Api\Framework::window_focus()
                if (data['window-focus']) {
                    window.focus();
                }
                // handle framework.setSidebox calls
                if (!dialog && window.framework && Array.isArray(data.setSidebox)) {
                    if (data['fw-target']) {
                        data.setSidebox[0] = data['fw-target'];
                    }
                    window.framework.setSidebox.apply(window.framework, data.setSidebox);
                }
                // regular et2 re-load
                if (typeof data.url == "string" && typeof data.data === 'object') {
                    load = void 0;
                    // @ts-ignore
                    if (this && typeof this.load == 'function') {
                        // Called from etemplate
                        // set id in case serverside returned a different template
                        this._DOMContainer.id = this.uniqueId = data.DOMNodeID;
                        // @ts-ignore
                        load = this.load(data.name, data.url, data.data);
                    }
                    else {
                        node = document.getElementById(data.DOMNodeID);
                        uniqueId = data.DOMNodeID;
                        if (node) {
                            if (node.children.length) {
                                old = etemplate2.getById(node.id);
                                if (old) {
                                    old.clear();
                                }
                            }
                            if (data['open_target'] && !uniqueId.match(data['open_target'])) {
                                uniqueId = data.DOMNodeID.replace('.', '-') + '-' + data['open_target'];
                            }
                            et2 = new etemplate2(node, data.data.menuaction, uniqueId);
                            load = et2.load(data.name, data.url, data.data, null, null, null, data['fw-target']);
                        }
                        else {
                            egw.debug("error", "Could not find target node %s", data.DOMNodeID);
                        }
                    }
                    // Extra handling for being loaded into a Et2Dialog
                    if (dialog) {
                        load.then(function () {
                            // Move footer type buttons into dialog footer
                            var buttons = dialog._adoptTemplateButtons();
                            // Make sure adopted buttons are removed on clear
                            dialog.addEventListener("clear", function () {
                                buttons.forEach(function (n) { return n.remove(); });
                            });
                        });
                    }
                    return [2 /*return*/, load];
                }
                throw ("Error while parsing et2_load response");
            });
        });
    };
    /**
     * Plugin for egw.json type "et2_validation_error"
     *
     * @param _type
     * @param _response
     */
    etemplate2.handle_validation_error = function (_type, _response) {
        // Display validation errors
        for (var id in _response.data) {
            // @ts-ignore
            var widget = this._widgetContainer.getWidgetById(id);
            if (widget && widget.instanceOf(et2_core_baseWidget_1.et2_baseWidget)) {
                widget.showMessage(_response.data[id], 'validation_error');
            }
            else if (widget && typeof widget.set_validation_error == "function") {
                widget.set_validation_error(_response.data[id]);
            }
            else if (!widget) {
                console.warn("Validation error without widget.  ID:" + id + " - " + _response.data[id]);
                continue;
            }
            // Handle validation_error (messages coming back from server as a response) if widget is children of a tabbox
            var tmpWidget = widget;
            while (tmpWidget.getParent() && tmpWidget.getType() !== 'ET2-TABBOX') {
                tmpWidget = tmpWidget.getParent();
            }
            //Activate the tab where the widget with validation error is located
            if (tmpWidget.getType() === 'ET2-TABBOX') {
                tmpWidget.activateTab(widget);
            }
            // scroll the widget into view
            if (typeof widget.getDOMNode().scrollIntoView === 'function') {
                widget.scrollIntoView();
            }
        }
        egw_global_1.egw().debug("warn", "Validation errors", _response.data);
    };
    /**
     * Handle assign for attributes on etemplate2 widgets
     *
     * @param {string} type "assign"
     * @param {object} res Response
     * res.data.id {String} Widget ID
     * res.data.key {String} Attribute name
     * res.data.value New value for widget
     * res.data.etemplate_exec_id
     * @param {object} req
     * @returns {Boolean} Handled by this plugin
     * @throws Invalid parameters if the required res.data parameters are missing
     */
    etemplate2.prototype.handle_assign = function (type, res, req) {
        //type, req;	// unused, but required by plugin signature
        //Check whether all needed parameters have been passed and call the alertHandler function
        if ((typeof res.data.id != 'undefined') &&
            (typeof res.data.key != 'undefined') &&
            (typeof res.data.value != 'undefined')) {
            if (typeof res.data.etemplate_exec_id == 'undefined' ||
                res.data.etemplate_exec_id != this._etemplate_exec_id) {
                // Not for this etemplate, but not an error
                return false;
            }
            if (res.data.key == 'etemplate_exec_id') {
                this._etemplate_exec_id = res.data.value;
                return true;
            }
            if (this._widgetContainer == null) {
                // Right etemplate, but it's already been cleared.
                egw_global_1.egw.debug('warn', "Tried to call assign on an un-loaded etemplate", res.data);
                return false;
            }
            var widget = this._widgetContainer.getWidgetById(res.data.id);
            if (widget) {
                if (typeof widget['set_' + res.data.key] != 'function') {
                    egw_global_1.egw.debug('warn', "Cannot set %s attribute %s via JSON assign, no set_%s()", res.data.id, res.data.key, res.data.key);
                    return false;
                }
                try {
                    widget['set_' + res.data.key].call(widget, res.data.value);
                    return true;
                }
                catch (e) {
                    egw_global_1.egw.debug("error", "When assigning %s on %s via AJAX, \n" + (e.message || e + ""), res.data.key, res.data.id, widget);
                }
            }
            return false;
        }
        throw 'Invalid parameters';
    };
    /**
     * List of loaded templates
     */
    etemplate2.templates = {};
    /**
     * List of etemplates by loaded template
     */
    etemplate2._byTemplate = {};
    return etemplate2;
}());
exports.etemplate2 = etemplate2;
// make etemplate2 global, as we need it to check an app uses it and then call methods on it
if (typeof window.etemplate2 === 'undefined') {
    window['etemplate2'] = etemplate2;
}
// Calls etemplate2_handle_response in the context of the object which
// requested the response from the server
egw_global_1.egw(window).registerJSONPlugin(etemplate2.handle_load, null, 'et2_load');
egw_global_1.egw(window).registerJSONPlugin(etemplate2.handle_validation_error, null, 'et2_validation_error');
