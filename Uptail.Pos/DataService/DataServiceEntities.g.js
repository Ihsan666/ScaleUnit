System.register(["PosApi/Entities", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Entities_1, TypeExtensions_1, Entities;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            (function (Entities) {
                var MagicBox = (function () {
                    function MagicBox(odataObject) {
                        odataObject = odataObject || {};
                        this.BoxNumber = odataObject.BoxNumber;
                        this.BoxName = odataObject.BoxName;
                        this.BoxPurchased = odataObject.BoxPurchased;
                    }
                    return MagicBox;
                }());
                Entities.MagicBox = MagicBox;
                var CustomerHistory = (function () {
                    function CustomerHistory(odataObject) {
                        odataObject = odataObject || {};
                        this.CustometId = odataObject.CustometId;
                        this.StoreId = odataObject.StoreId;
                        this.TransactionId = odataObject.TransactionId;
                        this.SalesDateTime = (odataObject.SalesDateTime instanceof Date) ? odataObject.SalesDateTime
                            : (odataObject.SalesDateTime != null) ? TypeExtensions_1.DateExtensions.convertStringToDateObject(odataObject.SalesDateTime) : undefined;
                        this.Description = odataObject.Description;
                        this.ItemNumber = odataObject.ItemNumber;
                        this.Quantity = (odataObject.Quantity != null) ? parseFloat(odataObject.Quantity) : undefined;
                        this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
                        this.Amount = (odataObject.Amount != null) ? parseFloat(odataObject.Amount) : undefined;
                        this.Currency = odataObject.Currency;
                    }
                    return CustomerHistory;
                }());
                Entities.CustomerHistory = CustomerHistory;
                var ItemBarCodes = (function () {
                    function ItemBarCodes(odataObject) {
                        odataObject = odataObject || {};
                        this.Barcode = odataObject.Barcode;
                        this.ItemId = odataObject.ItemId;
                        this.RetailVariantId = odataObject.RetailVariantId;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return ItemBarCodes;
                }());
                Entities.ItemBarCodes = ItemBarCodes;
                var LegacySalesTransaction = (function () {
                    function LegacySalesTransaction(odataObject) {
                        odataObject = odataObject || {};
                        this.StoreId = odataObject.StoreId;
                        this.TransactionId = odataObject.TransactionId;
                        this.SalesDateTime = (odataObject.SalesDateTime instanceof Date) ? odataObject.SalesDateTime
                            : (odataObject.SalesDateTime != null) ? TypeExtensions_1.DateExtensions.convertStringToDateObject(odataObject.SalesDateTime) : undefined;
                        this.Description = odataObject.Description;
                        this.ItemNumber = odataObject.ItemNumber;
                        this.Quantity = (odataObject.Quantity != null) ? parseFloat(odataObject.Quantity) : undefined;
                        this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
                        this.Amount = (odataObject.Amount != null) ? parseFloat(odataObject.Amount) : undefined;
                        this.Currency = odataObject.Currency;
                    }
                    return LegacySalesTransaction;
                }());
                Entities.LegacySalesTransaction = LegacySalesTransaction;
            })(Entities || (Entities = {}));
            exports_1("Entities", Entities);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/DataService/DataServiceEntities.g.js.map