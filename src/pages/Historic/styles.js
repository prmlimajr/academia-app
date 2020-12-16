import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  },
  historicBg: {
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    marginBottom: 5
  },
  historicHeader: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  txtHeader: {
    color: '#3A362D',
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 28,
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
  historicDay: {
    color: '#3A362D',
    fontSize: 25
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
