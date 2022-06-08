import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./config/store";
import Router from "./routes/routes";
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
