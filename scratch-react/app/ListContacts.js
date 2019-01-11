import React, {Component} from 'react';

class ListContacts extends Component {

    render(){
        const contact2 = this.props.contacts2
        console.log('dddd : '+contact2)
        return(
            <div>
                {this.props.contacts.map((list)=>(
                    <li key={list}>{list}</li>
                ))}
                <h2>This is other contact details</h2>
                {contact2.map((list)=>(
                    <li key={list}>{list}</li>
                ))}
            </div>
        )
    }
}

export default ListContacts