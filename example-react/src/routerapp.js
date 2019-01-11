import React, { Component } from 'react'
import P3 from './P3'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <h1>Home Page</h1>
)

const Login = () => (
    <h1>Login Page</h1>
)

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/" >home</Link>&nbsp;&nbsp;
                    <Link to='/login'>login</Link>&nbsp;&nbsp;
                    <Link to='/language'>language</Link>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/language' component={P3} />
                </div>
            </Router>
        );
    }
}

export default RouterApp;