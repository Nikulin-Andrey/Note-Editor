import { createReducer } from '@reduxjs/toolkit'

import { exampleRequest, exampleResponse, exampleResponseFail } from '@/actions'

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  error: null,
}

const exampleReducer = createReducer(initialState, builder => {
  builder.addCase(exampleRequest, state => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    error: null,
  }))

  builder.addCase(exampleResponse, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    data: action.payload,
    error: null,
  }))

  builder.addCase(exampleResponseFail, (state, action) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
    data: [],
    error: action.payload,
  }))
})

export default exampleReducer
