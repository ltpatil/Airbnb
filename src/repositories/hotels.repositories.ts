import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { CreateHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../errors/app.error";

export async function create_Hotel(hotelData : CreateHotelDTO) {
    const hotel = await Hotel.create({
        name : hotelData.name,
        address : hotelData.address,
        location : hotelData.location,
        ratings : hotelData.ratings,
        rating_count : hotelData.rating_count
    })

    logger.info(`HOtel Creted : ${hotel.id}`)
    return hotel;
}

export async function find_Hotel_byID(id:number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel){
        logger.error(`Hotel with id ${id} not found !!!`)
        throw new NotFoundError(`HOTEL NOT FOUND`);
    }

    logger.info(`Hotel with id ${hotel.id} found !!!`)
    return hotel;
}

export async function getAll_Hotels() {
    const hotels = await Hotel.findAll();

    if(!hotels){
        logger.error(`All Hotels not found !!!`)
        throw new NotFoundError(`HOTELS NOT FOUND`);
    }

    logger.info(`Hotels found!!!`)
    return hotels;
}