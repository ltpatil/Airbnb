import { Request, Response } from 'express';
import logger from '../config/logger.config';

function pingHandler(req : Request, res : Response): void {
    res.send('pong');
    logger.info("Ping Request Reached to end Successfully !");
}

export { pingHandler };