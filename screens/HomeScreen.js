import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';
import styles from '../src/Styles';
import {connect} from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
      <Header style={styles.header}>
        <Left />
        <Body />
        <Right>
          <Button
            style={{ backgroundColor: 'transparent', paddingRight: 0 }}
            onPress={() => { navigate("Summary") }}
            iconLeft

            >
            <Text style={{ color: 'white', textAlign: 'right', fontFamily: 'nunito-bold' }}>Stats</Text>
            <Icon ios='ios-stats' android="md-stats" style={{ color: 'white' }}/>
          </Button>
        </Right>
      </Header>
      <Content>
   <Text style={styles.text}>
     HOMEEEEEE!
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

export default connect(mapStateToProps)(HomeScreen);
