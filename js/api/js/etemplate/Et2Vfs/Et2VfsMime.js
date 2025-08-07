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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2VfsMime = void 0;
var et2_widget_vfs_1 = require("../et2_widget_vfs");
var Et2ImageExpose_1 = require("../Expose/Et2ImageExpose");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var Et2VfsMime = /** @class */ (function (_super) {
    __extends(Et2VfsMime, _super);
    function Et2VfsMime() {
        var _this = _super.call(this) || this;
        /**
         * Mime type we're displaying
         */
        _this.mime = "";
        /**
         * Mark the file as a link
         */
        _this.symlink = false;
        _this.__download_url = "";
        return _this;
    }
    Et2VfsMime_1 = Et2VfsMime;
    Object.defineProperty(Et2VfsMime, "styles", {
        /**
         * @todo styles() are NOT working, probably because due to implementing createRenderRoot() returning this in Et2Image, there styles are moved to etemplate2.css
         */
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            :host {\n            \tposition: relative\n            }\n            img.overlay {\n            \tposition: absolute;\n            \tbottom: 0;\n            \tright: 0;\n            \tz-index: 1;\n            \twidth: 16px;\n            \theight: 16px;\n            }\n            "], ["\n            :host {\n            \tposition: relative\n            }\n            img.overlay {\n            \tposition: absolute;\n            \tbottom: 0;\n            \tright: 0;\n            \tz-index: 1;\n            \twidth: 16px;\n            \theight: 16px;\n            }\n            "]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsMime.prototype, "exposeValue", {
        /**
         * Used to determine if this widget is exposable.  Images always are, even if we don't actually
         * know the mime type.
         *
         * @returns {ExposeValue}
         */
        get: function () {
            return Object.assign(_super.prototype.exposeValue, {
                mime: this.mime,
                download_url: this.__download_url
            });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Overridden here because while some files cannot actually be put in the gallery, we still want to handle them
     * in some way.  Some files we'll open directly on click
     *
     * @returns {boolean}
     */
    Et2VfsMime.prototype.isExposable = function () {
        // do not try to expose directories, they are handled by the action system
        if (this.exposeValue.mime === Et2VfsMime_1.DIR_MIME_TYPE || !this.value.download_url) {
            return false;
        }
        var gallery = _super.prototype.isExposable.call(this);
        // @ts-ignore Wants an argument, but does not require it
        var fe = egw.file_editor_prefered_mimes();
        if (fe && fe.mime && fe.edit && fe.mime[this.exposeValue.mime]) {
            return true;
        }
        return gallery;
    };
    /**
     * Override et2-image click-handler, to not call egw.open_link with href=<vfs-path>
     *
     * @param {MouseEvent} _ev
     * @returns {boolean}
     */
    Et2VfsMime.prototype._handleClick = function (_ev) {
        if (this.isExposable()) {
            this.expose_onclick(_ev);
        }
        return false;
    };
    /**
     * Some files cannot be opened in gallery, but we still want to do something with them
     * Editable files we open on click.
     *
     * @param {MouseEvent} event
     * @returns {boolean}
     * @protected
     */
    Et2VfsMime.prototype.expose_onclick = function (event) {
        // super.expose_onclick returns false when it has handled the event, true if it didn't
        var super_handled = _super.prototype.expose_onclick.call(this, event);
        if (true == super_handled) {
            // @ts-ignore Wants an argument, but does not require it
            var fe = egw.file_editor_prefered_mimes();
            if (fe && fe.mime && fe.edit && fe.mime[this.exposeValue.mime]) {
                egw.open_link(egw.link('/index.php', {
                    menuaction: fe.edit.menuaction,
                    path: this.exposeValue.path,
                    cd: 'no' // needed to not reload framework in sharing
                }), '', fe.edit_popup);
                return false;
            }
        }
        return super_handled;
    };
    /**
     * Function to get media content to feed the expose
     *
     * @param {type} _value
     * @returns {Array} return an array of object consists of media content
     */
    Et2VfsMime.prototype.getMedia = function (_value) {
        var mediaContent = Object.assign(_super.prototype.getMedia.call(this, _value)[0], {
            title: _value.name,
            type: _value.mime,
            href: _value.download_url
        });
        // check if download_url is not already an url (some stream-wrappers allow to specify that!)
        if (_value.download_url && (_value.download_url[0] == '/' || _value.download_url.substr(0, 4) != 'http')) {
            mediaContent.href = this._processUrl(_value.download_url);
            if (mediaContent.href && mediaContent.href.match(/\/webdav.php/, 'ig')) {
                mediaContent["download_href"] = mediaContent.href + '?download';
            }
        }
        mediaContent["thumbnail"] = this.egw().mime_icon(_value.mime, _value.path, undefined, _value.mtime);
        return [mediaContent];
    };
    Et2VfsMime.prototype.set_value = function (_value) {
        this.value = _value;
    };
    Object.defineProperty(Et2VfsMime.prototype, "value", {
        get: function () {
            var _a;
            return {
                mime: this.mime,
                symlink: this.__symlink,
                href: this.href,
                path: this.href,
                download_url: (_a = this.__download_url) !== null && _a !== void 0 ? _a : '',
                src: this.src
            };
        },
        /**
         * Allow to pass all data as object with attributes "mime", "path", "download_url" and "mode"
         */
        set: function (_value) {
            var _a;
            if (!_value) {
                return;
            }
            if (typeof _value === 'string' && _value.indexOf('/') >= 0) {
                _value = { mime: _value };
            }
            else if (typeof _value !== 'object') {
                this.egw().debug("warn", "%s only has path, needs array with path & mime", this.id, _value);
                // Keep going, will be 'unknown type'
            }
            if (_value.mime) {
                this.mime = _value.mime;
            }
            this.label = '';
            if (_value.path) {
                this.href = _value.path;
                var parts = _value.path.split('.');
                if (parts.length > 1) {
                    this.label = egw.lang('%1 File', parts.pop());
                }
            }
            if (_value.download_url) {
                this.__download_url = _value.download_url;
            }
            var src = (_a = _value.src) !== null && _a !== void 0 ? _a : this.egw().mime_icon(_value.mime, _value.path, undefined, _value.mtime);
            if (src) {
                this.src = src;
            }
            // add/remove link icon, if file is (not) a symlink
            this.symlink = typeof _value.mode !== "undefined" && ((_value.mode & et2_widget_vfs_1.et2_vfsMode.types.l) == et2_widget_vfs_1.et2_vfsMode.types.l);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2VfsMime.prototype, "src", {
        get: function () {
            return _super.prototype.src;
        },
        set: function (_value) {
            _super.prototype.src = _value;
            this._set_tooltip();
        },
        enumerable: false,
        configurable: true
    });
    Et2VfsMime.prototype.render = function () {
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", "\n            ", "\n\t\t"], ["\n            ", "\n            ",
            "\n\t\t"])), _super.prototype.render.call(this), this.symlink ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<img src=\"", "\"\n                class=\"overlay\" style=\"position: absolute; bottom: 0; right: 0; height: 12px; width: 12px; z-index: 1\"/>"], ["<img src=\"", "\"\n                class=\"overlay\" style=\"position: absolute; bottom: 0; right: 0; height: 12px; width: 12px; z-index: 1\"/>"])), this.egw().image("symlink", "api")) : "");
    };
    Et2VfsMime.prototype._set_tooltip = function () {
        // tooltip for mimetypes with available detailed thumbnail
        if (this.mime && this.mime.match(/application\/vnd\.oasis\.opendocument\.(text|presentation|spreadsheet|chart)/)) {
            this.egw().tooltipBind(this, '<img src="' + this.src + '&thsize=512"/>', true);
        }
        else {
            this.egw().tooltipUnbind(this);
        }
    };
    var Et2VfsMime_1;
    /**
     * Mime type of directories
     */
    Et2VfsMime.DIR_MIME_TYPE = 'httpd/unix-directory';
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2VfsMime.prototype, "mime", void 0);
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2VfsMime.prototype, "symlink", void 0);
    __decorate([
        property_js_1.property({ type: Object })
    ], Et2VfsMime.prototype, "value", null);
    Et2VfsMime = Et2VfsMime_1 = __decorate([
        custom_element_js_1.customElement('et2-vfs-mime')
    ], Et2VfsMime);
    return Et2VfsMime;
}(Et2ImageExpose_1.Et2ImageExpose));
exports.Et2VfsMime = Et2VfsMime;
var templateObject_1, templateObject_2, templateObject_3;
