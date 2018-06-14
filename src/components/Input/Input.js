import React from  'react'
import classNames from 'classnames/bind'
import styles from './Input.scss'
const cx = classNames.bind(styles);

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focus: false,
      className: ''
    };
  }

  handleFocus = (e) => {
    this.setState({
      className: 'active'
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    const { type, label }= this.props

    return (
      <div className="gl-input">
        <input
          type={type}
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
        />
        <label
          className={cx({ active: true})}
        >{label}</label>
      </div>
    )
  }
}

export default Input
