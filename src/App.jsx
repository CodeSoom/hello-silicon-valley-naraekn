import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ContributorsPage from './pages/ContributorsPage';
import HomePage from './pages/HomePage';
import WhoAreYouPage from './pages/WhoAreYouPage';
import ResultPage from './pages/ResultPage';
import NotFoundPage from './pages/NotFoundPage';

import Root from './styles/root';

export default function App() {
  return (
    <Root>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contributors" component={ContributorsPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/who-are-you" component={WhoAreYouPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Root>
  );
}
