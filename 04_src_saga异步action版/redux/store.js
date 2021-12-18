/* 
	在store中创建saga的中间件并run起来中间件
*/

import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import mySaga from './sagas'


// //引入redux-thunk，用于支持异步action
// import thunk from 'redux-thunk'
// //引入redux-saga，用于支持异步action
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

//暴露store
// export default createStore(countReducer,applyMiddleware(thunk))
const store = createStore(countReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
export default store