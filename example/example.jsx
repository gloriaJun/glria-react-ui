import React from 'react';
import GrTextInput from '../src/index';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '자산',
      category: '저축-예금',
      name: '농협',
      startDate: '',
      endDate: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      type: '',
      category: '',
      name: '',
      startDate: '',
      endDate: '',
    });
  }

  handleChange = (event, inputValue) => {
    this.setState({ [event.target.name]: inputValue });
  }

  render() {
    return (
      <div Style="padding-top: .5rem;">
        <form onSubmit={this.handleSubmit}>
          <GrTextInput
            label="Category"
            name="category"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <GrTextInput
            label="Category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <GrTextInput
            label="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <GrTextInput
            label="start date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleChange}
          />
          <GrTextInput
            label="end date"
            name="endDate"
            value={this.state.endDate}
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
