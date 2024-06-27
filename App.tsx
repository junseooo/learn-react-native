import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {BottomTab} from './src/tabs';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaView>
  );
}
