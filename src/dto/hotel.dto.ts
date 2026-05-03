export type CreateHotelDTO = {
    name : string;
    address : string;
    location : string;
    ratings ?: number;
    rating_count ?: number;
}