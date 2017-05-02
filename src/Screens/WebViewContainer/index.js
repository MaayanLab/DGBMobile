import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewContainer extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { uri } = this.props.navigation.state.params;
    return (
      <WebView source={{ uri }} />
    );
  }
}
