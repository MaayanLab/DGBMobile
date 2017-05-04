import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginTop: 15,
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
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxAround: {
    width: 80,
    height: 22,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
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
