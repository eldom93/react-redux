import React from 'react'
import { connect } from 'react-redux'
import { archiveEmail } from '../actions'

const ArchiveEmail = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
            if(!input.value.trim()){
            return
        }
        dispatch(archiveEmail(input.value))
        input.value = ''}}>
<input ref={node => (input = node)} />

<button type="submit" >Archive Email</button>
        </form>
           
        </div>
    )
}

export default ArchiveEmail