import * as React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {common} from '../styles';

const url = 'https://nomad-movies.nomadcoders.workers.dev/movies';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

export function MoviesScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

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
    <View style={common.center}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      )}
    </View>
  );
}
