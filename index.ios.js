/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { SearchBar } from './src/components/SearchBar';
import { GridView } from './src/components/GridView';

const image = {uri: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'};

const data = [
    {key: '1', title: 'Kaio', subtitle: 'Cute dude', image},
    {key: '2', title: 'Kaio', subtitle: 'Cute dude', image},
    {key: '3', title: 'Kaio', subtitle: 'Cute dude', image},
    {key: '4', title: 'Kaio', subtitle: 'Cute dude', image},
    {key: '5', title: 'Kaio', subtitle: 'Cute dude', image},
    {key: '6', title: 'Kaio', subtitle: 'Cute dude', image},
]

export default class Meetup extends Component {
  render() {
    return (
      <View style={styles.container}>
          <SearchBar />
          <GridView
              data={data}
          />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-around',
  },
};

AppRegistry.registerComponent('Meetup', () => Meetup);
