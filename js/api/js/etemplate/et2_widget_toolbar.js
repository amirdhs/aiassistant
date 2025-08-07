"use strict";
/**
 * EGroupware eTemplate2 - JS toolbar object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2013
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_toolbar = void 0;
/*egw:uses
    /vendor/bower-asset/jquery/dist/jquery.js;
    et2_DOMWidget;
*/
var et2_core_DOMWidget_1 = require("./et2_core_DOMWidget");
var et2_core_widget_1 = require("./et2_core_widget");
var et2_core_inheritance_1 = require("./et2_core_inheritance");
var egw_action_1 = require("../egw_action/egw_action");
var egw_global_1 = require("../jsapi/egw_global");
var egw_action_common_1 = require("../egw_action/egw_action_common");
var Et2Dialog_1 = require("./Et2Dialog/Et2Dialog");
var Et2DropdownButton_1 = require("./Et2DropdownButton/Et2DropdownButton");
var Et2Widget_1 = require("./Et2Widget/Et2Widget");
var interactjs_1 = require("@interactjs/interactjs");
/**
 * This toolbar gets its contents from its actions
 *
 * @augments et2_valueWidget
 */
var et2_toolbar = /** @class */ (function (_super) {
    __extends(et2_toolbar, _super);
    function et2_toolbar(_parent, _attrs, _child) {
        var _this = 
        // Call the inherited constructor
        _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_toolbar._attributes, _child || {})) || this;
        /**
         * id of last action executed / value of toolbar if submitted
         */
        _this.value = null;
        /**
         * actionbox is a div for stored actions
         */
        _this.actionbox = null;
        /**
         * actionlist is a div for active actions
         */
        _this.actionlist = null;
        _this.div = null;
        _this.countActions = 0;
        _this.dropdowns = {};
        _this.preference = {};
        _this.menu = null;
        _this._objectManager = null;
        _this.div = jQuery(document.createElement('div'))
            .addClass('et2_toolbar');
        // Set proper id and dom_id for the widget
        _this.set_id(_this.id);
        if (!_this.options.preference_id) {
            _this.options.preference_id = _this.dom_id;
        }
        if (!_this.options.preference_app) {
            _this.options.preference_app = _this.egw().app_name();
        }
        _this.actionbox = jQuery(document.createElement('details'))
            .addClass("et2_toolbar_more")
            .attr('id', _this.id + '-' + 'actionbox');
        _this.actionlist = jQuery(document.createElement('div'))
            .addClass("et2_toolbar_actionlist")
            .attr('id', _this.id + '-' + 'actionlist');
        _this.countActions = 0;
        _this.dropdowns = {};
        _this.preference = {};
        _this._build_menu(et2_toolbar.default_toolbar, true);
        return _this;
    }
    et2_toolbar.prototype.destroy = function () {
        // Destroy widget
        if (this.div && this.div.data('ui-menu'))
            this.menu.menu("destroy");
        // Null children
        // Remove
        this.div.empty().remove();
        this.actionbox.empty().remove();
        this.actionlist.empty().remove();
    };
    /**
     * Fix function in order to fix toolbar preferences with the new preference structure
     * @param {action object} _action
     * @todo ** SEE IMPORTANT TODO **
     */
    et2_toolbar.prototype._fix_preference = function (_action) {
        // ** IMPORTANT TODO: This switch case should be removed for new release **
        // This is an ugly hack but we need to add this switch becuase to update and fix
        // current users toolbar preferences with the new structure which is:
        // - All actions should be stored in preference
        // - Actions inside menu set as true
        // - Actions outside menu set as false
        // - if an action gets added to toolbar it would be undefined in
        //  the preference which we need to consider to add it to the preference
        //  according to its toolbarDefault option.
        if (this.dom_id === 'mail-display_displayToolbar' || this.dom_id === 'mail-index_toolbar') {
            switch (_action.id) {
                // Actions newly added to mail index and display toolbar
                case 'read':
                case 'label1':
                case 'label2':
                case 'label3':
                case 'label4':
                case 'label5':
                    this.set_prefered(_action.id, !_action.toolbarDefault);
                    break;
                default:
                    // Fix structure and add the actions not the preference
                    // into the preference with value false, as they're already
                    // outside of the menu.
                    this.set_prefered(_action.id, false);
            }
        }
        else {
            // ** IMPORTANT TODO: This line needs to stay and be fixed with !toolbarDefault after the if condition
            // has been removed.
            this.set_prefered(_action.id, false /*!toolbarDefault*/);
        }
    };
    /**
     * Count number of actions including their children
     * @param {object} actions
     * @return {number} return total number of actions
     */
    et2_toolbar.prototype._countActions = function (actions) {
        var totalCount = 0;
        var childCounter = function (action, count) {
            var children = action.children || 0, returnCounter = count || 0;
            if (children) {
                returnCounter -= 1;
                for (var nChild in children) {
                    returnCounter += 1;
                    returnCounter = childCounter(children[nChild], returnCounter);
                }
            }
            else {
                returnCounter = count;
            }
            return returnCounter;
        };
        for (var nAction in actions) {
            if (this.options.flat_list) {
                totalCount += childCounter(actions[nAction], 1);
            }
            else {
                totalCount++;
            }
        }
        return totalCount;
    };
    /**
     * Go through actions and build buttons for the toolbar
     *
     * @param {Object} actions egw-actions to build menu from
     * @param {boolean} isDefault setting isDefault with true will
     *  avoid actions get into the preferences, for instandce, first
     *  time toolbar_default actions initialization.
     */
    et2_toolbar.prototype._build_menu = function (actions, isDefault) {
        var _this = this;
        // Clear existing
        this.div.empty();
        this.actionbox
            .removeClass('et2_dropZone')
            .empty();
        this.actionlist
            .removeClass('et2_dropZone')
            .empty();
        var admin_setting = this.options.is_admin ? '<span class="toolbar-admin-pref" title="' + egw_global_1.egw.lang('Admin settings') + ' ..."></span>' : '';
        var list_header = this.options.list_header == 'more' ? true : false;
        this.actionbox.append('<summary class="ui-toolbar-menulistHeader' + (!list_header ? ' list_header-short' : ' ') + '">' + (list_header ? egw_global_1.egw.lang('more') + ' ...' : '') + admin_setting + '</summary>');
        this.actionbox.append('<div id="' + this.id + '-menulist' + '" class="ui-toolbar-menulist" ></div>');
        var that = this;
        if (this.options.is_admin) {
            this.actionbox.find('.toolbar-admin-pref').click(function (e) {
                egw_global_1.egw.json('EGroupware\\Api\\Etemplate\\Widget\\Toolbar::ajax_get_default_prefs', [that.options.preference_app, that.options.preference_id], function (_prefs) {
                    var prefs = [];
                    for (var p in _prefs) {
                        if (_prefs[p] === false)
                            prefs.push(p);
                    }
                    that._admin_settings_dialog.call(that, actions, prefs);
                }).sendRequest(true);
                return false;
            });
            this.actionbox.addClass('admin');
        }
        var pref = (!egw_action_common_1.egwIsMobile()) ? egw_global_1.egw.preference(this.options.preference_id, this.options.preference_app) : undefined;
        // check pref has a reasonable value: is a real object (not an array), strings e.g. stall the whole widget
        if (pref && typeof pref === 'object' && !Array.isArray(pref)) {
            this.preference = pref;
        }
        //Set the default actions for the first time
        if (typeof pref === 'undefined' && !isDefault) {
            for (var name in actions) {
                if ((typeof actions[name].children === 'undefined' || !this.options.flat_list) && actions[name].id) {
                    this.set_prefered(actions[name].id, !actions[name].toolbarDefault);
                }
            }
        }
        else if (!isDefault) {
            for (var name in actions) {
                // Check if the action is not in the preference, means it's an new added action
                // therefore it needs to be added to the preference with taking its toolbarDefault
                // option into account.
                if ((typeof actions[name].children === 'undefined' || !this.options.flat_list)
                    && typeof pref[name] === 'undefined') {
                    this._fix_preference(actions[name]);
                }
            }
        }
        var menuLen = 0;
        for (var key in this.preference) {
            if (this.preference[key])
                menuLen++;
        }
        this.countActions = this._countActions(actions) - menuLen;
        var last_group = null;
        var last_group_id = null;
        var _loop_1 = function (name_1) {
            var action = actions[name_1];
            if (typeof action == 'string')
                action = { id: name_1, caption: action };
            if (typeof action.group == 'undefined') {
                action.group = 'default';
            }
            // Add in divider
            if (last_group_id != action.group) {
                last_group = jQuery('[data-group="' + action.group + '"]', this_1.actionlist);
                if (last_group.length == 0) {
                    jQuery('<span data-group="' + action.group + '">').appendTo(this_1.actionlist);
                }
                last_group_id = action.group;
            }
            // Make sure there's something to display
            if (!action.caption && !action.icon && !action.iconUrl)
                return "continue";
            if (action.children) {
                var children = {};
                var add_children_1 = function (root, children) {
                    for (var id in root.children) {
                        var info = {
                            id: id || root.children[id].id,
                            value: id || root.children[id].id,
                            label: root.children[id].caption
                        };
                        var childaction = {};
                        if (root.children[id].iconUrl) {
                            info['icon'] = root.children[id].iconUrl;
                        }
                        if (root.children[id].children) {
                            add_children_1(root.children[id], info);
                        }
                        children[id] = info;
                        if (that.options.flat_list) {
                            childaction = root.children[id];
                            if (typeof pref === 'undefined' && !isDefault) {
                                if (!childaction['toolbarDefault']) {
                                    that.set_prefered(childaction['id'], true);
                                }
                                else {
                                    that.set_prefered(childaction['id'], false);
                                }
                            }
                            else if (!isDefault) {
                                if (typeof pref[childaction['id']] === 'undefined') {
                                    that._fix_preference(childaction);
                                }
                            }
                            if (typeof root.children[id].group !== 'undefined' &&
                                typeof root.group !== 'undefined') {
                                childaction['group'] = root.group;
                            }
                            that._make_button(childaction);
                        }
                    }
                };
                add_children_1(action, children);
                if (this_1.options.flat_list && children) {
                    return "continue";
                }
                var dropdown_1 = Et2Widget_1.loadWebComponent("et2-dropdown-button", {
                    id: this_1.id + "-" + action.id,
                    label: action.caption,
                    class: this_1.preference[action.id] ? "et2_toolbar-dropdown et2_toolbar_draggable" + this_1.id + " et2_toolbar-dropdown-menulist" : "et2_toolbar-dropdown et2_toolbar_draggable" + this_1.id,
                    onchange: function (ev) {
                        var action = that._actionManager.getActionById(dropdown_1.value);
                        dropdown_1.set_label(action.caption);
                        if (action) {
                            this.value = action.id;
                            action.execute([]);
                        }
                        //console.debug(selected, this, action);
                    }.bind(action),
                    image: action.iconUrl || ''
                }, this_1);
                dropdown_1.select_options = Object.values(children);
                //Set default selected action
                if (typeof action.children != 'undefined') {
                    for (var child in action.children) {
                        if (action.children[child].default) {
                            dropdown_1.label = action.children[child].caption;
                        }
                    }
                }
                dropdown_1.onclick = function (selected, dropdown) {
                    var action = that._actionManager.getActionById(this.getValue());
                    if (action) {
                        this.value = action.id;
                        action.execute([]);
                    }
                    //console.debug(selected, this, action);
                }.bind(dropdown_1);
                jQuery(dropdown_1.getDOMNode()).appendTo(this_1.preference[action.id] ? this_1.actionbox.children()[1] : jQuery('[data-group=' + action.group + ']', this_1.actionlist));
            }
            else {
                this_1._make_button(action);
            }
        };
        var this_1 = this;
        for (var name_1 in actions) {
            _loop_1(name_1);
        }
        // ************** Drag and Drop feature for toolbar *****
        this.actionlist.find('span[data-group]').sort(function (lg, g) {
            return +lg.getAttribute('data-group') - +g.getAttribute('data-group');
        }).appendTo(this.actionlist);
        this.actionlist.appendTo(this.div);
        this.actionbox.appendTo(this.div);
        var toolbar = this.actionlist.find('span[data-group]'), toolbox = this.actionbox;
        this.actionlist[0].classList.add("et2_toolbar_dropzone_list" + this.id);
        this.actionbox[0].classList.add("et2_toolbar_dropzone_more" + this.id);
        this.actions = actions;
        if (!egw_action_common_1.egwIsMobile()) {
            var dragPosition_1 = { x: 0, y: 0 };
            var dragTranslate_1 = { x: 0, y: 0 };
            var draggables = this.getDOMNode().querySelectorAll(".et2_toolbar_draggable" + this.id);
            draggables.forEach(function (_item) {
                interactjs_1.default(_item).draggable({
                    startAxis: 'xy',
                    listeners: {
                        start: function (e) {
                            dragPosition_1 = { x: e.page.x, y: e.page.y };
                            e.target.setAttribute('style', "width:" + e.target.clientWidth + "px !important");
                            e.target.style.position = 'fixed';
                            e.target.style.transform =
                                "translate(" + dragPosition_1.x + "px, " + dragPosition_1.y + "px)";
                        },
                        move: function (e) {
                            dragTranslate_1.x += e.delta.x;
                            dragTranslate_1.y += e.delta.y;
                            e.target.style.transform =
                                "translate(" + dragTranslate_1.x + "px, " + dragTranslate_1.y + "px)";
                        },
                        end: function (e) {
                            that._build_menu(that.actions);
                        }
                    }
                });
            });
            interactjs_1.default(".et2_toolbar_dropzone_list" + this.id).unset();
            interactjs_1.default(".et2_toolbar_dropzone_list" + this.id).dropzone({
                checker: function (dragEvent, // related dragmove or dragend
                event, // Touch, Pointer or Mouse Event
                dropped, // bool default checker result
                dropzone, // dropzone Interactable
                dropzoneElement, // dropzone element
                draggable, // draggable Interactable
                draggableElement // draggable element
                ) {
                    return dropped && !dropzoneElement.contains(draggableElement);
                },
                accept: ".et2_toolbar_draggable" + this.id,
                ondrop: function (e) {
                    that.set_prefered(e.draggable.target.id.replace(that.id + '-', ''), false);
                    that._build_menu(that.actions);
                },
                ondragenter: function (e) {
                    e.target.classList.add('et2_dropZone');
                },
                ondragleave: function (e) {
                    e.target.classList.remove('et2_dropZone');
                }
            });
            var menulist = [".et2_toolbar_dropzone_more" + this.id, "#" + this.id + "-menulist"];
            menulist.forEach(function (_item) {
                interactjs_1.default(_item).unset();
                interactjs_1.default(_item).dropzone({
                    checker: function (dragEvent, // related dragmove or dragend
                    event, // Touch, Pointer or Mouse Event
                    dropped, // bool default checker result
                    dropzone, // dropzone Interactable
                    dropzoneElement, // dropzone element
                    draggable, // draggable Interactable
                    draggableElement // draggable element
                    ) {
                        console.log(dragEvent);
                        return dropped && !dropzoneElement.contains(draggableElement);
                    },
                    accept: ".et2_toolbar_draggable" + _this.id,
                    ondrop: function (e) {
                        that.set_prefered(e.draggable.target.id.replace(that.id + '-', ''), true);
                        if (that.actionlist.find(".et2_toolbar_draggable" + that.id).length == 0) {
                            that.preference = {};
                            egw_global_1.egw.set_preference(that.options.preference_app, that.options.preference_id, that.preference);
                        }
                        that._build_menu(that.actions);
                    },
                    ondragenter: function (e) {
                        e.target.classList.add('et2_dropZone');
                    },
                    ondragleave: function (e) {
                        e.target.classList.remove('et2_dropZone');
                    }
                });
            });
        }
        toolbox.on('toggle', function (e) {
            var details = e.target;
            if (details.open) {
                jQuery('html').on('click.outsideOfMenu', function (e) {
                    // Clicking on dropdown button should not close the details, we'd like to see the dropdown
                    if (e.target instanceof Et2DropdownButton_1.Et2DropdownButton) {
                        return;
                    }
                    if (e.target != details && e.target != details.firstChild) {
                        details.open = false;
                    }
                    jQuery('html').unbind('click.outsideOfMenu');
                });
            }
        });
    };
    /**
     * Add/Or remove an action from prefence
     *
     * @param {string} _action name of the action which needs to be stored in pereference
     * @param {boolean} _state if set to true action will be set to actionbox, false will set it to actionlist
     *
     */
    et2_toolbar.prototype.set_prefered = function (_action, _state) {
        this.preference[_action] = _state;
        if (egw_action_common_1.egwIsMobile())
            return;
        egw_global_1.egw.set_preference(this.options.preference_app, this.options.preference_id, this.preference);
    };
    /**
     * Make a button based on the given action
     *
     * @param {Object} action action object with attributes icon, caption, ...
     */
    et2_toolbar.prototype._make_button = function (action) {
        var _a, _b, _c, _d;
        var self = this;
        var isCheckbox = action && action.checkbox;
        var isToggleSwitch = ((_a = action.data) === null || _a === void 0 ? void 0 : _a.toggle_on) || ((_b = action.data) === null || _b === void 0 ? void 0 : _b.toggle_off) || ((_c = action.data) === null || _c === void 0 ? void 0 : _c.onIcon) || ((_d = action.data) === null || _d === void 0 ? void 0 : _d.offIcon);
        var actionHandler = function (action, e) {
            var actionObj = this._actionManager.getActionById(action.id);
            if (actionObj) {
                if (actionObj.checkbox) {
                    self.checkbox(actionObj.id, !actionObj.checked);
                }
                this.value = actionObj.id;
                actionObj.data.event = e;
                actionObj.execute([]);
            }
        }.bind(this, action);
        var widget = null;
        if (isToggleSwitch) {
            var component = "et2-switch";
            var attrs = {
                id: this.id + "-" + action.id,
                label: action.caption,
                toggleOn: action.data.toggle_on,
                toggleOff: action.data.toggle_off,
                class: "et2_toolbar_draggable" + this.id,
            };
            if (action.data.onIcon || action.data.offIcon) {
                component = "et2-switch-icon";
                if (action.data.onIcon) {
                    attrs["onIcon"] = action.data.onIcon;
                }
                if (action.data.offIcon) {
                    attrs["offIcon"] = action.data.offIcon;
                }
            }
            widget = Et2Widget_1.loadWebComponent(component, attrs, this);
            widget.style.backgroundImage = "url(" + action.iconUrl + ")";
            widget.value = action.checked;
            action.data.widget = widget;
            widget.onchange = actionHandler;
        }
        else {
            widget = Et2Widget_1.loadWebComponent(egw_action_common_1.egwIsMobile() && !this.preference[action.id] ? "et2-button-icon" : "et2-button", {
                id: this.id + "-" + action.id,
                image: action.iconUrl || '',
                label: action.caption,
                slot: "buttons",
                class: "et2_toolbar_draggable" + this.id,
                readonly: false
            }, this);
            if (egw_action_common_1.egwIsMobile() && !this.preference[action.id])
                widget.name = '';
            if (isCheckbox) {
                widget.classList.add('toolbar_toggle');
                if (this.checkbox(action.id))
                    widget.classList.add('toolbar_toggled' + (typeof action.toggledClass != 'undefined' ? " " + action.toggledClass : ''));
            }
            widget.onclick = actionHandler;
        }
        jQuery(widget.getDOMNode()).appendTo(this.preference[action.id] ? this.actionbox.children()[1] : jQuery('[data-group=' + action.group + ']', this.actionlist));
        if (action.caption) {
            if ((this.countActions <= parseInt(this.view_range) ||
                this.preference[action.id] || !action.iconUrl) &&
                !(isCheckbox && isToggleSwitch)) // no caption for slideswitch checkboxes
             {
                widget.classList.add(action.iconUrl ? 'et2_toolbar_hasCaption' : 'et2_toolbar_onlyCaption');
            }
        }
        if ((action.hint || action.caption) && !egw_action_common_1.egwIsMobile())
            widget.statustext = action.hint || action.caption;
    };
    /**
     * Link the actions to the DOM nodes / widget bits.
     *
     * @param {Object} actions egw-actions to build menu from
     */
    et2_toolbar.prototype._link_actions = function (actions) {
        this._build_menu(actions);
        var self = this;
        var gom = egw_action_1.egw_getObjectManager(this.egw().app_name(), true, 1);
        if (this._objectManager == null) {
            this._objectManager = gom.addObject(new egw_action_1.egwActionObjectManager(this.id, this._actionManager));
            this._objectManager.handleKeyPress = function (_keyCode, _shift, _ctrl, _alt) {
                for (var i = 0; i < self._actionManager.children.length; i++) {
                    var action = self._actionManager.children[i];
                    if (typeof action.shortcut === 'object' &&
                        action.shortcut &&
                        _keyCode == action.shortcut.keyCode &&
                        _ctrl == action.shortcut.ctrl &&
                        _alt == action.shortcut.alt &&
                        _shift == action.shortcut.shift) {
                        self.value = action.id;
                        action.execute([]);
                        return true;
                    }
                }
                return egw_action_1.egwActionObject.prototype.handleKeyPress.call(this, _keyCode, _shift, _ctrl, _alt);
            };
            this._objectManager.parent.updateFocusedChild(this._objectManager, true);
        }
    };
    /**
     * Set/Get the checkbox toolbar action
     *
     * @param {string} _action action name of the selected toolbar
     * @param {boolean} _value value that needs to be set for the action true|false
     *	- if no value means checkbox value returns the current value
     *
     * @returns {boolean} returns boolean result of get checkbox value
     * or returns undefined as Set result or failure
     */
    et2_toolbar.prototype.checkbox = function (_action, _value) {
        if (!_action || typeof this._actionManager == 'undefined')
            return undefined;
        var action_event = this._actionManager.getActionById(_action);
        if (action_event && typeof _value != 'undefined') {
            action_event.set_checked(_value);
            var btn = jQuery('#' + this.dom_id + '-' + _action);
            if (action_event.data && action_event.data.widget) {
                action_event.data.widget.set_value(_value);
            }
            else if (btn.length > 0) {
                btn.toggleClass('toolbar_toggled' + (typeof action_event.data.toggledClass != 'undefined' ? " " + action_event.data.toggledClass : ''), _value);
            }
        }
        else if (action_event) {
            return action_event.checked;
        }
        else {
            return undefined;
        }
    };
    et2_toolbar.prototype.getDOMNode = function () {
        return this.div[0];
    };
    /**
     * getValue has to return the value of the input widget
     */
    et2_toolbar.prototype.getValue = function () {
        return this.value;
    };
    /**
     * Is dirty returns true if the value of the widget has changed since it
     * was loaded.  We don't consider toolbars as dirtyable
     */
    et2_toolbar.prototype.isDirty = function () {
        return false;
    };
    /**
     * Causes the dirty flag to be reseted.
     */
    et2_toolbar.prototype.resetDirty = function () {
        this.value = null;
    };
    /**
     * Checks the data to see if it is valid, as far as the client side can tell.
     * Return true if it's not possible to tell on the client side, because the server
     * will have the chance to validate also.
     *
     * The messages array is to be populated with everything wrong with the data,
     * so don't stop checking after the first problem unless it really makes sense
     * to ignore other problems.
     *
     * @param {String[]} messages List of messages explaining the failure(s).
     *	messages should be fairly short, and already translated.
     *
     * @return {boolean} True if the value is valid (enough), false to fail
     */
    et2_toolbar.prototype.isValid = function (messages) {
        return true;
    };
    /**
     * Attach the container node of the widget to DOM-Tree
     * @returns {Boolean}
     */
    et2_toolbar.prototype.doLoadingFinished = function () {
        _super.prototype.doLoadingFinished.call(this);
        return false;
    };
    /**
     * Builds dialog for possible admin settings (e.g. default actions pref)
     *
     * @param {type} _actions
     * @param {object} _default_prefs
     */
    et2_toolbar.prototype._admin_settings_dialog = function (_actions, _default_prefs) {
        var buttons = [
            { label: egw_global_1.egw.lang("Save"), id: "save" },
            { label: egw_global_1.egw.lang("Close"), id: "close" }
        ];
        var self = this;
        var sel_options = { actions: [] };
        var content = { actions: [], reset: false };
        for (var key in _actions) {
            if (_actions[key]['children'] && this.options.flat_list) {
                for (var child in _actions[key]['children']) {
                    sel_options.actions.push({
                        id: child,
                        value: child,
                        label: _actions[key]['children'][child]['caption'],
                        app: self.options.preference_app,
                        icon: _actions[key]['children'][child]['iconUrl']
                    });
                }
            }
            else {
                sel_options.actions.push({
                    id: key,
                    value: key,
                    label: _actions[key]['caption'],
                    app: self.options.preference_app,
                    icon: _actions[key]['iconUrl']
                });
            }
            if ((!_default_prefs || _default_prefs.length == 0) && _actions[key]['toolbarDefault']) {
                content.actions.push(key);
            }
        }
        if (_default_prefs && _default_prefs.length > 0) {
            content.actions = _default_prefs;
        }
        var dialog = new Et2Dialog_1.Et2Dialog(this.egw());
        dialog.transformAttributes({
            callback: function (_button_id, _value) {
                if (_button_id == 'save' && _value) {
                    if (_value.actions) {
                        var pref = jQuery.extend({}, self.preference);
                        for (var i in pref) {
                            pref[i] = true;
                            if (_value.actions.includes(i)) {
                                pref[i] = false;
                            }
                        }
                        _value.actions = pref;
                    }
                    egw_global_1.egw.json('EGroupware\\Api\\Etemplate\\Widget\\Toolbar::ajax_setAdminSettings', [_value, self.options.preference_id, self.options.preference_app], function (_result) {
                        egw_global_1.egw.message(_result);
                    }).sendRequest(true);
                }
            },
            title: egw_global_1.egw.lang('admin settings for %1', this.options.preference_id),
            buttons: buttons,
            minWidth: 600,
            minHeight: 300,
            value: { content: content, sel_options: sel_options },
            template: egw_global_1.egw.webserverUrl + '/api/templates/default/toolbarAdminSettings.xet?1',
            resizable: false
        });
        document.body.appendChild(dialog);
    };
    et2_toolbar._attributes = {
        "view_range": {
            "name": "View range",
            "type": "string",
            "default": "5",
            "description": "Define minimum action view range to show actions by both icons and caption"
        },
        "flat_list": {
            "name": "Flat list",
            "type": "boolean",
            "default": true,
            "description": "Define whether the actions with children should be shown as dropdown or flat list"
        },
        "list_header": {
            "name": "list header style",
            "type": "string",
            "default": "short",
            "description": "Define a style for list header (more ...), which can get short 3dots with no caption or bigger button with caption more ..."
        },
        "preference_id": {
            "name": "Preference id",
            "type": "string",
            "default": false,
            "description": "Define a custom preference id for saving the toolbar preferences." +
                "This is useful when you have the same toolbar and you use it in a pop up but also in a tab, which have different dom ids" +
                "When not set it defaults to the dom id of the form."
        },
        "preference_app": {
            "name": "Preference application",
            "type": "string",
            "default": false,
            "description": "Define a custom preference application for saving the toolbar preferences." +
                "This is useful when you have the same toolbar and you use it in a pop up but also in a tab, wich have different application names" +
                "When not set it defaults to the result of this.egw().app_name();"
        }
    };
    /**
     * Default buttons, so there is something for the widget browser / editor to show
     */
    et2_toolbar.default_toolbar = {
        view: { caption: 'View', icons: { primary: 'ui-icon-check' }, group: 1, toolbarDefault: true },
        edit: { caption: 'Edit', group: 1, toolbarDefault: true },
        save: { caption: 'Save', group: 2, toolbarDefault: true }
    };
    return et2_toolbar;
}(et2_core_DOMWidget_1.et2_DOMWidget));
exports.et2_toolbar = et2_toolbar;
et2_core_widget_1.et2_register_widget(et2_toolbar, ["toolbar"]);
