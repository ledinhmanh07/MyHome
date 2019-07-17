import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import * as Common from '@constants/Common';
import { NavigationActions } from 'react-navigation'

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
            flex:1,             
          },
          headerRight: <View/>          
    };

    onClickChangePassword = () => {
        this.props.navigation.navigate('ChangePasswordScreen');
    }
    onClickSupport = () => {
        // this.props.navigation.navigate('SupportScreen');
        Alert.alert("Thông báo","Chức năng hiện tại chưa được hoàn thiện, vui lòng chờ bản cập nhập tiếp theo,...!!!");
    }
    onClickLogout = () => {
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LoginScreen' })], 0);
    }
    onClickRoomDetail = () => {
        this.props.navigation.navigate('RoomDetail');
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%', flex: 1, alignItems: 'center'}}>
                <View style={{flex: 8 , alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.logoText}>NHÀ TRỌ THÔNG MINH</Text>
                </View>       
                <View style={{flex: 19, width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.viewRowButton}>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickRoomDetail}>
                                <Image source={require('@assets/images/house.png')} style={styles.icon}/>
                                <Text style={styles.textBtn} >Thông Tin Phòng</Text>
                            </TouchableOpacity>
                        </View>  
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickSupport}>
                                <Image source={require('@assets/images/support.png')} style={styles.icon}/>   
                                <Text style={styles.textBtn} >Hỗ Trợ</Text>
                            </TouchableOpacity>
                        </View> 
                    </View> 
                    <View style={styles.viewRowButton}>                           
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickChangePassword}>
                                <Image source={require('@assets/images/change_password.png')} style={styles.icon}/>
                                <Text style={styles.textBtn} >Đổi Mật Khẩu</Text>
                            </TouchableOpacity>
                        </View>  
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickLogout}>
                                <Image source={require('@assets/images/logout.png')} style={styles.icon}/>
                                <Text style={styles.textBtn} >Đăng Xuất</Text>
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
        flex: 1, 
        alignItems: 'center', 
        width:'100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    viewRowButton: {
        flex: 1, 
        alignItems: 'center', 
        width:'100%', 
        height: '100%', 
        flexDirection: 'row'       
    },
    button: { 
        height: '80%', 
        width: '80%', 
        backgroundColor: Common.buttonColorOpacity, 
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
    },
    logoText: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#3B5998',
        paddingHorizontal: 10,
        paddingTop: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: '#3B5998',
        borderWidth: 4,
    },
})