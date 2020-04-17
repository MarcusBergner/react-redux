import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./containers/store/reducers/counterReducer";
import resultReducer from "./containers/store/reducers/result";

const rootReducer = combineReducers({
  globalCounter: counterReducer,
  globalResult: resultReducer,
});

/**
 * this nested function is a example for a middleware.
 * inside that inner function which receives the action,
 * we can also access a store and this next function and the action itself!
 *  --> for execute some code between the action & the reducer.....
 * @param {*} store
 */
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

/**
 * @composeEnhancers connect our browser extension to the store running in our JavaScript code!
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * createStore() -> takes a reducer as the input!
 * we're creating a store successfully with our own reducer
 * @NOTE: Redux is standalone, it is not connected to react,
 *  You need to install it with: npm install --save react-redux
 * @Provider is a helper component which allows to kind of inject our store into the react components.
 * @combineReducers is a function which takes a javaScript object mapping all our reducers to different
 * slices of our state as input and merges everything into one state and one reducer!
 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
