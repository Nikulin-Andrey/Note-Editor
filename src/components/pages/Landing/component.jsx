import React from 'react'

import Form from '@/components/blocks/Form'
import CardsContainer from '@/components/blocks/CardsContainer'
import BasicLayout from '@/components/layouts/Basic'

import { Container } from './styles'

const Landing = () => (
  <BasicLayout>
    <Container>
      <Form />
      <CardsContainer />
    </Container>
  </BasicLayout>
)

export default Landing
