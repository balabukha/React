import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import dotenv from 'dotenv';

import auth from './routes/auth';


dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/bookworm");
mongoose.connect(process.env.MONGODB_URL, {useMongoClient: true});


// app.post('/api/auth', (req, res)=> {
//     res.status(400).json({errors:{global: 'Invalid credentials'}})
// })

app.use("/api/auth", auth);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(8080, ()=> console.log('running on 8080'));