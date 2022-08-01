"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.currentUser = function (req, _res, next) {
    var authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader) {
        return next();
    }
    try {
        var payload = jsonwebtoken_1.default.verify(
        // @ts-ignore
        authHeader, process.env.REFRESH_TOKEN_PRIVATE_KEY);
        req.currentUser = payload;
    }
    catch (err) {
        console.log(err);
    }
    next();
};
