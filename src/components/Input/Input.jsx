import React from  'react'
import classNames from 'classnames/bind'
import styles from './Input.scss'
const cx = classNames.bind(styles);

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focus: false
    };
  }

  handleFocus = (e) => {
    this.setState({
      focus: true
    });
  }

  handleBlur = (e) => {
    this.setState({
      focus: false
    });
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render () {
    const {
      type,
      label
    } = this.props;
    const {
      value,
      focus
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
          className={cx({
            active: (value === '' &&  focus || value !== '')
          })}
        >{label}</label>
      </div>
    )
  }
}
