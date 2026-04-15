import { Request, Response } from 'express';

function pingHandler(req : Request, res : Response): void {
    res.send('pong');
}

export { pingHandler };