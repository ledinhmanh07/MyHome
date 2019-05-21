import React from 'react';
import {Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import RoomDetail from '@screens/RoomDetail';
import BillScreen from '@screens/BillScreen';
import EnterBillScreen from '@screens/EnterBillScreen';
import ProfileScreen from '@screens/ProfileScreen';
import BillHistoryScreen from '@screens/BillHistoryScreen';
import UpdateProfileScreen from '@screens/UpdateProfileScreen';
import CreateProfileScreen from '@screens/CreateProfileScreen';
import CurrentBillScreen from '@screens/CurrentBillScreen';

const MainNavigator = Platform.OS === 'ios' ? createStackNavigator({
  LoginScreen: { screen: LoginScreen }, 
  EnterBillScreen: { screen: EnterBillScreen },    
  BillScreen: { screen: BillScreen },  
  BillHistoryScreen: { screen: BillHistoryScreen }, 
  HomeScreen: { screen: HomeScreen },      
  RoomDetail: { screen: RoomDetail },    
  ProfileScreen: { screen: ProfileScreen },   
  UpdateProfileScreen: { screen: UpdateProfileScreen }, 
  CreateProfileScreen: { screen: CreateProfileScreen }, 
  CurrentBillScreen: { screen: CurrentBillScreen },
}) : createStackNavigator({   
  CurrentBillScreen: { screen: CurrentBillScreen },
  LoginScreen: { screen: LoginScreen }, 
  ProfileScreen: { screen: ProfileScreen }, 
  BillHistoryScreen: { screen: BillHistoryScreen }, 
  EnterBillScreen: { screen: EnterBillScreen },    
  BillScreen: { screen: BillScreen },  
  HomeScreen: { screen: HomeScreen },      
  RoomDetail: { screen: RoomDetail },   
  UpdateProfileScreen: { screen: UpdateProfileScreen }, 
  CreateProfileScreen: { screen: CreateProfileScreen }, 
  
})
const App = createAppContainer(MainNavigator);

export default App;