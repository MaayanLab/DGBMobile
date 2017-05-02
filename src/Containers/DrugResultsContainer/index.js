'use strict';

import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import isEqual from 'lodash/isEqual';
import mobx from 'mobx';
import { inject, observer } from 'mobx-react/native';

import DrugResultItem from '../../Components/DrugResultItem';
import styles from './DrugResultsContainerStyle';

import AppStyles from '../../styles';

@inject('store')
@observer
export default class DrugResultsContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const userInput = this.props.store.userInput;
    let dataSource, inputSet;
    if (this.props.dataset === 'CREEDS: GEO Signatures') {
      const creedsData = mobx.toJS(userInput.results.creeds);
      inputSet = 'creeds';
      dataSource = userInput.expression === 'UP' ?
        ds.cloneWithRows(creedsData.up):
        ds.cloneWithRows(creedsData.down);
    } else if (this.props.dataset === 'LINCS L1000 Phase 1') {
      inputSet = 'l1000';
      const l1000Data = mobx.toJS(userInput.results.l1000);
      dataSource = userInput.expression === 'UP' ?
        ds.cloneWithRows(l1000Data.up):
        ds.cloneWithRows(l1000Data.down);
    } else if (this.props.dataset === 'Original Connectivity Map 02') {
      inputSet = 'cmap';
      const cmapData = mobx.toJS(userInput.results.cmap);
      dataSource = userInput.expression === 'UP' ?
        ds.cloneWithRows(cmapData.up):
        ds.cloneWithRows(cmapData.down);
    } else {
      dataSource = ds.cloneWithRows([]);
    }

    return (
      <View style={[AppStyles.container, AppStyles.flex1, styles.marginTop]}>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => (
            <DrugResultItem
              inputSet={inputSet}
              navigation={this.props.navigation}
              entry={rowData}
            />)
          }
        />
      </View>
    );
  }
}
