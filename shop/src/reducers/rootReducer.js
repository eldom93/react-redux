const initialState = {
    emails: [],
    sent: false,
    text: ''
   
}

const rootReducer = (state = initialState, action) => {

    if(action.type === 'COMPOSE_MAIL'){
        return {
            ...state, 
            emails: [...state.emails],
            sent: action.sent,
            text: [...state.text]
        }
    }
    if(action.type === 'SEND_MAIL'){
        return {
            ...state, 
            emails: [...state.emails, {sent: false}],
            sent: action.sent,
            text: [...state.text]
        }
    }

}

export default rootReducer;