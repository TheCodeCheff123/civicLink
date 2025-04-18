"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    message: {
        type: String
    },
    upvotes: {
        type: [String],
        default: []
    },
    downvotes: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Post', postSchema);
