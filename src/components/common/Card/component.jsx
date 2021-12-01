import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Header, Content } from './styles'
import Button from '@/components/common/Button'
import { deleteCard } from '@/actions'

const Card = ({ text, id }) => {
  const dispatch = useDispatch()
  const { cards } = useSelector(store => store.data)
  const currenCard = useRef(null)

  const deleteNote = () => {
    dispatch(deleteCard(cards.filter(card => card.id !== Number(currenCard.current.id))))
  }

  return (
    <Container id={id} ref={currenCard}>
      <Header>
        <Button color="secondary">Edit</Button>
        <Button color="tertiary" onClick={deleteNote}>Delete</Button>
      </Header>
      <Content>{text}</Content>
    </Container>
  )
}

export default Card
