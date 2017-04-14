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
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 3,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    marginRight: 10,
  },
  gene: {
    fontWeight: 'bold',
  },
});
