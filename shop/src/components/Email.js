import React from 'react'
import PropTypes from 'prop-types'

const Email = ({onClick, selected, text}) => (
    <li onClick={onClick}
    style={{display: selected ? true : false}}>  
     <span style={{backgroundColor:"red"}} width="100px" height="100px"></span> {text}
    </li>
       
)

Email.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Email