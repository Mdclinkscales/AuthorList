const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authordb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Established a connection to the database"))
    .catch(()=>console.log("Something went wrong connecting to the database", err))