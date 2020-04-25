import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import NewPost from './pages/new-post';
import Posts from './pages/posts';
import Post from './pages/post';
import UpdatePost from './pages/update-post';
import NotFound from './pages/not-found';

import Header from './components/header';
import Footer from './components/footer';

import './App.css';
import { getPosts } from './redux/posts';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('init app dispatch actions');
    dispatch(getPosts());
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/post/new" exact>
            <NewPost />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route path="/update/:id" component={UpdatePost} />
          <Route path="/" exact>
            <Posts />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
