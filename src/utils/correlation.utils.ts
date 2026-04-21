import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { asyncLocalStorage } from "./requestContext.util";

export const attachCorrelationID = (req : Request, res : Response, next : NextFunction)=>{
    const coorealtionID = uuidv4();
    req.headers["x-correlation-id"] = coorealtionID;
    asyncLocalStorage.run({coorealtionID : coorealtionID},()=>{
        next();
    })
}