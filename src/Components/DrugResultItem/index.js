'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import Accordion from 'react-native-accordion';

import AppStyles from '../../styles';
import styles from './DrugResultItemStyle';

export default function DrugResultItem(props) {
  const resultItem = JSON.parse(props.entry);
  const { signature } = resultItem;
  const mainContent = (
    <View style={[AppStyles.paddingHorizontal, styles.box]}>
      <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
      <Text style={[AppStyles.defaultFontLight, styles.pVal]}>p-value: {resultItem.p_value}</Text>
    </View>
  );

  const hiddenContent = (
    <View style={[styles.hiddenAccordion, styles.paddingHorizontal25]}>
      {
        resultItem.q_value &&
        <Text style={[AppStyles.defaultFontLight]}>q-value: {resultItem.q_value}</Text>
      }
      {
        resultItem.signature.cell_name &&
        <Text style={[AppStyles.defaultFontLight]}>cell-line: {resultItem.signature.cell_name}</Text>
      }
      {
        resultItem.fold_change &&
        <Text style={[AppStyles.defaultFontLight]}>fold-change: {resultItem.fold_change}</Text>
      }
      {
        resultItem.signature.pert_time && resultItem.signature.pert_time_unit &&
        <Text style={[AppStyles.defaultFontLight]}>
          pert-time: {resultItem.signature.pert_time} {resultItem.signature.pert_time_unit}
        </Text>
      }
      {
        resultItem.signature.pert_dose && resultItem.signature.pert_dose_unit &&
        <Text style={[AppStyles.defaultFontLight]}>
          pert-dose: {resultItem.signature.pert_dose} {resultItem.signature.pert_dose_unit}
        </Text>
      }
    </View>
  );

  return (
    <Accordion
      header={mainContent}
      content={hiddenContent}
      duration={300}
      easing="easeOutCubic"
    />
  );
}
