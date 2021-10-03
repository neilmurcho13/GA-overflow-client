import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import Navbar from './components/common/Navbar.js'

import BlogShow from './components/blogs/BlogShow.js'
import CreateBlog from './components/blogs/CreateBlog.js'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/new' component={CreateBlog} />
        <Route exact path='/blogs/:id' component={BlogShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
