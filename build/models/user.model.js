"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String,
        enum: ['govermentOfficial', 'Journalist', 'citizen'],
    },
    password: {
        type: String
    },
    nin: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('User', userSchema);
