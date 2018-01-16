import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './app.container';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './Store/index';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={Store}>
    <AppContainer />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();