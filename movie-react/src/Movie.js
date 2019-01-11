import React, { Component } from 'react';
import MovieList from './MovieList'
import styled from 'styled-components'

class Movie extends Component {

    state = {
        movielist: []
    }

    async componentDidMount() {

        try {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            const movielist = await res.json();
            this.setState({
                movielist: movielist.results,
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (

            <MovieGrid>
                {this.state.movielist.map(movie =>
                    <MovieList key={movie.id}
                        movie={movie}
                        desc={movie.overview}
                    />)}
            </MovieGrid>

        );
    }
}

export default Movie;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;