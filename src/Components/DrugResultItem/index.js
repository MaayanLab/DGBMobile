'use strict';

import React, { Component } from 'react';
import { View, Text, WebView, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-accordion';
import { Icon } from 'react-native-elements';

import AppStyles from '../../styles';
import styles from './DrugResultItemStyle';

export default class DrugResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  // _goToLife(pert_id) {
  //   const { navigate } = this.props.navigation;
  //   const uri = `http://life.ccs.miami.edu/life/summary?mode=SmallMolecule&source=BROAD&input=${pert_id}`;
  //   navigate('WebViewContainer',
  //     { uri }
  //   );
  // }

  accordionActive = () => {
    this.setState({ active: !this.state.active });
  }

  _goToDrugBank(drugbank_id) {
    const { navigate } = this.props.navigation;
    navigate('WebViewContainer',
      {uri: `https://www.drugbank.ca/drugs/${drugbank_id}`}
    );
  }

  _goToPubChem(pubchem_cid) {
    const { navigate } = this.props.navigation;
    navigate('WebViewContainer',
      {uri: `https://pubchem.ncbi.nlm.nih.gov/compound/${pubchem_cid}`}
    );
  }

  _goToGeo(geo_id) {
    const { navigate } = this.props.navigation;
    navigate('WebViewContainer',
      {uri: `https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=${geo_id}`}
    );
  }

  _renderCreedsMainContent(resultItem) {
    const { signature } = resultItem;

    return (
      <View style={styles.box}>
        <View style={[AppStyles.flex2, AppStyles.alignCenter]}>
          <Icon
            raised
            reverse
            name={ this.state.active ? 'chevron-down' : 'chevron-right'}
            type='material-community'
            size={10}
            color='#00aced'
            textStyle={{textAlign: 'right'}}
          />
        </View>
        <View style={AppStyles.flex8}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
            <Text style={[styles.property]}>p-value:</Text>&nbsp;
            {resultItem.p_value.toExponential(3)}&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        </View>
      </View>
    );
  }

  _renderCreedsHiddenContent(resultItem) {
    const { signature } = resultItem;

    let pubChemButtonOnPress, pubChemButtonColor;
    if (signature.pubchem_id) {
      pubChemButtonOnPress = () => { this._goToPubChem(signature.pubchem_id) };
      pubChemButtonColor = '#00aced';
    } else {
      pubChemButtonOnPress = null;
      pubChemButtonColor = 'gray';
    }

    let drugBankButtonOnPress, drugBankButtonColor;
    if (signature.drugbank_id) {
      drugBankButtonOnPress = () => { this._goToDrugBank(signature.drugbank_id) };
      drugBankButtonColor = '#00aced';
    } else {
      drugBankButtonOnPress = null;
      drugBankButtonColor = 'gray';
    }

    let geoButtonOnPress, geoButtonColor;
    if (signature.geo_id) {
      geoButtonOnPress = () => { this._goToGeo(signature.geo_id) };
      geoButtonColor = '#00aced';
    } else {
      geoButtonOnPress = null;
      geoButtonColor = 'gray';
    }

    return (
      <View style={[styles.hiddenAccordion]}>
        <View style={[styles.drugInfo]}>
          <View style={AppStyles.flex2}></View>
          <View style={AppStyles.flex8}>
            {
              (resultItem.q_value || resultItem.q_value === 0) &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>q-value:</Text>&nbsp;
                {resultItem.q_value.toExponential(3)}
              </Text>
            }
            {
              (resultItem.fold_change || resultItem.fold_change === 0) &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>fold-change:</Text>&nbsp;
                {resultItem.fold_change.toFixed(3)}
              </Text>
            }
            {
              (resultItem.fold_change || resultItem.fold_change === 0) &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>specificity:</Text>&nbsp;
                {
                  resultItem.fold_change > 0 ?
                  (1 / signature.n_sig_up_genes).toExponential(3) :
                  (1 / signature.n_sig_down_genes).toExponential(3)
                }
              </Text>
            }
          </View>
        </View>
        <View style={[styles.externalLinks]}>
          {
            signature.geo_id && (
              <TouchableOpacity
                style={[styles.boxAround, { backgroundColor: geoButtonColor }]}
                onPress={geoButtonOnPress}
              >
                <Text style={styles.buttonText}>GEO</Text>
              </TouchableOpacity>
            )
          }
          {
            signature.pubchem_id && (
              <TouchableOpacity
                style={[styles.boxAround, { backgroundColor: pubChemButtonColor }]}
                onPress={pubChemButtonOnPress}
              >
                <Text style={styles.buttonText}>PubChem</Text>
              </TouchableOpacity>
            )
          }
          {
            signature.drugbank_id && (
              <TouchableOpacity
                style={[styles.boxAround, { backgroundColor: drugBankButtonColor }]}
                onPress={drugBankButtonOnPress}
              >
                <Text style={styles.buttonText}>DrugBank</Text>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    );
  }

  _renderCmapMainContent(resultItem) {
    const { signature } = resultItem;
    return (
      <View style={styles.box}>
        <View style={[styles.padHorizontal10, AppStyles.flex6]}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, AppStyles.flex1, styles.fontSize12]}>
            <Text style={styles.property}>p-value:</Text>&nbsp;
            {resultItem.p_value.toExponential(3)}&nbsp;&nbsp;&nbsp;&nbsp;

            <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
              <Text style={styles.property}>cell-line:</Text>&nbsp;
              {resultItem.signature.cell_name}
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  _renderCmapHiddenContent(resultItem) {
    const { signature } = resultItem;
    return (
      <View style={[styles.padHorizontal10, styles.hiddenAccordion]}>
        <View>
          {
            (resultItem.q_value || resultItem.q_value === 0) &&
            <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
              <Text style={styles.property}>q-value:</Text>&nbsp;
              {resultItem.q_value.toExponential(3)}
            </Text>
          }
          {
            (resultItem.fold_change || resultItem.fold_change === 0) &&
            <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
              <Text style={styles.property}>fold-change:</Text>&nbsp;
              {resultItem.fold_change.toFixed(3)}
            </Text>
          }
          {
            (resultItem.fold_change || resultItem.fold_change === 0) &&
            <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
              <Text style={styles.property}>specificity:</Text>&nbsp;
              {
                resultItem.fold_change > 0 ?
                (1 / signature.n_sig_up_genes).toExponential(3) :
                (1 / signature.n_sig_down_genes).toExponential(3)
              }
            </Text>
          }
          {
            (resultItem.signature.pert_time || resultItem.signature.pert_time === 0) &&
            resultItem.signature.pert_time_unit &&
            <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
              <Text style={styles.property}>time-point:</Text>&nbsp;
              {resultItem.signature.pert_time} {resultItem.signature.pert_time_unit}
            </Text>
          }
          {
            (resultItem.signature.pert_dose || resultItem.signature.pert_dose === 0) &&
            resultItem.signature.pert_dose_unit &&
            <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
              <Text style={styles.property}>dose:</Text>&nbsp;
              {resultItem.signature.pert_dose} {resultItem.signature.pert_dose_unit}
            </Text>
          }
        </View>
      </View>
    );
  }

  _renderL1000MainContent(resultItem) {
    const { signature } = resultItem;

    return (
      <View style={styles.box}>
        <View style={[AppStyles.flex2, AppStyles.alignCenter]}>
          <Icon
            raised
            reverse
            name={ this.state.active ? 'chevron-down' : 'chevron-right'}
            type='material-community'
            size={10}
            color='#00aced'
            textStyle={{textAlign: 'right'}}
          />
        </View>
        <View style={AppStyles.flex8}>
          <Text style={[AppStyles.defaultFont, styles.drugName]}>{signature.drug_name}</Text>
          <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
            <Text style={[styles.property]}>p-value:</Text>&nbsp;
            {resultItem.p_value.toExponential(3)}&nbsp;&nbsp;&nbsp;&nbsp;

            <Text style={[styles.property, styles.fontSize12]}>cell-line:</Text>&nbsp;
            {signature.sig_id.split("_")[1]}
          </Text>
        </View>
      </View>
    );
  }

  _renderL1000HiddenContent(resultItem) {
    const { signature } = resultItem;
    // let lifeButtonOnPress, lifeButtonColor;
    // if (signature.pert_id) {
    //   lifeButtonOnPress = () => { this._goToLife(signature.pert_id) };
    //   lifeButtonColor = '#00aced';
    // } else {
    //   lifeButtonOnPress = null;
    //   lifeButtonColor = 'gray';
    // }

    let drugBankButtonOnPress, drugBankButtonColor;
    if (signature.drugbank_id) {
      drugBankButtonOnPress = () => { this._goToDrugBank(signature.drugbank_id) };
      drugBankButtonColor = '#00aced';
    } else {
      drugBankButtonOnPress = null;
      drugBankButtonColor = 'gray';
    }

    let pubChemButtonOnPress, pubChemButtonColor;
    if (signature.pubchem_cid) {
      pubChemButtonOnPress = () => { this._goToPubChem(signature.pubchem_cid) };
      pubChemButtonColor = '#00aced';
    } else {
      pubChemButtonOnPress = null;
      pubChemButtonColor = 'gray';
    }

    return (
      <View style={[styles.hiddenAccordion]}>
        <View style={[styles.drugInfo]}>
          <View style={AppStyles.flex2}></View>
          <View style={[AppStyles.flex8]}>
            {
              (resultItem.q_value || resultItem.q_value === 0) &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>q-value:</Text>&nbsp;
                {resultItem.q_value.toExponential(3)}
              </Text>
            }
            {
              (resultItem.fold_change || resultItem.fold_change === 0) &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>fold-change:</Text>&nbsp;
                {resultItem.fold_change.toFixed(3)}
              </Text>
            }
            {
              (resultItem.fold_change || resultItem.fold_change === 0) &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>specificity:</Text>&nbsp;
                {
                  resultItem.fold_change > 0 ?
                  (1 / signature.n_sig_up_genes).toExponential(3) :
                  (1 / signature.n_sig_down_genes).toExponential(3)
                }
              </Text>
            }
            {
              (resultItem.signature.pert_time || resultItem.signature.pert_time === 0) &&
              resultItem.signature.pert_time_unit &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>time-point:</Text>&nbsp;
                {resultItem.signature.pert_time} {resultItem.signature.pert_time_unit}
              </Text>
            }
            {
              (resultItem.signature.pert_dose || resultItem.signature.pert_dose === 0) &&
              resultItem.signature.pert_dose_unit &&
              <Text style={[AppStyles.defaultFontLight, styles.fontSize12]}>
                <Text style={styles.property}>dose:</Text>&nbsp;
                {resultItem.signature.pert_dose} {resultItem.signature.pert_dose_unit}
              </Text>
            }

          </View>
        </View>
        <View style={[styles.externalLinks]}>
          {
            // signature.pert_id && (
            //   <TouchableOpacity
            //     style={[styles.boxAround, { backgroundColor: lifeButtonColor }]}
            //     onPress={lifeButtonOnPress}
            //   >
            //     <Text style={styles.buttonText}>LIFE</Text>
            //   </TouchableOpacity>
            // )
          }
          {
            signature.pubchem_cid && (
              <TouchableOpacity
                style={[styles.boxAround, { backgroundColor: pubChemButtonColor }]}
                onPress={pubChemButtonOnPress}
              >
                <Text style={styles.buttonText}>PubChem</Text>
              </TouchableOpacity>
            )
          }
          {
            signature.drugbank_id && (
              <TouchableOpacity
                style={[styles.boxAround, { backgroundColor: drugBankButtonColor }]}
                onPress={drugBankButtonOnPress}
              >
                <Text style={styles.buttonText}>DrugBank</Text>
              </TouchableOpacity>
            )
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
        onPress={() => { this.accordionActive() }}
        duration={300}
        easing="easeOutCubic"
      />
    );
  }
}
