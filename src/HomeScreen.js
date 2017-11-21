import React, { Component } from 'react';
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions
} from 'react-native';
import styles from './helpers/Styles';
import {BlurView} from 'react-native-blur';
import { connect } from 'react-redux';
import {onIncrement, onDecrement, onReset} from './actions';
import Header from './components/Header';
import UpperContent from './components/UpperContent';
import BottomContent from './components/BottomContent';
import Button from './components/Button';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



class HomeScreen extends Component {

    render() {
      console.log("this.props.cigSmoked: "+this.props.cigSmoked);
      console.log("this.props.cigLeft: "+this.props.cigLeft);


      if (this.props.cigLeft < 1) {
  return(

    <Button // New package
      source={require('../assets/img/package.png')}
      style={styles.packageButton}
      imageStyle={styles.packageImage}
      textStyle={styles.packageText}
      text={"New package"}
      onPress={() => {
        console.log("new package!");
        this.props.onReset(this.props.cigSmoked);
      }}
    />
  )
}


        return(
            <View style={styles.mainWrap}>
                <StatusBar barStyle='light-content'/>

                <Header />
                <UpperContent />
                <BottomContent />






                <Button // Cigarette down
                  source={require('../assets/img/cig.png')}
                  style={styles.countButton}
                  imageStyle={styles.countImage}
                  textStyle={styles.countText}
                  text={"Cigarette down"}
                  onPress={() => {
                    console.log("cigo down");
                    this.props.onIncrement(this.props.cigSmoked)
                    this.props.onDecrement(this.props.cigLeft)
                  }}
                />


            </View>
        )
    }
}

const mapStateToProps = ({ counter }) => {
  const { cigSmoked, cigLeft, cigSmokedotal } = counter;

  return { cigSmoked, cigLeft, cigSmokedotal };
};

export default connect(mapStateToProps, {
  onIncrement,
  onDecrement,
  onReset,
})(HomeScreen);
