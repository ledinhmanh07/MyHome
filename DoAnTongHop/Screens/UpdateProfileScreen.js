import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as Common from '@constans/Common'

export default class UpdateProfileScreen extends Component {
    
    static navigationOptions = {
        title: 'Cập Nhập Thông Tin',
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

    onClick = () => {
        this.props.navigation.navigate('')
    }

    render() {
        return (                        
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', width: '100%', height: '100%', marginTop: Common.deviceHeight/10, marginBottom: Common.deviceHeight/10}} >       
                      
                    <View style={styles.form}>
                        <View style={{flex:6, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Họ và tên</Text>
                                <TextInput                            
                                    placeholder='Họ và tên,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />
                            </View>                            
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Giới tính</Text>
                                <TextInput                            
                                    placeholder='Giới tính,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Nghề nghiệp</Text>
                                <TextInput                            
                                    placeholder='Nghề nghiệp,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Ngày sinh</Text>
                                <TextInput                            
                                    placeholder='Ngày sinh,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>Số CMND</Text>
                                <TextInput                            
                                    placeholder='Số CMND,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />  
                            </View>
                            <View style={styles.viewInput}>
                                <Text style={styles.label}>HKTT</Text>
                                <TextInput                            
                                    placeholder='Hộ khẩu thường trú,...'
                                    placeholderTextColor = '#777777'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />  
                            </View>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClick}>
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