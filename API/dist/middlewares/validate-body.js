"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.validateParams = exports.validateBody = void 0;
const http_status_1 = __importDefault(require("http-status"));
const error_utils_1 = require("../utils/error-utils");
function validateBody(schema) {
    return validate(schema, "body");
}
exports.validateBody = validateBody;
function validateParams(schema) {
    return validate(schema, "params");
}
exports.validateParams = validateParams;
function validate(schema, type) {
    return (req, res, next) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });
        if (!error) {
            next();
        }
        else {
            console.log(error);
            res.status(http_status_1.default.BAD_REQUEST).send(error_utils_1.errorMessages.generic);
        }
    };
}
exports.validate = validate;
