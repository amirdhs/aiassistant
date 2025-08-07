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
exports.Et2Tree = exports.composedPathContains = void 0;
var egw_global_1 = require("../../jsapi/egw_global");
var FindSelectOptions_1 = require("../Et2Select/FindSelectOptions");
var Et2WidgetWithSelectMixin_1 = require("../Et2Select/Et2WidgetWithSelectMixin");
var lit_1 = require("lit");
var repeat_js_1 = require("lit/directives/repeat.js");
var shoelace_1 = require("../Styles/shoelace");
var property_js_1 = require("lit/decorators/property.js");
var state_js_1 = require("lit/decorators/state.js");
var egw_action_1 = require("../../egw_action/egw_action");
var et2_core_DOMWidget_1 = require("../et2_core_DOMWidget");
var EgwActionObject_1 = require("../../egw_action/EgwActionObject");
var EgwDragDropShoelaceTree_1 = require("../../egw_action/EgwDragDropShoelaceTree");
var egw_action_constants_1 = require("../../egw_action/egw_action_constants");
var Et2Tree_styles_1 = require("./Et2Tree.styles");
/**
 * checks if the event has an Element in its composedPath that satisfies the Tag, className or both
 * @param _ev
 * @param tag
 * @param className
 * @returns true iff tag and classname are satisfied on the same Element somewhere in the composedPath and false otherwise
 */
