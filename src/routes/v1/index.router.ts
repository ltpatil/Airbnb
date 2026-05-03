import express from 'express';
import pingRouter from './ping.routes';
import readFileRouter from './readFile.routes';
import hotelRouter from './hotel.router';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);
v1Router.use('/read',readFileRouter);

v1Router.use('/hotels', hotelRouter);

export default v1Router;