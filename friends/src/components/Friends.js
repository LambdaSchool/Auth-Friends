import React from 'react';
import { connect } from 'react-redux'
import { fetchFriends } from "../actions";
import CreateFriendForm from './CreateFriendForm';

class Friends extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // call our action
        this.props.fetchFriends();
      }

    render() {
        return (
            <div>
                <CreateFriendForm />
                {this.props.friends.map(friend =>
                    <h1>{friend.name}</h1>
                )}
          </div>
        );
    }
    }

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    };
  };

export default connect(mapStateToProps, { fetchFriends })(Friends);