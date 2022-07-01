import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./config/store";
import Router from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
        <ToastContainer autoClose={2000} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
