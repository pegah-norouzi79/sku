import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assest/css/index.css';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import '../node_modules/react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

