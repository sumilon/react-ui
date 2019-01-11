import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var USER_DATA = {
    name: 'swiggy',
    username: 'swiggyusername'
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>Name : {this.props.user.name}</h1>
                <h1>UserName : {this.props.user.username}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App user={USER_DATA} />,
    document.getElementById('main')
)