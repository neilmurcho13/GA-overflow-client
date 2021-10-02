import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import Navbar from './components/common/Navbar.js'

import CreateNewBlog from './components/blogs/CreateNewBlog.js'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/new-blog' component={CreateNewBlog} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
