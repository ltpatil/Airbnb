import dotenv from 'dotenv';

export function loadEnv() {
    dotenv.config();
}
loadEnv();

export const serverConfig = {
    PORT: Number(process.env.PORT) || 3001,
};

export const dbConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'test_db',
};