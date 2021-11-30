import React from 'react'

import { Container } from './styles'

const Button = ({ children, color, onClick }) => {
  return (
    <Container color={color} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button
