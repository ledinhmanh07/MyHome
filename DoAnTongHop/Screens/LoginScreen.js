import React, { Component } from 'react';
import { View, TextInput, ImageBackground ,Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import axios from 'axios'
import * as Common from '@constants/Common'
import * as ApiConfig from '@constants/ApiConfig'
import Wrapper from './Loading'
export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        global.idPhong = ''
        global.idUser = ''
        this.state = {
            idPhong : '',
            userName: '',
            pass: '',
            visible: false
        }
    }

    static navigationOptions = {
        title: 'Welcome Screen',
        header: null
    };

    onClickLogIn = () => {
        if(this.state.userName !== ''|| this.state.pass !== ''){
            this.setState({
                visible: true
            })
            this.testUserID()
        }
        else{
            Alert.alert("Đăng nhập thất bại","Bạn chưa nhập Tên Tài Khoản hoặc Mật Khẩu,...!!!")
        }
    }
    
    testUserID = async() => {
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "userName": this.state.userName,
            "pass": this.state.pass
        }
    
        await axios.post( ApiConfig.LINK + 'testTaiKhoan', {data},{headers})
        .then(response => {
            let userID = response.data
            console.log(userID);
            if(userID.length!=0){
                global.idPhong = userID[0].id_phong
                global.idUser = userID[0].id_user
                console.log('ID phòng là: '+global.idPhong+' - ID User: ' + global.idUser)                
                this.props.navigation.replace('HomeScreen')      
            }      
            else{
                Alert.alert('Tên đăng nhập hoặc tài khoản không đúng!!!')
            }           
            this.setState({
                visible: false
            })     
        })
        .catch(error => {
                console.log(error);
            }
        )
    }

    onClick = () => {
        // this.props.navigation.replace('SupportScreen')
        Alert.alert('Thông báo', 'Vui lòng liên hệ với ADMIN để cấp lại mật khẩu,...!!!')
        this.props.navigation.replace('HomeScreen')     
    }

    render() {
        return (
            <Wrapper  isLoading = {this.state.visible} customStyle = {styles.loading}>              
                <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.logoText}>NHÀ TRỌ THÔNG MINH</Text>
                    <TextInput                            
                        placeholder='Tên Đăng Nhập'
                        placeholderTextColor = '#AAAAAA'
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({userName : text})}
                    />
                    <TextInput
                        placeholder='Mật Khẩu'
                        placeholderTextColor = '#AAAAAA'
                        style={styles.textInput}
                        secureTextEntry={true}
                        keyboardType="default"
                        onChangeText={(text) => this.setState({ pass: text})}
                    />       
                    <TouchableOpacity style={styles.button} onPress={this.onClickLogIn}>
                        <Text style={{fontSize: Common.textSizeInput, color: '#FFFFFF'}} >ĐĂNG NHẬP</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginTop: 5}} onPress={this.onClick}>
                        <Text style={{fontSize: Common.textSizeInput, color: '#FFFFFF', textDecorationLine: 'underline'}} >Quên mật khẩu!</Text>
                    </TouchableOpacity>                              
                </ImageBackground>              
            </Wrapper>
        )
    }    
}
const styles = StyleSheet.create({
    loading: {
        flex:1
    },
    textInput: {
        height: 43,
        fontSize: Common.textSizeInput,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        width: '90%',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center'
    },
    button:{
        height: 43,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Common.titleColor,
        backgroundColor: Common.titleColor,
        paddingLeft: 10,
        width: '90%',
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    logoText: {
        marginBottom: 60,
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