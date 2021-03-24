import React, { Component } from 'react'
import ComposeMail from '../components/ComposeMail'
import Email from './index'
class App extends Component {
  render(){
    return(
      <div id="App">
        <h1>Maail</h1>
        <ComposeMail/>
        <Email/>
      </div>
    )
  }
}

export default App;






















/*import React, { Component } from 'react'

import { connect } from 'react-redux'

import { composeMail } from '../actions'
import Folders from '../components/Folders'
import MailList from '../components/MailList'
import Mail from '../components/Mail'
import ComposeMail from '../components/ComposeMail'
import Email from './index'
let res = [];
let titles = [];
let objects;
let row = []
let x;
let y;
let xx;
let yy;
let z;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  componentWillMount(){ 
    getMyData();
    async function getMyData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.text();
      objects = data.split(',');
      objects.forEach(element => {
          for(var i = 3; i < objects.length + 1; i ++){
              if(element[i] % 3 === 0){
                row.push(objects[i-3]);
                let user = objects[i-3].split('');
                console.log(user);
                user.splice(0,20);
        
                user.join('');
                console.log('hi user',user);
                x = document.createElement('SPAN');
               z = document.getElementById('checkbox');
                y = document.createTextNode('From: '+ user);
                x.appendChild(y);
                document.getElementById("my").appendChild(x);
                row.push(objects[i-1]);
                let title = objects[i-1].split('');
                title.splice(0,15);
                title.pop();
                title = title.join('');
         
                console.log('hi',title);
                xx = document.createElement('LI');
                x.insertAdjacentHTML('afterbegin', '<input id="checkbox" type="checkbox"></input>');
                yy = document.createTextNode('Subject: ' + title);
                xx.appendChild(yy);
                document.getElementById("my").appendChild(xx);
                document.getElementById("my").style.textTransform = 'capitalize';
                document.getElementById("my").style.alignItems = 'flex-start';
                document.getElementById("my").style.display = 'inline';
              return  i++;
              }
            return i++;
          }
      })
    }
  }
  render() {
    return (
      <div >
        <div className="col">
          <Folders/>
        </div>
        <div className="col">
        <ul id="my"></ul>
        </div>
        <div className="col">
        <Mail/>
        </div>
   
  
     
      </div>
    )
  }
};
*/

