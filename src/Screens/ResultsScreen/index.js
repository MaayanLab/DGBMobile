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

export default class ResultsScreen extends Component {
  static route = {
    navigationBar: {
      title(params) {
        return `${params.geneName}`
      },
    }
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
        <View style={[AppStyles.flex1]}>
          <View style={AppStyles.flex1}>
            {
              displayResults.map(res => {
                return <Text key={res.pert_id}>{res.pert_id}</Text>
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
