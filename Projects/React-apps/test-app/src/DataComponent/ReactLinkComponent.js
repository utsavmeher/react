import React, { Component } from 'react';

import linkedState from 'react-link';

class ReactLinkComponent extends Component {

  constructor(props) {
     super(props);  
     console.log("DataLinkComponent Constructor"); 
      this.state = { message: 'This Is It'}    

  }

  render() {   
 
    return <div>DataComponent Binding Customized
   <p valueLink={linkedState(this, 'message')}/>
</p><br></br>

 <input type="text" value={message} valueLink={linkedState(this, 'message')}/>
<br></br>
 <input type="text" value={message} valueLink={linkedState(this, 'message')}/>
<br></br> </div>;
  } 
}

export default ReactLinkComponent;
