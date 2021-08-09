const Quote = require ('../models/models');

module.exports = {
    // CREATE
    createQuote: (req, res) => {
        Quote.create(req.body)
            .then(quote => res.json({message: "success", results: quote}))
            .catch(err => res.json({message: "error", results: err}))
    },
    // READ
    getAllQuotes:(req, res) => {
        Quote.find()
            .then(quote => res.json({message: "success", results: quote}))
            .catch(err => res.json({message: "error", results: err}))
    },
    getOneQuote:(req, res)=>{
        Quote.findById(req.params._id)
            .then(quote => res.json({message: "success", results: quote}))
            .catch(err => res.json({message: "error", results: err}))
    },
    // UPDATE


    // DELETE
    deleteQuote: (req, res) => {
        Quote.findByIdAndDelete(req.params._id)
            .then(quote => res.json({message: "success", results: quote}))
            .catch(err => res.json({message: "error", results: err}))
    },

}