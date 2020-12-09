import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bcg: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 50,
    paddingHorizontal: 20,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileName: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'RobotoSlab_400Regular',
  },
  bio: {
    color: '#FFF',
    fontFamily: 'RobotoSlab_400Regular',
  },
  memberSince: {
    color: '#FFF',
    fontFamily: 'RobotoSlab_400Regular',
    fontSize: 10,
  },
});
