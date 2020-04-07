import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./containers/store/reducer";

/**
 * createStore() -> takes a reducer as the input!
 * we're creating a store successfully with our own reducer
 */
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
