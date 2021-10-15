import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import Header from './components/common/Header.js'

import BlogShow from './components/blogs/BlogShow.js'
import BlogNew from './components/blogs/BlogNew.js'
import Search from './components/common/Search.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import Error404 from './components/common/Error404.js'
import Navbar from './components/common/Navbar.js'
import MyProfile from './components/common/myProfile.js'
import AllBlogs from './components/blogs/AllBlogs.js'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <Header onSearchChange={setSearchQuery} />
      <Navbar />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />

        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/all' component={AllBlogs} />
        <Route exact path='/blogs/new' component={BlogNew} />
        <Route exact path='/blogs/:id' component={BlogShow} />
        <Route exact path='/user/profile' component={MyProfile} />
        <Route
          exact
          path='/search'
          component={(props) => (
            <Search {...props} searchQuery={searchQuery} />
          )}
        />
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
