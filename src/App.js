/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './pages/home'
import Navigator from './routes/homeStack'
import { RaceContext } from './context/RaceContext'

const App = () => {
  return (

    <Navigator />
    // <Home />
  );
};

// const styles = StyleSheet.create({
// });

export default App;
