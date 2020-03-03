import React from 'react'
import Menu from './Menu'
import ArchiveEmail from '../containers/ArchiveEmail'
import VisibleEmailList from '../containers/VisibleEmailList' 

const App = () => (
    <div className="App">
      <VisibleEmailList/>
      <ArchiveEmail/>
      <Menu />
     <h1>Inbox</h1>

    </div>
  )

export default App;
