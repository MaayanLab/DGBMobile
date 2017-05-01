import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  box: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
  },
  drugName: {
    flex: 1,
    // alignSelf: 'flex-start',
  },
  pVal: {
    flex: 1,
    // alignSelf: 'flex-end',
  },
  hiddenAccordion: {
    flex: 1,
    paddingTop: 10,
    // paddingBottom: 10,
  },
  paddingHorizontal25: {
    paddingLeft: 25,
    paddingRight: 25,
  }
})
