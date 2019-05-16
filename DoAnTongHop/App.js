import React from 'react';
import {Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import RoomDetail from '@screens/RoomDetail';
import BillScreen from '@screens/BillScreen';
import EnterBillScreen from '@screens/EnterBillScreen';

const MainNavigator = Platform.OS === 'ios' ? createStackNavigator({
  LoginScreen: { screen: LoginScreen },  
  HomeScreen: { screen: HomeScreen }, 
  RoomDetail: { screen: RoomDetail },   
}) : createStackNavigator({   
  EnterBillScreen: { screen: EnterBillScreen },    
  BillScreen: { screen: BillScreen },  
  HomeScreen: { screen: HomeScreen }, 
  LoginScreen: { screen: LoginScreen },    
  RoomDetail: { screen: RoomDetail },   
})
const App = createAppContainer(MainNavigator);

export default App;