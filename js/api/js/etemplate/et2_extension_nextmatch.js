"use strict";
/**
 * EGroupware eTemplate2 - JS Nextmatch object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
 * @copyright EGroupware GmbH 2011-2021
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_nextmatch_sortheader = exports.et2_nextmatch_customfields = exports.et2_nextmatch_header = exports.et2_nextmatch_header_bar = exports.et2_nextmatch = exports.et2_INextmatchSortable = exports.et2_INextmatchHeader = void 0;
/*egw:uses

    // Include the action system
    egw_action.egw_action;
    egw_action.egw_action_popup;
    egw_action.egw_action_dragdrop;
    egw_action.egw_menu_dhtmlx;

    // Include some core classes
    et2_core_widget;
    et2_core_interfaces;
    et2_core_DOMWidget;

    // Include all widgets the nextmatch extension will create
    et2_widget_template;
    et2_widget_grid;
    et2_widget_selectbox;
    et2_widget_selectAccount;
    et2_widget_taglist;
    et2_extension_customfields;

    // Include all nextmatch subclasses
    et2_extension_nextmatch_rowProvider;
    et2_extension_nextmatch_controller;
    et2_widget_dynheight;

    // Include the grid classes
    et2_dataview;

*/
var et2_core_common_1 = require("./et2_core_common");
var et2_core_interfaces_1 = require("./et2_core_interfaces");
var et2_core_inheritance_1 = require("./et2_core_inheritance");
var et2_core_widget_1 = require("./et2_core_widget");
var et2_core_DOMWidget_1 = require("./et2_core_DOMWidget");
var et2_core_baseWidget_1 = require("./et2_core_baseWidget");
var et2_core_inputWidget_1 = require("./et2_core_inputWidget");
var et2_widget_selectbox_1 = require("./et2_widget_selectbox");
var et2_extension_nextmatch_rowProvider_1 = require("./et2_extension_nextmatch_rowProvider");
var et2_extension_nextmatch_controller_1 = require("./et2_extension_nextmatch_controller");
var et2_dataview_1 = require("./et2_dataview");
var et2_dataview_model_columns_1 = require("./et2_dataview_model_columns");
var et2_extension_customfields_1 = require("./et2_extension_customfields");
var et2_widget_grid_1 = require("./et2_widget_grid");
var et2_dataview_view_grid_1 = require("./et2_dataview_view_grid");
var et2_widget_dynheight_1 = require("./et2_widget_dynheight");
var et2_core_arrayMgr_1 = require("./et2_core_arrayMgr");
var egw_global_1 = require("../jsapi/egw_global");
var et2_core_legacyJSFunctions_1 = require("./et2_core_legacyJSFunctions");
var egw_action_common_1 = require("../egw_action/egw_action_common");
var Et2Dialog_1 = require("./Et2Dialog/Et2Dialog");
var Et2Widget_1 = require("./Et2Widget/Et2Widget");
var event_1 = require("./Et2Widget/event");
//import {et2_selectAccount} from "./et2_widget_SelectAccount";
var keep_import;
exports.et2_INextmatchHeader = "et2_INextmatchHeader";
et2_core_interfaces_1.et2_implements_registry.et2_INextmatchHeader = function (obj) {
    return et2_core_interfaces_1.implements_methods(obj, ["setNextmatch"]);
};
exports.et2_INextmatchSortable = "et2_INextmatchSortable";
et2_core_interfaces_1.et2_implements_registry.et2_INextmatchSortable = function (obj) {
    return et2_core_interfaces_1.implements_methods(obj, ["setSortmode"]);
};
/**
 * Class which implements the "nextmatch" XET-Tag
 *
 * NM header is build like this in DOM
 *
 * +- nextmatch_header -----+------------+----------+--------+---------+--------------+-----------+-------+
 * + header_left | search.. | header_row | category | filter | filter2 | header_right | favorites | count |
 * +-------------+----------+------------+----------+--------+---------+--------------+-----------+-------+
 *
 * everything left incl. standard filters is floated left:
 * +- nextmatch_header -----+------------+----------+--------+---------+
 * + header_left | search.. | header_row | category | filter | filter2 |
 * +-------------+----------+------------+----------+--------+---------+
 * everything from header_right on is floated right:
 *                                          +--------------+-----------+-------+
 *                                          | header_right | favorites | count |
 *                                          +--------------+-----------+-------+
 * then comes...
 * +- nextmatch_header +
 * +  header_row2      |
 * +-------------------+
 *
 * @augments et2_DOMWidget
 */
