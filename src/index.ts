import express from 'express';
import {serverConfig} from './config';
import apirouter from './routes/index.router';
import { AppErrorHandler } from './utils/error.util';
import logger from './config/logger.config';
import { attachCorrelationID } from './utils/correlation.utils';
const app = express();

app.use(express.json());
app.use(attachCorrelationID);



app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.use('/api',apirouter);


app.use(AppErrorHandler);
app.listen(serverConfig.PORT, () => {
    logger.info(`Example app listening at http://localhost:${serverConfig.PORT}`);
}); 
