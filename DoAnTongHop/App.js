import React from 'react';
import {Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import RoomDetail from '@screens/RoomDetail';
import BillScreen from '@screens/BillScreen';
import EnterBillScreen from '@screens/EnterBillScreen';
import ProfileScreen from '@screens/ProfileScreen';

const MainNavigator = Platform.OS === 'ios' ? createStackNavigator({
  LoginScreen: { screen: LoginScreen }, 
  EnterBillScreen: { screen: EnterBillScreen },    
  BillScreen: { screen: BillScreen },  
  HomeScreen: { screen: HomeScreen },      
  RoomDetail: { screen: RoomDetail },    
  ProfileScreen: { screen: ProfileScreen },   
}) : createStackNavigator({   
  
  LoginScreen: { screen: LoginScreen }, 
  EnterBillScreen: { screen: EnterBillScreen },    
  BillScreen: { screen: BillScreen },  
  HomeScreen: { screen: HomeScreen },      
  RoomDetail: { screen: RoomDetail },   
  ProfileScreen: { screen: ProfileScreen }, 
    
})
const App = createAppContainer(MainNavigator);

export default App;