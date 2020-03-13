import React from 'react'
import PropTypes from 'prop-types'

const ComposeMail = ({ onClick, compose }) => (
  <li className="compose-mail"
    onClick={onClick}
    style={{display: compose ? 'none' : 'block'
    }}>+
  </li>
)

ComposeMail.propTypes = {
  onClick: PropTypes.func.isRequired,
  compose: PropTypes.bool.isRequired
}


export default ComposeMail;
