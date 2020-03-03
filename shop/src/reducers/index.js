import { combineReducers } from 'redux'
import emails from './emails'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    emails,
    visibilityFilter
})