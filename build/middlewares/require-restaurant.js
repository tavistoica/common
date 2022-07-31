"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_types_1 = require("../types/user.types");
var not_authorized_error_1 = require("../errors/not-authorized-error");
var require_auth_1 = require("./require-auth");
exports.requireRestaurant = function (req, res, next) {
    require_auth_1.requireAuth(req, res, function () {
        if (req.token.role !== user_types_1.UserEnum.Restaurant) {
            throw new not_authorized_error_1.NotAuthorizedError();
        }
    });
    next();
};
