
import {combineReducers} from 'redux'
import { session} from './session';
import { users } from './users';
import { alerts } from './alerts';
import { workLogs } from './workLogs';
const rootReducer = combineReducers({
  session,
  users,
  alerts,
  workLogs
})

export default rootReducer