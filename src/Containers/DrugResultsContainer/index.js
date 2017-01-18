'use strict';

import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import isEqual from 'lodash/isEqual';
import mobx from 'mobx';
import { observer } from 'mobx-react/native';
import Store from '../../Stores/store';

import DrugResultItem from '../../Components/DrugResultItem';

import AppStyles from '../../styles';

export default @observer class DrugResultsContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.store = Store;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const creedsData = mobx.toJS(Store.results.creeds);
    this.creedsDataSource = ds.cloneWithRows(creedsData);
    const l1000Data = mobx.toJS(Store.results.l1000);
    this.l1000DataSource = ds.cloneWithRows(l1000Data);
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.flex1]}>
        <Text>CREEDS</Text>
        <ListView
          dataSource={this.creedsDataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
        <Text>L1000</Text>
        <ListView
          dataSource={this.l1000DataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
      </View>
    );
  }
}
