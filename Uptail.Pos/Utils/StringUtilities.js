System.register(["PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var TypeExtensions_1;
    var __moduleName = context_1 && context_1.id;
    function isNullEmptyOrWhitespace(text) {
        return TypeExtensions_1.StringExtensions.isNullOrWhitespace(text) || TypeExtensions_1.StringExtensions.isEmpty(text);
    }
    exports_1("isNullEmptyOrWhitespace", isNullEmptyOrWhitespace);
    function isNullOrEmpty(text) {
        return text == null || TypeExtensions_1.StringExtensions.isEmpty(text);
    }
    exports_1("isNullOrEmpty", isNullOrEmpty);
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Utils/StringUtilities.js.map