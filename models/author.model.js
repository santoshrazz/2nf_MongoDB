import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
}, {
    timestamps: true
})

export const authorModel = mongoose.model("Author", authorSchema);