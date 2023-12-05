System.register([], function (exports_1, context_1) {
    "use strict";
    var ContextManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ContextManager = (function () {
                function ContextManager(_context, _correlationId) {
                    this.context = _context;
                    this.correlationId = _correlationId ? _correlationId : _context.logger.getNewCorrelationId();
                }
                return ContextManager;
            }());
            exports_1("default", ContextManager);
        }
    };
});
//# sourceMappingURL=D:/commerce/Development/Orderhistory/src/UptailCommerceSolution/Uptail.Pos/Managers/ContextManager.js.map