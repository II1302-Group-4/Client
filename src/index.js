import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

//Firebase
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/firebaseConfig"

const rrfConfig = {
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

if (window.Cypress) {
  window.store = store
}