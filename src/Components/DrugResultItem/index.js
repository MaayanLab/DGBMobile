'use strict';

import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import Accordion from 'react-native-accordion';
import { Icon } from 'react-native-elements';

import AppStyles from '../../styles';
import styles from './DrugResultItemStyle';

export default class DrugResultItem extends Component {
  constructor(props) {
    super(props);
  }

  _goToDMOA(pert_id) {
    const { navigate } = this.props.navigation;
    const uri = `http://amp.pharm.mssm.edu/dmoa/report/${pert_id}`;
    navigate('WebViewContainer',
      { uri }
    );
  }

  _goToDrugBank(drugbank_id) {
    const { navigate } = this.props.navigation;
    navigate('WebViewContainer',
      {uri: `https://www.drugbank.ca/drugs/${drugbank_id}`}
    );
  }

  // https://www.drugbank.ca/drugs/DB00783

  _renderCreedsMainContent(resultItem) {
    const { signature } = resultItem;
    let buttonPress, buttonColor;
    if (signature.drugbank_id === null) {
      buttonPress = null;
      buttonColor = 'gray';
    } else {
      buttonPress = () => this._goToDrugBank(signature.drugbank_id);
      buttonColor = '#00aced';
    }

    return (
      <View style={styles.box}>
        <View style={[AppStyles.flex1, AppStyles.alignCenter]}>
          <Icon
            raised
            reverse
            name='info'
            type='font-awesome'
            size={10}
            color={buttonColor}
            textStyle={{textAlign: 'right'}}
            onPress={buttonPress}
          />
      </View>
      <View style={[styles.padLeft10, AppStyles.flex6]}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, AppStyles.flex1]}>
            <Text style={styles.property}>p-value:</Text>&nbsp;
            {resultItem.p_value.toExponential(3)}
          </Text>
        </View>
      </View>
    );
  }

  _renderCreedsHiddenContent(resultItem) {
    const { signature } = resultItem;
    return (
      <View style={[styles.hiddenAccordion, styles.paddingHorizontal25]}>
        {
          (resultItem.q_value || resultItem.q_value === 0) &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>q-value:</Text>&nbsp;
            {resultItem.q_value.toExponential(3)}
          </Text>
        }
        {
          (resultItem.fold_change || resultItem.fold_change === 0) &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>fold-change:</Text>&nbsp;
            {resultItem.fold_change.toFixed(3)}
          </Text>
        }
      </View>
    );
  }

  _renderCmapMainContent(resultItem) {
    const { signature } = resultItem;
    return (
      <View style={styles.box}>
        {
          // <Icon
          //   raised
          //   reverse
          //   name='info'
          //   type='font-awesome'
          //   size={10}
          //   color='#00aced'
          //   textStyle={{textAlign: 'right'}}
          //   onPress={() => this._goToAboutDrug(signature.drug_name, signature.pert_id)}
          // />
        }
        <View style={[styles.padLeft10, AppStyles.flex6]}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, AppStyles.flex1]}>
            <Text style={styles.property}>p-value:</Text>&nbsp;
            {resultItem.p_value.toExponential(3)}
          </Text>
        </View>
      </View>
    );
  }

  _renderCmapHiddenContent(resultItem) {
    const { signature } = resultItem;
    return (
      <View style={[styles.hiddenAccordion, styles.paddingHorizontal25]}>
        {
          (resultItem.q_value || resultItem.q_value === 0) &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>q-value:</Text>&nbsp;
            {resultItem.q_value.toExponential(3)}
          </Text>
        }
        {
          resultItem.signature && resultItem.signature.cell_name &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>cell-line:</Text>&nbsp;
            {resultItem.signature.cell_name}
          </Text>
        }
        {
          (resultItem.fold_change || resultItem.fold_change === 0) &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>fold-change:</Text>&nbsp;
            {resultItem.fold_change.toFixed(3)}
          </Text>
        }
        {
          (resultItem.signature.pert_time || resultItem.signature.pert_time === 0) &&
          resultItem.signature.pert_time_unit &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>pert-time:</Text>&nbsp;
            {resultItem.signature.pert_time} {resultItem.signature.pert_time_unit}
          </Text>
        }
        {
          (resultItem.signature.pert_dose || resultItem.signature.pert_dose === 0) &&
          resultItem.signature.pert_dose_unit &&
          <Text style={[AppStyles.defaultFontLight]}>
            <Text style={styles.property}>pert-dose:</Text>&nbsp;
            {resultItem.signature.pert_dose} {resultItem.signature.pert_dose_unit}
          </Text>
        }
      </View>
    );
  }

  _renderL1000MainContent(resultItem) {
    const { signature } = resultItem;
    console.log(signature.pert_id)
    let buttonPress, buttonColor;
    if (!signature.pert_id) {
      buttonPress = null;
      buttonColor = 'gray';
    } else {
      buttonPress = () => this._goToDMOA(signature.pert_id);
      buttonColor = '#00aced';
    }

    return (
      <View style={styles.box}>
        <View style={[AppStyles.flex1, AppStyles.alignCenter]}>
          <Icon
            raised
            reverse
            name='info'
            type='font-awesome'
            size={10}
            color={buttonColor}
            textStyle={{textAlign: 'right'}}
            onPress={buttonPress}
          />
        </View>
        <View style={[AppStyles.flex6]}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
            <Text style={[styles.property]}>p-value:</Text>&nbsp;
            {resultItem.p_value.toExponential(3)}&nbsp;&nbsp;

            <Text style={[styles.property, styles.fontSize12]}>cell-line:</Text>&nbsp;
            {resultItem.signature.sig_id.split("_")[1]}
          </Text>
        </View>
      </View>
    );
  }

  _renderL1000HiddenContent(resultItem) {
    const { signature } = resultItem;
    return (
      <View style={[styles.hiddenAccordion]}>
        <View style={AppStyles.flex1}></View>
        <View style={AppStyles.flex6}>
          {
            (resultItem.q_value || resultItem.q_value === 0) &&
            <Text style={[AppStyles.defaultFontLight]}>
              <Text style={styles.property}>q-value:</Text>&nbsp;
              {resultItem.q_value.toExponential(3)}
            </Text>
          }
          {
            // resultItem.signature && resultItem.signature.sig_id &&
            // <Text style={[AppStyles.defaultFontLight]}>
            //   <Text style={styles.property}>cell-line:</Text>&nbsp;
            //   {resultItem.signature.sig_id.split("_")[1]}
            // </Text>
          }
          {
            (resultItem.fold_change || resultItem.fold_change === 0) &&
            <Text style={[AppStyles.defaultFontLight]}>
              <Text style={styles.property}>fold-change:</Text>&nbsp;
              {resultItem.fold_change.toFixed(3)}
            </Text>
          }
          {
            (resultItem.signature.pert_time || resultItem.signature.pert_time === 0) &&
            resultItem.signature.pert_time_unit &&
            <Text style={[AppStyles.defaultFontLight]}>
              <Text style={styles.property}>pert-time:</Text>&nbsp;
              {resultItem.signature.pert_time} {resultItem.signature.pert_time_unit}
            </Text>
          }
          {
            (resultItem.signature.pert_dose || resultItem.signature.pert_dose === 0) &&
            resultItem.signature.pert_dose_unit &&
            <Text style={[AppStyles.defaultFontLight]}>
              <Text style={styles.property}>pert-dose:</Text>&nbsp;
              {resultItem.signature.pert_dose} {resultItem.signature.pert_dose_unit}
            </Text>
          }
        </View>
      </View>
    );
  }

  render() {
    const { inputSet, entry } = this.props;
    const resultItem = JSON.parse(entry);
    let mainContent, hiddenContent;
    if (inputSet === 'creeds') {
      mainContent = this._renderCreedsMainContent(resultItem);
      hiddenContent = this._renderCreedsHiddenContent(resultItem);
    } else if (inputSet === 'cmap') {
      mainContent = this._renderCmapMainContent(resultItem);
      hiddenContent = this._renderCmapHiddenContent(resultItem);
    } else if (inputSet === 'l1000') {
      mainContent = this._renderL1000MainContent(resultItem);
      hiddenContent = this._renderL1000HiddenContent(resultItem);
    }

    return (
      <Accordion
        header={mainContent}
        content={hiddenContent}
        duration={300}
        easing="easeOutCubic"
      />
    );
  }
}
