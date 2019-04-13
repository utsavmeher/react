
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    console.log("The clock constructor");
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("The clock component Mounted");

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
     console.log("The clock component UN-Mounted");

    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    //console.log("The clock component rendering");

    return (
      <div>
        <h1>The Time is up!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}
export default Clock ;


