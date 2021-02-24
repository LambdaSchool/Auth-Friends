

import React from 'react'


 function Friends() {
    const friendss = [
        {
          id: 1,
          name: 'Rachel Green',
          age: 30,
          email: 'rachel@friends.com'
        },
        {
          id: 2,
          name: 'Joey Tribbiani',
          age: 34,
          email: 'joey@friends.com'
        },
        {
          id: 3,
          name: 'Chandler Bing',
          age: 32,
          email: 'chandler@friends.com'
        },
        {
          id: 4,
          name: 'Ross Geller',
          age: 32,
          email: 'ross@friends.com'
        },
        {
          id: 5,
          name: 'Monica Bing',
          age: 31,
          email: 'monica@friends.com'
        },
        {
          id: 6,
          name: 'Phoebe Buffay-Hannigan',
          age: 30,
          email: 'phoebe@friends.com'
        }
      ];

    return (
        <div>
            {friendss.forEach((item) => {
                <h1>{item.name},
                {item.age},{item.email},
                
                </h1>


            })}
        </div>
    )
}

export default Friends