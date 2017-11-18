import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';
import styles from '../src/Styles';
import {connect} from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';


class SummaryScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <Container>
      <Header style={styles.header}>
        <Left>
          <Button
            style={{ paddingLeft: 0, backgroundColor: 'transparent' }}
            onPress={() => { goBack() }}
            iconRight
            //iconLeft
            >
            <Icon ios='ios-arrow-back' android="md-arrow-back" style={{ color: 'white' }}/>
            <Text style={{ color: 'white', fontFamily: 'nunito-bold' }}>back</Text>
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
      <Content>
   <Text style={styles.text}>
     STAAAATS!
   </Text>
 </Content>

    </Container>
  );
  }
}

const mapStateToProps = ({counter}) => {
  const {points} = counter;

  return {points};
};

export default connect(mapStateToProps)(SummaryScreen);
