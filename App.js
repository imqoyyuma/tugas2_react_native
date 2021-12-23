/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import Barang from "./Component/Barang";

class App extends Component {
  render() {
    return(
      <View>
      <Text>TUGAS 2 REACT NATIVE</Text>
      <Barang namabelanja="================ Total Belanja ================"/>
      </View>
    );
  }
}

export default App;