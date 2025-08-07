"use strict";
/**
 * EGroupware eTemplate2 - JS XML Code
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_readAttrWithDefault = exports.et2_filteredNodeIterator = exports.et2_directChildrenByTagName = exports.et2_loadXMLFromURL = void 0;
require("../../../vendor/bower-asset/jquery/dist/jquery.min.js");
require("../jquery/jquery.noconflict.js");
var egw_global_js_1 = require("../jsapi/egw_global.js");
/**
 * Loads the given URL asynchronously from the server
 *
 * We make the Ajax call through main-windows jQuery object, to ensure cached copy
 * in main-windows etemplate2 prototype works in IE too!
 *
 * @param {string} _url
 * @param {function} _callback function(_xml)
 * @param {object} _context for _callback
 * @param {function} _fail_callback function(_xml)
 * @return Promise
 */
function et2_loadXMLFromURL(_url, _callback, _context, _fail_callback) {
    if (typeof _context == "undefined") {
        _context = null;
    }
    // use window object from main window with same algorithm as for the template cache
    var win;
    try {
        if (opener && opener.etemplate2) {
            win = opener;
        }
    }
    catch (e) {
        // catch security exception if opener is from a different domain
    }
    if (typeof win == "undefined") {
        win = egw_global_js_1.egw.top;
    }
    // if preprocessor is missing --> add it
    if (_url.indexOf('/etemplate.php/') === -1) {
        var parts = _url.match(/^(.*)(\/[^/]+\/templates\/.*)$/);
        if (parts) {
            _url = parts[1] + '/api/etemplate.php' + parts[2];
        }
    }
    // we add the full url (protocol and domain) as sometimes just the path
    // gives a CSP error interpreting it as file:///path
    // (if there are a enough 404 errors in html content ...)
    return win.fetch((_url[0] === '/' ? location.protocol + '//' + location.host : '') + _url, {
        method: 'GET'
    })
        .then(function (response) {
        if (!response.ok) {
            throw response;
        }
        return response.text();
    })
        .then(function (xml) {
        var parser = new window.DOMParser();
        return parser.parseFromString(xml, "text/xml");
    })
        .then(function (xmldoc) {
        if (typeof _callback === 'function') {
            _callback.call(_context, xmldoc.children[0]);
        }
        return xmldoc.children[0];
    })
        .catch(function (_err) {
        egw_global_js_1.egw().message('Loading eTemplate from ' + _url + ' failed!' + "\n\n" +
            (typeof _err.stack !== 'undefined' ? _err.stack : _err.status + ' ' + _err.statusText), 'error');
        if (typeof _fail_callback === 'function') {
            _fail_callback.call(_context, _err);
        }
    });
}
exports.et2_loadXMLFromURL = et2_loadXMLFromURL;
function et2_directChildrenByTagName(_node, _tagName) {
    // Normalize the tag name
    _tagName = _tagName.toLowerCase();
    var result = [];
    for (var i = 0; i < _node.childNodes.length; i++) {
        if (_tagName == _node.childNodes[i].nodeName.toLowerCase()) {
            result.push(_node.childNodes[i]);
        }
    }
    return result;
}
exports.et2_directChildrenByTagName = et2_directChildrenByTagName;
function et2_filteredNodeIterator(_node, _callback, _context) {
    for (var i = 0; i < _node.childNodes.length; i++) {
        var node = _node.childNodes[i];
        var nodeName = node.nodeName.toLowerCase();
        if (nodeName.charAt(0) != "#") {
            _callback.call(_context, node, nodeName);
        }
    }
}
exports.et2_filteredNodeIterator = et2_filteredNodeIterator;
function et2_readAttrWithDefault(_node, _name, _default) {
    var val = _node.getAttribute(_name);
    return (val === null) ? _default : val;
}
exports.et2_readAttrWithDefault = et2_readAttrWithDefault;
