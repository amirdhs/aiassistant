"use strict";
/**
 * EGroupware eTemplate2 - JS Custom fields object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2011
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_customfields_list = void 0;
/*egw:uses
    lib/tooltip;
    /vendor/bower-asset/jquery/dist/jquery.js;
    et2_core_xml;
    et2_core_DOMWidget;
    et2_core_inputWidget;
*/
var et2_core_widget_1 = require("./et2_core_widget");
var et2_core_inheritance_1 = require("./et2_core_inheritance");
var et2_core_valueWidget_1 = require("./et2_core_valueWidget");
var et2_core_common_1 = require("./et2_core_common");
var Et2Widget_1 = require("./Et2Widget/Et2Widget");
var Et2Tabs_1 = require("./Layout/Et2Tabs/Et2Tabs");
var et2_customfields_list = /** @class */ (function (_super) {
    __extends(et2_customfields_list, _super);
    function et2_customfields_list(_parent, _attrs, _child) {
        var _a;
        var _this = _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_customfields_list._attributes, _child || {})) || this;
        _this.rows = {};
        _this.widgets = {};
        _this.detachedNodes = [];
        // Some apps (infolog edit) don't give ID, so assign one to get settings
        if (!_this.id) {
            _this.id = _attrs.id = et2_customfields_list.DEFAULT_ID;
            // Add all attributes hidden in the content arrays to the attributes
            // parameter
            _this.transformAttributes(_attrs);
            // Create a local copy of the options object
            _this.options = et2_core_common_1.et2_cloneObject(_attrs);
        }
        // Create the table body and the table
        _this.tbody = jQuery(document.createElement("tbody"));
        _this.table = jQuery(document.createElement("table"))
            .addClass("et2_grid et2_customfield_list");
        _this.table.append(_this.tbody);
        if (!_this.options.fields)
            _this.options.fields = {};
        if (typeof _this.options.fields === 'string') {
            var fields = _this.options.fields.split(',');
            _this.options.fields = {};
            for (var i = 0; i < fields.length; i++) {
                _this.options.fields[fields[i]] = true;
            }
        }
        // allow to use previous type_filter
        if (_this.options.type_filter === "previous") {
            _this.options.type_filter = et2_customfields_list.previous_type_filter;
        }
        et2_customfields_list.previous_type_filter = _this.options.type_filter;
        if (_this.options.type_filter && typeof _this.options.type_filter == "string") {
            _this.options.type_filter = _this.options.type_filter.split(",");
        }
        if (_this.options.type_filter) {
            for (var field_name in _this.options.customfields) {
                if (!_this.options.customfields[field_name].type2 || _this.options.customfields[field_name].type2.length == 0 ||
                    _this.options.customfields[field_name].type2 == '0') {
                    // No restrictions
                    _this.options.fields[field_name] = true;
                    continue;
                }
                var types = typeof _this.options.customfields[field_name].type2 == 'string' ? _this.options.customfields[field_name].type2.split(",") : _this.options.customfields[field_name].type2;
                _this.options.fields[field_name] = false;
                for (var i = 0; i < types.length; i++) {
                    if (jQuery.inArray(types[i], _this.options.type_filter) > -1) {
                        _this.options.fields[field_name] = true;
                    }
                }
            }
        }
        // tab === "panel" --> use label of tab panel
        var default_tab = (_a = Et2Tabs_1.Et2Tabs.getTabPanel(_this)) === null || _a === void 0 ? void 0 : _a.match(/^cf-default(-(non-)?private)?$/);
        if (_this.options.tab === 'panel') {
            if (default_tab) {
                _this.options.tab = null;
            }
            else {
                _this.options.tab = Et2Tabs_1.Et2Tabs.getTabPanel(_this, true);
            }
        }
        var exclude = _this.options.exclude ? _this.options.exclude.split(',') : [];
        // filter fields additionally by tab attribute
        if (typeof _this.options.fields === "undefined" || !Object.keys(_this.options.fields).length) {
            _this.options.fields = {};
            for (var field_name in _this.options.customfields) {
                if (exclude.indexOf(field_name) >= 0)
                    continue;
                if (_this.options.customfields[field_name].tab) {
                    _this.options.fields[field_name] = _this.options.customfields[field_name].tab === _this.options.tab;
                }
                else if (default_tab) {
                    if (_this.options.customfields[field_name].private.length) // private cf
                     {
                        _this.options.fields[field_name] = default_tab[1] !== '-non-private';
                    }
                    else // non-private cf
                     {
                        _this.options.fields[field_name] = default_tab[1] !== '-private';
                    }
                }
            }
        }
        else {
            for (var field_name in _this.options.customfields) {
                // check if we have a type-filter and field does NOT match it --> ignore / skip field
                if (_this.options.type_filter && _this.options.fields[field_name] !== true)
                    continue;
                if (exclude.indexOf(field_name) >= 0) {
                    _this.options.fields[field_name] = false;
                }
                else if (default_tab ? _this.options.customfields[field_name].tab : _this.options.customfields[field_name].tab !== _this.options.tab && _this.options.tab) {
                    _this.options.fields[field_name] = false;
                }
                else if (default_tab) {
                    if (_this.options.customfields[field_name].private.length) // private cf
                     {
                        _this.options.fields[field_name] = default_tab[1] !== '-non-private';
                    }
                    else if (_this.options.fields[field_name]) // non-private cf
                     {
                        _this.options.fields[field_name] = default_tab[1] !== '-private';
                    }
                }
            }
        }
        _this.setDOMNode(_this.table[0]);
        return _this;
    }
    et2_customfields_list.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.rows = {};
        this.widgets = {};
        this.detachedNodes = [];
        this.tbody.empty();
        this.tbody = null;
        this.table.empty();
        this.table.remove();
        this.table = null;
    };
    /**
     * What does this do?  I don't know, but when everything is done the second
     * time, this makes it work.  Otherwise, all custom fields are lost.
     */
    et2_customfields_list.prototype.assign = function (_obj) {
        this.loadFields();
    };
    et2_customfields_list.prototype.getDOMNode = function (_sender) {
        // Check whether the _sender object exists inside the management array
        if (this.rows && _sender.id && this.rows[_sender.id]) {
            return this.rows[_sender.id];
        }
        if (this.rows && _sender.id && _sender.id.indexOf("_label") && this.rows[_sender.id.replace("_label", "")]) {
            return jQuery(this.rows[_sender.id.replace("_label", "")]).prev("td")[0] || null;
        }
        return _super.prototype.getDOMNode.call(this, _sender);
    };
    /**
     * Initialize widgets for custom fields
     */
    et2_customfields_list.prototype.loadFields = function () {
        var _this = this;
        if (!this.options || !this.options.customfields)
            return;
        // Already set up - avoid duplicates in nextmatch
        if (this.getType() == 'customfields-list' && !this.isInTree() && Object.keys(this.widgets).length > 0)
            return;
        if (!jQuery.isEmptyObject(this.widgets))
            return;
        // Check for global setting changes (visibility)
        var global_data = this.getArrayMgr("modifications").getRoot().getEntry('~custom_fields~');
        if (global_data && global_data.fields && !this.options.fields)
            this.options.fields = global_data.fields;
        // For checking app entries
        var apps = this.egw().link_app_list();
        var _loop_1 = function (field_name) {
            // Skip fields if we're filtering
            if (this_1.getType() != 'customfields-list' && !jQuery.isEmptyObject(this_1.options.fields) && !this_1.options.fields[field_name])
                return "continue";
            var field = this_1.options.customfields[field_name];
            var id = this_1.options.prefix + field_name;
            // Need curlies around ID for nm row expansion
            if (this_1.id == '$row') {
                id = "{" + this_1.id + "}" + "[" + this_1.options.prefix + field_name + "]";
            }
            else if (this_1.id != et2_customfields_list.DEFAULT_ID) {
                // Prefix this ID to avoid potential ID collisions
                id = this_1.id + "[" + id + "]";
            }
            // Avoid creating field twice
            if (!this_1.rows[id]) {
                var row = jQuery(document.createElement("tr"))
                    .appendTo(this_1.tbody)
                    .addClass(this_1.id + '_' + id);
                var cf = jQuery(document.createElement("td"))
                    .appendTo(row);
                if (!field.type)
                    field.type = 'text";';
                var setup_function = '_setup_' + (apps[field.type] ? 'link_entry' : field.type.replace("-", "_"));
                var attrs = jQuery.extend({}, this_1.options[field_name] ? this_1.options[field_name] : {}, {
                    'id': id,
                    'statustext': field.help || '',
                    'needed': field.needed,
                    'readonly': this_1.getArrayMgr("readonlys").isReadOnly(id, "" + this_1.options.readonly),
                    'value': this_1.options.value[this_1.options.prefix + field_name]
                });
                // Can't have a required readonly, it will warn & be removed later, so avoid the warning
                if (attrs.readonly === true)
                    delete attrs.needed;
                if (this_1.options.onchange) {
                    attrs.onchange = this_1.options.onchange;
                }
                if (this_1[setup_function]) {
                    var no_skip = this_1[setup_function].call(this_1, field_name, field, attrs);
                    if (!no_skip)
                        return "continue";
                }
                this_1.rows[id] = cf[0];
                var labelWidget = null;
                var useLabelWidget = false;
                if (this_1.getType() == 'customfields-list') {
                    // No label, custom widget
                    attrs.readonly = true;
                    // Widget tooltips don't work in nextmatch because of the creation / binding separation
                    // Set title to field label so browser will show something
                    // Add field label & help as data attribute to row, so it can be stylied with CSS (title should be disabled)
                    row.attr('title', field.label);
                    row.attr('data-label', field.label);
                    row.attr('data-field', field_name);
                    row.attr('data-help', field.help);
                    this_1.detachedNodes.push(row[0]);
                }
                else {
                    // Label in first column, widget in 2nd
                    var label = this_1.options.label || field.label || '';
                    var label_td = jQuery(document.createElement("td")).prependTo(row);
                    if (['label', 'header'].indexOf(attrs.type || field.type) !== -1) {
                        useLabelWidget = true;
                        label_td.attr('colspan', 2).addClass('et2_customfield_' + (attrs.type || field.type));
                    }
                    labelWidget = et2_core_widget_1.et2_createWidget("label", { id: id + "_label", value: label.trim(), for: id }, this_1);
                }
                var type = attrs.type ? attrs.type : field.type;
                // Set any additional attributes set in options, but not for widgets that pass actual options
                if (['select', 'radio', 'radiogroup', 'checkbox', 'button'].indexOf(field.type) == -1 &&
                    setup_function !== '_setup_link_entry' && !jQuery.isEmptyObject(field.values)) {
                    var w = et2_core_widget_1.et2_registry[type];
                    var wc = useLabelWidget && labelWidget ? window.customElements.get("et2-label") : window.customElements.get('et2-' + type);
                    if (wc) {
                        for (var attr_name in field.values) {
                            if (wc.getPropertyOptions(attr_name)) {
                                attrs[attr_name] = field.values[attr_name];
                            }
                        }
                    }
                    else if (typeof w !== 'undefined') {
                        for (var attr_name in field.values) {
                            if (typeof w._attributes[attr_name] != "undefined") {
                                attrs[attr_name] = field.values[attr_name];
                            }
                        }
                    }
                }
                // Create widget
                if (window.customElements.get('et2-' + type) || useLabelWidget) {
                    if (typeof attrs.needed !== 'undefined') {
                        attrs.required = attrs.needed;
                        delete attrs.needed;
                    }
                    if (typeof attrs.size !== 'undefined' && ['small', 'medium', 'large'].indexOf(attrs.size) === -1) {
                        if (attrs.size > 0) {
                            attrs.width = attrs.size + 'em';
                        }
                        delete attrs.size;
                    }
                    if (['label', 'header'].indexOf(attrs.type || field.type) !== -1 && labelWidget) {
                        // Re-use label, don't create new
                        delete attrs.id;
                        Object.assign(labelWidget, __assign({ for: undefined }, attrs));
                    }
                    else {
                        //this.widgets[field_name] = loadWebComponent('et2-' + type, attrs, null);
                        // et2_extension_customfields.getDOMNode() needs webcomponent to have ID before it can put it in
                        var wc_1 = Et2Widget_1.loadWebComponent('et2-' + type, attrs, this_1);
                        wc_1.setParent(this_1);
                        wc_1.updateComplete.then(function () {
                            _this.widgets[field_name] = wc_1;
                        });
                    }
                }
                else if (typeof et2_core_widget_1.et2_registry[type] !== 'undefined') {
                    this_1.widgets[field_name] = et2_core_widget_1.et2_createWidget(type, attrs, this_1);
                }
            }
            // Field is not to be shown
            if (!this_1.options.fields || jQuery.isEmptyObject(this_1.options.fields) || this_1.options.fields[field_name] == true) {
                jQuery(this_1.rows[field_name]).show();
            }
            else {
                jQuery(this_1.rows[field_name]).hide();
            }
        };
        var this_1 = this;
        // Create the table rows
        for (var field_name in this.options.customfields) {
            _loop_1(field_name);
        }
    };
    /**
     * Read needed info on available custom fields from various places it's stored.
     */
    et2_customfields_list.prototype.transformAttributes = function (_attrs) {
        var _a;
        _super.prototype.transformAttributes.call(this, _attrs);
        // Add in settings that are objects
        // Customized settings for this widget (unlikely)
        var data = this.id ? (_a = this.getArrayMgr("modifications").getEntry(this.id)) !== null && _a !== void 0 ? _a : {} : {};
        // Check for global settings
        var global_data = this.getArrayMgr("modifications").getRoot().getEntry('~custom_fields~', true);
        if (global_data) {
            for (var key_1 in data) {
                // Don't overwrite fields / customfields with global values
                if (global_data[key_1] && key_1 !== 'fields' && (key_1 !== "customfields" || !data.customfields || !Object.keys(data.customfields).length)) {
                    data[key_1] = __assign(__assign({}, data[key_1]), global_data[key_1]);
                }
            }
        }
        for (var key in data) {
            _attrs[key] = data[key];
        }
        for (var key_2 in global_data) {
            if (typeof global_data[key_2] != 'undefined' && !_attrs[key_2])
                _attrs[key_2] = global_data[key_2];
        }
        if (this.id) {
            // Set the value for this element
            var contentMgr = this.getArrayMgr("content");
            if (contentMgr != null) {
                var val = contentMgr.getEntry(this.id);
                _attrs["value"] = {};
                var prefix = _attrs["prefix"] || et2_customfields_list.PREFIX;
                if (val !== null) {
                    if (this.id.indexOf(prefix) === 0 && typeof data.fields != 'undefined' && data.fields[this.id.replace(prefix, '')] === true) {
                        _attrs['value'][this.id] = val;
                    }
                    else {
                        // Only set the values that match desired custom fields
                        for (var key_3 in val) {
                            if (key_3.indexOf(prefix) === 0) {
                                _attrs["value"][key_3] = val[key_3];
                            }
                        }
                    }
                    //_attrs["value"] = val;
                }
                else {
                    // Check for custom fields directly in record
                    for (var key in _attrs.customfields) {
                        _attrs["value"][prefix + key] = contentMgr.getEntry(prefix + key);
                    }
                }
            }
        }
    };
    et2_customfields_list.prototype.loadFromXML = function (_node) {
        this.loadFields();
        // Load the nodes as usual
        _super.prototype.loadFromXML.call(this, _node);
    };
    et2_customfields_list.prototype.set_label = function (_value) {
        var _this = this;
        // If we've got a field list, or all fields use normal label
        if (this.getType() == 'customfields-list' || jQuery.isEmptyObject(this.options.fields) ||
            Object.keys(this.options.fields).filter(function (f) { return _this.options.fields[f]; }).length != 1) {
            return _super.prototype.set_label.call(this, _value);
        }
        // For single field, we apply the widget label to the single field
    };
    et2_customfields_list.prototype.set_value = function (_value) {
        if (!this.options.customfields)
            return;
        for (var field_name in this.options.customfields) {
            // Skip fields if we're filtering
            if (!jQuery.isEmptyObject(this.options.fields) && !this.options.fields[field_name])
                continue;
            // Make sure widget is created, and has the needed function
            if (!this.widgets[field_name] || !this.widgets[field_name].set_value)
                continue;
            var value = _value[this.options.prefix + field_name] ? _value[this.options.prefix + field_name] : null;
            // Check if ID was missing
            if (value == null && this.id == et2_customfields_list.DEFAULT_ID && this.getArrayMgr("content").getEntry(this.options.prefix + field_name)) {
                value = this.getArrayMgr("content").getEntry(this.options.prefix + field_name);
            }
            switch (this.options.customfields[field_name].type) {
                case 'date':
                    // Date custom fields are always in Y-m-d, which seldom matches user's preference
                    // which fails when sent to date widget.  This is only used for nm rows, when possible
                    // this is fixed server side
                    if (value && isNaN(value)) {
                        // ToDo: value = jQuery.datepicker.parseDate("yy-mm-dd",value);
                    }
                    break;
            }
            this.widgets[field_name].set_value(value);
        }
    };
    /**
     * et2_IInput so the custom field can be it's own widget.
     */
    et2_customfields_list.prototype.getValue = function () {
        // Not using an ID means we have to grab all the widget values, and put them where server knows to look
        if (this.id != et2_customfields_list.DEFAULT_ID) {
            return null;
        }
        var value = {};
        for (var field_name in this.widgets) {
            if (this.widgets[field_name].getValue && !this.widgets[field_name].options.readonly) {
                value[this.options.prefix + field_name] = this.widgets[field_name].getValue();
            }
        }
        return value;
    };
    et2_customfields_list.prototype.isDirty = function () {
        var dirty = false;
        for (var field_name in this.widgets) {
            if (this.widgets[field_name].isDirty) {
                dirty = dirty || this.widgets[field_name].isDirty();
            }
        }
        return dirty;
    };
    et2_customfields_list.prototype.resetDirty = function () {
        for (var field_name in this.widgets) {
            if (this.widgets[field_name].resetDirty) {
                this.widgets[field_name].resetDirty();
            }
        }
    };
    et2_customfields_list.prototype.isValid = function () {
        // Individual customfields will handle themselves
        return true;
    };
    /**
     * Adapt provided attributes to match options for widget
     *
     * rows > 1 --> textarea, with rows=rows and cols=len
     * !rows    --> input, with size=len
     * rows = 1 --> input, with size=len, maxlength=len
     */
    et2_customfields_list.prototype._setup_text = function (field_name, field, attrs) {
        // No label on the widget itself
        delete (attrs.label);
        field.type = 'textbox';
        attrs.rows = field.rows > 1 ? field.rows : null;
        if (attrs.rows && attrs.rows > 0) {
            field.type = 'textarea';
        }
        if (field.len) {
            attrs.size = field.len;
            if (field.rows == 1) {
                attrs.maxlength = field.len;
            }
        }
        if (attrs.readonly) {
            field.type = 'description';
        }
        return true;
    };
    et2_customfields_list.prototype._setup_passwd = function (field_name, field, attrs) {
        // No label on the widget itself
        delete (attrs.label);
        attrs.type = "password";
        var defaults = {
            viewable: true,
            plaintext: false,
            suggest: 16,
            autocomplete: "new-password"
        };
        for (var _i = 0, _a = Object.keys(defaults); _i < _a.length; _i++) {
            var key = _a[_i];
            attrs[key] = (field.values && typeof field.values[key] !== "undefined") ? field.values[key] : defaults[key];
        }
        return true;
    };
    et2_customfields_list.prototype._setup_serial = function (field_name, field, attrs) {
        delete (attrs.label);
        field.type = "textbox";
        attrs.readonly = true;
        return true;
    };
    et2_customfields_list.prototype._setup_int = function (field_name, field, attrs) {
        delete (attrs.label);
        field.type = "number";
        attrs.precision = 0;
        return true;
    };
    et2_customfields_list.prototype._setup_float = function (field_name, field, attrs) {
        // No label on the widget itself
        delete (attrs.label);
        field.type = 'number';
        if (field.len) {
            attrs.size = field.len;
        }
        return true;
    };
    et2_customfields_list.prototype._setup_select = function (field_name, field, attrs) {
        // No label on the widget itself
        delete (attrs.label);
        attrs.rows = field.rows;
        if (attrs.rows > 1) {
            attrs.multiple = true;
        }
        if (field.values && field.values["@"]) {
            // Options are in a list stored in a file
            attrs.searchUrl = field.values["@"];
        }
        return true;
    };
    et2_customfields_list.prototype._setup_select_account = function (field_name, field, attrs) {
        attrs.empty_label = egw.lang('Select');
        if (field.account_type) {
            attrs.account_type = field.account_type;
        }
        return this._setup_select(field_name, field, attrs);
    };
    et2_customfields_list.prototype._setup_date = function (field_name, field, attrs) {
        var _a;
        attrs.data_format = field.values && field.values.format ? field.values.format : 'Y-m-d';
        if ((_a = field.values) === null || _a === void 0 ? void 0 : _a.format) {
            delete field.values.format;
        }
        return true;
    };
    et2_customfields_list.prototype._setup_date_time = function (field_name, field, attrs) {
        var _a;
        attrs.data_format = field.values && field.values.format ? field.values.format : 'Y-m-d H:i:s';
        if ((_a = field.values) === null || _a === void 0 ? void 0 : _a.format) {
            delete field.values.format;
        }
        return true;
    };
    et2_customfields_list.prototype._setup_htmlarea = function (field_name, field, attrs) {
        attrs.config = field.config ? field.config : {};
        attrs.config.toolbarStartupExpanded = false;
        if (field.len) {
            attrs.config.width = field.len + 'px';
        }
        attrs.config.height = (((field.rows > 0 && field.rows != 'undefined') ? field.rows : 5) * 16) + 'px';
        // We have to push the config modifications into the modifications array, or they'll
        // be overwritten by the site config from the server
        var data = this.getArrayMgr("modifications").getEntry(this.options.prefix + field_name);
        if (data)
            jQuery.extend(data.config, attrs.config);
        return true;
    };
    et2_customfields_list.prototype._setup_radio = function (field_name, field, attrs) {
        // 'Empty' label will be first
        delete (attrs.label);
        if (field.values && field.values['']) {
            attrs.label = field.values[''];
            delete field.values[''];
        }
        field.type = 'radiogroup';
        attrs.options = field.values;
        return true;
    };
    et2_customfields_list.prototype._setup_checkbox = function (field_name, field, attrs) {
        // Read-only checkbox is just text
        if (attrs.readonly && this.getType() !== "customfields") {
            attrs.ro_true = field.label;
        }
        else if (field.hasOwnProperty('ro_true')) {
            attrs.ro_true = field.ro_true;
        }
        if (field.hasOwnProperty('ro_false')) {
            attrs.ro_false = field.ro_false;
        }
        return true;
    };
    /**
     * People set button attributes as
     * label: javascript
     */
    et2_customfields_list.prototype._setup_button = function (field_name, field, attrs) {
        // No label on the widget itself
        delete (attrs.label);
        attrs.label = field.label;
        if (this.getType() == 'customfields-list') {
            // No buttons in a list, it causes problems with detached nodes
            return false;
        }
        // Simple case, one widget for a custom field
        if (!field.values || typeof field.values != 'object' || Object.keys(field.values).length == 1) {
            for (var key_4 in field.values) {
                attrs.label = key_4;
                attrs.onclick = field.values[key_4];
            }
            if (!attrs.label) {
                attrs.label = 'No "label=onclick" in values!';
                attrs.onclick = function () { return false; };
            }
            return !attrs.readonly;
        }
        else {
            // Complicated case, a single custom field you get multiple widgets
            // Handle it all here, since this is the exception
            var row = jQuery('tr', this.tbody).last();
            var cf = jQuery('td', row);
            // Label in first column, widget in 2nd
            cf.text(field.label + "");
            cf = jQuery(document.createElement("td"))
                .appendTo(row);
            for (var key in field.values) {
                var button_attrs = jQuery.extend({}, attrs);
                button_attrs.label = key;
                button_attrs.onclick = field.values[key];
                button_attrs.id = attrs.id + '_' + key;
                // This controls where the button is placed in the DOM
                this.rows[button_attrs.id] = cf[0];
                // Do not store in the widgets list, one name for multiple widgets would cause problems
                /*this.widgets[field_name] = */ et2_core_widget_1.et2_createWidget(attrs.type ? attrs.type : field.type, button_attrs, this);
            }
            return false;
        }
    };
    et2_customfields_list.prototype._setup_link_entry = function (field_name, field, attrs) {
        var _a;
        if (field.type === 'filemanager') {
            return this._setup_filemanager(field_name, field, attrs);
        }
        // No label on the widget itself
        delete (attrs.label);
        attrs.type = "link-entry";
        attrs[attrs.readonly ? "app" : "onlyApp"] = typeof field.only_app == "undefined" ? field.type : ((_a = field.onlyApp) !== null && _a !== void 0 ? _a : field.only_app);
        attrs.searchOptions = { filter: field.values || {} };
        return true;
    };
    et2_customfields_list.prototype._setup_filemanager = function (field_name, field, attrs) {
        var _this = this;
        var _a, _b, _c;
        attrs.type = 'et2-vfs-upload';
        delete (attrs.label);
        // allow to set/pass further et2_file attributes to the vfs-upload
        if (field.values && typeof field.values === 'object') {
            var deprecated_1 = { mime: 'accept', max_file_size: 'maxFileSize' };
            Object.keys(deprecated_1).forEach(function (oldField) {
                if (typeof field.values[oldField] !== 'undefined') {
                    _this.egw().debug("warn", "Deprecated field '" + oldField + "' in " + field_name + ", use '" + deprecated_1[oldField] + "' instead");
                    if (typeof field.values[deprecated_1[oldField]] === 'undefined') {
                        field.values[deprecated_1[oldField]] = field.values[oldField];
                    }
                }
            });
            ['accept', 'maxFileSize'].forEach(function (name) {
                if (typeof field.values[name] !== 'undefined') {
                    attrs[name] = field.values[name];
                }
            });
        }
        if (this.getType() == 'customfields-list') {
            // No special UI needed?
            return true;
        }
        else {
            // Complicated case, a single custom field you get multiple widgets
            // Handle it all here, since this is the exception
            var row = jQuery('tr', this.tbody).last();
            var cf = jQuery('td', row);
            // Label in first column, widget in 2nd
            cf.text(field.label + "");
            cf = jQuery(document.createElement("td"))
                .appendTo(row);
            // Create upload widget
            var upload_attrs = __assign({ display: "small", inline: true, required: attrs["required"] || attrs["needed"], class: "et2_file", helptext: this.egw().lang("fileupload") }, attrs);
            delete upload_attrs.needed;
            var widget = this.widgets[field_name] = et2_core_widget_1.et2_createWidget(attrs.type ? attrs.type : field.type, upload_attrs, this);
            // This controls where the widget is placed in the DOM
            this.rows[attrs.id] = cf[0];
            jQuery(widget.getDOMNode(widget)).css('display', 'inline-block');
            // Should we show the upload button
            if (typeof ((_a = field.values) === null || _a === void 0 ? void 0 : _a.noUpload) !== "undefined") {
                widget.classList.add("noUpload");
            }
            // should we show the VfsSelect
            if (!field.values || typeof field.values !== 'object' || !field.values.noVfsSelect) {
                // Add a link to existing VFS file
                var required = (_b = attrs.needed) !== null && _b !== void 0 ? _b : attrs.required;
                delete attrs.needed;
                var path = (_c = widget.path) !== null && _c !== void 0 ? _c : attrs.path;
                var select_attrs = __assign(__assign(__assign({}, attrs), {
                    path: '~',
                    mode: widget.multiple ? 'open-multiple' : 'open',
                    multiple: widget.multiple,
                    method: 'EGroupware\\Api\\Etemplate\\Widget\\Link::ajax_link_existing',
                    methodId: path,
                    buttonLabel: this.egw().lang('Link'),
                    class: "et2_vfs_btn",
                    title: this.egw().lang("select file(s) from vfs")
                }), { type: 'et2-vfs-select', required: required });
                select_attrs.id = attrs.id + '_vfs_select';
                // This controls where the button is placed in the DOM
                this.rows[select_attrs.id] = cf[0];
                // Do not store in the widgets list, one name for multiple widgets would cause problems
                widget = Et2Widget_1.loadWebComponent(select_attrs.type, select_attrs, this);
                // Update link list & show file in upload
                widget.addEventListener("change", function (e) {
                    // Update lists
                    document.querySelectorAll('et2-link-list').forEach(function (l) { l.get_links(); });
                    // Show file(s)
                    var list = e.target.getParent().getWidgetById(attrs.id);
                    var value = list.multiple ? list.value : {};
                    (typeof e.target.value == "string" ? [e.target.value] : e.target.value).forEach(function (v) {
                        var file = typeof v == "string" ? v : v.path;
                        var fileInfo = e.target._dialog.fileInfo(file);
                        var uniqueIdentifier = Object.values(value).length + fileInfo.path;
                        value[uniqueIdentifier] = __assign(__assign({}, fileInfo), { type: fileInfo.mime, uniqueIdentifier: uniqueIdentifier });
                        if (typeof v !== "string") {
                            Object.assign(value[uniqueIdentifier], v);
                        }
                    });
                    list.value = value;
                });
                jQuery(widget.getDOMNode(widget)).css({ 'vertical-align': 'top', display: 'inline-block' }).prependTo(cf);
            }
        }
        return false;
    };
    /**
     * Display links in list as CF name
     * @param field_name
     * @param field
     * @param attrs
     */
    et2_customfields_list.prototype._setup_url = function (field_name, field, attrs) {
        if (this.getType() == 'customfields-list') {
            attrs.label = field.label;
        }
        return true;
    };
    /**
     * Set which fields are visible, by name
     *
     * Note: no # prefix on the name
     *
     */
    et2_customfields_list.prototype.set_visible = function (_fields) {
        for (var name_1 in _fields) {
            if (this.rows[this.options.prefix + name_1]) {
                if (_fields[name_1]) {
                    jQuery(this.rows[this.options.prefix + name_1]).show();
                }
                else {
                    jQuery(this.rows[this.options.prefix + name_1]).hide();
                }
            }
            this.options.fields[name_1] = _fields[name_1];
        }
    };
    /**
     * Code for implementing et2_IDetachedDOM
     */
    et2_customfields_list.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("value", "class");
    };
    et2_customfields_list.prototype.getDetachedNodes = function () {
        return this.detachedNodes ? this.detachedNodes : [];
    };
    et2_customfields_list.prototype.setDetachedAttributes = function (_nodes, _values) {
        // Individual widgets are detected and handled by the grid, but the interface is needed for this to happen
        // Show the row if there's a value, hide it if there is no value
        for (var i = 0; i < _nodes.length; i++) {
            // toggle() needs a boolean to do what we want
            var key = _nodes[i].getAttribute('data-field');
            jQuery(_nodes[i]).toggle(_values.fields[key] && _values.value[this.options.prefix + key] ? true : false);
        }
    };
    et2_customfields_list._attributes = {
        'customfields': {
            'name': 'Custom fields',
            'description': 'Auto filled',
            'type': 'any'
        },
        'fields': {
            'name': 'Custom fields',
            'description': 'Auto filled',
            'type': 'any'
        },
        exclude: {
            name: 'Fields to exclude',
            description: 'comma-separated list of fields to exclude',
            type: 'string',
            default: undefined,
        },
        'value': {
            'name': 'Custom fields',
            'description': 'Auto filled',
            'type': "any"
        },
        'type_filter': {
            'name': 'Field filter',
            "default": "",
            "type": "any",
            "description": "Filter displayed custom fields by their 'type2' attribute, use 'previous' for the filter of the previous / regular cf widget"
        },
        'private': {
            ignore: true,
            type: 'boolean'
        },
        'sub_app': {
            'name': 'sub app name',
            'type': "string",
            'description': "Name of sub application"
        },
        // Allow onchange so you can put handlers on the sub-widgets
        'onchange': {
            "name": "onchange",
            "type": "string",
            "default": et2_core_common_1.et2_no_init,
            "description": "JS code which is executed when the value changes."
        },
        // filter cfs by a given tab value
        'tab': {
            name: "tab",
            type: "string",
            default: null,
            description: "only show cfs with the given tab attribute value, use 'panel' for the tab-panel the widget is in"
        },
        // Allow changing the field prefix.  Normally it's the constant but importexport filter changes it.
        "prefix": {
            name: "prefix",
            type: "string",
            default: "#",
            description: "Custom prefix for custom fields.  Default #"
        }
    };
    et2_customfields_list.legacyOptions = ["type_filter", "private", "fields"]; // Field restriction & private done server-side
    et2_customfields_list.PREFIX = '#';
    et2_customfields_list.DEFAULT_ID = "custom_fields";
    return et2_customfields_list;
}(et2_core_valueWidget_1.et2_valueWidget));
exports.et2_customfields_list = et2_customfields_list;
et2_core_widget_1.et2_register_widget(et2_customfields_list, ["customfields", "customfields-list"]);
