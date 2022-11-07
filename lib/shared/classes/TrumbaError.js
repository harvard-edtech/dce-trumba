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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom Trumba error that contains a message and code
 * @author Gabe Abrams
 */
var TrumbaError = /** @class */ (function (_super) {
    __extends(TrumbaError, _super);
    /**
     * Create a new Trumba error
     * @author Gabe Abrams
     * @param opts object containing all arguments
     * @param [opts.message] error message
     * @param [opts.code] error code
     * @param [opts.stack] stack trace to associate with the error
     */
    function TrumbaError(opts) {
        var _this = this;
        var _a, _b;
        _this = _super.call(this, opts.message) || this;
        _this.message = opts.message || 'An unknown error occurred.';
        _this.name = 'TrumbaError';
        _this.code = String(opts.code || 'NOCODE1').toUpperCase();
        _this.stack = (_b = (_a = opts.stack) !== null && _a !== void 0 ? _a : new Error(_this.message).stack) !== null && _b !== void 0 ? _b : 'No Stack';
        _this.isTrumbaError = true;
        return _this;
    }
    return TrumbaError;
}(Error));
exports.default = TrumbaError;
//# sourceMappingURL=TrumbaError.js.map