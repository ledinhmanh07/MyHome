import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default class RoomDetail extends Component {
    
    static navigationOptions = {
        title: 'Nhập Điện-Nước',
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
        this.props.navigation.navigate('CreatePinScreen')
    }

    render() {
        return (                        
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', paddingTop: '5%'}} >       
                    <View style={{flex: 3, width: '60%', justifyContent : 'center', alignItems: 'center'}}>
                        <Image source={require('@assets/images/logo.png')} style={{height: '40%', resizeMode: 'contain'}}/>                 
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: '5%'}}>PHÒNG: 411</Text>
                    </View>   
                    <View style={styles.form}>
                        <Text style={{flex: 1, color: '#000', fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>Số Điện-Nước: 5/2019</Text>
                        <View style={{flex:3, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                            <View style={styles.viewInput}>
                                <Text style={{ color: '#000', fontSize: 20, width: '40%'}}>Số Điện:</Text>
                                <TextInput
                                    placeholder='Số điện,...'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />   
                            </View>
                            
                            <View style={styles.viewInput}>
                                <Text style={{ color: '#000', fontSize: 20, width: '40%'}}>Số Nước:</Text>
                                <TextInput
                                    placeholder='Số điện,...'
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({text})}
                                />   
                            </View>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.button} onPress={this.onClick}>
                                <Text style={{fontSize:20, color: '#FFFFFF'}} >CẬP NHẬP</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>   
                    <View style={{flex: 3, width: '80%', justifyContent : 'center', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#008080'}}>
                        <Text style={{flex: 1, color: '#000', fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>Số Điện-Nước: 4/2019</Text>
                        <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '50%', justifyContent : 'center'}}>
                            <Text style={{ color: '#000', fontSize: 15, width: '40%'}}>Số Điện: 150 (kW)</Text>
                            <Text style={{ color: '#000', fontSize: 15, width: '40%', marginLeft: '10%'}}>Số Nước: 200 (m2)</Text>
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
        borderRadius: 10
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