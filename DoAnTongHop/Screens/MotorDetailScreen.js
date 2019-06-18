import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, ScrollView , Alert, Modal, TextInput} from 'react-native'
import axios from 'axios'
import * as Common from '@constants/Common'
import * as ApiConfig from '@constants/ApiConfig'

export default class MotorDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile : [],
            id_xe : 0,
            so_xe: '',
            mo_ta: '',
            isCreate: false,
            isUpdate: false
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

    // onClickUpdateProfile = (id) => {
    //     this.props.navigation.navigate('UpdateProfileScreen', {id : id})
    // }

    onClickCreateMotor = () => {
        Alert.alert(
            'Cập nhập thông tin',
            'Bạn có muốn cập nhập thông tin này,...???',
            [
              {text: 'Thêm', onPress: () => {
                    if(this.state.so_xe.length == 0 || this.state.mo_ta.length == 0){
                        Alert.alert("Bạn phải nhập đầy đủ thông tin,...!!!")
                    }
                    else{
                        this.createMotor()
                    }    
              }},              
              {text: 'Hủy', onPress: () => {
                    console.log('Hủy thêm thông tin')
              }},
            ],
            {cancelable: false},
        )
    }

    createMotor = async() => {

        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "id_phong": global.idPhong,
            "so_xe": this.state.so_xe,
            "mo_ta": this.state.mo_ta
        }
    
        await axios.post( ApiConfig.LINK + 'createMotor', {data},{headers})
        .then(response => {
            let result = response.data
            console.log(result);
            if(result){
                Alert.alert('Thêm dữ liệu thành công!!!');
                this.setState({ isCreate: false});
                this.fetchMotorDetail();  
            }
            else
            {
                Alert.alert('Thêm dữ liệu không thành công!!!');
            }        
        })
        .catch(error => {
                console.log(error);
            }
        )
    }

    onClickDeleteMotor = (id_xe) => {
        console.log(id_xe)
        this.state.id_xe = id_xe
        Alert.alert(
            'Cập nhập thông tin',
            'Bạn có muốn xóa thông tin này,...???',
            [
              {text: 'Xóa', onPress: () => this.deleteMotorDetail()},              
              {text: 'Hủy', onPress: () => console.log('Hủy xóa thông tin')},
            ],
            {cancelable: false},
        );
    }

    deleteMotorDetail = async() => {

        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "id_xe": this.state.id_xe    
        }
    
        await axios.post( ApiConfig.LINK + 'deleteMotor', {data},{headers})
        .then(response => {
            let result = response.data
            console.log(result);
            if(result){
                Alert.alert('Xóa dữ liệu thành công!!!')
                this.fetchMotorDetail() 
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
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, width: '100%', height: '100%'}}>
                    <View style={{flex: 6, width: '100%', height: '100%'}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} >       
                            <View style={{ alignItems: 'center', width: '100%', paddingBottom: 20, paddingTop: 20}}>
                                {this.state.profile.map( (item) =>{
                                    return (
                                        <View style={styles.profile} key={item.id_xe}>                                            
                                            <View style={{flex: 5, width: '90%', height: '100%', borderBottomWidth: 0.5, justifyContent : 'center', alignItems: 'center'}}>      
                                                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>{item.so_xe}</Text>                                          
                                                <Text style={{fontSize: 15, width: '95%', textAlign: "center"}}>Mô tả: {item.mo_ta}</Text>
                                            </View>
                                            <View style={{flex:2, flexDirection: 'row', width: '90%', height: '95%', justifyContent : 'center', alignItems: 'center'}}>
                                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderRightWidth: 0.25}} onPress={() => this.onClickUpdateMotor(item.id_xe, item.so_xe, item.mo_ta)}>
                                                    <Text style={{fontSize:15, color: '#000000'}} >Sửa</Text>
                                                </TouchableOpacity>  
                                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderLeftWidth: 0.25}} onPress={() => this.onClickDeleteMotor(item.id_xe)}>
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
                        <TouchableOpacity style={{ width: '20%', height: '60%', justifyContent : 'center', alignItems: 'center'}} onPress={() =>this.setState({ isCreate: true})}>
                            <Image source={require('@assets/images/add_profile.png')} style={{height: '100%', width: '100%', resizeMode: 'contain', tintColor: '#00008B'}}/> 
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Thêm Thông Tin Xe  */}
                {/* <Modal
                    visible={this.state.isError}
                    presentationStyle="overFullScreen"
                    animationType="slide"
                    transparent = {true}
                >       
                    <View style={{flex: 1, backgroundColor: 'rgba(59,89,152,0.5)', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={[Common.styles.popupBackground, styles.container]}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.message}> {GLOBAL.errorMessage} </Text>
                            </View>
                            <View style={styles.separator} />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({ isError: false })}>
                                <Text style={[styles.button]}> {I18n.t("CANCEL")} </Text>
                            </TouchableOpacity>
                        </View>                        
                        
                    </View>
                </Modal> */}

                {/* Sửa Thông Tin Xe */} 
                <Modal
                    visible={this.state.isCreate}
                    presentationStyle="overFullScreen"
                    animationType="slide"
                    transparent = {true}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >       
                    <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: 'rgba(59,89,152,0.5)', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.form}>
                            <View style={{flex:2, width: '95%', height: '100%', justifyContent : 'center', alignItems: 'center', borderBottomWidth: 0.5}}>
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Số xe</Text>
                                    <TextInput                            
                                        placeholder='Số xe,...'
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ so_xe : text })}
                                    />
                                </View>                              
                                <View style={styles.viewInput}>
                                    <Text style={styles.label}>Mô tả</Text>
                                    <TextInput                            
                                        placeholder='Mô tả,...'
                                        placeholderTextColor = '#777777'
                                        style={styles.input}
                                        onChangeText={(text) => this.setState({ mo_ta: text})}
                                    />  
                                </View>                            
                            </View>
                            <View style={{flex:1, flexDirection: 'row', width: '90%', height: '95%', justifyContent : 'center', alignItems: 'center'}}>
                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderRightWidth: 0.25}} onPress={() =>this.setState({ isCreate: false})}>
                                    <Text style={{fontSize:15, color: '#000000'}} >Hủy</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={{flex: 1, alignItems: 'center', width: '90%', justifyContent: 'center', borderLeftWidth: 0.25}} onPress={this.onClickCreateMotor}>
                                    <Text style={{fontSize:15, color: '#000000'}} >Lưu</Text>
                                </TouchableOpacity>  
                            </View>
                        </View>      
                    </View>
                </Modal>
            </ImageBackground>
        )
    }

    componentDidMount = () => {
        this.fetchMotorDetail();
    }
    
    fetchMotorDetail = async() => {
    
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "idPhong": global.idPhong
        }
    
        await axios.post(
             ApiConfig.LINK + 'getMotorDetail', {data},{ headers }
        )
        .then(response => {
            let profile = response.data
            if(profile.length != 0){
                this.setState ({
                    profile : profile
                })
                console.log(this.state.profile);
            }        
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
        width: '80%', 
        height: 120, 
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
    },
    container: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',        
        justifyContent: 'center',        
    },
    form: {
        backgroundColor: '#ffffff',   
        height: 220,      
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
        height: '50%', 
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