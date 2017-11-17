import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

export default class App extends React.Component {

  // componentDidMount() {
  //   Font.loadAsync({
  //     'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  //   });
  // }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const RootNavigator = StackNavigator({
      Home: {
        screen: HomeScreen,
      },
      Summary: {
        screen: SummaryScreen,
      },
    });

    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
