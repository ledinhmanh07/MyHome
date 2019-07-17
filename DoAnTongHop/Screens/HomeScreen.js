import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import * as Common from '@constants/Common';
import axios from 'axios';
import * as ApiConfig from '@constants/ApiConfig';

export default class HomeScreen extends Component {
    // constructor(props){
    //     super(props);
    //     global.idPhong = 4;
    //     global.idUser = 1;
    // }
    static navigationOptions = {
        title: 'Welcome Screen',
        header: null
    };

    onClickNew = () => {
        this.props.navigation.navigate('NewsScreen');
    }
    onClickBill = () => {
        this.props.navigation.navigate('BillScreen');
    }
    onClickProfile = () => {
        this.props.navigation.navigate('TabProfileScreen');
    }
    onClickMore = () => {
        this.props.navigation.navigate('MoreScreen');
    }

    render() {
        return (            
            <ImageBackground source={require('@assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center'}}>                    
                    <View style={{flex: 10 , alignItems: 'center', justifyContent: 'center', marginTop: '10%'}}>
                        <Text style={styles.logoText}>NHÀ TRỌ THÔNG MINH</Text>
                    </View>                        
                    <View style={{flex: 19, width:'100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.viewRowButton}>
                            <View style={styles.viewButton}>
                                <TouchableOpacity style={styles.button} onPress={this.onClickNew}>
                                    <Image source={require('@assets/images/new.png')} style={styles.icon}/>
                                    <Text style={styles.textBtn} >Thông Báo</Text>
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
                                    <Image source={require('@assets/images/more.png')} style={styles.icon}/>
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
    componentDidMount = () => {
        this.fetchProfile();
    }
    
    fetchProfile = async() => {
    
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
    
        await axios.get(
             ApiConfig.LINK + 'getThongBaoMoi', {headers}
        )
        .then(response => {
            let thongBao = response.data
            if(thongBao.length !== 0){
                console.log('Thông Báo: '+thongBao[0]);
                Alert.alert(thongBao[0].tieu_de, thongBao[0].noi_dung);
            }
        })
        .catch(error => {
                console.log(error);
            }
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
        backgroundColor: Common.buttonColorOpacity, 
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
    },
    logoText: {
        textAlign: 'center',
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#3B5998',
        paddingHorizontal: 10,
        paddingTop: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: '#3B5998',
        borderWidth: 4,
    },
})