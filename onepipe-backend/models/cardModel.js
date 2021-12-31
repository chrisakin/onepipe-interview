const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  CardName: {
    type: String,
    // required: true
  },
  cardNumber: {
    type: String,
    // required: true
  },
  cardMonth: {
    type: String
  },
  cardYear: {
    type: String
  },
  cardCvv: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("myCard", CardSchema);