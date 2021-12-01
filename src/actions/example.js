import { createAction } from '@reduxjs/toolkit'

import {
  EXAMPLE_REQUEST,
  EXAMPLE_RESPONSE,
  EXAMPLE_RESPONSE_FAIL,
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
} from '@/constants'

export const addCard = createAction(ADD_CARD, cards => ({ payload: cards }))
export const deleteCard = createAction(DELETE_CARD)
export const editCard = createAction(EDIT_CARD)
export const exampleRequest = createAction(EXAMPLE_REQUEST)
export const exampleResponse = createAction(EXAMPLE_RESPONSE, data => ({ payload: data }))

export const exampleResponseFail = createAction(EXAMPLE_RESPONSE_FAIL, error => ({
  payload: error,
}))
