'use strict';

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import AppStyles from 'DGBMobile/src/styles';
import styles from './GeneSearchMatchItemStyle';

export default function GeneSearchMatchItem(props) {
  const { geneName, makeFetchAndGoToExpression } = props;

  return (
    <TouchableOpacity
      style={styles.touchContainer}
      onPress={() => makeFetchAndGoToExpression(geneName)}
    >
      <Text>{geneName}</Text>
    </TouchableOpacity>
  );
}
