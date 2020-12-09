import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bcg: {
    width: '100%',
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  startBtn: {
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
  btnText: {
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#000',
  },
});
