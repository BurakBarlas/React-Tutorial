import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';

class App extends Component {
  state = {

    users: [
      {
        id : 1,
        name : "Burak Barlas",
        department : "CS:go",
        income : "1000"
      },
      {
        id : 2,
        name : "berkay Barlas",
        department : "CS",
        income : "1234"
      },
      {
        id : 3,
        name : "nihat Uzun",
        department : "salaryman",
        income : "5312"
      }
    ]
  }

  render() {

  
    return (
      <div className="container">
        <Navbar title = "User app"/>
        <hr/>
        <Users users = {this.state.users}/>
    
      </div>
      
    ); 
  }
}   
export default App;
