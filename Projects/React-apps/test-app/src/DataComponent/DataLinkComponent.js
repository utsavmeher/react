import React, { Component } from 'react';

class DataLinkComponent extends Component {

  constructor(props) {
     super(props);  
     console.log("DataLinkComponent Constructor"); 
    // this.setState({message:'Empty Data'});

      this.state = { message: 'This Is It'}
       

   //binding for functions 
     this.onClick = this.handleChange.bind(this);  

  }


handleChange(newValue) {
    this.setState({message: newValue});
  }

  render() {
  var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };    
 
    return <div>DataComponent Binding Customized
    <p valueLink={valueLink}></p><br></br>

  <input type="text" value={message} valueLink={valueLink} /><br></br>
  <input type="text" value={message} valueLink={valueLink} /><br></br> </div>;
  } 
}

export default DataComponent;
