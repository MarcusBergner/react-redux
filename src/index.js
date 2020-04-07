import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./containers/store/reducer";

/**
 * createStore() -> takes a reducer as the input!
 * we're creating a store successfully with our own reducer
 * @NOTE: Redux is standalone, it is not connected to react. You need to install it with: npm install --save react-redux
 * @Provider is a helper component which allows to kind of inject our store into the react components.
 *
 */
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
