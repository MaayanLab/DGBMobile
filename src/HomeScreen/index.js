'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Dr. Gene Badger',
    }
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      form: {
        fullName: 'Marco Polo',
        tos: false,
      }
    }
  }

  handleValueChange(values) {
    console.log('handleValueChange', values)
    this.setState({ form: values })
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}
