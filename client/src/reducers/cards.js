import {
  CARDS_START_LOADING,
  CARDS_END_LOADING,
  CARD_UPDATED,
  CARD_DELETED,
  CARDS_RECEIVED,
  DONE_FOR_TASK_UPDATED,
  TASK_DELETED,
  TASK_ADDED
} from '../utils/constants/actionsName'

const initialState = {
  cards: [],
  loading: false
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CARDS_START_LOADING:
      return { ...state, loading: true }

    case CARDS_END_LOADING:
      return { ...state, loading: false }

    case CARDS_RECEIVED:
      return { ...state, cards: payload.data, loading: false }

    case CARD_UPDATED:
      return { ...state, loading: false }

    case CARD_DELETED: {
      const result = [...state.cards].filter(card => card._id !== payload.cardId)
      return { ...state, cards: result, loading: false }
    }

    case TASK_DELETED: {
      const result = [...state.cards].map(card => {
        if (card._id === payload.cardId) return payload.card
        return card
      })
      return { ...state, cards: result, loading: false }
    }

    case TASK_ADDED: {
      const result = [...state.cards].map(card => {
        if (card._id === payload.cardId) return payload.card
        return card
      })
      return { ...state, cards: result, loading: false }
    }

    case DONE_FOR_TASK_UPDATED: {
      const result = [...state.cards].map(card => {
        if (card._id === payload.cardId) return payload.card
        return card
      })
      return { ...state, cards: result, loading: false }
    }

    default:
      return { ...state }
  }
}
