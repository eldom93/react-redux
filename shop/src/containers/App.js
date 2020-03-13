import React from 'react'
import { connect } from 'react-redux'
import {composeMail} from '../actions'
import Folders from '../components/Folders'
import MailList from '../components/MailList'
import Mail from '../components/Mail'
import ComposeMail from '../components/ComposeMail'
import Email from './index'
//containers for connecting redux to react and then import action then call dispatch 
//inside container and calling action with passed value

const App = ({dispatch}) => (
  <div id="app">
          <ComposeMail onClick={e => {
          e.preventDefault(); dispatch(composeMail(true))}} />
    <div className="row">

     {console.log(dispatch(composeMail(true)))}
      <Folders />
      <MailList />
      <Mail />
    </div>
  </div>
)

export default connect()(App);
