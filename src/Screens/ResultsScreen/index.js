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

export default class ResultScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Dr. Gene Badger',
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
        <View style={[AppStyles.flex1, AppStyles.containerCentered]}>
          <Icon
            size={100}
            name="face"
            color="#00bcd6"
            style={styles.next}
          />
        </View>
        <View style={[AppStyles.flex1, styles.geneFormContainer]}>
          <View style={AppStyles.flex1}>
            <FormLabel>Gene Symbol</FormLabel>
            <FormInput
              style={styles.formInput}
              placeholder="Enter a gene symbol e.g. AKT1."
              onChangeText={(input) => this.setState({input: input})}
              value={this.state.input}
            />
          </View>
          <View style={[AppStyles.flex1, AppStyles.justifyCenter]}>
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
      </View>
    )
  }
}
