'use strict';

import React, { Component } from 'react';
import HomeScreen from './Screens/HomeScreen';
import ExpressionScreen from './Screens/ExpressionScreen';
import DatasetSelectionScreen from './Screens/DatasetSelectionScreen';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  expression: () => ExpressionScreen,
  datasetSelection: () => DatasetSelectionScreen,
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
