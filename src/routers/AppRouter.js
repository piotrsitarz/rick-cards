import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import CharactersCardsPage from "../pages/CharactersCardsPage/CharactersCardsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={CharactersCardsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
