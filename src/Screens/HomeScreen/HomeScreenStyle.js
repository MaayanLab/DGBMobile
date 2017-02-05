import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: 'Lato-Regular',
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
//   centerLogoWrapper: {
//   height: 25,
//   width: 25,
//   borderRadius: 12,
//   backgroundColor: 'white',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   overflow: 'hidden',
// },
// centerLogo: {
//   height: 20,
//   width: 20,
//   resizeMode: 'contain',
// },
});
