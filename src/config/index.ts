import dotenv from 'dotenv';

export function loadEnv() {
    dotenv.config();
}
loadEnv();

export const serverConfig = {
    PORT: Number(process.env.PORT) || 3001,
};