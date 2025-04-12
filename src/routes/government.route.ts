import express, { IRouter } from 'express';
import * as governmentController from '../controllers/government.controller';

// const express = require('express');
// const governmentController = require('../controllers/governmentController');

class GovernmentRoutes {
    public router: IRouter;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', governmentController.getGovernmentStructure);
        this.router.get('/federal', governmentController.getFederalLevel);
        this.router.get('/state', governmentController.getStates);
        this.router.get('/state/:state', governmentController.getStateLevel);
        this.router.get('/local', governmentController.getLocalGovernment);
    }

    public getRoutes(): IRouter {
        return this.router;
    }
}

export default GovernmentRoutes;