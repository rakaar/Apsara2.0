import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import Components from 'views/Components/Components.js';
import Navbar from 'views/Components/Navbar.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import Footer from 'components/Footer/OldFooter.js';
import Archive from 'views/Archive/Archive.js';
import Team from 'views/Team/Team.js';
import Stories from 'views/Stories/Stories.js';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route path='/' component={Navbar} />
      <Route path='/archive' component={Archive} />
      <Route path='/team' component={Team} />
      <Route path='/stories' component={Stories} />
      <Route exact path='/' component={Components} />
      <Route path='/' component={Footer} />
    </div>
  </Router>,
  document.getElementById('root')
);
