import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

import { Button, Lang, Message } from './modules';

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
    if (message) {
      return (
        <div>
          <h1>{t('app name')}</h1>
          <Lang />
          <Button
            name={t('button text')}
            onClick={() => { this.onClick(); }}
          />
          <Message
            title={message}
            onClick={() => { this.setState({ message: '' }); }}
          />
        </div>
      );
    }
    return (
      <div>
        <h1>Styleguide Playground</h1>
        <Lang />
        <Button
          name={t('button text')}
          onClick={() => { this.onClick(); }}
        />
      </div>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common', { wait: true })(App);
