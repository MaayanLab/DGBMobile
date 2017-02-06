import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  title: {
    fontSize: 35,
    fontFamily: 'JosefinSlab-SemiBold',
    color: 'gray',
  },
  formInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  geneFormContainer: {
    paddingVertical: 30,
    // justifyContent: 'space-around',
  },
  logo: {
    width: 120,
    height: 140,
    resizeMode: 'contain',
  },
  paddingTop: {
    // paddingTop: 10,
  },
  topFlex: {
    flex: 1,
  },
  midFlex: {
    flex: 0.2,
  },
  bottomFlex: {
    flex: 0.9,
  },
});
