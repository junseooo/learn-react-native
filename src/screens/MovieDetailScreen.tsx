import * as React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {common, movieDetail} from '../styles';
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
    <View style={movieDetail.container}>
      <Image source={{uri: data?.poster_path}} style={movieDetail.poster} />
      <View style={movieDetail.description}>
        <Text style={movieDetail.title}>{data?.title}</Text>
        <Text style={movieDetail.vote}>⭐️ {data?.vote_average}</Text>
        <Text style={movieDetail.overview}>{data?.overview}</Text>
      </View>
    </View>
  );
}
