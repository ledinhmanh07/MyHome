import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import axios from 'axios'
import * as ApiConfig from '@constants/ApiConfig'

export default class RoomDetail extends Component {  
    constructor(props){
        super(props);
        this.state = {
            hoa_don_thang: '',
            ngay_lap: '',
            so_nuoc_cu: '',
            so_nuoc_moi: '',
            so_dien_cu: '',
            so_dien_moi: '',
        }
    }
    onClick = () => {
        this.props.navigation.navigate('CreatePinScreen')
    }

    render() {
        return (                        
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', paddingTop: '5%'}} >       
                    <View style={{flex: 1, width: '60%', justifyContent : 'center', alignItems: 'center'}}>              
                        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: '5%'}}>PHÒNG: 411</Text>
                    </View>   
                    <View style={styles.form}>
                        <Text style={{flex: 1, color: '#000', fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>Số Điện-Nước Tháng: {this.state.hoa_don_thang}</Text>
                        <View style={{flex:3, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                            <View style={styles.viewInput}>
                                <Text style={{ color: '#000', fontSize: 20, width: '40%'}}>Số Điện:</Text>
                                <TextInput
                                    placeholder='Số điện,...'
                                    value = {this.state.so_dien_moi}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({so_dien_moi : text})}
                                />   
                            </View>
                            
                            <View style={styles.viewInput}>
                                <Text style={{ color: '#000', fontSize: 20, width: '40%'}}>Số Nước:</Text>
                               
                                <TextInput                            
                                    placeholder='Số điện,...'
                                    value={this.state.so_nuoc_moi}
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({ so_nuoc_moi : text })}
                                />
                            </View>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClick}>
                                <Text style={{fontSize:20, color: '#FFFFFF'}} >Cập Nhập</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>   
                    <View style={{flex: 3, width: '80%', justifyContent : 'center', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#008080'}}>
                        <Text style={{flex: 1, color: '#000', fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>Số Điện-Nước tháng trước</Text>
                        <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '50%', justifyContent : 'center'}}>
                            <Text style={{ color: '#000', fontSize: 15, width: '50%'}}>Số Điện: {this.state.so_dien_cu} (kW)</Text>
                            <Text style={{ color: '#000', fontSize: 15, width: '50%', textAlign: 'right'}}>Số Nước: {this.state.so_nuoc_cu} (Khối)</Text>
                        </View>
                    </View> 
                </View>  
            </ImageBackground>
        )
    }
    componentDidMount = () => {
        this.fetchBill();
    }
    
    fetchBill = async() => {
    
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "idPhong": global.idPhong
        }
    
        await axios.post(
             ApiConfig.LINK + 'getDienNuoc', {data},{ headers }
        )
        .then(response => {
            let bill = response.data
            if(bill.length != 0){
                this.setState ({
                    hoa_don_thang: bill.hoa_don_thang,
                    ngay_lap: bill.ngay_lap,
                    so_nuoc_cu: 'hell',
                    so_nuoc_moi: bill.so_dien_moi,
                    so_dien_cu: bill.so_dien_cu,
                    so_dien_moi: bill.so_dien_moi,
                })
                console.log(this.state.bill);
            }        
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
        width: '80%', 
        marginBottom: 20, 
        marginTop: 20, 
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
        fontSize:20, 
        backgroundColor: '#F5F5F5', 
        height: '40%', 
        width: '50%', 
        borderRadius: 20, 
        borderWidth: 0.5
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
        width: '80%', 
        height: '50%', 
        alignItems: 'center'
    },
    viewButton: {
        flex:1, 
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})