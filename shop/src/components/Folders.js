import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilter } from '../actions'

const Folders = () => (
    <div className="folders">
        <section className="col">
            <nav>
                <ul>
                    <li>
                    <FilterLink filter={VisibilityFilter.SHOW_INBOX}>Inbox</FilterLink>
                    </li>
                    <li>
                    <FilterLink filter={VisibilityFilter.SHOW_SENT_MAILS}>Sent Mail</FilterLink> 
                    </li>
                    <li>
                    <FilterLink filter={VisibilityFilter.SHOW_DRAFTS}>Drafts</FilterLink> 
                    </li>
                    <li>
                    <FilterLink filter={VisibilityFilter.SHOW_TRASH}>Trash</FilterLink>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
)

export default Folders
