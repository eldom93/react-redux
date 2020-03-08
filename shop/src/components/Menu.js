import React from 'react'
import FilterLink from '../containers/FilterLink'

import { VisibilityFilter } from '../actions'


const Menu = () => (
    <div className="menu">
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>
        <span style={{display:"none"}} className="circle" width="100px" height="100px">22</span>Inbox</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ARCHIVED}>Archive
        <span className="circle" width="100px" height="100px">22</span></FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
        <span style={{display:"none"}} className="circle" width="100px" height="100px">22</span>Selected</FilterLink>
    </div>

)

export default Menu