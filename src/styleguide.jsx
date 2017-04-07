/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
