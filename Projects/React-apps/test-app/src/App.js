import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TestComponent/TestComponent.css';


import TestComponent  from './TestComponent/'

class App extends Component {
  constructor(props) {
     super(props);  
     console.log("App Constructor");        

   //binding for functions 
    this.incrementCounter=this.incrementCounter.bind(this);
  }

 

 incrementCounter(incrementValue){ 

   console.log("App Component incrementCounter = "+incrementValue);      
 
  }
   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start React
          </a>
        </header> 

<TestComponent incrementValue={7} update={this.incrementCounter} ></TestComponent>
      </div>
    );
  }
}

export default App;
