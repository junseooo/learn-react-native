import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MovieDetailScreen, MoviesScreen} from '../screens';

export type RootStackParamList = {
  Movies: undefined;
  MovieDetail: {id: string};
};

const MoviesStack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export function MoviesStackScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesStack.Navigator
        initialRouteName="Movies"
        screenOptions={{headerShown: true}}>
        <MoviesStack.Screen name="Movies" component={MoviesScreen} />
        <MoviesStack.Screen name="MovieDetail" component={MovieDetailScreen} />
      </MoviesStack.Navigator>
    </QueryClientProvider>
  );
}
