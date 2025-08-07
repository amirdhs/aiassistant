"use strict";
/**
 * EGroupware eTemplate2 - JS VFS widgets
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2012
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
exports.et2_vfsUpload = exports.et2_vfsMode = exports.et2_vfsSize = exports.et2_vfs = void 0;
/*egw:uses
    /vendor/bower-asset/jquery/dist/jquery.js;
    vfsSelectUI;
    et2_core_inputWidget;
    et2_core_valueWidget;
    et2_widget_description;
    et2_widget_file;
*/
var et2_core_valueWidget_1 = require("./et2_core_valueWidget");
var et2_core_widget_1 = require("./et2_core_widget");
var et2_core_inheritance_1 = require("./et2_core_inheritance");
var et2_widget_description_1 = require("./et2_widget_description");
var et2_widget_file_1 = require("./et2_widget_file");
var egw_global_1 = require("../jsapi/egw_global");
var egw_action_1 = require("../egw_action/egw_action");
var egw_keymanager_1 = require("../egw_action/egw_keymanager");
var egw_action_constants_1 = require("../egw_action/egw_action_constants");
var Et2Dialog_1 = require("./Et2Dialog/Et2Dialog");
/**
 * Class which implements the "vfs" XET-Tag
 *
 * @augments et2_valueWidget
 */
