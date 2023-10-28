import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './App.css';

import React from 'react'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}



// class App extends Component {

  // constructor(props) {
  //   this.state ={
  //   }
  // }
  // old syntax^^^, and unnecessary w/ newer react

//   state = {
//     count: 0,
//     students: []
//   }
//   //state is key value pair /object
//   //state is data maintained by component
//   //state is only changed via the function this.setState, b/c using mutations cause UI errors (e.g., state = blah blah blah)
//   //react doesn't see mutations as a state change (e.g., push or pop).  

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1>Counter App</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>+</button>
//         {/* do NOT invoke functions that setState inside your render. For example, above, don't use {this.increment()} */}
//       </div>
//     );
//   }
// }

// export default App;
