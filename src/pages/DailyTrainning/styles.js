import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  txtHeader: {
    color: '#3A362D',
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  line: {
    marginTop: 5,
    height: 1,
    width: '100%',
    backgroundColor: '#c4c4c4',
  },
  listCell: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  listItem: {
    color: '#3A362D',
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 25,
  },
  btn: {
    width: '100%',
    backgroundColor: '#FEFF7B',
    height: 70,
    marginTop: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#000',
  },
});
