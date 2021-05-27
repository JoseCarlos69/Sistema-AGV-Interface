// React.
import React from 'react';
import ReactDOM from 'react-dom';
// Redux.
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
// Router.
import { BrowserRouter } from 'react-router-dom';
// Aplicação.
import App from './App';

// React.
ReactDOM.render(
  <React.StrictMode>
    {/* Redux. */}
    <Provider store={store}>
      {/* Router. */}
      <BrowserRouter>
        {/* Aplicação. */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
