import { takeEvery, put } from 'redux-saga/effects' //引入saga的action监听器
import { INCREMENT_SAGA } from './constant'
import { createIncrementAction } from './count_action'

function* mySaga() {
    yield takeEvery(INCREMENT_SAGA, increment)
}

function* increment(data) {
    yield setTimeout(() => {
        console.log("saga:",data.data)
    }, 500)
    // saga里的put就等于thunk里的dispatch
    yield put(createIncrementAction(data.data))
}

export default mySaga;