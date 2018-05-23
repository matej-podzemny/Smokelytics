import React, { Component } from 'react';
import { View, LayoutAnimation, Modal, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import Header from './components/Header';
import Package from './components/Package';
import Button from './components/Button';
import Score from './components/Score';
import StatsScreen from './StatsScreen';

import {onIncrement, onDecrement, onReset, onModalVisible } from './actions';

import style from './styles';
const { myButton, myButtonText} = style;

import { box, cig } from "../assets/img";


class HomeScreen extends Component {
  renderNewPackButton() {
    if (this.props.cigLeft < 1) {
      return(
        <Button // New package
          source={box}
          style={[myButton, {bottom: 86, backgroundColor: '#404040'}]}
          imageStyle={{ width: 48 }}
          textStyle={[myButtonText, { color: '#ffffff' }]}
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
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='light-content'/>
                <Header />
                <Score />
                <Package />
                <Button // Cigarette down
                  source={cig}
                  style={[myButton, {backgroundColor: '#f2f2f2'}]}
                  imageStyle={{ width: 48 }}
                  textStyle={[myButtonText, { color: '#4d4d4d' }]}
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
                    <StatsScreen/>
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
