import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import styles from '../src/Styles';
import { connect } from 'react-redux';




class HomeScreen extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    );
  }
}


const mapStateToProps = ({counter}) => {
  const {points} = counter;

  return {points};
};

export default connect(mapStateToProps)(HomeScreen);
