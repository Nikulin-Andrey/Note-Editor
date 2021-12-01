export const addCard = (cards, text) => {
  const lastId = cards[cards.length - 1]?.id || 0
  return [...cards, { text: text, id: lastId + 1 }]
}

export const deleteCard = (cards, id) =>
  cards.filter(card => card.id !== id)
export const editCard = (cards, text, id) => {
  const newCards = [...cards]
  const indexOfEdit = newCards.findIndex(
    card => card.id === id,
  )
  newCards.splice(indexOfEdit, 1, { id: id, text: text })
  return newCards
}
