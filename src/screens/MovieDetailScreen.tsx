import * as React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {common} from '../styles';
import {RootStackParamList} from '../stacks';
import {url} from './MoviesScreen';
import {UseQueryOptions, useQuery} from '@tanstack/react-query';

type MovieDetailScreenParams = RouteProp<RootStackParamList, 'MovieDetail'>;

type Props = {
  route: MovieDetailScreenParams;
};

interface IMoive {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

const fetchMovieDetails = async (id: string) => {
  const response = await fetch(url + `/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};

export function MovieDetailScreen({route}: Props) {
  const {id} = route.params;

  const queryOptions: UseQueryOptions<IMoive, Error> = {
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  };
  const {data, error, isLoading} = useQuery(queryOptions);

  if (isLoading) {
    return (
      <View style={common.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={common.center}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={common.center}>
      <Text>Moive title: {data?.title}</Text>
      <Image source={{uri: data?.poster_path}} style={styles.poster} />
      <Text>Moive poster_path: {data?.poster_path}</Text>
      <Text>Moive overview: {data?.overview}</Text>
      <Text>Moive vote_average: {data?.vote_average}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  poster: {
    height: 300,
    borderRadius: 5,
  },
  titleBox: {
    height: 40,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
});
