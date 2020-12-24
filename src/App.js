import React, {Component} from 'react';
import _ from 'lodash';
import SplashScreen from 'react-native-splash-screen'

import MainApp from './Navigation/index';
// import {Provider} from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import configureStore from './store';
// const { store, persistor } = configureStore;
import { Root } from "native-base";


export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
          <Root>
            <MainApp />
          </Root>
    );
  }
}