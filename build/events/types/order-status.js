"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    // When the order has been created, but the
    // meal it is trying to order has not been reserved
    OrderStatus["Pending"] = "pending";
    // The meal the order is trying to reserve has already
    // been reserved, or when the user has cancelled the order.
    // The order expires before payment
    OrderStatus["Cancelled"] = "cancelled";
    // The order has successfully reserved the meal
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    // The order has reserved the meal and the user has
    // provided payment successfully
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
