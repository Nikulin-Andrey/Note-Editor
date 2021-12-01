import React from 'react'

import { Input } from './styles'

const TextInput = ({ text, onInput }) => {
  return <Input value={text} onChange={onInput}/>
}

export default TextInput
