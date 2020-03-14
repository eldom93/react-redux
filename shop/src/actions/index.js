import axios from 'axios'
var res = [];
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => res.push(json))


/*
 * action types
 */

export const COMPOSE_MAIL = 'COMPOSE_MAIL'
export const SAVE_TO_DRAFTS = 'SAVE_TO_DRAFTS'
export const DELETE_MAIL = 'DELETE_MAIL'
export const SEND_MAIL = 'SEND_MAIL'
export const TOGGLE_MAIL = 'TOGGLE_MAIL'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/*
 * other constants
 */
export const VisibilityFilter = {
  SHOW_INBOX: 'SHOW_INBOX',
  SHOW_SENT_MAILS: 'SHOW_SENT_MAILS',
  SHOW_DRAFTS: 'SHOW_DRAFTS',
  SHOW_TRASH:'SHOW_TRASH'
}
/*
 * action creators
 */


export const composeMail = sent => ({
    type: COMPOSE_MAIL, sent
})

export const deleteMail = id => ({
    type: DELETE_MAIL, id 
})

export const sendMail = text => ({
    type: SEND_MAIL, text 
})

export const saveToDrafts = text => ({
    type: SAVE_TO_DRAFTS, text 
})

export const toggleEmail = id => ({
    type: TOGGLE_MAIL, id 
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER, filter
})

/*
export function fetchEmails() {
    const request = axios.get('https://jsonplaceholder.typicode.com/posts');
    return (dispatch) => {
      request.then(({data}) => {
          dispatch({type: 'FETCH_EMAILS', payload: data})
      })
    }
}*/