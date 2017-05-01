'use strict';

import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import Accordion from 'react-native-accordion';
import { Button, Icon } from 'react-native-elements';

import AppStyles from '../../styles';
import styles from './DrugResultItemStyle';

export default class DrugResultItem extends Component {
  constructor(props) {
    super(props);
  }

  // goToWebView() {
    // const { navigate } = this.props.navigation;
    // navigate('DatasetSelection');
    //
    // <WebView
    //   source={{uri: 'https://github.com/facebook/react-native'}}
    //   style={{marginTop: 20}}
    // />
  // }

  render() {
    const resultItem = JSON.parse(this.props.entry);
    const { signature } = resultItem;
    const mainContent = (
      <View style={[AppStyles.paddingHorizontal, styles.box]}>
        <View style={styles.drugInfo}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, styles.pVal]}>p-value: {resultItem.p_value}</Text>
        </View>
        <Button
          raised
          icon={{name: 'home', size: 10}}
          buttonStyle={{backgroundColor: 'grey', borderRadius: 5, width: 20}}
          textStyle={{textAlign: 'center'}}
          title={`Info`}
        />
      </View>
    );

    const hiddenContent = (
      <View style={[styles.hiddenAccordion, styles.paddingHorizontal25]}>
        {
          (resultItem.q_value || resultItem.q_value === 0) &&
          <Text style={[AppStyles.defaultFontLight]}>q-value: {resultItem.q_value}</Text>
        }
        {
          resultItem.signature && resultItem.signature.cell_name &&
          <Text style={[AppStyles.defaultFontLight]}>cell-line: {resultItem.signature.cell_name}</Text>
        }
        {
          (resultItem.fold_change || resultItem.fold_change === 0) &&
          <Text style={[AppStyles.defaultFontLight]}>fold-change: {resultItem.fold_change}</Text>
        }
        {
          (resultItem.signature.pert_time || resultItem.signature.pert_time === 0) &&
          resultItem.signature.pert_time_unit &&
          <Text style={[AppStyles.defaultFontLight]}>
            pert-time: {resultItem.signature.pert_time} {resultItem.signature.pert_time_unit}
          </Text>
        }
        {
          (resultItem.signature.pert_dose || resultItem.signature.pert_dose === 0) &&
          resultItem.signature.pert_dose_unit &&
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
}
