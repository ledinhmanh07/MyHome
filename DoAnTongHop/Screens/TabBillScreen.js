import React, { Component } from 'react';
import {Tab, Tabs, Container, Header} from 'native-base'
import EnterBillScreen from '@screens/EnterBillScreen';
import CurrentBillScreen from '@screens/CurrentBillScreen';
export default class TabBillScreen extends Component{
    static navigationOptions = {
        title: 'Hóa Đơn',
        headerStyle: {
            backgroundColor: '#3B5998',   
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign:"center", 
            flex:1 
          },
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
