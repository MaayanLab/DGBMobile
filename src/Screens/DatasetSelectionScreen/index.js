'use strict';

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import 'fetch-everywhere';

import Store from 'DGBMobile/src/Stores/store';
import styles from './DatasetSelectionScreenStyle';
import AppStyles from 'DGBMobile/src/styles';

const { width, height } = Dimensions.get('window');

export default class DatasetSelectionScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props) {
    super(props);
    this.store = Store;
    this.state = {
      layout: { height, width }
    }
  }

  _goBackToExpression = () => {
    // this.props.navigator.pop();
  }

  _makeFetchAndGoToResults = (dataset) => {
    const { navigate } = this.props.navigation;
    this.store.setDataset(dataset)
    // make fetch and navigate to resultsScreen when fetch is successful
    // otherwise show spinner
    const { gene, expression } = this.store;
    const bodyForm = { symbol: gene, expression, dataset };
    const url = 'http://amp.pharm.mssm.edu/DGB/api/v1/';
    fetch(url, {
      // credentials: 'include', //pass cookies, for authentication
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyForm),
    })
    .then(response => {
      return response.json()
    })
    .then(results => {
      this.store.setResults(results)
    })
    .then(() => {
      navigate('Results', { geneName: this.store.gene.toUpperCase() })
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });
  }

  _onLayout = (event) => {
    this.setState({
      layout: {
        height: event.nativeEvent.layout.height,
        width: event.nativeEvent.layout.width,
      },
    });
  }


  render() {
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    const buttonOrientationClasses = [AppStyles.containerCentered, AppStyles.flex2, styles.regulationDirectionContainer];
    if (currHeight < currWidth) {
      buttonOrientationClasses.push(styles.landscape);
    }
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>
        <View style={[AppStyles.alignCenter, AppStyles.flex1, { justifyContent: 'flex-end' }]}>
          <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, AppStyles.paddingVertical, styles.question]}>
            Which dataset would you like to use?
          </Text>
        </View>
        <View style={buttonOrientationClasses}>
          <Button
            raised
            large
            title="L1000"
            backgroundColor="#00bcd6"
            onPress={() => { this._makeFetchAndGoToResults('L1000') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="CREEDS"
            backgroundColor="#00bcd6"
            onPress={() => { this._makeFetchAndGoToResults('CREEDS') }}
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
