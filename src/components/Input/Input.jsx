import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.scss';

const cx = classNames.bind(styles);

const propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  label: '',
};

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
      type,
      label,
    } = this.props;
    const {
      value,
      focus,
    } = this.state;

    return (
      <div className="gl-input">
        <input
          type={type}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <label
          htmlFor="{}"
          className={cx({
            active: (value === '' && focus) || value !== '',
          })}
        >{label}
        </label>
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
