import { Dimensions, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const fontAutoSize = SCREEN_WIDTH * 0.1;
export const fontAutoSizeSmall = SCREEN_WIDTH * 0.05;

export default StyleSheet.create({
  mainWrap: {
      flex: 1,
      //alignItems: 'stretch',
      //justifyContent: 'flex-start',
  },

  row: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'space-between',
    left: SCREEN_WIDTH * 0.088,
    right: SCREEN_WIDTH * 0.088,
  },

  firstRow: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'space-between',
    left: SCREEN_WIDTH * 0.088,
    right: SCREEN_WIDTH * 0.088,

  },

  secondRow: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    left: SCREEN_WIDTH * 0.088,
    right: SCREEN_WIDTH * 0.088,

  },



  cigarette: {
    //bottom: SCREEN_HEIGHT * 0.0382309,
    //backgroundColor: 'blue',
    width: SCREEN_WIDTH * 0.0746667,
  },

  packageButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'blue',
  position: 'absolute',
  backgroundColor: '#404040',
  height: SCREEN_HEIGHT * 0.131,
  borderRadius: 25,
  width: SCREEN_WIDTH * 0.886,
  bottom: SCREEN_HEIGHT * 0.132684,
  },

  packageImage: {
    width: SCREEN_WIDTH * 0.0986667,

  },

  packageText: {
    textAlign: 'center',
    fontFamily: 'nunito-bold',
    color: '#ffffff',
    fontSize: 22,
  },

  countImage: {
    width: SCREEN_WIDTH * 0.116,
  },

  countText: {
    textAlign: 'center',
    fontFamily: 'nunito-bold',
    color: '#4d4d4d',
    fontSize: 22,
  },

  countButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'blue',
  position: 'absolute',
  backgroundColor: '#ffffff',
  height: SCREEN_HEIGHT * 0.131,
  borderRadius: 25,
  width: SCREEN_WIDTH * 0.886,


  },

  resetButton: {

  },

  button: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 87,
    borderRadius: 20,
    width: SCREEN_WIDTH * 0.85,
    //alignSelf: 'center',
    //marginTop: SCREEN_HEIGHT * 0.5,

  },

  bigNumbers: {
    fontFamily: 'nunito-bold',
    fontSize: 63,
    color: 'white',
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
  upperContent: {
      backgroundColor: '#9c1818',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
  },

  bottomContent: {
      backgroundColor: '#dcdcdc',

      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },

  leftContent: {
    flex: 1,
    //bottom: SCREEN_HEIGHT * 0.05,
    left: SCREEN_WIDTH * 0.05,
    //backgroundColor: 'blue',
    alignItems: 'center',
  },

  rightContent: {
    flex: 1,
    alignItems: 'center',
    right: SCREEN_WIDTH * 0.05,

    //backgroundColor: 'brown',
  },

  ciga: {
    fontFamily: 'nunito-bold',
    fontSize: 15,
    color: 'white',
  },

  smoked: {
    fontFamily: 'nunito-bold',
    fontSize: 21,
    color: 'white',
  },

  left: {
    fontFamily: 'nunito-bold',
    fontSize: 21,
    color: 'white',
  },
});
