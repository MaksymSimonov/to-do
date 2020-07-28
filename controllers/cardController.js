const Card = require('../models/card')

createCard = (req, res) => {
  const body = req.body

  if (!body.title) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a card title'
    })
  }

  const card = new Card(body)
  card.date = new Date().getTime()

  if (!card) {
    return res.status(400).json({ success: false, error: err })
  }

  card
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        data: card
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Card not saved!'
      })
    })
}

updateCard = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update'
    })
  }

  Card.findOne({ _id: req.params.id }, (err, card) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Card not found!'
      })
    }

    card.title = body.title
    card.tasks = body.tasks
    card.date = body.date
    card
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: card._id,
          message: 'Card updated!'
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Card not updated!'
        })
      })
  })
}

deleteCard = async (req, res) => {
  await Card.findOneAndDelete({ _id: req.params.id }, (err, card) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!card) {
      return res.status(404).json({ success: false, error: 'Card not found' })
    }

    return res.status(200).json({ success: true, data: card })
  }).catch(err => console.log(err))
}

addTask = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to add task'
    })
  }

  Card.findOne({ _id: req.params.cardId }, (err, card) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Card not found!'
      })
    }

    const task = {
      task: body.task,
      done: false,
      date: new Date().getTime()
    }

    const cardTasks = card.tasks
    cardTasks.push(task)
    card.tasks = cardTasks

    card
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          data: card
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Card not updated!'
        })
      })
  })
}

deleteTask = async (req, res) => {
  Card.findOne({ _id: req.params.cardId }, (err, card) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Card not found!'
      })
    }

    card.tasks = card.tasks.filter(task => task._id != req.params.taskId)

    card
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          data: card
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Card not updated!'
        })
      })
  })
}

updateDoneForTask = async (req, res) => {
  Card.findOne({ _id: req.params.cardId }, (err, card) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Card not found!'
      })
    }

    card.tasks = card.tasks.map(task => {
      if (task._id == req.params.taskId) {
        task.done = !task.done
        return task
      }
      return task
    })

    card
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          data: card
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Card not updated!'
        })
      })
  })
}

getCardById = async (req, res) => {
  await Card.findOne({ _id: req.params.id }, (err, card) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!card) {
      return res.status(404).json({ success: false, error: 'Card not found' })
    }

    return res.status(200).json({ success: true, data: card })
  }).catch(err => console.log(err))
}

getCards = async (req, res) => {
  await Card.find({}, (err, cards) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    return res.status(200).json({ success: true, data: cards })
  }).catch(err => console.log(err))
}

searchCards = async (req, res) => {
  const searchData = req.body.searchData

  await Card.find({}, (err, cards) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (searchData.length == 0){
      return res.status(200).json({ success: true, data: cards })
    }

    let result = []
    cards.forEach( card => {
      if (card.title.toLowerCase().indexOf(searchData.toLowerCase()) != -1) {
        result.push(card)
      } else {
        let tasks = [...card.tasks]
        tasks.forEach(task => {
          if (task.task.toLowerCase().indexOf(searchData.toLowerCase()) != -1) result.push(card)
        })
      }
    })

    return res.status(200).json({ success: true, data: result })
  }).catch(err => console.log(err))
}

module.exports = {
  createCard,
  updateCard,
  deleteCard,
  getCardById,
  getCards,
  deleteTask,
  updateDoneForTask,
  addTask,
  searchCards
}
