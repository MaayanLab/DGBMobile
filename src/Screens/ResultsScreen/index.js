'use strict';

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import Swiper from 'react-native-swiper';

import { inject, observer } from 'mobx-react/native';
import DrugResultContainer from 'DGBMobile/src/Containers/DrugResultsContainer'

import styles from './ResultsScreenStyle';
import AppStyles from 'DGBMobile/src/styles';

const datasetOptions = ['CREEDS', 'L1000', 'Both'];
const expressionMapping = {
  'Up-Regulated': 'Up',
  'Down-Regulated': 'Down',
  'Down': 'Down-Regulated',
  'Up': 'Up-Regulated',
};

const { width, height } = Dimensions.get('window');

@inject('store')
@observer
export default class ResultsScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props, context) {
    // HelveticaNeue-Light,Helvetica-Light,HelveticaNeue,Helvetica,Arial,sans-serif
    super(props, context)
    this.state = {
      layout: { height, width },
    }
  }

  _setDataset = (dataset) => {
    if (this.props.store.dataset !== dataset) {
      this.props.store.setDataset(dataset);
    }
  }

  _setExpression = (expression) => {
    if (this.props.store.expression !== expression) {
      this.props.store.setExpression(expression);
    }
  }

  _onLayout = (event) => {
    this.setState({
      layout: {
        height: event.nativeEvent.layout.height,
        width: event.nativeEvent.layout.width,
      },
    });
  }

  render() {
    // <View style={AppStyles.spacer_5} />
    // <SegmentedControls
    //   tint={'#00c28a'}
    //   selectedTint= {'white'}
    //   options={datasetOptions}
    //   onSelection={this._setDataset}
    //   selectedOption={this.props.store.dataset}
    // />
    const store = this.props.store;
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    const swiperOrientationStyle = [AppStyles.paddingHorizontal, AppStyles.paddingVertical, {width: currWidth, height: currHeight}];
    return (
      <View>
        <Swiper showButtons={false} loop={false}>
          <View style={[styles.slide, { backgroundColor: '#fa931d'}]}>
            <View style={swiperOrientationStyle} level={10}>
              <Text style={styles.text}>{this.props.geneName} | CREEDS</Text>
                <SegmentedControls
                  tint={'#00bcd6'}
                  selectedTint= {'white'}
                  options={['Up-Regulated', 'Down-Regulated']}
                  onSelection={(exp) => this._setExpression(expressionMapping[exp])}
                  selectedOption={expressionMapping[store.expression]}
                />
              <DrugResultContainer dataset="CREEDS" />
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: '#a4b602'}]}>
            <View style={swiperOrientationStyle} level={-10}>
              <Text style={styles.text}>{this.props.geneName} | L1000</Text>
                <SegmentedControls
                  tint={'#00bcd6'}
                  selectedTint= {'white'}
                  options={['Up-Regulated', 'Down-Regulated']}
                  onSelection={(exp) => this._setExpression(expressionMapping[exp])}
                  selectedOption={expressionMapping[store.expression]}
                />
              <DrugResultContainer dataset="L1000" />
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}
