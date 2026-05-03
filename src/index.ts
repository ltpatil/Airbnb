import express from 'express';
import {serverConfig} from './config';
import apirouter from './routes/index.router';
import { AppErrorHandler } from './utils/error.util';
import logger from './config/logger.config';
import { attachCorrelationID } from './utils/correlation.utils';
import sequelize from './db/models/sequelize';
const app = express();

app.use(express.json());
app.use(attachCorrelationID);



app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.use('/api',apirouter);


app.use(AppErrorHandler);


app.listen(serverConfig.PORT, async() => {
    logger.info(`Example app listening at http://localhost:${serverConfig.PORT}`);
    
    await sequelize.authenticate();
    logger.info(`DATABASE connected successfully !!!`);
    
    // i was just checking stuff
    // try {
    //     await sequelize.authenticate();
    //     logger.info(`DATABASE connected successfully !!!`);

    //     const hotel = await Hotel.create({
    //         name : 'HOtel 456',
    //         address : 'Adress 456',
    //         location : 'location456',
    //         ratings : 6.75,
    //         rating_count : 35
    //     });

    //     logger.info('HOtel Created Sucessfully !!!',hotel.toJSON());

    // } catch (error) {
    //     console.log(`Something went wrong`);
    // }


}); 
