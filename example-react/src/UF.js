import React, { Component } from 'react';

class UnControlledForm extends Component {

    handle=()=>{
        console.log("Input Value : ",this.input.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text'
                value={this.state.username}
                onChange={this.updateUsername} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UnControlledForm;