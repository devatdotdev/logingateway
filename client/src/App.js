import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './components/layout/Page';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './bootstrap.min.css';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Page />
      </Router>
    </Provider>
  );
};

export default App;
