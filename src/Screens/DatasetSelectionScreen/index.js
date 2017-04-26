'use strict';

import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import 'fetch-everywhere';

import { inject, observer } from 'mobx-react/native';
import styles from './DatasetSelectionScreenStyle';
import AppStyles from 'DGBMobile/src/styles';
import dgbLogo from 'DGBMobile/src/resources/dgb_logo.png';

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
      spinnerVisible: false,
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
      this.setState({spinnerVisible: true})
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
    const buttonOrientationClasses = [AppStyles.containerCentered, AppStyles.flex3, styles.regulationDirectionContainer];
    if (currHeight < currWidth) {
      buttonOrientationClasses.push(styles.landscape);
    }
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>
        <Spinner
          visible={this.state.spinnerVisible}
          textContent={"Loading..."}
          textStyle={{color: '#FFF'}}
        />
        <View style={[AppStyles.alignCenter, AppStyles.flex3, { justifyContent: 'center' }]}>
          <Image
            source={dgbLogo}
            style={[styles.logo]}
          />
          <Text style={[styles.title]}>
            Dr. Gene Budger
          </Text>
        </View>

        <View style={[AppStyles.alignCenter, AppStyles.flex1, { justifyContent: 'center' }]}>
          <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, AppStyles.paddingVertical, styles.question]}>
            Select dataset to query:
          </Text>
        </View>
        <View style={buttonOrientationClasses}>
          <Button
            raised
            large
            title="CREEDS: GEO Signatures"
            backgroundColor="#23a8ec"
            onPress={() => { this._goToResults() }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="LINCS L1000 Phase 1"
            backgroundColor="#23a8ec"
            onPress={() => { this._goToResults() }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="Original Connectivity Map 02"
            backgroundColor="#23a8ec"
            onPress={() => { this._goToResults() }}
            buttonStyle={styles.boxButton}
          />
        </View>
        <View style={[AppStyles.flex1, styles.navButtonContainer]}>
          <Button
            raised
            title="Back"
            icon={{name: 'keyboard-arrow-left'}}
            backgroundColor="#8e8e8e"
            onPress={this._goBackToExpression}
          />
        </View>
      </View>
    )
  }
}
