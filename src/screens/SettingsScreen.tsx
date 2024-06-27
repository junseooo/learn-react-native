import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {common} from '../styles';

type SettingsScreenNavigationProp = NavigationProp<ParamListBase>;

export function SettingsScreen({
  navigation,
}: {
  navigation: SettingsScreenNavigationProp;
}) {
  return (
    <View style={common.center}>
      <Text>Settings</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
