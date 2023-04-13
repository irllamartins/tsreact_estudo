import { all, takeLatest } from 'redux-saga/effects'
import { RepositoriesTypes, Repository } from './repositories/types'
import { load } from './repositories/sagas'

export default function* roootSaga(): any {
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load)
    ])
}