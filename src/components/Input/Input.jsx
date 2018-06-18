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
  icon: PropTypes.string,
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
      icon,
    } = this.props;
    const {
      value,
    } = this.state;

    const iconEl = icon ? <i className="material-icons prefix">{icon}</i> : '';
    const labelEl = label ? <label htmlFor={id}>{label}</label> : '';

    return (
      <div className="gl-input">
        { iconEl }
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
        { labelEl }
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
