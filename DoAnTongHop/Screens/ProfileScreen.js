import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, ScrollView , Alert} from 'react-native'
import axios from 'axios'
import * as ApiConfig from '@constants/ApiConfig'
import Wrapper from './Loading'
import * as Common from '@constants/Common'

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile : [],
            id : 0,
            visible: false
        }        
    }

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

    onClickUpdateProfile = (id) => {
        this.props.navigation.navigate('UpdateProfileScreen', {id : id})
    }

    onClickCreateProfile = () => {
        this.props.navigation.navigate('CreateProfileScreen')
    }   

    onClickDeleteProfile = (id) => {
        console.log(id)
        this.state.id = id
        Alert.alert(
            'Cập nhập thông tin',
            'Bạn có muốn xóa thông tin này,...???',
            [
              {text: 'Xóa', onPress: () =>{
                    this.deleteProfile()
              }},              
              {text: 'Hủy', onPress: () => console.log('Hủy xóa thông tin')},
            ],
            {cancelable: false},
          );
    }

    deleteProfile = async() => {

        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "id": this.state.id    
        }
    
        await axios.post( ApiConfig.LINK + 'deleteProfile', {data},{headers})
        .then(response => {
            let result = response.data
            console.log(result);
            if(result){
                Alert.alert('Xóa dữ liệu thành công!!!')
                this.fetchProfile() 
            }
            else
            {
                Alert.alert('Xóa dữ liệu không thành công!!!')
            }            
        })
        .catch(error => {
                console.log(error);
            }
        )
    }

    render() {
        return (
            <Wrapper  isLoading = {this.state.visible} customStyle = {styles.loading}>
                <ImageBackground source={require('@assets/images/background.png')} style={{flex: 1, width: '100%', height: '100%'}}>
                    <View style={{flex: 7, width: '100%', height: '100%'}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} >       
                            <View style={{ alignItems: 'center', width: '100%', paddingBottom: 15, paddingTop: 15}}>
                                {this.state.profile.map( (item) =>{
                                    return (
                                        <View style={styles.profile} key={item.id}>
                                            <View style={{width: '90%', borderBottomWidth: 0.5, justifyContent : 'center', alignItems: 'center'}}>
                                                <Text style={{fontSize: Common.labelSize,  fontWeight: 'bold', marginVertical: 10}}>{item.ho_ten} ({item.nghe_nghiep})</Text>
                                                <Text style={{fontSize: Common.textSizeInput, width: '100%'}}>Giới tính: {item.gioi_tinh}</Text>
                                                <Text style={{fontSize: Common.textSizeInput, width: '100%'}}>Ngày sinh: {item.nam_sinh}</Text>
                                                <Text style={{fontSize: Common.textSizeInput, width: '100%'}}>CMND: {item.cmnd}</Text>
                                                <Text style={{fontSize: Common.textSizeInput, width: '100%', marginBottom: 10}}>HKTT: {item.hktt}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', width: '90%', justifyContent : 'center', alignItems: 'center', marginVertical: 5}}>
                                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderRightWidth: 0.25}} onPress={() => this.onClickUpdateProfile(item.id)}>
                                                    <Text style={{fontSize: Common.textSizeInput, color: '#000000'}} >Sửa</Text>
                                                </TouchableOpacity>  
                                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderLeftWidth: 0.25}} onPress={() => this.onClickDeleteProfile(item.id)}>
                                                    <Text style={{fontSize: Common.textSizeInput, color: '#000000'}} >Xoá</Text>
                                                </TouchableOpacity>  
                                            </View>
                                        </View>
                                    )
                                })}                               
                                
                            </View>     
                        </ScrollView>  
                    </View>  
                    <View style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center', backgroundColor: Common.titleColor, borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                        <TouchableOpacity style={{ width: '20%', height: '60%', justifyContent : 'center', alignItems: 'center'}} onPress={this.onClickCreateProfile}>
                            <Image source={require('@assets/images/add.png')} style={{height: '100%', width: '100%', resizeMode: 'contain'}}/> 
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Wrapper>
        )
    }

    componentDidMount = () => {
        this.setState({
            visible: true
        })
        this.fetchProfile();
    }
    
    fetchProfile = async() => {
    
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "idPhong": global.idPhong
        }
    
        await axios.post(
             ApiConfig.LINK + 'getKhachTro', {data},{ headers }
        )
        .then(response => {
            let profile = response.data
            if(profile.length != 0){
                this.setState ({
                    profile : profile
                })
                console.log(this.state.profile);
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
}

const styles = StyleSheet.create({       
    profile: {
        alignItems: 'center',
        backgroundColor: 'white', 
        width: '90%',
        borderRadius: 10, 
        marginTop: 15,         
        shadowColor: '#000000', 
        shadowOffset: { 
            width: 0, 
            height: 3 
        }, 
        shadowRadius: 5, 
        shadowOpacity: 0.5,
        elevation: 5,
    },
    loading: {
        flex:1
    }
})