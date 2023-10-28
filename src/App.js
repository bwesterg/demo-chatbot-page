import { Component } from 'react';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   this.state ={
  //   }
  // }
  // old syntax^^^, and unnecessary w/ newer react

  state = {
    count: 0,
    students: []
  }
  //state is key value pair /object
  //state is data maintained by component
  //state is only changed via the function this.setState, b/c using mutations cause UI errors (e.g., state = blah blah blah)
  //react doesn't see mutations as a state change (e.g., push or pop).  

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        {/* do NOT invoke functions that setState inside your render. For example, above, don't use {this.increment()} */}
      </div>
    );
  }
}

export default App;
