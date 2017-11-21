import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../helpers/Styles';
import {connect} from 'react-redux';



class UpperContent extends Component {

  render() {
    return (
      <View style={styles.upperContent}>
        <View style={styles.leftContent}>
          <Text style={styles.bigNumbers}>
            {this.props.cigLeft}
          </Text>
          <Text style={styles.ciga}>
            cigarettes
          </Text>
          <Text style={styles.left}>
            left
          </Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.bigNumbers}>
            {this.props.cigSmoked}
          </Text>
          <Text style={styles.ciga}>
            cigarettes
          </Text>
          <Text style={styles.smoked}>
            smoked
          </Text>
        </View>
      </View>
    );
  }
}



const mapStateToProps = ({counter}) => {
  const {cigSmoked, cigLeft} = counter;

  return {cigSmoked, cigLeft};
};

export default connect(mapStateToProps)(UpperContent);
