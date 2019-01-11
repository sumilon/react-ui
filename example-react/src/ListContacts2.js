import React, { Component } from 'react';

class ListContacts extends Component {
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = (query) => {
        this.updateQuery('')
    }

    render() {
        const { query } = this.state
        const {contacts} = this.props
        const showingContacts = query === ' '
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))
        return (
            <div>
                {JSON.stringify(this.state)}
                <input
                    placeholder='search'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>

                {
                    showingContacts.length !== contacts.length && (
                    <div>
                        <span>
                            Now Showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button size="small" color="primary"
                            onClick={this.clearQuery}>Show All</button>
                    </div>
                )}

                <ol>
                    {
                        showingContacts.map(contacts => (
                            <li key={contacts.id}>
                                <div>
                                    <p>{contacts.name}</p>
                                    <p>{contacts.email}</p>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}

export default ListContacts;