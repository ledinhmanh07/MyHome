import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
    
    static navigationOptions = {
        title: 'Hóa Đơn',
        headerStyle: {
            backgroundColor: '#00008B',   
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign:"center", 
            flex:1 
          },
    };

    onClickEnterBill = () => {
        this.props.navigation.navigate('EnterBillScreen')
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <View style={{flex: 2 , alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#8B0000'}}>NHÀ TRỌ THÔNG MINH</Text>
                        <Image source={require('@assets/images/logo.png')} style={{height: '40%', resizeMode: 'contain'}}/>
                    </View>                        
                    <View style={{flex: 4, width:'100%', height: '100%', flexDirection: 'row'}}>
                        <View style={{alignItems: 'center', width:'50%', height: '50%'}}>
                            <TouchableOpacity style={{ height: '80%', width: '80%', backgroundColor: '#3A5FCD', opacity:0.7, alignItems: 'center', justifyContent: 'center',  borderRadius: 10}} onPress={this.onClickEnterBill}>
                                <Image source={require('@assets/images/bill_import.png')} style={{height: '50%', width: '50%', resizeMode: 'contain', opacity: 1}}/>
                                <Text style={{fontSize:20, color: '#FFFFFF', textAlign: 'center', width: '80%'}} >Nhập Điện-Nước</Text>
                            </TouchableOpacity>  
                        </View>  
                        <View style={{alignItems: 'center', width:'50%', height: '50%'}}>
                            <TouchableOpacity style={{ height: '80%', width: '80%', backgroundColor: '#3A5FCD', opacity:0.7, alignItems: 'center', justifyContent: 'center',  borderRadius: 10}} onPress={this.onClickHistoryBill}>
                                <Image source={require('@assets/images/bill_history.png')} style={{height: '50%', width: '50%', resizeMode: 'contain'}}/>   
                                <Text style={{fontSize:20, color: '#FFFFFF', textAlign: 'center', width: '80%'}} >Lịch Sử Hóa Đơn</Text>
                            </TouchableOpacity>
                        </View> 
                        
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({       

})