"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateLevel = exports.getFederalLevel = exports.getGovernmentStructure = void 0;
const governmentData_json_1 = __importDefault(require("../lib/governmentData.json"));
// const governmentData = require('./governmentData.json');
const getGovernmentStructure = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: governmentData_json_1.default
    });
};
exports.getGovernmentStructure = getGovernmentStructure;
const getFederalLevel = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: governmentData_json_1.default.government.federal
    });
};
exports.getFederalLevel = getFederalLevel;
const getStateLevel = (req, res) => {
    const state = req.params.state;
    if (governmentData_json_1.default.government.state.example[state]) {
        return res.status(200).json({
            status: 'success',
            data: governmentData_json_1.default.government.state.example[state]
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'State not found in database'
    });
};
exports.getStateLevel = getStateLevel;
