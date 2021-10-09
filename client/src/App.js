import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import Navbar from './components/common/Navbar.js'

import BlogShow from './components/blogs/BlogShow.js'
import BlogNew from './components/blogs/BlogNew.js'
import Search from './components/common/Search.js'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  console.log('from app ', searchQuery)

  return (
    <BrowserRouter>
      <Navbar onSearchChange={setSearchQuery} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/new' component={BlogNew} />
        <Route exact path='/blogs/:id' component={BlogShow} />
        <Route
          exact
          path='/search'
          component={(props) => (
            <Search {...props} searchQuery={searchQuery} />
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
