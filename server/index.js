import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
// copy of express
dotenv.config();
const app = express();
//extend the limit of 
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());


const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("We are connected to the database.🍀");
    })
    .catch((error) => {
        console.log("an error occurred while connecting ot the db", error);
    });

app.listen(PORT, () => console.log(`The webserver is running on port ${PORT}`));