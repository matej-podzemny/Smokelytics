import { Dimensions, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const fontAutoSize = SCREEN_WIDTH * 0.1;
export const fontAutoSizeSmall = SCREEN_WIDTH * 0.05;

export default StyleSheet.create({
  text: {
    fontWeight: "300",
    fontSize: fontAutoSize,
    color: 'white',
    fontFamily: 'nunito-bold',
  },
  header: {
    backgroundColor: 'rgba(178,32,20,1)',
  },
  container: {
    flex: 1,
    backgroundColor: "#093145",
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    //width:0.8* SCREEN_WIDTH,
    justifyContent: 'center',
  },
  deckScreen: {
    //backgroundColor: 'green',
    flex: 1,
    width: SCREEN_WIDTH,
    //justifyContent: 'center',

  },
  button: {
    backgroundColor: 'rgba(233,204,87,1)',
    width: 0.7 * SCREEN_WIDTH,
    borderRadius: 40,


  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 35,
    height: 250,
  },
  cardStyle: {
    borderBottomWidth: 0,
    borderWidth: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderRadius: 40,

  //  width: SCREEN_WIDTH,
  //  position: 'absolute',

  },
  // text na stred, transparent backgroud, přes celou kartu
  transparent: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
});
