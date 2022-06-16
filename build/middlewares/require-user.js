"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_authorized_error_1 = require("../errors/not-authorized-error");
exports.requireUser = function (req, _res, next) {
    var _a;
    if (((_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.role) !== "User") {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    next();
};
