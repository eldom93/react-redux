import React from 'react'
import PropTypes from 'prop-types'
import Mail from './Mail'
const MailList = ({mails, onMailClick }) => (

<ul id="mail-list" className="col">
    {mails.map((mail, index) => (
        <Mail key={index} {...mail} onClick={() => onMailClick(index)}/>
 ))} </ul>

)

MailList.propTypes = {
    mails: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onMailClick: PropTypes.func.isRequired
  }
  
export default MailList;