var et2_nextmatch = /** @class */ (function (_super) {
    __extends(et2_nextmatch, _super);
    /**
     * Constructor
     *
     * @memberOf et2_nextmatch
     */
    function et2_nextmatch(_parent, _attrs, _child) {
        var _this = _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_nextmatch._attributes, _child || {})) || this;
        // Nextmatch can't render while hidden, we store refresh requests for later
        _this._queued_refreshes = [];
        // When printing, we change the layout around.  Keep some values so it can be restored after
        _this.print = {
            old_height: 0,
            row_selector: '',
            orientation_style: null
        };
        _this.activeFilters = { col_filter: {} };
        _this.columns = [];
        // keeps sorted columns
        _this.sortedColumnsList = [];
        // Directly set current col_filters from settings
        jQuery.extend(_this.activeFilters.col_filter, _this.options.settings.col_filter);
        /*
        Process selected custom fields here, so that the settings are correctly
        set before the row template is parsed
        */
        var prefs = _this._getPreferences();
        var cfs = {};
        for (var i = 0; i < prefs.visible.length; i++) {
            if (prefs.visible[i].indexOf(et2_nextmatch_customfields.PREFIX) == 0) {
                cfs[prefs.visible[i].substr(1)] = !prefs.negated;
            }
        }
        var global_data = _this.getArrayMgr("modifications").getRoot().getEntry('~custom_fields~');
        if (typeof global_data == 'object' && global_data != null) {
            global_data.fields = cfs;
        }
        _this.div = jQuery(document.createElement("div"))
            .addClass("et2_nextmatch");
        _this.header = et2_core_widget_1.et2_createWidget("nextmatch_header_bar", {}, _this);
        _this.innerDiv = jQuery(document.createElement("div"))
            .appendTo(_this.div);
        // Create the dynheight component which dynamically scales the inner
        // container.
        if (!_this.options.no_dynheight) {
            _this.dynheight = _this._getDynheight();
        }
        else {
            _this.div.addClass("no_dynheight");
        }
        // Create the outer grid container
        _this.dataview = new et2_dataview_1.et2_dataview(_this.innerDiv, _this.egw());
        // Blank placeholder
        _this.blank = jQuery(document.createElement("div"))
            .appendTo(_this.dataview.table);
        // We cannot create the grid controller now, as this depends on the grid
        // instance, which can first be created once we have the columns
        _this.controller = null;
        _this.rowProvider = null;
        _this._queue_refresh_callback = _this._queue_refresh_callback.bind(_this);
        return _this;
    }
    /**
     * Destroys all
     */
    et2_nextmatch.prototype.destroy = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        // Stop auto-refresh
        if (this._autorefresh_timer) {
            window.clearInterval(this._autorefresh_timer);
            this._autorefresh_timer = null;
        }
        // Unbind handler used for toggling autorefresh
        jQuery(this.getInstanceManager().DOMContainer.parentNode).off('show.et2_nextmatch');
        jQuery(this.getInstanceManager().DOMContainer.parentNode).off('hide.et2_nextmatch');
        // Need to unbind show/hide handlers first
        _super.prototype.destroy.call(this);
        // Free the grid components
        (_a = this.dataview) === null || _a === void 0 ? void 0 : _a.destroy();
        this.dataview = null;
        (_b = this.blank) === null || _b === void 0 ? void 0 : _b.remove();
        this.blank = null;
        if (this.rowProvider) {
            this.rowProvider.destroy();
            this.rowProvider = null;
        }
        if (this.controller) {
            this.controller.destroy();
            this.controller = null;
        }
        if (this.dynheight) {
            this.dynheight.destroy();
            this.dynheight = null;
        }
        (_c = this.header) === null || _c === void 0 ? void 0 : _c.destroy();
        this.header = null;
        (_d = this.header_left) === null || _d === void 0 ? void 0 : _d.destroy();
        this.header_left = null;
        (_e = this.header_right) === null || _e === void 0 ? void 0 : _e.destroy();
        this.header_right = null;
        this.columns = null;
        this.settings = null;
        this.options = null;
        (_f = this.innerDiv) === null || _f === void 0 ? void 0 : _f.off().empty().remove();
        this.innerDiv = null;
        (_g = this.div) === null || _g === void 0 ? void 0 : _g.off().empty().remove();
        this.div = [];
    };
    et2_nextmatch.prototype.getController = function () {
        return this.controller;
    };
    /**
     * Loads the nextmatch settings
     *
     * @param {object} _attrs
     */
    et2_nextmatch.prototype.transformAttributes = function (_attrs) {
        _super.prototype.transformAttributes.call(this, _attrs);
        if (this.id) {
            var entry = this.getArrayMgr("content").data;
            _attrs["settings"] = {};
            if (entry) {
                _attrs["settings"] = entry;
                // Make sure there's an action var parameter
                if (_attrs["settings"]["actions"] && !_attrs.settings["action_var"]) {
                    _attrs.settings.action_var = "action";
                }
                // Merge settings mess into attributes
                for (var attr in this.attributes) {
                    if (_attrs.settings[attr]) {
                        _attrs[attr] = _attrs.settings[attr];
                        delete _attrs.settings[attr];
                    }
                }
            }
        }
    };
    et2_nextmatch.prototype.doLoadingFinished = function () {
        _super.prototype.doLoadingFinished.call(this);
        if (!this.dynheight && !this.options.no_dynheight) {
            this.dynheight = this._getDynheight();
        }
        // Register handler for dropped files, if possible
        if (this.options.settings.row_id) {
            // Appname should be first part of the template name
            var split = this.options.template.split('.');
            var appname = split[0];
            // Check link registry
            if (this.egw().link_get_registry(appname)) {
                var self_1 = this;
                // Register a handler
                // @ts-ignore
                jQuery(this.div)
                    .on('dragenter', '.egwGridView_grid tr', function (e) {
                    // Figure out _which_ row
                    var row = self_1.controller.getRowByNode(this);
                    if (!row || !row.uid) {
                        return false;
                    }
                    e.stopPropagation();
                    e.preventDefault();
                    // Indicate acceptance
                    if (row.controller && row.controller._selectionMgr) {
                        row.controller._selectionMgr.setFocused(row.uid, true);
                    }
                    return false;
                })
                    .on('dragexit', '.egwGridView_grid tr', function () {
                    self_1.controller._selectionMgr.setFocused();
                })
                    .on('dragover', '.egwGridView_grid tr', false).attr("dropzone", "copy")
                    .on('drop', '.egwGridView_grid tr', function (e) {
                    self_1.handle_drop(e, this);
                    return false;
                });
            }
        }
        // stop invalidation in no visible tabs
        jQuery(this.getInstanceManager().DOMContainer.parentNode).on('hide.et2_nextmatch', jQuery.proxy(function () {
            if (this.controller && this.controller._grid) {
                this.controller._grid.doInvalidate = false;
            }
        }, this));
        jQuery(this.getInstanceManager().DOMContainer.parentNode).on('show.et2_nextmatch', jQuery.proxy(function () {
            if (this.controller && this.controller._grid) {
                this.controller._grid.doInvalidate = true;
            }
        }, this));
        return this.template_promise ? this.template_promise : true;
    };
    /**
     * Implements the et2_IResizeable interface - lets the dynheight manager
     * update the width and height and then update the dataview container.
     */
    et2_nextmatch.prototype.resize = function () {
        if (this.dynheight) {
            this.dynheight.update(function (_w, _h) {
                this.dataview.resize(_w, _h);
            }, this);
        }
        else {
            // Browser calculated size
            var styles = getComputedStyle(this.dataview.table.get(0).parentElement);
            this.dataview.resize(parseInt(styles.width) - this.dataview.scrollbarWidth, parseInt(styles.height));
            // This needs to stay at 100% so browser does the work
            this.dataview.grid.scrollarea.height("100%");
            // Browser can't handle the nested div / table / div / table (Firefox).  Force it.
            this.dataview.grid.scrollarea.css("max-height", "5em");
            var maxHeight = parseInt(getComputedStyle(this.innerDiv[0]).height) - parseInt(getComputedStyle(this.dataview.headTr[0]).height);
            this.dataview.grid.scrollarea.css("max-height", maxHeight + "px");
        }
    };
    /**
     * Sorts the nextmatch widget by the given ID.
     *
     * @param {string} _id is the id of the data entry which should be sorted.
     * @param {boolean} _asc if true, the elements are sorted ascending, otherwise
     * 	descending. If not set, the sort direction will be determined
     * 	automatically.
     * @param {boolean} _update true/undefined: call applyFilters, false: only set sort
     */
    et2_nextmatch.prototype.sortBy = function (_id, _asc, _update) {
        if (typeof _update == "undefined") {
            _update = true;
        }
        // Create the "sort" entry in the active filters if it did not exist
        // yet.
        if (typeof this.activeFilters["sort"] == "undefined") {
            this.activeFilters["sort"] = {
                "id": null,
                "asc": true
            };
        }
        // Determine the sort direction automatically if it is not set
        if (typeof _asc == "undefined") {
            _asc = true;
            if (this.activeFilters["sort"].id == _id) {
                _asc = !this.activeFilters["sort"].asc;
            }
        }
        // Set the sortmode display
        this.iterateOver(function (_widget) {
            _widget.setSortmode((_widget.id == _id) ? (_asc ? "asc" : "desc") : "none");
        }, this, exports.et2_INextmatchSortable);
        if (_update) {
            this.applyFilters({ sort: { id: _id, asc: _asc } });
        }
        else {
            // Update the entry in the activeFilters object
            this.activeFilters["sort"] = {
                "id": _id,
                "asc": _asc
            };
        }
    };
    /**
     * Removes the sort entry from the active filters object and thus returns to
     * the natural sort order.
     */
    et2_nextmatch.prototype.resetSort = function () {
        // Check whether the nextmatch widget is currently sorted
        if (typeof this.activeFilters["sort"] != "undefined") {
            // Reset the sort mode
            this.iterateOver(function (_widget) {
                _widget.setSortmode("none");
            }, this, exports.et2_INextmatchSortable);
            // Delete the "sort" filter entry
            this.applyFilters({ sort: undefined });
        }
    };
    /**
     * Apply current or modified filters on NM widget (updating rows accordingly)
     *
     * @param _set filter(s) to set eg. { filter: '' } to reset filter in NM header
     */
    et2_nextmatch.prototype.applyFilters = function (_set) {
        var _this = this;
        var changed = false;
        var keep_selection = false;
        // Avoid loops cause by change events
        if (this.update_in_progress || !this.controller)
            return;
        this.update_in_progress = true;
        // Cleared explicitly
        if (typeof _set != 'undefined' && jQuery.isEmptyObject(_set)) {
            changed = true;
            this.activeFilters = { col_filter: {} };
        }
        if (typeof this.activeFilters == "undefined") {
            this.activeFilters = { col_filter: {} };
        }
        if (typeof this.activeFilters.col_filter == "undefined") {
            this.activeFilters.col_filter = {};
        }
        if (typeof _set == 'object') {
            for (var s in _set) {
                if (s == 'col_filter') {
                    // allow apps setState() to reset all col_filter by using undefined or null for it
                    // they can not pass {} for _set / state.state, if they need to set something
                    if (_set.col_filter === undefined || _set.col_filter === null) {
                        this.activeFilters.col_filter = {};
                        changed = true;
                    }
                    else {
                        for (var c in _set.col_filter) {
                            if (this.activeFilters.col_filter[c] !== _set.col_filter[c]) {
                                if (_set.col_filter[c]) {
                                    this.activeFilters.col_filter[c] = _set.col_filter[c];
                                }
                                else {
                                    delete this.activeFilters.col_filter[c];
                                }
                                changed = true;
                            }
                        }
                    }
                }
                else if (s === 'selected') {
                    changed = true;
                    keep_selection = true;
                    this.controller._selectionMgr.resetSelection();
                    this.controller._objectManager.clear();
                    for (var i in _set.selected) {
                        this.controller._selectionMgr.setSelected(_set.selected[i].indexOf('::') > 0 ? _set.selected[i] : this.controller.dataStorePrefix + '::' + _set.selected[i], true);
                    }
                    delete _set.selected;
                }
                else if (this.activeFilters[s] !== _set[s]) {
                    this.activeFilters[s] = _set[s];
                    changed = true;
                }
            }
        }
        this.egw().debug("info", "Changing nextmatch filters to ", this.activeFilters);
        // Keep the selection after applying filters, but only if unchanged
        if (!changed || keep_selection) {
            this.controller.keepSelection();
        }
        else {
            // Do not keep selection
            this.controller._selectionMgr.resetSelection();
            this.controller._objectManager.clear();
            this.controller.keepSelection();
        }
        // Update the filters in the grid controller
        this.controller.setFilters(this.activeFilters);
        // Update the header
        this.header.setFilters(this.activeFilters);
        // Update any column filters
        this.iterateOver(function (column) {
            // Skip favorites - it implements et2_INextmatchHeader, but we don't want it in the filter
            if (typeof column.id != "undefined" && column.id.indexOf('favorite') == 0)
                return;
            if (typeof column.set_value != "undefined" && column.id) {
                column.set_value(typeof this[column.id] == "undefined" || this[column.id] == null ? "" : this[column.id]);
            }
            if (column.id && typeof column.get_value == "function") {
                this[column.id] = column.get_value();
            }
        }, this.activeFilters.col_filter, exports.et2_INextmatchHeader);
        // Trigger an update
        this.controller.update(true);
        if (changed) {
            // Highlight matching favorite in sidebox
            if (this.getInstanceManager().app) {
                var appname = this.getInstanceManager().app;
                if (app[appname] && app[appname].highlight_favorite) {
                    app[appname].highlight_favorite();
                }
            }
        }
        // Wait a bit.  header.setFilters() can cause webComponents to update, so we want to wait for that
        var wait = [];
        this.header.iterateOver(function (w) {
            if (typeof w.updateComplete != "undefined") {
                wait.push(w.updateComplete);
            }
        }, this);
        setTimeout(function () {
            // It needs a little longer than just the updateComplete, not sure why.
            // Turning it off too soon causes problems with app.infolog.filter2_change
            Promise.allSettled(wait).then(function () {
                _this.update_in_progress = false;
            });
        }, 100);
    };
    /**
     * Refresh given rows for specified change
     *
     * Change type parameters allows for quicker refresh then complete server side reload:
     * - update: request modified data from given rows.  May be moved.
     * - update-in-place: update row, but do NOT move it, or refresh if uid does not exist
     * - edit: rows changed, but sorting may be affected.  Full reload.
     * - delete: just delete the given rows clientside (no server interaction neccessary)
     * - add: put the new row in at the top, unless app says otherwise
     *
     * What actually happens also depends on a general preference "lazy-update":
     *	default/lazy:
     *  - add always on top
     *	- updates on top, if sorted by last modified, otherwise update-in-place
     *	- update-in-place is always in place!
     *
     *	exact:
     *	- add and update on top if sorted by last modified, otherwise full refresh
     *	- update-in-place is always in place!
     *
     * Nextmatch checks the application callback nm_refresh_index, which has a default implementation
     * in egw_app.nm_refresh_index().
     *
     * @param {string[]|string} _row_ids rows to refresh
     * @param {?string} _type "update-in-place", "update", "edit", "delete" or "add"
     *
     * @see jsapi.egw_refresh()
     * @see egw_app.nm_refresh_index()
     * @fires refresh from the widget itself
     */
    et2_nextmatch.prototype.refresh = function (_row_ids, _type) {
        // Framework trying to refresh, but nextmatch not fully initialized
        if (this.controller === null || !this.div) {
            return;
        }
        // Make sure we're dealing with arrays
        if (typeof _row_ids == 'string' || typeof _row_ids == 'number')
            _row_ids = [_row_ids];
        // Make some changes in what we're doing based on preference
        var update_pref = egw_global_1.egw.preference("lazy-update") || 'lazy';
        if (_type == et2_nextmatch.UPDATE && !this.is_sorted_by_modified()) {
            _type = update_pref == "lazy" ? et2_nextmatch.UPDATE_IN_PLACE : et2_nextmatch.EDIT;
        }
        else if (update_pref == "exact" && _type == et2_nextmatch.ADD && !this.is_sorted_by_modified()) {
            _type = et2_nextmatch.EDIT;
        }
        if (_type == et2_nextmatch.ADD && !(update_pref == "lazy" || update_pref == "exact" && this.is_sorted_by_modified())) {
            _type = et2_nextmatch.EDIT;
        }
        if (typeof _type == 'undefined')
            _type = et2_nextmatch.EDIT;
        if (!this.div.is(':visible')) // run refresh, once we become visible again
         {
            return this._queue_refresh(_row_ids, _type);
        }
        if (typeof _row_ids == "undefined" || _row_ids === null) {
            this.applyFilters();
            // Trigger an event so app code can act on it
            jQuery(this).triggerHandler("refresh", [this]);
            return;
        }
        // Clean IDs in case they're UIDs with app prefixed
        _row_ids = _row_ids.map(function (id) {
            if (id.toString().indexOf(this.controller.dataStorePrefix) == -1) {
                return id;
            }
            var parts = id.split("::");
            parts.shift();
            return parts.join("::");
        }.bind(this));
        if (_type == et2_nextmatch.DELETE) {
            // Record current & next index
            var uid = _row_ids[0].toString().indexOf(this.controller.dataStorePrefix) == 0 ? _row_ids[0] : this.controller.dataStorePrefix + "::" + _row_ids[0];
            var entry = this.controller._selectionMgr._getRegisteredRowsEntry(uid);
            if (entry && entry.idx !== null) {
                var next = (entry.ao ? entry.ao.getNext(_row_ids.length) : null);
                if (next == null || !next.id || next.id == uid) {
                    // No next, select previous
                    next = (entry.ao ? entry.ao.getPrevious(1) : null);
                }
                // Stop automatic updating
                this.dataview.grid.doInvalidate = false;
                for (var i = 0; i < _row_ids.length; i++) {
                    uid = _row_ids[i].toString().indexOf(this.controller.dataStorePrefix) == 0 ? _row_ids[i] : this.controller.dataStorePrefix + "::" + _row_ids[i];
                    // Delete from internal references
                    this.controller.deleteRow(uid);
                }
                // Select & focus next row
                if (next && next.id && !this.options.disable_selection_advance) {
                    this.controller._selectionMgr.setSelected(next.id, true);
                    this.controller._selectionMgr.setFocused(next.id, true);
                }
                // Update the count
                var total = this.dataview.grid._total - _row_ids.length;
                // This will remove the last row!
                // That's OK, because grid adds one in this.controller.deleteRow()
                this.dataview.grid.setTotalCount(total);
                this.controller._selectionMgr.setTotalCount(total);
                // Re-enable automatic updating
                this.dataview.grid.doInvalidate = true;
                this.dataview.grid.invalidate();
            }
        }
        var _loop_1 = function () {
            var uid_1 = _row_ids[i].toString().indexOf(this_1.controller.dataStorePrefix) == 0 ? _row_ids[i] : this_1.controller.dataStorePrefix + "::" + _row_ids[i];
            // Check for update on a row we don't have
            var known = Object.values(this_1.controller._indexMap).filter(function (row) {
                return row.uid == uid_1;
            });
            if ((_type == et2_nextmatch.UPDATE || _type == et2_nextmatch.UPDATE_IN_PLACE) && (!known || known.length == 0)) {
                _type = et2_nextmatch.ADD;
                if (update_pref == "exact" && !this_1.is_sorted_by_modified()) {
                    _type = et2_nextmatch.EDIT;
                }
            }
            if ([et2_nextmatch.ADD, et2_nextmatch.UPDATE].indexOf(_type) !== -1) {
                // Pre-ask for the row data, and only proceed if we actually get it
                // need to send nextmatch filters too, as server-side will merge old version from request otherwise
                this_1._refresh_grid(_type, this_1.controller, _row_ids, uid_1);
                return { value: void 0 };
            }
            switch (_type) {
                // update-in-place = update, but always only in place
                case et2_nextmatch.UPDATE_IN_PLACE:
                    this_1.egw().dataRefreshUID(uid_1);
                    break;
                // These ones handled above in dataFetch() callback
                case et2_nextmatch.UPDATE:
                    // update [existing] row, maybe we'll put it on top
                    break;
                case et2_nextmatch.DELETE:
                    // Handled above, more code to execute after loop so don't exit early
                    break;
                case et2_nextmatch.ADD:
                    break;
                // No more smart things we can do, refresh the whole thing
                case et2_nextmatch.EDIT:
                default:
                    // Trigger refresh
                    this_1.applyFilters();
                    return "break-id_loop";
            }
        };
        var this_1 = this;
        id_loop: for (var i = 0; i < _row_ids.length; i++) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
            switch (state_1) {
                case "break-id_loop": break id_loop;
            }
        }
        // Trigger an event so app code can act on it
        jQuery(this).triggerHandler("refresh", [this, _row_ids, _type]);
    };
    et2_nextmatch.prototype._refresh_grid = function (type, controller, row_ids, uid) {
        // Pre-ask for the row data, and only proceed if we actually get it
        // need to send nextmatch filters too, as server-side will merge old version from request otherwise
        return this.egw().dataFetch(this.getInstanceManager().etemplate_exec_id, { refresh: row_ids }, controller._filters, this.id, function (data) {
            var _this = this;
            // In the event that the etemplate got removed before the data came back (Usually an action caused
            // a full submit) just stop here.
            if (!this.nm.getParent()) {
                return;
            }
            if (data.total >= 1) {
                row_ids.forEach(function (id) {
                    var uid = _this.prefix + "::" + id;
                    _this.type == et2_nextmatch.ADD ? _this.nm.refresh_add(uid, _this.type, controller)
                        : _this.nm.refresh_update(uid, controller);
                });
            }
            else if (this.type == et2_nextmatch.UPDATE) {
                // Remove rows from controller
                row_ids.forEach(function (id) {
                    var uid = _this.prefix + "::" + id;
                    _this.controller.deleteRow(uid);
                });
                // Adjust total rows, clean grid
                this.controller._grid.setTotalCount(this.nm.controller._grid._total - row_ids.length);
                this.controller._selectionMgr.setTotalCount(this.nm.controller._grid._total);
            }
        }, {
            type: type,
            nm: this,
            controller: controller,
            uid: uid,
            prefix: this.controller.dataStorePrefix
        }, [row_ids]);
    };
    /**
     * An entry has been updated.  Request new data, and ask app about where the row
     * goes now.
     *
     * @param uid
     */
    et2_nextmatch.prototype.refresh_update = function (uid, controller) {
        // Row data update has been sent, let's move it where app wants it
        var entry = controller._selectionMgr._getRegisteredRowsEntry(uid);
        // Need to delete first as there's a good chance indexes will change in an unknown way
        // and we can't always find it by UID after due to duplication
        controller.deleteRow(uid);
        // Pretend it's a new row, let app tell us where it goes and we'll mark it as new
        if (!this.refresh_add(uid, et2_nextmatch.UPDATE, controller)) {
            // App did not want the row, or doesn't know where it goes but we've already removed it...
            // Put it back before anyone notices.  New data coming from server anyway.
            var callback_1 = function (data) {
                data.class += " new_entry";
                this.egw().dataUnregisterUID(uid, callback_1, this);
            };
            this.egw().dataRegisterUID(uid, callback_1, this, this.getInstanceManager().etemplate_exec_id, this.id);
            controller._insertDataRow(entry, true);
        }
        // Update does not need to increase row count, but refresh_add() adds it in
        controller._grid.setTotalCount(controller._grid.getTotalCount() - 1);
        controller._selectionMgr.setTotalCount(controller._grid.getTotalCount());
        return true;
    };
    /**
     * An entry has been added.  Put it in the list.
     *
     * @param uid
     * @return boolean false: not added, true: added
     */
    et2_nextmatch.prototype.refresh_add = function (uid, type, controller) {
        if (type === void 0) { type = et2_nextmatch.ADD; }
        var index = egw_global_1.egw.preference("lazy-update") !== "exact" ? 0 :
            (this.is_sorted_by_modified() ? 0 : false);
        // No add, do a full refresh
        if (index === false) {
            return false;
        }
        var time = new Date().valueOf();
        this.egw().dataRegisterUID(uid, this._push_add_callback, {
            nm: this,
            controller: controller,
            uid: uid,
            index: index
        }, this.getInstanceManager().etemplate_exec_id, this.id);
        return true;
    };
    /**
     * Callback for adding a new row via push
     *
     * Expected context: {nm: this, uid: string, index: number}
     */
    et2_nextmatch.prototype._push_add_callback = function (data) {
        if (data && this.nm && this.nm.getParent()) {
            if (data.class) {
                data.class += " new_entry";
            }
            // Don't remove if new data has not arrived
            var stored = egw_global_1.egw.dataGetUIDdata(this.uid);
            //if(stored?.timestamp >= time) return;
            // Increase displayed row count or we lose the last row when we add and the total is wrong
            this.controller._grid.setTotalCount(this.nm.controller._grid.getTotalCount() + 1);
            this.controller._selectionMgr.setTotalCount(this.nm.controller._grid.getTotalCount());
            // Insert at the top of the list, or where app said
            var entry = this.controller._selectionMgr._getRegisteredRowsEntry(this.uid);
            entry.idx = typeof this.index == "number" ? this.index : 0;
            this.controller._insertDataRow(entry, true);
        }
        else if (this.nm && this.nm.getParent()) {
            // Server didn't give us our row data
            // Delete from internal references
            this.controller.deleteRow(this.uid);
            this.controller._grid.setTotalCount(this.nm.controller._grid.getTotalCount() - 1);
            this.controller._selectionMgr.setTotalCount(this.nm.controller._grid.getTotalCount());
        }
        this.nm.egw().dataUnregisterUID(this.uid, this.nm._push_add_callback, this);
    };
    /**
     * Queue a refresh request until later, when nextmatch is visible
     *
     * Nextmatch can't re-draw anything while it's hidden (it messes up the sizing when it renders) so we can't actually
     * do a refresh right now.  Queue it up and when visible again we'll update then.  If we get too many changes
     * queued, we'll throw them all away and do a full refresh.
     *
     * @param _row_ids
     * @param _type
     * @private
     */
    et2_nextmatch.prototype._queue_refresh = function (_row_ids, _type) {
        // Maximum number of requests to queue.  50 chosen arbitrarily just to limit things
        var max_queued = 50;
        if (this._queued_refreshes === null) {
            // Already too many or an EDIT came, we'll refresh everything later
            return;
        }
        // Bind so we can get the queued data when tab is re-activated
        // only do it for this._queued_refreshes === [], to not install multiple event-handlers (jQuery.one() does NOT help here!)
        if (Array.isArray(this._queued_refreshes) && !this._queued_refreshes.length) {
            jQuery(this.getInstanceManager().DOMContainer.parentNode).one('show.et2_nextmatch', this._queue_refresh_callback.bind(this));
        }
        // Edit means refresh everything, so no need to keep queueing
        // Too many?  Forget it, we'll refresh everything.
        if (this._queued_refreshes.length >= max_queued || _type == et2_nextmatch.EDIT || !_type) {
            this._queued_refreshes = null;
            return;
        }
        // Skip if already in array
        if (this._queued_refreshes.some(function (queue) { return queue.ids.length === _row_ids.length && queue.ids.every(function (value, index) { return value === _row_ids[index]; }); })) {
            return;
        }
        this._queued_refreshes.push({ ids: _row_ids, type: _type });
    };
    et2_nextmatch.prototype._queue_refresh_callback = function () {
        if (this._queued_refreshes === null) {
            // Still bound, but length is 0 - full refresh time
            this._queued_refreshes = [];
            return this.applyFilters();
        }
        var types = {};
        types[et2_nextmatch.ADD] = [];
        types[et2_nextmatch.UPDATE] = [];
        types[et2_nextmatch.UPDATE_IN_PLACE] = [];
        types[et2_nextmatch.DELETE] = [];
        for (var _i = 0, _a = this._queued_refreshes; _i < _a.length; _i++) {
            var refresh = _a[_i];
            types[refresh.type] = types[refresh.type].concat(refresh.ids);
        }
        this._queued_refreshes = [];
        for (var type in types) {
            if (types[type].length > 0) {
                // Fire each change type once with all changed IDs
                this.refresh(types[type].filter(function (v, i, a) { return a.indexOf(v) === i; }), type);
            }
        }
    };
    /**
     * Is this nextmatch currently sorted by "modified" date
     *
     * This is decided by the row_modified options passed from the server and the current sort order
     */
    et2_nextmatch.prototype.is_sorted_by_modified = function () {
        var _a;
        var sort = ((_a = this.getValue()) === null || _a === void 0 ? void 0 : _a.sort) || {};
        return sort && sort.id && sort.id == this.settings.add_on_top_sort_field && sort.asc == false;
    };
    et2_nextmatch.prototype._get_appname = function () {
        var app = '';
        var list = [];
        list = et2_core_common_1.et2_csvSplit(this.options.settings.columnselection_pref, 2, ".");
        if (this.options.settings.columnselection_pref.indexOf('nextmatch') == 0) {
            app = list[0].substring('nextmatch'.length + 1);
        }
        else {
            app = list[0];
        }
        return app;
    };
    /**
     * Gets the selection
     *
     * @return Object { ids: [UIDs], inverted: boolean}
     */
    et2_nextmatch.prototype.getSelection = function () {
        var selected = this.controller && this.controller._selectionMgr ? this.controller._selectionMgr.getSelected() : null;
        if (typeof selected == "object" && selected != null) {
            return selected;
        }
        return { ids: [], all: false };
    };
    /**
     * Log some debug information about internal values
     */
    et2_nextmatch.prototype.spillYourGuts = function () {
        var guts = function (controller) {
            console.log("Controller:", controller);
            console.log("Controller indexMap:", controller._indexMap);
            console.log("Grid:", controller._grid);
            console.log("Selection Manager:", controller._selectionMgr);
            console.log("Selection registered rows:", controller._selectionMgr._registeredRows);
            if (controller && controller._children.length > 0) {
                console.groupCollapsed("Sub-grids");
                var child_index = 0;
                for (var _i = 0, _a = controller._children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    console.groupCollapsed("Child " + (++child_index));
                    guts(child);
                    console.groupEnd();
                }
                console.groupEnd();
            }
        };
        console.group("Nextmatch internals");
        guts(this.controller);
        console.groupEnd();
    };
    /**
     * Event handler for when the selection changes
     *
     * If the onselect attribute was set to a string with javascript code, it will
     * be executed "legacy style".  You can get the selected values with getSelection().
     * If the onselect attribute is in app.appname.function style, it will be called
     * with the nextmatch and an array of selected row IDs.
     *
     * The array can be empty, if user cleared the selection.
     *
     * @param action ActionObject From action system.  Ignored.
     * @param senders ActionObjectImplemetation From action system.  Ignored.
     */
    et2_nextmatch.prototype.onselect = function (action, senders) {
        // Execute the JS code connected to the event handler
        if (typeof this.options.onselect == 'function') {
            return this.options.onselect.call(this, this.getSelection().ids, this);
        }
    };
    /**
     * Nextmatch needs a namespace
     */
    et2_nextmatch.prototype._createNamespace = function () {
        return true;
    };
    /**
     * Create the dynamic height so nm fills all available space
     *
     * @returns {undefined}
     */
    et2_nextmatch.prototype._getDynheight = function () {
        var _this = this;
        // Find the parent container, either a tab or the main container
        var tab = this.get_tab_info();
        if (!tab) {
            return new et2_widget_dynheight_1.et2_dynheight(this.getInstanceManager().DOMContainer, this.innerDiv, 100);
        }
        else if (tab && tab.contentDiv) {
            // Bind a resize while we're here
            if (tab.flagDiv) {
                tab.flagDiv.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // Wait for the tab to be done being shown
                            return [4 /*yield*/, event_1.waitForEvent(tab.flagDiv.parentElement, "sl-tab-show")];
                            case 1:
                                // Wait for the tab to be done being shown
                                _a.sent();
                                // then resize
                                this.resize();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            return new et2_widget_dynheight_1.et2_dynheight(tab.contentDiv, this.innerDiv, 100);
        }
        return false;
    };
    /**
     * Generates the column caption for the given column widget
     *
     * @param {et2_widget} _widget
     */
    et2_nextmatch.prototype._genColumnCaption = function (_widget) {
        var result = null;
        if (typeof _widget._genColumnCaption == "function")
            return _widget._genColumnCaption();
        var self = this;
        _widget.iterateOver(function (_widget) {
            var label = self.egw().lang(_widget.label || _widget.emptyLabel || _widget.options.label || _widget.options.empty_label || '');
            if (!label)
                return; // skip empty, undefined or null labels
            if (!result) {
                result = label;
            }
            else {
                result += ", " + label;
            }
        }, this, exports.et2_INextmatchHeader);
        return result;
    };
    /**
     * Generates the column name (internal) for the given column widget
     * Used in preferences to refer to the columns by name instead of position
     *
     * See _getColumnCaption() for human fiendly captions
     *
     * @param {et2_widget} _widget
     */
    et2_nextmatch.prototype._getColumnName = function (_widget) {
        if (typeof _widget._getColumnName == 'function')
            return _widget._getColumnName();
        var name = _widget.id;
        var child_names = [];
        var children = _widget.getChildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].id)
                child_names.push(children[i].id);
        }
        var colName = name + (name != "" && child_names.length > 0 ? "_" : "") + child_names.join("_");
        if (colName == "") {
            this.egw().debug("info", "Unable to generate nm column name for %o, no IDs", _widget);
        }
        return colName;
    };
    /**
     * Retrieve the user's preferences for this nextmatch merged with defaults
     * Column display, column size, etc.
     */
    et2_nextmatch.prototype._getPreferences = function () {
        // Read preference or default for column visibility
        var negated = false;
        var columnPreference = "";
        if (this.options.settings.default_cols) {
            negated = this.options.settings.default_cols[0] == "!";
            columnPreference = negated ? this.options.settings.default_cols.substring(1) : this.options.settings.default_cols;
        }
        if (this.options.settings.selectcols && this.options.settings.selectcols.length) {
            columnPreference = this.options.settings.selectcols;
            negated = false;
        }
        if (!this.options.settings.columnselection_pref) {
            // Set preference name so changes are saved
            this.options.settings.columnselection_pref = this.options.template;
        }
        var app = '';
        var list = [];
        if (this.options.settings.columnselection_pref) {
            var pref = {};
            list = et2_core_common_1.et2_csvSplit(this.options.settings.columnselection_pref, 2, ".");
            if (this.options.settings.columnselection_pref.indexOf('nextmatch') == 0) {
                app = list[0].substring('nextmatch'.length + 1);
                pref = egw_global_1.egw.preference(this.options.settings.columnselection_pref, app);
            }
            else {
                app = list[0];
                // 'nextmatch-' prefix is there in preference name, but not in setting, so add it in
                pref = egw_global_1.egw.preference("nextmatch-" + this.options.settings.columnselection_pref, app);
            }
            if (pref) {
                negated = (pref[0] == "!");
                columnPreference = negated ? pref.substring(1) : pref;
            }
        }
        var columnDisplay = [];
        // If no column preference or default set, use all columns
        if (typeof columnPreference == "string" && columnPreference.length == 0) {
            columnDisplay = [];
            negated = true;
        }
        columnDisplay = typeof columnPreference === "string"
            ? et2_core_common_1.et2_csvSplit(columnPreference, null, ",") : columnPreference;
        // Adjusted column sizes
        var size = {};
        if (this.options.settings.columnselection_pref && app) {
            var size_pref = this.options.settings.columnselection_pref + "-size";
            // If columnselection pref is missing prefix, add it in
            if (size_pref.indexOf('nextmatch') == -1) {
                size_pref = 'nextmatch-' + size_pref;
            }
            size = this.egw().preference(size_pref, app);
        }
        if (!size)
            size = {};
        // Column order
        var order = {};
        for (var i = 0; i < columnDisplay.length; i++) {
            order[columnDisplay[i]] = i;
        }
        return {
            visible: columnDisplay,
            visible_negated: negated,
            negated: negated,
            size: size,
            order: order
        };
    };
    /**
     * Apply stored user preferences to discovered columns
     *
     * @param {array} _row
     * @param {array} _colData
     */
    et2_nextmatch.prototype._applyUserPreferences = function (_row, _colData) {
        var prefs = this._getPreferences();
        var columnDisplay = prefs.visible;
        var size = prefs.size;
        var negated = prefs.visible_negated;
        var order = prefs.order;
        var colName = '';
        // Add in display preferences
        if (columnDisplay && columnDisplay.length > 0) {
            RowLoop: for (var i = 0; i < _row.length; i++) {
                colName = '';
                if (_row[i].disabled === true) {
                    _colData[i].visible = false;
                    continue;
                }
                // Customfields needs special processing
                if (_row[i].widget.instanceOf(et2_nextmatch_customfields)) {
                    // Find cf field
                    for (var j = 0; j < columnDisplay.length; j++) {
                        if (columnDisplay[j].indexOf(_row[i].widget.id) == 0) {
                            _row[i].widget.options.fields = {};
                            for (var k = j; k < columnDisplay.length; k++) {
                                if (columnDisplay[k].indexOf(_row[i].widget.prefix) == 0) {
                                    _row[i].widget.options.fields[columnDisplay[k].substr(1)] = true;
                                }
                            }
                            // Resets field visibility too
                            _row[i].widget._getColumnName();
                            _colData[i].visible = !(negated || jQuery.isEmptyObject(_row[i].widget.options.fields));
                            break;
                        }
                    }
                    // Disable if there are no custom fields
                    if (jQuery.isEmptyObject(_row[i].widget.customfields)) {
                        _colData[i].visible = false;
                        continue;
                    }
                    colName = _row[i].widget.id;
                }
                else {
                    colName = this._getColumnName(_row[i].widget);
                }
                if (!negated) {
                    _colData[i].order = typeof order[colName] === 'undefined' ? i : order[colName];
                }
                if (!colName)
                    continue;
                _colData[i].visible = negated;
                var stop_1 = false;
                for (var j = 0; j < columnDisplay.length && !stop_1; j++) {
                    if (columnDisplay[j] == colName) {
                        _colData[i].visible = !negated;
                        stop_1 = true;
                    }
                }
                if (size[colName]) {
                    // Make sure percentages stay percentages, and forget any preference otherwise
                    if (_colData[i].width.charAt(_colData[i].width.length - 1) == "%") {
                        _colData[i].width = typeof size[colName] == 'string' && size[colName].charAt(size[colName].length - 1) == "%" ? size[colName] : _colData[i].width;
                    }
                    else {
                        _colData[i].width = parseInt(size[colName]) + 'px';
                    }
                }
            }
        }
        _colData.sort(function (a, b) {
            return a.order - b.order;
        });
        _row.sort(function (a, b) {
            if (typeof a.colData !== 'undefined' && typeof b.colData !== 'undefined') {
                return a.colData.order - b.colData.order;
            }
            else if (typeof a.order !== 'undefined' && typeof b.order !== 'undefined') {
                return a.order - b.order;
            }
        });
    };
    /**
     * Take current column display settings and store them in this.egw().preferences
     * for next time
     */
    et2_nextmatch.prototype._updateUserPreferences = function () {
        var colMgr = this.dataview.getColumnMgr();
        var app = "";
        if (!this.options.settings.columnselection_pref) {
            this.options.settings.columnselection_pref = this.options.template;
        }
        var visibility = colMgr.getColumnVisibilitySet();
        var colDisplay = [];
        var colSize = {};
        var custom_fields = [];
        // visibility is indexed by internal ID, widget is referenced by position, preference needs name
        for (var i = 0; i < colMgr.columns.length; i++) {
            // @ts-ignore
            var widget = this.columns[i].widget;
            var colName = this._getColumnName(widget);
            if (colName) {
                // Server side wants each cf listed as a seperate column
                if (widget.instanceOf(et2_nextmatch_customfields)) {
                    // Just the ID for server side, not the whole nm name - some apps use it to skip custom fields
                    colName = widget.id;
                    for (var name_1 in widget.options.fields) {
                        if (widget.options.fields[name_1])
                            custom_fields.push(et2_nextmatch_customfields.PREFIX + name_1);
                    }
                }
                if (visibility[colMgr.columns[i].id].visible)
                    colDisplay.push(colName);
                // When saving sizes, only save columns with explicit values, preserving relative vs fixed
                // Others will be left to flex if width changes or more columns are added
                if (colMgr.columns[i].relativeWidth) {
                    colSize[colName] = (colMgr.columns[i].relativeWidth * 100) + "%";
                }
                else if (colMgr.columns[i].fixedWidth) {
                    colSize[colName] = colMgr.columns[i].fixedWidth;
                }
            }
            else if (colMgr.columns[i].fixedWidth || colMgr.columns[i].relativeWidth) {
                this.egw().debug("info", "Could not save column width - no name", colMgr.columns[i].id);
            }
        }
        var list = et2_core_common_1.et2_csvSplit(this.options.settings.columnselection_pref, 2, ".");
        var pref = this.options.settings.columnselection_pref;
        if (pref.indexOf('nextmatch') == 0) {
            app = list[0].substring('nextmatch'.length + 1);
        }
        else {
            app = list[0];
            // 'nextmatch-' prefix is there in preference name, but not in setting, so add it in
            pref = "nextmatch-" + this.options.settings.columnselection_pref;
        }
        // Server side wants each cf listed as a seperate column
        jQuery.merge(colDisplay, custom_fields);
        // Update query value, so data source can use visible columns to exclude expensive sub-queries
        var oldCols = this.get_columns();
        this.activeFilters.selectcols = this.sortedColumnsList.length > 0 ? this.sortedColumnsList : colDisplay;
        // We don't need to re-query if they've removed a column
        var changed = [];
        ColLoop: for (var i = 0; i < colDisplay.length; i++) {
            for (var j = 0; j < oldCols.length; j++) {
                if (colDisplay[i] == oldCols[j])
                    continue ColLoop;
            }
            changed.push(colDisplay[i]);
        }
        // If a custom field column was added, throw away cache to deal with
        // efficient apps that didn't send all custom fields in the first request
        var cf_added = jQuery(changed).filter(jQuery(custom_fields)).length > 0;
        // Save visible columns and sizes if selectcols is not emtpy (an empty selectcols actually deletes the prefrence)
        if (!jQuery.isEmptyObject(this.activeFilters.selectcols)) {
            // 'nextmatch-' prefix is there in preference name, but not in setting, so add it in
            this.egw().set_preference(app, pref, this.activeFilters.selectcols.join(","), 
            // Use callback after the preference gets set to trigger refresh, in case app
            // isn't looking at selectcols and just uses preference
            cf_added ? jQuery.proxy(function () {
                if (this.controller)
                    this.controller.update(true);
            }, this) : null);
            // Save adjusted column sizes and inform user about it
            this.egw().set_preference(app, pref + "-size", colSize);
            this.egw().message(this.egw().lang("Saved column sizes to preferences."));
        }
        this.egw().set_preference(app, pref + "-size", colSize);
        // No significant change (just normal columns shown) and no need to wait,
        // but the grid still needs to be redrawn if a custom field was removed because
        // the cell content changed.  This is a cheaper refresh than the callback,
        // this.controller.update(true)
        if ((changed.length || custom_fields.length) && !cf_added)
            this.applyFilters();
    };
    et2_nextmatch.prototype._parseHeaderRow = function (_row, _colData) {
        // Make sure there's a widget - cols disabled in template can be missing them, and the header really likes to have a widget
        for (var x = 0; x < _row.length; x++) {
            if (!_row[x].widget) {
                _row[x].widget = et2_core_widget_1.et2_createWidget("label", {});
            }
        }
        // Get column display preference
        this._applyUserPreferences(_row, _colData);
        // Go over the header row and create the column entries
        this.columns = new Array(_row.length);
        var columnData = new Array(_row.length);
        // No action columns in et2
        var remove_action_index = null;
        for (var x = 0; x < _row.length; x++) {
            this.columns[x] = jQuery.extend({
                "order": _colData[x] && typeof _colData[x].order !== 'undefined' ? _colData[x].order : x,
                "widget": _row[x].widget
            }, _colData[x]);
            var visibility = (!_colData[x] || _colData[x].visible) ?
                et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_VISIBLE :
                et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_INVISIBLE;
            if (_colData[x].disabled && _colData[x].disabled !== '' &&
                this.getArrayMgr("content").parseBoolExpression(_colData[x].disabled)) {
                visibility = et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_DISABLED;
                this.columns[x].visible = false;
            }
            columnData[x] = {
                "id": "col_" + x,
                // @ts-ignore
                "order": this.columns[x].order,
                "caption": this._genColumnCaption(_row[x].widget),
                "visibility": visibility,
                "width": _colData[x] ? _colData[x].width : 0
            };
            if (_colData[x].width === 'auto') {
                // Column manager does not understand 'auto', which grid widget
                // uses if width is not set
                columnData[x].width = '100%';
            }
            if (_colData[x].minWidth) {
                columnData[x].minWidth = _colData[x].minWidth;
            }
            if (_colData[x].maxWidth) {
                columnData[x].maxWidth = _colData[x].maxWidth;
            }
            // No action columns in et2
            var colName = this._getColumnName(_row[x].widget);
            if (colName == 'actions' || colName == 'legacy_actions' || colName == 'legacy_actions_check_all') {
                remove_action_index = x;
            }
            else if (!colName) {
                // Unnamed column cannot be toggled or saved
                columnData[x].visibility = et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_ALWAYS_NOSELECT;
                this.columns[x].visible = true;
            }
        }
        // Remove action column
        if (remove_action_index != null) {
            this.columns.splice(remove_action_index, remove_action_index);
            columnData.splice(remove_action_index, remove_action_index);
            _colData.splice(remove_action_index, remove_action_index);
        }
        // Create the column manager and update the grid container
        this.dataview.setColumns(columnData);
        for (var x = 0; x < _row.length; x++) {
            // Append the widget to this container
            this.addChild(_row[x].widget);
        }
        // Create the nextmatch row provider
        this.rowProvider = new et2_extension_nextmatch_rowProvider_1.et2_nextmatch_rowProvider(this.dataview.rowProvider, this._getSubgrid, this);
        // Register handler to update preferences when column properties are changed
        var self = this;
        this.dataview.onUpdateColumns = function () {
            // Use apply to make sure context is there
            self._updateUserPreferences.apply(self);
            // Allow column widgets a chance to resize
            self.iterateOver(function (widget) {
                if (typeof widget.resize === 'function') {
                    widget.resize();
                }
            }, self, et2_core_interfaces_1.et2_IResizeable);
        };
        // Register handler for column selection popup, or disable
        if (this.selectPopup) {
            this.selectPopup.remove();
            this.selectPopup = null;
        }
        if (this.options.settings.no_columnselection) {
            this.dataview.selectColumnsClick = function () {
                return false;
            };
            jQuery('span.selectcols', this.dataview.headTr).hide();
        }
        else {
            jQuery('span.selectcols', this.dataview.headTr).show();
            this.dataview.selectColumnsClick = function (event) {
                self._selectColumnsClick(event);
            };
        }
    };
    et2_nextmatch.prototype._parseDataRow = function (_row, _rowData, _colData) {
        var columnWidgets = [];
        _row.sort(function (a, b) {
            return a.colData.order - b.colData.order;
        });
        for (var x = 0; x < this.columns.length; x++) {
            if (!this.columns[x].visible) {
                continue;
            }
            columnWidgets[x] = _row[x].widget;
            // Pass along column alignment
            if (_row[x].align && columnWidgets[x]) {
                columnWidgets[x].align = _row[x].align;
            }
        }
        this.rowProvider.setDataRowTemplate(columnWidgets, _rowData, this);
        // Create the grid controller
        this.controller = new et2_extension_nextmatch_controller_1.et2_nextmatch_controller(null, this.egw(), this.getInstanceManager().etemplate_exec_id, this, null, this.dataview.grid, this.rowProvider, this.options.settings.action_links, null, this.options.actions);
        this.controller.setFilters(this.activeFilters);
        // Need to trigger empty row the first time
        if (total == 0)
            this.controller._emptyRow();
        // Set data cache prefix to either provided custom or auto
        if (!this.options.settings.dataStorePrefix && this.options.settings.get_rows) {
            // Use jsapi data module to update
            var list = this.options.settings.get_rows.split('.', 2);
            if (list.length < 2)
                list = this.options.settings.get_rows.split('_'); // support "app_something::method"
            this.options.settings.dataStorePrefix = list[0];
        }
        this.controller.setPrefix(this.options.settings.dataStorePrefix);
        // Set the view
        this.controller._view = this.view;
        // Load the initial order
        /*this.controller.loadInitialOrder(this._getInitialOrder(
            this.options.settings.rows, this.options.settings.row_id
        ));*/
        // Set the initial row count
        var total = typeof this.options.settings.total != "undefined" ?
            this.options.settings.total : 0;
        // This triggers an invalidate, which updates the grid
        this.dataview.grid.setTotalCount(total);
        // Insert any data sent from server, so invalidate finds data already
        if (this.options.settings.rows && this.options.settings.num_rows) {
            this.controller.loadInitialData(this.options.settings.dataStorePrefix, this.options.settings.row_id, this.options.settings.rows);
            // Remove, to prevent duplication
            delete this.options.settings.rows;
        }
    };
    et2_nextmatch.prototype._parseGrid = function (_grid) {
        // Search the rows for a header-row - if one is found, parse it
        for (var y = 0; y < _grid.rowData.length; y++) {
            // Parse the first row as a header, need header to parse the data rows
            if (_grid.rowData[y]["class"] == "th" || y == 0) {
                this._parseHeaderRow(_grid.cells[y], _grid.colData);
            }
            else if (this.controller == null) {
                this._parseDataRow(_grid.cells[y], _grid.rowData[y], _grid.colData);
            }
        }
        this.dataview.table.resize();
    };
    et2_nextmatch.prototype._getSubgrid = function (_row, _data, _controller) {
        // Fetch the id of the element described by _data, this will be the
        // parent_id of the elements in the subgrid
        var rowId = _data.content[this.options.settings.row_id];
        // Create a new grid with the row as parent and the dataview grid as
        // parent grid
        var grid = new et2_dataview_view_grid_1.et2_dataview_grid(_row, this.dataview.grid);
        // Create a new controller for the grid
        var controller = new et2_extension_nextmatch_controller_1.et2_nextmatch_controller(_controller, this.egw(), this.getInstanceManager().etemplate_exec_id, this, rowId, grid, this.rowProvider, this.options.settings.action_links, _controller.getObjectManager());
        controller.update();
        // Register inside the destruction callback of the grid
        grid.setDestroyCallback(function () {
            controller.destroy();
        });
        return grid;
    };
    et2_nextmatch.prototype._getInitialOrder = function (_rows, _rowId) {
        var _order = [];
        // Get the length of the non-numerical rows arra
        var len = 0;
        for (var key in _rows) {
            if (!isNaN(parseInt(key)) && parseInt(key) > len)
                len = parseInt(key);
        }
        // Iterate over the rows
        for (var i = 0; i < len; i++) {
            // Get the uid from the data
            var uid = this.egw().app_name() + '::' + _rows[i][_rowId];
            // Store the data for that uid
            this.egw().dataStoreUID(uid, _rows[i]);
            // Push the uid onto the order array
            _order.push(uid);
        }
        return _order;
    };
    et2_nextmatch.prototype._selectColumnsClick = function (e) {
        var self = this;
        var columnMgr = this.dataview.getColumnMgr();
        // ID for faking letter selection in column selection
        var LETTERS = '~search_letter~';
        var columns = [];
        var columns_selected = [];
        for (var i = 0; i < columnMgr.columns.length; i++) {
            var col = columnMgr.columns[i];
            var widget = this.columns[i].widget;
            columns.push(__assign(__assign({}, col), { widget: widget }));
        }
        // Letter search
        if (this.options.settings.lettersearch) {
            columns.push({
                id: LETTERS,
                caption: this.egw().lang('Search letter'),
                visibility: (this.header.lettersearch.is(':visible') ? et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_VISIBLE : et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_INVISIBLE)
            });
        }
        var updateColumns = function (button, values) {
            if (button != Et2Dialog_1.Et2Dialog.OK_BUTTON) {
                return;
            }
            // Update visibility
            var visibility = {};
            for (var i = 0; i < columnMgr.columns.length; i++) {
                var col_1 = columnMgr.columns[i];
                if (col_1.caption && col_1.visibility !== et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_ALWAYS_NOSELECT &&
                    col_1.visibility !== et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_DISABLED) {
                    visibility[col_1.id] = { visible: false };
                }
            }
            var value = values.columns;
            // Update & remove letter filter
            if (self.header.lettersearch) {
                var show_letters = true;
                if (value.indexOf(LETTERS) >= 0) {
                    value.splice(value.indexOf(LETTERS), 1);
                }
                else {
                    show_letters = false;
                }
                self._set_lettersearch(show_letters);
            }
            self.sortedColumnsList = [];
            for (var i = 0; i < value.length; i++) {
                // Handle skipped columns
                var column = 0;
                while (value[i] != "col_" + column && column < columnMgr.columns.length) {
                    column++;
                }
                if (!self.columns[column]) {
                    continue;
                }
                if (visibility[value[i]]) {
                    visibility[value[i]].visible = true;
                }
                var col_name = self._getColumnName(self.columns[column].widget);
                // Custom fields are listed seperately in column list, but are only 1 column
                if (self.columns[column] && self.columns[column].widget.instanceOf(et2_nextmatch_customfields)) {
                    var cf = self.columns[column].widget.options.customfields;
                    var visible = self.columns[column].widget.options.fields;
                    self.sortedColumnsList.push(self.columns[column].widget.id);
                    // Turn off all custom fields
                    for (var field_name in cf) {
                        visible[field_name] = false;
                    }
                    // Turn on selected custom fields
                    for (var j = i; j < value.length; j++) {
                        if (value[j].indexOf(et2_extension_customfields_1.et2_customfields_list.PREFIX) != 0) {
                            continue;
                        }
                        self.sortedColumnsList.push(value[j]);
                        visible[value[j].substring(1)] = true;
                        i++;
                    }
                    self.columns[column].widget.set_visible(visible);
                }
                else {
                    self.sortedColumnsList.push(col_name);
                }
            }
            columnMgr.setColumnVisibilitySet(visibility);
            self.dataview.updateColumns();
            // Auto refresh
            self._set_autorefresh(values.autoRefresh);
            if (show_letters) {
                self.activeFilters.selectcols.push('lettersearch');
            }
            self.getInstanceManager().submit();
            self.selectPopup = null;
        };
        // Build the popup
        var apps = this.egw().user('apps');
        var colDialog = new Et2Dialog_1.Et2Dialog(this.egw());
        colDialog.transformAttributes({
            title: this.egw().lang("Select columns"),
            buttons: Et2Dialog_1.Et2Dialog.BUTTONS_OK_CANCEL,
            template: this.egw().link(this.egw().webserverUrl + "/api/templates/default/nm_column_selection.xet"),
            callback: updateColumns,
            value: {
                content: {
                    autoRefresh: parseInt(this._get_autorefresh())
                },
                readonlys: {
                    default_preference: typeof apps.admin == "undefined"
                },
                modifications: {
                    autoRefresh: {
                        disabled: this.options.disable_autorefresh
                    },
                    columns: {
                        columns: columns,
                    }
                }
            }
        });
        document.body.appendChild(colDialog);
    };
    /**
     * Get the currently displayed columns
     * Each customfield is listed separately
     */
    et2_nextmatch.prototype.get_columns = function () {
        var colMgr = this.dataview.getColumnMgr();
        if (!colMgr) {
            return [];
        }
        var visibility = colMgr.getColumnVisibilitySet();
        var colDisplay = [];
        var custom_fields = [];
        // visibility is indexed by internal ID, widget is referenced by position, preference needs name
        for (var i = 0; i < colMgr.columns.length; i++) {
            // @ts-ignore
            var widget = this.columns[i].widget;
            var colName = this._getColumnName(widget);
            if (colName) {
                // Server side wants each cf listed as a seperate column
                if (widget.instanceOf(et2_nextmatch_customfields) && visibility[colMgr.columns[i].id].visible && visibility[colMgr.columns[i].id].enabled) {
                    // Just the ID for server side, not the whole nm name - some apps use it to skip custom fields
                    colName = widget.id;
                    for (var name_2 in widget.options.fields) {
                        if (widget.options.fields[name_2])
                            custom_fields.push(et2_nextmatch_customfields.PREFIX + name_2);
                    }
                }
                if (visibility[colMgr.columns[i].id].visible && visibility[colMgr.columns[i].id].enabled) {
                    colDisplay.push(colName);
                }
            }
        }
        // List each customfield as a seperate column
        jQuery.merge(colDisplay, custom_fields);
        return this.sortedColumnsList.length > 0 ? this.sortedColumnsList : colDisplay;
    };
    /**
     * Set the currently displayed columns, without updating user's preference
     *
     * @param {string[]} column_list List of column names
     * @param {boolean} trigger_update =false - explicitly trigger an update
     */
    et2_nextmatch.prototype.set_columns = function (column_list, trigger_update) {
        var _a;
        if (trigger_update === void 0) { trigger_update = false; }
        var columnMgr = this.dataview.getColumnMgr();
        var visibility = {};
        var need_reload = false;
        // Initialize to false
        for (var i = 0; i < columnMgr.columns.length; i++) {
            var col = columnMgr.columns[i];
            if (col.caption && col.visibility != et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_ALWAYS_NOSELECT) {
                visibility[col.id] = { visible: false };
            }
        }
        for (var i = 0; i < this.columns.length; i++) {
            var widget = this.columns[i].widget;
            var colName = this._getColumnName(widget);
            if (column_list.indexOf(colName) !== -1 &&
                typeof visibility[columnMgr.columns[i].id] !== 'undefined') {
                visibility[columnMgr.columns[i].id].visible = true;
            }
            // Custom fields are listed seperately in column list, but are only 1 column
            if (widget && widget.instanceOf(et2_nextmatch_customfields)) {
                // Just the ID for server side, not the whole nm name - some apps use it to skip custom fields
                colName = widget.id;
                var show_custom_fields = false;
                if (column_list.indexOf(colName) !== -1) {
                    show_custom_fields = true;
                }
                var cf = this.columns[i].widget.options.customfields;
                var visible = this.columns[i].widget.options.fields;
                // Turn off all custom fields
                for (var field_name in cf) {
                    visible[field_name] = false;
                }
                // Turn on selected custom fields - start from 0 in case they're not in order
                for (var j = 0; j < column_list.length; j++) {
                    if (column_list[j].indexOf(et2_extension_customfields_1.et2_customfields_list.PREFIX) != 0)
                        continue;
                    visible[column_list[j].substring(1)] = true;
                }
                widget.set_visible(visible);
                visibility[columnMgr.columns[i].id].visible = show_custom_fields && Object.values(visible).filter(function (f) { return f; }).length > 0;
            }
            this.columns[i].visible = (_a = visibility[columnMgr.columns[i].id]) === null || _a === void 0 ? void 0 : _a.visible;
            if (this.dataview.rowProvider._columnIds.indexOf(columnMgr.columns[i].id) == -1) {
                need_reload = need_reload || this.columns[i].visible;
            }
        }
        columnMgr.setColumnVisibilitySet(visibility);
        // We don't want to update user's preference, so directly update
        this.dataview._updateColumns();
        if (need_reload) {
            // We need to change preferences and reload to get columns that were hidden during the first load
            this.dataview.updateColumns();
            this.getInstanceManager().submit();
            return;
        }
        // Allow column widgets a chance to resize
        this.iterateOver(function (widget) {
            if (typeof widget.resize === 'function') {
                widget.resize();
            }
        }, this, et2_core_interfaces_1.et2_IResizeable);
    };
    /**
     * Set the letter search preference, and update the UI
     *
     * @param {boolean} letters_on
     */
    et2_nextmatch.prototype._set_lettersearch = function (letters_on) {
        if (letters_on) {
            this.header.lettersearch.show();
        }
        else {
            this.header.lettersearch.hide();
        }
        var lettersearch_preference = "nextmatch-" + this.options.settings.columnselection_pref + "-lettersearch";
        this.egw().set_preference(this.egw().app_name(), lettersearch_preference, letters_on);
    };
    /**
     * Set the auto-refresh time period, and starts the timer if not started
     *
     * @param time int Refresh period, in seconds
     */
    et2_nextmatch.prototype._set_autorefresh = function (time) {
        var _this = this;
        // Start / update timer
        if (this._autorefresh_timer) {
            window.clearInterval(this._autorefresh_timer);
            delete this._autorefresh_timer;
        }
        // Store preference
        var refresh_preference = "nextmatch-" + this.options.settings.columnselection_pref + "-autorefresh";
        var app = this._get_appname();
        if (this._get_autorefresh() != time) {
            this.egw().set_preference(app, refresh_preference, time);
        }
        if (time > 0) {
            if (!this.controller) {
                // Controller is not ready yet, come back later
                setTimeout(function () { _this._set_autorefresh(time); }, 1000);
                return;
            }
            this._autorefresh_timer = setInterval(jQuery.proxy(this.controller.update, this.controller), time * 1000);
            // Bind to tab show/hide events, so that we don't bother refreshing in the background
            jQuery(this.getInstanceManager().DOMContainer.parentNode).on('hide.et2_nextmatch', jQuery.proxy(function (e) {
                // Stop
                window.clearInterval(this._autorefresh_timer);
                jQuery(e.target).off(e);
                // If the autorefresh time is up, bind once to trigger a refresh
                // (if needed) when tab is activated again
                this._autorefresh_timer = setTimeout(jQuery.proxy(function () {
                    // Check in case it was stopped / destroyed since
                    if (!this._autorefresh_timer || !this.getInstanceManager())
                        return;
                    jQuery(this.getInstanceManager().DOMContainer.parentNode).one('show.et2_nextmatch', 
                    // Important to use anonymous function instead of just 'this.refresh' because
                    // of the parameters passed
                    jQuery.proxy(function () {
                        this.refresh(null, 'edit');
                    }, this));
                }, this), time * 1000);
            }, this));
            jQuery(this.getInstanceManager().DOMContainer.parentNode).on('show.et2_nextmatch', jQuery.proxy(function (e) {
                // Start normal autorefresh timer again
                this._set_autorefresh(this._get_autorefresh());
                jQuery(e.target).off(e);
            }, this));
        }
    };
    /**
     * Get the auto-refresh timer
     *
     * @return int Refresh period, in secods
     */
    et2_nextmatch.prototype._get_autorefresh = function () {
        if (this.options.disable_autorefresh) {
            return 0;
        }
        var refresh_preference = "nextmatch-" + this.options.settings.columnselection_pref + "-autorefresh";
        return this.egw().preference(refresh_preference, this._get_appname());
    };
    /**
     * Enable or disable autorefresh
     *
     * If false, autorefresh will be shown in column selection.  If the user already has an autorefresh preference
     * for this nextmatch, the timer will be started.
     *
     * If true, the timer will be stopped and autorefresh will not be shown in column selection
     *
     * @param disabled
     */
    et2_nextmatch.prototype.set_disable_autorefresh = function (disabled) {
        this.options.disable_autorefresh = disabled;
        this._set_autorefresh(this._get_autorefresh());
    };
    /**
     * When the template attribute is set, the nextmatch widget tries to load
     * that template and to fetch the grid which is inside of it. It then calls
     *
     * @param {string} template_name Full template name in the form app.template[.template]
     */
    et2_nextmatch.prototype.set_template = function (template_name) {
        var _this = this;
        var template = Et2Widget_1.loadWebComponent("et2-template", {
            "id": template_name,
            class: "hideme"
        }, this);
        // Some apps send header data in 'rows', which is the wrong namespace.  Passing it into the header can trigger
        // autorepeat in some cases, so pass just the non-numeric keys into header namespace.  Some headers also use content
        // in the parent nm namespace, just to complicate things.
        var rows = this.getArrayMgr("content").getEntry("rows") || {};
        Object.keys(rows).forEach(function (k) {
            if (isNaN(k)) {
                _this.getArrayMgr("content").data[k] = rows[k];
            }
        });
        if (this.template) {
            // Stop early to prevent unneeded processing, and prevent infinite
            // loops if the server changes the template in get_rows
            if (this.template == template_name) {
                return;
            }
            // Free the grid components - they'll be re-created as the template is processed
            this.dataview.destroy();
            this.rowProvider.destroy();
            this.controller.destroy();
            this.controller = null;
            // Free any children from previous template
            // They may get left behind because of how detached nodes are processed
            // We don't use iterateOver because it checks sub-children
            for (var i = this._children.length - 1; i >= 0; i--) {
                var _node = this._children[i];
                if (_node != this.header && _node !== template) {
                    this.removeChild(_node);
                    _node.destroy();
                }
            }
            // Clear this setting if it's the same as the template, or
            // the columns will not be loaded
            if (this.template == this.options.settings.columnselection_pref) {
                this.options.settings.columnselection_pref = template_name;
            }
            this.dataview = new et2_dataview_1.et2_dataview(this.innerDiv, this.egw());
        }
        if (!template) {
            this.egw().debug("error", "Error while loading definition template for " +
                "nextmatch widget.", template_name);
            return;
        }
        if (this.options.disabled) {
            return;
        }
        // Deferred parse function - template might not be fully loaded
        var parse = function (template) {
            // Keep the name of the template, as we'll free up the widget after parsing
            this.template = template_name;
            // Fetch the grid element and parse it
            var definitionGrid = template.getChildren()[0];
            if (definitionGrid && definitionGrid instanceof et2_widget_grid_1.et2_grid) {
                this._parseGrid(definitionGrid);
            }
            else {
                this.egw().debug("error", "Nextmatch widget expects a grid to be the " +
                    "first child of the defined template.");
                return;
            }
            // Free the template and remove it
            setTimeout(function () {
                this.removeChild(template);
                template.destroy();
                template.remove();
            }.bind(this), 1);
            // Call the "setNextmatch" function of all registered
            // INextmatchHeader widgets.  This updates this.activeFilters.col_filters according
            // to what's in the template.
            this.iterateOver(function (_node) {
                _node.setNextmatch(this);
            }, this, exports.et2_INextmatchHeader);
            // Set filters to current values
            // TODO this.controller.setFilters(this.activeFilters);
            // If no data was sent from the server, and num_rows is 0, the nm will be empty.
            // This triggers a cache check if visible
            if (!this.options.settings.num_rows && this.controller) {
                if (jQuery(this.getDOMNode()).filter(":visible").length > 0) {
                    this.controller.update();
                }
                else {
                    // Not visible, queue it up
                    this._queue_refresh([], et2_nextmatch.EDIT);
                }
            }
            // Load the default sort order
            if (this.options.settings.order && this.options.settings.sort) {
                this.sortBy(this.options.settings.order, this.options.settings.sort == "ASC", false);
            }
            // Start auto-refresh
            this._set_autorefresh(this._get_autorefresh());
        };
        // Wait until template (& children) are done
        // Keep promise so we can return it from doLoadingFinished
        this.template_promise = template.updateComplete.then(function () {
            parse.call(_this, template);
            if (!_this.dynheight && !_this.options.no_dynheight) {
                _this.dynheight = _this._getDynheight();
            }
            if (_this.dynheight)
                _this.dynheight.initialized = false;
            // Give components a chance to finish.  Their size will affect available space, especially column headers.
            var waitForWebComponents = [];
            _this.getChildren().forEach(function (w) {
                // @ts-ignore
                if (typeof w.updateComplete !== "undefined") {
                    // @ts-ignore
                    waitForWebComponents.push(w.updateComplete);
                }
            });
            Promise.all(waitForWebComponents).then(function () {
                _this.resize();
            });
        }).finally(function () { return _this.template_promise = null; });
        this.template_promise.widget = this;
        // Explictly add template to DOM since it won't happen otherwise, and webComponents need to be in the DOM
        // to complete
        this.div.append(template);
        return this.template_promise;
    };
    // Some accessors to match conventions
    et2_nextmatch.prototype.set_hide_header = function (hide) {
        (hide ? this.header.div.hide() : this.header.div.show());
    };
    et2_nextmatch.prototype.set_header_left = function (template) {
        this.header._build_header("left", template);
    };
    et2_nextmatch.prototype.set_header_right = function (template) {
        this.header._build_header("right", template);
    };
    et2_nextmatch.prototype.set_header_row = function (template) {
        this.header._build_header("row", template);
    };
    et2_nextmatch.prototype.set_header_row2 = function (template) {
        this.header._build_header("row2", template);
    };
    et2_nextmatch.prototype.set_no_filter = function (bool, filter_name) {
        if (typeof filter_name == 'undefined') {
            filter_name = 'filter';
        }
        this.options['no_' + filter_name] = bool;
        var filter = this.header[filter_name];
        if (filter) {
            filter.set_disabled(bool);
        }
        else if (bool) {
            filter = this.header._build_select(filter_name, 'et2-select', this.settings[filter_name], this.settings[filter_name + '_no_lang']);
        }
    };
    et2_nextmatch.prototype.set_no_filter2 = function (bool) {
        this.set_no_filter(bool, 'filter2');
    };
    /**
     * Directly change filter value, with no server query.
     *
     * This allows the server app code to change filter value, and have it
     * updated in the client UI.
     *
     * @param {String|number} value
     */
    et2_nextmatch.prototype.set_filter = function (value) {
        var update = this.update_in_progress;
        this.update_in_progress = true;
        this.activeFilters.filter = value;
        // Update the header
        this.header.setFilters(this.activeFilters);
        this.update_in_progress = update;
    };
    /**
     * Directly change filter2 value, with no server query.
     *
     * This allows the server app code to change filter2 value, and have it
     * updated in the client UI.
     *
     * @param {String|number} value
     */
    et2_nextmatch.prototype.set_filter2 = function (value) {
        var update = this.update_in_progress;
        this.update_in_progress = true;
        this.activeFilters.filter2 = value;
        // Update the header
        this.header.setFilters(this.activeFilters);
        this.update_in_progress = update;
    };
    /**
     * If nextmatch starts disabled, it will need a resize after being shown
     * to get all the sizing correct.  Override the parent to add the resize
     * when enabling.
     *
     * @param {boolean} _value
     */
    et2_nextmatch.prototype.set_disabled = function (_value) {
        var previous = this.disabled;
        _super.prototype.set_disabled.call(this, _value);
        if (previous && !_value) {
            this.resize();
        }
    };
    /**
     * Actions are handled by the controller, so ignore these during init.
     *
     * @param {object} actions
     */
    et2_nextmatch.prototype.set_actions = function (actions) {
        var _a, _b, _c;
        if (actions != this.options.actions && this.controller != null && this.controller._actionManager) {
            for (var i = this.controller._actionManager.children.length - 1; i >= 0; i--) {
                this.controller._actionManager.children[i].remove();
                // Force menu to regenerate
                (_c = (_b = (_a = this.controller) === null || _a === void 0 ? void 0 : _a._actionManager) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? true : delete _c.menu;
            }
            this.options.actions = actions;
            this.options.settings.action_links = this.controller._actionLinks = this._get_action_links(actions);
            this.controller._initActions(actions);
        }
    };
    /**
     * Switch view between row and tile.
     * This should be followed by a call to change the template to match, which
     * will cause a reload of the grid using the new settings.
     *
     * @param {string} view Either 'tile' or 'row'
     */
    et2_nextmatch.prototype.set_view = function (view) {
        // Restrict to the only 2 accepted values
        if (view == 'tile') {
            this.view = 'tile';
        }
        else {
            this.view = 'row';
        }
    };
    /**
     * Set a different / additional handler for dropped files.
     *
     * File dropping doesn't work with the action system, so we handle it in the
     * nextmatch by linking automatically to the target row.  This allows an additional handler.
     * It should accept a row UID and a File[], and return a boolean Execute the default (link) action
     *
     * @param {String|Function} handler
     */
    et2_nextmatch.prototype.set_onfiledrop = function (handler) {
        this.options.onfiledrop = handler;
    };
    /**
     * Handle drops of files by linking to the row, if possible.
     *
     * HTML5 / native file drops conflict with jQueryUI draggable, which handles
     * all our drop actions.  So we side-step the issue by registering an additional
     * drop handler on the rows parent.  If the row/actions itself doesn't handle
     * the drop, it should bubble and get handled here.
     *
     * @param {object} event
     * @param {object} target
     */
    et2_nextmatch.prototype.handle_drop = function (event, target) {
        // Check to see if we can handle the link
        // First, find the UID
        var row = this.controller.getRowByNode(target);
        var uid = (row === null || row === void 0 ? void 0 : row.uid) || null;
        // Get the file information
        var files = [];
        if (event.originalEvent && event.originalEvent.dataTransfer &&
            event.originalEvent.dataTransfer.files && event.originalEvent.dataTransfer.files.length > 0) {
            files = event.originalEvent.dataTransfer.files;
        }
        else {
            return false;
        }
        // Exectute the custom handler code
        if (this.options.onfiledrop && !this.options.onfiledrop.call(this, uid, files)) {
            return false;
        }
        event.stopPropagation();
        event.preventDefault();
        if (!row || !row.uid)
            return false;
        // Link the file to the row
        // just use a link widget, it's all already done
        var split = uid.split('::');
        var link_value = {
            to_app: split.shift(),
            to_id: split.join('::')
        };
        // Create widget and mangle to our needs
        var link = et2_core_widget_1.et2_createWidget("link-to", { value: link_value }, this);
        link.loadingFinished();
        link.file_upload.set_drop_target(false);
        if (row.row.tr) {
            // Ignore most of the UI, just use the status indicators
            var status_1 = jQuery(document.createElement("div"))
                .addClass('et2_link_to')
                .width(row.row.tr.width())
                .position({ my: "left top", at: "left top", of: row.row.tr })
                .append(link.status_span)
                .append(link.file_upload.progress)
                .appendTo(row.row.tr);
            // Bind to link event so we can remove when done
            link.div.on('link.et2_link_to', function (e, linked) {
                if (!linked) {
                    jQuery("li.success", link.file_upload.progress)
                        .removeClass('success').addClass('validation_error');
                }
                else {
                    // Update row
                    link._parent.refresh(uid, 'edit');
                }
                // Fade out nicely
                status_1.delay(linked ? 1 : 2000)
                    .fadeOut(500, function () {
                    link.destroy();
                    status_1.remove();
                });
            });
        }
        // Upload and link - this triggers the upload, which triggers the link, which triggers the cleanup and refresh
        link.file_upload.set_value(files);
    };
    et2_nextmatch.prototype.getDOMNode = function (_sender) {
        if (_sender == this || typeof _sender === 'undefined') {
            return this.div[0];
        }
        if (_sender == this.header) {
            return this.header.div[0];
        }
        for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i] && this.columns[i].widget && _sender == this.columns[i].widget) {
                return this.dataview.getHeaderContainerNode(i);
            }
        }
        // Let header have a chance
        if (_sender && _sender._parent && _sender._parent == this) {
            return this.header.getDOMNode(_sender);
        }
        return null;
    };
    /**
     * Called when loading the widget (sub-tree) is finished. First when this
     * function is called, the DOM-Tree is created. loadingFinished is
     * recursively called for all child elements. Do not directly override this
     * function but the doLoadingFinished function which is executed before
     * descending deeper into the DOM-Tree.
     *
     * Some widgets (template) do not load immediately because they request
     * additional resources via AJAX.  They will return a Deferred Promise object.
     * If you call loadingFinished(promises) after creating such a widget
     * programmatically, you might need to wait for it to fully complete its
     * loading before proceeding.
     *
     * Overridden to skip children in the sub-templates since we handle those directly.
     * Putting the children's promises into the list will stall the load, since those children
     * will never actually get completed - we clone them, and use the clones instead.
     *
     * @param {Promise[]} promises List of promises from widgets that are not done.  Pass an empty array, it will be filled if needed.
     */
    et2_nextmatch.prototype.loadingFinished = function (promises) {
        var _this = this;
        // Call all availble setters
        this.initAttributes(this.options);
        var childPromises = [];
        var loadChildren = function () {
            // Descend recursively into the tree
            for (var i = 0; i < _this._children.length; i++) {
                try {
                    _this._children[i].loadingFinished(childPromises);
                }
                catch (e) {
                    egw_global_1.egw.debug("error", "There was an error with a widget:\nError:%o\nProblem widget:%o", e.valueOf(), _this._children[i], e.stack);
                }
            }
        };
        var result = this.doLoadingFinished();
        if (typeof result == "object" && result.then) {
            // Widget is waiting.  Add to the list
            promises.push(result);
            result.then(loadChildren);
        }
        else {
            loadChildren();
        }
    };
    // Input widget
    /**
     * Get the current 'value' for the nextmatch
     */
    et2_nextmatch.prototype.getValue = function () {
        var _ids = this.getSelection();
        // Translate the internal uids back to server uids
        var idsArr = _ids.ids;
        for (var i = 0; i < idsArr.length; i++) {
            idsArr[i] = idsArr[i].split("::").pop();
        }
        var value = {
            selected: idsArr,
            col_filter: {}
        };
        jQuery.extend(value, this.activeFilters, this.value);
        if (typeof value.selectcols == "undefined" || value.selectcols.length === 0) {
            value.selectcols = this.get_columns();
        }
        return value;
    };
    et2_nextmatch.prototype.resetDirty = function () {
    };
    et2_nextmatch.prototype.isDirty = function () {
        return false;
    };
    et2_nextmatch.prototype.isValid = function () {
        return true;
    };
    et2_nextmatch.prototype.set_value = function (_value) {
        this.value = _value;
    };
    // Printing
    /**
     * Prepare for printing
     *
     * We check for un-loaded rows, and ask the user what they want to do about them.
     * If they want to print them all, we ask the server and print when they're loaded.
     */
    et2_nextmatch.prototype.beforePrint = function () {
        var _this = this;
        var _a, _b;
        // Add the class, if needed
        this.div.addClass('print');
        // Trigger resize, so we can fit on a page
        (_a = this.dynheight) === null || _a === void 0 ? void 0 : _a.outerNode.css('max-width', this.div.css('max-width'));
        this.resize();
        // Reset height to auto (after width resize) so there's no restrictions
        (_b = this.dynheight) === null || _b === void 0 ? void 0 : _b.innerNode.css('height', 'auto');
        // Check for rows that aren't loaded yet, or lots of rows
        var range = this.controller._grid.getIndexRange();
        this.print.old_height = this.controller._grid._scrollHeight;
        var loaded_count = range.bottom - range.top + 1;
        var total = this.controller._grid.getTotalCount();
        // Defer the printing to ask about columns & rows
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var pref, app, columns, columnMgr, columns_selected, i, col, widget, printDialog, callback, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pref = this.options.settings.columnselection_pref;
                        if (pref.indexOf('nextmatch') == 0) {
                            pref = 'nextmatch-' + pref;
                        }
                        app = this.getInstanceManager().app;
                        columns = [];
                        columnMgr = this.dataview.getColumnMgr();
                        pref += '_print';
                        columns_selected = [];
                        for (i = 0; i < columnMgr.columns.length; i++) {
                            col = columnMgr.columns[i];
                            widget = this.columns[i].widget;
                            columns.push(__assign(__assign({}, col), { widget: widget, name: this._getColumnName(widget) }));
                        }
                        // Preference exists?  Set it now
                        if (this.egw().preference(pref, app)) {
                            this.set_columns(jQuery.extend([], this.egw().preference(pref, app)));
                        }
                        callback = function (button, value) {
                            var _a;
                            if (button === Et2Dialog_1.Et2Dialog.CANCEL_BUTTON) {
                                // Give dialog a chance to close, or it will be in the print
                                window.setTimeout(function () {
                                    reject();
                                }, 0);
                                return;
                            }
                            var orientation = value.orientation ? "landscape" : "portrait";
                            // Set CSS for orientation
                            this.div.addClass(orientation);
                            this.egw().set_preference(app, pref + '_orientation', orientation);
                            // Try to tell browser about orientation
                            var css = '@page { size: ' + orientation + '; }', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
                            style.type = 'text/css';
                            style.media = 'print';
                            // @ts-ignore
                            if (style.styleSheet) {
                                // @ts-ignore
                                style.styleSheet.cssText = css;
                            }
                            else {
                                style.appendChild(document.createTextNode(css));
                            }
                            head.appendChild(style);
                            this.print.orientation_style = style;
                            // Trigger resize, so we can fit on a page
                            (_a = this.dynheight) === null || _a === void 0 ? void 0 : _a.outerNode.css('max-width', this.div.css('max-width'));
                            // Handle columns
                            var column_names = [];
                            value.columns.forEach(function (col_id) {
                                var _a;
                                var name = ((_a = columns.find(function (col) { return col.id == col_id; })) === null || _a === void 0 ? void 0 : _a.name) || "";
                                column_names.push(name || col_id);
                            });
                            this.set_columns(column_names);
                            this.egw().set_preference(app, pref, column_names);
                            var rows = parseInt(value.row_count);
                            if (rows > total) {
                                rows = total;
                            }
                            // If they want the whole thing, style it as all
                            if (button === Et2Dialog_1.Et2Dialog.OK_BUTTON && rows == this.controller._grid.getTotalCount()) {
                                // Add the class, gives more reliable sizing
                                this.div.addClass('print');
                                // Show it all
                                jQuery('.egwGridView_scrollarea', this.div).css('height', 'auto');
                            }
                            // We need more rows
                            if (button === 'dialog[all]' || rows > loaded_count) {
                                var count_1 = 0;
                                var fetchedCount_1 = 0;
                                var cancel_1 = false;
                                var nm_1 = this;
                                var dialog_1 = Et2Dialog_1.Et2Dialog.show_dialog(
                                // Abort the long task if they canceled the data load
                                function () {
                                    count_1 = total;
                                    cancel_1 = true;
                                    window.setTimeout(function () {
                                        reject();
                                    }, 0);
                                }, egw_global_1.egw.lang('Loading'), egw_global_1.egw.lang('please wait...'), {}, [
                                    {
                                        "button_id": Et2Dialog_1.Et2Dialog.CANCEL_BUTTON,
                                        label: egw_global_1.egw.lang('Cancel'),
                                        id: 'dialog[cancel]',
                                        image: 'cancel'
                                    }
                                ]);
                                // dataFetch() is asynchronous, so all these requests just get fired off...
                                // 200 rows chosen arbitrarily to reduce requests.
                                do {
                                    var ctx = {
                                        "self": this.controller,
                                        "start": count_1,
                                        "count": Math.min(rows, 200),
                                        "lastModification": this.controller._lastModification
                                    };
                                    if (nm_1.controller.dataStorePrefix) {
                                        // @ts-ignore
                                        ctx.prefix = nm_1.controller.dataStorePrefix;
                                    }
                                    nm_1.controller.dataFetch({ start: count_1, num_rows: Math.min(rows, 200) }, function (data) {
                                        // Keep track
                                        if (data && data.order) {
                                            fetchedCount_1 += data.order.length;
                                        }
                                        nm_1.controller._fetchCallback.apply(this, arguments);
                                        if (fetchedCount_1 >= rows) {
                                            if (cancel_1) {
                                                dialog_1.destroy();
                                                reject();
                                                return;
                                            }
                                            // Use CSS to hide all but the requested rows
                                            // Prevents us from showing more than requested, if actual height was less than average
                                            nm_1.print.row_selector = ".egwGridView_grid > tbody > tr:not(:nth-child(-n+" + rows + "))";
                                            egw_global_1.egw.css(nm_1.print.row_selector, 'display: none');
                                            // No scrollbar in print view
                                            jQuery('.egwGridView_scrollarea', nm_1.div).css('overflow-y', 'hidden');
                                            // Show it all
                                            jQuery('.egwGridView_scrollarea', nm_1.div).css('height', 'auto');
                                            // Grid (& widgets) need to redraw before it can be printed, so wait
                                            window.setTimeout(function () {
                                                // et2-link-string are the worst for taking a while
                                                var nodeListArray = Array.from(nm_1.div[0].querySelectorAll("et2-link-string"));
                                                var promises = nodeListArray.map(function (node) { return node.updateComplete; });
                                                Promise.all(promises).finally(function () {
                                                    // Should be OK to print now
                                                    dialog_1.close().then(function () { return resolve(); });
                                                });
                                            }, 3 * fetchedCount_1);
                                        }
                                    }, ctx);
                                    count_1 += 200;
                                } while (count_1 < rows);
                                nm_1.controller._grid.setScrollHeight(nm_1.controller._grid.getAverageHeight() * (rows + 1));
                            }
                            else {
                                // Don't need more rows, limit to requested and finish
                                // Show it all
                                jQuery('.egwGridView_scrollarea', this.div).css('height', 'auto');
                                // Use CSS to hide all but the requested rows
                                // Prevents us from showing more than requested, if actual height was less than average
                                this.print.row_selector = ".egwGridView_grid > tbody > tr:not(:nth-child(-n+" + rows + "))";
                                egw_global_1.egw.css(this.print.row_selector, 'display: none');
                                // No scrollbar in print view
                                jQuery('.egwGridView_scrollarea', this.div).css('overflow-y', 'hidden');
                                // Give dialog a chance to close, or it will be in the print
                                printDialog.close().then(function () { return resolve(); });
                            }
                        }.bind(this);
                        value = {
                            content: {
                                row_count: Math.min(100, total),
                                columns: this.egw().preference(pref, app) || columns_selected,
                                orientation: this.egw().preference(pref + '_orientation', app) == "landscape"
                            },
                            modifications: {
                                autoRefresh: {
                                    disabled: true
                                },
                                columns: {
                                    columns: columns,
                                }
                            }
                        };
                        return [4 /*yield*/, (printDialog = this._create_print_dialog.call(this, value, callback)).updateComplete];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Create and show the print dialog, which calls the provided callback when
     * done.  Broken out for overriding if needed.
     *
     * @param {Object} value Current settings and preferences, passed to the dialog for
     *	the template
     * @param {Object} value.content
     * @param {Object} value.sel_options
     *
     * @param {function(int, Object)} callback - Process the dialog response,
     *  format things according to the specified orientation and fetch any needed
     *  rows.
     *
     */
    et2_nextmatch.prototype._create_print_dialog = function (value, callback) {
        var base_url = this.getInstanceManager().template_base_url;
        if (base_url.substr(base_url.length - 1) == '/')
            base_url = base_url.slice(0, -1); // otherwise we generate a url //api/templates, which is wrong
        var tab = this.get_tab_info();
        // Get title for print dialog from settings or tab, if available
        var title = this.options.settings.label ? this.options.settings.label : (tab ? tab.label : '');
        var dialog = new Et2Dialog_1.Et2Dialog(this.egw());
        dialog.transformAttributes({
            // If you use a template, the second parameter will be the value of the template, as if it were submitted.
            callback: callback,
            buttons: Et2Dialog_1.Et2Dialog.BUTTONS_OK_CANCEL,
            title: this.egw().lang('Print') + ' ' + this.egw().lang(title),
            template: this.egw().link(base_url + '/api/templates/default/nm_print_dialog.xet'),
            value: value
        });
        document.body.appendChild(dialog);
        return dialog;
    };
    /**
     * Try to clean up the mess we made getting ready for printing
     * in beforePrint()
     */
    et2_nextmatch.prototype.afterPrint = function () {
        var _a;
        if (!this.div.hasClass('print')) {
            return;
        }
        this.div.removeClass('print landscape portrait');
        jQuery(this.print.orientation_style).remove();
        delete this.print.orientation_style;
        // Put scrollbar back
        jQuery('.egwGridView_scrollarea', this.div).css('overflow-y', '');
        // Correct size of grid, and trigger resize to fix it
        this.controller._grid.setScrollHeight(this.print.old_height);
        delete this.print.old_height;
        // Remove CSS rule hiding extra rows
        if (this.print.row_selector) {
            egw_global_1.egw.css(this.print.row_selector, '');
            delete this.print.row_selector;
        }
        // Restore columns
        var pref = [];
        var app = this.getInstanceManager().app;
        if (this.options.settings.columnselection_pref.indexOf('nextmatch') == 0) {
            pref = egw_global_1.egw.preference(this.options.settings.columnselection_pref, app);
        }
        else {
            // 'nextmatch-' prefix is there in preference name, but not in setting, so add it in
            pref = egw_global_1.egw.preference("nextmatch-" + this.options.settings.columnselection_pref, app);
        }
        if (pref) {
            if (typeof pref === 'string')
                pref = pref.split(',');
            // @ts-ignore
            this.set_columns(pref, app);
        }
        (_a = this.dynheight) === null || _a === void 0 ? void 0 : _a.outerNode.css('max-width', 'inherit');
        this.resize();
    };
    et2_nextmatch._attributes = {
        // These normally set in settings, but broken out into attributes to allow run-time changes
        "template": {
            "name": "Template",
            "type": "string",
            "description": "The id of the template which contains the grid layout."
        },
        "hide_header": {
            "name": "Hide header",
            "type": "boolean",
            "description": "Hide the header",
            "default": false
        },
        "header_left": {
            "name": "Left custom template",
            "type": "string",
            "description": "Customise the nextmatch - left side.  Provided template becomes a child of nextmatch, and any input widgets are automatically bound to refresh the nextmatch on change.  Any inputs with an onChange attribute can trigger the nextmatch to refresh by returning true.",
            "default": ""
        },
        "header_right": {
            "name": "Right custom template",
            "type": "string",
            "description": "Customise the nextmatch - right side, before favorites and row count. Provided template becomes a child of nextmatch, and any input widgets are automatically bound to refresh the nextmatch on change.  Any inputs with an onChange attribute can trigger the nextmatch to refresh by returning true.",
            "default": ""
        },
        "header_row": {
            "name": "Inline custom template",
            "type": "string",
            "description": "Customise the nextmatch - inline, after search before category,filter,filter2,header_right,favorites,row count.  Provided template becomes a child of nextmatch, and any input widgets are automatically bound to refresh the nextmatch on change.  Any inputs with an onChange attribute can trigger the nextmatch to refresh by returning true.",
            "default": ""
        },
        "header_row2": {
            "name": "Inline custom template",
            "type": "string",
            "description": "Customise the nextmatch - inline, after row count in new line.  Provided template becomes a child of nextmatch, and any input widgets are automatically bound to refresh the nextmatch on change.  Any inputs with an onChange attribute can trigger the nextmatch to refresh by returning true.",
            "default": ""
        },
        "no_filter": {
            "name": "No filter",
            "type": "boolean",
            "description": "Hide the first filter",
            "default": et2_core_common_1.et2_no_init
        },
        "no_filter2": {
            "name": "No filter2",
            "type": "boolean",
            "description": "Hide the second filter",
            "default": et2_core_common_1.et2_no_init
        },
        "disable_autorefresh": {
            "name": "Disable autorefresh",
            "type": "boolean",
            "description": "Disable the ability to autorefresh the nextmatch on a regular interval.  ",
            "default": false
        },
        "disable_selection_advance": {
            "name": "Disable selection advance",
            "type": "boolean",
            "description": "If a refresh deletes the currently selected row, we normally advance the selection to the next row.  Set to true to stop this.",
            "default": false
        },
        "view": {
            "name": "View",
            "type": "string",
            "description": "Display entries as either 'row' or 'tile'.  A matching template must also be set after changing this.",
            "default": et2_core_common_1.et2_no_init
        },
        "onselect": {
            "name": "onselect",
            "type": "js",
            "default": et2_core_common_1.et2_no_init,
            "description": "JS code which gets executed when rows are selected.  Can also be a app.appname.func(selected) style method"
        },
        "onfiledrop": {
            "name": "onFileDrop",
            "type": "js",
            "default": et2_core_common_1.et2_no_init,
            "description": "JS code that gets executed when a _file_ is dropped on a row.  Other drop interactions are handled by the action system.  Return false to prevent the default link action."
        },
        "onadd": {
            "name": "onAdd",
            "type": "js",
            "default": et2_core_common_1.et2_no_init,
            "description": "JS code that gets executed when a new entry is added via refresh().  Allows apps to override the default handling.  Return false to cancel the add."
        },
        "settings": {
            "name": "Settings",
            "type": "any",
            "description": "The nextmatch settings",
            "default": {}
        },
        "no_dynheight": {
            "name": "No dynheight",
            "type": "boolean",
            "description": "Disable the dynamic height",
            "default": false
        }
    };
    /**
     * Update types
     * @see et2_nextmatch.refresh() for more information
     */
    et2_nextmatch.ADD = 'add';
    et2_nextmatch.UPDATE_IN_PLACE = 'update-in-place';
    et2_nextmatch.UPDATE = 'update';
    et2_nextmatch.EDIT = 'edit';
    et2_nextmatch.DELETE = 'delete';
    et2_nextmatch.legacyOptions = ["template", "hide_header", "header_left", "header_right"];
    return et2_nextmatch;
}(et2_core_DOMWidget_1.et2_DOMWidget));
exports.et2_nextmatch = et2_nextmatch;
et2_core_widget_1.et2_register_widget(et2_nextmatch, ["nextmatch"]);
/**
 * Standard nextmatch header bar, containing filters, search, record count, letter filters, etc.
 *
 * Unable to use an existing template for this because parent (nm) doesn't, and template widget doesn't
 * actually load templates from the server.
 * @augments et2_DOMWidget
 */
