System.register(["./StringUtilities"], function (exports_1, context_1) {
    "use strict";
    var StringUtilities_1, ThrowIf;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (StringUtilities_1_1) {
                StringUtilities_1 = StringUtilities_1_1;
            }
        ],
        execute: function () {
            ThrowIf = (function () {
                function ThrowIf() {
                }
                ThrowIf.nullOrUndefined = function (objectToCheck, errorMessage) {
                    if (objectToCheck == null)
                        throw errorMessage;
                };
                ThrowIf.nullEmptyOrWhitespace = function (text, errorMessage) {
                    if (StringUtilities_1.isNullEmptyOrWhitespace(text)) {
                        throw errorMessage;
                    }
                };
                return ThrowIf;
            }());
            exports_1("default", ThrowIf);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Utils/ThrowIf.js.map