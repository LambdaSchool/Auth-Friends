import React from 'react';

const Friend = props => {
    
    return (
    <div className="card">
        <h4 >{props.friend.name}</h4>
        <div className="info">
            <p >age:  {props.friend.age}</p>
            <p >email:  {props.friend.email}</p> 
        </div>
        <button onClick={() => props.deleteFriend(props.friend.id)}> Delete </button>
    </div> 
    )
}

export default Friend;