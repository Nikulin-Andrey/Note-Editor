import { createAction } from '@reduxjs/toolkit'

import {
  EXAMPLE_REQUEST,
  EXAMPLE_RESPONSE,
  EXAMPLE_RESPONSE_FAIL,
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
  SAVE_CARD,
  START_EDIT_CARD,
} from '@/constants'

export const cardsAdd = createAction(ADD_CARD, cards => ({ payload: cards }))
export const cardsDelete = createAction(DELETE_CARD)
export const cardsEdit = createAction(EDIT_CARD)
export const cardsStartEdit = createAction(START_EDIT_CARD)
export const cardsSave = createAction(SAVE_CARD)
export const exampleRequest = createAction(EXAMPLE_REQUEST)
export const exampleResponse = createAction(EXAMPLE_RESPONSE, data => ({ payload: data }))

export const exampleResponseFail = createAction(EXAMPLE_RESPONSE_FAIL, error => ({
  payload: error,
}))
