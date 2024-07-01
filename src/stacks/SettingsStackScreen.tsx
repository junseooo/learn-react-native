import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, SettingsScreen} from '../screens';

const SettingsStack = createStackNavigator();

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerShown: true}}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
