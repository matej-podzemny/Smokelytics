import React, {Component} from 'react';
import { Text, View, TouchableOpacity,TouchableHighlight, Image } from 'react-native';
import {connect} from 'react-redux';

import {onIncrement, onDecrement, onReset, onModalVisible } from './actions';
import ScoreNumber from './components/ScoreNumber';

class StatsScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(200,100,100,0.90)'
      }}>
      <View style={{flex: 1}}>
        <ScoreNumber
          value={this.props.total}
          description="TOTAL"
        />
      </View>

      <View style={{
        flex: 1
       }}>
      <TouchableHighlight onPress={() => {this.props.onModalVisible(false)}}>
      <Image
        source={require('../assets/img/cros.png')}
        />
      </TouchableHighlight>
      </View>
    </View>

    );
  }
}

const mapStateToProps = ({ counter }) => {
  const { modalVisible, total } = counter;

  return { modalVisible, total };
};

export default connect(mapStateToProps, {
  onModalVisible,
})(StatsScreen);
