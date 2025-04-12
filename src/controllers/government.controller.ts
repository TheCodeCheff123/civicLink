

import express from 'express';
import { Request, Response } from 'express';
import { NextFunction } from 'express';
import governmentData from '../lib/governmentData.json';

// const governmentData = require('./governmentData.json');

export const getGovernmentStructure = (req: Request, res: Response): void => {
    res.status(200).json({
        status: 'success',
        data: governmentData
    });
};

export const getFederalLevel = (req: Request, res: Response): void => {
    res.status(200).json({
        status: 'success',
        data: governmentData.government.federal
    });
};

export const getLocalGovernment = (req: Request, res: Response): void => {
    res.status(200).json({
        status: 'success',
        data: governmentData.government.localGovernment.lga
    });
}

export const getLocalGovernmentLevel = (req: Request, res: Response): Response => {
    const local = req.params.local;
    // Check if the localgovernment parameter is provided
    if (governmentData.government.localGovernment.lga[local]) {
        return res.status(200).json({
            status: 'success',
            data: governmentData.government.localGovernment.lga[local]
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'State not found in database'
    });
}

export const getStates = (req: Request, res: Response): void => {
    res.status(200).json({
        status: 'success',
        data: governmentData.government.state.states
    });
}

export const getStateLevel = (req: Request, res: Response): Response => {
    const state = req.params.state;
    // Check if the state parameter is provided
    if (governmentData.government.state.states[state]) {
        return res.status(200).json({
            status: 'success',
            data: governmentData.government.state.states[state]
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'State not found in database'
    });


};