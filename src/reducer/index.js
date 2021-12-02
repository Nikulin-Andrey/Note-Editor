import { combineReducers } from 'redux'

import cardsReducer from './cards'

const reducer = combineReducers({
  data: cardsReducer,
})

export default reducer