var et2_vfs = /** @class */ (function (_super) {
    __extends(et2_vfs, _super);
    /**
     * Constructor
     *
     * @memberOf et2_vfs
     */
    function et2_vfs(_parent, _attrs, _child) {
        var _this = 
        // Call the inherited constructor
        _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_vfs._attributes, _child || {})) || this;
        _this.span = null;
        _this.value = "";
        _this.span = jQuery(document.createElement("ul"))
            .addClass('et2_vfs');
        _this.setDOMNode(_this.span[0]);
        return _this;
    }
    et2_vfs.prototype.getValue = function () {
        return this.value;
    };
    et2_vfs.prototype.set_value = function (_value) {
        if (typeof _value !== 'object') {
            // Only warn if it's an actual value, just blank for falsy values
            if (_value) {
                this.egw().debug("warn", "%s only has path, needs full array", this.id, _value);
            }
            this.span.empty().text(_value);
            return;
        }
        this.span.empty();
        this.value = _value;
        var path = _value.path ? _value.path : '/';
        // calculate path as parent of name, which can contain slashes
        // eg. _value.path=/home/ralf/sub/file, _value.name=sub/file --> path=/home/ralf
        // --> generate clickable fields for sub/ + file
        var sub_path = path.substring(0, _value.path.length - _value.name.length - 1);
        var path_offset, path_parts;
        if (_value.path.indexOf(_value.name) >= 0 && sub_path[sub_path.length - 1] === '/') {
            path = sub_path;
            path_offset = path.split('/').length;
            path_parts = _value.path.split('/');
        }
        else {
            if (_value.path.indexOf(_value.name) >= 0) {
                // Remove name from end, so we can add it again later
                path = sub_path;
            }
            path_offset = 0;
            path_parts = _value.name.split('/');
        }
        var text;
        var _loop_1 = function (i) {
            path += (path == '/' ? '' : '/') + path_parts[i];
            text = egw_global_1.egw.decodePath(path_parts[i]);
            // Nice human-readable stuff for apps
            if (path_parts[1] == 'apps') {
                switch (path_parts.length) {
                    case 2:
                        if (i == 1) {
                            text = this_1.egw().lang('applications');
                        }
                        break;
                    case 3:
                        if (i == 2) {
                            text = this_1.egw().lang(path_parts[2]);
                        }
                        break;
                    case 4:
                        if (!isNaN(text)) {
                            var link_title = this_1.egw().link_title(path_parts[2], path_parts[3], function (title) {
                                if (!title || this.value.name == title)
                                    return;
                                jQuery('li', this.span).last().text(title);
                            }, this_1);
                            if (link_title && typeof link_title !== 'undefined')
                                text = link_title;
                        }
                        break;
                }
            }
            else if (sub_path === '/templates' && path_parts.length === 1) {
                text = this_1.egw().lang(path_parts[0]);
            }
            var self_1 = this_1;
            data = { path: path, type: i < path_parts.length - 1 ? et2_vfs.DIR_MIME_TYPE : _value.mime };
            node = jQuery(document.createElement("li"))
                .addClass("vfsFilename")
                .text(text + (i < path_parts.length - 1 ? '/' : ''))
                //.attr('title', egw.decodePath(path))
                .addClass("et2_clickable et2_link")
                .click({ data: data, egw: this_1.egw() }, function (e) {
                if (!self_1.onclick) {
                    e.data.egw.open(e.data.data, "file");
                }
                else if (self_1.click(e)) {
                    e.data.egw.open(e.data.data, "file");
                }
            })
                .appendTo(this_1.span);
        };
        var this_1 = this, data, node;
        for (var i = path_offset; i < path_parts.length; i++) {
            _loop_1(i);
        }
        // Last part of path do default action
        this._bind_default_action(node, data);
    };
    et2_vfs.prototype._bind_default_action = function (node, data) {
        var links = [];
        var widget = this;
        var defaultAction = null;
        var object = null;
        var app = this.getInstanceManager().app;
        while (links.length === 0 && widget.getParent()) {
            object = egw_action_1.egw_getAppObjectManager(app).getObjectById(widget.id);
            if (object && object.manager && object.manager.children) {
                links = object.manager.children;
            }
            widget = widget.getParent();
        }
        for (var k in links) {
            if (links[k].default && links[k].enabled.exec(links[k])) {
                defaultAction = links[k];
                break;
            }
        }
        if (defaultAction && !this.onclick) {
            node.off('click').click({ data: data, egw: this.egw() }, function (e) {
                // Wait until object selection happens
                window.setTimeout(function () {
                    // execute default action
                    egw_keymanager_1.egw_keyHandler(egw_action_constants_1.EGW_KEY_ENTER, false, false, false);
                });
                // Select row
                return true;
            }.bind({ data: data, object: object }));
        }
    };
    /**
     * Code for implementing et2_IDetachedDOM (data grid)
     *
     * @param {array} _attrs array of attribute-names to push further names onto
     */
    et2_vfs.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("value");
    };
    et2_vfs.prototype.getDetachedNodes = function () {
        return [this.span[0]];
    };
    et2_vfs.prototype.setDetachedAttributes = function (_nodes, _values) {
        this.span = jQuery(_nodes[0]);
        if (typeof _values["value"] != 'undefined') {
            this.set_value(_values["value"]);
        }
    };
    et2_vfs._attributes = {
        "value": {
            "type": "any",
            "description": "Array of (stat) information about the file"
        }
    };
    /**
     * Mime type of directories
     */
    et2_vfs.DIR_MIME_TYPE = 'httpd/unix-directory';
    return et2_vfs;
}(et2_core_valueWidget_1.et2_valueWidget));
exports.et2_vfs = et2_vfs;
et2_core_widget_1.et2_register_widget(et2_vfs, ["vfs"]);
/**
* vfs-size
* Human readable file sizes
*
* @augments et2_description
*/
var et2_vfsSize = /** @class */ (function (_super) {
    __extends(et2_vfsSize, _super);
    /**
     * Constructor
     *
     * @memberOf et2_vfsSize
     */
    function et2_vfsSize(_parent, _attrs, _child) {
        var _this = 
        // Call the inherited constructor
        _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_vfsSize._attributes, _child || {})) || this;
        _this.span.addClass("et2_vfs");
        return _this;
    }
    et2_vfsSize.prototype.human_size = function (size) {
        if (typeof size !== "number") {
            size = parseInt(size);
        }
        if (Number.isNaN(size)) {
            return '';
        }
        var sign = '';
        if (size < 0) {
            sign = '-';
            size = -size;
        }
        var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = 0;
        while (size >= 1024) {
            size /= 1024;
            ++i;
        }
        return sign + size.toFixed(i == 0 ? 0 : 1) + ' ' + units[i];
    };
    et2_vfsSize.prototype.set_value = function (_value) {
        if (_value.size) {
            _value = _value.size;
        }
        jQuery(this.node).text(this.human_size(_value));
    };
    et2_vfsSize.prototype.setDetachedAttributes = function (_nodes, _values) {
        if (typeof _values["value"] !== "undefined") {
            this.node = _nodes[0];
            this.set_value(_values["value"]);
            delete _values["value"];
        }
        _super.prototype.setDetachedAttributes.call(this, _nodes, _values);
    };
    et2_vfsSize._attributes = {
        "value": {
            "type": "any" // not using "integer", as we use parseInt on everything not a number, but want to show empty of "" or undefined, not 0B
        }
    };
    return et2_vfsSize;
}(et2_widget_description_1.et2_description));
exports.et2_vfsSize = et2_vfsSize;
et2_core_widget_1.et2_register_widget(et2_vfsSize, ["vfs-size"]);
/**
* vfs-mode: textual representation of permissions + extra bits
*
* @augments et2_description
*/
var et2_vfsMode = /** @class */ (function (_super) {
    __extends(et2_vfsMode, _super);
    /**
     * Constructor
     *
     * @memberOf et2_vfsMode
     */
    function et2_vfsMode(_parent, _attrs, _child) {
        var _this = 
        // Call the inherited constructor
        _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_vfsMode._attributes, _child || {})) || this;
        _this.span.addClass("et2_vfs");
        return _this;
    }
    /**
     * Get text for file stuff
     * Result will be like -rwxr--r--.  First char is type, then read, write, execute (or other bits) for
     * user, group, world
     *
     * @param {number} _value vfs mode
     */
    et2_vfsMode.prototype.text_mode = function (_value) {
        var text = [];
        if (typeof _value != "number") {
            _value = parseInt(_value);
        }
        if (!_value)
            return "----------";
        // Figure out type
        var type = 'u'; // unknown
        for (var flag in et2_vfsMode.types) {
            if ((_value & et2_vfsMode.types[flag]) == et2_vfsMode.types[flag]) {
                type = flag;
                break;
            }
        }
        // World, group, user - build string backwards
        for (var i = 0; i < 3; i++) {
            for (var perm in et2_vfsMode.perms) {
                if (_value & et2_vfsMode.perms[perm]) {
                    text.unshift(perm);
                }
                else {
                    text.unshift("-");
                }
            }
            _value = _value >> 3;
        }
        // Sticky / UID / GID
        for (var i = 0; i < et2_vfsMode.sticky.length; i++) {
            if (et2_vfsMode.sticky[i].mask & _value) {
                var current = text[et2_vfsMode.sticky[i].position];
                text[et2_vfsMode.sticky[i].position] = et2_vfsMode.sticky[i]["char"];
                if (current == 'x')
                    text[et2_vfsMode.sticky[i].position].toLowerCase();
            }
        }
        return type + text.join('');
    };
    et2_vfsMode.prototype.set_value = function (_value) {
        if (_value.size) {
            _value = _value.size;
        }
        var text = this.text_mode(_value);
        jQuery(this.node).text(text);
    };
    et2_vfsMode.prototype.setDetachedAttributes = function (_nodes, _values) {
        if (typeof _values["value"] !== "undefined") {
            this.node = _nodes[0];
            this.set_value(_values["value"]);
            delete _values["value"];
        }
        _super.prototype.setDetachedAttributes.call(this, _nodes, _values);
    };
    // Masks for file types
    et2_vfsMode.types = {
        'l': 0xA000,
        's': 0xC000,
        'p': 0x1000,
        'c': 0x2000,
        'd': 0x4000,
        'b': 0x6000,
        '-': 0x8000 // Regular
    };
    // Sticky / UID / GID
    et2_vfsMode.sticky = [
        { mask: 0x200, "char": "T", position: 9 },
        { mask: 0x400, "char": "S", position: 6 },
        { mask: 0x800, "char": "S", position: 3 } // SUID
    ];
    et2_vfsMode.perms = {
        'x': 0x1,
        'w': 0x2,
        'r': 0x4 // Read
    };
    return et2_vfsMode;
}(et2_widget_description_1.et2_description));
exports.et2_vfsMode = et2_vfsMode;
et2_core_widget_1.et2_register_widget(et2_vfsMode, ["vfs-mode"]);
/**
 * @deprecated use Et2VfsUpload;
 */
