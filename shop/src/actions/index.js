export const archiveEmail = text => ({
    text
})

export const setVisibilityFilter = filter => ({
    filter
})

export const toggleEmail = id => ({
    id
})

export const VisibilityFilters = {
    VisibilityFilters: 'SHOW_ALL',
    emails: [
        {
            text: 'The currently selected visibility filter.',
            selected: true
        },
        {
            text: 'Youll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, but try to keep the data separate from the UI state.',
            selected: false
        }

    ]
}