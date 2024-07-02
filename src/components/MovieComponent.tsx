import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {movie} from '../styles';

interface IMovieProps {
  title: string;
  poster_path: string;
}

export function MovieComponent({title, poster_path}: IMovieProps) {
  return (
    <View>
      <Image source={{uri: poster_path}} style={movie.poster} />
      <View style={movie.titleBox}>
        <Text style={movie.title}>{title}</Text>
      </View>
    </View>
  );
}
