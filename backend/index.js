import express, { response } from "express"
import {PORT, MONGO_URI} from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", (req,res) => {
    console.log(req)
    return res.status(234).send("test")
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

app.use('/books', booksRoute)

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(`App connected to database`)
    }).catch((e) => {
        console.log(e)
    })
