"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const government_route_1 = __importDefault(require("./government.route"));
const router = express_1.default.Router();
const user_route_1 = __importDefault(require("./user.route"));
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.get('/', (req, res) => {
        res.json('Welcome');
    });
    router.use('/auth', new user_route_1.default().getRoutes());
    router.use('/government', new government_route_1.default().getRoutes());
    return router;
};
exports.default = routes;
