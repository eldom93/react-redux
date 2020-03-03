import React from 'react'
import Menu from './Menu'
import ArchiveEmail from '../containers/ArchiveEmail'
import VisibleEmailList from '../containers/VisibleEmailList' 

const App = () => (
    <div className="App">
       <h1>Emails</h1>
      <VisibleEmailList/>
      <ArchiveEmail/>
      <Menu />
    

    </div>
  )

export default App;
