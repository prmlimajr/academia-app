import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: 115,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  ladsoftHeader: {
    width: 120,
    height: 30,
    marginTop: 15,
    marginBottom: 10,
  },
  greetingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 25,
    color: '#3A362D',
    fontFamily: 'RobotoSlab_400Regular',
  },
  exit: {
    flexDirection: 'row',
  },
  logout: {
    fontSize: 15,
    color: '#3A362D',
    fontFamily: 'RobotoSlab_400Regular',
  },
});
