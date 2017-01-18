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
    // HelveticaNeue-Light,Helvetica-Light,HelveticaNeue,Helvetica,Arial,sans-serif
    super(props, context)
    this.store = Store;
    this.results = this.store.results;
  }

  _increaseTest() {
    this.store.increaseTest();
  }

  render() {
    const creedsData = mobx.toJS(this.results.creeds);
    const l1000Data = mobx.toJS(this.results.l1000);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const creedsDataSource = ds.cloneWithRows(creedsData);
    const l1000DataSource = ds.cloneWithRows(l1000Data);
    return (
      <View style={[AppStyles.container, AppStyles.flex1]}>
        <Text>{this.store.gene}</Text>
        <Text>{this.store.expression}</Text>
        <Text>{this.store.dataset}</Text>
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
