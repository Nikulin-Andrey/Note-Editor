import { createReducer } from '@reduxjs/toolkit'

import {
  addCard,
  deleteCard,
  editCard,
} from '@/actions'

const initialState = {
  cards: [
    {
      id: 1,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Corrupti, nihil. Cupiditate odit asperiores,
      pariatur mollitia totam voluptate unde illo! Aliquid
      odio vero amet! Earum magni ipsum amet recusandae.
      Repudiandae reiciendis cum saepe corporis
      exercitationem ducimus consectetur laudantium
      praesentium a dolorem est eligendi, quidem quam`,
    },
    {
      id: 2,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Corrupti, nihil. Cupiditate odit asperiores,
      pariatur mollitia totam voluptate unde illo! Aliquid
      odio vero amet! Earum magni ipsum amet recusandae.
      Repudiandae reiciendis cum saepe corporis
      exercitationem ducimus consectetur laudantium
      praesentium a dolorem est eligendi, quidem quam`,
    },
    {
      id: 3,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Corrupti, nihil. Cupiditate odit asperiores,
      pariatur mollitia totam voluptate unde illo! Aliquid
      odio vero amet! Earum magni ipsum amet recusandae.
      Repudiandae reiciendis cum saepe corporis
      exercitationem ducimus consectetur laudantium
      praesentium a dolorem est eligendi, quidem quam`,
    },
  ],
}

const cardsReducer = createReducer(
  initialState,
  builder => {
    builder.addCase(addCard, (state, action) => ({
      ...state,
      cards: action.payload,
    }))

    builder.addCase(deleteCard, (state, action) => ({
      ...state,
      cards: action.payload,
    }))

    builder.addCase(editCard, (state, action) => ({
      ...state,
      cards: action.payload,
    }))
  },
)

export default cardsReducer
