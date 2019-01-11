import React, { Component } from 'react';

function IncrimentBut(props) {
    const {changeState, nos} = props
    return ( 
        <div>
            <button onClick={()=> changeState(nos+1)}>Incriment</button>
        </div>
    )
}

function DecrimentBut(props) {
    const {changeState, nos} = props
    return ( 
        <div>
            <button onClick={()=> changeState(nos-1)}>Decriment</button>
        </div>
    )
}

class Arithmetic extends Component {
    state = {
        nos: 0
    }

    changeState = (nos) => {
        this.setState({nos:nos})
    }
    render() {
        return (
            <div style={{marginTop: 100}}>
                <center>
                    <input type="text" value={this.state.nos} /><br />
                    <IncrimentBut changeState={this.changeState} nos={this.state.nos} />
                    <DecrimentBut changeState={this.changeState} nos={this.state.nos} />
                </center>
            </div>
        );
    }
}

export default Arithmetic;