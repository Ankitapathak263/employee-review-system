const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://ankitapathak837:nzfF7VMS7f0Gesas@cluster0.gjsw5oz.mongodb.net/employee?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost/employee-review-system');

const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;