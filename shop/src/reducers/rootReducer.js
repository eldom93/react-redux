const initialState = {
    emails: [],
    sent: false
}

const rootReducer = (state = initialState, action) => {

    if(action.type === 'COMPOSE_MAIL'){
        return {
            ...state, 
            emails: [...state.emails, action.sent]
        }
    }

}

export default rootReducer;