const express = require('express');
const morgan = require('morgan');
const cors = require('cors');                  
const port = process.env.PORT || 8080;
const app = express(); 
require("./config/db");

//express application using required packages 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get("/", (req, res) => res.json({message: "Welcome to Onepipe Backend"}));

// api endpoint routes
const CardsRoutes = require('./routes/cardsRoutes');

//express application using Routes from this application
app.use('/api/cards', CardsRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
}); 

module.exports = app;