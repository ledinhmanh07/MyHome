import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, TextInput , Alert} from 'react-native'
import * as Common from '@constants/Common'
import * as ApiConfig from '@constants/ApiConfig'
import axios from 'axios'
import Wrapper from './Loading'

export default class UpdateProfileScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            "id": this.props.navigation.state.params.id,
            "cmnd": "",
            "gioi_tinh": "",
            "hktt": "",
            "ho_ten": "",      
            "nam_sinh": "",
            "nghe_nghiep": "",            
        }        
    }

    static navigationOptions = {
        title: 'Cập Nhập Thông Tin',
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

    onSaveClick = () => {
        console.log(this.state)
        Alert.alert(
            'Cập nhập thông tin',
            'Bạn có muốn cập nhập thông tin này,...???',
            [
              {text: 'Cập nhập', onPress: () =>{
                this.setState({
                    visible: false
                })
                this.updateProfile()
              }},              
              {text: 'Hủy', onPress: () => console.log('Hủy cập nhập')},
            ],
            {cancelable: false},
          );
    }

    updateProfile = async() => {

        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "id": this.state.id,
            "cmnd": this.state.cmnd,
            "gioi_tinh": this.state.gioi_tinh,
            "hktt": this.state.hktt,
            "ho_ten": this.state.ho_ten,      
            "nam_sinh": this.state.nam_sinh,
            "nghe_nghiep": this.state.nghe_nghiep,    
        }
    
        await axios.post( ApiConfig.LINK + 'updateProfile', {data},{headers})
        .then(response => {
            let result = response.data
            console.log(result);
            if(result){
                Alert.alert('Cập nhập dữ liệu thành công!!!')
                this.props.navigation.goBack()
            }
            else
            {
                Alert.alert('Cập nhập dữ liệu không thành công!!!')
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

    render() {
        return ( 
            <Wrapper  isLoading = {this.state.visible} customStyle = {styles.loading}>                       
                <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', width: '100%', height: '100%', marginTop: Common.deviceHeight/10, marginBottom: Common.deviceHeight/10}} >       
                        <View style={styles.form}>
                            <View style={{flex:6, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Họ và tên:</Text>
                                    <TextInput                            
                                        placeholder='Họ và tên,...'
                                        value={this.state.ho_ten}
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ ho_ten : text })}
                                    />
                                </View>                            
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Giới tính</Text>
                                    <TextInput                            
                                        placeholder='Giới tính,...'
                                        value={this.state.gioi_tinh}
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ gioi_tinh : text })}
                                    />  
                                </View>
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Nghề nghiệp</Text>
                                    <TextInput                            
                                        placeholder='Nghề nghiệp,...'
                                        value={this.state.nghe_nghiep}
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ nghe_nghiep : text })}
                                    />  
                                </View>
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Ngày sinh</Text>
                                    <TextInput                            
                                        placeholder='Ngày sinh,...'
                                        value={this.state.nam_sinh}
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({nam_sinh : text})}
                                    />  
                                </View>
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Số CMND</Text>
                                    <TextInput                            
                                        placeholder='Số CMND,...'
                                        value={this.state.cmnd}
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ cmnd: text})}
                                    />  
                                </View>
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>HKTT</Text>
                                    <TextInput                            
                                        placeholder='Hộ khẩu thường trú,...'
                                        value={this.state.hktt}
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ hktt : text})}
                                    />  
                                </View>
                            </View>
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button} onPress={this.onSaveClick}>
                                    <Text style={{fontSize:Common.titleSize, color: '#fff'}} >Lưu</Text>
                                </TouchableOpacity>  
                            </View>
                        </View>
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
            "id" : this.state.id            
        }

        console.log(data);
    
        await axios.post(
             ApiConfig.LINK + 'getKhachTro1', {data},{ headers }
        )
        .then(response => {
            let profile = response.data
            if(profile != null){
                this.setState ({
                    "cmnd": profile.cmnd,
                    "gioi_tinh": profile.gioi_tinh,
                    "hktt": profile.hktt,
                    "ho_ten": profile.ho_ten,      
                    "nam_sinh": profile.nam_sinh,
                    "nghe_nghiep": profile.nghe_nghiep   
                })
                console.log(profile);
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
    form: {
        flex: 8, 
        backgroundColor: '#ffffff',         
        alignItems: 'center', 
        width: '90%', 
        borderRadius: 20,  
        shadowColor: '#000000', 
        shadowOffset: { 
            width: 0, 
            height: 3 
        }, 
        shadowRadius: 5, 
        shadowOpacity: 0.5,
        elevation: 10, 
    },    
    input: {
        textAlign: 'center', 
        color: '#000',
        marginLeft: '2%', 
        width: '63%', 
        height: '60%', 
        fontSize:Common.textSizeInput, 
        borderBottomColor: '#000', 
        borderBottomWidth: 1
    },
    button: {
        height: '60%', 
        width: '80%', 
        backgroundColor: '#3A5FCD', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5
    },
    viewInput: {
        flexDirection: 'row', 
        width: '85%', 
        height: '15%', 
        alignItems: 'center',
    },
    viewButton: {
        flex:1, 
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    label: { 
        color: '#000', 
        fontSize: Common.labelSize, 
        width: '35%'
    },
    loading: {
        flex:1
    }
})