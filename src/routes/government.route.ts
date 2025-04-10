import express, { IRouter } from 'express';
import * as governmentController from '../controllers/government.controller';

// const express = require('express');
// const governmentController = require('../controllers/governmentController');

const router = express.Router();

router.get('/', governmentController.getGovernmentStructure);
router.get('/federal', governmentController.getFederalLevel);
router.get('/state/:state', governmentController.getStateLevel);

export default router;