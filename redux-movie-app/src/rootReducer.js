import { combineReducers } from 'redux';

import toggle from './toggle/reducer'
import moviedata from './movies/reducer'

const rootReducer = combineReducers({
    toggle,
    moviedata,
});

export default rootReducer;