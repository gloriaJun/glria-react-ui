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
  readonly: PropTypes.bool,
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
      readonly,
      icon,
      helperText,
    } = this.props;
    const {
      value,
      isFocus,
    } = this.state;

    return (
      <div className={cx('gr-text-input', {
        focus: isFocus,
        'has-icon': icon && icon !== '',
      })}
      >
        { label && (
          <label>{label}</label>
        )}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        { icon && (
          <span className="icon">
            <i className="material-icons">{icon}</i>
          </span>
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
