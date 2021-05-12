import axios from 'axios';

function searchMovies(search) {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`http://www.omdbapi.com/?apikey=dc5f2e05&s=${search}`);
      if (resp.data.Search) {
        await dispatch({ type: 'ADD_SEARCH', payload: resp.data.Search });
        await dispatch({ type: 'IS_SEARCH_ERROR_FALSE' });
      } else {
        await dispatch({ type: 'IS_SEARCH_ERROR_TRUE' });
        await dispatch({ type: 'EMPTY_SEARCH' });
      }
      await dispatch({ type: 'LOADING_FALSE' });
      
    } catch (error) {
      console.log(error);
    }
  }
}

export default searchMovies;