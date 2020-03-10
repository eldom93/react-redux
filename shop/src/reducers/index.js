import { combineReducers } from 'redux'
import composeMail from './composeMail'
import visibilityFilter from './VisibilityFilter'

export default combineReducers({
    composeMail,
    visibilityFilter
})