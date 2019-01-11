import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Navbar from './Navbar'

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
        const { contacts } = this.props
        const showingContacts = query === ' '
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))
        return (
            <div>
                <Navbar/>
                {JSON.stringify(this.state)}
                <TextField
                    placeholder='search'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)} />

                {
                    showingContacts.length !== contacts.length && (
                        <div>
                            <span>
                                <Typography>
                                    Now Showing {showingContacts.length} of {contacts.length}
                                </Typography>
                            </span>
                            <Button size="small" color="primary"
                                onClick={this.clearQuery}>Show All</Button>
                        </div>
                    )}

                <ol>
                    <Grid container spacing={24} style={24} style={{ padding: 24, justifyContent: 'center' }}>
                        {
                            showingContacts.map(contacts => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Card>
                                        <li key={contacts.id}>
                                            <CardMedia style={{ height: 0, paddingTop: '56.25%', backgroundImage:`url(${contacts.photo})` }} />
                                            <CardContent>
                                                <Typography gutterBottom variant="headline" component="h2">
                                                    <p>{contacts.name}</p>
                                                </Typography>
                                                <Typography component="h3">
                                                    <p>{contacts.email}</p>
                                                </Typography>
                                            </CardContent>
                                            <CardActions style={{justifyContent: 'center'}}>
                                                <Button size="small" color="primary">Remove</Button>
                                            </CardActions>
                                        </li>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </ol>
            </div>
        );
    }
}

export default ListContacts;