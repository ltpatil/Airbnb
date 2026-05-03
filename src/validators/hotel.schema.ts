import z from 'zod';

export const hotelSchema = z.object({
    name : z.string().min(5),
    address : z.string().min(5),
    location : z.string().min(5),
    ratings : z.number().optional(),
    rating_count : z.number().optional()
});

