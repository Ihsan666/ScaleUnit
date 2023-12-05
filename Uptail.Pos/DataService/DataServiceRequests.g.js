System.register(["PosApi/Entities", "./DataServiceEntities.g", "PosApi/Consume/DataService"], function (exports_1, context_1) {
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
    var Entities_1, DataServiceEntities_g_1, DataService_1, StoreOperations, DeserveMagicBox, CustomerHistory, ItemBarCodes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (DataServiceEntities_g_1_1) {
                DataServiceEntities_g_1 = DataServiceEntities_g_1_1;
            },
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            exports_1("Entities", DataServiceEntities_g_1.Entities);
            (function (StoreOperations) {
                var UptailSearchLegacyPurchasesResponse = (function (_super) {
                    __extends(UptailSearchLegacyPurchasesResponse, _super);
                    function UptailSearchLegacyPurchasesResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UptailSearchLegacyPurchasesResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.UptailSearchLegacyPurchasesResponse = UptailSearchLegacyPurchasesResponse;
                var UptailSearchLegacyPurchasesRequest = (function (_super) {
                    __extends(UptailSearchLegacyPurchasesRequest, _super);
                    function UptailSearchLegacyPurchasesRequest(customerAccountId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "UptailSearchLegacyPurchases";
                        _this._parameters = { customerAccountId: customerAccountId };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.LegacySalesTransaction;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return UptailSearchLegacyPurchasesRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.UptailSearchLegacyPurchasesRequest = UptailSearchLegacyPurchasesRequest;
            })(StoreOperations || (StoreOperations = {}));
            exports_1("StoreOperations", StoreOperations);
            (function (DeserveMagicBox) {
                var GetMagicBoxDetailsResponse = (function (_super) {
                    __extends(GetMagicBoxDetailsResponse, _super);
                    function GetMagicBoxDetailsResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetMagicBoxDetailsResponse;
                }(DataService_1.DataServiceResponse));
                DeserveMagicBox.GetMagicBoxDetailsResponse = GetMagicBoxDetailsResponse;
                var GetMagicBoxDetailsRequest = (function (_super) {
                    __extends(GetMagicBoxDetailsRequest, _super);
                    function GetMagicBoxDetailsRequest(boxNumber) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "DeserveMagicBox";
                        _this._entityType = "MagicBox";
                        _this._method = "GetMagicBoxDetails";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.MagicBox;
                        _this._isReturnTypeCollection = false;
                        _this._keys = { BoxNumber: boxNumber };
                        return _this;
                    }
                    return GetMagicBoxDetailsRequest;
                }(DataService_1.DataServiceRequest));
                DeserveMagicBox.GetMagicBoxDetailsRequest = GetMagicBoxDetailsRequest;
                var updateMagicBoxResponse = (function (_super) {
                    __extends(updateMagicBoxResponse, _super);
                    function updateMagicBoxResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return updateMagicBoxResponse;
                }(DataService_1.DataServiceResponse));
                DeserveMagicBox.updateMagicBoxResponse = updateMagicBoxResponse;
                var updateMagicBoxRequest = (function (_super) {
                    __extends(updateMagicBoxRequest, _super);
                    function updateMagicBoxRequest(boxNumber) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "DeserveMagicBox";
                        _this._entityType = "MagicBox";
                        _this._method = "updateMagicBox";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.MagicBox;
                        _this._isReturnTypeCollection = false;
                        _this._keys = { BoxNumber: boxNumber };
                        return _this;
                    }
                    return updateMagicBoxRequest;
                }(DataService_1.DataServiceRequest));
                DeserveMagicBox.updateMagicBoxRequest = updateMagicBoxRequest;
                var GetAllMagicBoxesResponse = (function (_super) {
                    __extends(GetAllMagicBoxesResponse, _super);
                    function GetAllMagicBoxesResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetAllMagicBoxesResponse;
                }(DataService_1.DataServiceResponse));
                DeserveMagicBox.GetAllMagicBoxesResponse = GetAllMagicBoxesResponse;
                var GetAllMagicBoxesRequest = (function (_super) {
                    __extends(GetAllMagicBoxesRequest, _super);
                    function GetAllMagicBoxesRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "DeserveMagicBox";
                        _this._entityType = "MagicBox";
                        _this._method = "GetAllMagicBoxes";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.MagicBox;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetAllMagicBoxesRequest;
                }(DataService_1.DataServiceRequest));
                DeserveMagicBox.GetAllMagicBoxesRequest = GetAllMagicBoxesRequest;
            })(DeserveMagicBox || (DeserveMagicBox = {}));
            exports_1("DeserveMagicBox", DeserveMagicBox);
            (function (CustomerHistory) {
                var GetCustomerHistory1Response = (function (_super) {
                    __extends(GetCustomerHistory1Response, _super);
                    function GetCustomerHistory1Response() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetCustomerHistory1Response;
                }(DataService_1.DataServiceResponse));
                CustomerHistory.GetCustomerHistory1Response = GetCustomerHistory1Response;
                var GetCustomerHistory1Request = (function (_super) {
                    __extends(GetCustomerHistory1Request, _super);
                    function GetCustomerHistory1Request(custometId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "CustomerHistory";
                        _this._entityType = "CustomerHistory";
                        _this._method = "GetCustomerHistory1";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.CustomerHistory;
                        _this._isReturnTypeCollection = true;
                        _this._keys = { CustometId: custometId };
                        return _this;
                    }
                    return GetCustomerHistory1Request;
                }(DataService_1.DataServiceRequest));
                CustomerHistory.GetCustomerHistory1Request = GetCustomerHistory1Request;
            })(CustomerHistory || (CustomerHistory = {}));
            exports_1("CustomerHistory", CustomerHistory);
            (function (ItemBarCodes) {
                var GetItemBarCodesResponse = (function (_super) {
                    __extends(GetItemBarCodesResponse, _super);
                    function GetItemBarCodesResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetItemBarCodesResponse;
                }(DataService_1.DataServiceResponse));
                ItemBarCodes.GetItemBarCodesResponse = GetItemBarCodesResponse;
                var GetItemBarCodesRequest = (function (_super) {
                    __extends(GetItemBarCodesRequest, _super);
                    function GetItemBarCodesRequest(itemId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "ItemBarCodes";
                        _this._entityType = "ItemBarCodes";
                        _this._method = "GetItemBarCodes";
                        _this._parameters = { itemId: itemId };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.ItemBarCodes;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetItemBarCodesRequest;
                }(DataService_1.DataServiceRequest));
                ItemBarCodes.GetItemBarCodesRequest = GetItemBarCodesRequest;
            })(ItemBarCodes || (ItemBarCodes = {}));
            exports_1("ItemBarCodes", ItemBarCodes);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/DataService/DataServiceRequests.g.js.map