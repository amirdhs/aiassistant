"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.egwMenuItem = exports.egwMenu = exports._egw_active_menu = void 0;
/**
 * eGroupWare egw_action framework - JS Menu abstraction
 *
 * @link http://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
 *
 */
var EgwMenuShoelace_1 = require("./EgwMenuShoelace");
//Global variable which is used to store the currently active menu so that it
//may be closed when another menu opens
exports._egw_active_menu = null;
/**
 * Internal function which parses the given menu tree in _elements and adds the
 * elements to the given parent.
 */
function _egwGenMenuStructure(_elements, _parent) {
    var items = [];
    //Go through each object in the elements array
    for (var _i = 0, _elements_1 = _elements; _i < _elements_1.length; _i++) {
        var obj = _elements_1[_i];
        //Go through each key of the current object
        var item = new egwMenuItem(_parent, null);
        for (var key in obj) {
            if (key == "children" && obj[key].constructor === Array) {
                //Recursively load the children.
                item.children = _egwGenMenuStructure(obj[key], item);
            }
            else {
                //Directly set the other keys
                //TODO Sanity necessary checks here?
                //TODO Implement menu item getters?
                if (key == "id" || key == "caption" || key == "iconUrl" ||
                    key == "checkbox" || key == "checked" || key == "groupIndex" ||
                    key == "enabled" || key == "default" || key == "onClick" ||
                    key == "hint" || key == "shortcutCaption") {
                    item['set_' + key](obj[key]);
                }
            }
        }
        items.push(item);
    }
    return items;
}
/**
 * Internal function which searches for the given ID inside an element tree.
 */
function _egwSearchMenuItem(_elements, _id) {
    for (var _i = 0, _elements_2 = _elements; _i < _elements_2.length; _i++) {
        var item1 = _elements_2[_i];
        if (item1.id === _id)
            return item1;
        var item = _egwSearchMenuItem(item1.children, _id);
        if (item)
            return item;
    }
    return null;
}
/**
 * Internal function which allows to set the onClick handler of multiple menu items
 */
function _egwSetMenuOnClick(_elements, _onClick) {
    for (var _i = 0, _elements_3 = _elements; _i < _elements_3.length; _i++) {
        var item = _elements_3[_i];
        if (item.onClick === null) {
            item.onClick = _onClick;
        }
        _egwSetMenuOnClick(item.children, _onClick);
    }
}
/**
 * replacement function for jquery trigger
 * @param selector
 * @param eventType
 */
function trigger(selector, eventType) {
    if (typeof eventType === 'string' && typeof selector[eventType] === 'function') {
        selector[eventType]();
    }
    else {
        var event_1 = typeof eventType === 'string'
            ? new Event(eventType, { bubbles: true })
            : eventType;
        selector.dispatchEvent(event_1);
    }
}
/**
 * Constructor for the egwMenu object. The egwMenu object is an abstract representation
 * of a context/popup menu. The actual generation of the menu can be done by
 * so-called menu implementations. Those are activated by simply including the JS file
 * of such an implementation.
 *
 * The current use implementation is "EgwShoelaceMenu.js" which is based on Shoelace.
 */
