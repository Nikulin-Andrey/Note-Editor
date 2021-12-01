import { combineReducers } from 'redux'

import cardsReducer from './example'

const reducer = combineReducers({
  data: cardsReducer,
})

export default reducer
