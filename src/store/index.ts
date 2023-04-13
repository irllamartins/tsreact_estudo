import { legacy_createStore as createStore, applyMiddleware, Store } from '@reduxjs/toolkit'
import { RepositoriesState } from './duck/repositories/types'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./duck/rootReducer"
import rootSaga from './duck/rootSaga'

export interface AplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store