import React, { Component } from 'react';
import {Tab, Tabs, Container, View} from 'native-base'
import EnterBillScreen from '@screens/EnterBillScreen';
import CurrentBillScreen from '@screens/CurrentBillScreen';
import * as Common from '@constants/Common'

export default class TabBillScreen extends Component{
    static navigationOptions = {
        title: 'Hóa Đơn',
        headerStyle: {
            backgroundColor: Common.titleColor,   
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign:"center", 
            flex:1 
          },
          headerRight: <View style={{flex: 0.2}}/>
      };
    
    render() {
        return(
        <Container>
            <Tabs>
                <Tab 
                    heading="Nhập Điện-Nước"    
                    textStyle={{ color: '#3B5998'}} 
                    activeTextStyle={{ color: '#3B5998'}}      
                    tabStyle={{backgroundColor:'#fff'}} 
                    activeTabStyle={{backgroundColor:'#fff'}}     
                >
                    <EnterBillScreen/>
                </Tab>
                <Tab 
                    heading="Hóa Đơn Tháng"
                    textStyle={{ color: '#3B5998'}} 
                    activeTextStyle={{ color: '#3B5998'}}      
                    tabStyle={{backgroundColor:'#fff'}} 
                    activeTabStyle={{backgroundColor:'#fff'}}    
                >
                    <CurrentBillScreen/>
                </Tab>
            </Tabs>
      </Container>
        )
    }
}
