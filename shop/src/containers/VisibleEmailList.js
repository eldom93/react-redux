import { connect } from 'react-redux'
import { toggleEmail } from '../actions'
import EmailInboxList from '../components/EmailInboxList'
import { VisibilityFilters } from '../actions'

const getVisibleEmails = (emails, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return emails
        case VisibilityFilters.SHOW_ARCHIVED:
            return emails.filter(t => t.selected)
        case VisibilityFilters.SHOW_ACTIVE:
            return emails.filter(t => !t.selected)
        default:
            throw new Error('Error:' + filter)
    }
}

const mapStateToProps = state => ({
    emails: getVisibleEmails(state.emails, state.VisibilityFilters)
})

const mapDispatchToProps = dispatch => ({
    toggleEmail: id => dispatch(toggleEmail(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailInboxList)