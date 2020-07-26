const express = require('express')
const CardController = require('../controllers/cardController')
const router = express.Router()

router.post('/card', CardController.createCard)
router.put('/card/:id', CardController.updateCard)
router.delete('/card/:id', CardController.deleteCard)
router.get('/card/:id', CardController.getCardById)
router.get('/cards', CardController.getCards)

module.exports = router