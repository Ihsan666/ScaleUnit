System.register(["../../OperationRequests"], function (exports_1, context_1) {
    "use strict";
    var OperationRequests_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (OperationRequests_1_1) {
                OperationRequests_1 = OperationRequests_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new OperationRequests_1.ShowLegacyPurchasesOperationRequest(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Operations/ShowLegacyPurchases/ShowLegacyPurchasesRequestFactory.js.map