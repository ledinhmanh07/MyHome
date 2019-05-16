import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
    
    static navigationOptions = {
        title: 'Welcome Screen',
        header: null
    };

    onClickRoomDetail = () => {
        this.props.navigation.navigate('RoomDetail')
    }
    onClickBill = () => {
        this.props.navigation.navigate('BillScreen')
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <View style={{flex: 2 , alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#8B0000'}}>NHÀ TRỌ THÔNG MINH</Text>
                        <Image source={require('@assets/images/logo.png')} style={{height: '40%', resizeMode: 'contain'}}/>
                    </View>                        
                    <View style={{flex: 4, width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1, alignItems: 'center', width:'100%', height: '100%', flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'center', width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={{ height: '80%', width: '80%', backgroundColor: '#3A5FCD', opacity:0.7, alignItems: 'center', justifyContent: 'center',  borderRadius: 10}} onPress={this.onClickRoomDetail}>
                                    <Image source={require('@assets/images/house.png')} style={{height: '50%', width: '50%', resizeMode: 'contain', opacity: 1}}/>
                                    <Text style={{fontSize:20, color: '#FFFFFF', textAlign: 'center', width: '80%'}} >Thông Tin Phòng</Text>
                                </TouchableOpacity>  
                            </View>  
                            <View style={{flex: 1, alignItems: 'center', width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={{ height: '80%', width: '80%', backgroundColor: '#3A5FCD', opacity:0.7, alignItems: 'center', justifyContent: 'center',  borderRadius: 10}} onPress={this.onClick}>
                                    <Image source={require('@assets/images/profile.png')} style={{height: '50%', width: '50%', resizeMode: 'contain'}}/>   
                                    <Text style={{fontSize:20, color: '#FFFFFF', textAlign: 'center', width: '80%'}} >Thông Tin Cá Nhân</Text>
                                </TouchableOpacity>
                            </View> 
                        </View> 
                        <View style={{flex: 1, alignItems: 'center', width:'100%', height: '100%', flexDirection: 'row'}}>                           
                            <View style={{flex: 1, alignItems: 'center', width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={{ height: '80%', width: '80%', backgroundColor: '#3A5FCD', opacity:0.7, alignItems: 'center', justifyContent: 'center',  borderRadius: 10}} onPress={this.onClickBill}>
                                    <Image source={require('@assets/images/bill.png')} style={{height: '50%', width: '50%', resizeMode: 'contain'}}/>
                                    <Text style={{fontSize:20, color: '#FFFFFF', textAlign: 'center', width: '80%'}} >Hoá Đơn</Text>
                                </TouchableOpacity>
                            </View>  
                            <View style={{flex: 1, alignItems: 'center', width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={{ height: '80%', width: '80%', backgroundColor: '#3A5FCD', opacity:0.7, alignItems: 'center', justifyContent: 'center',  borderRadius: 10}} onPress={this.onClick}>
                                    <Image source={require('@assets/images/support.png')} style={{height: '50%', width: '50%', resizeMode: 'contain'}}/>
                                    <Text style={{fontSize:20, color: '#FFFFFF', textAlign: 'center', width: '80%'}} >Hổ Trợ</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>     
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({       

})