import React from 'react';
import { View, Text } from 'react-native';
import Accordion from 'react-native-accordion';

import AppStyles from '../../styles';

export default function DrugResultItem(props) {
  const resultItem = props.entry;

  const header = (
    <View style={AppStyles.flex1}>
      <Text>Click to Expand</Text>
    </View>
  );

  const content = (
    <View style={AppStyles.flex1}>
      <Text>This content is hidden in the accordion</Text>
    </View>
  );

  // <Accordion
  //   header={header}
  //   content={content}
  //   duration={300}
  //   easing="easeOutCubic"
  // />
  debugger;
  return (
    <Text style={AppStyles.flex1}>
      Hello
    </Text>
  );
}
