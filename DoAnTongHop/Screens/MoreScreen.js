import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Common from '@constants/Common'

export default class MoreScreen extends Component {
    
    static navigationOptions = {
        title: 'Khác',
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
    };

    onClickChangePassword = () => {
        this.props.navigation.navigate('ChangePasswordScreen')
    }
    onClickSupport = () => {
        this.props.navigation.navigate('SupportScreen')
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <View style={{flex: 2 , alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#8B0000'}}>NHÀ TRỌ THÔNG MINH</Text>
                    </View>                        
                    <View style={{flex: 4, width:'100%', height: '100%', flexDirection: 'row'}}>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickProfile}>
                                <Image source={require('@assets/images/changePass.png')} style={styles.icon}/>
                                <Text style={styles.textBtn} >Đổi Mật Khẩu</Text>
                            </TouchableOpacity>  
                        </View>  
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickMotorDetail}>
                                <Image source={require('@assets/images/support.png')} style={styles.icon}/>   
                                <Text style={styles.textBtn} >Hổ Trợ</Text>
                            </TouchableOpacity>
                        </View> 
                        
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
        alignItems: 'center', 
        justifyContent: 'center',  
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000',
        shadowColor: '#000000', 
        shadowOffset: { 
            width: 0, 
            height: 3 
        }, 
        shadowRadius: 5, 
        shadowOpacity: 0.5,
        elevation: 5,
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
    }
})