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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EgwActionObject = void 0;
var EgwActionLink_1 = require("./EgwActionLink");
var egw_action_common_1 = require("./egw_action_common");
var egw_action_constants_1 = require("./egw_action_constants");
var egw_action_1 = require("./egw_action");
/**
 * The egwActionObject represents an abstract object to which actions may be
 * applied. Communication with the DOM tree is established by using the
 * egwActionObjectInterface (AOI), which is passed in the constructor.
 * egwActionObjects are organized in a tree structure.
 *
 * @param {string} _id is the identifier of the object which
 * @param {EgwActionObject} _parent is the parent object in the hierarchy. This may be set to NULL
 * @param {egwActionObjectInterface} _iface is the egwActionObjectInterface which connects the object
 *    to the outer world.
 * @param {EgwActionManager} _manager is the action manager this object is connected to
 *    this object to the DOM tree. If the _manager isn't supplied, the parent manager
 *    is taken.
 * @param {number} _flags a set of additional flags being applied to the object,
 *    defaults to 0
 */
var EgwActionObject = /** @class */ (function () {
    function EgwActionObject(_id, _parent, _interface, _manager, _flags) {
        if (_flags === void 0) { _flags = 0; }
        this.children = [];
        this.actionLinks = [];
        this.data = null;
        this.setSelectedCallback = null;
        this.registeredImpls = [];
        // Two variables which help fast travelling through the object tree, when
        // searching for the selected/focused object.
        this.selectedChildren = [];
        this.focusedChild = null;
        this.onBeforeTrigger = undefined;
        this._context = undefined;
        if (typeof _manager == "undefined" && typeof _parent == "object" && _parent)
            _manager = _parent.manager;
        if (typeof _flags == "undefined")
            _flags = 0;
        this.id = _id;
        this.parent = _parent;
        this.iface = _interface;
        this.manager = _manager;
        this.flags = _flags;
        this.setAOI(_interface);
    }
    /**
     * Sets the action object interface - if "NULL" is given, the iface is set
     * to a dummy interface which is used to store the temporary data.
     *
     * @param {egwActionObjectInterface} _aoi
     */
    EgwActionObject.prototype.setAOI = function (_aoi) {
        if (_aoi == null) {
            //TODo replace DummyInterface
            _aoi = new egw_action_1.egwActionObjectInterface();
        }
        // Copy the state from the old interface
        if (this.iface) {
            _aoi.setState(this.iface.getState());
        }
        // Replace the interface object
        this.iface = _aoi;
        this.iface.setStateChangeCallback(this._ifaceCallback, this);
        this.iface.setReconnectActionsCallback(this._reconnectCallback, this);
    };
    ;
    /**
     //     * Returns the object from the tree with the given ID
     //     *
     //     * @param {string} _id
     //     * @param {number} _search_depth
     //     * @return {egwActionObject} description
     //     * @todo Add search function to egw_action_commons.js
     //     */
    EgwActionObject.prototype.getObjectById = function (_id, _search_depth) {
        if (_search_depth === void 0) { _search_depth = Number.MAX_VALUE; }
        if (this.id == _id) {
            return this;
        }
        for (var i = 0; i < this.children.length && _search_depth > 0; i++) {
            var obj = this.children[i].getObjectById(_id, _search_depth - 1);
            if (obj) {
                return obj;
            }
        }
        return null;
    };
    ;
    /**
     * Adds an object as child to the actionObject and returns it - if the supplied
     * parameter is an object, the object will be added directly, otherwise an object
     * with the given id will be created.
     *
     * @param {(string|object)} _id Id of the object which will be created or the object
     *    that will be added.
     * @param {object} _interface if _id was a string, _interface defines the interface which
     *    will be connected to the newly generated object.
     * @param {number} _flags are the flags will which be supplied to the newly generated
     *    object. May be omitted.
     * @returns object the generated object
     */
    EgwActionObject.prototype.addObject = function (_id, _interface, _flags) {
        if (_interface === void 0) { _interface = null; }
        if (_flags === void 0) { _flags = 0; }
        return this.insertObject(false, _id, _interface, _flags);
    };
    ;
    /**
     * Inserts an object as child to the actionObject and returns it - if the supplied
     * parameter is an object, the object will be added directly, otherwise an object
     * with the given id will be created.
     *
     * @param {number} _index Position where the object will be inserted, "false" will add it
     *    to the end of the list.
     * @param {string|object} _id Id of the object which will be created or the object
     *    that will be added.
     * @param {object} _iface if _id was a string, _iface defines the interface which
     *    will be connected to the newly generated object.
     * @param {number} _flags are the flags will which be supplied to the newly generated
     *    object. May be omitted.
     * @returns object the generated object
     */
    EgwActionObject.prototype.insertObject = function (_index, _id, _iface, _flags) {
        if (_index === false)
            _index = this.children.length;
        var obj = null;
        if (typeof _id == "object") {
            obj = _id;
            // Set the parent to null and reset the focus of the object
            obj.parent = null;
            obj.setFocused(false);
            // Set the parent to this object
            obj.parent = this;
        }
        else if (typeof _id == "string") {
            obj = new EgwActionObject(_id, this, _iface, this.manager, _flags);
        }
        if (obj) {
            // Add the element to the children
            this.children.splice(_index, 0, obj);
        }
        else {
            throw "Error while adding new element to the ActionObjects!";
        }
        return obj;
    };
    ;
    /**
     * Deletes all children of the egwActionObject
     */
    EgwActionObject.prototype.clear = function () {
        // Remove all children
        while (this.children.length > 0) {
            this.children[0].remove();
        }
        // Delete all other references
        this.selectedChildren = [];
        this.focusedChild = null;
        // Remove links
        this.actionLinks = [];
    };
    ;
    /**
     * Deletes this object from the parent container
     */
    EgwActionObject.prototype.remove = function () {
        // Remove focus and selection from this element
        this.setFocused(false);
        this.setSelected(false);
        this.setAllSelected(false);
        // Unregister all registered action implementations
        this.unregisterActions();
        // Clear the child-list
        this.clear();
        // Remove this element from the parent list
        if (this.parent != null) {
            var idx = this.parent.children.indexOf(this);
            if (idx >= 0) {
                this.parent.children.splice(idx, 1);
            }
        }
    };
    ;
    /**
     * Searches for the root object in the action object tree and returns it.
     */
    EgwActionObject.prototype.getRootObject = function () {
        if (this.parent === null) {
            return this;
        }
        else {
            return this.parent.getRootObject();
        }
    };
    ;
    /**
     * Returns a list with all parents of this object.
     */
    EgwActionObject.prototype.getParentList = function () {
        if (this.parent === null) {
            return [];
        }
        else {
            var list = this.parent.getParentList();
            list.unshift(this.parent);
            return list;
        }
    };
    ;
    /**
     * Returns the first parent which has the container flag
     */
    EgwActionObject.prototype.getContainerRoot = function () {
        if (egw_action_common_1.egwBitIsSet(this.flags, egw_action_constants_1.EGW_AO_FLAG_IS_CONTAINER) || this.parent === null) {
            return this;
        }
        else {
            return this.parent.getContainerRoot();
        }
    };
    ;
    /**
     * Returns all selected objects which are in the current subtree.
     *
     * @param {function} _test is a function, which gets an object and checks whether
     *    it will be added to the list.
     * @param {array} _list is internally used to fetch all selected elements, please
     *    omit this parameter when calling the function.
     */
    EgwActionObject.prototype.getSelectedObjects = function (_test, _list) {
        if (typeof _test == "undefined")
            _test = null;
        if (typeof _list == "undefined") {
            _list = { "elements": [] };
        }
        if ((!_test || _test(this)) && this.getSelected())
            _list.elements.push(this);
        if (this.selectedChildren) {
            for (var i = 0; i < this.selectedChildren.length; i++) {
                this.selectedChildren[i].getSelectedObjects(_test, _list);
            }
        }
        return _list.elements;
    };
    ;
    /**
     * Returns whether all objects in this tree are selected
     */
    EgwActionObject.prototype.getAllSelected = function () {
        if (this.children.length == this.selectedChildren.length) {
            for (var i = 0; i < this.children.length; i++) {
                if (!this.children[i].getAllSelected())
                    return false;
            }
            // If this element is a container *and* does not have any children, we
            // should return false. If this element is not a container we have to
            // return true has this is the recursion base case
            return (!egw_action_common_1.egwBitIsSet(this.flags, egw_action_constants_1.EGW_AO_FLAG_IS_CONTAINER)) || (this.children.length > 0);
        }
        return false;
    };
    ;
    /**
     * Toggles the selection of all objects.
     *
     * @param _select boolean specifies whether the objects should get selected or not.
     *    If this parameter is not supplied, the selection will be toggled.
     */
    EgwActionObject.prototype.toggleAllSelected = function (_select) {
        if (typeof _select == "undefined") {
            _select = !this.getAllSelected();
        }
        // Check for a select_all action
        if (_select && this.manager && this.manager.getActionById('select_all')) {
            return this.manager.getActionById('select_all').execute(this);
        }
        this.setAllSelected(_select);
    };
    ;
    /**
     * Creates a list which contains all items of the element tree.
     *
     * @param {boolean} _visibleOnly
     * @param {object} _obj is used internally to pass references to the array inside
     *    the object.
     * @return {array}
     */
    EgwActionObject.prototype.flatList = function (_visibleOnly, _obj) {
        if (typeof (_obj) == "undefined") {
            _obj = {
                "elements": []
            };
        }
        if (typeof (_visibleOnly) == "undefined") {
            _visibleOnly = false;
        }
        if (!_visibleOnly || this.getVisible()) {
            _obj.elements.push(this);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.flatList(_visibleOnly, _obj);
        }
        return _obj.elements;
    };
    ;
    /**
     * Returns a traversal list with all objects which are in between the given object
     * and this one. The operation returns an empty list, if a container object is
     * found on the way.
     *
     * @param {object} _to
     * @return {array}
     * @todo Remove flatList here!
     */
    EgwActionObject.prototype.traversePath = function (_to) {
        var contRoot = this.getContainerRoot();
        if (contRoot) {
            // Get a flat list of all the hncp elements and search for this object
            // and the object supplied in the _to parameter.
            var flatList = contRoot.flatList();
            var thisId = flatList.indexOf(this);
            var toId = flatList.indexOf(_to);
            // Check whether both elements have been found in this part of the tree,
            // return the slice of that list.
            if (thisId !== -1 && toId !== -1) {
                var from = Math.min(thisId, toId);
                var to = Math.max(thisId, toId);
                return flatList.slice(from, to + 1);
            }
        }
        return [];
    };
    ;
    /**
     * Returns the index of this object in the children list of the parent object.
     */
    EgwActionObject.prototype.getIndex = function () {
        if (this.parent === null) {
            //TODO check: should be -1 for invalid
            return 0;
        }
        else {
            return this.parent.children.indexOf(this);
        }
    };
    ;
    /**
     * Returns the deepest object which is currently focused. Objects with the
     * "container"-flag will not be returned.
     */
    EgwActionObject.prototype.getFocusedObject = function () {
        return this.focusedChild || null;
    };
    ;
    /**
     * Internal function which is connected to the ActionObjectInterface associated
     * with this object in the constructor. It gets called, whenever the object
     * gets (de)selected.
     *
     * @param {number} _newState is the new state of the object
     * @param {number} _changedBit
     * @param {number} _shiftState is the status of extra keys being pressed during the
     *    selection process.
     */
    EgwActionObject.prototype._ifaceCallback = function (_newState, _changedBit, _shiftState) {
        if (typeof _shiftState == "undefined")
            _shiftState = egw_action_constants_1.EGW_AO_SHIFT_STATE_NONE;
        var selected = egw_action_common_1.egwBitIsSet(_newState, egw_action_constants_1.EGW_AO_STATE_SELECTED);
        var visible = egw_action_common_1.egwBitIsSet(_newState, egw_action_constants_1.EGW_AO_STATE_VISIBLE);
        // Check whether the visibility of the object changed
        if (_changedBit == egw_action_constants_1.EGW_AO_STATE_VISIBLE && visible != this.getVisible()) {
            // Deselect the object
            if (!visible) {
                this.setSelected(false);
                this.setFocused(false);
                return egw_action_constants_1.EGW_AO_STATE_NORMAL;
            }
            else {
                // Auto-register the actions attached to this object
                this.registerActions();
            }
        }
        // Remove the focus from all children on the same level
        if (this.parent && visible && _changedBit == egw_action_constants_1.EGW_AO_STATE_SELECTED) {
            selected = egw_action_common_1.egwBitIsSet(_newState, egw_action_constants_1.EGW_AO_STATE_SELECTED);
            var objs = [];
            if (selected) {
                // Deselect all other objects inside this container, if the "MULTI" shift-state is not set
                if (!egw_action_common_1.egwBitIsSet(_shiftState, egw_action_constants_1.EGW_AO_SHIFT_STATE_MULTI)) {
                    this.getContainerRoot().setAllSelected(false);
                }
                // If the LIST state is active, get all objects in between this one and the focused one
                // and set their select state.
                if (egw_action_common_1.egwBitIsSet(_shiftState, egw_action_constants_1.EGW_AO_SHIFT_STATE_BLOCK)) {
                    var focused = this.getFocusedObject();
                    if (focused) {
                        objs = this.traversePath(focused);
                        for (var i = 0; i < objs.length; i++) {
                            objs[i].setSelected(true);
                        }
                    }
                }
            }
            // If the focused element didn't belong to this container, or the "list"
            // shift-state isn't active, set the focus to this element.
            if (objs.length == 0 || !egw_action_common_1.egwBitIsSet(_shiftState, egw_action_constants_1.EGW_AO_SHIFT_STATE_BLOCK)) {
                this.setFocused(true);
                _newState = egw_action_common_1.egwSetBit(egw_action_constants_1.EGW_AO_STATE_FOCUSED, _newState, true);
            }
            this.setSelected(selected);
        }
        return _newState;
    };
    ;
    /**
     * Handler for key presses
     *
     * @param {number} _keyCode
     * @param {boolean} _shift
     * @param {boolean} _ctrl
     * @param {boolean} _alt
     * @returns {boolean}
     */
    EgwActionObject.prototype.handleKeyPress = function (_keyCode, _shift, _ctrl, _alt) {
        switch (_keyCode) {
            case egw_action_constants_1.EGW_KEY_ARROW_UP:
            case egw_action_constants_1.EGW_KEY_ARROW_DOWN:
            case egw_action_constants_1.EGW_KEY_PAGE_UP:
            case egw_action_constants_1.EGW_KEY_PAGE_DOWN:
                if (!_alt) {
                    var intval = (_keyCode == egw_action_constants_1.EGW_KEY_ARROW_UP || _keyCode == egw_action_constants_1.EGW_KEY_ARROW_DOWN) ? 1 : 10;
                    if (this.children.length > 0) {
                        // Get the focused object
                        var focused_1 = this.getFocusedObject();
                        // Determine the object which should get selected
                        var selObj = null;
                        if (!focused_1) {
                            selObj = this.children[0];
                        }
                        else {
                            selObj = (_keyCode == egw_action_constants_1.EGW_KEY_ARROW_UP || _keyCode == egw_action_constants_1.EGW_KEY_PAGE_UP) ?
                                focused_1.getPrevious(intval) : focused_1.getNext(intval);
                        }
                        if (selObj != null) {
                            if (!_shift && !(this.parent && this.parent.data && this.parent.data.keyboard_select)) {
                                this.setAllSelected(false);
                            }
                            else if (!(this.parent && this.parent.data && this.parent.data.keyboard_select)) {
                                var objs = focused_1.traversePath(selObj);
                                for (var i = 0; i < objs.length; i++) {
                                    objs[i].setSelected(true);
                                }
                            }
                            if (!(this.parent.data && this.parent.data.keyboard_select)) {
                                selObj.setSelected(true);
                            }
                            selObj.setFocused(true);
                            // Tell the aoi of the object to make it visible
                            selObj.makeVisible();
                        }
                        return true;
                    }
                }
                break;
            // Space bar toggles selected for current row
            case egw_action_constants_1.EGW_KEY_SPACE:
                if (this.children.length <= 0) {
                    break;
                }
                // Mark that we're selecting by keyboard, or arrows will reset selection
                if (!this.parent.data) {
                    this.parent.data = {};
                }
                this.parent.data.keyboard_select = true;
                // Get the focused object
                var focused = this.getFocusedObject();
                focused.setSelected(!focused.getSelected());
                // Tell the aoi of the object to make it visible
                focused.makeVisible();
                return true;
            // Handle CTRL-A to select all elements in the current container
            case egw_action_constants_1.EGW_KEY_A:
                if (_ctrl && !_shift && !_alt) {
                    this.toggleAllSelected();
                    return true;
                }
                break;
        }
        return false;
    };
    ;
    EgwActionObject.prototype.getPrevious = function (_intval) {
        if (this.parent != null) {
            if (this.getFocused() && !this.getSelected()) {
                return this;
            }
            var flatTree = this.getContainerRoot().flatList();
            var idx = flatTree.indexOf(this);
            if (idx > 0) {
                idx = Math.max(1, idx - _intval);
                return flatTree[idx];
            }
        }
        return this;
    };
    ;
    EgwActionObject.prototype.getNext = function (_intval) {
        if (this.parent != null) {
            if (this.getFocused() && !this.getSelected()) {
                return this;
            }
            var flatTree = this.getContainerRoot().flatList(true);
            var idx = flatTree.indexOf(this);
            if (idx < flatTree.length - 1) {
                idx = Math.min(flatTree.length - 1, idx + _intval);
                return flatTree[idx];
            }
        }
        return this;
    };
    ;
    /**
     * Returns whether the object is currently selected.
     */
    EgwActionObject.prototype.getSelected = function () {
        return egw_action_common_1.egwBitIsSet(this.getState(), egw_action_constants_1.EGW_AO_STATE_SELECTED);
    };
    ;
    /**
     * Returns whether the object is currently focused.
     */
    EgwActionObject.prototype.getFocused = function () {
        return egw_action_common_1.egwBitIsSet(this.getState(), egw_action_constants_1.EGW_AO_STATE_FOCUSED);
    };
    ;
    /**
     * Returns whether the object currently is visible - visible means, that the
     * AOI has a dom node and is visible.
     */
    EgwActionObject.prototype.getVisible = function () {
        return egw_action_common_1.egwBitIsSet(this.getState(), egw_action_constants_1.EGW_AO_STATE_VISIBLE);
    };
    ;
    /**
     * Returns the complete state of the object.
     */
    EgwActionObject.prototype.getState = function () {
        return this.iface.getState();
    };
    ;
    /**
     * Sets the focus of the element. The formerly focused element in the tree will
     * be de-focused.
     *
     * @param {boolean} _focused - whether to remove or set the focus. Defaults to true
     */
    EgwActionObject.prototype.setFocused = function (_focused) {
        if (typeof _focused == "undefined")
            _focused = true;
        var state = this.iface.getState();
        if (egw_action_common_1.egwBitIsSet(state, egw_action_constants_1.EGW_AO_STATE_FOCUSED) != _focused) {
            // Un-focus the currently focused object
            var currentlyFocused = this.getFocusedObject();
            if (currentlyFocused && currentlyFocused != this) {
                currentlyFocused.setFocused(false);
            }
            this.iface.setState(egw_action_common_1.egwSetBit(state, egw_action_constants_1.EGW_AO_STATE_FOCUSED, _focused));
            if (this.parent) {
                this.parent.updateFocusedChild(this, _focused);
            }
        }
        if (this.focusedChild != null && _focused == false) {
            this.focusedChild.setFocused(false);
        }
    };
    ;
    /**
     * Sets the selected state of the element.
     *
     * @param {boolean} _selected
     * @TODO Callback
     */
    EgwActionObject.prototype.setSelected = function (_selected) {
        var state = this.iface.getState();
        if ((egw_action_common_1.egwBitIsSet(state, egw_action_constants_1.EGW_AO_STATE_SELECTED) != _selected) && egw_action_common_1.egwBitIsSet(state, egw_action_constants_1.EGW_AO_STATE_VISIBLE)) {
            this.iface.setState(egw_action_common_1.egwSetBit(state, egw_action_constants_1.EGW_AO_STATE_SELECTED, _selected));
            if (this.parent) {
                this.parent.updateSelectedChildren(this, _selected || this.selectedChildren.length > 0);
            }
        }
    };
    ;
    /**
     * Sets the selected state of all elements, including children
     *
     * @param {boolean} _selected
     * @param {boolean} _informParent
     */
    EgwActionObject.prototype.setAllSelected = function (_selected, _informParent) {
        var _a, _b, _c;
        if (_informParent === void 0) { _informParent = true; }
        var state = this.iface.getState();
        // Update this element
        if (egw_action_common_1.egwBitIsSet(state, egw_action_constants_1.EGW_AO_STATE_SELECTED) != _selected) {
            this.iface.setState(egw_action_common_1.egwSetBit(state, egw_action_constants_1.EGW_AO_STATE_SELECTED, _selected));
            if (_informParent && this.parent) {
                this.parent.updateSelectedChildren(this, _selected);
            }
            if (((_a = this.parent) === null || _a === void 0 ? void 0 : _a.data) && ((_c = (_b = this.parent) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.keyboard_select)) {
                this.parent.data.keyboard_select = false;
            }
        }
        // Update the children if they should be selected or if they should be
        // deselected and there are selected children.
        if (_selected || this.selectedChildren.length > 0) {
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].setAllSelected(_selected, false);
            }
        }
        // Copy the selected children list
        this.selectedChildren = [];
        if (_selected) {
            for (var i = 0; i < this.children.length; i++) {
                this.selectedChildren.push(this.children[i]);
            }
        }
        // Call the setSelectedCallback
        egw_action_common_1.egwQueueCallback(this.setSelectedCallback, [], this, "setSelectedCallback");
    };
    ;
    /**
     * Updates the selectedChildren array each actionObject has in order to determine
     * all selected children in a very fast manner.
     *
     * @param {(string|egwActionObject} _child
     * @param {boolean} _selected
     * @todo Has also to be updated, if an child is added/removed!
     */
    EgwActionObject.prototype.updateSelectedChildren = function (_child, _selected) {
        var id = this.selectedChildren.indexOf(_child); // TODO Replace by binary search, insert children sorted by index!
        var wasEmpty = this.selectedChildren.length == 0;
        // Add or remove the given child from the selectedChildren list
        if (_selected && id == -1) {
            this.selectedChildren.push(_child);
        }
        else if (!_selected && id != -1) {
            this.selectedChildren.splice(id, 1);
        }
        // If the emptiness of the selectedChildren array has changed, update the
        // parent selected children array.
        if (wasEmpty != (this.selectedChildren.length == 0) && this.parent) {
            this.parent.updateSelectedChildren(this, wasEmpty);
        }
        // Call the setSelectedCallback
        egw_action_common_1.egwQueueCallback(this.setSelectedCallback, this.getContainerRoot().getSelectedObjects(), this, "setSelectedCallback");
    };
    ;
    /**
     * Updates the focusedChild up to the container boundary.
     *
     * @param {(string|egwActionObject} _child
     * @param {boolean} _focused
     */
    EgwActionObject.prototype.updateFocusedChild = function (_child, _focused) {
        if (_focused) {
            this.focusedChild = _child;
        }
        else {
            if (this.focusedChild == _child) {
                this.focusedChild = null;
            }
        }
        if (this.parent /*&& !egwBitIsSet(this.flags, EGW_AO_FLAG_IS_CONTAINER)*/) {
            this.parent.updateFocusedChild(_child, _focused);
        }
    };
    ;
    /**
     * Updates the actionLinks of the given ActionObject.
     *
     * @param {array} _actionLinks contains the information about the actionLinks which
     *    should be updated as an array of objects. Example
     *    [
     *        {
     * 			"actionId": "file_delete",
     * 			"enabled": true
     * 		}
     *    ]
     *    string[] or {actionID:string,enabled:boolean}[]
     *    If an supplied link doesn't exist yet, it will be created (if _doCreate is true)
     *    and added to the list. Otherwise, the information will just be updated.
     * @param {boolean} _recursive If true, the settings will be applied to all child
     *    object (default false)
     * @param {boolean} _doCreate If true, not yet existing links will be created (default true)
     */
    EgwActionObject.prototype.updateActionLinks = function (_actionLinks, _recursive, _doCreate) {
        if (_recursive === void 0) { _recursive = false; }
        if (_doCreate === void 0) { _doCreate = true; }
        for (var _i = 0, _actionLinks_1 = _actionLinks; _i < _actionLinks_1.length; _i++) {
            var elem = _actionLinks_1[_i];
            // Allow single strings for simple action links.
            if (typeof elem == "string") {
                elem = {
                    actionId: elem,
                    enabled: true
                };
            }
            if (typeof elem.actionId != "undefined" && elem.actionId) {
                //Get the action link object, if it doesn't exist yet, create it
                var actionLink = this.getActionLink(elem.actionId);
                if (!actionLink && _doCreate) {
                    actionLink = new EgwActionLink_1.EgwActionLink(this.manager);
                    this.actionLinks.push(actionLink);
                }
                //Set the supplied data
                if (actionLink) {
                    actionLink.updateLink(elem);
                }
            }
        }
        if (_recursive) {
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].updateActionLinks(_actionLinks, true, _doCreate);
            }
        }
        if (this.getVisible() && this.iface != null) {
            this.registerActions();
        }
    };
    ;
    /**
     * Reconnects the actions.
     */
    EgwActionObject.prototype._reconnectCallback = function () {
        this.registeredImpls = [];
        this.registerActions();
    };
    ;
    /**
     * Registers the action implementations inside the DOM-Tree.
     */
    EgwActionObject.prototype.registerActions = function () {
        var groups = this.getActionImplementationGroups();
        for (var group in groups) {
            // Get the action implementation for each group
            if (typeof window._egwActionClasses[group] != "undefined" && window._egwActionClasses[group].implementation && this.iface) {
                var impl = window._egwActionClasses[group].implementation();
                if (this.registeredImpls.indexOf(impl) == -1) {
                    // Register a handler for that action with the iface of that object,
                    // the callback and this object as context for the callback
                    if (impl.registerAction(this.iface, this.executeActionImplementation, this)) {
                        this.registeredImpls.push(impl);
                    }
                }
            }
        }
    };
    ;
    /**
     * Unregisters all action implementations registered to this element
     */
    EgwActionObject.prototype.unregisterActions = function () {
        while (this.registeredImpls.length > 0) {
            var impl = this.registeredImpls.pop();
            if (this.iface) {
                impl.unregisterAction(this.iface);
            }
        }
    };
    ;
    EgwActionObject.prototype.triggerCallback = function () {
        if (this.onBeforeTrigger) {
            return this.onBeforeTrigger();
        }
        return true;
    };
    EgwActionObject.prototype.makeVisible = function () {
        this.iface.makeVisible();
    };
    ;
    /**
     * Executes the action implementation which is associated to the given action type.
     *
     * @param {object} _implContext is data which should be delivered to the action implementation.
     *    E.g. in case of the popup action implementation, the x and y coordinates where the
     *    menu should open, and contextmenu event are transmitted.
     * @param {string} _implType is the action type for which the implementation should be
     *    executed.
     * @param {number} _execType specifies in which context the execution should take place.
     *    defaults to EGW_AO_EXEC_SELECTED
     */
    EgwActionObject.prototype.executeActionImplementation = function (_implContext, _implType, _execType) {
        if (typeof _execType == "undefined") {
            _execType = egw_action_constants_1.EGW_AO_EXEC_SELECTED;
        }
        if (typeof _implType == "string") {
            _implType = window._egwActionClasses[_implType].implementation();
        }
        if (typeof _implType == "object" && _implType) {
            var selectedActions = void 0;
            if (_execType == egw_action_constants_1.EGW_AO_EXEC_SELECTED) {
                if (!(egw_action_common_1.egwBitIsSet(egw_action_constants_1.EGW_AO_FLAG_IS_CONTAINER, this.flags))) {
                    this.forceSelection();
                }
                selectedActions = this.getSelectedLinks(_implType.type);
            }
            else if (_execType == egw_action_constants_1.EGW_AO_EXEC_THIS) {
                selectedActions = this._getLinks([this], _implType.type);
            }
            if (selectedActions.selected.length > 0 && egw_action_common_1.egwObjectLength(selectedActions.links) > 0) {
                return _implType.executeImplementation(_implContext, selectedActions.selected, selectedActions.links);
            }
        }
        return false;
    };
    ;
    /**
     * Forces the object to be inside the currently selected objects. If this is
     * not the case, the object will select itself and deselect all other objects.
     */
    EgwActionObject.prototype.forceSelection = function () {
        var selected = this.getContainerRoot().getSelectedObjects();
        // Check whether this object is in the list
        var thisInList = selected.indexOf(this) != -1;
        // If not, select it
        if (!thisInList) {
            this.getContainerRoot().setAllSelected(false);
            this.setSelected(true);
        }
        this.setFocused(true);
    };
    ;
    /**
     * Returns all selected objects, and all action links of those objects, which are
     * of the given implementation type, actionLink properties such as
     * "enabled" and "visible" are accumulated.
     *
     * Objects have the chance to change their action links or to deselect themselves
     * in the onBeforeTrigger event, which is evaluated by the triggerCallback function.
     *
     * @param _actionType is the action type for which the actionLinks should be collected.
     * @returns object An object which contains a "links" and a "selected" section with
     *    an array of links/selected objects-
     */
    EgwActionObject.prototype.getSelectedLinks = function (_actionType, useSelf) {
        if (useSelf === void 0) { useSelf = false; }
        // Get all objects in this container which are currently selected
        var selected = useSelf ? [this] : this.getContainerRoot().getSelectedObjects();
        return this._getLinks(selected, _actionType);
    };
    ;
    /**
     *
     * @param {array} _objs
     * @param {string} _actionType
     * @return {object} with attributes "selected" and "links"
     */
    EgwActionObject.prototype._getLinks = function (_objs, _actionType) {
        var actionLinks = {};
        var testedSelected = [];
        var test = function (olink, obj) {
            // Test whether the action type is of the given implementation type
            if (olink.actionObj.type == _actionType) {
                if (typeof actionLinks[olink.actionId] == "undefined") {
                    actionLinks[olink.actionId] = {
                        "actionObj": olink.actionObj,
                        "enabled": (testedSelected.length == 1),
                        "visible": false,
                        "cnt": 0
                    };
                }
                // Accumulate the action link properties
                var llink = actionLinks[olink.actionId];
                llink.enabled = llink.enabled && olink.actionObj.enabled.exec(olink.actionObj, _objs, obj) && olink.enabled && olink.visible;
                llink.visible = (llink.visible || olink.visible);
                llink.cnt++;
                // Add in children, so they can get checked for visible / enabled
                if (olink.actionObj && olink.actionObj.children.length > 0) {
                    for (var j = 0; j < olink.actionObj.children.length; j++) {
                        var child = olink.actionObj.children[j];
                        test({
                            actionObj: child, actionId: child.id, enabled: olink.enabled, visible: olink.visible
                        }, obj);
                    }
                }
            }
        };
        var _loop_1 = function (obj) {
            if (!egw_action_common_1.egwBitIsSet(obj.flags, egw_action_constants_1.EGW_AO_FLAG_IS_CONTAINER) && obj.triggerCallback()) {
                testedSelected.push(obj);
                obj.actionLinks.forEach(function (item) {
                    test(item, obj); //object link
                });
            }
        };
        for (var _i = 0, _objs_1 = _objs; _i < _objs_1.length; _i++) {
            var obj = _objs_1[_i];
            _loop_1(obj);
        }
        // Check whether all objects supported the action
        for (var k in actionLinks) {
            actionLinks[k].enabled = actionLinks[k].enabled && (actionLinks[k].cnt >= testedSelected.length) && ((actionLinks[k].actionObj.allowOnMultiple === true) || (actionLinks[k].actionObj.allowOnMultiple == "only" && _objs.length > 1) || (actionLinks[k].actionObj.allowOnMultiple == false && _objs.length === 1) || (typeof actionLinks[k].actionObj.allowOnMultiple === 'number' && _objs.length == actionLinks[k].actionObj.allowOnMultiple));
            if (!window.egwIsMobile())
                actionLinks[k].actionObj.hideOnMobile = false;
            actionLinks[k].visible = actionLinks[k].visible && !actionLinks[k].actionObj.hideOnMobile && (actionLinks[k].enabled || !actionLinks[k].actionObj.hideOnDisabled);
        }
        // Return an object which contains the accumulated actionLinks and all selected
        // objects.
        return {
            "selected": testedSelected, "links": actionLinks
        };
    };
    ;
    /**
     * Returns the action link, which contains the association to the action with
     * the given actionId.
     *
     * @param {string} _actionId name of the action associated to the link
     */
    EgwActionObject.prototype.getActionLink = function (_actionId) {
        var _a;
        for (var i = 0; i < this.actionLinks.length; i++) {
            if (((_a = this.actionLinks[i].actionObj) === null || _a === void 0 ? void 0 : _a.id) == _actionId) {
                return this.actionLinks[i];
            }
        }
        return null;
    };
    ;
    /**
     * Returns all actions associated to the object tree, grouped by type.
     *
     * @param {function} _test gets an egwActionObject and should return, whether the
     *    actions of this object are added to the result. Defaults to an "always true"
     *    function.
     * @param {object} _groups is an internally used parameter, may be omitted.
     */
    EgwActionObject.prototype.getActionImplementationGroups = function (_test, _groups) {
        var _this = this;
        // If the _groups parameter hasn't been given preset it to an empty object
        // (associative array).
        if (typeof _groups == "undefined")
            _groups = {};
        if (typeof _test == "undefined")
            _test = function (_obj) {
                return true;
            };
        this.actionLinks.forEach(function (item) {
            var action = item.actionObj;
            if (typeof action != "undefined" && _test(_this)) {
                if (typeof _groups[action.type] == "undefined") {
                    _groups[action.type] = [];
                }
                _groups[action.type].push({
                    "object": _this, "link": item
                });
            }
        });
        // Recursively add the actions of the children to the result (as _groups is
        // an object, only the reference is passed).
        this.children.forEach(function (item) {
            item.getActionImplementationGroups(_test, _groups);
        });
        return _groups;
    };
    ;
    /**
     * Check if user tries to get dragOut action
     *
     * keys for dragOut:
     *    -Mac: Command + Shift
     *    -Others: Alt + Shift
     *
     * @param {event} _event
     * @return {boolean} return true if Alt+Shift keys and left mouse click are pressed, otherwise false
     */
    EgwActionObject.prototype.isDragOut = function (_event) {
        return (_event.altKey || _event.metaKey) && _event.shiftKey && _event.which == 1;
    };
    ;
    /**
     * Check if user tries to get selection action
     *
     * Keys for selection:
     *    -Mac: Command key
     *    -Others: Ctrl key
     *
     * @param {type} _event
     * @returns {Boolean} return true if left mouse click and Ctrl/Alt key are pressed, otherwise false
     */
    EgwActionObject.prototype.isSelection = function (_event) {
        return !(_event.shiftKey) && _event.which == 1 && (_event.metaKey || _event.ctrlKey || _event.altKey);
    };
    ;
    return EgwActionObject;
}());
exports.EgwActionObject = EgwActionObject;
