import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const MovieList = ({ movie }) => (
    <div>
        <Hover>
            <Link to={`/${movie.id}`} >
                <Poster src={`${POSTER_PATH}${movie.poster_path}`}
                    alt={movie.title} />
            </Link>
        </Hover>
        <h3>{movie.title}</h3>
    </div>
)

export default MovieList;

MovieList.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired
}

export const Poster = styled.img`
    box-shadow:  0 0 35px black;
    border: 2px solid black
`;

const Hover = styled.div`
&:hover{
    transform: scale(1.2);
};
`;