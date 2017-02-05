import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  title: {
    fontSize: 30,
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
    justifyContent: 'space-around',
  },
  logo: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
  },
  paddingTop: {
    paddingTop: 10,
  },
  topFlex: {
    flex: 1.,
  },
  bottomFlex: {
    flex: 1,
  },
});
