import React from 'react'
import PropTypes from 'prop-types'
//import Email from './Email'
const EmailInboxList = ({emails}) => (
    <ul>
       <li> {emails}</li>
    </ul>
       
)

EmailInboxList.propTypes = {
   emails: PropTypes.arrayOf({})
}

export default EmailInboxList