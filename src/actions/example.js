import { createAction } from '@reduxjs/toolkit'

import {
  EXAMPLE_REQUEST,
  EXAMPLE_RESPONSE,
  EXAMPLE_RESPONSE_FAIL,
} from '@/constants'

export const exampleRequest = createAction(EXAMPLE_REQUEST)
export const exampleResponse = createAction(EXAMPLE_RESPONSE, data => ({ payload: data }))

export const exampleResponseFail = createAction(EXAMPLE_RESPONSE_FAIL, error => ({
  payload: error,
}))
