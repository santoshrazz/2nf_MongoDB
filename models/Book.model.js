import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        require: true
    }
}, {
    timestamps: true
})

export const BookModel = mongoose.model("Book", bookSchema);