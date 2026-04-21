import { Request, Response } from "express";
import fs from 'fs/promises';
import { NotFoundError } from "../errors/app.error";
import logger from "../config/logger.config";


export async  function readFileHandler (req : Request, res : Response){
    try {
        logger.info("Starting Reading File");
        await fs.readFile('dumb');
        res.status(200).json({
            success : true,
            message : "FILE READ SUCCESSFULLY !"
        })
        logger.info("Read File SuccessFully !!")
    } catch (error) {
        logger.error("File not Found !!!")
        throw new NotFoundError("FILE NOT FOUND !!");
    }
}
