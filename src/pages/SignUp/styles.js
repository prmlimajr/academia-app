import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2C2C',
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
  signInTxt: {
    color: '#FEFF7B',
    fontSize: 18,
    fontFamily: 'RobotoSlab_400Regular',
  },
  signInInput: {
    backgroundColor: '#fff',
    width: '100%',
    height: 70,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  signInBtn: {
    width: '100%',
    backgroundColor: '#FEFF7B',
    height: 70,
    marginTop: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boldTxt: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily: 'RobotoSlab_700Bold',
  },
  yellowLine: {
    height: 1,
    width: '65%',
    backgroundColor: '#FEFF7B',
    marginTop: 20,
    marginBottom: 10,
  },
});
