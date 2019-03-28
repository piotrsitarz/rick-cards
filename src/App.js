import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
