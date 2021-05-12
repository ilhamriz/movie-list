import Films from './Films';
import {RingLoader} from "react-spinners";
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { useEffect } from 'react';
import getData from '../store/actions/getData';

function Home() {
  const { series, movies, locals,isLoading } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'LOADING_TRUE' });
    dispatch(getData());
  }, [])

  return (
    <main className='home'>
      {isLoading ? (
        <div className="loading-container">
          <RingLoader color={'#334366'} loading={isLoading} size={150} />
        </div>
      ) : (
        <div className="container">
          <Films films={series} title='Series' />
          <Films films={movies} title='Movies' />
          <Films films={locals} title='Local' />
        </div>)}
    </main>
  )
}

export default Home