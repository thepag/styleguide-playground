import React, { PropTypes } from 'react';

import { Button } from '..';

const Message = props => (
  <div>
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
