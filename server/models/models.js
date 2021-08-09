const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, "You must enter an quote name."],
    },
    author: {
        type: String,
        required: [true,"You must give credit to an author or anonymous"],
    }
}, { timestamps: true });

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;


