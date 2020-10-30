import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import translations from './translations'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'

const defaultLocale = 'fr'
const reducers = combineReducers(Object.assign({}, { Intl }))
const store = createStore(reducers, { Intl: { locale: defaultLocale }})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider translations={translations}>
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
