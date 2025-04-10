

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

export const getStateLevel = (req: Request, res: Response): Response => {
    const state = req.params.state;
    if (governmentData.government.state.example[state]) {
        return res.status(200).json({
            status: 'success',
            data: governmentData.government.state.example[state]
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'State not found in database'
    });
};