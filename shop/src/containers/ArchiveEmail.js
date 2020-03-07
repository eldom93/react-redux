import React from "react";
import { connect } from "react-redux";
import { archiveEmail } from "../actions";

const ArchiveEmail = ({ dispatch }) => {
  let input;

  return (
    <div id="div">
 
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return '';
          }

          dispatch(archiveEmail(input.value));
          var wrapper = document.createElement("div");
         
          var newDiv = document.createElement("li");
         
          var newInput = document.createElement("input");
          newInput.type = 'checkbox';
          var newContent = document.createTextNode(input.value);

          newDiv.appendChild(newContent);

          var currentDiv = document.getElementById("myList");
          currentDiv.insertBefore(newDiv, currentDiv.childNodes[0]);
          newDiv.insertBefore(newInput, newDiv.childNodes[0]);
          //wrapper.c= document.getElementsByTagName("h5");
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button class="archive" type="submit">Archive Email</button>
      </form>
      <ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
</ul>
    </div>
  );
};

export default connect()(ArchiveEmail);
