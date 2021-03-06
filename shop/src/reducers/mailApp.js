import { COMPOSE_MAIL, SET_VISIBILITY_FILTER } from "../actions"
//import { COMPOSE_MAIL, VisibilityFilter, SET_VISIBILITY_FILTER } from "../actions"
//let initialState =  {type: COMPOSE_MAIL, compose:false};


const mailApp = (state = [], action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case COMPOSE_MAIL:
            return Object.assign({}, state, {
                mails: [{
                    index: 5,
                    compose: true
                }]
            })
            default:
                return state
    }
}

export default mailApp