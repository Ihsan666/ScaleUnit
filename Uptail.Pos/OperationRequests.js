System.register(["PosApi/Create/Operations", "PosApi/Create/RequestHandlers"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Operations_1, RequestHandlers_1, ShowLegacyPurchasesOperationResponse, ShowLegacyPurchasesOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (RequestHandlers_1_1) {
                RequestHandlers_1 = RequestHandlers_1_1;
            }
        ],
        execute: function () {
            ShowLegacyPurchasesOperationResponse = (function (_super) {
                __extends(ShowLegacyPurchasesOperationResponse, _super);
                function ShowLegacyPurchasesOperationResponse() {
                    return _super.call(this) || this;
                }
                return ShowLegacyPurchasesOperationResponse;
            }(RequestHandlers_1.Response));
            exports_1("ShowLegacyPurchasesOperationResponse", ShowLegacyPurchasesOperationResponse);
            ShowLegacyPurchasesOperationRequest = (function (_super) {
                __extends(ShowLegacyPurchasesOperationRequest, _super);
                function ShowLegacyPurchasesOperationRequest(correlationId) {
                    return _super.call(this, 10050, correlationId) || this;
                }
                return ShowLegacyPurchasesOperationRequest;
            }(Operations_1.ExtensionOperationRequestBase));
            exports_1("ShowLegacyPurchasesOperationRequest", ShowLegacyPurchasesOperationRequest);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/OperationRequests.js.map