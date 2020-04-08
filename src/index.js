import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./containers/store/reducers/counter";
import resultReducer from "./containers/store/reducers/result";

const rootReducer = combineReducers({
  globalCounter: counterReducer,
  globalResult: resultReducer,
});
/**
 * createStore() -> takes a reducer as the input!
 * we're creating a store successfully with our own reducer
 * @NOTE: Redux is standalone, it is not connected to react,
 *  You need to install it with: npm install --save react-redux
 * @Provider is a helper component which allows to kind of inject our store into the react components.
 * @combineReducers is a function which takes a javaScript object mapping all our reducers to different
 * slices of our state as input and merges everything into one state and one reducer!
 */
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
