import React, { Component } from 'react'
import { connect } from 'react-redux'


class ComposeMail extends Component {
  handleClick = () => {
    this.props.composeMail(this.props.emails, true, this.props.text)
  }
  render(){
    console.log(this.props);
    const compose = this.props.emails ? (
      <span onClick={this.handleClick}>+
      </span> 
    ) : (   <span className="compose-mail" onClick={this.handleClick}>+
    </span> )
    
    return(
    <div>
      { compose }
      </div>
    )
  }
}

const mapStateToProps = (state, action) => {
  return {
    composeMail: () => { return { emails: state.emails, sent: action.sent} }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    composeMail: (emails, sent, text) => { dispatch({type: 'COMPOSE_MAIL', emails: emails, sent: sent, text:text }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMail);
