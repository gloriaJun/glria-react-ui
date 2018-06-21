import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TextInput.scss';

const cx = classNames.bind(styles);

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
      isFocus: false,
    };
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const inputValue = event.target.value;

    this.setState({ value: inputValue });

    if (onChange) onChange(inputValue, event);
  }

  handleFocus = () => {
    this.setState({ isFocus: true });
  }

  handleBlur = () => {
    this.setState({ isFocus: false });
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
      isFocus,
    } = this.state;

    return (
      <div className={cx('gr-text-input', {
        'input-focus': isFocus,
      })}
      >
        { label && (
          <label>{label}</label>
        )}
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
