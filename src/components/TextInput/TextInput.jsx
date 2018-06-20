import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
// import styles from './TextInput.scss';
import './TextInput.scss';

// const cx = classNames.bind(styles);

const propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  type: 'text',
};

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const inputValue = event.target.value;

    this.setState({ value: inputValue });

    if (onChange) onChange(inputValue, event);
  }

  render() {
    const {
      type,
      label,
      placeholder,
      disabled,
      icon,
      helperText,
    } = this.props;
    const {
      value,
    } = this.state;

    return (
      <div className="gr-text-input">
        { icon && (
          <i className="material-icons prefix">{icon}</i>
        )}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        { label && (
          <label>{label}</label>
        )}
        { helperText && (
          <span className="helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
