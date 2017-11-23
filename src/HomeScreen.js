import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    LayoutAnimation,
    Modal,
} from 'react-native';
import styles from './helpers/Styles';
import BlurView from 'react-native-blur';

import { connect } from 'react-redux';
import {onIncrement, onDecrement, onReset, onModalVisible } from './actions';
import Header from './components/Header';
import UpperContent from './components/UpperContent';
import BottomContent from './components/BottomContent';
import Button from './components/Button';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class HomeScreen extends Component {


  renderNewPackButton() {
    if (this.props.cigLeft < 1) {
      return(
        <Button // New package
          source={require('../assets/img/package.png')}
          style={styles.packageButton}
          imageStyle={styles.packageImage}
          textStyle={styles.packageText}
          text={"New package"}
          onPress={() => {
          this.props.onReset(this.props.cigSmoked);

          }}
        />
      )
    } else {
      return null
    }
  }

    render() {
      console.log("this.props.cigSmoked: "+this.props.cigSmoked);
      console.log("this.props.cigLeft: "+this.props.cigLeft);

        return(
            <View style={styles.mainWrap}>
                <StatusBar barStyle='light-content'/>
                <Header />
                <UpperContent />
                <BottomContent />
                <Button // Cigarette down
                  source={require('../assets/img/cig.png')}
                  style={styles.countButton}
                  imageStyle={styles.countImage}
                  textStyle={styles.countText}
                  text={"Cigarette down"}
                  onPress={() => {
                    this.props.onIncrement(this.props.cigSmoked)
                    this.props.onDecrement(this.props.cigLeft)
                    LayoutAnimation.spring();

                  }}
                />
                {this.renderNewPackButton()}

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.props.modalVisible}
                  onRequestClose={() => {alert("Modal has been closed.")}}
                  >


                    <View
                      style={{
                        flexDirection: 'column',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(200,100,100,0.8)',
                        height: SCREEN_HEIGHT,
                        width: SCREEN_WIDTH,
                      }}>



                        <Image
                          source={require('../assets/img/statsIcon.png')}
                          style={{ bottom: SCREEN_HEIGHT * 0.0989505 }}
                        />
                        <View style={{
                          position: 'absolute',

                          left: SCREEN_WIDTH * 0.098,
                          bottom: SCREEN_HEIGHT * 0.614183,
                         }}>
                        <TouchableHighlight onPress={() => {this.props.onModalVisible(false)}}>
                        <Image
                          source={require('../assets/img/cros.png')}
                          style={{
                            position: 'absolute',
                            height: SCREEN_HEIGHT * 0.0254873,
                            width: SCREEN_WIDTH * 0.044,

                            //bottom: SCREEN_HEIGHT * 0.0989505
                          }}/>
                        </TouchableHighlight>
                        </View>

                        <View
                          style={{
                            backgroundColor: '#c11e1e',
                            height: SCREEN_HEIGHT * 0.297601,
                            width: SCREEN_WIDTH * 0.892667,
                            borderRadius: 25,


                          }}>
                          <View style={{
                            backgroundColor: '#9c1818',
                            width: SCREEN_WIDTH * 0.892667,
                            height: SCREEN_HEIGHT * 0.209895,
                            borderRadius: 25,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }}>

                          <View style={{left: 0.088 * SCREEN_WIDTH }}>
                            <Text style={styles.left}>Daily</Text>
                            <Text style={styles.left}>Weekly</Text>
                            <Text style={styles.left}>Monthly</Text>
                            <Text style={[styles.left, { top: SCREEN_HEIGHT * 0.094888, backgroundColor: 'rgba(0,0,0,0)',  fontSize:26  }]}>Total</Text>



                          </View>
                          <View style={{right: 0.088 * SCREEN_WIDTH }}>
                            <Text style={styles.left}>{this.props.daily}</Text>
                            <Text style={styles.left}>{this.props.weekly}</Text>
                            <Text style={styles.left}>{this.props.monthly}</Text>
                            <Text style={[styles.left, { top: SCREEN_HEIGHT * 0.094888, backgroundColor: 'rgba(0,0,0,0)', fontSize:26  }]}>{this.props.total}</Text>


                          </View>
                              </View>

                              </View>
                              </View>
                          </Modal>
                        </View>
        )
    }
}

const mapStateToProps = ({ counter }) => {
  const { cigSmoked, cigLeft, cigSmokeTotal, modalVisible, daily, weekly, monthly, total } = counter;

  return { cigSmoked, cigLeft, cigSmokeTotal, modalVisible, daily, weekly, monthly, total };
};

export default connect(mapStateToProps, {
  onIncrement,
  onDecrement,
  onReset,
  onModalVisible,
})(HomeScreen);
