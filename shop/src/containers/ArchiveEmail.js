import React from "react";
import { connect } from "react-redux";
import { archiveEmail } from "../actions";

const ArchiveEmail = ({ dispatch }) => {
  let input;

  return (
    <div id="div">
        <div id="div1"></div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return '';
          }

          dispatch(archiveEmail(input.value));

          var newDiv = document.createElement("h5");

          var newContent = document.createTextNode(input.value);

          newDiv.appendChild(newContent);

          var currentDiv = document.getElementById("div3");
          document.body.insertBefore(newDiv, currentDiv);

          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button class="archive" type="submit">Archive Email</button>
      </form>
     
    </div>
  );
};

export default connect()(ArchiveEmail);
