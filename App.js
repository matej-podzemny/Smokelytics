import React from 'react';
import HomeScreen from './src/HomeScreen';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
  await Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
  this.setState({ fontLoaded: true });
}

  render() {

    if (this.state.fontLoaded) {
      return (
        <HomeScreen />
      );
    } else {
      return null;
    }
  }
}
