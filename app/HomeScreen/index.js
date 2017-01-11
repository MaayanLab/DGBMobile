import React, { Component } from 'react';
import {
  AppRegistry,
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

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  _submitForm() {
    // Make post request here based on
    // state
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Gene Name</Text>
        <Text>Expression</Text>
        <Text>Dataset</Text>
        <Button title="Submit" onPress={() => console.log("Hello")}/>
      </View>
    )
  }
}
