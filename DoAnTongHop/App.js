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
import TabBillScreen from '@screens/TabBillScreen';
import TabProfileScreen from '@screens/TabProfileScreen';
import SupportScreen from '@screens/SupportScreen';
import CarScreen from '@screens/CarScreen';
import MotorDetailScreen from '@screens/MotorDetailScreen';


const MainNavigator = createStackNavigator(
  {
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
    TabBillScreen: { screen: TabBillScreen },
    TabProfileScreen: { screen: TabProfileScreen },
    SupportScreen: { screen: SupportScreen },
    CarScreen: { screen: CarScreen },
    MotorDetailScreen: { screen: MotorDetailScreen },
  },
  {
    initialRouteName: "LoginScreen",
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
