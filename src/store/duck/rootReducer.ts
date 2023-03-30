import { combineReducers} from 'redux';
import { RepositoriesState } from './repositories/types';

import repositories from './repositories/reducers'

export default combineReducers({
    repositories,
})