import axios from 'axios'
import { options, Top_Rated_Movie } from '../utils/constant';
import { getTopRatedMovie } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useTopRatedMovies = async() => {
    const dispatch = useDispatch();
  try {
    const res = await axios.get(Top_Rated_Movie,options);
    dispatch(getTopRatedMovie(res.data.results));
          
  } catch (error) {
    
  }
}

export default useTopRatedMovies;