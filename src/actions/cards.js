import { createAction, nanoid } from '@reduxjs/toolkit'

import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
  SAVE_CARD,
  START_EDIT_CARD,
} from '@/constants'

export const cardsAdd = createAction(ADD_CARD, text => {
  return {
    payload: {
      id: nanoid(),
      text: text,
    },
  }
})
export const cardsDelete = createAction(DELETE_CARD)
export const cardsEdit = createAction(EDIT_CARD)
export const cardsStartEdit = createAction(START_EDIT_CARD)
export const cardsSave = createAction(SAVE_CARD)
