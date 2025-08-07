"use strict";
/**
 * EGroupware egw_action framework - egw action framework
 *
 * @link https://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopupImplementation = exports.egwPopupActionImplementation = exports.EgwPopupActionImplementation = void 0;
var egw_menu_1 = require("./egw_menu");
var egw_action_constants_1 = require("./egw_action_constants");
var tapandswipe_1 = require("../tapandswipe");
var egw_action_common_1 = require("./egw_action_common");
require("./egwGlobal");
var egw_global_1 = require("../jsapi/egw_global");
var EgwPopupActionImplementation = /** @class */ (function () {
    function EgwPopupActionImplementation() {
        var _this = this;
        this.type = "popup";
        this.auto_paste = true;
        this.registerAction = function (_aoi, _callback, _context) {
            var _a, _b;
            var node = _aoi.getDOMNode();
            var parentNode = null;
            var parentAO = null;
            var isNew = false;
            // Is there a parent that handles action targets?
            if (typeof _context.findActionTargetHandler !== "undefined" && typeof ((_b = (_a = _context.findActionTargetHandler) === null || _a === void 0 ? void 0 : _a.iface) === null || _b === void 0 ? void 0 : _b.getWidget) == "function") {
                parentAO = _context.findActionTargetHandler;
                parentNode = parentAO.iface.getWidget();
            }
            if (!_aoi.findActionTargetHandler && parentNode && typeof parentNode.findActionTarget == "function") {
                _aoi.findActionTargetHandler = parentNode;
                isNew = true;
            }
            if (typeof _aoi.handlers == "undefined") {
                _aoi.handlers = {};
            }
            if (typeof _aoi.handlers[_this.type] == "undefined") {
                _aoi.handlers[_this.type] = [];
            }
            if (_aoi.handlers[_this.type].length == 0) {
                _aoi.handlers[_this.type].push({ type: 'contextmenu', listener: _callback });
                if (isNew) {
                    //if a parent is available the context menu Event-listener will only be bound once on the parent
                    _this._registerDefault(parentNode, _callback, parentAO);
                    _this._registerContext(parentNode, _callback, parentAO);
                    return true;
                }
                else if (node && !parentNode) {
                    _this._registerDefault(node, _callback, _context);
                    _this._registerContext(node, _callback, _context);
                    return true;
                }
            }
            return false;
        };
        this.unregisterAction = function (_aoi) {
            var _a;
            var node = _aoi.getDOMNode();
            //TODO jQuery replacement
            jQuery(node).off();
            // Unregister handlers
            if (_aoi.handlers) {
                (_a = _aoi.handlers[this.type]) === null || _a === void 0 ? void 0 : _a.forEach(function (h) { return node.removeEventListener(h.type, h.listener); });
                delete _aoi.handlers[this.type];
            }
            return true;
        };
        /**
         * Builds the context menu and shows it at the given position/DOM-Node.
         *
         * @param {object} _context
         * @param {type} _selected
         * @param {type} _links
         * @param {type} _target
         * @returns {Boolean}
         */
        this.executeImplementation = function (_context, _selected, _links, _target) {
            var _a, _b, _c;
            if (typeof _target == "undefined") {
                _target = null;
            }
            _this._context = _context;
            if (typeof _context == "object" && typeof _context.keyEvent == "object") {
                return _this._handleKeyPress(_context.keyEvent, _selected, _links, _target);
            }
            else if (_context != "default") {
                //Check whether the context has the posx and posy parameters
                if ((typeof _context.posx != "number" || typeof _context.posy != "number") &&
                    typeof _context.id != "undefined") {
                    // Calculate context menu position from the given DOM-Node
                    var node = _context;
                    var x = jQuery(node).offset().left;
                    var y = jQuery(node).offset().top;
                    _context = { "posx": x, "posy": y };
                }
                var menu = null;
                // Special handling for nextmatch context menu - reuse the same menu
                if (!_target && !_context.menu && _selected[0].parent.manager.data.menu) {
                    menu = _selected[0].parent.manager.data.menu;
                }
                if (_this.auto_paste && !window.egwIsMobile() && (!((_a = _this._context) === null || _a === void 0 ? void 0 : _a.event) || ((_b = _this._context) === null || _b === void 0 ? void 0 : _b.event) && !((_c = _this._context.event) === null || _c === void 0 ? void 0 : _c.type.match(/touch/)))) {
                    _this._addCopyPaste(_links, _selected);
                }
                if (!menu) {
                    menu = _this._buildMenu(_links, _selected, _target);
                }
                else {
                    menu.applyContext(_links, _selected, _target);
                }
                menu.showAt(_context.posx, _context.posy);
                return true;
            }
            else {
                var defaultAction = _this._getDefaultLink(_links);
                if (defaultAction) {
                    defaultAction.execute(_selected);
                }
            }
            return false;
        };
        /**
         * Registers the handler for the default action
         *
         * @param {any} _node
         * @param {function} _callback
         * @param {object} _context
         * @returns {boolean}
         */
        this._registerDefault = function (_node, _callback, _context) {
            var defaultHandler = function (e) {
                var x = _node;
                //use different node and context for callback if event happens on parent
                var nodeToUse;
                var contextToUse;
                if (x.findActionTarget) {
                    var y = x.findActionTarget(e);
                    nodeToUse = y === null || y === void 0 ? void 0 : y.target;
                    contextToUse = y === null || y === void 0 ? void 0 : y.action;
                    e.originalEvent = e;
                }
                //allow bubbling of the expand folder event
                //do not stop bubbling of events if the event is supposed to be handled by the et2-tree
                if (window.egwIsMobile() && (nodeToUse || e.currentTarget).tagName == "SL-TREE-ITEM")
                    return true;
                // a tag should be handled by default event
                // Prevent bubbling bound event on <a> tag, on touch devices
                if (window.egwIsMobile() && (nodeToUse || e.target).tagName == "A")
                    return true;
                if (typeof document["selection"] != "undefined" && typeof document["selection"].empty != "undefined") {
                    document["selection"].empty();
                }
                else if (typeof window.getSelection != "undefined") {
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                }
                if (!((contextToUse || _context).manager.getActionsByAttr('singleClick', true).length > 0 &&
                    (nodeToUse || e.target).classList.contains('et2_clickable'))) {
                    _callback.call(contextToUse || _context, "default", _this);
                }
                // Stop action from bubbling up to parents
                e.stopPropagation();
                e.cancelBubble = true;
                // remove context menu if we are in mobile theme
                // and intended to open the entry
                if (egw_menu_1._egw_active_menu && e.which == 1)
                    egw_menu_1._egw_active_menu.hide();
                return false;
            };
            if (window.egwIsMobile() || _context.manager.getActionsByAttr('singleClick', true).length > 0) {
                _node.addEventListener('click', defaultHandler); //jQuery(_node).on('click', defaultHandler);
            }
            else {
                _node.ondblclick = defaultHandler;
            }
        };
        this._getDefaultLink = function (_links) {
            var defaultAction = null;
            for (var k in _links) {
                if (_links[k].actionObj["default"] && _links[k].enabled) {
                    defaultAction = _links[k].actionObj;
                    break;
                }
            }
            return defaultAction;
        };
        this._searchShortcut = function (_key, _objs, _links) {
            for (var _i = 0, _objs_1 = _objs; _i < _objs_1.length; _i++) {
                var item = _objs_1[_i];
                var shortcut = item.shortcut;
                if (shortcut && shortcut.keyCode == _key.keyCode && shortcut.shift == _key.shift &&
                    shortcut.ctrl == _key.ctrl && shortcut.alt == _key.alt &&
                    item.type == "popup" && (typeof _links[item.id] == "undefined" ||
                    _links[item.id].enabled)) {
                    return item;
                }
                var obj = _this._searchShortcut(_key, item.children, _links);
                if (obj) {
                    return obj;
                }
            }
        };
        this._searchShortcutInLinks = function (_key, _links) {
            var objs = [];
            for (var k in _links) {
                if (_links[k].enabled) {
                    objs.push(_links[k].actionObj);
                }
            }
            return _this._searchShortcut(_key, objs, _links);
        };
        /**
         * Handles a key press
         *
         * @param {object} _key
         * @param {type} _selected
         * @param {type} _links
         * @param {type} _target
         * @returns {Boolean}
         */
        this._handleKeyPress = function (_key, _selected, _links, _target) {
            // Handle the default
            if (_key.keyCode == egw_action_constants_1.EGW_KEY_ENTER && !_key.ctrl && !_key.shift && !_key.alt) {
                var defaultAction = _this._getDefaultLink(_links);
                if (defaultAction) {
                    defaultAction.execute(_selected);
                    return true;
                }
            }
            // Menu button
            if (_key.keyCode == egw_action_constants_1.EGW_KEY_MENU && !_key.ctrl) {
                return _this.executeImplementation({ posx: 0, posy: 0 }, _selected, _links, _target);
            }
            // Check whether the given shortcut exists
            var obj = _this._searchShortcutInLinks(_key, _links);
            if (obj) {
                obj.execute(_selected);
                return true;
            }
            return false;
        };
        this._handleTapHold = function (_node, _callback) {
            //TODO (todo-jquery): ATM we need to convert the possible given jquery dom node object into DOM Element, this
            // should be no longer necessary after removing jQuery nodes.
            if (_node instanceof jQuery) {
                _node = _node[0];
            }
            var tap = new tapandswipe_1.tapAndSwipe(_node, {
                // this threshold must be the same as the one set in et2_dataview_view_aoi
                tapHoldThreshold: 1000,
                allowScrolling: "both",
                tapAndHold: function (event, fingercount) {
                    if (fingercount >= 2)
                        return;
                    // don't trigger contextmenu if sorting is happening
                    if (document.querySelector('.sortable-drag'))
                        return;
                    _callback(event);
                }
            });
            // bind a custom event tapandhold to be able to call it from nm action button
            _node.addEventListener('tapandhold', function (_event) {
                _callback(_event);
            });
        };
        /**
         * Registers the handler for the context menu
         *
         * @param {any} _node
         * @param {function} _callback
         * @param {object} _context
         * @returns {boolean}
         */
        this._registerContext = function (_node, _callback, _context) {
            var _a, _b, _c, _d;
            // Special handling for nextmatch: only build the menu once and just re-use it.
            if (!_context.menu && _context.actionLinks && ((_c = (_b = (_a = _context.parent) === null || _a === void 0 ? void 0 : _a.manager) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.nextmatch) && !_context.parent.manager.data.menu) {
                // Don't block load
                _context.parent.manager.data.menu = {}; // Set it to something or it will do this for every row
                window.setTimeout(function () {
                    _context.parent.manager.data.menu = _this._buildMenu(_context.actionLinks, [_context], null);
                    _context.parent.manager.data.menu.showAt(0, 0);
                    _context.parent.manager.data.menu.hide();
                }, 0);
            }
            var contextHandler = function (e) {
                var x = _node;
                //use different node and context for callback if event happens on parent
                var nodeToUse;
                var contextToUse;
                if (x.findActionTarget) {
                    var y = x.findActionTarget(e);
                    nodeToUse = y === null || y === void 0 ? void 0 : y.target;
                    contextToUse = y === null || y === void 0 ? void 0 : y.action;
                    e.originalEvent = e;
                }
                //Obtain the event object, this should not happen at any point
                if (!e) {
                    e = window.event;
                }
                // Close any open tooltip so they don't get in the way
                egw_global_1.egw(window).tooltipCancel();
                if (egw_menu_1._egw_active_menu) {
                    egw_menu_1._egw_active_menu.hide();
                }
                else if (!e.ctrlKey && e.which == 3 || e.which === 0 || e.type === 'tapandhold') // tap event indicates by 0
                 {
                    var _xy = _this._getPageXY(e);
                    var _implContext = {
                        event: e, posx: _xy.posx,
                        posy: _xy.posy,
                        innerText: (nodeToUse === null || nodeToUse === void 0 ? void 0 : nodeToUse.title) || _node.innerText,
                        target: nodeToUse || _node,
                    };
                    _callback.call(contextToUse || _context, _implContext, _this);
                }
                e.cancelBubble = !e.ctrlKey || e.which == 1;
                if (e.stopPropagation && e.cancelBubble) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                return !e.cancelBubble;
            };
            // Safari still needs the taphold to trigger contextmenu
            // Chrome has default event on touch and hold which acts like right click
            _this._handleTapHold(_node, contextHandler);
            if (!window.egwIsMobile()) {
                _node.addEventListener('contextmenu', contextHandler);
                (_d = _context.iface) === null || _d === void 0 ? void 0 : _d.handlers['popup'].push({ type: 'contextmenu', listener: contextHandler });
            }
        };
        /**
         * Groups and sorts the given action tree layer
         *
         * @param {type} _layer
         * @param {type} _links
         * @param {type} _parentGroup
         */
        this._groupLayers = function (_layer, _links, _parentGroup) {
            var _a;
            // Separate the multiple groups out of the layer
            var link_groups = {};
            for (var i = 0; i < _layer.children.length; i++) {
                var popupAction = _layer.children[i].action;
                // Check whether the link group of the current element already exists,
                // if not, create the group
                var grp = (_a = popupAction.group) !== null && _a !== void 0 ? _a : 999;
                if (typeof link_groups[grp] == "undefined") {
                    link_groups[grp] = [];
                }
                // Search the link data for this action object if none is found,
                // visible and enabled = true is assumed
                var visible = true;
                var enabled = true;
                if (typeof _links[popupAction.id] != "undefined") {
                    visible = _links[popupAction.id].visible;
                    enabled = _links[popupAction.id].enabled;
                }
                // Insert the element in order
                var inserted = false;
                var groupObj = {
                    "actionObj": popupAction,
                    "visible": visible,
                    "enabled": enabled,
                    "groups": []
                };
                for (var j = 0; j < link_groups[grp].length; j++) {
                    var elem = link_groups[grp][j].actionObj;
                    if (elem.order > popupAction.order) {
                        inserted = true;
                        link_groups[grp].splice(j, 0, groupObj);
                        break;
                    }
                }
                // If the object hasn't been inserted, add it to the end of the list
                if (!inserted) {
                    link_groups[grp].push(groupObj);
                }
                // If this child itself has children, group those elements too
                if (_layer.children[i].children.length > 0) {
                    _this._groupLayers(_layer.children[i], _links, groupObj);
                }
            }
            // Transform the link_groups object into a sorted array
            var groups = [];
            for (var k in link_groups) {
                groups.push({ "grp": k, "links": link_groups[k] });
            }
            groups.sort(function (a, b) {
                var ia = parseFloat(a.grp);
                var ib = parseFloat(b.grp);
                return (ia > ib) ? 1 : ((ia < ib) ? -1 : 0);
            });
            // Append the groups to the groups2 array
            var groups2 = [];
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                var item = groups_1[_i];
                groups2.push(item.links);
            }
            _parentGroup.groups = groups2;
        };
        /**
         * Build the menu layers
         *
         * @param {type} _menu
         * @param {type} _groups
         * @param {type} _selected
         * @param {type} _enabled
         * @param {type} _target
         */
        this._buildMenuLayer = function (_menu, _groups, _selected, _enabled, _target) {
            var _a, _b;
            var firstGroup = true;
            for (var _i = 0, _groups_1 = _groups; _i < _groups_1.length; _i++) {
                var item1 = _groups_1[_i];
                var firstElem = true;
                // Go through the elements of each group
                for (var _c = 0, item1_1 = item1; _c < item1_1.length; _c++) {
                    var link = item1_1[_c];
                    if (link.visible) {
                        // Add a separator after each group
                        if (!firstGroup && firstElem) {
                            _menu.addItem("", "-");
                        }
                        firstElem = false;
                        var item = _menu.addItem(link.actionObj.id, link.actionObj.caption, link.actionObj.iconUrl, undefined, link.actionObj.color, (_b = (_a = link.actionObj) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.level);
                        item.default = link.actionObj["default"];
                        // As this code is also used when a drag-drop popup menu is built,
                        // we have to perform this check
                        if (link.actionObj.type == "popup") {
                            item.set_hint(link.actionObj.hint);
                            item.set_checkbox(link.actionObj.checkbox);
                            item.set_checked(link.actionObj.checked);
                            if (link.actionObj.checkbox && link.actionObj.isChecked) {
                                item.set_checked(link.actionObj.isChecked.exec(link.actionObj, _selected));
                            }
                            item.set_groupIndex(link.actionObj.radioGroup);
                            if (link.actionObj.shortcut && !window.egwIsMobile()) {
                                var shortcut = link.actionObj.shortcut;
                                item.set_shortcutCaption(shortcut.caption);
                            }
                        }
                        item.set_data(link.actionObj);
                        if (link.enabled && _enabled) {
                            item.set_onClick(function (elem) {
                                // Pass the context
                                elem.data.menu_context = _this._context;
                                // Copy the "checked" state
                                if (typeof elem.data.checked != "undefined") {
                                    elem.data.checked = elem.checked;
                                }
                                elem.data.execute(_selected, _target);
                                if (typeof elem.data.checkbox != "undefined" && elem.data.checkbox) {
                                    return elem.data.checked;
                                }
                            });
                        }
                        else {
                            item.set_enabled(false);
                        }
                        // Append the parent groups
                        if (link.groups) {
                            _this._buildMenuLayer(item, link.groups, _selected, link.enabled, _target);
                        }
                    }
                }
                firstGroup = firstGroup && firstElem;
            }
        };
        /**
         * Builds the context menu from the given action links
         *
         * @param {type} _links
         * @param {type} _selected
         * @param {type} _target
         * @returns {egwMenu|EgwActionImplementation._buildMenu.menu}
         */
        this._buildMenu = function (_links, _selected, _target) {
            var _a, _b, _c;
            // Build a tree containing all actions
            var tree = { "root": [] };
            // Automatically add in Drag & Drop actions
            if (_this.auto_paste && !window.egwIsMobile() && (!((_a = _this._context) === null || _a === void 0 ? void 0 : _a.event) || ((_b = _this._context) === null || _b === void 0 ? void 0 : _b.event) && !((_c = _this._context.event) === null || _c === void 0 ? void 0 : _c.type.match(/touch/)))) {
                _this._addCopyPaste(_links, _selected);
            }
            for (var k in _links) {
                _links[k].actionObj.appendToTree(tree);
            }
            // We need the dummy object container in order to pass the array by
            // reference
            var groups = {
                "groups": []
            };
            if (tree.root.length > 0) {
                // Sort every action object layer by the given sort position and grouping
                _this._groupLayers(tree.root[0], _links, groups);
            }
            var menu = new egw_menu_1.egwMenu();
            // Build the menu layers
            _this._buildMenuLayer(menu, groups.groups, _selected, true, _target);
            return menu;
        };
        this._getPageXY = function getPageXY(event) {
            // document.body.scrollTop does not work in IE
            var scrollTop = document.body.scrollTop ? document.body.scrollTop :
                document.documentElement.scrollTop;
            var scrollLeft = document.body.scrollLeft ? document.body.scrollLeft :
                document.documentElement.scrollLeft;
            return { 'posx': (event.clientX + scrollLeft), 'posy': (event.clientY + scrollTop) };
        };
        /**
         * Automagically add in context menu items for copy and paste from
         * drag and drop actions, based on current clipboard and the accepted types
         *
         * @param {object[]} _links Actions for inclusion in the menu
         * @param {EgwActionObject[]} _selected Currently selected entries
         */
        this._addCopyPaste = function (_links, _selected) {
            var _a, _b;
            // Get a list of drag & drop actions
            var drag = _selected[0].getSelectedLinks('drag', true).links;
            var drop = _selected[0].getSelectedLinks('drop', true).links;
            // No drags & no drops means early exit (only by default added egw_cancel_drop does NOT count!)
            if ((!drag || jQuery.isEmptyObject(drag)) &&
                (!drop || jQuery.isEmptyObject(drop) ||
                    Object.keys(drop).length === 1 && typeof drop.egw_cancel_drop !== 'undefined')) {
                return;
            }
            // Find existing actions so we don't get copies
            var mgr = _selected[0].manager;
            var copy_action = mgr.getActionById('egw_copy');
            var add_action = mgr.getActionById('egw_copy_add');
            var clipboard_action = mgr.getActionById('egw_os_clipboard');
            var paste_action = mgr.getActionById('egw_paste');
            // Fake UI so we can simulate the position of the drop
            var ui = {
                position: { top: 0, left: 0 },
                offset: { top: 0, left: 0 }
            };
            if ((_a = _this._context) === null || _a === void 0 ? void 0 : _a.event) {
                var event_1 = _this._context.event.originalEvent || _this._context.event;
                ui.position = { top: event_1.pageY, left: event_1.pageX };
                ui.offset = { top: event_1.offsetY, left: event_1.offsetX };
            }
            // Create default copy menu action
            if (drag && !jQuery.isEmptyObject(drag)) {
                // Don't re-add if it's there
                if (copy_action == null) {
                    // Create a drag action that allows linking
                    copy_action = mgr.addAction('popup', 'egw_copy', window.egw.lang('Copy to clipboard'), window.egw.image('copy'), function (action, selected) {
                        var _a, _b;
                        // Copied, now add to clipboard
                        var clipboard = {
                            type: [],
                            selected: []
                        };
                        // When pasting we need to know the type of drag
                        for (var k in drag) {
                            if (drag[k].enabled && drag[k].actionObj.dragType.length > 0) {
                                clipboard.type = clipboard.type.concat(drag[k].actionObj.dragType);
                            }
                        }
                        clipboard.type = jQuery.uniqueSort(clipboard.type);
                        // egwAction is a circular structure and can't be stringified so just take what we want
                        // Hopefully that's enough for the action handlers
                        for (var k in selected) {
                            if (selected[k].id) {
                                clipboard.selected.push({
                                    id: selected[k].id,
                                    data: __assign(__assign({}, ((_b = (_a = window.egw.dataGetUIDdata(selected[k].id)) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {})), selected[k].data)
                                });
                            }
                        }
                        // Save it in session
                        window.egw.setSessionItem('phpgwapi', 'egw_clipboard', JSON.stringify(clipboard));
                    }, true);
                    copy_action.group = 2.5;
                }
                if (add_action == null) {
                    // Create an action to add selected to clipboard
                    add_action = mgr.addAction('popup', 'egw_copy_add', window.egw.lang('Add to clipboard'), window.egw.image('copy'), function (action, selected) {
                        var _a, _b;
                        // Copied, now add to clipboard
                        var clipboard = JSON.parse(window.egw.getSessionItem('phpgwapi', 'egw_clipboard')) || {
                            type: [],
                            selected: []
                        };
                        // When pasting we need to know the type of drag
                        for (var k in drag) {
                            if (drag[k].enabled && drag[k].actionObj.dragType.length > 0) {
                                clipboard.type = clipboard.type.concat(drag[k].actionObj.dragType);
                            }
                        }
                        clipboard.type = __spreadArrays(new Set(clipboard.type)).sort();
                        // egwAction is a circular structure and can't be stringified so just take what we want
                        // Hopefully that's enough for the action handlers
                        for (var k in selected) {
                            if (selected[k].id) {
                                clipboard.selected.push({
                                    id: selected[k].id,
                                    data: __assign(__assign({}, ((_b = (_a = window.egw.dataGetUIDdata(selected[k].id)) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {})), selected[k].data)
                                });
                            }
                        }
                        // Save it in session
                        window.egw.setSessionItem('phpgwapi', 'egw_clipboard', JSON.stringify(clipboard));
                    }, true);
                    add_action.group = 2.5;
                }
                if (clipboard_action == null) {
                    // Create an action to add selected to clipboard
                    clipboard_action = mgr.addAction('popup', 'egw_os_clipboard', window.egw.lang('Copy to OS clipboard'), window.egw.image('copy'), function (action) {
                        if (document.queryCommandSupported('copy')) {
                            jQuery(action.data.target).trigger('copy');
                        }
                    }, true);
                    clipboard_action.group = 2.5;
                }
                var os_clipboard_caption_1 = "";
                if ((_b = _this._context) === null || _b === void 0 ? void 0 : _b.event) {
                    os_clipboard_caption_1 = _this._context.event.target.innerText.trim().replaceAll("\n", " ");
                    clipboard_action.set_caption(window.egw.lang('Copy "%1"', os_clipboard_caption_1.length > 20 ? os_clipboard_caption_1.substring(0, 20) + '...' : os_clipboard_caption_1));
                    clipboard_action.data.target = _this._context.target;
                }
                jQuery(clipboard_action.data.target).off('copy').on('copy', function (event) {
                    try {
                        window.egw.copyTextToClipboard(os_clipboard_caption_1, clipboard_action.data.target, event).then(function (successful) {
                            // Fallback
                            if (typeof successful == "undefined") {
                                // Clear message
                                window.egw.message(window.egw.lang("'%1' copied to clipboard", os_clipboard_caption_1.length > 20 ? os_clipboard_caption_1.substring(0, 20) + '...' : os_clipboard_caption_1));
                                window.getSelection().removeAllRanges();
                                return false;
                            }
                            else {
                                // Show fail message
                                window.egw.message(window.egw.lang('Use Ctrl-C/Cmd-C to copy'));
                            }
                        });
                    }
                    catch (err) {
                    }
                });
                if (typeof _links[copy_action.id] == 'undefined') {
                    _links[copy_action.id] = {
                        "actionObj": copy_action,
                        "enabled": true,
                        "visible": true,
                        "cnt": 0
                    };
                }
                if (typeof _links[add_action.id] == 'undefined') {
                    _links[add_action.id] = {
                        "actionObj": add_action,
                        "enabled": true,
                        "visible": true,
                        "cnt": 0
                    };
                }
                if (typeof _links[clipboard_action.id] == 'undefined') {
                    _links[clipboard_action.id] = {
                        "actionObj": clipboard_action,
                        "enabled": os_clipboard_caption_1.length > 0,
                        "visible": _this._context ? os_clipboard_caption_1.length > 0 : true,
                        "cnt": 0
                    };
                }
            }
            // Create default paste menu item
            if (drop && !jQuery.isEmptyObject(drop)) {
                // Create paste action
                // This injects the clipboard data and calls the original handler
                var paste_exec = function (action, selected) {
                    // Add in clipboard as a sender
                    var clipboard = JSON.parse(window.egw.getSessionItem('phpgwapi', 'egw_clipboard'));
                    // Fake drop position
                    drop[action.id].actionObj.ui = ui;
                    // Set a flag so apps can tell the difference, if they need to
                    drop[action.id].actionObj.paste = true;
                    drop[action.id].actionObj.execute(clipboard.selected, selected[0]);
                    drop[action.id].actionObj.paste = false;
                };
                var clipboard = JSON.parse(window.egw.getSessionItem('phpgwapi', 'egw_clipboard')) || {
                    type: [],
                    selected: []
                };
                // Don't re-add if action already exists
                if (paste_action == null) {
                    paste_action = mgr.addAction('popup', 'egw_paste', window.egw.lang('Paste'), window.egw.image('editpaste'), paste_exec, true);
                    paste_action.group = 2.5;
                    paste_action.order = 9;
                    if (typeof paste_action.canHaveChildren !== "boolean") {
                        paste_action.canHaveChildren.push('drop');
                    }
                }
                // Set hint to something resembling current clipboard
                var hint_1 = window.egw.lang('Clipboard') + ":\n";
                paste_action.set_hint(hint_1);
                // Add titles of entries
                for (var i = 0; i < clipboard.selected.length; i++) {
                    var id = clipboard.selected[i].id.split('::');
                    window.egw.link_title(id[0], id[1], function (title) {
                        if (title) {
                            hint_1 += title + "\n";
                        }
                    }, paste_action);
                }
                // Add into links, so it's included in menu
                // @ts-ignore exec uses arguments:IArguments and therefor can consume them even if ts does not know it
                if (paste_action && paste_action.enabled.exec(paste_action, clipboard.selected, _selected[0])) {
                    if (typeof _links[paste_action.id] == 'undefined') {
                        _links[paste_action.id] = {
                            "actionObj": paste_action,
                            "enabled": false,
                            "visible": clipboard != null,
                            "cnt": 0
                        };
                    }
                    while (paste_action.children.length > 0) {
                        paste_action.children[0].remove();
                    }
                    // If nothing [valid] in the clipboard, don't bother with children
                    if (clipboard == null || typeof clipboard.type != 'object') {
                        return;
                    }
                    // Add in actual actions as children
                    for (var k in drop) {
                        if (k == "egw_cancel_drop") {
                            continue;
                        }
                        // Add some choices - need to be a copy, or they interfere with
                        // the original
                        //replace jQuery with spread operator
                        // set the Prototype of the copy set_onExecute is not available otherwise
                        var drop_clone = drop[k].actionObj.clone(); //Object.assign(Object.create(Object.getPrototypeOf(drop[k].actionObj)), drop[k].actionObj) //{...drop[k].actionObj};
                        //warning This method is really slow
                        //Object.setPrototypeOf(drop_clone, EgwAction.prototype)
                        var parent_1 = paste_action.parent === drop_clone.parent ? paste_action : (paste_action.getActionById(drop_clone.parent.id) || paste_action);
                        drop_clone.parent = parent_1;
                        drop_clone.onExecute = new egw_action_common_1.EgwFnct(_this, null, []);
                        drop_clone.children = [];
                        drop_clone.set_onExecute(paste_exec);
                        parent_1.children.push(drop_clone);
                        parent_1.allowOnMultiple = paste_action.allowOnMultiple && drop_clone.allowOnMultiple;
                        _links[k] = Object.assign({}, drop[k]);
                        _links[k].actionObj = drop_clone;
                        // Drop is allowed if clipboard types intersect drop types
                        _links[k].enabled = false;
                        _links[k].visible = false;
                        for (var i = 0; i < drop_clone.acceptedTypes.length; i++) {
                            if (clipboard.type.indexOf(drop_clone.acceptedTypes[i]) != -1) {
                                _links[paste_action.id].enabled = true;
                                _links[k].enabled = true;
                                _links[k].visible = true;
                                break;
                            }
                        }
                    }
                }
            }
        };
    }
    return EgwPopupActionImplementation;
}());
exports.EgwPopupActionImplementation = EgwPopupActionImplementation;
/**
 * @deprecated use uppercase class
 */
var egwPopupActionImplementation = /** @class */ (function (_super) {
    __extends(egwPopupActionImplementation, _super);
    function egwPopupActionImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwPopupActionImplementation;
}(EgwPopupActionImplementation));
exports.egwPopupActionImplementation = egwPopupActionImplementation;
var _popupActionImpl = null;
function getPopupImplementation() {
    if (!_popupActionImpl) {
        _popupActionImpl = new EgwPopupActionImplementation();
    }
    return _popupActionImpl;
}
exports.getPopupImplementation = getPopupImplementation;
