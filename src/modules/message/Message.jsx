import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '..';

require('./Message.scss');

const Message = props => (
  <div className="message">
    <span>&ldquo;{props.title}&rdquo;</span>
    <Button
      name="X"
      onClick={props.onClick}
      disabled={props.disabled}
    />
  </div>
);

Message.defaultProps = {
  onClick: () => {},
  disabled: false,
};

Message.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Message;
