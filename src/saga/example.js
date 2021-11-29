import { put, call, takeLatest } from 'redux-saga/effects'

import { exampleResponse, exampleResponseFail } from '@/actions'
import { EXAMPLE_REQUEST } from '@/constants'

function * watchExample () {
  try {
    const data = yield call(() => {
      return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
    })

    yield put(exampleResponse(data))
  } catch (error) {
    yield put(exampleResponseFail(error))
  }
}

function * root () {
  yield takeLatest(EXAMPLE_REQUEST, watchExample)
}

export default root
