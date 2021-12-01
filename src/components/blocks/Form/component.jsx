import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from './styles'
import Button from '@/components/common/Button'
import TextInput from '@/components/common/TextInput'
import { addCard } from '@/actions'

const Form = props => {
  const [text, setText] = useState('')
  const { cards } = useSelector(store => store.data)
  const dispatch = useDispatch()

  const onInput = e => {
    setText(e.target.value)
  }

  const addNewCard = () => {
    const lastId = cards[cards.length - 1]?.id || 0
    const newCard = { text: text, id: lastId + 1 }
    dispatch(addCard([...cards, newCard]))
  }

  return (
    <Container>
      <TextInput text={text} onInput={onInput}></TextInput>
      <Button color="secondary" onClick={addNewCard}>Add</Button>
    </Container>
  )
}

export default Form
