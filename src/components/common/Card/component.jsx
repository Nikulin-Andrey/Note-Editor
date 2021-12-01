import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Header, Content } from './styles'
import Button from '@/components/common/Button'
import { cardsDelete, cardsEdit, cardsSave, cardsStartEdit } from '@/actions'
import TextInput from '../TextInput'

const Card = ({ text, id, editId }) => {
  const dispatch = useDispatch()
  const currenCard = useRef(null)
  const isEdit = editId === id

  const deleteCard = () => {
    dispatch(cardsDelete(Number(currenCard.current.id)))
  }

  const setNewText = e => {
    dispatch(cardsEdit(e.target.value))
  }

  const saveCard = () => {
    dispatch(cardsSave())
  }

  const editCard = () => {
    dispatch(cardsStartEdit(Number(currenCard.current.id)))
  }

  const content = isEdit ? <TextInput text={text} onInput={setNewText}/> : <Content>{text}</Content>
  const editButton = isEdit ? <Button color="secondary" onClick={saveCard}>Save</Button> : <Button color="secondary" onClick={editCard}>Edit</Button>

  return (
    <Container id={id} ref={currenCard}>
      <Header>
        {editButton}
        <Button color="tertiary" onClick={deleteCard}>Delete</Button>
      </Header>
      {content}
    </Container>
  )
}

export default Card
