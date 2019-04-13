import React, { Component } from 'react'; 
import './App.css';

import {ButtonCounter}  from './Button';

import ReactDOM from 'react-dom';


//ES6 arrow function for Rendering component

const Result = props => {
  return (
    <div>
      {props.counter}
    </div>
  )
}

class Counter extends Component { 

 /*
  Not used..added for comparision
   getInitialState() {
    return { counter :10 };
  }
  */
     
//use constructor to initialize state values from Props

 constructor(props) {
     super(props);  
     console.log("Counter Constructor");     
     this.state = { counter: 0 ,hasError: false };
     //this.state = { hasError: false };
    // console.log(this.state.counter);

   //No binding for functions called in render function
    this.incrementCounter= this.incrementCounter.bind(this);

    this.removeComponent=this.removeComponent.bind(this);
  }
  

  //No binding for functions called in render function
 //But 'this' is NOT bind inside render

//Try binding this in incrementCounter

 incrementCounter(incrementValue){ 
 // console.log("App Counter = "+this.state.counter);  
 // console.log("Increment Counter Value = "+incrementValue);
  let counterNew = this.state.counter + incrementValue 
  console.log("New Counter Value = "+counterNew);
  //this.state = { counter: counterNew } //This will not work
 
  this.setState({counter: counterNew })//call the base class function: No need to over-ride
 
  //No need to call render explicitly
  }

 

  render() {
    console.log("****Counter Rendering****");

   if (this.state.hasError) {
      //Here render any custom fallback UI in case of error
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div>
        <ButtonCounter  incrementValue={1} onClickFunction={this.incrementCounter} />
        <ButtonCounter  incrementValue={10} onClickFunction={this.incrementCounter} />
        <ButtonCounter  incrementValue={100} onClickFunction={this.incrementCounter} />
        <ButtonCounter  incrementValue={1000} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
       <button onClick={this.removeComponent}>
             Remove the Node Element Counter
        </button>

      </div>
    )
  } 

/*
componentWillMount(){
            //considered legacy  and NOT used
            console.log("inside componentWillMount method");
             
        }
componentWillUpdate(){
      
            //considered legacy  and NOT used

            console.log("inside componentWillUpdate method");
             
           
        }
*/
    
 componentDidMount(){
            console.log("inside componentDidMount method");
           /*
    invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    may call setState() immediately in componentDidMount()
*/
             
        }

 getSnapshotBeforeUpdate(prevProps, prevState){
   
  console.log("inside getSnapshotBeforeUpdate method with prevState "+ prevState.counter);
 return prevState.counter

  /*
  invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().

*/
             
  }

shouldComponentUpdate(){
      console.log("inside shouldComponentUpdate method");

              /*

            React know if a component�s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
        */

            return true;  //defualt should be true
        }

        

        componentDidUpdate(){
            console.log("inside componentDidUpdate method");

//  if(this.state.counter > 5)
//     throw ({'reason':'More Counts'});

     /*
   invoked immediately after updating occurs. This method is not called for the initial render.
  Hetre is an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props 
   componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

   */
  //this.fetchData(this.props.userID);
             
             
        }

        componentWillUnmount(){
            console.log("inside componentWillUnmount method");

            /*
       invoked immediately before a component is unmounted and    destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
   should not call setState() in componentWillUnmount() because the component will never be re-rendered. 
  Once a component instance is unmounted, it will never be mounted again.

  If component implements the getSnapshotBeforeUpdate() lifecycle (which is rare), the value it returns will be passed as a third �snapshot� parameter to componentDidUpdate(). Otherwise this parameter will be undefined.

        */

        }

static getDerivedStateFromProps(props, state){
   
  console.log("inside componentWillUnmount method "+ props +" "+ state);
  return null;


}
  removeComponent(){             
   ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
console.log("inside removeComponent");
   //ReactDOM.unmountComponentAtNode(document.getElementById('id1'));
        }


static getDerivedStateFromError(error){
  console.log("inside getDerivedStateFromError ");

console.log("ErrOR is "+error.reason);
  // Update state so the next render will show the fallback UI.
    return { hasError: true };

/*
called during the �render� phase, so side-effects are not permitted. 
 invoked after an error has been thrown by a descendant component.
 It receives the error that was thrown as a parameter and should return a value to update state.
*/
}


componentDidCatch(error, info){
    console.error("inside componentDidCatch with "+error +"  and  info as  "+info);

/*

  Is invoked after an error has been thrown by a descendant component. It receives two parameters:

error - The error that was thrown.
info - An object with a componentStack key containing information about which component threw the error.

componentDidCatch() is called during the �commit� phase, so side-effects are permitted. It should be used for things like logging errors:

*/


}

}

 
export var AppCounter = Counter
