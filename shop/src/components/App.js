import React from 'react'
import Menu from './Menu'
import ArchiveEmail from '../containers/ArchiveEmail'
import VisibleEmailList from '../containers/VisibleEmailList' 


const App = () => (
    <div id="app">
       <h1>Emails</h1>
      <VisibleEmailList/>
      <ArchiveEmail/>
      <Menu />

{console.log({...ArchiveEmail})}
    </div>
  )

export default App;
