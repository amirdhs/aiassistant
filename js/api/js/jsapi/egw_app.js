"use strict";
/**
 * EGroupware clientside Application javascript base object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Ralf Becker <rb@egroupware.org>
 * @author Hadi Nategh <hn@groupware.org>
 * @author Nathan Gray <ng@groupware.org>
 */
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
exports.EgwApp = void 0;
var etemplate2_1 = require("../etemplate/etemplate2");
var et2_extension_nextmatch_1 = require("../etemplate/et2_extension_nextmatch");
var et2_core_widget_1 = require("../etemplate/et2_core_widget");
var sortable_complete_esm_js_1 = require("sortablejs/modular/sortable.complete.esm.js");
var et2_extension_nextmatch_actions_1 = require("../etemplate/et2_extension_nextmatch_actions");
var Et2Dialog_1 = require("../etemplate/Et2Dialog/Et2Dialog");
var Et2Favorites_1 = require("../etemplate/Et2Favorites/Et2Favorites");
var Et2Widget_1 = require("../etemplate/Et2Widget/Et2Widget");
var egw_action_1 = require("../egw_action/egw_action");
/**
 * Common base class for application javascript
 * Each app should extend as needed.
 *
 * All application javascript should be inside.  Intitialization goes in init(),
 * clean-up code goes in destroy().  Initialization is done once all js is loaded.
 *
 * var app.appname = AppJS.extend({
 *	// Actually set this one, the rest is example
 *	appname: appname,
 *
 *	internal_var: 1000,
 *
 *	init: function()
 *	{
 *		// Call the super
 *		this._super.apply(this, arguments);
 *
 *		// Init the stuff
 *		if ( egw.preference('dateformat', 'common') )
 *		{
 *			// etc
 *		}
 *	},
 *	_private: function()
 *	{
 *		// Underscore private by convention
 *	}
 * });
 */
