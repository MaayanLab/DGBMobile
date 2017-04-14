'use strict';

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import Swiper from 'react-native-swiper';

import { inject, observer } from 'mobx-react/native';
import DrugResultContainer from 'DGBMobile/src/Containers/DrugResultsContainer'

import styles from './ResultsScreenStyle';
import AppStyles from 'DGBMobile/src/styles';

const datasetOptions = {
  CREEDS: {
    dataset: 'CREEDS',
    backgroundColor: '#C39BD3',
  },
  L1000: {
    dataset: 'L1000',
    backgroundColor: '#82E0AA',
  },
  CMAP: {
    dataset: 'CMAP',
    backgroundColor: '#85C1E9',
  },
};
const expressionMapping = {
  'Up-Regulated': 'UP',
  'Down-Regulated': 'DOWN',
  'DOWN': 'Down-Regulated',
  'UP': 'Up-Regulated',
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
    const userInput = this.props.store.userInput;
    if (userInput.dataset !== dataset) {
      userInput.setDataset(dataset);
    }
  }

  _setExpression = (expression) => {
    const userInput = this.props.store.userInput;
    console.log("changing expression to ", expression);
    if (userInput.expression !== expression) {
      userInput.setExpression(expression);
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
    const store = this.props.store;
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    const swiperOrientationStyle = [
      AppStyles.paddingHorizontal,
      {width: currWidth, height: currHeight, paddingTop: 10, paddingBottom: 20},
    ];
    return (
      <View>
        <Swiper showButtons={false} loop={false}>
          {
            Object.keys(datasetOptions).map(datasetObjKey => {
              const datasetObj = datasetOptions[datasetObjKey];
              return (
                <View
                  key={datasetObj.dataset}
                  style={[styles.slide,
                  { backgroundColor: datasetObj.backgroundColor}]}
                >
                  <View style={swiperOrientationStyle} level={-10}>
                    <View style={styles.headerWrap}>
                      <Text style={styles.text}>{datasetObj.dataset}</Text>
                      <Text style={[styles.text, styles.gene]}>{store.userInput.gene}</Text>
                    </View>
                    <SegmentedControls
                      tint={'#00bcd6'}
                      selectedTint= {'white'}
                      options={['Up-Regulated', 'Down-Regulated']}
                      onSelection={(exp) => this._setExpression(expressionMapping[exp])}
                      selectedOption={expressionMapping[store.userInput.expression]}
                    />
                  <DrugResultContainer dataset={datasetObj.dataset} />
                  </View>
                </View>
              )
            })
          }
        </Swiper>
      </View>
    );
  }
}
