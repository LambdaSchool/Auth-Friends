

import React from 'react'

export default function friend(props) {
    const {name, age, email} = props.fri
    console.log(name)
    return (
        <div>
            <h1>oi</h1>
            <h1>{name}</h1>
        </div>
    )
}
