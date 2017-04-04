'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ExpressionScreen from './Screens/ExpressionScreen';
import DatasetSelectionScreen from './Screens/DatasetSelectionScreen';
import ResultsScreen from './Screens/ResultsScreen';

const DGBMobile = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Expression: { screen: ExpressionScreen },
    DatasetSelection: { screen: DatasetSelectionScreen },
    Results: { screen: ResultsScreen },
  },
  { headerMode: 'screen' }
);

export default DGBMobile;
