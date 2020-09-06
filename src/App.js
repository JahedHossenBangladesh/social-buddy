import React from 'react';

import './App.css';

import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import PostDetail from './component/PostDetail/PostDetail';
import Comment from './component/Comment/Comment';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/post/:id">
      <PostDetail/>
      
    </Route>
    <Route path="/comment/:commentId">
      <Comment></Comment>
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="*">
<NotFound/>
    </Route>
  </Switch>
  </Router>
  );
}

export default App;
