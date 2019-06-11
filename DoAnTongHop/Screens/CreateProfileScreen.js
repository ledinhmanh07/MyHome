import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, TextInput , Alert} from 'react-native'
import * as Common from '@constans/Common'
import axios from 'axios'

export default class CreateProfileScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            "id_phong": global.idPhong,
            "cmnd": "",
            "gioi_tinh": "",
            "hktt": "",
            "ho_ten": "",      
            "nam_sinh": "",
            "nghe_nghiep": "",            
        }        
    }

    static navigationOptions = {
        title: 'Thêm Thông Tin',
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

    onCreateProfileClick = () => {
        Alert.alert(
            'Cập nhập thông tin',
            'Bạn có muốn cập nhập thông tin này,...???',
            [
              {text: 'Thêm', onPress: () => {
                if(this.state.ho_ten.length == 0 || this.state.cmnd.length == 0 || this.state.gioi_tinh.length == 0 || 
                    this.state.hktt.length == 0 || this.state.nam_sinh.length == 0 || this.state.nghe_nghiep.length == 0){
                        Alert.alert("Bạn phải nhập đầy đủ thông tin,...!!!")
                    }
                    else{
                        this.createProfile()
                    }    
              }},              
              {text: 'Hủy', onPress: () => console.log('Hủy thêm thông tin')},
            ],
            {cancelable: false},
        )            
    }

    createProfile = async() => {

        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "id_phong": this.state.id_phong,
            "cmnd": this.state.cmnd,
            "gioi_tinh": this.state.gioi_tinh,
            "hktt": this.state.hktt,
            "ho_ten": this.state.ho_ten,      
            "nam_sinh": this.state.nam_sinh,
            "nghe_nghiep": this.state.nghe_nghiep,    
        }
    
        await axios.post('http://172.17.0.18:3000/api/createProfile', {data},{headers})
        .then(response => {
            let result = response.data
            console.log(result);
            if(result){
                Alert.alert('Thêm dữ liệu thành công!!!')
                this.props.navigation.goBack()   
            }
            else
            {
                Alert.alert('Thêm dữ liệu không thành công!!!')
            }        
        })
        .catch(error => {
                console.log(error);
            }
        )
    }

    render() {
        return (                        
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', width: '100%', height: '100%', marginTop: Common.deviceHeight/10, marginBottom: Common.deviceHeight/10}} >       
                      
                    <View style={styles.form}>
                        <View style={{flex:6, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                        <View style={styles.viewInput}>
                                <Text style={styles.label}>Họ và tên:</Text>
                                <TextInput                            
                                    placeholder='Họ và tên,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ ho_ten : text })}
                                />
                            </View>                            
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Giới tính</Text>
                                <TextInput                            
                                    placeholder='Giới tính,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ gioi_tinh : text })}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Nghề nghiệp</Text>
                                <TextInput                            
                                    placeholder='Nghề nghiệp,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ nghe_nghiep : text })}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Ngày sinh</Text>
                                <TextInput                            
                                    placeholder='Ngày sinh,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({nam_sinh : text})}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Số CMND</Text>
                                <TextInput                            
                                    placeholder='Số CMND,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ cmnd: text})}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>HKTT</Text>
                                <TextInput                            
                                    placeholder='Hộ khẩu thường trú,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ hktt : text})}
                                />  
                            </View>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onCreateProfileClick}>
                                <Text style={{fontSize:Common.titleSize, color: '#fff'}} >Lưu</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>   
                    
                </View>  
            </ImageBackground>
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
    }
})