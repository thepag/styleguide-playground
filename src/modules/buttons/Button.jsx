import React, { PropTypes } from 'react';

const Button = props => (
  <button
    className={`button${props.disabled ? ' is-disabled' : ''}`}
    onClick={!props.disabled ? props.onClick : null}
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
