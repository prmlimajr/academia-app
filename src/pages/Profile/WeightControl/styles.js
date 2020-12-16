import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bcg: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10
  },
  historicBg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  historicHeader: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#FFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 12
  },
  txtHeader: {
    color: '#FFF',
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 28,
  },
  input: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 40,
    paddingHorizontal: 10,
    marginLeft: 20,
    color: '#3A362D',
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
    borderRadius: 8,
    textAlign: 'center'
  },
  // fakeInput: {
  //   flexDirection: 'row',
  //   backgroundColor: '#FFF',
  //   marginTop: 5,
  //   marginBottom: 5,
  //   height: 36,
  //   paddingHorizontal: 10,
  //   alignItems: 'center',
  //   borderRadius: 8,
  //   opacity: 0.5
  // },
  datePicker: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  dateTxt: {
    color: '#FFF'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  txt: {
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
    marginLeft: 10,
    color: '#FFF'
  },
  addBtn: {
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
