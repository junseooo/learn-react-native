/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatGrid} from 'react-native-super-grid';
import {MovieDetail} from '../components';
import {movie} from '../styles';
import {RootStackParamList} from '../stacks';

export const url = 'https://nomad-movies.nomadcoders.workers.dev/movies';

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

type MoviesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Movies'>;
};

export function MoviesScreen({navigation}: MoviesScreenProps) {
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
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            navigation.navigate('MovieDetail', {
              id: item.id,
            });
          }}>
          <MovieDetail title={item.title} poster_path={item.poster_path} />
        </TouchableOpacity>
      )}
    />
  );
}
