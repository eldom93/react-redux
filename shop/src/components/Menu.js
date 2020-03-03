import React from 'react'
import FilterLink from '../containers/FilterLink'

import { VisibilityFilters } from '../actions'


const Menu = () => (
    <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>Inbox</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ARCHIVED}>Archive</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Selected</FilterLink>
    </div>

)

export default Menu