var et2_nextmatch_header_bar = /** @class */ (function (_super) {
    __extends(et2_nextmatch_header_bar, _super);
    /**
     * Constructor
     *
     * @param _parent
     * @param _attrs
     * @param _child
     */
    function et2_nextmatch_header_bar(_parent, _attrs, _child) {
        var _this = _super.call(this, _parent, [_parent, _parent.options.settings], et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_nextmatch_header_bar._attributes, _child || {})) || this;
        _this.nextmatch = _parent;
        _this.div = jQuery(document.createElement("div"))
            .addClass("nextmatch_header");
        _this._createHeader();
        // Flag to avoid loops while updating filters
        _this.update_in_progress = false;
        return _this;
    }
    et2_nextmatch_header_bar.prototype.destroy = function () {
        var _a, _b, _c, _d, _e, _f, _g, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _x, _y, _z;
        this.nextmatch = null;
        _super.prototype.destroy.call(this);
        Array.from((_b = (_a = this.div) === null || _a === void 0 ? void 0 : _a.find('*')) !== null && _b !== void 0 ? _b : []).forEach(function (n) {
            n.destroy && n.destroy();
            n.remove && n.remove();
        });
        (_c = this.div) === null || _c === void 0 ? void 0 : _c.empty();
        (_d = this.div) === null || _d === void 0 ? void 0 : _d.remove();
        this.div = null;
        this.headers.forEach(function (h) {
            h.remove && h.remove();
            h.destroy && h.destroy();
        });
        this.headers.splice(0, this.headers.length);
        this.options = null;
        (_e = this.header_div) === null || _e === void 0 ? void 0 : _e.empty();
        (_f = this.header_div) === null || _f === void 0 ? void 0 : _f.remove();
        this.header_div = null;
        (_g = this.header_row) === null || _g === void 0 ? void 0 : _g.empty();
        (_j = this.header_row) === null || _j === void 0 ? void 0 : _j.remove();
        this.header_row = null;
        (_k = this.filter_div) === null || _k === void 0 ? void 0 : _k.remove();
        this.filter_div = null;
        (_l = this.row_div) === null || _l === void 0 ? void 0 : _l.remove();
        this.row_div = null;
        (_m = this.right_div) === null || _m === void 0 ? void 0 : _m.empty();
        (_o = this.right_div) === null || _o === void 0 ? void 0 : _o.remove();
        this.right_div = null;
        (_p = this.fav_span) === null || _p === void 0 ? void 0 : _p.remove();
        this.fav_span = null;
        (_q = this.toggle_header) === null || _q === void 0 ? void 0 : _q.remove();
        this.toggle_header = null;
        (_r = this.lettersearch) === null || _r === void 0 ? void 0 : _r.remove();
        this.lettersearch = null;
        (_s = this.search_box) === null || _s === void 0 ? void 0 : _s.empty();
        (_t = this.search_box) === null || _t === void 0 ? void 0 : _t.remove();
        this.search_box = null;
        (_u = this.et2_searchbox) === null || _u === void 0 ? void 0 : _u.destroy();
        this.et2_searchbox = null;
        (_v = this.category) === null || _v === void 0 ? void 0 : _v.destroy();
        this.category = null;
        (_x = this.filter) === null || _x === void 0 ? void 0 : _x.destroy();
        this.filter = null;
        (_y = this.filter2) === null || _y === void 0 ? void 0 : _y.destroy();
        this.filter2 = null;
        (_z = this.favorites) === null || _z === void 0 ? void 0 : _z.destroy();
        this.favorites = null;
        this.count = null;
        this.count_total = null;
    };
    et2_nextmatch_header_bar.prototype.setNextmatch = function (nextmatch) {
        var create_once = (this.nextmatch == null);
        this.nextmatch = nextmatch;
        if (create_once) {
            this._createHeader();
        }
        // Bind row count
        this.nextmatch.dataview.grid.setInvalidateCallback(function () {
            this.count_total.text(this.nextmatch.dataview.grid.getTotalCount() + "");
        }, this);
    };
    /**
     * Actions are handled by the controller, so ignore these
     *
     * @param {object} actions
     */
    et2_nextmatch_header_bar.prototype.set_actions = function (actions) {
    };
    et2_nextmatch_header_bar.prototype._createHeader = function () {
        var _a, _b, _c;
        var button;
        var self = this;
        var nm_div = this.nextmatch.getDOMNode();
        var settings = this.nextmatch.options.settings;
        this.div.prependTo(nm_div);
        // Left & Right (& row) headers
        this.headers = [
            { id: this.nextmatch.options.header_left },
            { id: this.nextmatch.options.header_right },
            { id: this.nextmatch.options.header_row },
            { id: this.nextmatch.options.header_row2 }
        ];
        // The rest of the header
        this.header_div = this.row_div = jQuery(document.createElement("div"))
            .addClass("nextmatch_header_row")
            .appendTo(this.div);
        this.filter_div = jQuery(document.createElement("div"))
            .addClass('filtersContainer')
            .appendTo(this.row_div);
        // Search
        this.search_box = jQuery(document.createElement("div"))
            .addClass('search')
            .prependTo(egw_action_common_1.egwIsMobile() ? this.nextmatch.getDOMNode() : this.row_div);
        // searchbox widget options
        var searchbox_options = {
            id: "search",
            overlay: (typeof settings.searchbox != 'undefined' && typeof settings.searchbox.overlay != 'undefined') ? settings.searchbox.overlay : false,
            onchange: function () {
                if (this.value !== self.nextmatch.activeFilters.search) {
                    self.nextmatch.applyFilters({ search: this.get_value() });
                }
            },
            value: settings.search || '',
            fix: !egw_action_common_1.egwIsMobile(),
            placeholder: egw_global_1.egw.lang("Search")
        };
        // searchbox widget
        this.et2_searchbox = Et2Widget_1.loadWebComponent('et2-searchbox', searchbox_options, this);
        // Set activeFilters to current value
        this.nextmatch.activeFilters.search = settings.search || '';
        this.et2_searchbox.set_value(settings.search || '');
        jQuery(this.et2_searchbox.getInputNode()).attr("aria-label", egw_global_1.egw.lang("search"));
        /**
         *  Mobile theme specific part for nm header
         *  nm header has very different behaivior for mobile theme and basically
         *  it has its own markup separately from nm header in normal templates.
         */
        if (egw_action_common_1.egwIsMobile()) {
            this.search_box.addClass('nm-mob-header');
            jQuery(this.div).css({ display: 'inline-block' }).addClass('nm_header_hide');
            //indicates appname in header
            jQuery(document.createElement('div'))
                .addClass('nm_appname_header')
                .text(egw_global_1.egw.lang(egw_global_1.egw.app_name()))
                .appendTo(this.search_box);
            this.delete_action = jQuery(document.createElement('div'))
                .addClass('nm_delete_action')
                .prependTo(this.search_box);
            // toggle header
            // add new button
            this.fav_span = jQuery(document.createElement('div'))
                .addClass('nm_favorites_div')
                .prependTo(this.search_box);
            // toggle header menu
            this.toggle_header = jQuery(document.createElement('button'))
                .addClass('nm_toggle_header')
                .click(function () {
                jQuery(self.div).toggleClass('nm_header_hide');
                jQuery(this).toggleClass('nm_toggle_header_on');
                window.setTimeout(function () {
                    self.nextmatch.resize();
                }, 800);
            })
                .prependTo(this.search_box);
            // Context menu
            this.action_header = jQuery(document.createElement('button'))
                .addClass('nm_action_header')
                .hide()
                .click(function (e) {
                if (self.nextmatch.getDOMNode().getElementsByClassName('selected').length > 0) {
                    e.stopPropagation();
                    self.nextmatch.getDOMNode().getElementsByClassName('selected')[0].dispatchEvent(new CustomEvent("tapandhold", { type: 'tapandhold' }));
                }
            })
                .prependTo(this.search_box);
        }
        // Add category
        if (!settings.no_cat) {
            if (typeof settings.cat_id_label == 'undefined')
                settings.cat_id_label = '';
            this.category = this._build_select('cat_id', (_a = settings.cat_widget) !== null && _a !== void 0 ? _a : (settings.cat_is_select ?
                'et2-select' : 'et2-select-cat'), settings.cat_id, settings.cat_is_select !== true, {
                placeholder: settings.cat_placeholder,
                multiple: false,
                class: "select-cat",
                value_class: settings.cat_id_class
            });
        }
        // Filter 1
        if (!settings.no_filter) {
            this.filter = this._build_select('filter', (_b = settings.filter_widget) !== null && _b !== void 0 ? _b : 'et2-select', settings.filter, settings.filter_no_lang, {
                placeholder: settings.filter_placeholder,
            });
        }
        // Filter 2
        if (!settings.no_filter2) {
            this.filter2 = this._build_select('filter2', (_c = settings.filter2_widget) !== null && _c !== void 0 ? _c : 'et2-select', settings.filter2, settings.filter2_no_lang, {
                placeholder: settings.filter2_placeholder,
                multiple: false,
                class: "select-cat",
                value_class: settings.filter2_class
            });
        }
        // Other stuff
        this.right_div = jQuery(document.createElement("div"))
            .addClass('header_row_right').appendTo(this.row_div);
        // Record count
        this.count = jQuery(document.createElement("span"))
            .addClass("header_count ui-corner-all");
        // Need to figure out how to update this as grid scrolls
        // this.count.append("? - ? ").append(egw.lang("of")).append(" ");
        this.count_total = jQuery(document.createElement("span"))
            .appendTo(this.count)
            .text(settings.total + "");
        this.count.appendTo(this.row_div);
        // Favorites
        this._setup_favorites(settings['favorites']);
        // Export
        if (typeof settings.csv_fields != "undefined" && settings.csv_fields != false) {
            var definition_1 = settings.csv_fields;
            if (settings.csv_fields === true) {
                definition_1 = egw_global_1.egw.preference('nextmatch-export-definition', this.nextmatch.egw().app_name());
            }
            var button_1 = et2_core_widget_1.et2_createWidget("buttononly", {
                id: "export",
                "statustext": "Export",
                image: "download",
                "background_image": true
            }, this);
            jQuery(button_1.getDOMNode())
                .click(this.nextmatch, function (event) {
                // @ts-ignore
                egw_openWindowCentered2(egw_global_1.egw.link('/index.php', {
                    'menuaction': 'importexport.importexport_export_ui.export_dialog',
                    'appname': event.data.egw().getAppName(),
                    'definition': definition_1
                }), '_blank', 850, 440, 'yes');
            });
        }
        // Another place to customize nextmatch
        this.header_row = jQuery(document.createElement("div"))
            .addClass('header_row').appendTo(this.right_div);
        // Letter search
        var current_letter = this.nextmatch.options.settings.searchletter ?
            this.nextmatch.options.settings.searchletter :
            (this.nextmatch.activeFilters ? this.nextmatch.activeFilters.searchletter : false);
        if (this.nextmatch.options.settings.lettersearch || current_letter) {
            this.lettersearch = jQuery(document.createElement("table"))
                .addClass('nextmatch_lettersearch')
                .css("width", "100%")
                .appendTo(this.div);
            var tbody = jQuery(document.createElement("tbody")).appendTo(this.lettersearch);
            var row = jQuery(document.createElement("tr")).appendTo(tbody);
            // Capitals, A-Z
            var letters = this.egw().lang('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');
            for (var i in letters) {
                button = jQuery(document.createElement("td"))
                    .addClass("lettersearch")
                    .appendTo(row)
                    .attr("id", letters[i])
                    .text(letters[i]);
                if (letters[i] == current_letter)
                    button.addClass("lettersearch_active");
            }
            button = jQuery(document.createElement("td"))
                .addClass("lettersearch")
                .appendTo(row)
                .attr("id", "")
                .text(egw_global_1.egw.lang("all"));
            if (!current_letter)
                button.addClass("lettersearch_active");
            this.lettersearch.click(this.nextmatch, function (event) {
                // this is the lettersearch table
                jQuery("td", this).removeClass("lettersearch_active");
                jQuery(event.target).addClass("lettersearch_active");
                event.data.applyFilters({ searchletter: event.target.id || false });
            });
            // Set activeFilters to current value
            this.nextmatch.activeFilters.searchletter = current_letter;
        }
        // Apply letter search preference
        var lettersearch_preference = "nextmatch-" + this.nextmatch.options.settings.columnselection_pref + "-lettersearch";
        if (this.lettersearch && !egw_global_1.egw.preference(lettersearch_preference, this.nextmatch.egw().app_name())) {
            this.lettersearch.hide();
        }
    };
    /**
     * Build & bind to a sub-template into the header
     *
     * @param {string} location One of left, right, or row
     * @param {string} template_name Name of the template to load into the location
     */
    et2_nextmatch_header_bar.prototype._build_header = function (location, template_name) {
        var id = location == "left" ? 0 : (location == "right" ? 1 : (location == "row" ? 2 : 3));
        var existing = this.headers[id];
        // @ts-ignore
        if (existing && existing._type) {
            if (existing.id == template_name)
                return;
            existing.destroy();
            this.headers[id] = null;
        }
        if (!template_name)
            return;
        // Load the template
        var self = this;
        var header = Et2Widget_1.loadWebComponent("et2-template", { "id": template_name }, this);
        this.headers[id] = header;
        // fix order in DOM by reattaching templates in correct position
        switch (id) {
            case 0: // header_left: prepend
                jQuery(header.getDOMNode()).prependTo(self.header_div);
                break;
            case 1: // header_right: before favorites and count
                window.setTimeout(function () {
                    var target = self.header_div.find('div.header_row_right');
                    jQuery(header.getDOMNode()).prependTo(target.length ? target : self.header_div);
                });
                break;
            case 2: // header_row: after search
                window.setTimeout(function () {
                    var target = self.header_div.find('div.search');
                    jQuery(header.getDOMNode()).insertAfter(target.length ? target : self.header_div);
                }, 1);
                break;
            case 3: // header_row2: below everything
                window.setTimeout(function () {
                    jQuery(header.getDOMNode()).insertAfter(self.header_div);
                }, 1);
                break;
        }
        // Wait until all child widgets are loaded, then bind
        header.updateComplete.then(function () {
            self._bindHeaderInput(header);
        });
    };
    /**
     * Build the selectbox filters in the header bar
     * Sets value, options, labels, and change handlers
     *
     * @param {string} name
     * @param {string} type
     * @param {string} value
     * @param {string} lang
     * @param {object} extra
     */
    et2_nextmatch_header_bar.prototype._build_select = function (name, type, value, lang, extra) {
        var _this = this;
        var widget_options = jQuery.extend({
            "id": name,
            "label": this.nextmatch.options.settings[name + "_label"],
            "no_lang": lang,
            "disabled": this.nextmatch.options['no_' + name]
        }, extra);
        // Set select options
        // Check in content for options-<name>
        var mgr = this.nextmatch.getArrayMgr("content");
        var options = false;
        // Sometimes legacy stuff puts it in here
        options = mgr.getEntry('rows[sel_options][' + name + ']');
        // Maybe in a row, and options got stuck in ${row} instead of top level
        var row_stuck = ['${row}', '{$row}'];
        for (var i = 0; !options && i < row_stuck.length; i++) {
            var row_id = '';
            if ((!options || options.length == 0) && (
            // perspectiveData.row in nm, data["${row}"] in an auto-repeat grid
            this.nextmatch.getArrayMgr("sel_options").perspectiveData.row || this.nextmatch.getArrayMgr("sel_options").data[row_stuck[i]])) {
                row_id = name.replace(/[0-9]+/, row_stuck[i]);
                options = this.nextmatch.getArrayMgr("sel_options").getEntry(row_id);
                if (!options) {
                    row_id = row_stuck[i] + "[" + name + "]";
                    options = this.nextmatch.getArrayMgr("sel_options").getEntry(row_id);
                }
            }
            if (options) {
                this.egw().debug('warn', 'Nextmatch filter options in a weird place - "%s".  Should be in sel_options[%s].', row_id, name);
            }
        }
        // Create widget
        var select = Et2Widget_1.loadWebComponent(type, widget_options, this);
        if (options) {
            select.select_options = options;
        }
        if (select.disabled) {
            // Don't just disable, hide completely
            select.classList.add("hideme");
        }
        // Set value
        select.set_value(value);
        // Set activeFilters to current value
        this.nextmatch.activeFilters[select.id] = select.value;
        // Tell framework to ignore, or it will reset it to ''/empty when it does loadingFinished()
        //select.attributes.select_options.ignore = true;
        if (this.nextmatch.options.settings[name + "_onchange"]) {
            // Get the onchange function string
            var onchange_1 = this.nextmatch.options.settings[name + "_onchange"];
            // Real submits cause all sorts of problems
            if (onchange_1.match(/this\.form\.submit/)) {
                this.egw().debug("warn", "%s tries to submit form, which is not allowed.  Filter changes automatically refresh data with no reload.", name);
                onchange_1 = onchange_1.replace(/this\.form\.submit\([^)]*\);?/, 'return true;');
            }
            // Connect it to the onchange event of the input element - may submit
            select.onchange = et2_core_legacyJSFunctions_1.et2_compileLegacyJS(onchange_1, this.nextmatch, select.getInputNode());
            this._bindHeaderInput(select);
        }
        else // default request changed rows with new filters, previous this.form.submit()
         {
            select.addEventListener("change", function () {
                var set = {};
                set[select.id] = select.getValue();
                _this.nextmatch.applyFilters(set);
                select.resetDirty();
            });
        }
        // Sometimes the filter does not display the current value
        // Work-around: Request another update to get it to display
        select.updateComplete.then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, select.updateComplete];
                    case 1:
                        _a.sent();
                        // Legacy: Add in 'All' option for cat_id, if not provided.
                        if (name == 'cat_id' && !['mail'].includes(this.getInstanceManager().app) &&
                            !select.select_options.filter(function (option) { return option.value === ''; }).length) {
                            select.emptyLabel = this.egw().lang('All categories');
                            // requestUpdate because widget is not firing update itself
                            select.requestUpdate("emptyLabel");
                        }
                        select.requestUpdate("value");
                        return [2 /*return*/];
                }
            });
        }); });
        return select;
    };
    /**
     * Set up the favorites UI control
     *
     * @param filters Array|boolean The nextmatch setting for favorites.  Either true, or a list of
     *	additional fields/settings to add in to the favorite.
     */
    et2_nextmatch_header_bar.prototype._setup_favorites = function (filters) {
        if (typeof filters == "undefined" || filters === false) {
            // No favorites configured
            return;
        }
        var widget_options = {
            default_pref: "nextmatch-" + this.nextmatch.options.settings.columnselection_pref + "-favorite",
            app: this.getInstanceManager().app,
            filters: filters,
            sidebox_target: 'favorite_sidebox_' + this.getInstanceManager().app
        };
        this.favorites = et2_core_widget_1.et2_createWidget('favorites', widget_options, this);
        // Add into header
        jQuery(this.favorites.getDOMNode(this.favorites)).prependTo(egw_action_common_1.egwIsMobile() ? this.search_box.find('.nm_favorites_div').show() : this.right_div);
    };
    /**
     * Updates all the filter elements in the header
     *
     * Does not actually refresh the data, just sets values to match those given.
     * Called by et2_nextmatch.applyFilters().
     *
     * @param filters Array Key => Value pairs of current filters
     */
    et2_nextmatch_header_bar.prototype.setFilters = function (filters) {
        // Avoid loops cause by change events
        if (this.update_in_progress)
            return;
        this.update_in_progress = true;
        // Use an array mgr to hande non-simple IDs
        var mgr = new et2_core_arrayMgr_1.et2_arrayMgr(filters);
        this.iterateOver(function (child) {
            // Skip favorites, don't want them in the filter
            if (typeof child.id != "undefined" && child.id.indexOf("favorite") == 0)
                return;
            var value = '';
            if (typeof child.set_value != "undefined" && child.id) {
                value = mgr.getEntry(child.id);
                if (value == null)
                    value = '';
                /**
                 * Sometimes a filter value is not in current options.  This can
                 * happen in a saved favorite, for example, or if server changes
                 * some filter options, and the order doesn't work out.  The normal behaviour
                 * is to warn & not set it, but for nextmatch we'll just add it
                 * in, and let the server either set it properly, or ignore.
                 */
                if (value && typeof value != 'object' && child.instanceOf(et2_widget_selectbox_1.et2_selectbox)) {
                    var found = typeof child.options.select_options[value] != 'undefined';
                    // options is array of objects with attribute value&label
                    if (jQuery.isArray(child.options.select_options)) {
                        for (var o = 0; o < child.options.select_options.length; ++o) {
                            if (child.options.select_options[o].value == value) {
                                found = true;
                                break;
                            }
                        }
                    }
                    if (!found) {
                        var old_options = child.options.select_options;
                        // Actual label is not available, obviously, or it would be there
                        old_options[value] = child.egw().lang("Loading");
                        child.set_select_options(old_options);
                    }
                }
                child.set_value(value);
            }
            if (typeof child.get_value == "function" && child.id) {
                // Put data in the proper place
                var target = this;
                value = child.get_value();
                // Split up indexes
                var indexes = child.id.replace(/&#x5B;/g, '[').split('[');
                for (var i = 0; i < indexes.length; i++) {
                    indexes[i] = indexes[i].replace(/&#x5D;/g, '').replace(']', '');
                    if (i < indexes.length - 1) {
                        if (typeof target[indexes[i]] == "undefined")
                            target[indexes[i]] = {};
                        target = target[indexes[i]];
                    }
                    else {
                        target[indexes[i]] = value;
                    }
                }
            }
        }, filters);
        // Letter search
        if (this.nextmatch.options.settings.lettersearch) {
            jQuery("td", this.lettersearch).removeClass("lettersearch_active");
            jQuery(filters.searchletter ? "td#" + filters.searchletter : "td.lettersearch[id='']", this.lettersearch).addClass("lettersearch_active");
            // Set activeFilters to current value
            filters.searchletter = jQuery("td.lettersearch_active", this.lettersearch).attr("id") || false;
        }
        // Reset flag
        this.update_in_progress = false;
    };
    /**
     * Help out nextmatch / widget stuff by checking to see if sender is part of header
     *
     * @param {et2_widget} _sender
     */
    et2_nextmatch_header_bar.prototype.getDOMNode = function (_sender) {
        var filters = [this.category, this.filter, this.filter2];
        for (var i = 0; i < filters.length; i++) {
            if (_sender == filters[i]) {
                // Give them the filter div
                return this.filter_div[0];
            }
        }
        if (_sender == this.et2_searchbox) {
            return this.search_box[0];
        }
        if (_sender == this.favorites) {
            return egw_action_common_1.egwIsMobile() ? this.search_box.find('.nm_favorites_div').show()[0] : this.right_div[0];
        }
        if (_sender.id == 'export') {
            return this.right_div[0];
        }
        if (_sender && _sender._type == "template") {
            for (var i = 0; i < this.headers.length; i++) {
                if (_sender.id == this.headers[i].id && _sender._parent == this) {
                    return i == 2 ? this.header_row[0] : this.header_div[0];
                }
            }
        }
        return null;
    };
    /**
     * Bind all the inputs in the header sub-templates to update the filters
     * on change, and update current filter with the inputs' current values
     *
     * @param {et2_template} sub_header
     */
    et2_nextmatch_header_bar.prototype._bindHeaderInput = function (_sub_header) {
        var header = this;
        var sub_header = _sub_header;
        var bind_change = function (_widget) {
            var _this = this;
            // Previously set change function
            var widget_change = (window.customElements.get(_widget.localName)) ? _widget.onchange : _widget.change;
            var change = function (_node) {
                // Call previously set change function
                var params = [_node, header.nextmatch, _widget];
                if (widget_change === null || widget_change === void 0 ? void 0 : widget_change.toString().startsWith("function (ev, widget) {\n    // Dump the executed code for debugging")) {
                    // Legacy - do not pass the nextmatch, it will override widget
                    params.splice(1, 1);
                }
                var result = widget_change === null || widget_change === void 0 ? void 0 : widget_change.apply(_widget, params);
                // Find current value in activeFilters
                var entry = header.nextmatch.activeFilters;
                var path = _widget.getArrayMgr('content').explodeKey(_widget.id);
                var i = 0;
                if (path.length > 0) {
                    for (; i < path.length; i++) {
                        entry = entry[path[i]];
                    }
                }
                // Update filters, if we're not already doing so
                if ((result || typeof result === 'undefined') && !header.update_in_progress) {
                    /*
                    //We think the condition is no longer met in any case we care about
                    //It introduced problems when trying to change a NM filter that never had a value set before but getValues() still returns the correct filters
                    // Widget will not have an entry in getValues() because nulls
                    // are not returned, we remove it from activeFilters
                    if(_widget._oldValue == null)
                    {
                        const path = _widget.getArrayMgr('content').explodeKey(_widget.id);
                        if(path.length > 0)
                        {
                            let entry = header.nextmatch.activeFilters;
                            let i = 0;
                            for(; i < path.length - 1; i++)
                            {
                                entry = entry[path[i]];
                            }
                            delete entry[path[i]];
                        }
                        header.nextmatch.applyFilters(header.nextmatch.activeFilters);
                    }
                    else
                    {
                    */
                    // Not null is easy, just get values, the nextmatch could be inside another widget i.e. a grid or a box that's why we use the getPath in combination with getNestedValueByPath
                    var nmpath = __spreadArrays(header.nextmatch.getPath(), [header.nextmatch.id]);
                    var value_1 = this.getInstanceManager().getValues(sub_header);
                    function getNestedValueByPath(obj, path) {
                        return path.reduce(function (acc, part) { return acc && acc[part]; }, obj);
                    }
                    var filters = getNestedValueByPath(value_1, nmpath);
                    header.nextmatch.applyFilters(filters);
                    //}
                }
                // In case this gets bound twice, it's important to return
                return true;
            };
            if (_widget.localName && window.customElements.get(_widget.localName) !== "undefined") {
                // We could use addEventListener(), but callbacks expect these arguments
                // @ts-ignore
                _widget.onchange = function (ev) {
                    return change.call(_this, _widget, _widget);
                };
            }
            else {
                _widget.change = change;
            }
            // Set activeFilters to current value
            // Use an array mgr to hande non-simple IDs
            var value = {};
            value[_widget.id] = _widget._oldValue = _widget.getValue();
            var mgr = new et2_core_arrayMgr_1.et2_arrayMgr(value);
            jQuery.extend(true, this.nextmatch.activeFilters, mgr.data);
        };
        if (sub_header.instanceOf(et2_core_inputWidget_1.et2_inputWidget)) {
            bind_change.call(this, sub_header);
        }
        else {
            sub_header.iterateOver(bind_change, this, et2_core_interfaces_1.et2_IInput);
        }
    };
    et2_nextmatch_header_bar._attributes = {
        "filter_label": {
            "name": "Filter label",
            "type": "string",
            "description": "Label for filter",
            "default": "",
            "translate": true
        },
        "filter_help": {
            "name": "Filter help",
            "type": "string",
            "description": "Help message for filter",
            "default": "",
            "translate": true
        },
        "filter": {
            "name": "Filter value",
            "type": "any",
            "description": "Current value for filter",
            "default": ""
        },
        "no_filter": {
            "name": "No filter",
            "type": "boolean",
            "description": "Remove filter",
            "default": false
        }
    };
    return et2_nextmatch_header_bar;
}(et2_core_DOMWidget_1.et2_DOMWidget));
exports.et2_nextmatch_header_bar = et2_nextmatch_header_bar;
et2_core_widget_1.et2_register_widget(et2_nextmatch_header_bar, ["nextmatch_header_bar"]);
/**
 * Classes for the nextmatch sortheaders etc.
 *
 * @augments et2_baseWidget
 */
