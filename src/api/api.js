import axios from 'axios';

const apiKey = '4242358c052cb34e9586769939c4f84d';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export const getMovies = async () => {
  const { data } = await instance.get(`/trending/movie/day`);
  return data;
};

export const getSingleMovies = async id => {
  const { data } = await instance.get(`/movie/${id}`);

  return data;
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data;
};
