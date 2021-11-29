import { all, fork } from 'redux-saga/effects'

import example from './example'

function * root () {
  yield all([
    fork(example),
  ])
}

export default root
