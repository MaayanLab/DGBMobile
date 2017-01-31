'use strict';

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import Swiper from 'react-native-swiper';

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

const windows = Dimensions.get('window');

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
    // <View style={AppStyles.spacer_5} />
    // <SegmentedControls
    //   tint={'#00c28a'}
    //   selectedTint= {'white'}
    //   options={datasetOptions}
    //   onSelection={this._setDataset}
    //   selectedOption={this.store.dataset}
    // />
    return (
      <Swiper showButtons={false} loop={false}>
        <View style={[styles.slide, { backgroundColor: '#fa931d'}]}>
          <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVertical, {width: windows.width, height: windows.height}]} level={10}>
            <Text style={styles.text}>{this.props.geneName} | CREEDS</Text>
              <SegmentedControls
                tint={'#00bcd6'}
                selectedTint= {'white'}
                options={['Up-Regulated', 'Down-Regulated']}
                onSelection={(exp) => this._setExpression(expressionMapping[exp])}
                selectedOption={expressionMapping[this.store.expression]}
              />
            <DrugResultContainer dataset="CREEDS" />
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602'}]}>
          <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVertical, {width: windows.width, height: windows.height}]} level={-10}>
            <Text style={styles.text}>{this.props.geneName} | L1000</Text>
              <SegmentedControls
                tint={'#00bcd6'}
                selectedTint= {'white'}
                options={['Up-Regulated', 'Down-Regulated']}
                onSelection={(exp) => this._setExpression(expressionMapping[exp])}
                selectedOption={expressionMapping[this.store.expression]}
              />
            <DrugResultContainer dataset="L1000" />
          </View>
        </View>
      </Swiper>
    );
  }
}
