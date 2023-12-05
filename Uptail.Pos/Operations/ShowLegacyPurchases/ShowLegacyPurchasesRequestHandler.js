System.register(["PosApi/Create/Operations", "../../OperationRequests", "../../Managers/SalesTransactionsManager", "../../Utils/DialogUtilities", "../../Utils/StringUtilities", "PosApi/Consume/Customer"], function (exports_1, context_1) {
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
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var Operations_1, OperationRequests_1, SalesTransactionsManager_1, DialogUtilities_1, StringUtilities_1, Customer_1, ShowLegacyPurchasesRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (OperationRequests_1_1) {
                OperationRequests_1 = OperationRequests_1_1;
            },
            function (SalesTransactionsManager_1_1) {
                SalesTransactionsManager_1 = SalesTransactionsManager_1_1;
            },
            function (DialogUtilities_1_1) {
                DialogUtilities_1 = DialogUtilities_1_1;
            },
            function (StringUtilities_1_1) {
                StringUtilities_1 = StringUtilities_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            }
        ],
        execute: function () {
            ShowLegacyPurchasesRequestHandler = (function (_super) {
                __extends(ShowLegacyPurchasesRequestHandler, _super);
                function ShowLegacyPurchasesRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ShowLegacyPurchasesRequestHandler.prototype.supportedRequestType = function () {
                    return OperationRequests_1.ShowLegacyPurchasesOperationRequest;
                };
                ShowLegacyPurchasesRequestHandler.prototype.executeAsync = function (request) {
                    return __awaiter(this, void 0, void 0, function () {
                        var dialogResponse, customerIdEntryResult, getCurrentCustomerClientRequest, _result, manager, transactionsResult, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, DialogUtilities_1.default.showAlfaNumericDialog(this.context, "Scan or enter customer", "Customer account number", "Scan or enter customer account number")];
                                case 1:
                                    dialogResponse = _a.sent();
                                    customerIdEntryResult = dialogResponse.data && dialogResponse.data.result && dialogResponse.data.result.value;
                                    getCurrentCustomerClientRequest = new Customer_1.GetCustomerClientRequest(dialogResponse.data.result.value);
                                    return [4, this.context.runtime.executeAsync(getCurrentCustomerClientRequest)];
                                case 2:
                                    _result = _a.sent();
                                    if (!(_result.data.result.Blocked != true)) return [3, 7];
                                    if (!!StringUtilities_1.isNullEmptyOrWhitespace(customerIdEntryResult)) return [3, 6];
                                    manager = new SalesTransactionsManager_1.SalesTransactionsManager(this.context, this.context.logger.getNewCorrelationId());
                                    return [4, manager.readLegacyTransactions(customerIdEntryResult)];
                                case 3:
                                    transactionsResult = _a.sent();
                                    if (!(transactionsResult != null && !transactionsResult.canceled && transactionsResult.data != undefined && transactionsResult.data.length != 0)) return [3, 4];
                                    this.context.navigator.navigate("ShowLegacyPurchasesView", { transactions: transactionsResult.data });
                                    return [3, 6];
                                case 4: return [4, DialogUtilities_1.default.showInfoMessage(this.context, "Not Found", "Customer Not Found in legacy data.")];
                                case 5:
                                    _a.sent();
                                    _a.label = 6;
                                case 6: return [3, 9];
                                case 7: return [4, DialogUtilities_1.default.showInfoMessage(this.context, "Blocked", "This Customer is blocked.")];
                                case 8:
                                    _a.sent();
                                    _a.label = 9;
                                case 9:
                                    response = new OperationRequests_1.ShowLegacyPurchasesOperationResponse();
                                    return [2, Promise.resolve({
                                            canceled: false,
                                            data: response
                                        })];
                            }
                        });
                    });
                };
                return ShowLegacyPurchasesRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", ShowLegacyPurchasesRequestHandler);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Operations/ShowLegacyPurchases/ShowLegacyPurchasesRequestHandler.js.map