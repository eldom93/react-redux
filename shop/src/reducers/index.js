import { combineReducers } from 'redux'
import composeMail from './composeMail'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    composeMail,
    visibilityFilter
})