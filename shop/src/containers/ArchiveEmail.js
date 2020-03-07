import React from 'react'
import { connect } from 'react-redux'
import { archiveEmail } from '../actions'

const ArchiveEmail = ({ dispatch }) => {
    let input
    let temp1
    return (
        <div id="div">
            <form onSubmit={e => {
                e.preventDefault();
            if(!input.value.trim()){
            return 
        }
       // temp1 += dispatch(archiveEmail(input.value));
       // document.getElementById('li').innerHTML = temp1[temp1.length -1];
      //  {console.log(temp1[temp1.length -1])}
       
     dispatch(archiveEmail(input.value));
     {console.log(temp1=input.value)}
     temp1=input.value;
   

     var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode(input.value); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 

     
    
   input.value = ''}}>
<button type="submit" >Archive Email</button>

    
<input ref={node => (input = node)} />
      
    </form></div>
    )
}

export default connect()(ArchiveEmail)