var egwMenu = /** @class */ (function () {
    function egwMenu() {
        //The "items" variable contains all menu items of the menu
        this.children = [];
        //The "instance" variable contains the currently opened instance. There may
        //only be one instance opened at a time.
        this.instance = null; // This is equivalent to iface in other classes and holds an egwMenuImpl
    }
    egwMenu.prototype.remove = function () {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.remove();
    };
    /**
     * The private _checkImpl function checks whether a menu implementation is available.
     *
     * @returns bool whether a menu implementation is available.
     */
    egwMenu.prototype._checkImpl = function () {
        return typeof egwMenuImpl == 'function';
    };
    /**
     * Hides the menu if it is currently opened. Otherwise, nothing happens.
     */
    egwMenu.prototype.hide = function () {
        //Reset the currently active menu variable
        if (exports._egw_active_menu == this)
            exports._egw_active_menu = null;
        //Check whether a currently opened instance exists. If it does, close it.
        if (this.instance != null) {
            this.instance.hide();
        }
    };
    /**
     * The showAtElement function shows the menu at the given screen position in a
     * (hopefully) optimal orientation. There can only be one instance of the menu opened at
     * one time and the menu implementation should care that there is only one menu
     * opened globally at all.
     *
     * @param {number} _x is the x position at which the menu will be opened
     * @param {number} _y is the y position at which the menu will be opened
     * @param {boolean} _force if true, the menu will be reopened at the given position,
     * 	even if it already had been opened. Defaults to false.
     * @returns {boolean} whether the menu had been opened
     */
    egwMenu.prototype.showAt = function (_x, _y, _force) {
        if (_force === void 0) { _force = false; }
        //Hide any other currently active menu
        if (exports._egw_active_menu != null) {
            if (exports._egw_active_menu == this && !_force) {
                this.hide();
                return false;
            }
            else {
                exports._egw_active_menu.hide();
            }
        }
        if (this.instance == null && this._checkImpl) {
            //Obtain a new egwMenuImpl object and pass this instance to it
            this.instance = new EgwMenuShoelace_1.EgwMenuShoelace(this.children);
        }
        exports._egw_active_menu = this;
        this.instance.showAt(_x, _y, function () {
            exports._egw_active_menu = null;
        });
        return true;
    };
    /**
     * Enable / disable menu items for the given selection & target
     *
     * @param _context
     * @param _links
     * @param _selected
     * @param _target
     * @private
     */
    egwMenu.prototype.applyContext = function (_links, _selected, _target) {
        if (!this.instance) {
            this.instance = new EgwMenuShoelace_1.EgwMenuShoelace(this.children);
        }
        this.instance.applyContext(_links, _selected, _target);
        var setOnClick = function (menuItem) {
            menuItem.set_onClick(function (elem) {
                // Copy the "checked" state
                if (typeof elem.data.checked != "undefined") {
                    elem.data.checked = elem.checked;
                }
                elem.data.execute(_selected, _target);
            });
            menuItem.children.forEach(function (c) { return setOnClick(c); });
        };
        this.children.forEach(function (menuItem) {
            setOnClick(menuItem);
        });
    };
    /**
     * Adds a new menu item to the list and returns a reference to that object.
     *
     * @param {string} _id is a unique identifier of the menu item. You can use
     * 	the getItem function to search a specific menu item inside the menu tree. The
     * 	id may also be false, null or "", which makes sense for items like separators,
     * 	which you don't want to access anymore after adding them to the menu tree.
     * @param {string} _caption is the caption of the newly generated menu item. Set the caption
     * 	to "-" in order to create a separator.
     * @param {string} _iconUrl is the URL of the icon which should be prepended to the
     * 	menu item. It may be false, null or "" if you don't want an icon to be displayed.
     * @param {function} _onClick is the JS function which is being executed when the
     * 	menu item is clicked.
     * @param {string|null} _color color
     * @param _indentation The level of indentation applied to the element
     * @returns {egwMenuItem} the newly generated menu item, which had been appended to the
     * 	menu item list.
     */
    egwMenu.prototype.addItem = function (_id, _caption, _iconUrl, _onClick, _color, _indentation) {
        //Append the item to the list
        var item = new egwMenuItem(this, _id, _caption, _iconUrl, _onClick, _color, _indentation);
        this.children.push(item);
        return item;
    };
    /**
     * Removes all elements from the menu structure.
     */
    egwMenu.prototype.clear = function () {
        this.children = [];
    };
    /**
     * Loads the menu structure from the given object tree. The object tree is an array
     * of objects which may contain a subset of the menu item properties. The "children"
     * property of such an object is interpreted as a new sub-menu tree and appended
     * to that child.
     *
     * @param {array} _elements is an array of elements which should be added to the menu
     */
    egwMenu.prototype.loadStructure = function (_elements) {
        this.children = _egwGenMenuStructure(_elements, this);
    };
    /**
     * Searches for the given item id within the element tree.
     */
    egwMenu.prototype.getItem = function (_id) {
        return _egwSearchMenuItem(this.children, _id);
    };
    /**
     * Applies the given onClick handler to all menu items which don't have a clicked
     * handler assigned yet.
     */
    egwMenu.prototype.setGlobalOnClick = function (_onClick) {
        _egwSetMenuOnClick(this.children, _onClick);
    };
    return egwMenu;
}());
exports.egwMenu = egwMenu;
/**
 * Constructor for the egwMenuItem. Each entry in a menu (including separators)
 * is represented by a menu item.
 */
