import React, { Component } from 'react';

class Counter extends Component{
  constructor(props){
    super(props)
  }

  getDefaultProps() {
    console.log('getDefaultProps');

    return {};
  }

  getInitialState() {
    console.log('getInitialState');

    return {};
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');

    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');

    return (
      <h1 className="text-muted">Counter: {this.props.value}</h1>
    );
  }
}

export default Counter;