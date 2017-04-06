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

import { inject, observer } from 'mobx-react/native';
import styles from './DatasetSelectionScreenStyle';
import AppStyles from 'DGBMobile/src/styles';

const { width, height } = Dimensions.get('window');

@inject('store')
@observer
export default class DatasetSelectionScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      layout: { height, width }
    }
  }

  _goBackToExpression = () => {
    this.props.navigation.goBack();
  }

  // _makeFetchAndGoToResults = () => {
  //   const { navigate } = this.props.navigation;
  //   const userInput = this.props.store.userInput;
  //   userInput.setDataset(dataset)
  //   // make fetch and navigate to resultsScreen when fetch is successful
  //   // otherwise show spinner
  //   const { gene, expression } = userInput;
  //   const bodyForm = { symbol: gene, expression, dataset };
  //   const url = 'https://amp.pharm.mssm.edu/DGB/api/v1/';
  //   fetch(url, {
  //     // credentials: 'include', //pass cookies, for authentication
  //     method: 'POST',
  //     headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(bodyForm),
  //   })
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(results => {
  //     userInput.setResults(results)
  //   })
  //   .then(() => {
  //     navigate('Results', { geneName: userInput.gene.toUpperCase() })
  //   })
  //   .catch(error => {
  //     console.log('There has been a problem with your fetch operation: ' + error.message);
  //    // ADD THIS THROW error
  //     throw error;
  //   });
  // }

  _goToResults = () => {
    const internalState = this.props.store.internalState;
    if (internalState.isFetching) {
      // load some spinner
    } else {
      this.props.navigation.navigate('Results');
    }
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
            onPress={() => { this._goToResults() }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="CREEDS"
            backgroundColor="#00bcd6"
            onPress={() => { this._goToResults() }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="CMAP"
            backgroundColor="#00bcd6"
            onPress={() => { this._goToResults() }}
            buttonStyle={styles.boxButton}
          />
        </View>
        <View style={[AppStyles.flex1, styles.navButtonContainer]}>
          <Button
            raised
            title="Back"
            icon={{name: 'keyboard-arrow-left'}}
            backgroundColor="#00c28a"
            onPress={this._goBackToExpression}
          />
        </View>
      </View>
    )
  }
}
