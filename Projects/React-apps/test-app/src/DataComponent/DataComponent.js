import React, { Component } from 'react';

class DataComponent extends Component {

  constructor(props) {
     super(props);  
     console.log("DataComponent Constructor"); 
    // this.setState({message:'Empty Data'});

      this.state = { message: 'Empty Data'}
       

   //binding for functions 
     this.onClick = this.handleChange.bind(this);  

  }


handleChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    var message = this.state.message;
    return <div>DataComponent Binding Customized
    <p>{message}</p><br></br>

  <input type="text" value={message} onChange={this.onClick} /><br></br>
  <input type="text" value={message} onChange={this.onClick} /><br></br> </div>;
  } 
}

export default DataComponent;
