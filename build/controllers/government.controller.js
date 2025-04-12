"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateLevel = exports.getStates = exports.getLocalGovernment = exports.getFederalLevel = exports.getGovernmentStructure = void 0;
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
const getLocalGovernment = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: governmentData_json_1.default.government.localGovernment.lga
    });
};
exports.getLocalGovernment = getLocalGovernment;
const getStates = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: governmentData_json_1.default.government.state.states
    });
};
exports.getStates = getStates;
const getStateLevel = (req, res) => {
    const state = req.params.state;
    // Check if the state parameter is provided
    if (governmentData_json_1.default.government.state.states[state]) {
        return res.status(200).json({
            status: 'success',
            data: governmentData_json_1.default.government.state.states[state]
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'State not found in database'
    });
};
exports.getStateLevel = getStateLevel;
