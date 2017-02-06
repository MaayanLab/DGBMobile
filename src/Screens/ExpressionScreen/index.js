'use strict';

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';

import Store from '../../Stores/store';
import styles from './ExpressionScreenStyle';
import AppStyles from '../../styles';

const { width, height } = Dimensions.get('window');

export default class ExpressionScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Drug-Gene Badger',
    // }
  }

  constructor(props) {
    super(props);
    this.store = Store;
    this.state = {
      layout: { height, width }
    }
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }

  _setExpressionAndGoToDataSelection = (direction) => {
    this.store.setExpression(direction)
    this.props.navigator.push('datasetSelection');
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
    const geneName = this.store.gene;
    const buttonOrientationClasses = [AppStyles.containerCentered, AppStyles.flex2, styles.regulationDirectionContainer];
    if (currHeight < currWidth) {
      buttonOrientationClasses.push(styles.landscape);
    }
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>
        <View style={[AppStyles.alignCenter, AppStyles.flex1, { justifyContent: 'flex-end' }]}>
          <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, AppStyles.paddingVertical, styles.question]}>
            How would you like to affect {`${geneName}`}?
          </Text>
        </View>
        <View style={buttonOrientationClasses}>
          <Button
            raised
            large
            title="Up-Regulate"
            icon={{name: "keyboard-arrow-up", size: 55, style: {marginRight: 0} }}
            backgroundColor="#00bcd6"
            onPress={() => { this._setExpressionAndGoToDataSelection('Up') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="Down-Regulate"
            icon={{name: "keyboard-arrow-down", size: 55, style: {marginRight: 0} }}
            backgroundColor="#00bcd6"
            onPress={() => { this._setExpressionAndGoToDataSelection('Down') }}
            buttonStyle={styles.boxButton}
          />
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