var egwMenuItem = /** @class */ (function () {
    function egwMenuItem(_parent, _id, _caption, _iconUrl, onClick, _color, _indentation) {
        if (_caption === void 0) { _caption = ""; }
        if (_iconUrl === void 0) { _iconUrl = ""; }
        if (onClick === void 0) { onClick = null; }
        if (_color === void 0) { _color = null; }
        if (_indentation === void 0) { _indentation = 0; }
        this.caption = "";
        this.checkbox = false;
        this.checked = false;
        this.groupIndex = 0;
        this.enabled = true;
        this.iconUrl = "";
        this.onClick = null;
        this.default = false;
        this.data = null;
        this.shortcutCaption = null;
        this.children = [];
        //is set for radio Buttons
        this._dhtmlx_grpid = "";
        //hint might get set somewhere
        this.hint = "";
        this.parent = _parent;
        this.id = _id;
        this.caption = _caption;
        this.iconUrl = _iconUrl;
        this.onClick = onClick;
        this.color = _color;
        this.indentation = _indentation;
    }
    egwMenuItem.prototype.set_id = function (_value) {
        this.id = _value;
    };
    egwMenuItem.prototype.set_caption = function (_value) {
        //A value of "-" means that this element is a separator.
        this.caption = _value;
    };
    egwMenuItem.prototype.set_checkbox = function (_value) {
        this.checkbox = _value;
    };
    egwMenuItem.prototype.set_checked = function (_value) {
        if (_value && this.groupIndex > 0) {
            //Uncheck all other elements in this radio group
            for (var _i = 0, _a = this.parent.children; _i < _a.length; _i++) {
                var menuItem = _a[_i];
                if (menuItem.groupIndex == this.groupIndex)
                    menuItem.checked = false;
            }
        }
        this.checked = _value;
    };
    /**
     * Searches for the given item id within the element tree.
     */
    egwMenuItem.prototype.getItem = function (_id) {
        if (this.id === _id)
            return this;
        return _egwSearchMenuItem(this.children, _id);
    };
    /**
     * Applies the given onClick handler to all menu items which don't have a clicked
     * handler assigned yet.
     */
    egwMenuItem.prototype.setGlobalOnClick = function (_onClick) {
        this.onClick = _onClick;
        _egwSetMenuOnClick(this.children, _onClick);
    };
    /**
     * Adds a new menu item to the list and returns a reference to that object.
     *
     * @param {string} _id is a unique identifier of the menu item. You can use
     * 	the getItem function to search a specific menu item inside the menu tree. The
     * 	id may also be false, null or "", which makes sense for items like separators,
     * 	which you don't want to access anymore after adding them to the menu tree.
     * @param {string} _caption is the caption of the newly generated menu item. Set the caption
     * 	to "-" in order to create a separator.
     * @param {string} _iconUrl is the URL of the icon which should be prepended to the
     * 	menu item. It may be false, null or "" if you don't want an icon to be displayed.
     * @param {function} _onClick is the JS function which is being executed when the
     * 	menu item is clicked.
     * @param _color The color the item caption will be displayed in
     * @param _indentation The level of indentation the item should have, this is used e.g. for subcategories
     * @returns {egwMenuItem} the newly generated menu item, which had been appended to the
     * 	menu item list.
     */
    egwMenuItem.prototype.addItem = function (_id, _caption, _iconUrl, _onClick, _color, _indentation) {
        //Append the item to the list
        var item = new egwMenuItem(this, _id, _caption, _iconUrl, _onClick, _color, _indentation);
        this.children.push(item);
        return item;
    };
    egwMenuItem.prototype.set_groupIndex = function (_value) {
        //If groupIndex is greater than 0 and the element is a checkbox, it is
        //treated like a radio box
        this.groupIndex = _value;
    };
    egwMenuItem.prototype.set_enabled = function (_value) {
        this.enabled = _value;
    };
    egwMenuItem.prototype.set_onClick = function (_value) {
        this.onClick = _value;
    };
    egwMenuItem.prototype.set_iconUrl = function (_value) {
        this.iconUrl = _value;
    };
    egwMenuItem.prototype.set_default = function (_value) {
        this["default"] = _value;
    };
    egwMenuItem.prototype.set_data = function (_value) {
        this.data = _value;
    };
    egwMenuItem.prototype.set_hint = function (_value) {
        this.hint = _value;
    };
    egwMenuItem.prototype.set_shortcutCaption = function (_value) {
        this.shortcutCaption = _value;
    };
    return egwMenuItem;
}());
exports.egwMenuItem = egwMenuItem;
