import express from 'express'
const router = express.Router();
import { getAuthor, addAuthor, addBooks } from "../controller/myController.js"
router.post("/addBook", addBooks)

router.get("/author/:id", getAuthor)
router.post("/addAuthor", addAuthor)
export default router;
