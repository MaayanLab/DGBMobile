'use strict';

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import AppStyles from 'DGBMobile/src/styles';
import styles from './GeneSearchMatchItem';

export default function GeneSearchMatchItem(props) {
  const { geneName, goToExpression } = props;

  return (
    <TouchableOpacity
      style={styles.touchContainer}
      onPress={() => goToExpression(geneName)}
    >
      <Text>{geneName}</Text>
    </TouchableOpacity>
  );
}
