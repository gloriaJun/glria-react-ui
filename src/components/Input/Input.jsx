import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

const defaultProps = {
  type: 'text',
  disabled: false,
};

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const {
      id,
      type,
      label,
      placeholder,
      disabled,
    } = this.props;
    const {
      value,
    } = this.state;

    return (
      <div className="gl-input">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <label
          htmlFor={id}
        >{label}
        </label>
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
