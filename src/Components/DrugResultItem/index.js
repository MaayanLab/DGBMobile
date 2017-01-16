import React from 'react';
import { View, Text } from 'react-native';

export default function DrugResultItem(props) {
  const resultItem = props.entry;
  return (
    <View>
      <Text>{ resultItem.pert_id }</Text>
    </View>
  );
}
