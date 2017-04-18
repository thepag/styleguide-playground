/* eslint-disable global-require */
/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
// import { HashRouter as Router, Route } from 'react-router-dom'; // Clash with Catalog 2.5
import { AppContainer } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';
import { configureRoutes } from 'catalog';
import i18n from './i18n';

const pages = {
  title: 'Styleguide Playground',
  basePath: '/',
  pages: [
    { component: require('./docs/intro.md'), path: '/', title: 'Introduction' },
    { title: 'Components',
      pages: [
        { component: require('./docs/components/button'), path: '/components/button', title: 'Buttons' },
        { component: require('./docs/components/message'), path: '/components/message', title: 'Message' },
        { component: require('./docs/components/lang'), path: '/components/lang', title: 'Lang' },
      ],
    },
  ],
};

const routes = configureRoutes(pages);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <I18nextProvider i18n={i18n}>
        <Router routes={routes} history={hashHistory} />
      </I18nextProvider>
    </AppContainer>,
    document.getElementById('styleguide'),
  );
};

render();

if (module.hot) {
  module.hot.accept();
}
