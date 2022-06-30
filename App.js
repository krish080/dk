import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Querry from './querry'
import Home from './home'

export default class App extends React.Component {
 
  render() {
    return (
      <View>
      <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
 
 
   Home:Home,
   Querry:Querry

    
  
})

const AppContainer = createAppContainer(AppNavigator);

