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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2ColumnSelection = void 0;
/**
 * Column selector for nextmatch
 */
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
var et2_extension_nextmatch_1 = require("../et2_extension_nextmatch");
var shoelace_1 = require("../Styles/shoelace");
var et2_dataview_model_columns_1 = require("../et2_dataview_model_columns");
var et2_extension_customfields_1 = require("../et2_extension_customfields");
var sortable_complete_esm_1 = require("sortablejs/modular/sortable.complete.esm");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var Et2ColumnSelection = /** @class */ (function (_super) {
    __extends(Et2ColumnSelection, _super);
    function Et2ColumnSelection() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.__columns = [];
        _this.__autoRefresh = false;
        _this.handleSelectAll = _this.handleSelectAll.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2ColumnSelection, "styles", {
        get: function () {
            return [
                _super.styles,
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\tmax-height: inherit;\n\t\t\t\tmin-width: 35em;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\t--icon-width: 20px;\n\t\t\t}\n\t\t\tsl-menu {\n\t\t\t\tflex: 1 10 auto;\n\t\t\t\toverflow-y: auto;\n\t\t\t\tmax-height: 50em;\n\t\t\t}\n\t\t\t/* Drag handle on columns (not individual custom fields or search letter) */\n\t\t\tsl-menu > .select_row::part(base) {\n\t\t\t\tpadding-left: 10px;\n\t\t\t}\n\t\t\tsl-menu > .column::part(base) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t\tbackground-position: 3px 1.5ex;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tcursor: grab;\n\t\t\t}\n\n\t\t\t  sl-menu-item::part(label), sl-menu-item::part(submenu-icon) {\n\t\t\t\tcursor: initial;\n\t\t\t  }\n\t\t\t/* Change vertical alignment of CF checkbox line to up with title, not middle */\n\t\t\t.custom_fields::part(base) {\n\t\t\t\talign-items: baseline;\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\tmax-height: inherit;\n\t\t\t\tmin-width: 35em;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\t--icon-width: 20px;\n\t\t\t}\n\t\t\tsl-menu {\n\t\t\t\tflex: 1 10 auto;\n\t\t\t\toverflow-y: auto;\n\t\t\t\tmax-height: 50em;\n\t\t\t}\n\t\t\t/* Drag handle on columns (not individual custom fields or search letter) */\n\t\t\tsl-menu > .select_row::part(base) {\n\t\t\t\tpadding-left: 10px;\n\t\t\t}\n\t\t\tsl-menu > .column::part(base) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t\tbackground-position: 3px 1.5ex;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tcursor: grab;\n\t\t\t}\n\n\t\t\t  sl-menu-item::part(label), sl-menu-item::part(submenu-icon) {\n\t\t\t\tcursor: initial;\n\t\t\t  }\n\t\t\t/* Change vertical alignment of CF checkbox line to up with title, not middle */\n\t\t\t.custom_fields::part(base) {\n\t\t\t\talign-items: baseline;\n\t\t\t}\n\t\t\t"])), Et2Widget_1.cssImage("splitter_vert"))
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2ColumnSelection, "properties", {
        get: function () {
            return {
                /**
                 * List of currently selected columns
                 */
                value: { type: Object },
                columns: { type: Object },
                autoRefresh: { type: Number }
            };
        },
        enumerable: false,
        configurable: true
    });
    Et2ColumnSelection.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.updateComplete.then(function () {
            _this.sort = sortable_complete_esm_1.default.create(_this.shadowRoot.querySelector('sl-menu'), {
                ghostClass: 'ui-fav-sortable-placeholder',
                draggable: 'sl-menu-item.column',
                dataIdAttr: 'value',
                direction: 'vertical',
                delay: 25
            });
        });
    };
    Et2ColumnSelection.prototype.render = function () {
        var _this = this;
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <sl-icon slot=\"header\" name=\"check-all\" @click=", "\n                     title=\"", "\"\n                     style=\"font-size:24px\"></sl-icon>\n            <sl-menu part=\"columns\" slot=\"content\">\n                ", "\n            </sl-menu>"], ["\n            <sl-icon slot=\"header\" name=\"check-all\" @click=", "\n                     title=\"", "\"\n                     style=\"font-size:24px\"></sl-icon>\n            <sl-menu part=\"columns\" slot=\"content\">\n                ", "\n            </sl-menu>"])), this.handleSelectAll, this.egw().lang("Select all"), repeat_js_1.repeat(this.__columns, function (column) { return column.id; }, function (column) { return _this.rowTemplate(column); }));
    };
    Et2ColumnSelection.prototype.footerTemplate = function () {
        var autoRefresh = lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <et2-select id=\"nm_autorefresh\" emptyLabel=\"Refresh\" statustext=\"Automatically refresh list\"\n                        value=\"", "\">\n            </et2-select>\n\t\t"], ["\n            <et2-select id=\"nm_autorefresh\" emptyLabel=\"Refresh\" statustext=\"Automatically refresh list\"\n                        value=\"", "\">\n            </et2-select>\n\t\t"])), this.__autoRefresh);
        // Add default checkbox for admins
        var apps = this.egw().user('apps');
        return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            ", "\n            ", "\n\t\t"], ["\n            ", "\n            ",
            "\n\t\t"])), this.__autoRefresh !== "false" ? autoRefresh : '', !apps['admin'] ? '' : lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                <et2-select id=\"default_preference\" emptylabel=\"", "\">\n                </et2-select>"], ["\n                <et2-select id=\"default_preference\" emptylabel=\"", "\">\n                </et2-select>"])), this.egw().lang("Preference")));
    };
    /**
     * Template for each individual column
     *
     * @param column
     * @returns {TemplateResult}
     * @protected
     */
    Et2ColumnSelection.prototype.rowTemplate = function (column) {
        var _a;
        var isCustom = ((_a = column.widget) === null || _a === void 0 ? void 0 : _a.instanceOf(et2_extension_nextmatch_1.et2_nextmatch_customfields)) || false;
        var alwaysOn = [et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_ALWAYS, et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_ALWAYS_NOSELECT].indexOf(column.visibility) !== -1;
        // Don't show disabled columns
        if (column.visibility == et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_DISABLED) {
            return lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
        }
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            <sl-menu-item\n                    value=\"", "\"\n                    type=\"checkbox\"\n                    ?checked=", "\n                    ?disabled=", "\n                    title=\"", "\"\n                    class=\"", "\">\n                ", "\n                <!-- Custom fields get listed separately -->\n                ", "\n            </sl-menu-item>"], ["\n            <sl-menu-item\n                    value=\"", "\"\n                    type=\"checkbox\"\n                    ?checked=", "\n                    ?disabled=", "\n                    title=\"", "\"\n                    class=\"",
            "\">\n                ", "\n                <!-- Custom fields get listed separately -->\n                ", "\n            </sl-menu-item>"])), column.id.replaceAll(" ", "___"), alwaysOn || column.visibility == et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_VISIBLE, alwaysOn, column.title, class_map_js_1.classMap({
            select_row: true,
            custom_fields: isCustom,
            column: column.widget
        }), column.caption, isCustom ? this.customFieldsTemplate(column) : '');
    };
    /**
     * Template for all custom fields
     * Does not include "Custom fields", it's done as a regular column
     *
     * @param column
     * @returns {TemplateResult}
     * @protected
     */
    Et2ColumnSelection.prototype.customFieldsTemplate = function (column) {
        var _this = this;
        // Custom fields get listed separately
        var widget = column.widget;
        if (jQuery.isEmptyObject(widget.customfields)) {
            // No customfields defined, don't show column
            return lit_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
        }
        return lit_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            <sl-divider></sl-divider>\n            ", "\n            <sl-divider></sl-divider>"], ["\n            <sl-divider></sl-divider>\n            ",
            "\n            <sl-divider></sl-divider>"])), repeat_js_1.repeat(Object.values(widget.customfields), function (field) { return field.name; }, function (field) {
            return _this.rowTemplate({
                id: et2_extension_customfields_1.et2_customfields_list.PREFIX + field.name,
                caption: field.label,
                visibility: (widget.fields[field.name] ? et2_dataview_model_columns_1.et2_dataview_column.ET2_COL_VISIBILITY_VISIBLE : false)
            });
        }));
    };
    Et2ColumnSelection.prototype.handleSelectAll = function (event) {
        var checked = this.shadowRoot.querySelector("sl-menu-item").checked || false;
        this.shadowRoot.querySelectorAll('sl-menu-item').forEach(function (item) { item.checked = !checked; });
    };
    Object.defineProperty(Et2ColumnSelection.prototype, "columns", {
        set: function (new_columns) {
            this.__columns = new_columns;
            this.requestUpdate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2ColumnSelection.prototype, "value", {
        get: function () {
            var _this = this;
            var _a, _b;
            var value = [];
            (_a = this.sort) === null || _a === void 0 ? void 0 : _a.toArray().forEach(function (val) {
                var _a;
                var column = _this.__columns.find(function (col) { return col.id == val; });
                var menuItem = _this.shadowRoot.querySelector("[value='" + val + "']");
                if (column && menuItem) {
                    if (menuItem.checked) {
                        value.push(val);
                    }
                    if ((_a = column.widget) === null || _a === void 0 ? void 0 : _a.customfields) {
                        menuItem.querySelectorAll("[value][checked]").forEach(function (cf) {
                            value.push(cf.value.replaceAll("___", " "));
                        });
                    }
                }
            });
            // Add in letters
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll("[part='columns'] > :not(.column)").forEach(function (i) {
                if (i.checked) {
                    value.push(i.value);
                }
            });
            return value;
        },
        set: function (new_value) {
            // TODO?  Only here to avoid error right now
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2ColumnSelection.prototype, "_autoRefreshNode", {
        get: function () {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#nm_autorefresh");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2ColumnSelection.prototype, "_preferenceNode", {
        get: function () {
            return this.shadowRoot.querySelector("#default_preference");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2ColumnSelection.prototype, "autoRefresh", {
        get: function () {
            var _a;
            return parseInt((_a = this._autoRefreshNode) === null || _a === void 0 ? void 0 : _a.value.toString()) || 0;
        },
        set: function (new_value) {
            this.__autoRefresh = new_value;
            this.requestUpdate("autoRefresh");
        },
        enumerable: false,
        configurable: true
    });
    return Et2ColumnSelection;
}(Et2InputWidget_1.Et2InputWidget(lit_1.LitElement)));
exports.Et2ColumnSelection = Et2ColumnSelection;
customElements.define("et2-nextmatch-columnselection", Et2ColumnSelection);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