var et2_vfsUpload = /** @class */ (function (_super) {
    __extends(et2_vfsUpload, _super);
    /**
     * Constructor
     *
     * @param _parent
     * @param attrs
     * @memberof et2_vfsUpload
     */
    function et2_vfsUpload(_parent, _attrs, _child) {
        var _this = 
        // Call the inherited constructor
        _super.call(this, _parent, _attrs, et2_core_inheritance_1.ClassWithAttributes.extendAttributes(et2_vfsUpload._attributes, _child || {})) || this;
        _this.list = null;
        jQuery(_this.node).addClass("et2_vfs");
        if (!_this.options.path) {
            _this.options.path = _this.options.id;
        }
        // If the path is a directory, allow multiple uploads
        if (_this.options.path.substr(-1) == '/') {
            _this.set_multiple(true);
        }
        _this.list = jQuery(document.createElement('table')).appendTo(_this.node);
        if (_this.options.listonly) {
            _this.input.remove();
            _this.span.remove();
            _this.progress.remove();
        }
        return _this;
    }
    /**
     * Get any specific async upload options
     */
    et2_vfsUpload.prototype.getAsyncOptions = function (self) {
        return jQuery.extend({}, _super.prototype.getAsyncOptions.call(this, self), {
            target: egw_global_1.egw.ajaxUrl("EGroupware\\Api\\Etemplate\\Widget\\Vfs::ajax_upload")
        });
    };
    /**
     * If there is a file / files in the specified location, display them
     * Value is the information for the file[s] in the specified location.
     *
     * @param {Object{}} _value
     */
    et2_vfsUpload.prototype.set_value = function (_value) {
        // Remove previous
        while (this._children.length > 0) {
            var node = this._children[this._children.length - 1];
            this.removeChild(node);
            node.destroy();
        }
        this.progress.empty();
        this.list.empty();
        // Set new
        if (typeof _value == 'object' && _value && Object.keys(_value).length) {
            for (var i in _value) {
                this._addFile(_value[i]);
            }
        }
        return true;
    };
    et2_vfsUpload.prototype.getDOMNode = function (sender) {
        if (sender && sender !== this && (sender.tagName && sender.tagName.indexOf("VFS") >= 0 || sender._type && sender._type.indexOf('vfs') >= 0)) {
            var value = sender.getValue && sender.getValue() || sender.value || false;
            var row = void 0;
            if (value && value.path) {
                // Have a value, we can find the right place
                row = jQuery("[data-path='" + (value.path.replace(/'/g, '&quot')) + "']", this.list);
            }
            else {
                // No value, just use the last one
                row = jQuery("[data-path]", this.list).last();
            }
            if (sender.tagName === "ET2-VFS-MIME" || sender._type === 'vfs-mime') {
                return jQuery('.icon', row).get(0) || null;
            }
            else {
                return jQuery('.title', row).get(0) || null;
            }
        }
        else {
            return _super.prototype.getDOMNode.call(this, sender);
        }
    };
    /**
     * Add in the request id
     *
     * @param {type} form
     */
    et2_vfsUpload.prototype.beforeSend = function (form) {
        var extra = _super.prototype.beforeSend.call(this, form);
        extra["path"] = this.options.path;
        return extra;
    };
    /**
     * A file upload is finished, update the UI
     *
     * @param {object} file
     * @param {string|object} response
     */
    et2_vfsUpload.prototype.finishUpload = function (file, response) {
        var result = _super.prototype.finishUpload.call(this, file, response);
        if (typeof response == 'string')
            response = jQuery.parseJSON(response);
        if (response.response[0] && typeof response.response[0].data.length == 'undefined') {
            for (var key in response.response[0].data) {
                var value = response.response[0].data[key];
                if (value && value.path) {
                    this._addFile(value);
                    jQuery("[data-file='" + file.fileName.replace(/'/g, '&quot') + "']", this.progress).hide();
                }
            }
        }
        return result;
    };
    et2_vfsUpload.prototype._addFile = function (file_data) {
        if (jQuery("[data-path='" + file_data.path.replace(/'/g, '&quot') + "']").remove().length) {
            for (var child_index = this._children.length - 1; child_index >= 0; child_index--) {
                var child = this._children[child_index];
                if (!child.options.value || child.options.value.path === file_data.path) {
                    this.removeChild(child);
                    child.destroy();
                }
            }
        }
        // Set up for expose
        if (file_data && typeof file_data.download_url === "undefined") {
            file_data.download_url = "/webdav.php" + file_data.path;
        }
        var row = jQuery(document.createElement("tr"))
            .attr("data-path", file_data.path.replace(/'/g, '&quot'))
            .attr("draggable", "true")
            .appendTo(this.list);
        jQuery(document.createElement("td"))
            .addClass('icon')
            .appendTo(row);
        jQuery(document.createElement("td"))
            .addClass('title')
            .appendTo(row);
        var mime = et2_createWidget('vfs-mime', { value: file_data }, this);
        // Trigger expose on click, if supported
        var vfs_attrs = { value: file_data, onclick: undefined };
        if (file_data && (typeof file_data.download_url != 'undefined')) {
            var fe_mime = egw_global_1.egw.file_editor_prefered_mimes(file_data.mime);
            // Pass off opening responsibility to the Et2VfsMime widget
            if (typeof file_data.mime === 'string' && mime.isExposable()) {
                vfs_attrs.onclick = function (ev) {
                    var _a;
                    ev.stopPropagation();
                    // Pass it off to the associated vfsMime widget
                    (_a = this.parentNode.parentNode.querySelector("et2-vfs-mime")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new Event("click"));
                    return false;
                };
            }
        }
        var vfs = et2_createWidget('vfs', vfs_attrs, this);
        // If already attached, need to do this explicitly
        if (this.isAttached()) {
            mime.set_value(file_data);
            vfs.set_value(file_data);
            vfs.doLoadingFinished();
        }
        // Add in delete button
        if (!this.options.readonly) {
            var self_2 = this;
            var delete_button = jQuery(document.createElement("td"))
                .appendTo(row);
            jQuery("<div />")
                .appendTo(delete_button)
                // We don't use ui-icon because it assigns a bg image
                .addClass("delete icon")
                .bind('click', function () {
                var d = new Et2Dialog_1.Et2Dialog('api');
                d.transformAttributes({
                    callback: function (button) {
                        if (button == Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                            egw_global_1.egw.json("filemanager_ui::ajax_action", [
                                'delete',
                                [row.attr('data-path').replace(/&quot/g, "'")],
                                ''
                            ], function (data) {
                                if (data && data.errs == 0) {
                                    row.slideUp(null, row.remove);
                                }
                                if (data && data.msg) {
                                    self_2.egw().message(data.msg, data.errs == 0 ? 'success' : 'error');
                                }
                            }).sendRequest();
                        }
                    },
                    message: self_2.egw().lang('Delete file') + '?',
                    title: self_2.egw().lang('Confirmation required'),
                    buttons: Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO,
                    dialog_type: Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE,
                    width: 250
                });
                document.body.appendChild(d);
            });
        }
    };
    et2_vfsUpload._attributes = {
        "value": {
            "type": "any" // Either nothing, or an object with file info
        },
        "path": {
            "name": "Path",
            "description": "Upload files to the specified VFS path",
            "type": "string",
            "default": ''
        },
        "listonly": {
            "name": "List Only",
            "description": "Display given file objects only as list (removes span,input and progress from the dom)",
            "type": "boolean",
            "default": false
        }
    };
    et2_vfsUpload.legacyOptions = ["mime"];
    return et2_vfsUpload;
}(et2_widget_file_1.et2_file));
exports.et2_vfsUpload = et2_vfsUpload;
et2_core_widget_1.et2_register_widget(et2_vfsUpload, ["vfs-upload"]);
