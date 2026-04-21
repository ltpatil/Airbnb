import winston from "winston";
import { getCorrelationID } from "../utils/requestContext.util";
import DailyRotateFile from "winston-daily-rotate-file";


const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format : "YYYY-MM-DD HH:mm:ss"}),
        winston.format.json(),
        winston.format.printf(({ level, message, timestamp, data})=>{
            const output = {
                level,
                message,
                timestamp,
                coorealtionID :getCorrelationID(),
                data,
            }
            return JSON.stringify(output);
        })
    ),
    transports:[
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: 'logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ]
})

export default logger;