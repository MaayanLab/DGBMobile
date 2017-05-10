'use strict';

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { SegmentedControls } from 'react-native-radio-buttons';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

import { inject, observer } from 'mobx-react/native';
import DrugResultContainer from 'DGBMobile/src/Containers/DrugResultsContainer'

import styles from './ResultsScreenStyle';
import AppStyles from 'DGBMobile/src/styles';

const datasetsOptions = [
  {
    dataset: 'Affy Connectivity Map 02',
    backgroundColor: '#adb2b4',
  },
  {
    dataset: 'LINCS L1000 Phase I',
    backgroundColor: '#a2a9ac',
  },
  {
    dataset: 'CREEDS: GEO Signatures',
    backgroundColor: '#b4b8ba',
  },
];
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

  _visitHarm = (gene) => {
    const { navigate } = this.props.navigation;
    navigate('WebViewContainer',
      {uri: `http://amp.pharm.mssm.edu/Harmonizome/gene/${gene}`}
    );
  }

  orderDatasetDisplayOrder = (datasetList, targetDataset) => {
    const dsClone = datasetList.slice();
    const targetIdx = dsClone.findIndex(ds => (
      ds.dataset.toLowerCase() === targetDataset.toLowerCase()
    ));
    const splicedDs = dsClone.splice(targetIdx, 1);
    return [splicedDs[0], ...dsClone];
  }

  render() {
    const store = this.props.store;
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    const firstDataset = store.userInput.dataset;
    const datasets = this.orderDatasetDisplayOrder(datasetsOptions, firstDataset);
    const swiperOrientationStyle = [
      AppStyles.paddingHorizontal,
      {width: currWidth, height: currHeight, paddingTop: 10, paddingBottom: 20},
    ];
    const firstIdx = 0;
    const lastIdx = datasets.length - 1;
    return (
      <View>
        <Swiper showButtons={false} loop={false} >
          {
            datasets.map((datasetObj, idx) => {
              const first = idx === firstIdx;
              const last = idx === lastIdx;
              return (
                <View
                  key={datasetObj.dataset}
                  style={[styles.slide,
                  { backgroundColor: datasetObj.backgroundColor}]}
                >
                  <View style={swiperOrientationStyle} level={-10}>
                    <View style={styles.headerWrap}>
                      <View style={styles.arrowLeftContainer}>
                        {
                          !first && <Icon
                            name='caret-left'
                            size={40}
                            type='font-awesome'
                            color='#4892cf'
                          />
                        }
                      </View>
                      <View style={styles.innerHeaderWrap}>
                        <Text
                          style={[styles.text, styles.gene]}
                          onPress={() => this._visitHarm(store.userInput.gene)}
                        >
                          {store.userInput.gene}
                        </Text>
                        <Text style={styles.text}>{datasetObj.dataset}</Text>
                      </View>
                      <View style={styles.arrowRightContainer}>
                        {
                          !last && <Icon
                            name='caret-right'
                            size={50}
                            type='font-awesome'
                            color='#4892cf'
                          />
                        }
                      </View>
                    </View>
                    <SegmentedControls
                      tint={'#23a8ec'}
                      selectedTint= {'white'}
                      options={['Up-Regulated', 'Down-Regulated']}
                      onSelection={(exp) => this._setExpression(expressionMapping[exp])}
                      selectedOption={expressionMapping[store.userInput.expression]}
                    />
                    <DrugResultContainer navigation={this.props.navigation} dataset={datasetObj.dataset} />
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
