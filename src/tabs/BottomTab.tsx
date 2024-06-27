import 'react-native-gesture-handler';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ContactsScreen, HomeScreen, MoviesScreen} from '../screens';
import {SettingsStackScreen} from '../stacks';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Grid"
        component={MoviesScreen}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="movie" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
