export const deleteCard = (cards, id) =>
  cards.filter(card => card.id !== id)
