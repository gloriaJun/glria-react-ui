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
};

const defaultProps = {
  id: '',
  type: 'text',
  label: '',
  value: '',
  placeholder: '',
};

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      focus: false,
    };
  }

  handleFocus = () => {
    this.setState({ focus: true });
  }

  handleBlur = () => {
    this.setState({ focus: false });
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
    } = this.props;
    const {
      value,
      focus,
    } = this.state;

    return (
      <div className="gl-input">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <label
          htmlFor={id}
          className={cx({
            active: (value === '' && focus) || value !== '' || placeholder !== '',
          })}
        >{label}
        </label>
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
