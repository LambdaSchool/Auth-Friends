import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
import { fetchingData } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
         <h2>Fetching Friends</h2>
        ) : (
          <div>
          <h2>My Friends </h2>
           <ul>
             {this.props.friends.map(friend => {
               return (
                 <div className='friends-list' >
               <p key={friend.id}>Name: {friend.name}</p>
               <p key={friend.id}> Age: {friend.age}</p>
               <p key={friend.id}> Email: {friend.email}</p>
               </div>
              )
              ;
             })}
           </ul>
           </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
  };
}

export default connect(
  mapDispatchToProps,
  { fetchingData }
)(App);
