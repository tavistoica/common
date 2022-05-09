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
exports.NotEnoughStock = void 0;
var custom_error_1 = require("./custom-error");
var NotEnoughStock = /** @class */ (function (_super) {
    __extends(NotEnoughStock, _super);
    function NotEnoughStock() {
        var _this = _super.call(this, "Route not found") || this;
        _this.statusCode = 400;
        Object.setPrototypeOf(_this, NotEnoughStock.prototype);
        return _this;
    }
    NotEnoughStock.prototype.serializeErrors = function () {
        return [
            { message: "Not enough stock for this item! Try a smaller amount." },
        ];
    };
    return NotEnoughStock;
}(custom_error_1.CustomError));
exports.NotEnoughStock = NotEnoughStock;
