import React, { Component } from 'react';

class MyComponent extends Component {

 constructor(props) {
     super(props);  
     console.log("MyComponent Constructor");     
     this.state = { counter: props.data}
     console.log(this.state.counter);  
     this.onClick = this.handleUpdate.bind(this);  
  }
  

handleUpdate(event)
{
  
     this.data = this.state.counter + 1
     console.log("MyComponent handleUpdate on "+event.target);   

      this.setState({counter:this.data})
  

}

  render() {
    return <div className="MyClass" onClick={this.onClick}>
  <h2>Result :{this.state.counter}</h2>
MyComponent Is Here
</div>;
  }
}

export default MyComponent;
