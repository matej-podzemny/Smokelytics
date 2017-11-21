import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../helpers/Styles';
import {connect} from 'react-redux';


class Cigarette extends Component {

  render() {

    if (this.props.id > this.props.cigLeft) {
      return (
          <Image
            source={require('../../assets/img/cig_outline.png')}
            resizeMode={Image.resizeMode.contain}
            style={styles.cigarette}
          />
        );
    } else {
      return (
          <Image
            source={require('../../assets/img/cig_filled.png')}
            resizeMode={Image.resizeMode.contain}
            style={styles.cigarette}
          />
        );

    }

  }
}



const mapStateToProps = ({counter}) => {
  const {cigLeft} = counter;

  return {cigLeft};
};

export default connect(mapStateToProps)(Cigarette);
