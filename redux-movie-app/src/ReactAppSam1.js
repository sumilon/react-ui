import React, { Component } from 'react';
import { createStore } from 'redux';

const defaultState = {
    welcome: 'Hi defaulte state',
    otherstate: 'some stuff',
    otherstates: 'some other stuff'
}

const greeting = (state = defaultState, action) => {
   
    switch(action.type){
        case 'GREET_ME':
            return { ...state, welcome: `hello` }
        case 'GREET_NAME':
            return { ...state, welcome: `Hello ${action.name}`};
        case 'HI_ALL':
            return { ...state, welcome: `HEllo All`};
        default:
           return state;
    }
};

const store = createStore(greeting)
console.log(store.getState())

const name = 'this is the data coming fromapi'
const name2 = 'this is another data coming fromapi'

store.dispatch({
    type: 'GREET_NAME',
    name,
    name2
})

console .log(store.getState())

store.dispatch({
    type: 'GREET_NAME',
    name: 'somename'
})

console.log(store.getState())

store.dispatch({
    type: 'GREET_ME',
    welcome: 'Good Morning'
})

console.log("***** : ",store.getState())

class ReactAppSam1 extends Component {
    render() {
        return (
            <div>
                <h1>Wecome to redux</h1>
            </div>
        );
    }
}

export default ReactAppSam1;