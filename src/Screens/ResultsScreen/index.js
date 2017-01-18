'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import Store from '../../Stores/store';

import DrugResultContainer from '../../Containers/DrugResultsContainer'

import styles from './ResultsScreenStyle';
import AppStyles from '../../styles';

const datasetOptions = ['CREEDS', 'L1000', 'Both'];
const expressionMapping = {
  'Up-Regulated': 'Up',
  'Down-Regulated': 'Down',
  'Down': 'Down-Regulated',
  'Up': 'Up-Regulated',
};

export default class ResultsScreen extends Component {
  // static route = {
  //   navigationBar: {
  //     title(params) {
  //       return `${params.geneName}`
  //     },
  //   }
  // }

  constructor(props, context) {
    // HelveticaNeue-Light,Helvetica-Light,HelveticaNeue,Helvetica,Arial,sans-serif
    super(props, context)
    this.store = Store;
  }

  _setDataset = (dataset) => {
    if (this.store.dataset !== dataset) {
      this.store.setDataset(dataset);
    }
  }

  _setExpression = (expression) => {
    if (this.store.expression !== expression) {
      this.store.setExpression(expression);
    }
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.flex1]}>
        <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVertical]}>
          <View style={AppStyles.spacer_5} />
          <SegmentedControls
            tint={'#00c28a'}
            selectedTint= {'white'}
            options={datasetOptions}
            onSelection={this._setDataset}
            selectedOption={this.store.dataset}
          />
          <View style={AppStyles.spacer_5} />
          <SegmentedControls
            tint={'#00bcd6'}
            selectedTint= {'white'}
            options={['Up-Regulated', 'Down-Regulated']}
            onSelection={(exp) => this._setExpression(expressionMapping[exp])}
            selectedOption={expressionMapping[this.store.expression]}
          />
          <View style={AppStyles.spacer_5} />
        </View>
        <DrugResultContainer />
      </View>
    );
  }
}
