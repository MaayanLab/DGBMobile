import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  regulationDirectionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  landscape: {
    flexDirection: 'row',
  },
  boxButton: {
    height: 100,
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
    fontSize: 25,
    color: '#8e8e8e',
  },
});
