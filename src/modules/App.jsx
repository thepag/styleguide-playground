import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { Button, Lang, Message } from '.';

require('./App.scss');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  onClick() {
    const { t } = this.props;
    this.setState({
      message: t('button message'),
    });
  }

  render() {
    const { t } = this.props;
    const { message } = this.state;
    const messages = () => {
      if (!message) return null;
      return (
        <Message
          title={message}
          onClick={() => { this.setState({ message: '' }); }}
        />
      );
    };
    return (
      <div className="app-view">
        <div className="app-title">{t('app name')}</div>
        <Lang />
        <Button
          name={t('button text')}
          onClick={() => { this.onClick(); }}
        />
        {messages()}
      </div>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common', { wait: true })(App);
