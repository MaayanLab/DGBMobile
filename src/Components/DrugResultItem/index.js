'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import Accordion from 'react-native-accordion';

import AppStyles from '../../styles';

export default function DrugResultItem(props) {
  const resultItem = JSON.parse(props.entry);
  const { signature } = resultItem;
  const header = (
    <View>
      <Text>
        {signature.drug_name} |
        {resultItem.p_value} |
        {resultItem.fold_change}
      </Text>
    </View>
  );

  const content = (
    <View>
      <Text>This content is hidden in the accordion</Text>
    </View>
  );

  return (
    <Accordion
      header={header}
      content={content}
      duration={300}
      easing="easeOutCubic"
    />
  );
}
