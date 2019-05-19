import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

export default class BillHistoryScreen extends Component {
    
    static navigationOptions = {
        title: 'Lịch Sử Hoá Đơn',
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

    onClickEnterBill = () => {
        this.props.navigation.navigate('')
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, width: '100%', height: '100%'}}>
                    <View style={{flex: 4, width: '100%', height: '100%'}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} >       
                            <View style={{ alignItems: 'center', width: '100%', paddingBottom: 20, paddingTop: 20}}>
                                <View style={styles.profile}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: '5%', marginBottom: 5}}>Lê Đình Mạnh (Sinh Viên)</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Giới tính: Nam</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Ngày sinh: 10/02/1997</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>CMND: 285612119</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Địa chỉ thường trú: 131 Bùi Đình Túy, Bình Thạnh, Tp.HCM</Text>
                                </View>
                                <View style={styles.profile}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: '5%', marginBottom: 5}}>Võ Đình Phước Trung (Sinh Viên)</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Giới tính: Nam</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Ngày sinh: 22/06/1997</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>CMND: 285612115</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Địa chỉ thường trú: 151 Tôn Đức Thắng, Quận 1, Tp.HCM</Text>
                                </View>
                                <View style={styles.profile}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: '5%', marginBottom: 5}}>Lê Đình Mạnh (Sinh Viên)</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Giới tính: Nam</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Ngày sinh: 10/02/1997</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>CMND: 285612119</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Địa chỉ thường trú: 131 Bùi Đình Túy, Bình Thạnh, Tp.HCM</Text>
                                </View>
                                <View style={styles.profile}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: '5%', marginBottom: 5}}>Võ Đình Phước Trung (Sinh Viên)</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Giới tính: Nam</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Ngày sinh: 22/06/1997</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>CMND: 285612115</Text>
                                    <Text style={{fontSize: 14, marginLeft: '5%', width: '90%'}}>Địa chỉ thường trú: 151 Tôn Đức Thắng, Quận 1, Tp.HCM</Text>
                                </View>
                            </View>  
                        </ScrollView>  
                    </View>  
                    <View style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{ width: '20%', height: '40%', justifyContent : 'center', alignItems: 'center'}} onPress={this.onClickHistoryBill}>
                            <Image source={require('@assets/images/add_profile.png')} style={{height: '100%', width: '100%', resizeMode: 'contain', tintColor: '#00008B'}}/> 
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({       
    viewButton: {
        alignItems: 'center', 
        width:'50%', 
        height: '50%'
    },
    button: { 
        height: '80%', 
        width: '80%', 
        backgroundColor: '#FFFFFF', 
        opacity:0.8, 
        alignItems: 'center', 
        justifyContent: 'center',  
        borderRadius: 10,
        elevation: 5,
        borderWidth: 0.5,
        borderColor: '#000'
    },
    icon: {
        height: '50%', 
        width: '50%', 
        resizeMode: 'contain'
    },
    textBtn: {  
        fontSize:20, 
        color: '#000', 
        textAlign: 'center', 
        width: '80%'
    },
    profile: {
        backgroundColor: 'white', 
        width: '80%', 
        height: 150, 
        borderRadius: 10, 
        marginTop: 20, 
        justifyContent : 'center', 
        opacity:0.8,
        shadowColor: '#000000', 
        shadowOffset: { 
            width: 0, 
            height: 3 
        }, 
        shadowRadius: 5, 
        shadowOpacity: 0.5,
        elevation: 5,
    }
})