import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';

import {onIncrement, onDecrement} from '../actions';


class Button extends Component {
  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 64, left: 0, right: 0, bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={this.props.onPress}
          activeOpacity={0.9}
          style={this.props.style}>
          <Image
            source={this.props.source}
            resizeMode={Image.resizeMode.contain}
            style={this.props.imageStyle}
          />
          <Text
            style={this.props.textStyle}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
    </View>
    );
  }
}

export default Button;
