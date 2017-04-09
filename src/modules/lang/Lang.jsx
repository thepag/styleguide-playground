import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { Button } from '..';
import i18n from '../../i18n';

require('./Lang.scss');

const Lang = props => (
  <div className="lang-selection">
    <div className="lang-title">
      Select a language:
    </div>
    <div className="lang-buttons">
      <Button
        name={props.t('english')}
        onClick={() => { i18n.changeLanguage('en'); }}
        disabled={props.disabled}
      />
      <Button
        name={props.t('german')}
        onClick={() => { i18n.changeLanguage('de'); }}
        disabled={props.disabled}
      />
    </div>
  </div>
);

Lang.defaultProps = {
  disabled: false,
};

Lang.propTypes = {
  t: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default translate('common', { wait: true })(Lang);
