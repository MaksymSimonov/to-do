import {
  CARDS_START_LOADING,
  CARDS_END_LOADING,
  CARDS_RECEIVED,
  CARD_ADDED,
  CARD_UPDATED,
  CARD_DELETED
} from '../utils/constants/actionsName'
import { Toastr } from '../utils/toastr/Toastr'

import apiRequest from '../utils/helpers/apiRequest'
  
export const createCard = (title, tasks, date) => {
  const body = {
    title,
    tasks: tasks,
    date
  }
  
  return apiRequest.post('/card', body)
    .then(() => window.location.reload())
}
  
export const updateCard = (cardId, title, tasks, date) => async dispatch => {
  const body = {
    title,
    tasks: tasks,
    date
  }
  
  try {
    const card = await apiRequest.put('/card/' + cardId, body)

    dispatch({
      type: CARD_UPDATED,
      payload: { cardId, card }
    })
  } catch (e) {
    Toastr.error('Something goes wrong! Please try again later')
  }
}

export const deleteCard = (cardId) => async dispatch => {
  try {
    const card = await apiRequest.delete('/card/' + cardId)
    dispatch({
      type: CARD_DELETED,
      payload: { cardId, card }
    })
  } catch (e) {
    Toastr.error('Something goes wrong! Please try again later')
  }
}

export const getCards = () => async dispatch => {
  dispatch({
    type: CARDS_START_LOADING
  })

  try {
    const cards = await apiRequest.get('/cards')
  
    dispatch({
      type: CARDS_RECEIVED,
      payload: cards
    })
  } catch (e) {
    dispatch({
      type: CARDS_END_LOADING
    })
  }
}