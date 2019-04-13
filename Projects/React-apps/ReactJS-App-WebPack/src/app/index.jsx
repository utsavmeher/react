import React from 'react';
import {render} from 'react-dom';
import UserComponent from './Component.jsx';
import Clock from './ClockComponent.jsx';

import Comment from './FunctionComponent.jsx';


class App extends React.Component {

 constructor(data) {
    super(data);     
    this.appUser= data.name;
    this.state ={userPass:'MyNewSeLkU%$#', userData:'bhidu'};
 

    this.receiveChildEvent  = this.updateFromChild.bind(this);

    this.handleEvent = this.updatePass.bind(this);

  }

componentDidMount() {
     console.log("The App component Mounted");

  }

updateFromChild(args){
            console.log('Here is argument passed from Child to Parent: ' + args);
            this.setState({userData:args});
    }

updatePass(event){
          var newPass = event.target.value;
          console.log("The password updated is  "+newPass);          
         
          this.setState({userPass:newPass});
     }              


  render () {
  console.log("The Parent App-Component rendering " +new Date().getSeconds());

    return (
      <div>
        <p>The React component state and props!</p>
        <UserComponent uName="Ram"/><br></br>
        Pass the password value to child component nested
       
        <br></br>
<div>
        Update Password : <input type="text" 
      onChange={this.handleEvent} placeholder="Enter New Password"/>
    </div>

       <br></br>
<h3>Convert the current state  value to child component as props</h3>
The userData state updated from child to Parent is {this.state.userData}<br></br>

 The Password state in Parent is {this.state.userPass}<br></br>
        <UserComponent uName={this.appUser} pass={this.state.userPass} updateParent={this.receiveChildEvent}/>
 <br></br>
       

        <Clock />

      </div>
    );
  }
}

const uData = {
  date: new Date(),
  text: 'Enjoying the React!',
  author: {
    name: 'Vijau Batra',
    avatarUrl: 'public/duke.png'
  }
};


render(<App name="DON"/>, document.getElementById('app'));

 
render(
  <Comment
    date={uData.date}
    text={uData.text}
    author={uData.author} />,
  document.getElementById('id2')
);

 

