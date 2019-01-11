import React from 'react';
import ReacrDOM from 'react-dom'
import ListContacts from './ListContacts';

//const React = require('react')
//const ReacrDOM = require('react-dom')

const phones = ["mi", "apple", "samsung"]
const contacts = ["me", "some", "etc"]
const contacts2 = ["me2", "some2", "etc2"]

//creating a component
class App extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h2>Phone Details</h2>
                    {phones.map((list) => (
                        <li key={list}>{list}</li>
                    ))}
                </div>
                <div>
                    <h2>Contact Details</h2>
                    <ListContacts contacts={contacts} contacts2={contacts2} />
                </div>
            </div>

        )
    }
}

ReacrDOM.render(
    <App />,
    document.getElementById('main')
)