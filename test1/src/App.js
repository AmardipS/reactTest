import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

// App is a Class-based component
class App extends Component {

  // State is used to pass the properties within the same component
  state = {
    users: [
      {name: 'Amardip', id: 234},
      {name: 'Rajesh', id: 454}
    ],
    otherState: "some other value." 
  }

  // method for switching user
  switchUser = () => {
    // This doesn't work
    // this.state.users[0].name === 'Reshma'; 
    // setState() is to modify the state of the component 
    // it overlaps the new state with the old one; i.e. the otherState state will be remain untouched 
    this.setState(
      {
        users: [
          {name: 'Reshma', id: 234},
          {name: 'Rajesh', id: 454}
        ]
      }
    )
  }

  // method for changing name from user input
  nameChangeHandler = (event) => {
    this.setState(
      {
        users: [
          {name: event.target.value, id: 234},
          {name: 'Rajesh', id: 454}
        ]
      }
    )
  }

  render(){
    // Inline Styling
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue'
    };
    return(
      <div className="App">
        <p>This is a React Test!</p>
        <button 
          style={style}
          onClick={this.switchUser}>Switch User</button>

        <UserOutput 
          userName = {this.state.users[0].name} // properties passing from the state
          id = {this.state.users[0].id}/>
        <UserInput 
          userName = {this.state.users[0].name} 
          change = {this.nameChangeHandler}
          />
        
        <UserOutput 
          userName = {this.state.users[1].name} 
          id = {this.state.users[1].id}
          click = {this.switchUser}             // it is possible to pass a function as a property
          />     
        <UserInput 
          
          userName= {this.state.users[1].name}
          //change = {this.nameChangeHandler}
          />
               
      </div>   
    );
  }
}  

export default App;
