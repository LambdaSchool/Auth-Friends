import React, { Component } from 'react';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
