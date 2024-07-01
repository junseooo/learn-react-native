/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {useEffect, useState} from 'react';
import {MovieDetail} from '../components/MovieDetail';
import {FlatGrid} from 'react-native-super-grid';
import {movie} from '../styles';

export const url = 'https://nomad-movies.nomadcoders.workers.dev/movies';

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<IMovieProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatGrid
      itemDimension={130}
      data={data}
      style={movie.gridView}
      spacing={10}
      renderItem={({item}) => (
        <MovieDetail title={item.title} poster_path={item.poster_path} />
      )}
    />
  );
}
