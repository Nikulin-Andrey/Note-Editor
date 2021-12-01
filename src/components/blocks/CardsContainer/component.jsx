import React from 'react'
import { useSelector } from 'react-redux'

import { Container } from './styles'
import Card from '@/components/common/Card'

const CardsContainer = props => {
  const { cards } = useSelector(store => store.data)

  return (
    <Container>
      {
        cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
          />
        ))
      }
    </Container>
  )
}

export default CardsContainer
