import express from 'express';
// use for POST methods
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import mediaRoutes from './routes/mediaRoutes.js'

// initialize the app
const app = express();


// setting this to properly send out request
app.use(bodyParser.json({limit:"30mb", extnded: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extnded: true}));
app.use(cors());

app.use('/media', mediaRoutes)
// mongodb.com/cloud/atlas
// cluster act as the online cloud db

const CONNECTION_URL = 'mongodb+srv://oll-sam98:data12345678@cluster0.b2ubi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log('Established a connection to the database. Running at port: 8000')))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));