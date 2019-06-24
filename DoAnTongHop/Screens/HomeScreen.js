import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        global.idPhong = 4;
        global.idUser = 1;
    }
    static navigationOptions = {
        title: 'Welcome Screen',
        header: null
    };

    onClickRoomDetail = () => {
        this.props.navigation.navigate('RoomDetail')
    }
    onClickBill = () => {
        this.props.navigation.navigate('BillScreen')
    }
    onClickProfile = () => {
        this.props.navigation.navigate('TabProfileScreen')
    }
    onClickMore = () => {
        this.props.navigation.navigate('MoreScreen')
    }

    render() {
        return (            
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <View style={{flex: 1}}></View>
                    <View style={{flex: 9 , alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#8B0000'}}>NHÀ TRỌ THÔNG MINH</Text>
                        <Image source={require('@assets/images/logo.png')} style={{height: '40%', resizeMode: 'contain'}}/>
                    </View>                        
                    <View style={{flex: 19, width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.viewRowButton}>
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button} onPress={this.onClickRoomDetail}>
                                    <Image source={require('@assets/images/house.png')} style={styles.icon}/>
                                    <Text style={styles.textBtn} >Thông Tin Phòng</Text>
                                </TouchableOpacity>  
                            </View>  
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button} onPress={this.onClickProfile}>
                                    <Image source={require('@assets/images/profile.png')} style={styles.icon}/>   
                                    <Text style={styles.textBtn} >Thông Tin Khách Trọ</Text>
                                </TouchableOpacity>
                            </View> 
                        </View> 
                        <View style={styles.viewRowButton}>                           
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button} onPress={this.onClickBill}>
                                    <Image source={require('@assets/images/bill.png')} style={styles.icon}/>
                                    <Text style={styles.textBtn} >Hoá Đơn</Text>
                                </TouchableOpacity>
                            </View>  
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button} onPress={this.onClickMore}>
                                    <Image source={require('@assets/images/more2.png')} style={styles.icon}/>
                                    <Text style={styles.textBtn} >Khác</Text>
                                </TouchableOpacity>
                            </View> 
                        </View>     
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({    
    viewRowButton: {
        flex: 1, 
        alignItems: 'center', 
        width:'100%', 
        height: '100%', 
        flexDirection: 'row'
    },
    viewButton: {
        flex: 1, 
        alignItems: 'center', 
        width:'100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },   
    button: {
        height: '80%', 
        width: '80%', 
        backgroundColor: '#FFFFFF', 
        opacity:0.8, 
        alignItems: 'center', 
        justifyContent: 'center',  
        borderRadius: 10,        
        borderWidth: 0.5,
        borderColor: '#000',
        shadowColor: '#000000', 
        shadowOffset: { 
            width: 0, 
            height: 3 
        }, 
        shadowRadius: 5, 
        shadowOpacity: 0.5,
        elevation: 5,
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
    }
})