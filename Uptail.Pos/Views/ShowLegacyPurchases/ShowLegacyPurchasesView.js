System.register(["PosApi/TypeExtensions", "../KnockoutCustomViewControllerBase", "../KnockoutCustomViewModelBase", "PosApi/Consume/Controls", "knockout", "../../Utils/TypeFormattingUtilities"], function (exports_1, context_1) {
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
    var TypeExtensions_1, KnockoutCustomViewControllerBase_1, KnockoutCustomViewModelBase_1, Controls_1, knockout_1, TypeFormattingUtilities_1, ShowLegacyPurchasesView, ShowLegacyPurchasesViewModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (KnockoutCustomViewControllerBase_1_1) {
                KnockoutCustomViewControllerBase_1 = KnockoutCustomViewControllerBase_1_1;
            },
            function (KnockoutCustomViewModelBase_1_1) {
                KnockoutCustomViewModelBase_1 = KnockoutCustomViewModelBase_1_1;
            },
            function (Controls_1_1) {
                Controls_1 = Controls_1_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            },
            function (TypeFormattingUtilities_1_1) {
                TypeFormattingUtilities_1 = TypeFormattingUtilities_1_1;
            }
        ],
        execute: function () {
            ShowLegacyPurchasesView = (function (_super) {
                __extends(ShowLegacyPurchasesView, _super);
                function ShowLegacyPurchasesView(_context, _settings) {
                    var _this = this;
                    _settings.showHeader = true;
                    _settings.showNavPane = true;
                    _settings.appButtons = [];
                    _settings.title = "Show legacy purchases";
                    _this = _super.call(this, _context, _settings) || this;
                    _this.state.isProcessing = false;
                    _this.purchaseSettings = _settings;
                    return _this;
                }
                ShowLegacyPurchasesView.prototype.initializeViewModel = function (options) {
                    this.viewModel = new ShowLegacyPurchasesViewModel(this.context, options);
                };
                ShowLegacyPurchasesView.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                ShowLegacyPurchasesView.prototype.onReady = function (element) {
                    return __awaiter(this, void 0, void 0, function () {
                        var dataListRootElem;
                        return __generator(this, function (_a) {
                            dataListRootElem = element.querySelector("#uptailLegacyPurchasesListElement");
                            this.transactionList = this.context.controlFactory.create(this.context.logger.getNewCorrelationId(), "DataList", {
                                columns: [
                                    {
                                        collapseOrder: 8,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.Description); },
                                        isRightAligned: false,
                                        minWidth: 40,
                                        ratio: 30,
                                        title: "Item Name"
                                    },
                                    {
                                        collapseOrder: 7,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.Quantity.toString()); },
                                        isRightAligned: false,
                                        minWidth: 40,
                                        ratio: 10,
                                        title: "Quantity"
                                    },
                                    {
                                        collapseOrder: 6,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.Amount.toString()); },
                                        isRightAligned: false,
                                        minWidth: 40,
                                        ratio: 10,
                                        title: "Amount"
                                    },
                                    {
                                        collapseOrder: 5,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.Price.toString()); },
                                        isRightAligned: false,
                                        minWidth: 40,
                                        ratio: 10,
                                        title: "Price"
                                    },
                                    {
                                        collapseOrder: 4,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.Currency); },
                                        isRightAligned: false,
                                        minWidth: 50,
                                        ratio: 10,
                                        title: "Currency"
                                    },
                                    {
                                        collapseOrder: 3,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.TransactionId); },
                                        isRightAligned: false,
                                        minWidth: 50,
                                        ratio: 10,
                                        title: "Transaction"
                                    },
                                    {
                                        collapseOrder: 2,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.dateToShortString(line.SalesDateTime); },
                                        isRightAligned: false,
                                        minWidth: 50,
                                        ratio: 10,
                                        title: "Date"
                                    },
                                    {
                                        collapseOrder: 1,
                                        computeValue: function (line) { return TypeFormattingUtilities_1.emptyIfNull(line.ItemNumber); },
                                        isRightAligned: false,
                                        minWidth: 40,
                                        ratio: 10,
                                        title: "Product"
                                    }
                                ],
                                data: [],
                                interactionMode: Controls_1.DataListInteractionMode.SingleSelect,
                                equalityComparer: function (left, right) {
                                    return left.TransactionId === right.TransactionId;
                                }
                            }, dataListRootElem);
                            this.transactionList.data = this.purchaseSettings.transactions;
                            knockout_1.default.applyBindings(this, element);
                            return [2];
                        });
                    });
                };
                return ShowLegacyPurchasesView;
            }(KnockoutCustomViewControllerBase_1.KnockoutCustomViewControllerBase));
            exports_1("default", ShowLegacyPurchasesView);
            ShowLegacyPurchasesViewModel = (function (_super) {
                __extends(ShowLegacyPurchasesViewModel, _super);
                function ShowLegacyPurchasesViewModel(_context, _settings) {
                    var _this = _super.call(this, _context, _settings) || this;
                    _this.viewSettings = _settings;
                    _this.transactions = knockout_1.default.observableArray(_settings.transactions);
                    return _this;
                }
                return ShowLegacyPurchasesViewModel;
            }(KnockoutCustomViewModelBase_1.default));
            exports_1("ShowLegacyPurchasesViewModel", ShowLegacyPurchasesViewModel);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Views/ShowLegacyPurchases/ShowLegacyPurchasesView.js.map