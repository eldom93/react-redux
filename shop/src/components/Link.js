import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
    onClick={onClick}
disabled={active}>{children}</button>
  
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link