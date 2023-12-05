System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions", "./StringUtilities"], function (exports_1, context_1) {
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
    var Dialogs_1, TypeExtensions_1, StringUtilities_1, NoYesOptions, DialogUtilities;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (StringUtilities_1_1) {
                StringUtilities_1 = StringUtilities_1_1;
            }
        ],
        execute: function () {
            NoYesOptions = (function () {
                function NoYesOptions() {
                }
                NoYesOptions.No = "NO";
                NoYesOptions.Yes = "YES";
                return NoYesOptions;
            }());
            exports_1("NoYesOptions", NoYesOptions);
            DialogUtilities = (function () {
                function DialogUtilities() {
                }
                DialogUtilities.showInfoMessage = function (context, title, message) {
                    return __awaiter(this, void 0, void 0, function () {
                        var options;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!StringUtilities_1.isNullEmptyOrWhitespace(message)) return [3, 2];
                                    options = {
                                        title: title,
                                        message: message,
                                        showCloseX: true,
                                        button1: {
                                            id: "Button1Close",
                                            label: "OK",
                                            result: "OK"
                                        }
                                    };
                                    return [4, context.runtime.executeAsync(new Dialogs_1.ShowMessageDialogClientRequest(options))];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2, Promise.resolve()];
                            }
                        });
                    });
                };
                DialogUtilities.showNoYesDialog = function (context, title, message) {
                    return __awaiter(this, void 0, void 0, function () {
                        var messageDialogOptions, dialogRequest, dialogResponse, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    messageDialogOptions = {
                                        title: title,
                                        message: message,
                                        showCloseX: false,
                                        button1: {
                                            id: "Ok",
                                            label: context.resources.getString("OkButton"),
                                            result: NoYesOptions.Yes,
                                            isPrimary: true
                                        },
                                        button2: {
                                            id: "Cancel",
                                            label: context.resources.getString("CancelButton"),
                                            result: NoYesOptions.No,
                                            isPrimary: false
                                        },
                                    };
                                    dialogRequest = new Dialogs_1.ShowMessageDialogClientRequest(messageDialogOptions);
                                    return [4, context.runtime.executeAsync(dialogRequest)];
                                case 1:
                                    dialogResponse = _a.sent();
                                    result = dialogResponse && dialogResponse.data && dialogResponse.data.result && dialogResponse.data.result.dialogResult;
                                    return [2, Promise.resolve(!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(result) && result === NoYesOptions.Yes)];
                            }
                        });
                    });
                };
                DialogUtilities.showAlfaNumericDialog = function (context, title, subtitle, numPadLabel, defaultValue) {
                    if (defaultValue === void 0) { defaultValue = null; }
                    return __awaiter(this, void 0, void 0, function () {
                        var options, dialogRequest, dialogResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    options = {
                                        title: title,
                                        subTitle: subtitle,
                                        numPadLabel: numPadLabel,
                                        defaultValue: defaultValue
                                    };
                                    dialogRequest = new Dialogs_1.ShowAlphanumericInputDialogClientRequest(options);
                                    return [4, context.runtime.executeAsync(dialogRequest)];
                                case 1:
                                    dialogResponse = _a.sent();
                                    return [2, dialogResponse];
                            }
                        });
                    });
                };
                return DialogUtilities;
            }());
            exports_1("default", DialogUtilities);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Utils/DialogUtilities.js.map