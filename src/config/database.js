import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    username : process.env.DB_User || 'root',
    password : process.env.DB_Pass || 'root',
    database : process.env.DB_Name || 'airbnb',
    name : process.env.DB_Name || 'Airbnb',
    host : process.env.DB_Host || 'localhost',
    dialect : 'mysql'
}


export default dbConfig;