var et2_nextmatch_header = /** @class */ (function (_super) {
    __extends(et2_nextmatch_header, _super);
    /**
     * Constructor
     *
     * @memberOf et2_nextmatch_header
     */
    function et2_nextmatch_header(_parent, _attrs, _child) {
        var _this = _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_nextmatch_header._attributes, _child || {})) || this;
        _this.labelNode = jQuery(document.createElement("span"));
        _this.nextmatch = null;
        _this.setDOMNode(_this.labelNode[0]);
        return _this;
    }
    /**
     * Set nextmatch is the function which has to be implemented for the
     * et2_INextmatchHeader interface.
     *
     * @param {et2_nextmatch} _nextmatch
     */
    et2_nextmatch_header.prototype.setNextmatch = function (_nextmatch) {
        this.nextmatch = _nextmatch;
    };
    et2_nextmatch_header.prototype.set_label = function (_value) {
        this.label = _value;
        this.labelNode.text(_value);
        // add class if label is empty
        this.labelNode.toggleClass('et2_label_empty', !_value);
    };
    et2_nextmatch_header._attributes = {
        "label": {
            "name": "Caption",
            "type": "string",
            "description": "Caption for the nextmatch header",
            "translate": true
        }
    };
    return et2_nextmatch_header;
}(et2_core_baseWidget_1.et2_baseWidget));
exports.et2_nextmatch_header = et2_nextmatch_header;
et2_core_widget_1.et2_register_widget(et2_nextmatch_header, ['nextmatch-header']);
/**
 * Extend header to process customfields
 *
 * @augments et2_customfields_list
 *
 * TODO This should extend customfield widget when it's ready, put the whole column in constructor() back too
 */
