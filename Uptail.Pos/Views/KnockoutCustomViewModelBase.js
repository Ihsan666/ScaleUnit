System.register(["PosApi/TypeExtensions", "../Utils/ThrowIf", "../Utils/POSPageUtility", "knockout"], function (exports_1, context_1) {
    "use strict";
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
    var TypeExtensions_1, ThrowIf_1, POSPageUtility_1, knockout_1, KnockoutCustomViewModelBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (ThrowIf_1_1) {
                ThrowIf_1 = ThrowIf_1_1;
            },
            function (POSPageUtility_1_1) {
                POSPageUtility_1 = POSPageUtility_1_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            }
        ],
        execute: function () {
            KnockoutCustomViewModelBase = (function () {
                function KnockoutCustomViewModelBase(context, _settings) {
                    ThrowIf_1.default.nullOrUndefined(_settings, "ViewModel settings cannot be undefined");
                    this._context = context;
                    this.settings = _settings ? _settings : {};
                    this.title = knockout_1.default.observable(TypeExtensions_1.StringExtensions.EMPTY);
                    this.isBusy = true;
                }
                Object.defineProperty(KnockoutCustomViewModelBase.prototype, "isBusy", {
                    get: function () {
                        return this.settings.viewState != null ? this.settings.viewState.isProcessing : false;
                    },
                    set: function (_busy) {
                        if (this.settings.viewState != null) {
                            this.settings.viewState.isProcessing = _busy;
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                KnockoutCustomViewModelBase.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                KnockoutCustomViewModelBase.prototype.closePage = function (refreshCaller) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this._context.navigator.navigateBack();
                            return [2, Promise.resolve()];
                        });
                    });
                };
                KnockoutCustomViewModelBase.prototype.refreshPageCaller = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var refreshCaller, ex_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, 4, 5]);
                                    this.isBusy = true;
                                    if (!(this.settings != null && this.settings.caller != null)) return [3, 2];
                                    refreshCaller = this.settings.caller;
                                    if (!(refreshCaller != null)) return [3, 2];
                                    return [4, refreshCaller.refresh()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    this.isBusy = false;
                                    return [3, 5];
                                case 3:
                                    ex_1 = _a.sent();
                                    return [3, 5];
                                case 4:
                                    this.isBusy = false;
                                    return [7];
                                case 5: return [2];
                            }
                        });
                    });
                };
                KnockoutCustomViewModelBase.prototype.isPhone = function () {
                    return POSPageUtility_1.default.isPhone();
                };
                KnockoutCustomViewModelBase.prototype.executeFunction = function (func, onSuccess, onFail, viewBusyOnExecute) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (viewBusyOnExecute)
                                this.isBusy = true;
                            return [2, func()
                                    .then(function () {
                                    if (onSuccess) {
                                        return onSuccess().
                                            then(function () {
                                            if (viewBusyOnExecute)
                                                _this.isBusy = false;
                                        });
                                    }
                                    else {
                                        if (viewBusyOnExecute)
                                            _this.isBusy = false;
                                        return Promise.resolve();
                                    }
                                })];
                        });
                    });
                };
                return KnockoutCustomViewModelBase;
            }());
            exports_1("default", KnockoutCustomViewModelBase);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Views/KnockoutCustomViewModelBase.js.map