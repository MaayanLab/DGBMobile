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
import styles from './ResultsScreenStyle';
import AppStyles from '../../styles';

export default class ResultScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Dr. Gene Badger',
    // }
  }

  constructor(props, context) {
    super(props, context)
    this.store = Store;
  }

  _goToHome() {
    this.store.clearResults();
  }

  render() {
    const displayResults = this.store.results;

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
        <View style={[AppStyles.flex1]}>
          <View style={AppStyles.flex1}>
            <Text>Hi, this is the result.</Text>
          </View>
        </View>
      </View>
    )
  }
}
