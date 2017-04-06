'use strict';

import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import isEqual from 'lodash/isEqual';
import mobx from 'mobx';
import { inject, observer } from 'mobx-react/native';

import DrugResultItem from '../../Components/DrugResultItem';

import AppStyles from '../../styles';

@inject('store')
@observer
export default class DrugResultsContainer extends Component {
  constructor(props, context) {
    super(props, context)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });

    if (props.dataset === 'CREEDS') {
      const creedsData = mobx.toJS(props.store.results.creeds);
      this.dataSource = ds.cloneWithRows(creedsData);

    } else if (props.dataset === 'L1000') {
      const l1000Data = mobx.toJS(props.store.results.l1000);
      this.dataSource = ds.cloneWithRows(l1000Data);
    } else {
      const cmapData = mobx.toJS(props.store.results.cmap);
      this.dataSource = ds.cloneWithRows(cmapData);
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
