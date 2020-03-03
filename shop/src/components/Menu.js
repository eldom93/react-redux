import React from 'react'
import FilterLink from '../containers/FilterLink'

import { VisibilityFilters } from '../actions'


const Menu = () => (
    <nav>
        <span>Show:</span>

        <FilterLink filter={VisibilityFilters.SHOW_ALL}>Inbox</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ARCHIVED}>Archive</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DELETED}>Trash</FilterLink>
        
    </nav>
    
)

export default Menu