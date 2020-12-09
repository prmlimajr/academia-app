import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  containerBottom: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#c4c4c4',
  },
  title: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
  },
  titleTxt: {
    color: '#3A362D',
    fontSize: 25,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  img: {
    width: '100%',
    height: 200,
  },
  data: {
    paddingHorizontal: 20,
  },
  dataTxt: {
    color: '#3A362D',
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataInput: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 40,
    paddingHorizontal: 10,
    marginLeft: 20,
    color: '#3A362D',
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
    borderRadius: 8,
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
