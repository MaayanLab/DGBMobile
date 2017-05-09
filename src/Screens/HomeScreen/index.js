'use strict';

import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StatusBar } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import GeneSearchMatchItem from 'DGBMobile/src/Components/GeneSearchMatchItem';
import AppStyles from 'DGBMobile/src/styles';

import styles from './HomeScreenStyle';
import genesList from 'DGBMobile/src/resources/genes_list.json';
import dgbLogo from 'DGBMobile/src/resources/dgb_logo.png';

const { width, height } = Dimensions.get('window');

@inject('store')
@observer
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      input: '',
      layout: { height, width },
      matchingGenes: [],
    }
  }

  returnMatchingGenes = (genesList, targetGeneString) => {
    const input = targetGeneString.replace(/\./g, '\\\.').replace('\\', '\\\\');
    let inpRegEx;
    try {
      inpRegEx = new RegExp(input, 'i');
    } catch(e) {
      console.log(e);
      return [];
    }
    const matches = [];
    const maxResults = 6;
    for (let i = 0; i < genesList.length; i++) {
      const currGene = genesList[i];
      if (inpRegEx.test(currGene) && input.length) {
        matches.push(currGene);
      }
      if (matches.length >= maxResults) {
        return matches;
      }
    }
    return matches;
  }

  _makeFetch = (gene) => {
    const { userInput, internalState } = this.props.store;
    const bodyForm = { symbol: gene };
    const url = 'http://localhost:5000/DGB/api/v1/';
    userInput.setGene(gene)
    internalState.beginFetch()
    fetch(url, {
      // credentials: 'include', //pass cookies, for authentication
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyForm),
    })
    .then(response => {
      return response.json();
    })
    .then(results => {
      userInput.setResults(results);
      internalState.endFetch();
      console.log("Fetch success")
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });
  }

  _goToExpression = (gene) => {
    const { navigate } = this.props.navigation;
    const userInput = this.props.store.userInput;
    // userInput.setGene(gene)
    navigate('Expression');
    this.setState({ input: "" });
  }

  _makeFetchAndGoToExpression = (gene) => {
    this._makeFetch(gene);
    this._goToExpression(gene);
  }

  // _renderSubTitle = () => {
  //   return (
  //     <View style={[styles.midFlex, AppStyles.containerCentered]}>
  //       <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, styles.paddingTop]}>
  //         Search for drugs to maximally change the expression of a target mammalian gene.
  //       </Text>
  //     </View>
  //   );
  // }

  _onLayout = (event) => {
    this.setState({
      layout: {
        height: event.nativeEvent.layout.height,
        width: event.nativeEvent.layout.width,
      },
    });
  }

  render() {
    // Add error handling
    const currHeight = this.state.layout.height;
    const currWidth = this.state.layout.width;
    // {
    //   currHeight > currWidth  ?
    //   (<Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, styles.paddingTop]}>
    //     Search for drugs to maximally change the expression of a target mammalian gene.
    //   </Text>) :
    //   null
    // }
    const userTyped = this.state.input.length > 0;
    return (
      <View style={[AppStyles.container]} onLayout={this._onLayout}>
        <StatusBar hidden />
        {
          userTyped ?
          null :
          (<View
              style={[styles.topFlex, AppStyles.containerCentered, AppStyles.justifyBottom]}
            >
            <Image
              source={dgbLogo}
              style={[styles.logo]}
            />
            <Text style={[styles.title]}>
              Dr. Gene Budger
            </Text>
          </View>)
        }
        <View style={[
            styles.formContainer,
            {
              justifyContent: 'flex-start',
              flex: userTyped ? 0 : 1,
            }
        ]}>
          <FormInput
            style={styles.formInput}
            placeholder="Enter gene to budge here..."
            onChangeText={(input) => this.setState(
              {
                input: input.toUpperCase(),
                matchingGenes: this.returnMatchingGenes(genesList, input),
              }
            )}
            value={this.state.input}
          />
          {
            userTyped ?
            null :
            <View>
              <View style={AppStyles.spacer_20} />
              <Text style={styles.text}>Example Searches</Text>

              <View style={styles.exampleSearches}>
                <Text
                  style={[styles.text, styles.sample]}
                  onPress={() => this._makeFetchAndGoToExpression('AKT1')}
                >
                  AKT1
                </Text>
                <Text
                  style={[styles.text, styles.sample]}
                  onPress={() => this._makeFetchAndGoToExpression('RNF14')}
                >
                  RNF14
                </Text>
                <Text
                  style={[styles.text, styles.sample]}
                  onPress={() => this._makeFetchAndGoToExpression('STAT3')}
                >
                  STAT3
                </Text>
              </View>
            </View>
          }
        </View>
        {
          userTyped ?
            <View style={[AppStyles.paddingHorizontal]}>
              {this.state.matchingGenes.map(gene =>
                <GeneSearchMatchItem
                  key={gene}
                  geneName={gene}
                  makeFetchAndGoToExpression={this._makeFetchAndGoToExpression}
                />
              )}
            </View> :
          null
        }
      </View>
    )
  }
}
