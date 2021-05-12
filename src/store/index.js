import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk'

const initialState = {
  series: [],
  movies: [],
  locals: [],
  search: [],
  isLoading: false,
  isSearchError: false,
  navLinks: ["Series", "Movies", "Local"]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SERIES':
      return {...state, series: state.series.concat(action.payload)};
    case 'ADD_MOVIES':
      return {...state, movies: state.movies.concat(action.payload)};
    case 'ADD_LOCALS':
      return {...state, locals: state.locals.concat(action.payload)};
    case 'ADD_SEARCH':
      return {...state, search: action.payload};
    case 'EMPTY_SEARCH':
      return {...state, search: []};
    case 'IS_SEARCH_ERROR_TRUE':
      return {...state, isSearchError: true};
    case 'IS_SEARCH_ERROR_FALSE':
      return {...state, isSearchError: false};
    case 'LOADING_TRUE':
      return {...state, isLoading: true};
    case 'LOADING_FALSE':
      return {...state, isLoading: false};
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;