import React, { useState , useEffect } from 'react'
import { axiosWithAuth } from '../axios/axiosWithAuth'

const FriendList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
            setFriends(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    },[]);
    
    return (
        <div>
            {friends.map((e) => {
                return (
                    <div key={e.id}>
                        <h2>{e.name}</h2>
                        <h2>{e.age}</h2>
                    </div>
                )
            })}
        </div>
    )
};

export default FriendList;