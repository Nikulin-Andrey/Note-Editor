import React from 'react'

import { Container, Header, Content } from './styles'
import Button from '@/components/common/Button'

const Card = ({ children }) => {
  return (
    <Container>
      <Header>
        <Button color="secondary">
          Edit
        </Button>
        <Button color="tertiary">
          Delete
        </Button>
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}

export default Card
