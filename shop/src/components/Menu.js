import React from 'react'
import FilterLink from '../containers/FilterLink'

import { VisibilityFilter } from '../actions'


const Menu = () => (
    <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>Inbox</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ARCHIVED}>Archive</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Selected</FilterLink>
    </div>

)

export default Menu