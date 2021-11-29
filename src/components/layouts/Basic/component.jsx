import React from 'react'
import pt from 'prop-types'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

import { Container, Content } from './styles'

const Basic = ({ children }) => (
  <Container>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
)

Basic.propTypes = {
  children: pt.node,
}

export default Basic
