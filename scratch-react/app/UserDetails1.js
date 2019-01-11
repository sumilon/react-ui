import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var users = [
    { name: 'Sumilon', friend: true },
    { name: 'Mani', friend: false },
    { name: 'Ramanan', friend: true },
    { name: 'Anand', friend: false },
]

class App extends Component {
    render() {
        // if(users.length > 0){
        //     users = users.filter(use => {
        //         return use.friend.match("true");
        //     });
        // }
        let friend = users.filter((list)=> list.friend === true)
        let unfriend = users.filter((list)=> list.friend !== true)
        return (
            <div>
                <h1>Friends</h1>
                {
                    friend.map(u => <li key={u.name}>{u.name}</li>)
                }

                <h1>Non Friends</h1>
                {
                    unfriend.map(u => <li key={u.name}>{u.name}</li>)
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)