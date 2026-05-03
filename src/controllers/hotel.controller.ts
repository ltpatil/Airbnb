import { NextFunction, Request, Response } from 'express';
import { create_Hotel_Service, find_Hotel_byID_Service, getAll_Hotels_Service } from '../services/hotels.services';

export async function create_Hotel_Handler(req : Request, res : Response, next : NextFunction){
    
    const hotel = await create_Hotel_Service(req.body);

    res.status(201).json({
        message : 'Hotel created Succesfully !!!',
        data : hotel,
        success : true
    });
}

export async function find_Hotel_byID_Handler(req : Request, res : Response, next : NextFunction){
    
    const hotel = await find_Hotel_byID_Service(Number(req.params.id));

    res.status(201).json({
        message : 'Hotel found Succesfully !!!',
        data : hotel,
        success : true
    });
}

export async function getALL_Hotels_Handler(req : Request, res : Response, next : NextFunction){
    
    const hotels = await getAll_Hotels_Service();

    res.status(201).json({
        message : 'Hotels found Succesfully !!!',
        data : hotels,
        success : true
    });
}