exports.composedPathContains = function (_ev, tag, className) {
    // Tag and classname is given
    // check if one element has given tag with given class
    if (tag && className) {
        return _ev.composedPath().some(function (el) {
            var _a, _b;
            return ((_a = el === null || el === void 0 ? void 0 : el.classList) === null || _a === void 0 ? void 0 : _a.contains(className)) && ((_b = el === null || el === void 0 ? void 0 : el.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === tag.toLowerCase();
        });
    }
    // only classname is given
    // check if one element has given class
    if (className && !tag)
        return _ev.composedPath().some(function (el) {
            var _a;
            return (_a = el === null || el === void 0 ? void 0 : el.classList) === null || _a === void 0 ? void 0 : _a.contains(className);
        });
    // only tag is given
    // check if one element has given tag
    if (tag && !className)
        return _ev.composedPath().some(function (el) {
            var _a;
            return ((_a = el === null || el === void 0 ? void 0 : el.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === tag.toLowerCase();
        });
    return false;
};
/**
 * @event {{id: String, item:SlTreeItem}} sl-expand emmited when tree item expands
 * //TODO add for other events
 * @since 23.1.x
 *
 * @event et2-click Emitted when a tree item is clicked.  Clicks on the expand / collapse button and other slotted contents are excluded
 */
var Et2Tree = /** @class */ (function (_super) {
    __extends(Et2Tree, _super);
    function Et2Tree() {
        var _this = _super.call(this) || this;
        _this.multiple = false;
        /**
         * If true, only leafs (NOT folders) are selectable
         */
        _this.leafOnly = false;
        //onselect and oncheck only appear in multiselectTree
        // @property()
        // onselect // description: "Javascript executed when user selects a node"
        // @property()
        // oncheck // description: "Javascript executed when user checks a node"
        _this.highlighting = false; // description: "Add highlighting class on hovered over item, highlighting is disabled by default"
        _this.autoloading = ""; //description: "JSON URL or menuaction to be called for nodes marked with child=1, but not having children, getSelectedNode() contains node-id"
        _this.imagePath = (egw_global_1.egw === null || egw_global_1.egw === void 0 ? void 0 : egw_global_1.egw.webserverUrl) + "/api/templates/default/images/dhtmlxtree/"; //TODO we will need a different path here! maybe just rename the path?
        //     description: "Directory for tree structure images, set on server-side to 'dhtmlx' subdir of templates image-directory"
        _this.value = [];
        /**
         * checks whether item should be drawn open or closed
         * also sets selectOption.open if necessary
         * @param selectOption
         * @returns true iff item is in expanded state
         */
        _this.calculateExpandState = function (selectOption) {
            if (selectOption.open) {
                return true;
            }
            return false;
        };
        _this._selectOptions = [];
        _this._optionTemplate = _this._optionTemplate.bind(_this);
        _this.selectedNodes = [];
        return _this;
    }
    Object.defineProperty(Et2Tree.prototype, "selected", {
        /**
         * get the first selected node using attributes on the shadow root elements
         */
        get: function () {
            return this.shadowRoot.querySelector("sl-tree-item[selected]");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Tree.prototype, "_tree", {
        get: function () { var _a; return (_a = this.shadowRoot.querySelector('sl-tree')) !== null && _a !== void 0 ? _a : null; },
        enumerable: false,
        configurable: true
    });
    ;
    Et2Tree.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        // Actions can't be initialized without being connected to InstanceManager
        if (this.actions && Object.values(this.actions).length) {
            this._initActions();
            this._link_actions(this.actions);
        }
    };
    Et2Tree.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._currentSlTreeItem = null;
        this.selectedNodes.splice(0, this.selectedNodes.length);
    };
    Et2Tree.prototype.destroy = function () {
        if (this._actionManager) {
            // Delete all actions
            this._actionManager.remove();
            this._actionManager = undefined;
        }
    };
    Et2Tree.prototype._initCurrent = function () {
        var _a;
        this._currentSlTreeItem = this.selected;
        this._currentOption = this._currentSlTreeItem ? this.getNode((_a = this._currentSlTreeItem) === null || _a === void 0 ? void 0 : _a.id) : null;
    };
    Et2Tree.prototype.firstUpdated = function () {
        var _this = this;
        var _a, _b;
        if (this.autoloading) {
            // @ts-ignore from static get properties
            var url = this.autoloading;
            if (url.charAt(0) != '/' && url.substr(0, 4) != 'http') {
                url = '/json.php?menuaction=' + url;
            }
            this.autoloading = url;
        }
        // Check if top level should be autoloaded
        if (this.autoloading && !((_a = this._selectOptions) === null || _a === void 0 ? void 0 : _a.length)) {
            this.lazyLoading = this.handleLazyLoading({ item: this._selectOptions }).then(function (results) {
                var _a, _b;
                _this._selectOptions = (_b = (_a = results === null || results === void 0 ? void 0 : results.children) !== null && _a !== void 0 ? _a : results === null || results === void 0 ? void 0 : results.item) !== null && _b !== void 0 ? _b : [];
                _this._initCurrent();
                _this.requestUpdate("_selectOptions");
                _this.updateComplete.then(function (value) {
                    if (value) {
                        _this._link_actions(_this.actions);
                    }
                });
            });
        }
        if ((_b = this._selectOptions) === null || _b === void 0 ? void 0 : _b.length)
            this._initCurrent();
        // Actions can't be initialized without being connected to InstanceManager
        if (this.actions && Object.values(this.actions).length) {
            this._initActions();
            this._link_actions(this.actions);
        }
    };
    Et2Tree.prototype.updated = function (_changedProperties) {
        _super.prototype.updated.call(this, _changedProperties);
    };
    //Sl-Trees handle their own onClick events
    Et2Tree.prototype._handleClick = function (_ev) {
        var _a, _b, _c;
        // check if not expand icon (> or v) was clicked, we have an onclick handler and a string value
        if (!(_ev.composedPath()[0].tagName === 'svg' &&
            (_ev.composedPath()[0].classList.contains('bi-chevron-right') ||
                _ev.composedPath()[0].classList.contains('bi-chevron-down'))) &&
            typeof this.onclick === "function" && typeof _ev.target.value === "string") {
            this.onclick(_ev.target.value, this, (_b = (_a = this._previousOption) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : (_c = this._previousOption) === null || _c === void 0 ? void 0 : _c.id);
        }
    };
    Object.defineProperty(Et2Tree, "styles", {
        get: function () {
            return [
                shoelace_1.default,
                _super.styles,
                Et2Tree_styles_1.default
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Tree.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        /**
         * Set Actions on the widget
         *
         * Each action is defined as an object:
         *
         * move: {
         *      type: "drop",
         *      acceptedTypes: "mail",
         *      icon:   "move",
         *      caption:	"Move to"
         *      onExecute:      javascript:mail_move"
         * }
         *
         * This will turn the widget into a drop target for "mail" drag types.  When "mail" drag types are dropped,
         * the global function mail_move(egwAction action, egwActionObject sender) will be called.  The ID of the
         * dragged "mail" will be in sender.id, some information about the sender will be in sender.context.  The
         * etemplate2 widget involved can typically be found in action.parent.data.widget, so your handler
         * can operate in the widget context easily.  The location varies depending on your action though.  It
         * might be action.parent.parent.data.widget
         *
         * To customise how the actions are handled for a particular widget, override _link_actions().  It handles
         * the more widget-specific parts.
         *
         * @param {object} actions {ID: {attributes..}+} map of egw action information
         * @see api/src/Etemplate/Widget/Nextmatch.php egw_actions() method
         */
        set: function (actions) {
            this._actions = actions;
            if (this.id == "" || typeof this.id == "undefined") {
                if (this.isConnected) {
                    window.egw().debug("warn", "Widget should have an ID if you want actions", this);
                }
                // No id because we're not done yet, try again later
                return;
            }
            if (this.isConnected) {
                this._initActions();
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2Tree.prototype.loadFromXML = function () {
        var new_options = [];
        if (this.id) {
            new_options = FindSelectOptions_1.find_select_options(this)[1];
        }
        if (new_options === null || new_options === void 0 ? void 0 : new_options.length) {
            this._selectOptions = new_options;
        }
    };
    /**
     * Initialize the action manager and add some actions to it
     * @private
     */
    Et2Tree.prototype._initActions = function () {
        // Only look 1 level deep
        // @ts-ignore exists from Et2Widget
        var gam = egw_action_1.egw_getActionManager(this.egw().appName, true, 1);
        if (typeof this._actionManager != "object") {
            // @ts-ignore exists from Et2Widget
            if (this.getInstanceManager() && gam.getActionById(this.getInstanceManager().uniqueId, 1) !== null) {
                // @ts-ignore exists from Et2Widget
                gam = gam.getActionById(this.getInstanceManager().uniqueId, 1);
            }
            if (gam.getActionById(this.id, 1) != null) {
                this._actionManager = gam.getActionById(this.id, 1);
            }
            else {
                this._actionManager = gam.addAction("actionManager", this.id);
            }
        }
        if (this._actionManager) {
            // @ts-ignore egw() exists on this
            this._actionManager.updateActions(this.actions, this.egw().appName);
            // @ts-ignore
            if (this.options.default_execute) {
                this._actionManager.setDefaultExecute(this.options.default_execute);
            }
            // Put a reference to the widget into the action stuff, so we can
            // easily get back to widget context from the action handler
            this._actionManager.data = { widget: this };
        }
    };
    /** Sets focus on the control. */
    Et2Tree.prototype.focus = function (options) {
        var _a;
        (_a = this._tree) === null || _a === void 0 ? void 0 : _a.focus();
    };
    /** Removes focus from the control. */
    Et2Tree.prototype.blur = function () {
        this._tree.blur();
    };
    /**
     * @deprecated assign to onopenstart
     * @param _handler
     */
    Et2Tree.prototype.set_onopenstart = function (_handler) {
        this.onopenstart = _handler;
    };
    /**
     * @deprecated assign to onopenend
     * @param _handler
     */
    Et2Tree.prototype.set_onopenend = function (_handler) {
        this.onopenend = _handler;
    };
    /**
     * @deprecated assign to onclick
     * @param _handler
     */
    Et2Tree.prototype.set_onclick = function (_handler) {
        this.installHandler('onclick', _handler);
    };
    /**
     * @deprecated assign to onselect
     * @param _handler
     */
    Et2Tree.prototype.set_onselect = function (_handler) {
        this.onselect = _handler;
    };
    Et2Tree.prototype.set_badge = function (_id, _value) {
        this.getNode(_id).badge = _value;
        this.requestUpdate();
    };
    /**
     * @return currently selected Item or First Item, if no selection was made yet
     */
    Et2Tree.prototype.getSelectedItem = function () {
        return this._currentOption || (this._selectOptions ? this._selectOptions[0] : null);
    };
    /**
     * getSelectedNode, retrieves the full node of the selected Item
     * @return {SlTreeItem} full SlTreeItem
     */
    Et2Tree.prototype.getSelectedNode = function () {
        return this._currentSlTreeItem;
    };
    Et2Tree.prototype.getDomNode = function (_id) {
        return this.shadowRoot.querySelector('sl-tree-item[id="' + _id.replace(/"/g, '\\"') + '"');
    };
    /**
     * return the Item with given _id, was called getDomNode(_id) in dhtmlxTree
     * @param _id
     */
    Et2Tree.prototype.getNode = function (_id) {
        var _a;
        if (_id == undefined) {
            debugger;
        }
        // TODO: Look into this._search(), find out why it doesn't always succeed
        return (_a = this._search(_id, this._selectOptions)) !== null && _a !== void 0 ? _a : this.optionSearch(_id, this._selectOptions, 'id', 'item');
    };
    /**
     * set the text of item with given id to new label
     * @param _id
     * @param _label
     * @param _tooltip
     */
    Et2Tree.prototype.setLabel = function (_id, _label, _tooltip) {
        var tooltip = _tooltip || (this.getNode(_id) && this.getNode(_id).tooltip ? this.getNode(_id).tooltip : "");
        var i = this.getNode(_id);
        i.tooltip = tooltip;
        i.text = _label;
    };
    /**
     * getLabel, gets the Label of of an item by id
     * @param _id ID of the node
     * @return _label
     */
    Et2Tree.prototype.getLabel = function (_id) {
        var _a;
        return (_a = this.getNode(_id)) === null || _a === void 0 ? void 0 : _a.text;
    };
    /**
     * getSelectedLabel, retrieves the Label of the selected Item
     * @return string or null
     */
    Et2Tree.prototype.getSelectedLabel = function () {
        var _a;
        return (_a = this.getSelectedItem()) === null || _a === void 0 ? void 0 : _a.text;
    };
    /**
     * deleteItem, deletes an item by id
     * @param _id ID of the node
     * @param _selectParent select the parent node true/false TODO unused atm
     * @return void
     */
    Et2Tree.prototype.deleteItem = function (_id, _selectParent) {
        this._deleteItem(_id, this._selectOptions);
        // Update action
        // since the action ID has to = this.id, getObjectById() won't work
        var treeObj = egw_action_1.egw_getAppObjectManager(false).getObjectById(this.id);
        for (var i = 0; i < treeObj.children.length; i++) {
            if (treeObj.children[i].id == _id) {
                treeObj.children.splice(i, 1);
            }
        }
        this.requestUpdate();
    };
    /**
     * Updates a leaf of the tree by requesting new information from the server using the
     * autoloading attribute.
     *
     * @param {string} _id ID of the node
     * @param {Object} [data] If provided, the item is refreshed directly  with
     *    the provided data instead of asking the server
     * @return Promise
     */
    Et2Tree.prototype.refreshItem = function (_id, data) {
        var _this = this;
        /* TODO currently always ask the sever
        if (typeof data != "undefined" && data != null)
        {

            //data seems never to be used
            this.refreshItem(_id, null)
        } else*/
        {
            var item_1 = this.getNode(_id);
            // if the item does not exist in the tree yet no need to refresh
            if (item_1 == null) {
                return Promise.resolve();
            }
            return this.handleLazyLoading(item_1).then(function (result) {
                Object.assign(item_1, result);
                _this.requestUpdate("_selectOptions");
            });
        }
    };
    /**
     * Does nothing
     * @param _id
     * @param _style
     */
    Et2Tree.prototype.setStyle = function (_id, _style) {
        var temp = this.getDomNode(_id).defaultSlot;
        if (!temp)
            return 0;
        temp.setAttribute("style", _style);
    };
    /**
     * manipulate the classes of a tree item
     * this sets the class property of the item (just like php might set it).
     * This triggers the class attribute of the sl-tree-item to be set
     * mode "=" remove all classes and set only the given one
     * mode "+" add the given class
     * mode "-" remove the given class
     * @param _id
     * @param _className
     * @param _mode
     */
    Et2Tree.prototype.setClass = function (_id, _className, _mode) {
        var item = this.getNode(_id);
        if (item == null)
            return;
        if (!item.class)
            item.class = "";
        switch (_mode) {
            case "=":
                item.class = _className;
                break;
            case "-":
                item.class = item.class.replace(_className, "");
                break;
            case "+":
                if (!item.class.includes(_className)) {
                    if (item.class == "") {
                        item.class = _className;
                    }
                    else {
                        item.class += " " + _className;
                    }
                }
                break;
        }
        if (item.class.trim() === "")
            item.class = undefined;
    };
    /**
     * getTreeNodeOpenItems
     *
     * @param {string} _nodeID the nodeID where to start from (initial node) 0 means for all items
     * @param {string} mode the mode to run in: "forced" fakes the initial node openState to be open
     * @return {object} structured array of node ids: array(message-ids)
     */
    Et2Tree.prototype.getTreeNodeOpenItems = function (_nodeID, mode) {
        var _this = this;
        var subItems = (_nodeID == 0) ?
            this._selectOptions.map(function (option) { return _this.getDomNode(option.id); }) : //NodeID == 0 means that we want all tree Items
            this.getDomNode(_nodeID).getChildrenItems(); // otherwise get the subItems of the given Node
        var oS;
        var PoS;
        var rv;
        var returnValue = (_nodeID == 0) ? [] : [_nodeID]; // do not keep 0 in the return value...
        var modetorun = "none";
        if (mode) {
            modetorun = mode;
        }
        PoS = (_nodeID == 0) ? 1 : (this.getDomNode(_nodeID).expanded ? 1 : 0);
        if (modetorun == "forced")
            PoS = 1;
        if (PoS == 1) {
            for (var _i = 0, subItems_1 = subItems; _i < subItems_1.length; _i++) {
                var item = subItems_1[_i];
                //oS = this.input.getOpenState(z[i]);
                oS = item.expanded; // iff current item is expanded go deeper
                //if (oS == -1) {returnValue.push(z[i]);}
                //if (oS == 0) {returnValue.push(z[i]);}
                if (!oS) {
                    returnValue.push(item.id);
                }
                //if (oS == 1)
                else {
                    rv = this.getTreeNodeOpenItems(item.id);
                    for (var _a = 0, rv_1 = rv; _a < rv_1.length; _a++) {
                        var recId = rv_1[_a];
                        returnValue.push(recId);
                    }
                }
            }
        }
        //alert(returnValue.join('#,#'));
        return returnValue;
    };
    /**
     * @param _id
     * @param _newItemId
     * @param _label
     * @return Promise
     */
    Et2Tree.prototype.renameItem = function (_id, _newItemId, _label) {
        this.getNode(_id).id = _newItemId;
        // Update action
        // since the action ID has to = this.id, getObjectById() won't work
        var treeObj = egw_action_1.egw_getAppObjectManager(false).getObjectById(this.id);
        for (var _i = 0, _a = treeObj.children; _i < _a.length; _i++) {
            var actionObject = _a[_i];
            if (actionObject.id == _id) {
                actionObject.id = _newItemId;
                if (actionObject.iface) {
                    actionObject.iface.id = _newItemId;
                }
                break;
            }
        }
        if (typeof _label != 'undefined')
            this.setLabel(_newItemId, _label);
        this.requestUpdate();
        return this.updatedComplete();
    };
    Et2Tree.prototype.focusItem = function (_id) {
        var item = this.getNode(_id);
        item.focused = true;
    };
    /**
     * scroll to item with given id
     * make sure all parents of the item are expanded else scroll will fail
     * @param _id
     */
    Et2Tree.prototype.scrollToItem = function (_id) {
        var item = this.getDomNode(_id);
        if (item == null)
            return;
        item.scrollIntoView(false);
    };
    /**
     * scrolls to the (first) selected slTreeItem into view
     * this function delays, if not all parents of the item are expanded
     *
     * @return boolean true: selected item scrolled into view, false: selected item not found / loaded
     */
    Et2Tree.prototype.scrollToSelected = function () {
        var _a, _b;
        try {
            var item_2 = this.shadowRoot.querySelector('sl-tree-item[selected]');
            if (!item_2) {
                return false;
            }
            //this might not work because item pant is not expanded
            //in that case expand all parents and wait before trying to scroll again
            var parent_1 = ((_a = item_2.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === "SL-TREE-ITEM" ? item_2.parentElement : null;
            //scroll and exit if parent does not need expansion
            if (!parent_1 || parent_1.expanded) {
                item_2.scrollIntoView(false);
                return true;
            }
            //fallback
            //expand all parent items
            while (parent_1) {
                if (!parent_1.expanded)
                    parent_1.expanded = true;
                parent_1 = ((_b = parent_1.parentElement) === null || _b === void 0 ? void 0 : _b.tagName) === "SL-TREE-ITEM" ? parent_1.parentElement : null;
            }
            this.updateComplete.then(function () { return item_2.scrollIntoView(false); });
        }
        catch (e) {
            console.log("Could not scroll to item");
        }
        return true;
    };
    /**
     * Open an item, which might trigger lazy-loading
     *
     * @param string _id
     * @return Promise
     */
    Et2Tree.prototype.openItem = function (_id) {
        var _this = this;
        var item = this.getNode(_id);
        if (item) {
            item.open = 1;
        }
        this.requestUpdate();
        return this.updateComplete.then(function () { return _this.lazyLoading ? _this.lazyLoading : Promise.resolve(); });
    };
    /**
     * hasChildren
     *
     * @param _id ID of the node
     * @return the number of childelements
     */
    Et2Tree.prototype.hasChildren = function (_id) {
        var _a;
        return (_a = this.getNode(_id).item) === null || _a === void 0 ? void 0 : _a.length;
    };
    /**
     * reSelectItem, reselects an item by id
     * @param _id ID of the node
     */
    Et2Tree.prototype.reSelectItem = function (_id) {
        this._previousOption = this._currentOption;
        this._currentOption = this.getNode(_id);
        var node = this.getDomNode(_id);
        if (node) {
            this._currentSlTreeItem = node;
            node.selected = true;
        }
    };
    /**
     * Set or unset checkbox of given node and all it's children based on given value
     *
     * @param _id
     * @param _value "toggle" means the current nodes value, as the toggle already happened by default
     * @return boolean false if _id was not found
     */
    Et2Tree.prototype.setSubChecked = function (_id, _value) {
        var _this = this;
        var node = this.getDomNode(_id);
        if (!node)
            return false;
        if (_value !== 'toggle') {
            node.selected = _value;
        }
        Array.from(node.querySelectorAll('sl-tree-item')).forEach(function (item) {
            item.selected = node.selected;
        });
        // set selectedNodes and value
        this.selectedNodes = [];
        this.value = [];
        Array.from(this._tree.querySelectorAll('sl-tree-item')).forEach(function (item) {
            if (item.selected) {
                _this.selectedNodes.push(item);
                _this.value.push(item.id);
            }
        });
        return true;
    };
    Et2Tree.prototype.getUserData = function (_nodeId, _name) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.getNode(_nodeId)) === null || _a === void 0 ? void 0 : _a.userdata) === null || _b === void 0 ? void 0 : _b.find(function (elem) { return elem.name === _name; })) === null || _c === void 0 ? void 0 : _c.content;
    };
    /**
     * Handle drag events from inside the shadowRoot
     *
     * events get re-targeted to the tree as they bubble, and action can't tell the difference between leaves
     * inside the shadowRoot
     *
     * @param event
     * @returns {Promise<void>}
     * @protected
     */
    Et2Tree.prototype.handleDragEvent = function (event) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var option, current, typeMap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _b.sent();
                        option = event.composedPath().find(function (element) {
                            return element.tagName == "SL-TREE-ITEM";
                        });
                        if (!option) {
                            return [2 /*return*/];
                        }
                        // Remove drop hover from any parent nodes
                        if (event.type == "dragenter") {
                            event.stopPropagation();
                            current = option.parentElement;
                            while (current) {
                                current.classList.remove("draggedOver", "drop-hover");
                                current = current.parentElement;
                            }
                        }
                        // Ignore/stop events from child nodes, unless it's dragenter and the parent sl-tree-item isn't hovered yet
                        if (["dragenter", "dragleave"].includes(event.type) && event.target != option && event.composedPath().includes(option)) {
                            event.stopPropagation();
                            if (event.type != "dragenter" || option.classList.contains("drop-hover")) {
                                return [2 /*return*/];
                            }
                        }
                        typeMap = {
                            dragstart: egw_action_constants_1.EGW_AI_DRAG,
                            dragenter: egw_action_constants_1.EGW_AI_DRAG_ENTER,
                            dragleave: egw_action_constants_1.EGW_AI_DRAG_OUT,
                        };
                        this.widget_object.iface.triggerEvent((_a = typeMap[event.type]) !== null && _a !== void 0 ? _a : event.type, event);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handle a change in selected items
     *
     * @returns {Promise<void>}
     * @protected
     */
    Et2Tree.prototype.handleSelectionChange = function (event) {
        var _this = this;
        var _a, _b, _c, _d;
        // Filter out unselectable nodes
        var nodes = event.detail.selection.filter(function (node) { return !node.hasAttribute("unselectable"); });
        if (nodes.length != event.detail.selection.length) {
            event.detail.selection.forEach(function (n) {
                if (!n.hasAttribute("unselectable")) {
                    return;
                }
                n.removeAttribute("selected");
                if (n.querySelectorAll(":scope > sl-tree-item").length > 0) {
                    n.toggleAttribute("expanded");
                }
            });
            event.stopPropagation();
            this.requestUpdate("value");
            return;
        }
        this._previousOption = (_a = this._currentOption) !== null && _a !== void 0 ? _a : (this.value.length ? this.getNode(this.value[0]) : null);
        this._currentOption = (_b = this.getNode(nodes[0].id)) !== null && _b !== void 0 ? _b : this.optionSearch(nodes[0].id, this._selectOptions, 'id', 'item');
        var ids = event.detail.selection.map(function (i) { return i.id; });
        // implemented unlinked multiple
        if (this.multiple) {
            var idx = this.value.indexOf(ids[0]);
            if (idx < 0) {
                this.value.push(ids[0]);
            }
            else {
                this.value.splice(idx, 1);
            }
            // sync tree-items selected attribute with this.value
            this.selectedNodes = [];
            Array.from(this._tree.querySelectorAll('sl-tree-item')).forEach(function (item) {
                if (_this.value.includes(item.id)) {
                    item.setAttribute("selected", "");
                    _this.selectedNodes.push(item);
                }
                else {
                    item.removeAttribute("selected");
                }
            });
            this._tree.requestUpdate();
        }
        else {
            this.value = this.multiple ? ids !== null && ids !== void 0 ? ids : [] : (_c = ids[0]) !== null && _c !== void 0 ? _c : "";
        }
        event.detail.previous = (_d = this._previousOption) === null || _d === void 0 ? void 0 : _d.id;
        this._currentSlTreeItem = nodes[0];
        /* implemented unlinked-multiple
        if(this.multiple)
        {
            this.selectedNodes = event.detail.selection
        }*/
    };
    Et2Tree.prototype.finishedLazyLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lazyLoading];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.lazyLoading];
                }
            });
        });
    };
    /**
     * Overridable, add style
     * @returns {TemplateResult<1>}
     */
    Et2Tree.prototype.styleTemplate = function () {
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
    };
    //this.selectOptions = find_select_options(this)[1];
    Et2Tree.prototype._optionTemplate = function (selectOption) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // Check to see if node is marked as open with no children.  If autoloadable, load the children
        var expandState = (this.calculateExpandState(selectOption));
        //mail sends multiple image options depending on folder state
        var img;
        if (selectOption.open) //if item is a folder and it is opened use im1
         {
            img = selectOption.im1;
        }
        else if (selectOption.child || ((_a = selectOption.item) === null || _a === void 0 ? void 0 : _a.length) > 0) // item is a folder and closed use im2
         {
            img = selectOption.im2;
        }
        else // item is a leaf use im0
         {
            img = selectOption.im0;
        }
        //fallback to try and set icon if everything else failed
        if (!img)
            img = (_d = (_c = (_b = selectOption.icon) !== null && _b !== void 0 ? _b : selectOption.im0) !== null && _c !== void 0 ? _c : selectOption.im1) !== null && _d !== void 0 ? _d : selectOption.im2;
        // lazy iff "child" is set and "children" is empty or children does not exist in the first place
        var lazy;
        if (typeof selectOption.item !== "undefined") {
            lazy = (((_e = selectOption.item) === null || _e === void 0 ? void 0 : _e.length) === 0 && selectOption.child) || (selectOption.child && !selectOption.item);
        }
        else {
            lazy = (typeof selectOption.children === "undefined" || ((_f = selectOption.children) === null || _f === void 0 ? void 0 : _f.length) == 0)
                && selectOption.child;
        }
        var value = (_g = selectOption.value) !== null && _g !== void 0 ? _g : selectOption.id;
        if (expandState && this.autoloading && lazy) {
            this.updateComplete.then(function () {
                var _a;
                (_a = _this.getDomNode(value)) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("sl-lazy-load"));
            });
        }
        var selected = typeof this.value == "string" && this.value == value || Array.isArray(this.value) && this.value.includes(value);
        var draggable = ((_j = (_h = this.widget_object) === null || _h === void 0 ? void 0 : _h.actionLinks) === null || _j === void 0 ? void 0 : _j.filter(function (al) { var _a; return ((_a = al.actionObj) === null || _a === void 0 ? void 0 : _a.type) == "drag"; }).length) > 0;
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <sl-tree-item\n                    part=\"item\"\n                    exportparts=\"checkbox, label, item:item-item\"\n                    id=", "\n                    title=", "\n                    class=", "\n                    ?selected=", "\n                    ?unselectable=", "\n                    ?expanded=", "\n                    ?disabled=", "\n                    ?lazy=", "\n                    ?focused=", "\n                    draggable=", "\n                    @click=", "\n                    @sl-lazy-load=", "\n\t\t\t\t\t@sl-expand=", "\n\t\t\t\t\t@sl-collapse=", "\n            >\n\n\n                <et2-image src=\"", "\"></et2-image>\n                <span part=\"label_text\" class=\"tree-item__label\">\n\t\t\t\t\t", "\n\t\t\t\t</span>\n                ", "\n\n                ", "\n            </sl-tree-item>"], ["\n            <sl-tree-item\n                    part=\"item\"\n                    exportparts=\"checkbox, label, item:item-item\"\n                    id=", "\n                    title=", "\n                    class=", "\n                    ?selected=", "\n                    ?unselectable=", "\n                    ?expanded=", "\n                    ?disabled=", "\n                    ?lazy=", "\n                    ?focused=", "\n                    draggable=", "\n                    @click=",
            "\n                    @sl-lazy-load=",
            "\n\t\t\t\t\t@sl-expand=",
            "\n\t\t\t\t\t@sl-collapse=",
            "\n            >\n\n\n                <et2-image src=\"", "\"></et2-image>\n                <span part=\"label_text\" class=\"tree-item__label\">\n\t\t\t\t\t", "\n\t\t\t\t</span>\n                ",
            "\n\n                ", "\n            </sl-tree-item>"])), value, selectOption.tooltip || selectOption.title || lit_1.nothing, selectOption.class || lit_1.nothing, selected && !selectOption.unselectable, selectOption.unselectable, expandState, selectOption.disabled, lazy, selectOption.focused || lit_1.nothing, draggable, function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        // Don't react to expand or children
                        if (event.target.hasAttribute("slot") || !((_a = event.target) === null || _a === void 0 ? void 0 : _a.closest("sl-tree-item"))) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _d.sent();
                        (_b = event.target) === null || _b === void 0 ? void 0 : _b.closest("sl-tree-item").dispatchEvent(new CustomEvent("et2-click", {
                            detail: { item: (_c = event.target) === null || _c === void 0 ? void 0 : _c.closest("sl-tree-item") },
                            bubbles: true,
                            composed: true
                        }));
                        return [2 /*return*/];
                }
            });
        }); }, function (event) {
            // No need for this to bubble up, we'll handle it (otherwise the parent leaf will load too)
            event.stopPropagation();
            _this.lazyLoading = _this.handleLazyLoading(selectOption).then(function (result) {
                var _a, _b;
                // TODO: We already have the right option in context.  Look into this.getNode(), find out why it's there.  It doesn't do a deep search.
                var parentNode = (_a = selectOption !== null && selectOption !== void 0 ? selectOption : _this.getNode(selectOption.id)) !== null && _a !== void 0 ? _a : _this.optionSearch(selectOption.id, _this._selectOptions, 'id', 'item');
                if (!parentNode || !parentNode.item || parentNode.item.length == 0) {
                    parentNode.child = false;
                    parentNode.open = false;
                    _this.requestUpdate("lazy", "true");
                }
                _this.getDomNode((_b = parentNode.id) !== null && _b !== void 0 ? _b : parentNode.value).loading = false;
                _this.requestUpdate("_selectOptions");
            });
        }, function (event) {
            if (event.target.id === selectOption.id) {
                selectOption.open = 1;
                _this.requestUpdate("_selectOptions");
            }
        }, function (event) {
            if (event.target.id === selectOption.id) {
                selectOption.open = 0;
                _this.requestUpdate("_selectOptions");
            }
        }, img !== null && img !== void 0 ? img : lit_1.nothing, (_k = selectOption.label) !== null && _k !== void 0 ? _k : selectOption.text, (selectOption.badge) ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\t\t\t<sl-badge pill variant=\"neutral\">", "</sl-badge>\n\t\t\t\t\t"], ["\n\t\t\t\t\t\t<sl-badge pill variant=\"neutral\">", "</sl-badge>\n\t\t\t\t\t"])), selectOption.badge) : lit_1.nothing, selectOption.children ? repeat_js_1.repeat(selectOption.children, this._optionTemplate) : (selectOption.item ? repeat_js_1.repeat(selectOption.item, this._optionTemplate) : lit_1.nothing));
    };
    Et2Tree.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            ", "\n            <sl-tree\n                    part=\"tree\"\n                    .selection=", "\n                    @sl-selection-change=", "\n                    @sl-expand=", "\n                    @sl-after-expand=", "\n                    @dragstart=", "\n                    @dragenter=", "\n                    @dragleave=", "\n\t\t\t\t\t@drop=", "\n            >\n\t\t\t\t<sl-icon src=\"", "\" slot=\"expand-icon\"></sl-icon>\n\t\t\t\t<sl-icon src=\"", "\" slot=\"collapse-icon\"></sl-icon>\n                <slot></slot>\n                ", "\n            </sl-tree>\n\t\t"], ["\n            ", "\n            <sl-tree\n                    part=\"tree\"\n                    .selection=", "\n                    @sl-selection-change=", "\n                    @sl-expand=",
            "\n                    @sl-after-expand=",
            "\n                    @dragstart=", "\n                    @dragenter=", "\n                    @dragleave=", "\n\t\t\t\t\t@drop=", "\n            >\n\t\t\t\t<sl-icon src=\"", "\" slot=\"expand-icon\"></sl-icon>\n\t\t\t\t<sl-icon src=\"", "\" slot=\"collapse-icon\"></sl-icon>\n                <slot></slot>\n                ", "\n            </sl-tree>\n\t\t"])), this.styleTemplate(), this.leafOnly ? "leaf" : "single", this.handleSelectionChange, function (event) {
            event.detail.id = event.target.id;
            event.detail.item = event.target;
            if (_this.onopenstart) {
                _this.onopenstart(event.detail.id, _this, 1);
            }
        }, function (event) {
            event.detail.id = event.target.id;
            event.detail.item = event.target;
            if (_this.onopenend) {
                _this.onopenend(event.detail.id, _this, -1);
            }
        }, function (event) { _this.handleDragEvent(event); }, function (event) { _this.handleDragEvent(event); }, function (event) { _this.handleDragEvent(event); }, function (event) { _this.handleDragEvent(event); }, this.egw().image("bi-chevron-right"), this.egw().image("bi-chevron-down"), repeat_js_1.repeat(this._selectOptions, function (o) { return o.value; }, this._optionTemplate));
    };
    Et2Tree.prototype.handleLazyLoading = function (_item) {
        var _this = this;
        var _a;
        var requestLink = egw_global_1.egw().link(egw_global_1.egw().ajaxUrl(egw_global_1.egw().decodePath(this.autoloading)), {
            id: (_a = _item.value) !== null && _a !== void 0 ? _a : _item.id
        });
        var result = egw_global_1.egw().request(requestLink, []);
        return result
            .then(function (results) {
            var _a;
            Object.assign(_item, results);
            // Add actions
            if (_this.actions && Object.entries(_this.actions).length > 0) {
                var itemAO = _this.widget_object.getObjectById((_a = _item.value) !== null && _a !== void 0 ? _a : _item.id);
                var parentAO = null;
                if (itemAO && itemAO.parent) {
                    // Remove previous, if it exists
                    parentAO = itemAO.parent;
                    itemAO.remove();
                }
            }
            return results;
        });
    };
    /**
     *
     *
     */
    Et2Tree.prototype._link_actions = function (actions) {
        var _a;
        if (this.actions && !this._actionManager) {
            // ActionManager creation was missed
            this.actions = this._actions;
        }
        // Get the top level element for the tree
        var objectManager = egw_action_1.egw_getAppObjectManager(true, (_a = this.getInstanceManager()) === null || _a === void 0 ? void 0 : _a.app);
        this.widget_object = objectManager.getObjectById(this.id);
        var ao_impl = new et2_core_DOMWidget_1.et2_action_object_impl(this, this);
        ao_impl.aoi = new EgwDragDropShoelaceTree_1.EgwDragDropShoelaceTree(this);
        if (this.widget_object == null || this.widget_object.manager !== this._actionManager) {
            // Add a new container to the object manager which will hold the widget
            // objects
            this.widget_object = objectManager.insertObject(false, new EgwActionObject_1.EgwActionObject(
            //@ts-ignore
            this.id, objectManager, ao_impl.getAOI(), this._actionManager || objectManager.manager.getActionById(this.id) || objectManager.manager, egw_action_constants_1.EGW_AO_FLAG_IS_CONTAINER));
        }
        else {
            // @ts-ignore
            this.widget_object.setAOI(ao_impl.getAOI());
        }
        // Delete all old objects
        this.widget_object.clear();
        this.widget_object.unregisterActions();
        // Go over the widget & add links - this is where we decide which actions are
        // 'allowed' for this widget at this time
        var action_links = this._get_action_links(actions);
        this.widget_object.updateActionLinks(action_links);
    };
    /**
     * Get all action-links / id's of 1.-level actions from a given action object
     *
     * This can be overwritten to not allow all actions, by not returning them here.
     *
     * @param actions
     * @returns {Array}
     */
    Et2Tree.prototype._get_action_links = function (actions) {
        var action_links = [];
        for (var i in actions) {
            var action = actions[i];
            action_links.push(typeof action.id != 'undefined' ? action.id : i);
        }
        return action_links;
    };
    /**
     *
     * @param _id to search for
     * @param data{TreeItemData[]} structure to search in
     * @return {TreeItemData} node with the given _id or null
     * @private
     */
    Et2Tree.prototype._search = function (_id, data) {
        var res = null;
        if (_id == undefined) {
            return null;
        }
        if (typeof _id === "number") {
            _id = _id + "";
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            if (value.id === _id) {
                res = value;
                return res;
            }
            else if ((_id === null || _id === void 0 ? void 0 : _id.startsWith(value.id)) && typeof value.item !== "undefined") {
                res = this._search(_id, value.item);
            }
        }
        return res;
    };
    Et2Tree.prototype._deleteItem = function (_id, list) {
        for (var i = 0; i < list.length; i++) {
            var value = list[i];
            if (value.id === _id) {
                list.splice(i, 1);
            }
            else if (_id.startsWith(value.id)) {
                this._deleteItem(_id, value.item);
            }
        }
    };
    /**
     * returns the closest SlTreeItem to the click position, and the corresponding EgwActionObject
     * @param _event the click event
     * @returns { target:SlTreeItem, action:EgwActionObject }
     */
    Et2Tree.prototype.findActionTarget = function (_event) {
        var _this = this;
        var e = _event.composedPath ? _event : _event.originalEvent;
        var target = e.composedPath().find(function (element) {
            return element.tagName == "SL-TREE-ITEM";
        });
        if (!target) {
            return { target: null, action: null };
        }
        var action = this.widget_object.getObjectById(target.id);
        // Create on the fly if not there?  Action handlers might need the EgwActionObject
        if (!action) {
            // NOTE: FLAT object structure under the tree ActionObject to avoid nested selection
            action = this.widget_object.addObject(target.id, this.widget_object.iface);
            action._context = target;
            action.setSelected = function (set) {
                target.action_selected = set;
                _this.widget_object.updateSelectedChildren(action, set);
            };
            action.getSelected = function () { return target.action_selected; };
            // Required to get dropped accepted, but also re-binds
            action.updateActionLinks(this._get_action_links(this.actions));
        }
        // This is just the action system, which we override
        this.widget_object.setAllSelected(false);
        // This will affect action system & DOM, but not our internal value
        this.widget_object.children.forEach(function (c) {
            c.setSelected(false);
        });
        this.widget_object.iface.stateChangeContext = action;
        action.setSelected(true);
        return { target: target, action: action };
    };
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Tree.prototype, "multiple", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Tree.prototype, "leafIcon", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Tree.prototype, "collapsedIcon", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Tree.prototype, "openIcon", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Tree.prototype, "onclick", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Tree.prototype, "leafOnly", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Tree.prototype, "highlighting", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Tree.prototype, "autoloading", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Tree.prototype, "onopenstart", void 0);
    __decorate([
        property_js_1.property({ type: Function })
    ], Et2Tree.prototype, "onopenend", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Tree.prototype, "imagePath", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Tree.prototype, "value", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tree.prototype, "_selectOptions", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tree.prototype, "_currentOption", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tree.prototype, "_previousOption", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tree.prototype, "_currentSlTreeItem", void 0);
    __decorate([
        state_js_1.state()
    ], Et2Tree.prototype, "selectedNodes", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2Tree.prototype, "actions", null);
    return Et2Tree;
}(Et2WidgetWithSelectMixin_1.Et2WidgetWithSelectMixin(lit_1.LitElement)));
exports.Et2Tree = Et2Tree;
customElements.define("et2-tree", Et2Tree);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
