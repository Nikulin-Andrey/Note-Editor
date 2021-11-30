import React from 'react'

import { Container } from './styles'
import Button from '@/components/common/Button'
import TextInput from '@/components/common/TextInput'

const Form = props => {
  return (
    <Container>
      <TextInput></TextInput>
      <Button color="secondary" onClick={() => console.log('add')}>Add</Button>
    </Container>
  )
}

export default Form
