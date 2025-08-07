"use strict";
/**
 * EGroupware eTemplate2 - Contains interfaces used inside the dataview
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage dataview
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
 * @copyright EGroupware GmbH 2011-2021
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_IDataProvider = exports.et2_dataview_IViewRange = exports.et2_dataviewIInvalidatable = void 0;
/*egw:uses
    et2_core_inheritance;
*/
var et2_core_interfaces_1 = require("./et2_core_interfaces");
exports.et2_dataviewIInvalidatable = "et2_dataview_IInvalidatable";
et2_core_interfaces_1.et2_implements_registry.et2_dataview_IInvalidatable = function (obj) {
    return et2_core_interfaces_1.implements_methods(obj, ["invalidate"]);
};
exports.et2_dataview_IViewRange = "et2_dataview_IViewRange";
et2_core_interfaces_1.et2_implements_registry.et2_dataview_IViewRange = function (obj) {
    return et2_core_interfaces_1.implements_methods(obj, ["setViewRange"]);
};
exports.et2_IDataProvider = "et2_IDataProvider";
et2_core_interfaces_1.et2_implements_registry.et2_IDataProvider = function (obj) {
    return et2_core_interfaces_1.implements_methods(obj, ["dataFetch", "dataRegisterUID", "dataUnregisterUID"]);
};
