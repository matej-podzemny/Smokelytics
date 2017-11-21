import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../helpers/Styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../helpers/Styles';
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
          activeOpacity={0.7}
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



const mapStateToProps = ({counter}) => {
  const {cigSmoke, cigLeft} = counter;

  return {cigSmoke, cigLeft};
};

export default connect(mapStateToProps, {
  onIncrement,
  onDecrement,
})(Button);
