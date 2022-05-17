import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import './common/index.css';

import {AppPage} from './components/app-page';
import {store} from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppPage/>
    </Provider>
  </React.StrictMode>
);

