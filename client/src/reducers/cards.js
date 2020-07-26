import {
  CARDS_START_LOADING,
  CARDS_END_LOADING,
  CARD_ADDED,
  CARD_UPDATED,
  CARD_DELETED,
  CARDS_RECEIVED
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

    case CARD_ADDED:
      return { ...state, loading: false }

    case CARDS_RECEIVED:
      return { ...state, cards: payload.data, loading: false }
    
    case CARD_UPDATED:
      return { ...state, loading: false }

    case CARD_DELETED:
      return { ...state, loading: false }
    
  
    default:
      return {...state}
  }
}
  