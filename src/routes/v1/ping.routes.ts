import express from 'express';
import { pingHandler } from '../../controllers/ping.contoller';
import { requestValidator } from '../../validators/requestvalidators';
import { pingSchema } from '../../validators/ping.schema';

const pingRouter = express.Router();

pingRouter.get('/',requestValidator(pingSchema), pingHandler);

export default pingRouter;
