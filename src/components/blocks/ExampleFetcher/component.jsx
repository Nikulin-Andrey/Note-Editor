import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { exampleRequest } from '@/actions'
import Loader from '@/components/common/Loader/component'
import Container from './styles'

const ExampleFetcher = () => {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector(store => store.example)

  useEffect(() => {
    dispatch(exampleRequest())
  }, [dispatch])

  if (isLoading) {
    return (<Loader />)
  }

  return (
    <Container>
      <h2>I am a fetcher</h2>
      <ul>
        {data.map(post => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </Container>
  )
}

export default ExampleFetcher
