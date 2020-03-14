import React from "react";
import { connect } from 'react-redux'
let text;
class Email extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    text = e.target.value;
    this.props.sendMail(text, true);
  }
  handleChange = (e) => {
    e.preventDefault();
    text = e.target.value;
    console.log(text);

  }
  render() {
   
    this.ref = React.createRef();
 
    this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 
    return (
        <form onSubmit={this.handleSubmit} className="compose" style={{ display: this.props.emails.sent ? 'block' : 'none'}}>
            <button type="Submit">Send</button><br/><br/>
            <label>To:</label>
            <br/>   <br/>
            <input className="input" type="text"></input>
            <br/>   <br/>
            <label>CC:</label>
            <br/>   <br/>
            <input className="input" type="text"></input>
            <br/>   <br/>
            <label>BCC:</label>
            <br/>   <br/>
            <input className="input" type="text"></input>
            <br/>   <br/>
            <label>Subject:</label>
            <br/>   <br/>
            <input className="input" type="text"></input>
            <br/>   <br/>
            <label>Body:</label>
            <br/>   <br/>
            <input onChange={e => this.handleChange(e)} ref={(input) => this.input = input} className="input-body" type="text"></input>
            <br/>   <br/>
            </form>
    );
  }
}

const mapStateToProps = (state, sent) => {
  return {
    emails: () => state.emails, sent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMail: (text, sent) => { dispatch({type: 'SEND_MAIL', text: text, sent: sent }) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Email);
