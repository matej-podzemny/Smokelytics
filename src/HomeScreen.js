import React, { Component } from 'react';
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';
import styles from './helpers/Styles';
import {BlurView} from 'react-native-blur';
import { connect } from 'react-redux';
//import on inc, dec
import {onIncrement, onDecrement} from './actions';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



class HomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            smoked: 0,
            left: 20,
        }
    }

    launchModal(bool) {
        console.log("Button pressed");
        //this.setState({modalVisible: bool})
    }

    renderPackpage(number) {
      console.log("packpage rendered with number: "+number);

      for (var i = 0; i < 3; i++) {
        console.log("for :"+number);
        return(

          <View style={styles.bottomContent}>
            <Image source={require('../assets/img/cigFilled.png')}
              resizeMode={Image.resizeMode.contain}/>
          </View>)
      }
      return(
        <View style={styles.bottomContent}>
          <Image source={require('../assets/img/cigFilled.png')}
            resizeMode={Image.resizeMode.contain}/>
        </View>
      )
    }


    render() {
      console.log("this.props.points: "+this.props.points);
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
                        source={require('../assets/img/stats.png')}
                        style={{ height: 16, width: 16 }}
                       />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.upperContent}>
                  <View style={styles.leftContent}>
                    <Text style={styles.bigNumbers}>
                      {this.state.left}
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
                      {this.state.smoked}
                    </Text>
                    <Text style={styles.ciga}>
                      cigarettes
                    </Text>
                    <Text style={styles.smoked}>
                      smoked
                    </Text>
                  </View>
                </View>

                {/* <View style={styles.bottomContent}> */}

                  {this.renderPackpage(this.state.left)}


                {/* </View> */}

                <View
                  style={{
                    position: 'absolute',
                    top: 64, left: 0, right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.onIncrement(this.props.points);
                      this.setState({ smoked: this.state.smoked + 1 })
                      this.setState({ left: this.state.left - 1 })

                    //  console.log("this.props.points: "+this.props.points);

                    }}
                    activeOpacity={0.7}
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
                      source={require('../assets/img/cig.png')}
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

const mapStateToProps = ({ counter }) => {
  const { points } = counter;

  return { points };
};

export default connect(mapStateToProps, {
  onIncrement,
  onDecrement,
})(HomeScreen);
