import React from 'react';
import PropTypes from 'prop-types';

require('./Button.scss');

const Button = props => (
  <button
    className={`button${props.disabled ? ' disabled' : ''}`}
    onClick={!props.disabled ? props.onClick : null}
    disabled={props.disabled}
  >
    {props.name}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
