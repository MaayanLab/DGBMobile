import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  box: {
    flexDirection: 'row',
    paddingTop: 15,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
  drugName: {
    fontSize: 15,
    flex: 1,
  },
  hiddenAccordion: {
    // flexWrap: 'wrap',
  },
  drugInfo: {
    flexDirection: 'row',
    // flex: 3,
  },
  externalLinks: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  property: {
    fontWeight: '400',
  },
  fontSize12: {
    fontSize: 12,
  },
  paddingHorizontal25: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  moreInfoButton: {
    alignSelf: 'flex-end',
  },
  padHorizontal10: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})
