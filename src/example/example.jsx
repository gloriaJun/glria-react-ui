import React from 'react';
import GrTextInput from '../components/index';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
    });
  }

  handleChange = (event, inputValue) => {
    this.setState({ [event.target.name]: inputValue });
  }

  render() {
    const {
      name,
      email,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <GrTextInput
            label="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <GrTextInput
            label="E-mail"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <p>Input Data</p>
        <div>{ JSON.stringify(this.state) }</div>
      </div>
    );
  }
}
