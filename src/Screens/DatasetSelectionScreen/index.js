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

  componentWillReact() {
    const internalState = this.props.store.internalState;
    const userInput = this.props.store.userInput;
    if (!internalState.fetching && userInput.dataset) {
      this.setState({spinnerVisible: false});
      // Not the best plan but works for now.
      setTimeout(() => {
        this.props.navigation.navigate('Results');
      }, 0);
    }
  }

  _goBackToExpression = () => {
    this.props.navigation.goBack();
  }

  _goToResults = (datasetInput) => {
    const internalState = this.props.store.internalState;
    const userInput = this.props.store.userInput;

    userInput.setDataset(datasetInput.toUpperCase());
    if (internalState.fetching) {
      // This is happening because spinner
      this.setState({spinnerVisible: true});
    } else {
      this.setState({spinnerVisible: false});
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
    const test = this.props.store.internalState.fetching;
    const buttonOrientationClasses = [AppStyles.containerCentered, AppStyles.flex3, styles.regulationDirectionContainer];
    if (currHeight < currWidth) {
      buttonOrientationClasses.push(styles.landscape);
    }
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>
        <Spinner
          visible={this.state.spinnerVisible}
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
            onPress={() => { this._goToResults('CREEDS: GEO Signatures') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="LINCS L1000 Phase I"
            backgroundColor="#23a8ec"
            onPress={() => { this._goToResults('LINCS L1000 Phase I') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="Affy Connectivity Map 02"
            backgroundColor="#23a8ec"
            onPress={() => { this._goToResults('Affy Connectivity Map 02') }}
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
