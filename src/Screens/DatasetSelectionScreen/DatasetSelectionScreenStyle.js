import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  logo: {
    // flex: 1,
    width: 120,
    height: 140,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    fontFamily: 'JosefinSlab-SemiBold',
    color: 'gray',
  },
  regulationDirectionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  landscape: {
    flexDirection: 'row',
  },
  boxButton: {
    height: 70,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonContainer: {
    justifyContent: 'center',
  },
  question: {
    textAlign: 'center',
    fontSize: 22,
    color: '#8e8e8e',
  },
});
