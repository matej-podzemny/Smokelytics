import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { stats } from "../../assets/img";
import { onModalVisible } from '../actions';
import styles from '../styles';
const { header, headerButton } = styles;


class Header extends Component {
  render() {
    return (
      <View style={header}>
        <View style={headerButton}>
          <TouchableOpacity onPress={() => {
            this.props.onModalVisible(true);
          }} style={{ flexDirection: 'row' }}>
            <Text style={{
              fontFamily: 'nunito-bold',
              color: 'white',
              paddingRight: 10
            }}>Stats</Text>
            <Image source={stats} style={{
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

export default connect(mapStateToProps, {
  onModalVisible,
})(Header);
