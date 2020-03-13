import React from "react";

class Email extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggleNewMail:true
        }
        this.composeNewMail = this.composeNewMail.bind(this);
    }

    composeNewMail() {
        this.setState({
            toggleNewMail: !this.state.toggleNewMail,
          });
     
    }
  render() {
    return (
      <ul>
        <li className="compose"style={{ display: this.state.toggleNewMail ? 'block' : 'none'}}>
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
export default Email;
