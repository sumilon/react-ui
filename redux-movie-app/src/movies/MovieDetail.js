import React, { Component } from 'react';
import { Poster } from './MovieList'
import styled from 'styled-components'

import { getMovie, resetMovie } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {

    componentDidMount() {
        const { getMovie, match } = this.props;
        getMovie(match.params.id);
    }

    componentWillUnmount() {
        this.props.resetMovie();
    }

    // async componentDidMount() {
    //     try {
    //         const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=65e043c24785898be00b4abc12fcdaae`)
    //         const movie = await res.json();
    //         this.setState({
    //             movie,
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    render() {
        const { movie } = this.props
        if (!movie.id) return null;

        return (

            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <MovieInfo>
                    <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>

        );
    }
}

const mapStateToProps = state => ({
    movie: state.moviedata.movie,
    isLoaded: state.moviedata.movieLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovie,
    resetMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    >div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;