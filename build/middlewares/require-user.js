"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_types_1 = require("../types/user.types");
var not_authorized_error_1 = require("../errors/not-authorized-error");
var require_auth_1 = require("./require-auth");
var jsonwebtoken_1 = require("jsonwebtoken");
exports.requireUser = function (req, res, next) {
    require_auth_1.requireAuth(req, res, function () {
        var _a;
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new not_authorized_error_1.NotAuthorizedError();
        }
        var decodedToken = jsonwebtoken_1.decode(req.header("authorization"));
        if (((_a = decodedToken) === null || _a === void 0 ? void 0 : _a.role) !== user_types_1.UserEnum.Customer) {
            throw new not_authorized_error_1.NotAuthorizedError();
        }
    });
    next();
};
