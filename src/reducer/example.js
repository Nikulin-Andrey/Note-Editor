import { createReducer } from '@reduxjs/toolkit'

import { cardsAdd, cardsDelete, cardsEdit, cardsSave, cardsStartEdit } from '@/actions'
import { addCard, deleteCard } from '@/helpers'

const initialState = {
  editCardId: null,
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
    builder.addCase(cardsAdd, (state, action) => ({
      ...state,
      cards: addCard(state.cards, action.payload),
    }))

    builder.addCase(cardsDelete, (state, action) => ({
      ...state,
      cards: deleteCard(state.cards, action.payload),
    }))

    builder.addCase(cardsEdit, (state, action) => {
      const indexOfEdit = state.cards.findIndex(card => state.editCardId === card.id)
      state.cards.splice(indexOfEdit, 1, { id: state.editCardId, text: action.payload })
    })

    builder.addCase(cardsStartEdit, (state, action) => {
      state.editCardId = action.payload
    })

    builder.addCase(cardsSave, state => {
      state.editCardId = null
    })
  },
)

export default cardsReducer
