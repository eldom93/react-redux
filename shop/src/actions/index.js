/*
 * action types
 */
export const ARCHIVE_EMAIL = 'ARCHIVE_EMAIL'
export const TOGGLE_EMAIL = 'TOGGLE_EMAIL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ARCHIVED: 'SHOW_ARCHIVED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*
 * action creators
 */


export const archiveEmail = text => ({
    type: ARCHIVE_EMAIL, text 
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER, filter
})

export const toggleEmail = id => ({
    type: TOGGLE_EMAIL, id 
})
