import React from 'react'
import PropTypes from 'prop-types'

//stateless component or functional component
function ListContacts(props) {

    return (
        <div>
            <ol>
                {
                    props.contacts.map((list, index) => {
                      return  <li key={index}>
                            <div>
                                {list.name}
                                {list.email}
                                <button onClick={() => props.deleteContacts(list)} >Delete</button>
                            </div>
                        </li>
                    })
                }
            </ol>
        </div>
    );
}

ListContacts.prototypes = {
    contacts: PropTypes.array.isRequired,
    deleteContacts: PropTypes.func.isRequired
}

export default ListContacts