'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';

import styles from './ExpressionScreen';
import AppStyles from '../styles';

export default class HomeScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Dr. Gene Badger',
    // }
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }

  _goToDatasetSelection = () => {
    this.props.navigator.push('datasetSelection');
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <View style={[AppStyles.containerCentered, AppStyles.flex3, styles.regulationDirectionContainer]}>
          <Button
            raised
            title="Up"
            icon={{name: "keyboard-arrow-up"}}
            backgroundColor="#00bcd6"
            onPress={this._goToDatasetSelection}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            title="Down"
            icon={{name: "keyboard-arrow-down"}}
            backgroundColor="#00bcd6"
            onPress={this._goToDatasetSelection}
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
