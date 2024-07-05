import express from 'express'
import dbConnect from './config/dbConnect.js';

const app = express()
const connect = dbConnect()

app.get("/", (req, res) => {
    console.log("aaaaaaaaaaaaaaaaa");
})

export default app