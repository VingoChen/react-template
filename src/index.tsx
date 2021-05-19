import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'Src/styles/index.scss';
import { store } from './models';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App name='aaa' />
  </Provider>,
  document.querySelector('#root'),
);
