import React from 'react';
import HomeScreen from './src/HomeScreen';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { createStore, applyMiddleware } from 'redux';

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

    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      );
    } else {
      return null;
    }
  }
}
