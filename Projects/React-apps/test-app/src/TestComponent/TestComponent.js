import React, { Component } from 'react';

import '../MyComponent/MyComponent.css';


import MyComponent  from '../MyComponent/'


class TestComponent extends Component {
  


  constructor(props) {
    super(props);
    this.props = props; 
   // this.handleClick= this.handleClick.bind(this);
    
  }

handleClick(){
    console.log("TestComponent  Handle Click with "+this.props.incrementValue)
    this.props.update(this.props.incrementValue + 10)

  }



//function Binding inside render method
   render() {
     return(<div>
       <button onClick={(e)=> this.handleClick(e) }>
         +{this.props.incrementValue}
      </button><p> <MyComponent data={101}></MyComponent></p></div> )
   }
 }      
 

export default TestComponent;
