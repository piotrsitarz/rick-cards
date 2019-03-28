import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RickAndMortyCharactersCards from "../containers/RickAndMortyCharactersCards";
import NotFoundPage from "../containers/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={RickAndMortyCharactersCards} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
