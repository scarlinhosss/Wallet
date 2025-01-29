"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No results for this search"
    };
}
exports.notFoundError = notFoundError;
