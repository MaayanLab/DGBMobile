'use strict';

import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';

import { inject, observer } from 'mobx-react/native';
import styles from './ExpressionScreenStyle';
import AppStyles from 'DGBMobile/src/styles';
import dgbLogo from 'DGBMobile/src/resources/dgb_logo.png';

const { width, height } = Dimensions.get('window');

@inject('store')
@observer
export default class ExpressionScreen extends Component {
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

  _goBackHome = () => {
    this.props.navigation.goBack();
  }

  _setExpressionAndGoToDataSelection = (direction) => {
    const { navigate } = this.props.navigation;
    const userInput = this.props.store.userInput;
    userInput.setExpression(direction.toUpperCase());
    navigate('DatasetSelection');
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
    const geneName = this.props.store.userInput.gene;
    const buttonOrientationClasses = [AppStyles.containerCentered, AppStyles.flex3, styles.regulationDirectionContainer];
    if (currHeight < currWidth) {
      buttonOrientationClasses.push(styles.landscape);
    }
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>

        <View style={[AppStyles.alignCenter, AppStyles.flex3, { justifyContent: 'center' }]}>
          <Image
            source={dgbLogo}
            style={[styles.logo]}
          />
          <Text style={[styles.title]}>
            Dr. Gene Budger
          </Text>
        </View>

        <View style={[AppStyles.alignCenter, AppStyles.flex1, { justifyContent: 'flex-end' }]}>
          <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, AppStyles.paddingVertical, styles.question]}>
            In which direction to budge {`${geneName}`}?
          </Text>
        </View>
        <View style={buttonOrientationClasses}>
          <Button
            raised
            large
            title="Up"
            icon={{name: "keyboard-arrow-up", size: 55, style: {marginRight: 0} }}
            backgroundColor="#23a8ec"
            onPress={() => { this._setExpressionAndGoToDataSelection('Up') }}
            buttonStyle={styles.boxButton}
          />
          <Button
            raised
            large
            title="Down"
            icon={{name: "keyboard-arrow-down", size: 55, style: {marginRight: 0} }}
            backgroundColor="#23a8ec"
            onPress={() => { this._setExpressionAndGoToDataSelection('Down') }}
            buttonStyle={styles.boxButton}
          />
        </View>
        <View style={[AppStyles.flex1, styles.navButtonContainer]}>
          <Button
            raised
            title="Back"
            icon={{name: "keyboard-arrow-left"}}
            backgroundColor="#8e8e8e"
            onPress={this._goBackHome}
          />
        </View>
      </View>
    )
  }
}
