import React from 'react';
import GrTextInput from '../components/index';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event, inputValue) => {
    this.setState({ value: inputValue });
  }

  render() {
    const {
      value,
    } = this.state;

    return (
      <div>
        <GrTextInput
          label="Text"
          value={value}
          onChange={this.handleChange}
        />
        <p>Input Value : {value}</p>
      </div>
    );
  }
}
