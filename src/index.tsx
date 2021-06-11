import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import '@/styles/index.scss';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Router />, document.querySelector('#root'));
