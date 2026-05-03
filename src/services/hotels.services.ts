import { CreateHotelDTO } from "../dto/hotel.dto";
import { create_Hotel, find_Hotel_byID, getAll_Hotels, softDelete_Hotel_byID } from "../repositories/hotels.repositories";

export async function create_Hotel_Service(hotelData : CreateHotelDTO) {
    const hotel = await create_Hotel(hotelData);
    return hotel;
}

export async function find_Hotel_byID_Service(id : number) {
    const hotel = await find_Hotel_byID(id);
    return hotel;
}

export async function getAll_Hotels_Service() {
    const hotels = await getAll_Hotels();
    return hotels;
}

export async function softDelete_Hotel_byID_Service(id : number) {
    const hotel = await softDelete_Hotel_byID(id);
    return hotel;
}