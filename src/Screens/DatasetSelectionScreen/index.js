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

import Store from '../../Stores/store';
import styles from './DatasetSelectionScreen';
import AppStyles from '../../styles';

export default class HomeScreen extends Component {
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
    this.props.navigator.push('resultsScreen');
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
            onPress={this._goBackToExpression}
          />
        </View>
      </View>
    )
  }
}
