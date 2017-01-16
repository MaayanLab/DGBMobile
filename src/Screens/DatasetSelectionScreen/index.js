'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import "isomorphic-fetch";

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

  _makeFetchAndGoToResults = (dataset) => {
    this.store.setDataset(dataset)
    // make fetch and navigate to resultsScreen when fetch is successful
    // otherwise show spinner
    // fetch("some website", post).then(something).then(
    //   this.props.navigator.push('results');
    // ).
    // 	"symbol": "akt1",
	  // "expression": "down",
	  // "dataset": "dks"
    const { gene, expression } = this.store;
    const bodyForm = { symbol: gene, expression, dataset };
    const url = 'http://127.0.0.1:5000/DGB/api/v1/';
    fetch(url, {
      // credentials: 'include', //pass cookies, for authentication
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(bodyForm),
    })
    .then(response => {
      debugger;
      return response.json()
    })
    .then(results => {
      this.store.setResults(results)
    })
    .then(() => { this.props.navigator.push('results') })
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
            onPress={() => { this._makeFetchAndGoToResults('L1000') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            title="CREEDS"
            icon={{name: "keyboard-arrow-down"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._makeFetchAndGoToResults('CREEDS') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            title="Both"
            icon={{name: "keyboard-arrow-down"}}
            backgroundColor="#00bcd6"
            onPress={() => { this._makeFetchAndGoToResults('Both') }}
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
