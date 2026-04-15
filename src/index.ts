import express from 'express';
import {serverConfig} from './config';
import apirouter from './routes/index.router';
const app = express();


app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.use('/api',apirouter);


app.listen(serverConfig.PORT, () => {
    console.log(`Example app listening at http://localhost:${serverConfig.PORT}`);
}); 
