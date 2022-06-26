import { BiTime } from 'react-icons/bi';
import { Movie } from './MoviesData';

const MovieCard = ({ movie }: { movie: Movie }) => {
    const { src, title, main, runtime } = movie;
    return (
        <div className='card'>
            <img src={src} className='w-full object-cover' />
            <div className='p-4 text-white'>
                <h4 className='text-4xl'>{title}</h4>
                <p>{main}</p>
            </div>
            <div className='badge'>
                <BiTime /> <p>{runtime}</p>
            </div>
        </div>
    );
};

export default MovieCard;
