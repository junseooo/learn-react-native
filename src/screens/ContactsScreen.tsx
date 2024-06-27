import * as React from 'react';
import {SectionList, Text, View} from 'react-native';
import {contact} from '../styles';

export function ContactsScreen() {
  return (
    <View style={contact.container}>
      <SectionList
        sections={[
          {title: 'A', data: ['A1', 'A2']},
          {title: 'B', data: ['B1', 'B2']},
          {title: 'C', data: ['C1', 'C2']},
          {title: 'D', data: ['D1', 'D2']},
          {title: 'E', data: ['E1', 'E2']},
          {title: 'F', data: ['F1', 'F2']},
          {title: 'G', data: ['G1', 'G2']},
          {title: 'H', data: ['H1', 'H2']},
        ]}
        renderItem={({item}) => <Text style={contact.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={contact.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
}
