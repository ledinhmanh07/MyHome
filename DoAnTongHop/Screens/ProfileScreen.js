import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile : ''
        }        
    }

    static navigationOptions = {
        title: 'Thông Tin',
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

    onClickUpdateProfile = () => {
        this.props.navigation.navigate('UpdateProfileScreen')
    }
    onClickCreateProfile = () => {
        this.props.navigation.navigate('CreateProfileScreen')
    }    
    render() {
        return (
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, width: '100%', height: '100%'}}>
                    <View style={{flex: 4, width: '100%', height: '100%'}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} >       
                            <View style={{ alignItems: 'center', width: '100%', paddingBottom: 20, paddingTop: 20}}>
                                {this.state.profile.map( (item) =>{
                                    return (
                                        <View style={styles.profile} key={item.id}>
                                            <View style={{flex: 5, width: '90%', height: '100%', borderBottomWidth: 0.5, justifyContent : 'center', alignItems: 'center'}}>
                                                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>{item.ho_ten} ({item.nghe_nghiep})</Text>
                                                <Text style={{fontSize: 15, width: '100%'}}>Giới tính: {item.gioi_tinh}</Text>
                                                <Text style={{fontSize: 15, width: '100%'}}>Ngày sinh: {item.ngay_sinh}</Text>
                                                <Text style={{fontSize: 15, width: '100%'}}>CMND: {item.cmnd}</Text>
                                                <Text style={{fontSize: 15, width: '100%'}}>Hộ khẩu thường trú: {item.hktt}</Text>
                                            </View>
                                            <View style={{flex:1, flexDirection: 'row', width: '90%', height: '95%', justifyContent : 'center', alignItems: 'center'}}>
                                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderRightWidth: 0.5}} onPress={this.onClickUpdateProfile}>
                                                    <Text style={{fontSize:15, color: '#000000'}} >Sửa</Text>
                                                </TouchableOpacity>  
                                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center'}} onPress={this.onClick}>
                                                    <Text style={{fontSize:15, color: '#000000'}} >Xoá</Text>
                                                </TouchableOpacity>  
                                            </View>
                                        </View>
                                    )
                                })}                               
                                
                            </View>  
                        </ScrollView>  
                    </View>  
                    <View style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{ width: '20%', height: '40%', justifyContent : 'center', alignItems: 'center'}} onPress={this.onClickCreateProfile}>
                            <Image source={require('@assets/images/add_profile.png')} style={{height: '100%', width: '100%', resizeMode: 'contain', tintColor: '#00008B'}}/> 
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

componentDidMount = () => {
    this.fetchProfile();
}

//parameters "wallet" is value to show money
fetchProfile = async() => {

    let headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'JWT ...' 
    }
    
    let data = {
        "sessionToken": "MOBILE_SYSTEM_AGENT",
        "key": "TRANSACTION",
        "externalTransNo": "EXT123456",
        "customerToken": customerToken
    }

    await axios.get(
        'http://172.17.0.124:3000/api/getKhachTro', data, { headers }
    )
    .then(response => {
        let profile = response.data
        if(profile !== null){
            this.state = {
                profile : JSON.stringify(profile)
            }  
        }
        console.log(JSON.stringify(profile));
    })
    .catch(error => {
            Alert.alert('', en.UNKNOWN_ERROR);
            console.log(error);
        }
    )
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
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', 
        width: '80%', 
        height: 180, 
        borderRadius: 10, 
        marginTop: 20,         
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