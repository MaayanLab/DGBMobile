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

import styles from './DatasetSelectionScreen';
import AppStyles from '../styles';

export default class HomeScreen extends Component {
  static route = {
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <View style={[AppStyles.containerCentered, AppStyles.flex3, styles.regulationDirectionContainer]}>
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
