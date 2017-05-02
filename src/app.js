'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import codePush from 'react-native-code-push';

import store from './Stores';
import HomeScreen from './Screens/HomeScreen';
import ExpressionScreen from './Screens/ExpressionScreen';
import DatasetSelectionScreen from './Screens/DatasetSelectionScreen';
import ResultsScreen from './Screens/ResultsScreen';
import WebViewContainer from './Screens/WebViewContainer';

let codePushOptions = {};

const AppWithRoutes = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Expression: { screen: ExpressionScreen },
    DatasetSelection: { screen: DatasetSelectionScreen },
    Results: { screen: ResultsScreen },
    WebViewContainer: { screen: WebViewContainer },
  },
  { headerMode: 'screen' } // Allows removal of header
);

@codePush
class DGBMobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithRoutes />
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(DGBMobile);
