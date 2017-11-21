import React, {Component} from 'react';
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
import styles from '../helpers/Styles';
import { connect } from 'react-redux';
//import {onIncrement, onDecrement} from './actions';



class Header extends Component {

  launchModal(bool) {
      console.log("ShowModalPressed");
      //this.setState({modalVisible: bool})
  }

  render() {
    return (
      <View style={styles.header}>

      <View style={styles.headerButton}>
        <TouchableOpacity onPress={() => {
            this.launchModal(false)
          }} style={{
            flexDirection: 'row'
          }}>
          <Text style={{
              fontFamily: 'nunito-bold',
              color: 'white',
              paddingRight: 10
            }}>Stats</Text>
          <Image source={require('../../assets/img/stats.png')} style={{
              height: 16,
              width: 16
            }}/>
        </TouchableOpacity>
    </View>
  </View>
  );
  }
}

const mapStateToProps = ({counter}) => {
  const {cigSmoked, cigLeft} = counter;

  return {cigSmoked, cigLeft};
};

export default connect(mapStateToProps)(Header);
