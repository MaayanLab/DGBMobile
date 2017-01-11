'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';

import styles from './ExpressionScreen';
import AppStyles from '../styles';

export default class HomeScreen extends Component {
  static route = {
    // navigationBar: {
    //   title: 'Dr. Gene Badger',
    // }
  }


  render() {
    return (
      <View style={[AppStyles.container, AppStyles.justifyCenter]}>
        <Text>Hello</Text>
      </View>
    )
  }
}
