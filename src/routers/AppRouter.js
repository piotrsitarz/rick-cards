import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import MainPage from "../pages/MainPage/MainPage";
import CharactersCardsPage from "../pages/CharactersCardsPage/CharactersCardsPage";
import LocationsCardsPage from "../pages/LocationsCardsPage/LocationsCardsPage";
import EpisodesCardsPage from "../pages/EpisodesCardsPage/EpisodesCardsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/characters" component={CharactersCardsPage} />
      <Route exact path="/locations" component={LocationsCardsPage} />
      <Route exact path="/episodes" component={EpisodesCardsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
