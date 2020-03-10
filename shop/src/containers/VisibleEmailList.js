import { connect } from 'react-redux'
import { composeMail } from '../actions'
import MailList from '../components/MailList'
import { VisibilityFilter } from '../actions'

const getVisibleEmails = (mails, filter) => {
    switch(filter) {
        case VisibilityFilter.SHOW_INBOX:
            return mails
        case VisibilityFilter.SHOW_SENT_MAILS:
            return mails.filter(t => !t.sent)
        case VisibilityFilter.SHOW_DRAFTS:
            return state
        case VisibilityFilter.SHOW_TRASH:
            return mails.filter(t => t.trash)
        default:
           return ''
    }
}

const mapStateToProps = state => ({
    mails: getVisibleEmails(state.mails, state.VisibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    composeMail: compose => dispatch(composeMail(compose))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MailList)