var EgwApp = /** @class */ (function () {
    /**
     * Initialization and setup goes here, but the etemplate2 object
     * is not yet ready.
     */
    function EgwApp(appname, _wnd) {
        /**
         * PGP begin and end tags
         */
        this.begin_pgp_message = '-----BEGIN PGP MESSAGE-----';
        this.end_pgp_message = '-----END PGP MESSAGE-----';
        /**
         * Mailvelope "egroupware" Keyring
         */
        this.mailvelope_keyring = undefined;
        /**
         * jQuery selector for Mailvelope iframes in all browsers
         */
        this.mailvelope_iframe_selector = 'iframe[src^="chrome-extension"],iframe[src^="about:blank?mvelo"]';
        this.appname = appname;
        this.egw = egw(this.appname, _wnd || window);
        // Initialize sidebox for non-popups.
        // ID set server side
        if (!this.egw.is_popup()) {
            var sidebox = jQuery('#favorite_sidebox_' + this.appname);
            if (sidebox.length == 0 && egw_getFramework() != null) {
                var egw_fw = egw_getFramework();
                sidebox = jQuery('#favorite_sidebox_' + this.appname, egw_fw.sidemenuDiv);
            }
            // Make sure we're running in the top window when we init sidebox
            //@ts-ignore
            if (window.app[this.appname] === this && egw.top.app[this.appname] !== this && egw.top.app[this.appname]) {
                //@ts-ignore
                egw.top.app[this.appname]._init_sidebox(sidebox);
            }
            else {
                this._init_sidebox(sidebox);
            }
        }
        this.mailvelopeSyncHandlerObj = this.mailvelopeSyncHandler();
        // Keep track of this instance
        EgwApp._register_instance(this);
    }
    /**
     * Clean up any created objects & references
     * @param {object} _app local app object
     */
    EgwApp.prototype.destroy = function (_app) {
        var _a, _b;
        delete this.et2;
        if (this.sidebox) {
            this.sidebox.off();
            (_b = sortable_complete_esm_js_1.default.get((_a = document.getElementById('favorite_sidebox_' + this.appname)) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('ul')[0])) === null || _b === void 0 ? void 0 : _b.destroy();
        }
        delete this.sidebox;
        if (!_app)
            delete app[this.appname];
        var index = -1;
        if ((index = EgwApp._instances.indexOf(this)) >= 0) {
            EgwApp._instances.splice(index, 1);
        }
    };
    /**
     * This function is called when the etemplate2 object is loaded
     * and ready.  If you must store a reference to the et2 object,
     * make sure to clean it up in destroy().  Note that this can be called
     * several times, with different et2 objects, as templates are loaded.
     *
     * @param {etemplate2} et2
     * @param {string} name template name
     */
    EgwApp.prototype.et2_ready = function (et2, name) {
        if (this.et2 !== null) {
            egw.debug('log', "Changed et2 object");
        }
        this.et2 = et2.widgetContainer;
        this._fix_iFrameScrolling();
        if (this.egw && this.egw.is_popup()) {
            this._set_Window_title();
        }
        // Highlights the favorite based on initial list state
        this.highlight_favorite();
    };
    /**
     * Observer method receives update notifications from all applications
     *
     * App is responsible for only reacting to "messages" it is interested in!
     *
     * @param {string} _msg message (already translated) to show, eg. 'Entry deleted'
     * @param {string} _app application name
     * @param {(string|number)} _id id of entry to refresh or null
     * @param {string} _type either 'update', 'edit', 'delete', 'add' or null
     * - update: request just modified data from given rows.  Sorting is not considered,
     *		so if the sort field is changed, the row will not be moved.
     * - edit: rows changed, but sorting may be affected.  Requires full reload.
     * - delete: just delete the given rows clientside (no server interaction neccessary)
     * - add: requires full reload for proper sorting
     * @param {string} _msg_type 'error', 'warning' or 'success' (default)
     * @param {object|null} _links app => array of ids of linked entries
     * or null, if not triggered on server-side, which adds that info
     * @return {false|*} false to stop regular refresh, thought all observers are run
     */
    EgwApp.prototype.observer = function (_msg, _app, _id, _type, _msg_type, _links) {
    };
    /**
     * Handle a push notification about entry changes from the websocket
     *
     * Gets called for data of all apps, but should only handle data of apps it displays,
     * which is by default only its own, but can be for multiple apps eg. for calendar.
     *
     * @param  pushData
     * @param {string} pushData.app application name
     * @param {(string|number)} pushData.id id of entry to refresh or null
     * @param {string} pushData.type either 'update', 'edit', 'delete', 'add' or null
     * - update: request just modified data from given rows.  Sorting is not considered,
     *		so if the sort field is changed, the row will not be moved.
     * - edit: rows changed, but sorting may be affected.  Requires full reload.
     * - delete: just delete the given rows clientside (no server interaction neccessary)
     * - add: requires full reload for proper sorting
     * @param {object|null} pushData.acl Extra data for determining relevance.  eg: owner or responsible to decide if update is necessary
     * @param {number} pushData.account_id User that caused the notification
     */
    EgwApp.prototype.push = function (pushData) {
        var _a;
        // don't care about other apps data, reimplement if your app does care eg. calendar
        if (pushData.app !== this.appname) {
            return;
        }
        // handle delete, for simple case of uid === "$app::$id"
        if (pushData.type === 'delete' && egw.dataHasUID(this.uid(pushData))) {
            egw.refresh('', pushData.app, pushData.id, 'delete');
            return;
        }
        // If we know about it and it's an update, just update.
        // This must be before all ACL checks, as responsible might have changed and entry need to be removed
        // (server responds then with null / no entry causing the entry to disappear)
        if (pushData.type !== "add" && this.egw.dataHasUID(this.uid(pushData)) && this.et2) {
            return this.et2.getInstanceManager().refresh("", pushData.app, pushData.id, pushData.type);
        }
        // Check grants to see if we know we aren't supposed to show it
        if (typeof this.push_grant_fields !== "undefined" && this.push_grant_fields.length > 0
            && !this._push_grant_check(pushData, this.push_grant_fields)) {
            return;
        }
        // Nextmatch does the hard part of updating.  Try to find one.
        var nm = (_a = this.et2) === null || _a === void 0 ? void 0 : _a.getDOMWidgetById('nm');
        if (!nm) {
            return;
        }
        // Filter what's allowed down to those we can see / care about based on nm filters
        if (typeof this.push_filter_fields !== "undefined" && this.push_filter_fields.length > 0 &&
            !this._push_field_filter(pushData, nm, this.push_filter_fields)) {
            return;
        }
        // Pass actual refresh on to just nextmatch
        nm.refresh(pushData.id, pushData.type);
    };
    /**
     * Check grants to see if we can quickly tell if this entry is not for us
     *
     * Override this method if the app has non-standard access control.
     *
     * @param pushData
     * @param grant_fields List of fields in pushData.acl with account IDs that might grant access eg: info_responsible
     * @param appname Optional, to check against the grants for a different application.  Defaults to this.appname.
     *
     * @return boolean Entry has ACL access
     */
    EgwApp.prototype._push_grant_check = function (pushData, grant_fields, appname) {
        var grants = egw.grants(appname || this.appname);
        // No grants known
        if (!grants) {
            return true;
        }
        var _loop_1 = function (i) {
            var grant_field = pushData.acl[grant_fields[i]];
            if (["number", "string"].indexOf(typeof grant_field) >= 0 && grants[grant_field] !== 'undefined') {
                return { value: true };
            }
            else if (!Object.keys(grants).filter(function (grant_account) {
                return grant_field.indexOf(grant_account) >= 0 ||
                    grant_field.indexOf(parseInt(grant_account)).length;
            })) {
                return { value: false };
            }
        };
        // check user has a grant from owner or something
        for (var i = 0; i < grant_fields.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
    };
    /**
     * Check pushData.acl values against a list of fields to see if we care about this entry based on current nextmatch
     * filter values.  This is not a definitive yes or no (the server will tell us when we ask), we just want to cheaply
     * avoid a server call if we know it won't be in the list.
     *
     * @param pushData
     * @param filter_fields List of filter field names eg: [owner, cat_id]
     * @return boolean True if the nextmatch filters might include the entry, false if not
     */
    EgwApp.prototype._push_field_filter = function (pushData, nm, filter_fields) {
        var filters = {};
        for (var i = 0; i < filter_fields.length; i++) {
            filters[filter_fields[i]] = {
                col: filter_fields[i],
                filter_values: []
            };
        }
        // Get current filter values
        var value = nm.getValue();
        if (!value || !value.col_filter)
            return false;
        for (var _i = 0, _a = Object.values(filters); _i < _a.length; _i++) {
            var field_filter = _a[_i];
            var val = value.col_filter[field_filter.col];
            if (val && (typeof val == "string" && val.trim().length > 0)) {
                field_filter.filter_values.push(val);
            }
            else if (val && typeof val == "object" && !jQuery.isEmptyObject(val)) {
                field_filter.filter_values = field_filter.filter_values.concat(Object.values(val));
            }
        }
        var _loop_2 = function (field_filter) {
            // no filter set
            if (field_filter.filter_values.length == 0)
                return "continue";
            // acl value is a scalar (not array) --> check contained in filter
            if (pushData.acl && typeof pushData.acl[field_filter.col] !== 'object') {
                if (field_filter.filter_values.indexOf(pushData.acl[field_filter.col]) < 0) {
                    return { value: false };
                }
                return "continue";
            }
            // acl value is an array (eg. tr_assigned) --> check intersection with filter
            if (!field_filter.filter_values.filter(function (account) { return pushData.acl[field_filter.col].indexOf(account) >= 0; }).length) {
                return { value: false };
            }
        };
        // check filters against pushData.acl data
        for (var _b = 0, _c = Object.values(filters); _b < _c.length; _b++) {
            var field_filter = _c[_b];
            var state_2 = _loop_2(field_filter);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return true;
    };
    /**
     * Get (possible) app-specific uid
     *
     * @param {object} pushData see push method for individual attributes
     */
    EgwApp.prototype.uid = function (pushData) {
        return pushData.app + '::' + pushData.id;
    };
    /**
     * Open an entry.
     *
     * Designed to be used with the action system as a callback
     * eg: onExecute => app.<appname>.open
     *
     * @param _action
     * @param _senders
     */
    EgwApp.prototype.open = function (_action, _senders) {
        var id_app = _senders[0].id.split('::');
        egw.open(id_app[1], this.appname);
    };
    EgwApp.prototype._do_action = function (action_id, selected) {
    };
    /**
     * A generic method to action to server asynchronously
     *
     * Designed to be used with the action system as a callback.
     * In the PHP side, set the action
     * 'onExecute' => 'javaScript:app.<appname>.action', and
     * implement _do_action(action_id, selected)
     *
     * @param {egwAction} _action
     * @param {egwActionObject[]} _elems
     */
    EgwApp.prototype.action = function (_action, _elems) {
        // let user confirm select-all
        var select_all = _action.getManager().getActionById("select_all");
        var confirm_msg = (_elems.length > 1 || select_all && select_all.checked) &&
            typeof _action.data.confirm_multiple != 'undefined' ?
            _action.data.confirm_multiple : _action.data.confirm;
        if (typeof confirm_msg != 'undefined') {
            var that = this;
            var action_id = _action.id;
            Et2Dialog_1.Et2Dialog.show_dialog(function (button_id, value) {
                if (button_id != Et2Dialog_1.Et2Dialog.NO_BUTTON) {
                    that._do_action(action_id, _elems);
                }
            }, confirm_msg, 'Confirmation required', null, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO, Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE);
        }
        else if (typeof this._do_action == 'function') {
            this._do_action(_action.id, _elems);
        }
        else {
            // If this is a nextmatch action, do an ajax submit setting the action
            var nm = null;
            var action = _action;
            while (nm == null && action.parent != null) {
                if (action.data.nextmatch)
                    nm = action.data.nextmatch;
                action = action.parent;
            }
            if (nm != null) {
                var value = {};
                value[nm.options.settings.action_var] = _action.id;
                nm.set_value(value);
                nm.getInstanceManager().submit();
            }
        }
    };
    /**
     * Set the application's state to the given state.
     *
     * While not pretending to implement the history API, it is patterned similarly
     * @link http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html
     *
     * The default implementation works with the favorites to apply filters to a nextmatch.
     *
     *
     * @param {{name: string, state: object}|string} state Object (or JSON string) for a state.
     *	Only state is required, and its contents are application specific.
     * @param {string} template template name to check, instead of trying all templates of current app
     * @return {boolean} false - Returns false to stop event propagation
     */
    EgwApp.prototype.setState = function (state, template) {
        var _a;
        // State should be an object, not a string, but we'll parse
        if (typeof state == "string") {
            if (state.indexOf('{') != -1 || state == 'null') {
                state = JSON.parse(state);
            }
        }
        if (typeof state != "object") {
            egw.debug('error', 'Unable to set state to %o, needs to be an object', state);
            return;
        }
        if (state == null) {
            state = {};
        }
        // Check for egw.open() parameters
        if (state.state && state.state.id && state.state.app) {
            return egw.open(state.state, undefined, undefined, {}, '_self');
        }
        // Try and find a nextmatch widget, and set its filters
        var nextmatched = false;
        var et2 = template ? etemplate2_1.etemplate2.getByTemplate(template) : etemplate2_1.etemplate2.getByApplication(this.appname);
        for (var i = 0; i < et2.length; i++) {
            et2[i].widgetContainer.iterateOver(function (_widget) {
                // Firefox has trouble with spaces in search
                if (state.state && state.state.search)
                    state.state.search = unescape(state.state.search);
                // Apply
                if (state.state && state.state.sort && state.state.sort.id) {
                    _widget.sortBy(state.state.sort.id, state.state.sort.asc, false);
                }
                else {
                    // Not using resetSort() to avoid the extra applyFilters() call
                    _widget.sortBy(undefined, undefined, false);
                }
                _widget.applyFilters(state.state || state.filter || {});
                if (state.state && state.state.selectcols) {
                    // Make sure it's a real array, not an object, then set cols
                    _widget.set_columns(jQuery.extend([], state.state.selectcols));
                }
                nextmatched = true;
            }, this, et2_extension_nextmatch_1.et2_nextmatch);
            if (nextmatched)
                return false;
        }
        // 'blank' is the special name for no filters, send that instead of the nice translated name
        var safe_name = jQuery.isEmptyObject(state) || jQuery.isEmptyObject(state.state || state.filter) ? 'blank' : state.name.replace(/[^A-Za-z0-9-_]/g, '_');
        var url = '/' + this.appname + '/index.php';
        // Try a redirect to list, if app defines a "list" value in registry
        if (egw.link_get_registry(this.appname, 'list')) {
            url = egw.link('/index.php', jQuery.extend({ 'favorite': safe_name }, egw.link_get_registry(this.appname, 'list')));
        }
        // if no list try index value from application
        else if ((_a = egw.app(this.appname)) === null || _a === void 0 ? void 0 : _a.index) {
            url = egw.link('/index.php', 'menuaction=' + egw.app(this.appname).index + '&favorite=' + safe_name);
        }
        egw.open_link(url, undefined, undefined, this.appname);
        return false;
    };
    /**
     * Retrieve the current state of the application for future restoration
     *
     * The state can be anything, as long as it's an object.  The contents are
     * application specific.  The default implementation finds a nextmatch and
     * returns its value.
     * The return value of this function cannot be passed directly to setState(),
     * since setState is expecting an additional wrapper, eg:
     * {name: 'something', state: getState()}
     *
     * @return {object} Application specific map representing the current state
     */
    EgwApp.prototype.getState = function () {
        var state = {};
        // Try and find a nextmatch widget, and set its filters
        var et2 = etemplate2_1.etemplate2.getByApplication(this.appname);
        for (var i = 0; i < et2.length; i++) {
            et2[i].widgetContainer.iterateOver(function (_widget) {
                state = _widget.getValue();
            }, this, et2_extension_nextmatch_1.et2_nextmatch);
        }
        return state;
    };
    /**
     * Function to load selected row from nm into a template view
     *
     * @param {object} _action
     * @param {object} _senders
     * @param {boolean} _noEdit defines whether to set edit button or not default is false
     * @param {function} et2_callback function to run after et2 is loaded
     */
    EgwApp.prototype.viewEntry = function (_action, _senders, _noEdit, et2_callback) {
        //full id in nm
        var id = _senders[0].id;
        // flag for edit button
        var noEdit = _noEdit || false;
        // nm row id
        var rowID = '';
        // content to feed to etemplate2
        var content = {};
        var self = this;
        if (id) {
            var parts = id.split('::');
            rowID = parts[1];
            content = egw.dataGetUIDdata(id);
            if (content.data)
                content = content.data;
        }
        // create a new app object with just constructors for our new etemplate2 object
        var app = { classes: window.app.classes };
        /* destroy generated etemplate for view mode in DOM*/
        var destroy = function () {
            self.viewContainer.remove();
            delete self.viewTemplate;
            delete self.viewContainer;
            delete self.et2_view;
            // we need to reference back into parent context this
            for (var v in self) {
                this[v] = self[v];
            }
            app = null;
        };
        // view container
        this.viewContainer = jQuery(document.createElement('div'))
            .addClass('et2_mobile_view')
            .css({
            "z-index": 102,
            width: "100%",
            height: "100%",
            background: "white",
            display: 'block',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            overflow: 'auto'
        })
            .attr('id', 'popupMainDiv')
            .appendTo('body');
        // close button
        var close = jQuery(document.createElement('span'))
            .addClass('egw_fw_mobile_popup_close loaded')
            .click(function () {
            destroy.call(app[self.appname]);
            //disable selected actions after close
            egw_action_1.egw_globalObjectManager.setAllSelected(false);
        })
            .appendTo(this.viewContainer);
        if (!noEdit) {
            // edit button
            var edit = jQuery(document.createElement('span'))
                .addClass('mobile-view-editBtn')
                .click(function () {
                egw.open(rowID, self.appname);
            })
                .appendTo(this.viewContainer);
        }
        // view template main container (content)
        this.viewTemplate = jQuery(document.createElement('div'))
            .attr('id', this.appname + '-view')
            .addClass('et2_mobile-view-container popupMainDiv')
            .appendTo(this.viewContainer);
        var mobileViewTemplate = (_action.data.mobileViewTemplate || 'edit').split('?');
        var templateName = mobileViewTemplate[0];
        var templateTimestamp = mobileViewTemplate[1];
        var templateURL = egw.webserverUrl + '/' + this.appname + '/templates/mobile/' + templateName + '.xet' + '?' + templateTimestamp;
        var data = {
            'content': content,
            'readonlys': { '__ALL__': true, 'link_to': false },
            'currentapp': this.appname,
            'langRequire': this.et2.getArrayMgr('langRequire').data,
            'sel_options': this.et2.getArrayMgr('sel_options').data,
            'modifications': this.et2.getArrayMgr('modifications').data,
            'validation_errors': this.et2.getArrayMgr('validation_errors').data
        };
        // etemplate2 object for view
        this.et2_view = new etemplate2_1.etemplate2(this.viewTemplate[0], '');
        framework.pushState('view');
        if (templateName) {
            this.et2_view.load(this.appname + '.' + templateName, templateURL, data, typeof et2_callback == 'function' ? et2_callback : function () { }, app);
        }
        // define a global close function for view template
        // in order to be able to destroy view on action
        this.et2_view.close = destroy;
    };
    /**
     * Opens _menuaction in an Et2Dialog
     *
     * Equivalent to egw.openDialog, though this one works in popups too.
     *
     * @param _menuaction
     * @return Promise<Et2Dialog>
     */
    EgwApp.prototype.openDialog = function (_menuaction) {
        var resolver;
        var rejector;
        var dialog_promise = new Promise(function (resolve, reject) {
            resolver = function (value) { return resolve(value); };
            rejector = function (reason) { return reject(reason); };
        });
        var request = this.egw.json(_menuaction.match(/^([^.:]+)/)[0] + '.jdots_framework.ajax_exec.template.' + _menuaction, ['index.php?menuaction=' + _menuaction, true], function (_response) {
            if (Array.isArray(_response) && typeof _response[0] === 'string') {
                var dialog = jQuery(_response[0]).appendTo(document.body);
                if (dialog.length > 0 && dialog.get(0)) {
                    resolver(dialog.get(0));
                }
                else {
                    console.log("Unable to add dialog with dialogExec('" + _menuaction + "')", _response);
                    rejector(new Error("Unable to add dialog"));
                }
            }
            else {
                console.log("Invalid response to dialogExec('" + _menuaction + "')", _response);
                rejector(new Error("Invalid response to dialogExec('" + _menuaction + "')"));
            }
        }).sendRequest();
        return dialog_promise;
    };
    /**
     * Merge selected entries into template document
     *
     * @param {egwAction} _action
     * @param {egwActionObject[]} _selected
     */
    EgwApp.prototype.mergeAction = function (_action, _selected) {
        return __awaiter(this, void 0, void 0, function () {
            var nm, action, as_pdf, all, ids, i, split, document, vars, mergedFiles, email, idGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nm = null;
                        action = _action;
                        as_pdf = null;
                        // Find Select all
                        while (nm == null && action.parent != null) {
                            if (action.data != null && action.data.nextmatch) {
                                nm = action.data.nextmatch;
                            }
                            action = action.parent;
                        }
                        all = (nm === null || nm === void 0 ? void 0 : nm.getSelection().all) || false;
                        ids = [];
                        for (i = 0; !all && i < _selected.length; i++) {
                            split = _selected[i].id.split("::");
                            ids.push(split[1]);
                        }
                        return [4 /*yield*/, this._getMergeDocument(nm === null || nm === void 0 ? void 0 : nm.getInstanceManager(), _action, _selected)];
                    case 1:
                        document = _a.sent();
                        if (!document.documents || document.documents.length == 0) {
                            return [2 /*return*/];
                        }
                        vars = __assign(__assign({}, _action.data.merge_data), { options: document.options, select_all: all, id: ids });
                        if (document.options.link) {
                            vars.options.app = this.appname;
                        }
                        // Just one file, an email - merge & edit or merge & send
                        if (document.documents.length == 1 && document.documents[0].mime == "message/rfc822") {
                            vars.document = document.documents[0].path;
                            // Remove not applicable options
                            ['pdf', 'download'].forEach(function (k) { return delete vars.options[k]; });
                            return [2 /*return*/, this._mergeEmail(_action.clone(), vars)];
                        }
                        else {
                            vars.document = document.documents.map(function (f) { return f.path; });
                        }
                        if (!(document.documents.length == 1 && !document.options.individual && !document.options.download)) return [3 /*break*/, 2];
                        // Only 1 document, we can open it
                        vars.id = JSON.stringify(ids);
                        this.egw.open_link(this.egw.link('/index.php', vars), '_blank');
                        return [3 /*break*/, 6];
                    case 2:
                        // Multiple files, or merging individually - will result in multiple documents that we can't just open
                        vars.menuaction = vars.menuaction.replace("merge_entries", "ajax_merge_multiple");
                        vars.menuaction += "&merge=" + vars.merge;
                        mergedFiles = [];
                        email = document.documents.find(function (f) { return f.mime == "message/rfc822"; });
                        if (!(!vars.options.individual && (!email || email && !all && ids.length == 1))) return [3 /*break*/, 4];
                        vars.options.open_email = !vars.options.download && typeof email != "undefined";
                        // Handle it all on the server in one request
                        this.egw.loading_prompt(vars.menuaction, true);
                        return [4 /*yield*/, this.egw.request(vars.menuaction, [vars.id, vars.document, vars.options])];
                    case 3:
                        mergedFiles = _a.sent();
                        this.egw.loading_prompt(vars.menuaction, false);
                        // One entry, email template selected - we can open that in the compose window
                        if (email) {
                            debugger;
                        }
                        else {
                            this.egw.message(mergedFiles, "success");
                        }
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, new Promise(function (resolve) {
                            if (all) {
                                et2_extension_nextmatch_actions_1.fetchAll(ids, nm, function (idsArr) { return resolve(vars.options.individual ? idsArr : [idsArr]); });
                            }
                            else {
                                resolve(vars.options.individual ? ids : [ids]);
                            }
                        })];
                    case 5:
                        idGroup = _a.sent();
                        Et2Dialog_1.Et2Dialog.long_task(null /*done*/, this.egw.lang("Merging"), email ? this.egw.lang("Merging into %1 and sending", email.path) : this.egw.lang("Merging into %1", vars.document.join(", ")), vars.menuaction, idGroup.map(function (ids) { return [Array.isArray(ids) ? ids : [ids], vars.document, vars.options]; }), this.egw);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Ask the user for a target document to merge into
     *
     * @returns {Promise<{document : string, pdf : boolean, mime : string}>}
     * @protected
     */
    EgwApp.prototype._getMergeDocument = function (et2, action, selected) {
        var _a, _b, _c, _d, _e;
        // Check path from action and user's preferred path
        var path = (_c = (_b = (_a = action === null || action === void 0 ? void 0 : action.data) === null || _a === void 0 ? void 0 : _a.merge_data) === null || _b === void 0 ? void 0 : _b.directory) !== null && _c !== void 0 ? _c : "";
        var dirPref = (_d = this.egw.preference('document_dir', this.appname)) !== null && _d !== void 0 ? _d : "";
        var dirs = dirPref.split('/[,\s]+\//');
        dirs.forEach(function (d, index) {
            if (index) {
                d = "/" + d;
            }
        });
        dirs.push(path);
        dirs = dirs.filter(function (d, index, array) { return (d && array.indexOf(d) === index); });
        var fileSelect = Et2Widget_1.loadWebComponent('et2-merge-dialog', {
            application: this.appname,
            path: dirs.pop() || ""
        }, (_e = et2 === null || et2 === void 0 ? void 0 : et2.widgetContainer) !== null && _e !== void 0 ? _e : null);
        if (!et2) {
            document.body.append(fileSelect);
        }
        // Customize dialog
        fileSelect.updateComplete.then(function () {
            // Start details open when you have multiple selected
            // @ts-ignore
            fileSelect.shadowRoot.querySelector('et2-details').open = selected.length > 1;
            // Disable individual when only one entry is selected
            // @ts-ignore
            fileSelect.shadowRoot.querySelector("et2-details > [id='individual']").disabled = selected.length == 1;
        });
        // Remove when done
        fileSelect.getComplete().then(function () { fileSelect.remove(); });
        return fileSelect.getComplete();
    };
    /**
     * Merge into an email, then open it in compose for a single, send directly for multiple
     *
     * @param {object} data
     * @protected
     */
    EgwApp.prototype._mergeEmail = function (action, data) {
        var ids = data['id'];
        // egw.open() used if only 1 row selected
        data['egw_open'] = 'edit-mail--';
        data['target'] = 'compose_' + data.document;
        // long_task runs menuaction once for each selected row
        data['nm_action'] = 'long_task';
        data['popup'] = this.egw.link_get_registry('mail', 'edit_popup');
        data['message'] = this.egw.lang('insert in %1', data.document);
        data['menuaction'] = 'mail.mail_compose.ajax_merge';
        action.data = data;
        if (data['select_all'] || ids.length > 1) {
            data['menuaction'] += "&document=" + data.document + "&merge=" + data.merge;
            et2_extension_nextmatch_actions_1.nm_action(action, null, data['target'], { all: data['select_all'], ids: ids });
        }
        else {
            this.egw.open(ids.pop(), 'mail', 'edit', {
                from: 'merge',
                document: data.document,
                merge: data.merge
            }, data['target']);
        }
    };
    /**
     * Initializes actions and handlers on sidebox (delete)
     *
     * @param {jQuery} sidebox jQuery of DOM node
     */
    EgwApp.prototype._init_sidebox = function (sidebox) {
        var _a;
        if (sidebox.length) {
            var self = this;
            if (this.sidebox)
                this.sidebox.off();
            this.sidebox = sidebox;
            sidebox
                .off()
                // removed .on("mouse(enter|leave)" (wrapping trash icon), as it stalls delete in IE11
                .on("click.sidebox", "div.ui-icon-trash", this, this.delete_favorite)
                // need to install a favorite handler, as we switch original one off with .off()
                .on('click.sidebox', 'li[data-id]', this, function (event) {
                var li = jQuery(this);
                li.siblings().removeClass('ui-state-highlight');
                var state = {};
                var pref = egw.preference('favorite_' + this.dataset.id, self.appname);
                if (pref) {
                    // Extend, to prevent changing the preference by reference
                    jQuery.extend(true, state, pref);
                }
                if (this.dataset.id != 'add') {
                    // check for mobile framework and close the sidebox/-bar
                    if (typeof framework.toggleMenu === 'function') {
                        framework.toggleMenu('on');
                    }
                    event.stopImmediatePropagation();
                    self.setState.call(self, state);
                    return false;
                }
            })
                .addClass("ui-helper-clearfix");
            var el = (_a = document.getElementById('favorite_sidebox_' + this.appname)) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('ul')[0];
            if (el && el instanceof HTMLElement) {
                var sortablejs_1 = sortable_complete_esm_js_1.default.create(el, {
                    ghostClass: 'ui-fav-sortable-placeholder',
                    draggable: 'li:not([data-id$="add"])',
                    delay: 25,
                    dataIdAttr: 'data-id',
                    onSort: function (event) {
                        var favSortedList = sortablejs_1.toArray();
                        self.egw.set_preference(self.appname, 'fav_sort_pref', favSortedList);
                        self._refresh_fav_nm();
                    }
                });
            }
            // Bind favorite de-select
            var egw_fw = egw_getFramework();
            if (egw_fw && egw_fw.applications[this.appname] && egw_fw.applications[this.appname].browser
                && egw_fw.applications[this.appname].browser.baseDiv) {
                jQuery(egw_fw.applications[this.appname].browser.baseDiv)
                    .off('.sidebox')
                    .on('change.sidebox', function () {
                    self.highlight_favorite();
                });
                egw_fw.applications[this.appname].browser.baseDiv.addEventListener("change", function (e) {
                    if (e.target.localName == "et2-favorites") {
                        sidebox[0].querySelectorAll("li:not([data-id='add']) > a > div:first-child").forEach(function (f) {
                            f.classList.add("sideboxstar");
                            f.classList.remove('ui-icon', 'ui-heart');
                        });
                        var new_pref = sidebox[0].querySelector("li[data-id='" + e.target.preferred + "'] > a > div:first-child");
                        if (new_pref) {
                            new_pref.classList.add('ui-icon', 'ui-icon-heart');
                            new_pref.classList.remove("sideboxstar");
                        }
                    }
                });
            }
            return true;
        }
        return false;
    };
    /**
     * Add a new favorite
     *
     * Fetches the current state from the application, then opens a dialog to get the
     * name and other settings.  If user proceeds, the favorite is saved, and if possible
     * the sidebox is directly updated to include the new favorite
     *
     * @param {object} [state] State settings to be merged into the application state
     */
    EgwApp.prototype.add_favorite = function (state) {
        // Get current state
        // Make sure it's an object - deep copy to prevent references in sub-objects (col_filters)
        state = __assign(__assign({}, this.getState()), (state || {}));
        this._create_favorite_popup(state);
        // Stop the normal bubbling if this is called on click
        return false;
    };
    /**
     * Update favorite items in nm fav. menu
     *
     */
    EgwApp.prototype._refresh_fav_nm = function () {
        var self = this;
        if (etemplate2_1.etemplate2 && etemplate2_1.etemplate2.getByApplication) {
            var et2 = etemplate2_1.etemplate2.getByApplication(self.appname);
            for (var i = 0; i < et2.length; i++) {
                et2[i].widgetContainer.iterateOver(function (_widget) {
                    _widget.stored_filters = _widget.load_favorites(self.appname);
                }, self, Et2Favorites_1.Et2Favorites);
            }
        }
        else {
            throw new Error("_refresh_fav_nm():Either et2 is  not ready/ not there yet. Make sure that etemplate2 is ready before call this method.");
        }
    };
    /**
     * Create the "Add new" popup dialog
     */
    EgwApp.prototype._create_favorite_popup = function (state) {
        var _this = this;
        var favorite_prefix = 'favorite_';
        // Clear old, if existing
        if (this.favorite_popup && this.favorite_popup.group) {
            this.favorite_popup.group.destroy();
            delete this.favorite_popup;
        }
        // Add some controls if user is an admin
        var apps = this.egw.user('apps');
        var is_admin = (typeof apps['admin'] != "undefined");
        // Setup data
        var data = {
            content: {
                state: state || [],
                current_filters: []
            },
            readonlys: {
                group: !is_admin
            }
        };
        // Show current set filters (more for debug than user)
        var filter_list = [];
        var add_to_popup = function (arr, inset) {
            if (inset === void 0) { inset = ""; }
            Object.keys(arr).forEach(function (index) {
                var filter = arr[index];
                filter_list.push({
                    label: inset + index.toString(),
                    value: (typeof filter != "object" ? "" + filter : "")
                });
                if (typeof filter == "object" && filter != null) {
                    add_to_popup(filter, inset + "    ");
                }
            });
        };
        add_to_popup(data.content.state);
        data.content.current_filters = filter_list;
        var save_callback = function (button, value) { return __awaiter(_this, void 0, void 0, function () {
            var safe_name, existing, _a, _b, favorite, favorite_pref, html, href;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (button !== Et2Dialog_1.Et2Dialog.OK_BUTTON) {
                            return [2 /*return*/];
                        }
                        if (!value.name) return [3 /*break*/, 3];
                        // Add to the list
                        value.name = value.name.replace(/(<([^>]+)>)/ig, "");
                        safe_name = value.name.replace(/[^A-Za-z0-9-_]/g, "_");
                        if (!(safe_name != value.name)) return [3 /*break*/, 2];
                        existing = this.egw.preference(favorite_prefix + safe_name, this.appname);
                        if (!(existing && existing.name !== value.name)) return [3 /*break*/, 2];
                        // Name mis-match, this is a new favorite with the same safe name
                        _a = safe_name;
                        _b = "_";
                        return [4 /*yield*/, this.egw.hashString(value.name)];
                    case 1:
                        // Name mis-match, this is a new favorite with the same safe name
                        safe_name = _a + (_b + (_c.sent()));
                        _c.label = 2;
                    case 2:
                        favorite = {
                            name: value.name,
                            group: value.group || false,
                            state: data.content.state
                        };
                        favorite_pref = favorite_prefix + safe_name;
                        // Save to preferences
                        if (typeof value.group != "undefined" && value.group != '') {
                            // Admin stuff - save preference server side
                            this.egw.jsonq('EGroupware\\Api\\Framework::ajax_set_favorite', [
                                this.appname,
                                value.name,
                                "add",
                                value.group,
                                data.content.state
                            ]);
                        }
                        else {
                            // Normal user - just save to preferences client side
                            this.egw.set_preference(this.appname, favorite_pref, favorite);
                        }
                        // Trigger event so widgets can update
                        document.dispatchEvent(new CustomEvent("preferenceChange", {
                            bubbles: true,
                            detail: {
                                application: this.appname,
                                preference: favorite_pref
                            }
                        }));
                        // Add to list immediately
                        if (this.sidebox) {
                            // Remove any existing with that name
                            this.sidebox.get(0).querySelectorAll('[data-id="' + safe_name + '"]').forEach(function (e) { return e.remove(); });
                            html = "<li data-id='" + safe_name + "' data-group='" + favorite.group + "' class='ui-menu-item' role='menuitem'>\n";
                            href = 'javascript:app.' + this.appname + '.setState(' + JSON.stringify(favorite) + ');';
                            html += "<a href='" + href + "' class='ui-corner-all' tabindex='-1'>";
                            html += "<div class='" + 'sideboxstar' + "'></div>" +
                                favorite.name;
                            html += "<div class='ui-icon ui-icon-trash' title='" + this.egw.lang('Delete') + "'/>";
                            html += "</a></li>\n";
                            jQuery(html).insertBefore(jQuery('li', this.sidebox).last());
                            this._init_sidebox(this.sidebox);
                        }
                        // Try to update nextmatch favorites too
                        this._refresh_fav_nm();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // Create popup
        this.favorite_popup = new Et2Dialog_1.Et2Dialog(this.egw);
        this.favorite_popup.transformAttributes({
            callback: save_callback,
            title: this.egw.lang("New favorite"),
            buttons: Et2Dialog_1.Et2Dialog.BUTTONS_OK_CANCEL,
            width: 400,
            value: data,
            template: this.egw.webserverUrl + '/api/templates/default/add_favorite.xet'
        });
        document.body.appendChild(this.favorite_popup);
        return false;
    };
    /**
     * Delete a favorite from the list and update preferences
     * Registered as a handler on the delete icons
     *
     * @param {jQuery.event} event event object
     */
    EgwApp.prototype.delete_favorite = function (event) {
        // Don't do the menu
        event.stopImmediatePropagation();
        var app = event.data;
        var id = jQuery(this).parentsUntil('li').parent().attr("data-id");
        var group = jQuery(this).parentsUntil('li').parent().attr("data-group") || '';
        var line = jQuery('li[data-id="' + id + '"]', app.sidebox);
        var name = line.first().text();
        var trash = this;
        line.addClass('loading');
        // Make sure first
        var do_delete = function (button_id) {
            if (button_id != Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                line.removeClass('loading');
                return;
            }
            // Hide the trash
            jQuery(trash).hide();
            // Delete preference server side
            var request = egw.json("EGroupware\\Api\\Framework::ajax_set_favorite", [app.appname, id, "delete", group, ''], function (result) {
                // Got the full response from callback, which we don't want
                if (result.type)
                    return;
                if (result && typeof result == 'boolean') {
                    // Remove line from list
                    line.slideUp("slow", function () { });
                    app._refresh_fav_nm();
                }
                else {
                    // Something went wrong server side
                    line.removeClass('loading').addClass('ui-state-error');
                }
            }, jQuery(trash).parentsUntil("li").parent(), true, jQuery(trash).parentsUntil("li").parent());
            request.sendRequest(true);
        };
        Et2Dialog_1.Et2Dialog.show_dialog(do_delete, (egw.lang("Delete") + " " + name + "?"), "Delete", null, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO, Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE);
        return false;
    };
    /**
     * Mark the favorite closest matching the current state
     *
     * Closest matching takes into account not set values, so we pick the favorite
     * with the most matching values without a value that differs.
     */
    EgwApp.prototype.highlight_favorite = function () {
        if (!this.sidebox)
            return;
        var state = this.getState();
        var best_match = false;
        var best_count = 0;
        var self = this;
        jQuery('li[data-id]', this.sidebox).removeClass('ui-state-highlight');
        jQuery('li[data-id]', this.sidebox).each(function (i, href) {
            var favorite = {};
            if (this.dataset.id && egw.preference('favorite_' + this.dataset.id, self.appname)) {
                favorite = egw.preference('favorite_' + this.dataset.id, self.appname);
            }
            if (!favorite || jQuery.isEmptyObject(favorite))
                return;
            // Handle old style by making it like new style
            if (favorite.filter && !favorite.state) {
                favorite.state = favorite.filter;
            }
            var match_count = 0;
            var extra_keys = Object.keys(favorite.state);
            for (var state_key in state) {
                extra_keys.splice(extra_keys.indexOf(state_key), 1);
                if (typeof favorite.state != 'undefined' && typeof state[state_key] != 'undefined' && typeof favorite.state[state_key] != 'undefined' && (state[state_key] == favorite.state[state_key] || !state[state_key] && !favorite.state[state_key])) {
                    match_count++;
                }
                else if (state_key == 'selectcols' && typeof favorite.state.selectcols == "undefined") {
                    // Skip, not set in favorite
                }
                else if (typeof state[state_key] != 'undefined' && state[state_key] && typeof state[state_key] === 'object'
                    && typeof favorite.state != 'undefined' && typeof favorite.state[state_key] != 'undefined' && favorite.state[state_key] && typeof favorite.state[state_key] === 'object') {
                    if ((typeof state[state_key].length !== 'undefined' || typeof state[state_key].length !== 'undefined')
                        && (state[state_key].length || Object.keys(state[state_key]).length) != (favorite.state[state_key].length || Object.keys(favorite.state[state_key]).length)) {
                        // State or favorite has a length, but the other does not
                        if ((state[state_key].length === 0 || Object.keys(state[state_key]).length === 0) &&
                            (favorite.state[state_key].length == 0 || Object.keys(favorite.state[state_key]).length === 0)) {
                            // Just missing, or one is an array and the other is an object
                            continue;
                        }
                        // One has a value and the other doesn't, no match
                        return;
                    }
                    else if (state[state_key].length !== 'undefined' && typeof favorite.state[state_key].length !== 'undefined' &&
                        state[state_key].length === 0 && favorite.state[state_key].length === 0) {
                        // Both set, but both empty
                        match_count++;
                        continue;
                    }
                    // Consider sub-objects (column filters) individually
                    for (var sub_key in state[state_key]) {
                        if (state[state_key][sub_key] == favorite.state[state_key][sub_key] || !state[state_key][sub_key] && !favorite.state[state_key][sub_key]) {
                            match_count++;
                        }
                        else if (state[state_key][sub_key] && favorite.state[state_key][sub_key] &&
                            typeof state[state_key][sub_key] === 'object' && typeof favorite.state[state_key][sub_key] === 'object') {
                            // Too deep to keep going, just string compare for perfect match
                            if (JSON.stringify(state[state_key][sub_key]) === JSON.stringify(favorite.state[state_key][sub_key])) {
                                match_count++;
                            }
                        }
                        else if (typeof state[state_key][sub_key] !== 'undefined' && state[state_key][sub_key] != favorite.state[state_key][sub_key]) {
                            // Different values, do not match
                            return;
                        }
                    }
                }
                else if (typeof state[state_key] !== 'undefined'
                    && typeof favorite.state != 'undefined' && typeof favorite.state[state_key] !== 'undefined'
                    && state[state_key] != favorite.state[state_key]) {
                    // Different values, do not match
                    return;
                }
            }
            // Check for anything set that the current one does not have
            for (var i = 0; i < extra_keys.length; i++) {
                if (favorite.state[extra_keys[i]])
                    return;
            }
            if (match_count > best_count) {
                best_match = this.dataset.id;
                best_count = match_count;
            }
        });
        if (best_match) {
            jQuery('li[data-id="' + best_match + '"]', this.sidebox).addClass('ui-state-highlight');
        }
    };
    /**
     * Fix scrolling iframe browsed by iPhone/iPod/iPad touch devices
     */
    EgwApp.prototype._fix_iFrameScrolling = function () {
        if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
            jQuery("iframe").on({
                load: function () {
                    var body = this.contentWindow.document.body;
                    var div = jQuery(document.createElement("div"))
                        .css({
                        'height': jQuery(this.parentNode).height(),
                        'width': jQuery(this.parentNode).width(),
                        'overflow': 'scroll'
                    });
                    while (body.firstChild) {
                        div.append(body.firstChild);
                    }
                    jQuery(body).append(div);
                }
            });
        }
    };
    /**
     * Set document title, uses getWindowTitle to get the correct title,
     * otherwise set it with uniqueID as default title
     */
    EgwApp.prototype._set_Window_title = function () {
        var title = this.getWindowTitle();
        if (title) {
            document.title = this.et2._inst.uniqueId + ": " + title;
        }
    };
    /**
     * Window title getter function in order to set the window title
     * this can be overridden on each application app.js file to customize the title value
     *
     * @returns {string} window title
     */
    EgwApp.prototype.getWindowTitle = function () {
        var titleWidget = this.et2.getWidgetById('title');
        if (titleWidget) {
            return titleWidget.get_value ? titleWidget.get_value() : (titleWidget.value || "");
        }
        else {
            return this.et2._inst.uniqueId;
        }
    };
    /**
     * Handler for drag and drop when dragging nextmatch rows from mail app
     * and dropped on a row in the current application.  We copy the mail into
     * the filemanager to link it since we can't link directly.
     *
     * This doesn't happen automatically.  Each application must indicate that
     * it will accept dropped mail by its nextmatch actions:
     *
     * $actions['info_drop_mail'] = array(
     *		'type' => 'drop',
     *		'acceptedTypes' => 'mail',
     *		'onExecute' => 'javaScript:app.infolog.handle_dropped_mail',
     *		'hideOnDisabled' => true
     *	);
     *
     * This action, when defined, will not affect the automatic linking between
     * normal applications.
     *
     * @param {egwAction} _action
     * @param {egwActionObject[]} _selected Dragged mail rows
     * @param {egwActionObject} _target Current application's nextmatch row the mail was dropped on
     */
    EgwApp.prototype.handle_dropped_mail = function (_action, _selected, _target) {
        /**
         * Mail doesn't support link system, so we copy it to VFS
         */
        var ids = _target.id.split("::");
        if (ids.length != 2 || ids[0] == 'mail')
            return;
        var vfs_path = "/apps/" + ids[0] + "/" + ids[1];
        var mail_ids = [];
        for (var i = 0; i < _selected.length; i++) {
            mail_ids.push(_selected[i].id);
        }
        if (mail_ids.length) {
            egw.message(egw.lang("Please wait..."));
            this.egw.json('filemanager.filemanager_ui.ajax_action', ['mail', mail_ids, vfs_path], function (data) {
                // Trigger an update (minimal, no sorting changes) to display the new link
                egw.refresh(data.msg || '', ids[0], ids[1], 'update');
            }).sendRequest(true);
        }
    };
    /**
     * Check if Mailvelope is available, open (or create) "egroupware" keyring and call callback with it
     *
     * @param {function} _callback called if and only if mailvelope is available (context is this!)
     */
    EgwApp.prototype.mailvelopeAvailable = function (_callback) {
        var self = this;
        var callback = jQuery.proxy(_callback, this);
        if (typeof mailvelope !== 'undefined') {
            this.mailvelopeOpenKeyring().then(callback);
        }
        else {
            jQuery(window).on('mailvelope', function () {
                self.mailvelopeOpenKeyring().then(callback);
            });
        }
    };
    /**
     * mailvelope object contains SyncHandlers
     *
     * @property {function} descriptionuploadSync function called by Mailvelope to upload encrypted private key backup
     * @property {function} downloadSync function called by Mailvelope to download encrypted private key backup
     * @property {function} backup function called by Mailvelope to upload a public keyring backup
     * @property {function} restore function called by Mailvelope to restore a public keyring backup
     */
    EgwApp.prototype.mailvelopeSyncHandler = function () {
        return {
            /**
             * function called by Mailvelope to upload a public keyring
             * @param {UploadSyncHandler} _uploadObj
             *	@property {string} etag entity tag for the uploaded encrypted keyring, or null if initial upload
             *	@property {AsciiArmored} keyringMsg encrypted keyring as PGP armored message
             * @returns {Promise.<UploadSyncReply, Error>}
             */
            uploadSync: function (_uploadObj) {
                return new Promise(function (_resolve, _reject) { });
            },
            /**
             * function called by Mailvelope to download a public keyring
             *
             * @param {object} _downloadObj
             *	@property {string} etag entity tag for the current local keyring, or null if no local eTag
             * @returns {Promise.<DownloadSyncReply, Error>}
             */
            downloadSync: function (_downloadObj) {
                return new Promise(function (_resolve, _reject) { });
            },
            /**
             * function called by Mailvelope to upload an encrypted private key backup
             *
             * @param {BackupSyncPacket} _backup
             *	@property {AsciiArmored} backup an encrypted private key as PGP armored message
             * @returns {Promise.<undefined, Error>}
             */
            backup: function (_backup) {
                return new Promise(function (_resolve, _reject) {
                    // Store backup sync packet into .PGP-Key-Backup file in user directory
                    jQuery.ajax({
                        method: 'PUT',
                        url: egw.webserverUrl + '/webdav.php/home/' + egw.user('account_lid') + '/.PGP-Key-Backup',
                        contentType: 'application/json',
                        data: JSON.stringify(_backup),
                        success: function () {
                            _resolve(_backup);
                        },
                        error: function (_err) {
                            _reject(_err);
                        }
                    });
                });
            },
            /**
             * function called by Mailvelope to restore an encrypted private key backup
             *
             * @returns {Promise.<BackupSyncPacket, Error>}
             * @todo
             */
            restore: function () {
                return new Promise(function (_resolve, _reject) {
                    var resolve = _resolve;
                    var reject = _reject;
                    jQuery.ajax({
                        url: egw.webserverUrl + '/webdav.php/home/' + egw.user('account_lid') + '/.PGP-Key-Backup',
                        method: 'GET',
                        success: function (_backup) {
                            resolve(JSON.parse(_backup));
                            egw.message('Your key has been restored successfully.');
                        },
                        error: function (_err) {
                            //Try with old back file name
                            if (_err.status == 404) {
                                jQuery.ajax({
                                    method: 'GET',
                                    url: egw.webserverUrl + '/webdav.php/home/' + egw.user('account_lid') + '/.PK_PGP',
                                    success: function (_backup) {
                                        resolve(JSON.parse(_backup));
                                        egw.message('Your key has been restored successfully.');
                                    },
                                    error: function (_err) {
                                        _reject(_err);
                                    }
                                });
                            }
                            else {
                                _reject(_err);
                            }
                        }
                    });
                });
            }
        };
    };
    /**
     * Function for backup file operations
     *
     * @param {type} _url Url of the backup file
     * @param {type} _cmd command to operate
     *	- PUT: to store backup file
     *	- GET: to read backup file
     *	- DELETE: to delete backup file
     *
     * @param {type} _successCallback function called when the operation is successful
     * @param {type} _errorCallback function called when the operation fails
     * @param {type} _data data which needs to be stored in file via PUT command
     */
    EgwApp.prototype._mailvelopeBackupFileOperator = function (_url, _cmd, _successCallback, _errorCallback, _data) {
        var ajaxObj = {
            url: _url || egw.webserverUrl + '/webdav.php/home/' + egw.user('account_lid') + '/.PGP-Key-Backup',
            method: _cmd,
            success: _successCallback,
            error: _errorCallback
        };
        switch (_cmd) {
            case 'PUT':
                jQuery.extend({}, ajaxObj, {
                    data: JSON.stringify(_data),
                    contentType: 'application/json'
                });
                break;
            case 'GET':
                jQuery.extend({}, ajaxObj, {
                    dataType: 'json'
                });
                break;
            case 'DELETE':
                break;
        }
        jQuery.ajax(ajaxObj);
    };
    /**
     * Create backup dialog
     * @param {string} _selector DOM selector to attach backupDialog
     * @param {boolean} _initSetup determine whether it's an initialization backup or restore backup
     *
     * @returns {Promise.<backupPopupId, Error>}
     */
    EgwApp.prototype.mailvelopeCreateBackupDialog = function (_selector, _initSetup) {
        var self = this;
        var selector = _selector || 'body';
        var initSetup = _initSetup;
        jQuery('iframe[src^="chrome-extension"],iframe[src^="about:blank?mvelo"]').remove();
        return new Promise(function (_resolve, _reject) {
            var resolve = _resolve;
            var reject = _reject;
            mailvelope.getKeyring('egroupware').then(function (_keyring) {
                _keyring.addSyncHandler(self.mailvelopeSyncHandlerObj);
                var options = {
                    initialSetup: initSetup
                };
                _keyring.createKeyBackupContainer(selector, options).then(function (_popupId) {
                    var $backup_selector = jQuery('iframe[src^="chrome-extension"],iframe[src^="about:blank?mvelo"]');
                    $backup_selector.css({ position: 'absolute', "z-index": 1 });
                    _popupId.isReady().then(function (result) {
                        egw.message('Your key has been backedup into  .PGP-Key-Backup successfully.');
                        jQuery(selector).empty();
                    });
                    resolve(_popupId);
                }, function (_err) {
                    reject(_err);
                });
            }, function (_err) {
                reject(_err);
            });
        });
    };
    /**
     * Delete backup key from filesystem
     */
    EgwApp.prototype.mailvelopeDeleteBackup = function () {
        var self = this;
        Et2Dialog_1.Et2Dialog.show_dialog(function (_button_id) {
            if (_button_id == Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                self._mailvelopeBackupFileOperator(undefined, 'DELETE', function () {
                    self.egw.message(self.egw.lang('The backup key has been deleted.'));
                }, function (_err) {
                    self.egw.message(self.egw.lang('Was not able to delete the backup key because %1', _err));
                });
            }
        }, 'Are you sure, you would like to delete the backup key?', 'Delete backup key', {}, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO_CANCEL, Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE, undefined, self.egw);
    };
    /**
     * Create mailvelope restore dialog
     * @param {string} _selector DOM selector to attach restorDialog
     * @param {boolean} _restorePassword if true, will restore key password too
     *
     * @returns {Promise}
     */
    EgwApp.prototype.mailvelopeCreateRestoreDialog = function (_selector, _restorePassword) {
        var self = this;
        var restorePassword = _restorePassword;
        var selector = _selector || 'body';
        //Clear the
        jQuery('iframe[src^="chrome-extension"],iframe[src^="about:blank?mvelo"]').remove();
        return new Promise(function (_resolve, _reject) {
            var resolve = _resolve;
            var reject = _reject;
            mailvelope.getKeyring('egroupware').then(function (_keyring) {
                _keyring.addSyncHandler(self.mailvelopeSyncHandlerObj);
                var options = {
                    restorePassword: restorePassword
                };
                _keyring.restoreBackupContainer(selector, options).then(function (_restoreId) {
                    var $restore_selector = jQuery('iframe[src^="chrome-extension"],iframe[src^="about:blank?mvelo"]');
                    $restore_selector.css({ position: 'absolute', "z-index": 1 });
                    resolve(_restoreId);
                }, function (_err) {
                    reject(_err);
                });
            }, function (_err) {
                reject(_err);
            });
        });
    };
    /**
     * Create a dialog to show all backup/restore options
     *
     * @returns {undefined}
     */
    EgwApp.prototype.mailvelopeCreateBackupRestoreDialog = function () {
        var self = this;
        var appname = egw.app_name();
        var menu = [
            // Header row should be empty item 0
            {},
            // Restore Keyring item 1
            {
                label: "Restore key",
                image: "lock",
                onclick: "app." + appname + ".mailvelopeCreateRestoreDialog('#_mvelo')"
            },
            // Restore pass phrase item 2
            {
                label: "Restore password",
                image: "password",
                onclick: "app." + appname + ".mailvelopeCreateRestoreDialog('#_mvelo', true)"
            },
            // Delete backup Key item 3
            { label: "Delete backup", image: "delete", onclick: "app." + appname + ".mailvelopeDeleteBackup" },
            // Backup Key item 4
            {
                label: "Backup Key",
                image: "save",
                onclick: "app." + appname + ".mailvelopeCreateBackupDialog('#_mvelo', false)"
            }
        ];
        var dialog = function (_content, _callback) {
            var dialog = new Et2Dialog_1.Et2Dialog(this.egw);
            dialog.transformAttributes({
                callback: function (_button_id, _value) {
                    if (typeof _callback == "function") {
                        _callback.call(this, _button_id, _value.value);
                    }
                },
                title: egw.lang('Backup/Restore'),
                buttons: [{
                        "button_id": 'close',
                        "label": egw.lang('Close'),
                        id: 'dialog[close]',
                        image: 'cancelled',
                        "default": true
                    }],
                value: {
                    content: {
                        menu: _content
                    }
                },
                template: egw.webserverUrl + '/api/templates/default/pgp_backup_restore.xet',
                class: "pgp_backup_restore",
                isModal: true
            });
            return dialog;
        };
        if (typeof mailvelope != 'undefined') {
            mailvelope.getKeyring('egroupware').then(function (_keyring) {
                self._mailvelopeBackupFileOperator(undefined, 'GET', function (_data) {
                    dialog(menu);
                }, function () {
                    // Remove delete item
                    menu.splice(3, 1);
                    menu[3]['onclick'] = "app." + appname + ".mailvelopeCreateBackupDialog('#_mvelo', true)";
                    dialog(menu);
                });
            }, function () {
                mailvelope.createKeyring('egroupware').then(function () { dialog(menu); });
            });
        }
        else {
            this.mailvelopeInstallationOffer();
        }
    };
    /**
     * Create a dialog and offers installation option for installing mailvelope plugin
     * plus it offers a video tutorials to get the user morte familiar with mailvelope
     */
    EgwApp.prototype.mailvelopeInstallationOffer = function () {
        var buttons = [
            { "text": egw.lang('Install'), id: 'install', image: 'check', "default": true },
            { "text": egw.lang('Close'), id: 'close', image: 'cancelled' }
        ];
        var dialog = function (_content, _callback) {
            return et2_core_widget_1.et2_createWidget("et2-dialog", {
                callback: function (_button_id, _value) {
                    if (typeof _callback == "function") {
                        _callback.call(this, _button_id, _value.value);
                    }
                },
                title: egw.lang('PGP Encryption Installation'),
                buttons: buttons,
                dialog_type: 'info',
                value: {
                    content: _content
                },
                template: egw.webserverUrl + '/api/templates/default/pgp_installation.xet',
                class: "pgp_installation",
                isModal: true
                //resizable:false,
            });
        };
        var content = [
            // Header row should be empty item 0
            {},
            {
                domain: this.egw.lang('Add your domain as "%1" in options to list of email providers and enable API.', '*.' + this._mailvelopeDomain()), video: "test", control: "true"
            }
        ];
        document.body.append(dialog(content, function (_button) {
            if (_button == 'install') {
                if (typeof chrome != 'undefined') {
                    // ATM we are not able to trigger mailvelope installation directly
                    // since the installation should be triggered from the extension
                    // owner validate website (mailvelope.com), therefore, we just redirect
                    // user to chrome webstore to install mailvelope from there.
                    window.open('https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke');
                }
                else if (typeof InstallTrigger != 'undefined' && InstallTrigger.enabled()) {
                    InstallTrigger.install({ mailvelope: "https://download.mailvelope.com/releases/latest/mailvelope.firefox.xpi" }, function (_url, _status) {
                        if (_status == 0) {
                            Et2Dialog_1.Et2Dialog.alert(egw.lang('Mailvelope addon installation succeded. Now you may configure the options.'));
                            return;
                        }
                        else {
                            Et2Dialog_1.Et2Dialog.alert(egw.lang('Mailvelope addon installation failed! Please try again.'));
                        }
                    });
                }
            }
        }));
    };
    /**
     * Open (or create) "egroupware" keyring and call callback with it
     *
     * @returns {Promise.<Keyring, Error>} Keyring or Error with message
     */
    EgwApp.prototype.mailvelopeOpenKeyring = function () {
        var self = this;
        var mailvelope = this.egw.window.mailvelope; // use Mailvelope of correct window
        return new Promise(function (_resolve, _reject) {
            if (self.mailvelope_keyring)
                _resolve(self.mailvelope_keyring);
            var resolve = _resolve;
            var reject = _reject;
            mailvelope.getKeyring('egroupware').then(function (_keyring) {
                self.mailvelope_keyring = _keyring;
                resolve(_keyring);
            }, function (_err) {
                mailvelope.createKeyring('egroupware').then(function (_keyring) {
                    self.mailvelope_keyring = _keyring;
                    var mvelo_settings_selector = self.mailvelope_iframe_selector
                        .split(',').map(function (_val) { return 'body>' + _val; }).join(',');
                    mailvelope.createSettingsContainer('body', _keyring, {
                        email: self.egw.user('account_email'),
                        fullName: self.egw.user('account_fullname')
                    }).then(function () {
                        // make only Mailvelope settings dialog visible
                        jQuery(mvelo_settings_selector).css({ position: 'absolute', top: 0 });
                        // add a close button, so we know when to offer storing public key to AB
                        jQuery('<button class="et2_button et2_button_text" id="mailvelope_close_settings">' + self.egw.lang('Close') + '</button>')
                            .css({ position: 'absolute', top: 8, right: 8, "z-index": 2 })
                            .click(function () {
                            // try fetching public key, to check user created onw
                            self.mailvelope_keyring.exportOwnPublicKey(self.egw.user('account_email')).then(function (_pubKey) {
                                // CreateBackupDialog
                                self.mailvelopeCreateBackupDialog().then(function (_popupId) {
                                    jQuery('iframe[src^="chrome-extension"],iframe[src^="about:blank?mvelo"]').css({
                                        position: 'absolute',
                                        "z-index": 1
                                    });
                                }, function (_err) {
                                    egw.message(_err);
                                });
                                // if yes, hide settings dialog
                                jQuery(mvelo_settings_selector).each(function (index, item) {
                                    if (!item.src.match(/keyBackupDialog.html/, 'ig'))
                                        item.remove();
                                });
                                jQuery('button#mailvelope_close_settings').remove();
                                // offer user to store his public key to AB for other users to find
                                var buttons = [
                                    {
                                        button_id: 2,
                                        label: 'Yes',
                                        id: 'dialog[yes]',
                                        image: 'check',
                                        default: true
                                    },
                                    { button_id: 3, label: 'No', id: 'dialog[no]', image: 'cancelled' }
                                ];
                                if (egw.user('apps').admin) {
                                    buttons.unshift({
                                        button_id: 5,
                                        label: 'Yes and allow non-admin users to do that too (recommended)',
                                        id: 'dialog[yes_allow]',
                                        image: 'check',
                                        default: true
                                    });
                                    delete buttons[1].default;
                                }
                                Et2Dialog_1.Et2Dialog.show_dialog(function (_button_id) {
                                    if (_button_id != Et2Dialog_1.Et2Dialog.NO_BUTTON) {
                                        var keys = {};
                                        keys[self.egw.user('account_id')] = _pubKey;
                                        self.egw.json('addressbook.addressbook_bo.ajax_set_pgp_keys', [keys, _button_id != Et2Dialog_1.Et2Dialog.YES_BUTTON ? true : undefined]).sendRequest()
                                            .then(function (_data) {
                                            self.egw.message(_data.response['0'].data);
                                        });
                                    }
                                }, 'It is recommended to store your public key in addressbook, so other users can write you encrypted mails.', 'Store your public key in Addressbook?', {}, buttons, Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE, undefined, self.egw);
                            }, function (_err) {
                                self.egw.message(_err.message + "\n\n" +
                                    self.egw.lang("You will NOT be able to send or receive encrypted mails before completing that step!"), 'error');
                            });
                        })
                            .appendTo('body');
                    });
                    resolve(_keyring);
                }, function (_err) {
                    reject(_err);
                });
            });
        });
    };
    /**
     * Mailvelope uses Domain without first part: eg. "stylite.de" for "egw.stylite.de"
     *
     * @returns {string}
     */
    EgwApp.prototype._mailvelopeDomain = function () {
        var parts = document.location.hostname.split('.');
        if (parts.length > 1)
            parts.shift();
        return parts.join('.');
    };
    /**
     * Check if we have a key for all recipients
     *
     * @param {Array} _recipients
     * @returns {Promise.<Array, Error>} Array of recipients or Error with recipients without key
     */
    EgwApp.prototype.mailvelopeGetCheckRecipients = function (_recipients) {
        // replace rfc822 addresses with raw email, as Mailvelop does not like them and lowercase all email
        var rfc822_preg = /<([^'" <>]+)>$/;
        var recipients = _recipients.map(function (_recipient) {
            var matches = _recipient.match(rfc822_preg);
            return matches ? matches[1].toLowerCase() : _recipient.toLowerCase();
        });
        // check if we have keys for all recipients
        var self = this;
        return new Promise(function (_resolve, _reject) {
            var resolve = _resolve;
            var reject = _reject;
            self.mailvelopeOpenKeyring().then(function (_keyring) {
                var keyring = _keyring;
                _keyring.validKeyForAddress(recipients).then(function (_status) {
                    var no_key = [];
                    for (var email in _status) {
                        if (!_status[email])
                            no_key.push(email);
                    }
                    if (no_key.length) {
                        // server addressbook on server for missing public keys
                        self.egw.json('addressbook.addressbook_bo.ajax_get_pgp_keys', [no_key]).sendRequest().then(function (_data) {
                            var data = _data.response['0'].data;
                            var promises = [];
                            for (var email in data) {
                                promises.push(keyring.importPublicKey(data[email]).then(function (_result) {
                                    if (_result == 'IMPORTED' || _result == 'UPDATED') {
                                        no_key.splice(no_key.indexOf(email), 1);
                                    }
                                }));
                            }
                            Promise.all(promises).then(function () {
                                if (no_key.length) {
                                    reject(new Error(self.egw.lang('No key for recipient:') + ' ' + no_key.join(', ')));
                                }
                                else {
                                    resolve(recipients);
                                }
                            });
                        });
                    }
                    else {
                        resolve(recipients);
                    }
                });
            }, function (_err) {
                reject(_err);
            });
        });
    };
    /**
     * Check if the share action is enabled for this entry
     *
     * @param {egwAction} _action
     * @param {egwActionObject[]} _entries
     * @param {egwActionObject} _target
     * @returns {boolean} if action is enabled
     */
    EgwApp.prototype.is_share_enabled = function (_action, _entries, _target) {
        return true;
    };
    /**
     * create a share-link for the given entry
     *
     * @param {egwAction} _action egw actions
     * @param {egwActionObject[]} _senders selected nm row
     * @param {egwActionObject} _target Drag source.  Not used here.
     * @param {Boolean} _writable Allow edit access from the share.
     * @param {Boolean} _files Allow access to files from the share.
     * @param {Function} _callback Callback with results
     * @param {Object} _extra Additional (app-specific or special) parameters
     * @returns {Boolean} returns false if not successful
     */
    EgwApp.prototype.share_link = function (_action, _senders, _target, _writable, _files, _callback, _extra) {
        var path = _senders[0].id;
        if (!path) {
            return this.egw.message(this.egw.lang('Missing share path.  Unable to create share.'), 'error');
        }
        switch (_action.id) {
            case 'shareFilemanager':
                // Sharing a link to just files in filemanager
                var id = path.split('::');
                path = '/apps/' + id[0] + '/' + id[1];
        }
        if (typeof _writable === 'undefined' && _action.parent && _action.parent.getActionById('shareWritable')) {
            _writable = _action.parent.getActionById('shareWritable').checked || false;
        }
        if (typeof _files === 'undefined' && _action.parent && _action.parent.getActionById('shareFiles')) {
            _files = _action.parent.getActionById('shareFiles').checked || false;
        }
        if (typeof _extra === 'undefined') {
            _extra = {};
        }
        return egw.json('EGroupware\\Api\\Sharing::ajax_create', [_action.id, path, _writable, _files, _extra], _callback ? _callback : this._share_link_callback, this, true, this).sendRequest();
    };
    EgwApp.prototype.share_merge = function (_action, _senders, _target) {
        var parent = _action.parent.parent;
        var _writable = false;
        var _files = false;
        if (parent && parent.getActionById('shareWritable')) {
            _writable = parent.getActionById('shareWritable').checked || false;
        }
        if (parent && parent.getActionById('shareFiles')) {
            _files = parent.getActionById('shareFiles').checked || false;
        }
        // Share only works on one at a time
        var promises = [];
        for (var i = 0; i < _senders.length; i++) {
            promises.push(new Promise(function (resolve, reject) {
                this.share_link(_action, [_senders[i]], _target, _writable, _files, resolve);
            }.bind(this)));
        }
        // But merge into email can handle several
        Promise.all(promises.map(function (p) { p.catch(function (e) { console.log(e); }); }))
            .then(function (values) {
            // Process document after all shares created
            return et2_extension_nextmatch_actions_1.nm_action(_action, _senders, _target);
        });
    };
    /**
     * Share-link callback
     * @param {object} _data
     */
    EgwApp.prototype._share_link_callback = function (_data) {
        if (_data.msg || _data.share_link)
            window.egw_refresh(_data.msg, this.appname);
        var copy_link_to_clipboard = function (evt) {
            var $target = jQuery(evt.target);
            $target.select();
            try {
                var successful = document.execCommand('copy');
                if (successful) {
                    egw.message('Share link copied into clipboard');
                    return true;
                }
            }
            catch (e) {
            }
            egw.message('Failed to copy the link!');
        };
        jQuery("body").on("click", "[name=share_link]", copy_link_to_clipboard);
        et2_core_widget_1.et2_createWidget("dialog", {
            callback: function (button_id, value) {
                jQuery("body").off("click", "[name=share_link]", copy_link_to_clipboard);
                return true;
            },
            title: _data.title ? _data.title : egw.lang("%1 Share Link", _data.writable ? egw.lang("Writable") : egw.lang("Readonly")),
            template: _data.template,
            width: 450,
            value: { content: { "share_link": _data.share_link } }
        });
    };
    /**
     * Keep a list of all EgwApp instances
     *
     * This is not just the globals available in window.app, it also includes private instances as well
     *
     * @private
     * @param app_obj
     */
    EgwApp._register_instance = function (app_obj) {
        // Reject improper objects
        if (!app_obj.appname)
            return;
        EgwApp._instances.push(app_obj);
    };
    /**
     * Iterator over all app instances
     *
     * Use for(const app of EgwApp) {...} to iterate over all app objects.
     */
    EgwApp[Symbol.iterator] = function () {
        return EgwApp._instances[Symbol.iterator]();
    };
    /**
     * In some cases (CRM) a private, disconnected app instance is created instead of
     * using the global.  We want to be able to access them for observer() & push(), so
     * we track all instances.
     */
    EgwApp._instances = [];
    return EgwApp;
}());
exports.EgwApp = EgwApp;
// EgwApp need to be global on window, as it's used to iterate through all EgwApp instances
window.EgwApp = EgwApp;
