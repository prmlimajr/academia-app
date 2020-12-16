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
  avatar:{
    alignItems: 'flex-end'
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
    marginTop: 5
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 80
  },
  bodyTxt: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'RobotoSlab_400Regular',
    marginBottom: 5
  },
  fakeInputs: {
    flexDirection: 'row',
    backgroundColor: '#6B6868',
    marginTop: 5,
    marginBottom: 5,
    height: 36,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8,
    opacity: 0.5
  },
  fakeInputsTxt: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'RobotoSlab_400Regular',
    marginRight: 20    
  },
  weight: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'RobotoSlab_400Regular',
    marginTop: 20
  },
  fakeInputsWeight: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6B6868',
    marginTop: 5,
    marginBottom: 5,
    height: 36,
    paddingHorizontal: 10,
    borderRadius: 8,
    opacity: 0.5
  },
  leftSide: {
    flexDirection: 'row'
  },
  scale: {
    width: 20,
    height: 20,
    marginRight: 20
  },
  rightSide: {
    flexDirection:'row',
    alignItems: 'center'
  },
  date: {
    color: '#FFF',
    fontSize: 12,
    marginRight: 20
  },
  credit: {
    marginRight: 20
  }
});
