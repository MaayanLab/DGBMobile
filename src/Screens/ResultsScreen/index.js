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

import Store from '../../Stores/store';

import DrugResultItem from '../../Components/DrugResultItem';

import styles from './ResultsScreenStyle';
import AppStyles from '../../styles';

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
    this.state = {
      results: Store.results.slice()
    }
  }

  _goToHome() {
    this.store.clearResults();
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !isEqual(r1, r2) });
    const dataSource = ds.cloneWithRows(this.state.results);
    debugger;
    return (
      <View style={[AppStyles.container, AppStyles.flex1]}>
        <Text>This is the reuslts screen</Text>
        <ListView
          dataSource={dataSource}
          renderRow={rowData => <DrugResultItem entry={rowData} />}
        />
      </View>
    );
  }
}
