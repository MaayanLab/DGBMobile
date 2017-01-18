'use strict';

import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import isEqual from 'lodash/isEqual';
import mobx from 'mobx';
import { SegmentedControls } from 'react-native-radio-buttons';
import Store from '../../Stores/store';

import DrugResultItem from '../../Components/DrugResultItem';

import styles from './ResultsScreenStyle';
import AppStyles from '../../styles';

const datasetOptions = ['CREEDS', 'L1000', 'Both'];
const expressionOptions = ['Up', 'Down'];

export default class ResultsScreen extends Component {
  static route = {
    navigationBar: {
      title(params) {
        return `${params.geneName}`
      },
    }
  }

  constructor(props, context) {
    // HelveticaNeue-Light,Helvetica-Light,HelveticaNeue,Helvetica,Arial,sans-serif
    super(props, context)
    this.store = Store;
    this.state = {
      results: this.store.results
    }
  }

  _goToHome() {
    this.store.clearResults();
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
    const creedsData = mobx.toJS(this.state.results.creeds);
    const l1000Data = mobx.toJS(this.state.results.l1000);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const creedsDataSource = ds.cloneWithRows(creedsData);
    const l1000DataSource = ds.cloneWithRows(l1000Data);

    return (
      <View style={[AppStyles.container, AppStyles.flex1, AppStyles.paddingHorizontal, AppStyles.paddingVertical]}>
        <SegmentedControls
          tint={'#00c28a'}
          selectedTint= {'white'}
          options={datasetOptions}
          onSelection={this._setDataset}
          selectedOption={this.store.dataset}
        />
        <View style={AppStyles.spacer_10} />
        <SegmentedControls
          tint={'#00bcd6'}
          selectedTint= {'white'}
          options={expressionOptions}
          onSelection={this._setExpression}
          selectedOption={this.store.expression}
        />
        <View style={AppStyles.spacer_10} />
        <Text>CREEDS</Text>
        <ListView
          dataSource={creedsDataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
        <Text>L1000</Text>
        <ListView
          dataSource={l1000DataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
      </View>
    );
  }
}
