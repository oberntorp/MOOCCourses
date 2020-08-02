import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userNames: [{
      userName: "Oskar"
    },
    {
      userName: "Max"
    }]
  }

  changeStateHandler = (event) =>
  {
    this.setState({
      userNames: [{
        userName: "Oskar"
      },
      {
        userName: event.target.value
      }]
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput textOne="I am the first user, am can not change my name" userName={this.state.userNames[0].userName} />
        <UserOutput textOne="I am the first user, my name can be changed" userName={this.state.userNames[1].userName} />
        <UserInput changed={this.changeStateHandler} startingName={this.state.userNames[1].userName} />
      </div>
    );
  }
}

export default App;
