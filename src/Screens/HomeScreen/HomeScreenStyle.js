import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  sample: {
    color: '#178dc9',
  },
  title: {
    fontSize: 35,
    color: 'gray',
    fontFamily: 'JosefinSlab-SemiBold',
  },
  exampleSearches: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  formContainer: {
    flexDirection: 'column',
    marginTop: 25,
  },
  formInput: {
    // flex: 1,
    // height: 60,
    borderColor: 'gray',
    borderWidth: 1,
  },
  geneFormContainer: {
    paddingVertical: 30,
    justifyContent: 'space-around',
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
