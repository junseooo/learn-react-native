import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, MoviesScreen} from '../screens';

const MoviesStack = createStackNavigator();

export function MoviesStackScreen() {
  return (
    <MoviesStack.Navigator
      initialRouteName="Moives"
      screenOptions={{headerShown: true}}>
      <MoviesStack.Screen name="Movies" component={MoviesScreen} />
      <MoviesStack.Screen name="MovieDetails" component={DetailsScreen} />
    </MoviesStack.Navigator>
  );
}
