import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import PostList from './PostList.jsx';

const Body = (props) => (
  <Switch>
    <Route exact path='/' component={PostList} />
    { /* <Route exact path='/post/:id' component={Post} />
    <Route exact path='/add_post' component={AddPost} />
    <Route exact path='/edit_post/:id' component={EditPost} /> */ }
  </Switch>
);

export default Body;