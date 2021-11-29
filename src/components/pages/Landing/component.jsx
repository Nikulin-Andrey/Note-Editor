import React from 'react'

import ExampleFetcher from '@/components/blocks/ExampleFetcher'
import BasicLayout from '@/components/layouts/Basic'

import { Container } from './styles'

const Landing = () => (
  <BasicLayout>
    <Container>
      <h1>Landing Page</h1>
      <ExampleFetcher />
    </Container>
  </BasicLayout>
)

export default Landing
