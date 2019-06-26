import React, { Component } from 'react';
import { View, TextInput, ImageBackground ,Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import axios from 'axios'
import * as Common from '@constants/Common'
import * as ApiConfig from '@constants/ApiConfig'
import Wrapper from './Loading'
export default class ChangePasswordScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            pass: '',
            newPass: '',
            newPassLast: '',
            visible: false
        }
    }

    static navigationOptions = {
        title: 'Đổi Mật Khẩu',
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
          headerRight: <View style={{flex: 0.2}}/>
          
    };

    onClickChangePassword = () => {
        if(this.state.newPassLast !== ''|| this.state.pass !== '' || this.state.newPass !== ''){
            if(this.state.newPassLast === this.state.newPass) {
                    if(this.state.pass !== this.state.newPass) {
                    this.setState({
                        visible: true
                    })
                    this.testPassword();
                }
                else {
                    Alert.alert("Đổi Mật Khẩu Không Thành Công","Mật khẩu mới phải khác Mật khẩu cũ,...!!!")
                }
            }
            else {
                Alert.alert("Đổi Mật Khẩu Không Thành Công","Mật khẩu mới và Mật khẩu nhập lại phải giống nhau,...!!!")
            }    
        }
        else{
            Alert.alert("Đổi Mật Khẩu Không Thành Công","Bạn chưa nhập đủ thông tin để đổi mật khẩu,...!!!")
        }
    }
    
    testPassword = async() => {
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "pass": this.state.pass,
            "idUser": global.idUser
        }
    
        await axios.post( ApiConfig.LINK + 'testPassword', {data},{headers})
        .then(response => {
            let userID = response.data
            console.log(userID);
            if(!userID){
                Alert.alert('Mật khẩu cũ nhập không chính xác!!!')
            }      
            else{
                this.props.navigation.replace('HomeScreen')
            }         
            
        })
        .catch(error => {
                console.log(error);
            }
        )
    }

    offVisible = () => {
        this.setState({
            visible: false,
            userName: 'hello'
        })   
    }

    onClick = () => {
        // this.props.navigation.replace('SupportScreen')
        //Alert.alert('Thông báo', 'Vui lòng liên hệ với ADMIN để cấp lại mật khẩu,...!!!')
        this.props.navigation.replace('HomeScreen')     
    }

    render() {
        return (
            <Wrapper  isLoading = {this.state.visible} customStyle = {styles.loading}>              
                <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput                            
                        placeholder='Mật Khẩu Cũ,...'
                        placeholderTextColor = '#AAAAAA'
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({pass : text})}
                    />
                    <TextInput                            
                        placeholder='Mật Khẩu Mới,...'
                        placeholderTextColor = '#AAAAAA'
                        style={styles.textInput}
                        keyboardType="default"
                        onChangeText={(text) => this.setState({newPass : text})}
                    />
                    <TextInput
                        placeholder='Nhập Lại Mật Khẩu Mới,...'
                        placeholderTextColor = '#AAAAAA'
                        style={styles.textInput}
                        secureTextEntry={true}
                        keyboardType="default"
                        onChangeText={(text) => this.setState({ newPassLast: text})}
                    />       
                    <TouchableOpacity style={styles.button} onPress={this.onClickChangePassword}>
                        <Text style={{fontSize: Common.textSizeInput, color: '#FFFFFF'}} >Đổi Mật Khẩu</Text>
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
    }
})