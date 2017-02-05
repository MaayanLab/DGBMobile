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
import styles from './ExpressionScreenStyle';
import AppStyles from '../../styles';

export default class ExpressionScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Drug-Gene Badger',
    // }
  }

  constructor(props) {
    super(props);
    this.store = Store;
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }

  _setExpressionAndGoToDataSelection = (direction) => {
    this.store.setExpression(direction)
    this.props.navigator.push('datasetSelection');
  }

  render() {
    const geneName = this.store.gene;
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <View style={[AppStyles.alignCenter, AppStyles.flex1, { justifyContent: 'flex-end' }]}>
          <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, AppStyles.paddingVertical, styles.question]}>
            How would you like {`${geneName}`} to be affected?
          </Text>
        </View>
        <View style={[AppStyles.containerCentered, AppStyles.flex2, styles.regulationDirectionContainer]}>
          <Button
            raised
            title="Up"
            icon={{name: "keyboard-arrow-up"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._setExpressionAndGoToDataSelection('Up') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            title="Down"
            icon={{name: "keyboard-arrow-down"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._setExpressionAndGoToDataSelection('Down') }}
            buttonStyle={styles.boxButton}
          />
        </View>
        <View style={[AppStyles.flex1, styles.navButtonContainer]}>
          <Button
            raised
            title="Back"
            icon={{name: "keyboard-arrow-left"}}
            backgroundColor="#00c28a"
            onPress={this._goBackHome}
          />
        </View>
      </View>
    )
  }
}
