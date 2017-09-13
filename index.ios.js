/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/Store';
import Meetup from './src/App';

const App = () => (
  <Provider store={createStore()}>
      <Meetup />
  </Provider>
)

AppRegistry.registerComponent('Meetup', () => App);
