import { combineReducers } from 'redux'
import mailApp from './mailApp'
import visibilityFilter from './VisibilityFilter'

export default combineReducers({
    mailApp,
    visibilityFilter
})