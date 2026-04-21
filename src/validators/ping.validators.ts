import {z } from "zod";
import { NextFunction, Request, Response} from "express";
import logger from "../config/logger.config";

export const pingValidator = (bodyModel : z.ZodType) =>{
    return async (req : Request, res : Response, next : NextFunction) =>{
        try {
            logger.info("Validating Body ---")
            await bodyModel.parseAsync(req.body);
            logger.info("Body Validated !!");
            next();
        } catch (error) {
            logger.info("Invalid Body !!!")
            res.status(422).json({
                message : "INVALID BODY",
                success : false,
                error : error
            })
        }
    }
}

