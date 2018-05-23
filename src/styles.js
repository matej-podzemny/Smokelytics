import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  score: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#9c1818',
  },
  scoreNumber: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreNumberText: {
    fontFamily: 'nunito-bold',
    color: 'white',
  },
  pack: {
      backgroundColor: '#dcdcdc',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    left: 30,
    right: 30,
    bottom: 72,
  },
  headerButton: {
    flex: null,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingRight: 10,
  },
  header: {
    height: 64,
    backgroundColor: '#c11e1e',
  },
  myButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    height: 90,
    borderRadius: 25,
    left: 20,
    right: 20,
  },
  myButtonText: {
    textAlign: 'center',
    fontFamily: 'nunito-bold',
    fontSize: 22,
  },

});
