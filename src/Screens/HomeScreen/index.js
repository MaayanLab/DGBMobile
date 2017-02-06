'use strict';

import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import dgbLogo from '../../resources/dgb_logo.png';
import Store from '../../Stores/store';
import styles from './HomeScreenStyle';
import AppStyles from '../../styles';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Drug-Gene Badger',
    // }
  }

  constructor(props, context) {
    super(props, context)
    this.store = Store;
    this.state = {
      input: '',
      layout: { height, width },
    }
  }

  _goToExpression = () => {
    const gene = this.state.input;
    this.store.setGene(gene)
    this.props.navigator.push('expression');
  }

  _renderSubTitle = () => {
    return (
      <View style={[styles.midFlex, AppStyles.containerCentered]}>
        <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, styles.paddingTop]}>
          Search for drugs to maximally change the expression of a target mammalian gene.
        </Text>
      </View>
    );
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
    // Perhaps remove next button and go forward when autocomplete is working.
    // Leave button there for now for simple navigation
    // Also add error handling
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;

    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>
        <View style={[styles.topFlex, AppStyles.containerCentered, AppStyles.justifyBottom]}>
          <Image
            source={dgbLogo}
            style={styles.logo}
          />
          <Text style={[styles.title]}>
            Dr. Gene Budger
          </Text>
        </View>
        {
          currHeight > currWidth  ?
          (<View style={[styles.midFlex, AppStyles.containerCentered]}>
            <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, styles.paddingTop]}>
              Search for drugs to maximally change the expression of a target mammalian gene.
            </Text>
          </View>) :
          null
        }
        <View style={[styles.bottomFlex, styles.geneFormContainer]}>
          <View>
            <FormLabel>Gene Symbol</FormLabel>
            <FormInput
              style={styles.formInput}
              placeholder="Which gene you would like to budge?"
              onChangeText={(input) => this.setState({input: input.toUpperCase()})}
              value={this.state.input}
            />
          </View>
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
    )
  }
}
