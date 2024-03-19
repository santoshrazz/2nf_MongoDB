import express from 'express'
import { connector } from './db/Connection.js'
import router from './Router/Book.Route.js'
const app = express();
const PORT = 8080;
connector();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", router);



app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})