import { configureStore,Store } from '@reduxjs/toolkit'
import { RepositoriesState } from './duck/repositories/types'

import rootReducer from "./duck/rootReducer"

export interface AplicationState {
    repositories: RepositoriesState
}
const store: Store<AplicationState> = configureStore( {reducer: rootReducer} )

export default store