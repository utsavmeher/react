import React from 'react';

class UserComponent extends React.Component {

//State is similar to props, but it is private and fully //controlled by the component.
//The local state is available only to components as classes.

  constructor(props) {
    super(props);
    this.state = {likesCount : 0,upass:props.pass};
    this.update = this.onClick.bind(this);
   
    this.name= props.uName;
    this.test = this.updateUser.bind(this);
    this.updateChild = this.props.updateParent;

  }


componentDidMount() {
    console.log("The Child User component Mounted");    

  }

updateUser()
{
console.log("The Child User component update ");

}

  onClick () {
    let count = this.state.likesCount + 1;
    let pass = "Nudtre%$3##"+ count;

    this.setState({likesCount: count,upass: pass});
  }

  render() {
    console.log("The child User-Component rendering "+new Date().getSeconds());

    var handleToUpdate  =   this.props.updateParent;
 
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span><br></br>
        Name : <span>{this.name}</span><br></br>

        The child Password as state : <span>{this.state.upass}</span><br></br>
 The child Password updated from Parent as props : <span>{this.props.pass}</span>

<br></br>

        <div><button onClick={this.update}>Like Me</button></div>

   <div><button onClick={() => handleToUpdate('childData')}>Send to Parent</button></div>

      </div>
    );
  }

}

export default UserComponent ;
