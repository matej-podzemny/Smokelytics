import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const RootNavigator = StackNavigator({
      Home: {
        screen: HomeScreen,
      },
      Summary: {
        screen: SummaryScreen,
        // navigationOptions: ({navigation}) => ({
        //   title: `${navigation.state.params.name}'s Profile'`,
        // }),
      },
    });


    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>

              <RootNavigator />

        </Provider>
      );
    } else {
      return null;
    }



  }
}
