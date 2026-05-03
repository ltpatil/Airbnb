import express from 'express';
import { create_Hotel_Handler, find_Hotel_byID_Handler, getALL_Hotels_Handler, softDelete_Hotel_byID_Handler } from '../../controllers/hotel.controller';
import { requestValidator } from '../../validators/requestvalidators';
import { hotelSchema } from '../../validators/hotel.schema';


const hotelRouter = express.Router();

hotelRouter.get('/:id',find_Hotel_byID_Handler);
hotelRouter.get('/',getALL_Hotels_Handler);

hotelRouter.delete('/:id',softDelete_Hotel_byID_Handler)

hotelRouter.post('/',requestValidator(hotelSchema),create_Hotel_Handler);

export default hotelRouter;
