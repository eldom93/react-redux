import React from 'react'
import PropTypes from 'prop-types'
//import Email from './Email'
const EmailInboxList = ({emails}) => (
   <section>{emails}</section>
    
)

EmailInboxList.propTypes = {
   emails: PropTypes.arrayOf({})
}

export default EmailInboxList