import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { getMovies } from '../movies/action'

const Toggle = ({ getMovies }) => (
    <div>
        <button onClick={getMovies}>Load Movies</button>
    </div>
);

const mapStateToProps = state => ({
    movies: state.moviedata.movies,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);