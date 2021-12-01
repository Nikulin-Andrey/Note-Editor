export const addCard = (cards, text) => {
  const lastId = cards[cards.length - 1]?.id || 0
  return [...cards, { text: text, id: lastId + 1 }]
}

export const deleteCard = (cards, id) =>
  cards.filter(card => card.id !== id)
