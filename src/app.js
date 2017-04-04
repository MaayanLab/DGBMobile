'use strict';

import React, { Component } from 'react';
import HomeScreen from './Screens/HomeScreen';
import ExpressionScreen from './Screens/ExpressionScreen';
import DatasetSelectionScreen from './Screens/DatasetSelectionScreen';
import ResultsScreen from './Screens/ResultsScreen';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  expression: () => ExpressionScreen,
  datasetSelection: () => DatasetSelectionScreen,
  results: () => ResultsScreen,
}));

export default class DGBMobile extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}
