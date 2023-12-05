System.register(["PosApi/TypeExtensions", "PosApi/Create/Views"], function (exports_1, context_1) {
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
    var TypeExtensions_1, Views, KnockoutCustomViewControllerBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Views_1) {
                Views = Views_1;
            }
        ],
        execute: function () {
            KnockoutCustomViewControllerBase = (function (_super) {
                __extends(KnockoutCustomViewControllerBase, _super);
                function KnockoutCustomViewControllerBase(context, settings) {
                    var _this = this;
                    var config = {
                        title: settings.title,
                        header: { isVisible: settings.showHeader ? true : false },
                        navigationPane: { isVisible: settings.showNavPane ? true : false },
                        commandBar: { commands: settings.appButtons ? settings.appButtons : [] }
                    };
                    _this = _super.call(this, context, config) || this;
                    settings.viewState = _this.state;
                    _this.initializeViewModel(settings);
                    return _this;
                }
                Object.defineProperty(KnockoutCustomViewControllerBase.prototype, "shouldHeaderSplitViewBeIntialized", {
                    get: function () { return false; },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(KnockoutCustomViewControllerBase.prototype, "shouldAppBarBeIntialized", {
                    get: function () { return false; },
                    enumerable: false,
                    configurable: true
                });
                KnockoutCustomViewControllerBase.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                KnockoutCustomViewControllerBase.prototype.onBarcodeScanned = function (barcode) {
                    this.context.logger.logVerbose(barcode);
                };
                KnockoutCustomViewControllerBase.prototype.onReady = function (element) { };
                KnockoutCustomViewControllerBase.prototype.resolveCallerPromise = function (result) {
                    if (this.viewModel.settings.caller && TypeExtensions_1.ObjectExtensions.isFunction(this.viewModel.settings.caller.resolvePromiseFunction)) {
                        this.viewModel.settings.caller.resolvePromiseFunction(result);
                    }
                };
                return KnockoutCustomViewControllerBase;
            }(Views.CustomViewControllerBase));
            exports_1("KnockoutCustomViewControllerBase", KnockoutCustomViewControllerBase);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Views/KnockoutCustomViewControllerBase.js.map