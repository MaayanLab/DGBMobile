'use strict';

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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
    }
  }

  _goToExpression = () => {
    const gene = this.state.input;
    this.store.setGene(gene)
    this.props.navigator.push('expression');
  }

  render() {
    // Perhaps remove next button and go forward when autocomplete is working.
    // Leave button there for now for simple navigation
    // Also add error handling
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <View style={[styles.topFlex, AppStyles.containerCentered, AppStyles.justifyBottom]}>
          <Image
            source={dgbLogo}
            style={styles.logo}
          />
          <Text style={[styles.title]}>
            Dr. Gene Budger
          </Text>
          <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, styles.paddingTop]}>
            Search for drugs to maximally change the expression of a target mammalian gene.
          </Text>
        </View>
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
