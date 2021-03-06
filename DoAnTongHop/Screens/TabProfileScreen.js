import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Common from '@constants/Common'

export default class TabProfileScreen extends Component {
    
    static navigationOptions = {
        title: 'Thông Tin',
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

    onClickProfile = () => {
        this.props.navigation.navigate('ProfileScreen')
    }
    onClickMotorDetail = () => {
        this.props.navigation.navigate('MotorDetailScreen')
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <View style={{flex: 2 , alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.logoText}>NHÀ TRỌ THÔNG MINH</Text>
                    </View>                        
                    <View style={{flex: 4, width:'100%', height: '100%', flexDirection: 'row'}}>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickProfile}>
                                <Image source={require('@assets/images/profile.png')} style={styles.icon}/>
                                <Text style={styles.textBtn} >Thông Tin Khách Trọ</Text>
                            </TouchableOpacity>  
                        </View>  
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClickMotorDetail}>
                                <Image source={require('@assets/images/car.png')} style={styles.icon}/>   
                                <Text style={styles.textBtn} >Xe Gửi Trọ</Text>
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