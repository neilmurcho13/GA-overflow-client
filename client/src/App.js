import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import random from './components/blogs/random.js';
import Home from './components/common/Home.js';
import Navbar from './components/common/Navbar.js';
import BlogNew from './components/blogs/BlogNew.js';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/random' component={random} />
        <Route exact path='/blogs/new' component={BlogNew} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
