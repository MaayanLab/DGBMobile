import { StyleSheet } from 'react-native';
import config from '../../config';

export default StyleSheet.create({
  formInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  geneFormContainer: {
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  headerWrap: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innerHeaderWrap: {
    flex: 4,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    marginBottom: 3,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 19,
  },
  gene: {
    color: '#4892cf',
    fontWeight: 'bold',
    fontSize: 25,
  },
  arrowLeftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  arrowRightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
