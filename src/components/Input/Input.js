import React, { Component } from  'react'
// import classNames from 'classnames'
import './Input.scss'

class Input extends Component {
  state = {
    value: '',
    className: ''
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
          className={this.state.className}
        >{label}</label>
      </div>
    )
  }
}

export default Input
