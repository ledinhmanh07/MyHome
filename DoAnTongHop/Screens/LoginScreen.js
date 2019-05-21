import React, { Component } from 'react';
import { View, TextInput, ImageBackground ,Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class LoginScreen extends Component {
    
    static navigationOptions = {
        title: 'Welcome Screen',
        header: null
    };

    onClick = () => {
        this.props.navigation.replace('HomeScreen')
    }

    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 2, alignItems: 'center'}}>
                    <View style={{flex: 2 , alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#8B0000'}}>NHÀ TRỌ THÔNG MINH</Text>
                        <Image source={require('@assets/images/logo.png')} style={{height: '40%', resizeMode: 'contain'}}/>
                    </View>
                    <View style={{flex: 2, width: '90%', backgroundColor: '#27408B', alignItems: 'center', justifyContent: 'center', opacity:0.8}}>
                        <TextInput                            
                            placeholder='Tên Đăng Nhập'
                            placeholderTextColor = '#AAAAAA'
                            style={{textAlign: 'center', color: '#fff', width: '80%', height: '15%', fontSize:20, borderBottomColor: '#000', borderBottomWidth: 1}}
                            onChangeText={(text) => this.setState({text})}
                        />
                        <TextInput
                            placeholder='Mật Khẩu'
                            placeholderTextColor = '#AAAAAA'
                            style={{textAlign: 'center', color: '#fff', width: '80%', height: '15%', fontSize:20, marginTop: '5%', borderBottomColor: '#000', borderBottomWidth: 1}}
                            onChangeText={(text) => this.setState({text})}
                        />                                 
                    </View>                
                    <View style={{flex: 3, alignItems: 'center', width:'100%', height: '100%'}}>
                        <View style={{marginTop: '5%', alignItems: 'center', width:'100%', height: '100%'}}>
                            <TouchableOpacity style={{ height: '18%', width: '90%', backgroundColor: '#3A5FCD', opacity:0.8, alignItems: 'center', justifyContent: 'center'}} onPress={this.onClick}>
                                <Text style={{fontSize:20, color: '#FFFFFF'}} >ĐĂNG NHẬP</Text>
                            </TouchableOpacity>  
                            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginTop: '5%'}} onPress={this.onClick}>
                                <Text style={{fontSize:15, color: '#000000', borderBottomColor: '#000000', borderBottomWidth: 1}} >Quên mật khẩu!</Text>
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