'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';

import store from './Stores';
import HomeScreen from './Screens/HomeScreen';
import ExpressionScreen from './Screens/ExpressionScreen';
import DatasetSelectionScreen from './Screens/DatasetSelectionScreen';
import ResultsScreen from './Screens/ResultsScreen';

const DGBMobileWithNavigation = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Expression: { screen: ExpressionScreen },
    DatasetSelection: { screen: DatasetSelectionScreen },
    Results: { screen: ResultsScreen },
  },
  { headerMode: 'screen' }
);

class DGBMobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <DGBMobileWithNavigation />
      </Provider>
    )
  }
}

export default DGBMobile;