var et2_nextmatch_customfields = /** @class */ (function (_super) {
    __extends(et2_nextmatch_customfields, _super);
    /**
     * Constructor
     *
     * @memberOf et2_nextmatch_customfields
     */
    function et2_nextmatch_customfields(_parent, _attrs, _child) {
        var _this = _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_nextmatch_customfields._attributes, _child || {})) || this;
        // Specifically take the whole column
        _this.table.css("width", "100%");
        return _this;
    }
    et2_nextmatch_customfields.prototype.destroy = function () {
        this.nextmatch = null;
        _super.prototype.destroy.call(this);
    };
    et2_nextmatch_customfields.prototype.transformAttributes = function (_attrs) {
        _super.prototype.transformAttributes.call(this, _attrs);
        // Add in settings that are objects
        if (!_attrs.customfields) {
            // Check for custom stuff (unlikely)
            var data = this.getArrayMgr("modifications").getEntry(this.id);
            // Check for global settings
            if (!data)
                data = this.getArrayMgr("modifications").getRoot().getEntry('~custom_fields~', true);
            for (var key in data) {
                if (typeof data[key] === 'object' && !_attrs[key])
                    _attrs[key] = data[key];
            }
        }
    };
    et2_nextmatch_customfields.prototype.setNextmatch = function (_nextmatch) {
        this.nextmatch = _nextmatch;
        this.loadFields();
    };
    /**
     * Build widgets for header - sortable for numeric, text, etc., filterables for selectbox, radio
     */
    et2_nextmatch_customfields.prototype.loadFields = function () {
        if (this.nextmatch == null) {
            // not ready yet
            return;
        }
        var columnMgr = this.nextmatch.dataview.getColumnMgr();
        var nm_column = null;
        var set_fields = {};
        for (var i = 0; i < this.nextmatch.columns.length; i++) {
            // @ts-ignore
            if (this.nextmatch.columns[i].widget == this) {
                nm_column = columnMgr.columns[i];
                break;
            }
        }
        if (!nm_column)
            return;
        // Check for global setting changes (visibility)
        var global_data = this.getArrayMgr("modifications").getRoot().getEntry('~custom_fields~');
        if (global_data != null && global_data.fields)
            this.options.fields = global_data.fields;
        var apps = egw_global_1.egw.link_app_list();
        for (var field_name in this.options.customfields) {
            var field = this.options.customfields[field_name];
            var cf_id = et2_extension_customfields_1.et2_customfields_list.PREFIX + field_name;
            if (this.rows[field_name])
                continue;
            // Table row
            var row = jQuery(document.createElement("tr"))
                .appendTo(this.tbody);
            var cf = jQuery(document.createElement("td"))
                .appendTo(row);
            this.rows[cf_id] = cf[0];
            // Create widget by type
            var widget = null;
            if (field.type == 'select' || field.type == 'select-account') {
                // Remove empty label
                if (field.values && field.values.findIndex && field.values.findIndex(function (i) { return i.value == ''; }) !== -1) {
                    field.values.splice(field.values.findIndex(function (i) { return i.value == ''; }), 1);
                }
                var attrs = {
                    id: cf_id,
                    emptyLabel: field.label
                };
                if (field.values && field.values["@"]) {
                    attrs.searchUrl = field.values["@"];
                }
                widget = Et2Widget_1.loadWebComponent(field.type == 'select-account' ? 'et2-nextmatch-header-account' : "et2-nextmatch-header-filter", attrs, this);
            }
            else if (apps[field.type]) {
                widget = Et2Widget_1.loadWebComponent("et2-nextmatch-header-entry", {
                    id: cf_id,
                    onlyApp: field.type,
                    placeholder: field.label
                }, this);
            }
            else {
                widget = et2_core_widget_1.et2_createWidget("nextmatch-sortheader", {
                    id: cf_id,
                    label: field.label
                }, this);
            }
            // If this is already attached, widget needs to be finished explicitly
            if (this.isAttached() && typeof widget.isAttached == "function" && !widget.isAttached()) {
                widget.loadingFinished();
            }
            // Check for column filter
            if (!jQuery.isEmptyObject(this.options.fields) && (this.options.fields[field_name] == false || typeof this.options.fields[field_name] == 'undefined')) {
                cf.hide();
            }
            else if (jQuery.isEmptyObject(this.options.fields)) {
                // If we're showing it make sure it's set, but only after
                set_fields[field_name] = true;
            }
        }
        jQuery.extend(this.options.fields, set_fields);
    };
    /**
     * Override parent so we can update the nextmatch row too
     *
     * @param {array} _fields
     */
    et2_nextmatch_customfields.prototype.set_visible = function (_fields) {
        _super.prototype.set_visible.call(this, _fields);
        // Find data row, and do it too
        var self = this;
        if (this.nextmatch) {
            this.nextmatch.iterateOver(function (widget) {
                if (widget == self)
                    return;
                widget.set_visible(_fields);
            }, this, et2_extension_customfields_1.et2_customfields_list);
        }
    };
    /**
     * Provide own column caption (column selection)
     *
     * If only one custom field, just use that, otherwise use "custom fields"
     */
    et2_nextmatch_customfields.prototype._genColumnCaption = function () {
        return egw_global_1.egw.lang("Custom fields");
    };
    /**
     * Provide own column naming, including only selected columns - only useful
     * to nextmatch itself, not for sending server-side
     */
    et2_nextmatch_customfields.prototype._getColumnName = function () {
        var name = this.id;
        var visible = [];
        for (var field_name in this.options.customfields) {
            if (jQuery.isEmptyObject(this.options.fields) || this.options.fields[field_name] == true) {
                visible.push(et2_extension_customfields_1.et2_customfields_list.PREFIX + field_name);
                jQuery(this.rows[field_name]).show();
            }
            else if (typeof this.rows[field_name] != "undefined") {
                jQuery(this.rows[field_name]).hide();
            }
        }
        if (visible.length) {
            name += "_" + visible.join("_");
        }
        else if (this.rows) {
            // None hidden means all visible
            jQuery(this.rows[field_name]).parent().parent().children().show();
        }
        // Update global custom fields column(s) - widgets will check on their own
        // Check for custom stuff (unlikely)
        var data = this.getArrayMgr("modifications").getEntry(this.id);
        // Check for global settings
        if (!data)
            data = this.getArrayMgr("modifications").getRoot().getEntry('~custom_fields~', true) || {};
        if (!data.fields)
            data.fields = {};
        for (var field in this.options.customfields) {
            data.fields[field] = (this.options.fields == null || typeof this.options.fields[field] == 'undefined' ? false : this.options.fields[field]);
        }
        return name;
    };
    et2_nextmatch_customfields._attributes = {
        'customfields': {
            'name': 'Custom fields',
            'description': 'Auto filled'
        },
        'fields': {
            'name': "Visible fields",
            "description": "Auto filled"
        }
    };
    return et2_nextmatch_customfields;
}(et2_extension_customfields_1.et2_customfields_list));
exports.et2_nextmatch_customfields = et2_nextmatch_customfields;
et2_core_widget_1.et2_register_widget(et2_nextmatch_customfields, ['nextmatch-customfields']);
/**
 * @augments et2_nextmatch_header
 */
