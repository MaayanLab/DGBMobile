'use strict';

import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Button,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';
import Store from 'DGBMobile/src/Stores/store';
import GeneSearchMatchItem from 'DGBMobile/src/Components/GeneSearchMatchItem';
import AppStyles from 'DGBMobile/src/styles';

import styles from './HomeScreenStyle';
import genesList from 'DGBMobile/src/resources/genes_list.json';
import dgbLogo from 'DGBMobile/src/resources/dgb_logo.png';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props, context) {
    super(props, context)
    this.store = Store;
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

  _goToExpression = (gene) => {
    this.store.setGene(gene)
    this.props.navigator.push('expression');
    // this.setState({ input: "" });
  }

  _renderSubTitle = () => {
    return (
      <View style={[styles.midFlex, AppStyles.containerCentered]}>
        <Text style={[AppStyles.defaultFont, AppStyles.paddingHorizontal, styles.paddingTop]}>
          Search for drugs to maximally change the expression of a target mammalian gene.
        </Text>
      </View>
    );
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
    // Perhaps remove next button and go forward when autocomplete is working.
    // Leave button there for now for simple navigation
    // Also add error handling
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
      <View style={[AppStyles.container, AppStyles.justifyCenter]} onLayout={this._onLayout}>
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
        <View style={[styles.formContainer, { justifyContent: userTyped ? 'center' : 'flex-start' }]}>
          <FormInput
            style={styles.formInput}
            placeholder="Which gene you would like to budge?"
            onChangeText={(input) => this.setState(
              {
                input: input.toUpperCase(),
                matchingGenes: this.returnMatchingGenes(genesList, input),
              }
            )}
            value={this.state.input}
          />
        </View>
        {
          userTyped ?
            <View style={[AppStyles.paddingHorizontal]}>
              {this.state.matchingGenes.map(gene =>
                <GeneSearchMatchItem
                  key={gene}
                  geneName={gene}
                  goToExpression={this._goToExpression}
                />
              )}
            </View> :
          null
        }
        {
          userTyped ?
          <View style={styles.bottomFlex} /> :
          (<View style={[styles.bottomFlex, styles.geneFormContainer]}>
            <Button
              raised
              iconRight
              title="Next"
              icon={{name: "keyboard-arrow-right"}}
              backgroundColor="#00c28a"
              onPress={this._goToExpression}
            />
          </View>)
        }
      </View>
    )
  }
}
