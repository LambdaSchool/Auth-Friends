import React from "react";
import Friend from "./Friend";

class Friends extends React.Component {
  handleDelete = event => {
    this.props.deleteFriend(event.target.id);
  };

  render() {
    return (
      <div className="friends">
        {this.props.friendsFetched ? (
          this.props.friends.map(friend => (
            <Friend
              key={friend.id}
              {...friend}
              onDelete={this.handleDelete}
              onUpdate={this.props.onUpdate}
            />
          ))
        ) : (
          <h2>Loading friends...</h2>
        )}
      </div>
    );
  }
}

export default Friends;