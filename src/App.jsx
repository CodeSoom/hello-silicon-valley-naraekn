import React from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import TestsPage from './pages/TestsPage';
import QuestionsPage from './pages/QuestionsPage';

export default function App() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <div>
      <Header
        handleClickLink={handleClickLink}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tests" component={TestsPage} />
        <Route path="/tests/:id" component={QuestionsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}
