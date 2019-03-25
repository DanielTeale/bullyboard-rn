import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Store from "./Store"
import AppNavigator from './components/AppNavigator';
import Header from './components/Header';
import Footer from './components/Footer';
import TabNavigator from './components/TabNavigator';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={Store()}>
        <Header />
        <TabNavigator />
      </Provider>  
    );
  }
}


