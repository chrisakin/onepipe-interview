const router = require('express').Router();
const Card = require('../models/cardModel');


router.post('/savecard', (req, res, next) => {
  let card = new Card(req.body);
  card.save()
  .then(() => res.json({
    success: true,
    message: "Card saved successfully"
  }))
  .catch((err) => {
        console.log("Unable to save card in db", err);
        res.status(400).json({ error: "Error saving Card details." });
   });
});

module.exports = router;