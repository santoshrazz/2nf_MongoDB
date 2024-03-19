import { authorModel } from "../models/author.model.js";
import { BookModel } from '../models/Book.model.js'

const addAuthor = async (req, res) => {
    try {
        const { authorName } = req.body;
        console.log(authorName);
        const result = await authorModel.create({
            Name: authorName
        })
        console.log(result);
        res.status(201).json(result);

    } catch (error) {
        console.log(`Error while adding book`);
    }
}
const getAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send("Id require")
        }
        const author = await authorModel.find({ _id: id }).populate('books');
        console.log(author);
        res.status(200).json(author)
    } catch (error) {
        res.status(500).send("Error while finding author from DB");
    }
}
const addBooks = async (req, res) => {
    try {
        const { Name, authorName } = req.body;
        if (!Name || !authorName) {
            res.send(404).json("Can't get author name or book name");
        }
        let author;
        author = await authorModel.findOne({ "Name": authorName })
        console.log(author);

        if (!author) {
            author = await authorModel.create({ Name: authorName })
        }

        const result = await BookModel.create({
            Name,
            author
        })
        author.books.push(result)
        const newAuthor = await author.save();
        res.json({ message: "Success", result });
    } catch (error) {
        console.log(`Error while adding book`);
    }
}

export { addAuthor, getAuthor, addBooks }