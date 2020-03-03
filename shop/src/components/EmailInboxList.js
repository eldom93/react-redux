import React from 'react'
import PropTypes from 'prop-types'
import Email from './Email'
const EmailInboxList = ({emails, toggleEmail}) => (
    <ul>
        {React.Children.map(emails => (
            <Email key={emails.id} {...emails} onClick={toggleEmail(emails.id)} />
        ))}
    </ul>
       
)

EmailInboxList.propTypes = {
   emails: PropTypes.arrayOf(
       PropTypes.shape({
           id: PropTypes.number.isRequired,
           selected: PropTypes.bool.isRequired,
           text: PropTypes.string.isRequired
       }).isRequired
   ).isRequired,
   toggleEmail: PropTypes.func.isRequired
}

export default EmailInboxList