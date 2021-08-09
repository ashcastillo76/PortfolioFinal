const {createQuote, getAllQuotes, getOneQuote, deleteQuote} = require('../controllers/controller');

module.exports = app => {
    // CREATE
    app.post('/api/quotes/new', createQuote);
    // READ
    app.get('/api/quotes', getAllQuotes);
    app.get('/api/quotes/:_id', getOneQuote);
    // UPDATE

    // DELETE
    app.delete('/api/quotes/:_id/delete', deleteQuote);

}