import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';
import './index.css';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>
);