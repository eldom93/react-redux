import { connect } from 'react-redux'
import { toggleEmail } from '../actions'
import EmailInboxList from '../components/EmailInboxList'
import { VisibilityFilter } from '../actions'

const getVisibleEmails = (emails, filter) => {
    switch(filter) {
        case VisibilityFilter.SHOW_ALL:
            return emails
        case VisibilityFilter.SHOW_ARCHIVED:
            return emails
        case VisibilityFilter.SHOW_ACTIVE:
            return emails.filter(t => !t.selected)
        default:
           return ''
    }
}

const mapStateToProps = state => ({
    emails: getVisibleEmails(state.emails, state.VisibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleEmail: id => dispatch(toggleEmail(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailInboxList)