"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.currentUser = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer ")))
        return res.sendStatus(401);
    var token = authHeader.split(" ")[1];
    if (!token) {
        return next();
    }
    try {
        var payload = jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_PRIVATE_KEY);
        req.currentUser = payload;
    }
    catch (err) {
        console.log(err);
    }
    next();
};
