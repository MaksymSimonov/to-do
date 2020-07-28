import {
  CARDS_START_LOADING,
  CARDS_END_LOADING,
  CARDS_RECEIVED,
  CARD_ADDED,
  CARD_UPDATED,
  CARD_DELETED,
  DONE_FOR_TASK_UPDATED,
  TASK_DELETED,
  TASK_ADDED
} from '../utils/constants/actionsName'
import { Toastr } from '../utils/toastr/Toastr'

import apiRequest from '../utils/helpers/apiRequest'
  
export const createCard = (title) => {
  const body = {
    title
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
    const result = await apiRequest.delete('/card/' + cardId)
    if (result.success === true){
      dispatch({
        type: CARD_DELETED,
        payload: { cardId }
      })
    }
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

export const deleteTask = (cardId, taskId) => async dispatch => {
  try {
    const result = await apiRequest.delete('/card/' + cardId + '/task/' + taskId)
    if (result.success === true){
      const card = result.data
      dispatch({
        type: TASK_DELETED,
        payload: { cardId, card }
      })
    }
  } catch (e) {
    Toastr.error('Something goes wrong! Please try again later')
  }
}

export const addTask = (cardId, task) => async dispatch => {
  const body = {
    task
  }

  try {
    const result = await apiRequest.post('/card/' + cardId + '/task', body)
    console.log(result)
    if (result.success === true){
      const card = result.data
      dispatch({
        type: TASK_ADDED,
        payload: { cardId, card }
      })
    }
  } catch (e) {
    Toastr.error('Something goes wrong! Please try again later')
  }
}


export const updateDoneForTask = (cardId, taskId) => async dispatch => {
  try {
    const result = await apiRequest.put('/card/' + cardId + '/task/' + taskId)
    if (result.success === true){
      const card = result.data
      dispatch({
        type: DONE_FOR_TASK_UPDATED,
        payload: { cardId, card }
      })
    }
  } catch (e) {
    Toastr.error('Something goes wrong! Please try again later')
  }
}
