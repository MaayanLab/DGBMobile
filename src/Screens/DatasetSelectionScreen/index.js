'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';

import Store from '../../Stores/store';
import styles from './DatasetSelectionScreenStyle';
import AppStyles from '../../styles';

export default class DatasetSelectionScreen extends Component {
  static route = {
  }

  constructor(props) {
    super(props);
    this.store = Store;
  }

  _goBackToExpression = () => {
    this.props.navigator.pop();
  }

  _setDatasetAndGoToResults = (dataset) => {
    this.store.setDataset(dataset)
    this.props.navigator.push('results');
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <View style={[AppStyles.alignCenter, AppStyles.flex1, { justifyContent: 'flex-end' }]}>
          <Text style={[AppStyles.paddingHorizontal, AppStyles.paddingVertical, styles.question]}>
            Which dataset would you like to use?
          </Text>
        </View>
        <View style={[AppStyles.containerCentered, AppStyles.flex2, styles.regulationDirectionContainer]}>
          <Button
            raised
            title="L1000"
            icon={{name: "keyboard-arrow-up"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._setDatasetAndGoToResults('L1000') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            title="CREEDS"
            icon={{name: "keyboard-arrow-down"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._setDatasetAndGoToResults('CREEDS') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            title="Both"
            icon={{name: "keyboard-arrow-down"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._setDatasetAndGoToResults('Both') }}
            buttonStyle={styles.boxButton}
          />
        </View>
        <View style={[AppStyles.flex1, styles.navButtonContainer]}>
          <Button
            raised
            title="Back"
            icon={{name: "keyboard-arrow-left"}}
            backgroundColor="#00c28a"
            onPress={this._goBackToExpression}
          />
        </View>
      </View>
    )
  }
}
