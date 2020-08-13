import React from 'react';

import { Switch, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import TestsPage from './pages/TestsPage';
import ResultPage from './pages/ResultPage';
import TemporaryPage from './pages/TemporaryPage';

import Root from './styles/root';

export default function App() {
  return (
    <Root>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tests" component={TestsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/temporary" component={TemporaryPage} />
      </Switch>
    </Root>
  );
}
