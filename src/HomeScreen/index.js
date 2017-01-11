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

import styles from './HomeScreen';
import AppStyles from '../styles';

export default class HomeScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Dr. Gene Badger',
    // }
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      input: '',
      tos: false,
    }
  }

  _goToExpression = () => {
    this.props.navigator.push('expression');
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <View style={[AppStyles.flex1, AppStyles.containerCentered]}>
          <Icon
            size={100}
            name="face"
            color="#00bcd6"
            style={styles.next}
          />
        </View>
        <View style={[AppStyles.flex1, styles.geneFormContainer]}>
          <FormLabel>Gene Symbol</FormLabel>
          <FormInput
            style={styles.formInput}
            placeholder="Enter a gene symbol e.g. AKT1."
            onChangeText={(input) => this.setState({input: input})}
            value={this.state.input}
          />
          <View style={[AppStyles.flex1, AppStyles.justifyCenter]}>
            <Button
              raised
              iconRight
              title="Next"
              icon={{name: "keyboard-arrow-right"}}
              backgroundColor="#00c28a"
              onPress={this._goToExpression}
            />
          </View>
        </View>
      </View>
    )
  }
}
