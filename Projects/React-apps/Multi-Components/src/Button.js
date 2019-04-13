import React, { Component } from 'react';
 
 

 

  export class ButtonCounter extends Component {

/*
  Function binding
  With React.createClass, React autobinds all functions to   
  this. So the this keyword is bound to your component’s 
  instance automatically:
  onChange={this.handleChange}

  With  ES6 class, with REcat.Component, React no longer autobinds.
 1. One way to resolve this is to call bind in render:
  onChange={this.handleChange.bind(this)}

  There are performance implications since the function is reallocated on every render.

  When experiencing performance issues, avoid using bind or arrow functions in render.


  2. Use Arrow Function in Render
  this context by using an arrow function in render:

   onChange={e => this.handleChange(e)}

  render() {
  return(<MyInput onChange={(e)=> this.handleOnChange(e) }/>)
   }
We have created new anonymous function, which automatically bind this, that’s why we don’t need to use .bind() method. 
We have still the same methods in class, and new arrow functions as wrappers in callbacks properties.

  This has the same potential performance impact as above

  Arrow function as method
Instead of standard method notation
handleChange(e) {...}

use arrow function expression.:

handleChange = (e) => {...}


  3.Bind in Constructor
One way to avoid binding in render is to bind in the constructor  

constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}
*/


  constructor(props) {
    super(props);
    this.props = props; 
//Function binding defined inside constructor  

   // this.handleClick= this.handleClick.bind(this);
  console.log("ButtonCounter Handle constructor");

   
  }


  handleClick(){
    console.log("ButtonCounter Handle Cliick with "+this.props.incrementValue);
 
    //if(this.props.incrementValue > 10)
    //throw ({'reason':'Child Not Happy'});

    this.props.onClickFunction(this.props.incrementValue)
  }

//function Binding inside render method
   render() {
     
    //if(this.props.incrementValue > 3)
    //throw ({'reason':'Child Not Happy in Rendering'});

     return(<button onClick={(e)=> this.handleClick(e) }>
         +{this.props.incrementValue}
      </button>)
   }
 }

 
 
 
