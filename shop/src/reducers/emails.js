const emails = (state = [], action) => {
    switch (action.type) {
        case ARCHIVE_EMAIL:
            return Object.assign({}, state, {
                emails: [
                    ...state.emails,
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
                        return Object.assign({}, todo, {selected: !email.selected
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