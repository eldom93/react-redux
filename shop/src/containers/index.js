import React from "react";
import { connect } from 'react-redux'

class Email extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        <li className="compose" style={{ display: this.state.toggleNewMail ? 'block' : 'none'}}>
            <button onClick={this.composeNewMail}>Send</button><br/><br/>
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
            <input className="input-body" type="text"></input>
            <br/>   <br/>
            </li>
            <li>{this.state.toggleNewMail}</li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emails: state.emails, sent
  }
}
export default connect(mapStateToProps)(Email);
