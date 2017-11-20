import React, { Component } from 'react';
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';

import {BlurView} from 'react-native-blur';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class HomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
        }
    }

    launchModal(bool) {
        console.log("Button pressed");
        //this.setState({modalVisible: bool})
    }


    render() {
        return(
            <View style={styles.mainWrap}>

                <StatusBar
                    barStyle='light-content'/>

                <View style={styles.header}>
                  <View style={styles.headerButton}>
                    <TouchableOpacity
                      onPress={() => {this.launchModal(false)}}
                      style={{ flexDirection: 'row' }}>
                      <Text
                        style={{
                          fontFamily: 'nunito-bold',
                          color: 'white',
                          paddingRight: 10,
                        }}>Stats</Text>
                      <Image
                        source={require('./img/stats.png')}
                        style={{ height: 16, width: 16 }}
                       />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.upperContent}>
                  <View style={styles.leftContent}>
                    <Text style={styles.bigNumbers}>
                      00
                    </Text>
                    <Text style={styles.ciga}>
                      cigarettes
                    </Text>
                    <Text style={styles.left}>
                      left
                    </Text>
                  </View>
                  <View style={styles.rightContent}>
                    <Text style={styles.bigNumbers}>
                      00
                    </Text>
                    <Text style={styles.ciga}>
                      cigarettes
                    </Text>
                    <Text style={styles.smoked}>
                      smoked
                    </Text>
                  </View>
                </View>

                <View style={styles.bottomContent}>

                </View>

                <View
                  style={{
                    position: 'absolute',
                    top: 64, left: 0, right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>

                  <TouchableOpacity
                    onPress={() => {this.launchModal(false)}}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      //backgroundColor: 'blue',
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    height: SCREEN_HEIGHT * 0.131,
                    borderRadius: 20,
                    width: SCREEN_WIDTH * 0.886,

                    }}>
                    <Image
                      source={require('./img/cig.png')}
                      resizeMode={Image.resizeMode.contain}
                      style={{
                        //backgroundColor: 'blue',
                      //  height: SCREEN_HEIGHT * 0.047976,
                        width: SCREEN_WIDTH * 0.116,
                        //alignSelf: 'center',
                      }}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'nunito-bold',
                        color: '#4d4d4d',
                        fontSize: 21,
                      }}>
                      Cigarette down
                    </Text>
                  </TouchableOpacity>
              </View>


                {/* <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    animationType='fade'>
                    <BlurView
                        blurType='light'
                        style={styles.contentWrap}>


                        <Text>This is the modal!</Text>

                        <TouchableOpacity
                            onPress={() => {this.launchModal(false)}}>
                            <Text>Close modal</Text>
                        </TouchableOpacity>

                    </BlurView>

                </Modal> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        //alignItems: 'stretch',
        //justifyContent: 'flex-start',
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
})
