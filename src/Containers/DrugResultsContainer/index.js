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
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const userInput = this.props.store.userInput;
    let dataSource;
    if (this.props.dataset === 'CREEDS') {
      const creedsData = mobx.toJS(userInput.results.creeds);
      dataSource = userInput.expression === 'UP' ?
        ds.cloneWithRows(creedsData.up):
        ds.cloneWithRows(creedsData.down);
    } else if (this.props.dataset === 'L1000') {
      const l1000Data = mobx.toJS(userInput.results.l1000);
      dataSource = userInput.expression === 'UP' ?
        ds.cloneWithRows(l1000Data.up):
        ds.cloneWithRows(l1000Data.down);
    } else {
      const cmapData = mobx.toJS(userInput.results.cmap);
      dataSource = userInput.expression === 'UP' ?
        ds.cloneWithRows(cmapData.up):
        ds.cloneWithRows(cmapData.down);
    }
    console.log("rerendering");
    return (
      <View style={[AppStyles.container, AppStyles.flex1]}>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
      </View>
    );
  }
}
