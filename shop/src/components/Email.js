import React from 'react'
import PropTypes from 'prop0-types'

const Email = ({onClick, selected, text}) => (
    <li onClick={onClick}
    style={{display: selected ? 'none' : 'block'}}>
        {text}
    </li>
       
)

Email.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Email