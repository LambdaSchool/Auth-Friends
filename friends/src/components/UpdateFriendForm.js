import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFriend } from "../actions";

class UpdateFriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleSubmit = () => {
    event.preventDefault();
    const { name, age, email } = this.state;
    this.props.updateFriend(this.props.id, { name, age, email });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Create-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <button type="submit">Update Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    updatingFriends: state.friendsReducer.updatingFriends,
    error: state.friendsReducer.error
  };
};

export default connect(mapStateToProps, { updateFriend })(CreateFriendForm);
