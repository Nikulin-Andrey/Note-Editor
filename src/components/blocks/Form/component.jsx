import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from './styles'
import Button from '@/components/common/Button'
import TextInput from '@/components/common/TextInput'
import { cardsAdd } from '@/actions'

const Form = props => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onInput = e => {
    setText(e.target.value)
  }

  const addCard = () => {
    dispatch(cardsAdd(text))
  }

  return (
    <Container>
      <TextInput text={text} onInput={onInput}></TextInput>
      <Button color="secondary" onClick={addCard}>Add</Button>
    </Container>
  )
}

export default Form
