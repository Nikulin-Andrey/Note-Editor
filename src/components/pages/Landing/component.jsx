import React from 'react'

import ExampleFetcher from '@/components/blocks/ExampleFetcher'
import Form from '@/components/blocks/Form'
import BasicLayout from '@/components/layouts/Basic'

import { Container } from './styles'

const Landing = () => (
  <BasicLayout>
    <Container>
      <Form />
    </Container>
  </BasicLayout>
)

export default Landing
