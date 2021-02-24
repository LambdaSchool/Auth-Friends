import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FriendsList() {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:5000/api/friends", {headers: {Authorization: token}})
        .then(res => {
            console.log("This is the response from the friendslist component api call: ", res.data)
            setFriends(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() =>  {
        getFriends()
    }, [])


    return (
        <div>
            <h1> Friends </h1>
            <ul>
                {friends.map(friend => {
                    return (
                        <li key={friend.id}>
                            <h2>{friend.name}</h2>
                            <h2>{friend.age}</h2>
                            <h2>{friend.email}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}