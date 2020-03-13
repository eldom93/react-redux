import React from 'react'
import PropTypes from 'prop-types'
const Mail = ({onClick, text}) => (
    <li className="col" id="mail"
      onClick={onClick}>
    {text}
  </li>

)
Mail.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }
  
export default Mail;
