import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieList from './MovieList'
import styled from 'styled-components'
import { getMovies } from './action'

class Movie extends PureComponent {

    componentDidMount() {
        const { getMovies, isLoaded, moviesLoadedAt } = this.props;
        const oneHour = 60 * 60 * 1000;
        if (!isLoaded || ((new Date()) - new Date(moviesLoadedAt)) > oneHour) {
            getMovies();
        }
    }

    // state = {
    //     movielist: []
    // }

    // async componentDidMount() {

    //     try {
    //         const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    //         const movielist = await res.json();
    //         this.setState({
    //             movielist: movielist.results,
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // render() {
    //     return (
    //         <MovieGrid>
    //             {this.state.movielist.map(movie =>
    //                 <MovieList key={movie.id}
    //                     movie={movie}
    //                     desc={movie.overview}
    //                 />)}
    //         </MovieGrid>

    //     );
    // }

    render() {
        const { movies, isLoaded } = this.props;
        if(!isLoaded) return <h1>Loading...</h1>
        return (
            <MovieGrid>
                {movies.map(movie =>
                    <MovieList key={movie.id}
                        movie={movie}
                        desc={movie.overview}
                    />)}
            </MovieGrid>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.moviedata.movies,
    isLoaded: state.moviedata.moviesLoaded,
    moviesLoadedAt: state.moviedata.moviesLoadedAt,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;