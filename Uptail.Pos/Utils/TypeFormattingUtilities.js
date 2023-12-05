System.register(["PosApi/Consume/Formatters", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Formatters_1, TypeExtensions_1;
    var __moduleName = context_1 && context_1.id;
    function dateToShortString(date) {
        return TypeExtensions_1.ObjectExtensions.isNullOrUndefined(date) ? TypeExtensions_1.StringExtensions.EMPTY : Formatters_1.DateFormatter.toShortDate(date);
    }
    exports_1("dateToShortString", dateToShortString);
    function emptyIfNull(text) {
        return text ? text : TypeExtensions_1.StringExtensions.EMPTY;
    }
    exports_1("emptyIfNull", emptyIfNull);
    return {
        setters: [
            function (Formatters_1_1) {
                Formatters_1 = Formatters_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Utils/TypeFormattingUtilities.js.map