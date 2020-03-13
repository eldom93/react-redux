import React from 'react'
import PropTypes from 'prop-types'
import Mail from './Mail'
const MailList = ({text, onClick }) => (
        <Mail key={5} {...text} onClick={() => onClick(5)}/>
)

MailList.propTypes = {
    mails: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired
  }
  
export default MailList;
