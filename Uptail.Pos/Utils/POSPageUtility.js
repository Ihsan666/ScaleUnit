System.register([], function (exports_1, context_1) {
    "use strict";
    var POSPageUtility;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            POSPageUtility = (function () {
                function POSPageUtility(_context) {
                    this.context = _context;
                }
                POSPageUtility.isPhone = function () {
                    var docBody = document.body;
                    if (docBody != null && docBody.classList != null
                        && docBody.classList.contains != null) {
                        return docBody.classList.contains("phone");
                    }
                    return false;
                };
                POSPageUtility.prototype.newAppBarCommand = function (id, iconType, labelId, executeFunction, visible, enabled) {
                    return {
                        name: id,
                        label: this.context.resources.getString(labelId),
                        icon: iconType,
                        isVisible: visible,
                        canExecute: enabled,
                        execute: function (args) {
                            executeFunction();
                        }
                    };
                };
                POSPageUtility.prototype.newGridColumn = function (titleLabelId, ratio, collapseOrder, minWidth, isRightAligned, computeValue) {
                    var column = {
                        title: this.context.resources.getString(titleLabelId),
                        ratio: ratio,
                        collapseOrder: collapseOrder,
                        minWidth: minWidth,
                        isRightAligned: isRightAligned,
                        computeValue: computeValue
                    };
                    return column;
                };
                return POSPageUtility;
            }());
            exports_1("default", POSPageUtility);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Utils/POSPageUtility.js.map