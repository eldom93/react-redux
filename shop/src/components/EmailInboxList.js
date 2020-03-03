import React from 'react'
import PropTypes from 'prop-types'
import Email from './Email'
const EmailInboxList = ({emails, toggleEmail}) => (
    <ul>
        {React.Children.map(email => (
            <Email key={email.id} {...email} onClick={toggleEmail(email.id)} />
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