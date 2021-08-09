const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/castillodb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Something went wrong: ", err));