import React from "react";
import PropTypes from "prop-types";
const Mail = ({ onClick, completed, text }) => (
  <li
    className="col"
    id="mail"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);
Mail.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Mail;
