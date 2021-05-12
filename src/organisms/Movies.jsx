import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import Card from '../molecules/Card'
import './Movies.css'
import {RingLoader} from "react-spinners";
import searchMovies from "../store/actions/searchMovies";

function Movies() {
  const { search, isSearchError, isLoading } = useSelector(state => state);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => (
    state.key && dispatch(searchMovies(state.key))
  ), [])

  return (
    <main>
      <div className='movies'>
        {isLoading ? (
          <div className="loading-container">
            <RingLoader color={'#334366'} loading={isLoading} size={150} />
          </div>
        ) : (
          <div className="container">
            {isSearchError ?
              (<div className='search-error'><h2>Nothing found!</h2><p>Try searching for something else</p></div>)
              :
              <h2>Showing all results for <span className='movies-search'>{state.key}</span></h2>}
          
            <section>
              {search && search.map((val, idx) => {
                return (
                  <Card key={idx} data={val} />
                )
              })}
            </section>
          </div>)}
      </div>
    </main>
  )
}

export default Movies
