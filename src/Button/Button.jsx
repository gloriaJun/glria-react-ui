import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
// import styles from './Button.scss';

// const cx = classNames.bind(styles);

const propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

const defaultProps = {
  type: 'text',
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      type,
      disabled,
      icon,
    } = this.props;
    // const {
    //   isFocus,
    //   isError,
    // } = this.state;

    return (
      <button
        disabled={disabled}
      >
        { type }
        { icon }
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
