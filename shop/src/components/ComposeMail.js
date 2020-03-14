import React, { Component } from 'react'
//import { composeMail } from '../actions/index'
import { connect } from 'react-redux'


class ComposeMail extends Component {
  handleClick = () => {
    this.props.composeMail(true)
  }
  render(){
    console.log(this.props);
    return(
    <li className="compose-mail" onClick={this.handleClick}>+
    </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    composeMail: (sent) => { dispatch({type: 'COMPOSE_MAIL', sent: sent }) }
  }
}

export default connect(null, mapDispatchToProps)(ComposeMail);
