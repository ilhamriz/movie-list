export default function getData() {
  return async (dispatch) => {
    await dispatch(getSeries());
    await dispatch(getMovies());
    await dispatch(getLocals());
    await dispatch({ type: 'LOADING_FALSE' });
  }
}

const getSeries = () => {
  return async (dispatch) => {
    let index = 1;
    while (index < 3) {
      const resp = await fetch(`http://www.omdbapi.com/?apikey=dc5f2e05&s=series&page=${index}`);
      const data = await resp.json();
      await dispatch({
        type: 'ADD_SERIES',
        payload: data.Search
      })
      index += 1;
    }    
  }
}

const getMovies = () => {
  return async (dispatch) => {
    let index = 1;
    while (index < 3) {
      const resp = await fetch(`http://www.omdbapi.com/?apikey=dc5f2e05&s=marvel&page=${index}`);
      const data = await resp.json();
      await dispatch({
        type: 'ADD_MOVIES',
        payload: data.Search
      })
      index += 1;
    }
  }
}

const getLocals = () => {
  return async (dispatch) => {
    let index = 1;
    while (index < 3) {
      const resp = await fetch(`http://www.omdbapi.com/?apikey=dc5f2e05&s=hantu&page=${index}`);
      const data = await resp.json();
      await dispatch({
        type: 'ADD_LOCALS',
        payload: data.Search
      })
      index += 1;
    }
  }
}