import express, { IRouter } from 'express';
import governmentRoute from './government.route';

const router = express.Router();

import userRoute from './user.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/auth', new userRoute().getRoutes());
  router.use('/government',new governmentRoute().getRoutes());

  return router;
};

export default routes;
