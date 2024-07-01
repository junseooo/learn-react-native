import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IMovieProps {
  title: string;
  poster_path: string;
}

export function MovieDetail({title, poster_path}: IMovieProps) {
  return (
    <View>
      <Image source={{uri: poster_path}} style={styles.poster} />
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
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
