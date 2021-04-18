import React, { Component } from 'react';
import Counter from './Counter.js';

class Application extends Component{

  constructor(props){
    super(props);

    this.state = {
        counter: 0,
        // isCounterHidden: true
        isCounterHidden:{
          isShow: true
        }
      }

      this.toggleCounter = this.toggleCounter.bind(this);
      this.incrementCounter = this.incrementCounter.bind(this);
  }
  
  toggleCounter() {
    console.log(this.state.isCounterHidden)
    this.setState({
        ...this.state,
      isCounterHidden:{...this.state.isCounterHidden, isShow: !this.state.isCounterHidden.isShow}
    });
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    
    let style = {
      marginTop: '40px',
      marginBottom: '0px'
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">

            <p style={style}>Make sure to open Developer Tools Console before you click anything.</p>

            <div className="btn-group btn-group-lg" role="group" aria-label="..." style={style}>
              <button type="button" className="btn btn-default" onClick={this.toggleCounter}>{this.state.isCounterHidden.isShow ? 'Show' : 'Hide'}</button>
              <button type="button" className="btn btn-success" onClick={this.incrementCounter}>Increment</button>
            </div>

            {this.state.isCounterHidden.isShow ? null : <Counter value={this.state.counter} />}

          </div>
        </div>
      </div>
    );
  }
}

export default Application;