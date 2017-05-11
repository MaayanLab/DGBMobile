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
  formInputContainer: {
    marginLeft: 25,
    marginRight: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  formInput: {
    // flex: 1,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 21,
    borderColor: 'transparent',
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
