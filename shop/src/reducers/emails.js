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
            default:
                return state
    }
}

export default emails