// @ts-ignore
var et2_nextmatch_sortheader = /** @class */ (function (_super) {
    __extends(et2_nextmatch_sortheader, _super);
    /**
     * Constructor
     *
     * @memberOf et2_nextmatch_sortheader
     */
    function et2_nextmatch_sortheader(_parent, _attrs, _child) {
        var _this = _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_nextmatch_sortheader._attributes, _child || {})) || this;
        _this.node.removeEventListener("click", _this.click);
        _this.click = _this.click.bind(_this);
        _this.node.addEventListener("click", _this.click);
        _this.sortmode = "none";
        _this.labelNode.addClass("nextmatch_sortheader none");
        return _this;
    }
    et2_nextmatch_sortheader.prototype.click = function (_event) {
        if (this.nextmatch && _super.prototype.click.call(this, _event)) {
            // Send default sort mode if not sorted, otherwise send undefined to calculate
            this.nextmatch.sortBy(this.id, this.sortmode == "none" ? !(this.options.sortmode.toUpperCase() == "DESC") : undefined);
            // Update sort preference
            this.egw().set_preference(this.nextmatch._get_appname(), this.nextmatch.options.template + "_sort", this.nextmatch.activeFilters["sort"]);
            return true;
        }
        return false;
    };
    /**
     * Wrapper to join up interface * framework
     *
     * @param {string} _mode
     */
    et2_nextmatch_sortheader.prototype.set_sortmode = function (_mode) {
        // Set via nextmatch after setup
        if (this.nextmatch)
            return;
        this.setSortmode(_mode);
    };
    /**
     * Function which implements the et2_INextmatchSortable function.
     *
     * @param {string} _mode
     */
    et2_nextmatch_sortheader.prototype.setSortmode = function (_mode) {
        // Remove the last sortmode class and add the new one
        this.labelNode.removeClass(this.sortmode)
            .addClass(_mode);
        this.sortmode = _mode;
    };
    et2_nextmatch_sortheader._attributes = {
        "sortmode": {
            "name": "Sort order",
            "type": "string",
            "description": "Default sort order",
            "translate": false
        }
    };
    return et2_nextmatch_sortheader;
}(et2_nextmatch_header));
exports.et2_nextmatch_sortheader = et2_nextmatch_sortheader;
et2_core_widget_1.et2_register_widget(et2_nextmatch_sortheader, ['nextmatch-sortheader']);
