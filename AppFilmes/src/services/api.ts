import axios from 'axios';

const API_KEY = 'e6ae988cc5a8190d1c8949d75bbe1377';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface MovieDetails extends Movie {
  genres: Array<{ id: number; name: string }>;
  runtime: number;
}

export const getImageUrl = (path: string) => 
  `https://image.tmdb.org/t/p/w500${path}`;

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
  );
  return response.data.results;
};

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
  );
  return response.data;
};