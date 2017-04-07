import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';

import { Button } from '..';
import i18n from '../../i18n';

const Lang = props => (
  <div>
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
);

Lang.defaultProps = {
  disabled: false,
};

Lang.propTypes = {
  t: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default translate('common', { wait: true })(Lang);
