import React from 'react'
import { connect } from 'react-redux'
import {composeMail} from '../actions'
import Folders from '../components/Folders'
import MailList from '../components/MailList'
import Mail from '../components/Mail'
import ComposeMail from '../components/ComposeMail'
//containers for connecting redux to react and then import action then call dispatch 
//inside container and calling action with passed value

const App = ({dispatch}) => (

  <div id="app">
    <div className="row">
      <button onClick={e => {
          e.preventDefault();
       dispatch(composeMail(true))}}>aaaaaaa</button>
      <ComposeMail onClick={e => {
          e.preventDefault();  {console.log(dispatch(composeMail()))} dispatch(composeMail(true))}} />
     
      <Folders />
      <MailList />
      <Mail />
    </div>
  </div>
)

export default connect()(App);
