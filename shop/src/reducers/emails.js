export const ARCHIVE_EMAIL = 'ARCHIVE_EMAIL'
export const TOGGLE_EMAIL = 'TOGGLE_EMAIL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const emails = (state = [], action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
        case ARCHIVE_EMAIL:
            return Object.assign({}, state, {
                emails: [
                    {...state.emails},
                    {
                        text:action.text,
                        selected: false
                    }
                ]
            })
            case TOGGLE_EMAIL:
            return Object.assign({}, state, {
                emails: state.emails.map((email, index) => {
                    if(index === action.index) {
                        return Object.assign({}, email, {selected: !email.selected
                        })
                    }
                    return email
                })
            })
            default:
                return state
    }
}

export default emails