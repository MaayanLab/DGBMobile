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

    if (props.dataset === 'CREEDS') {
      const creedsData = mobx.toJS(Store.results.creeds);
      this.dataSource = ds.cloneWithRows(creedsData);

    } else {
      const l1000Data = mobx.toJS(Store.results.l1000);
      this.dataSource = ds.cloneWithRows(l1000Data);
    }
  }

  render() {
    return (
      <View style={[AppStyles.container, AppStyles.flex1]}>
        <ListView
          dataSource={this.dataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
      </View>
    );
  }
}
