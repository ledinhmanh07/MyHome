import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, ScrollView, Alert } from 'react-native'
import * as Common from '@constants/Common'
import axios from 'axios'
import * as ApiConfig from '@constants/ApiConfig'
import { Item } from 'native-base';

export default class RoomDetail extends Component {
    constructor(props){
        super(props);
        this.state = {            
            ten_phong : '',
            ten_loai : '',
            gia_phong : '',
            mo_ta : '',
            ghi_chu : '',                
            
            bang_gia: [
                {
                    'dm': 'asd',
                },
                {
                    'dm': 'asd',
                },
            ]
        }
    }

    static navigationOptions = {
        title: 'Thông Tin phòng',
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
                <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} >       
                    <View style={{width: '70%', justifyContent : 'center', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#008080'}}>
                        <Image source={require('@assets/images/logo.png')} style={{height: 80, resizeMode: 'contain', marginVertical: 10}}/>                 
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>PHÒNG: {this.state.ten_phong}</Text>
                    </View>   
                    <View style={{ alignItems: 'center', width: '100%', paddingBottom: 20, paddingTop: 20}}>
                        <Text style={styles.text}>Loại phòng: {this.state.ten_loai}</Text>
                        <Text style={styles.text}>Giá phòng: {this.state.gia_phong} vnđ / 1 tháng</Text>
                        {this.state.bang_gia.map( (item) =>{
                                    return (
                                        <Text style={styles.text} key={item.id_gia}>{item.ten_gia}: {item.gia} ({item.don_vi})</Text>
                                    )
                                    })
                        }
                        <Text style={styles.text}>Mô tả: </Text>
                        <Text style={styles.text}>{this.state.mo_ta}</Text>
                        <Text style={styles.text}>Ghi chú: </Text>
                        <Text style={styles.text}>{this.state.ghi_chu}</Text>
                    </View>   
                </ScrollView>  
            </ImageBackground>
        )
    }
    componentDidMount = () => {
        this.fetchRoomDetail();
    }
    
    fetchRoomDetail = async() => {
    
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
        
        let data = {
            "idPhong": global.idPhong
        }
        
        let profile = {}
        //get Bảng giá
        await axios.post(
             ApiConfig.LINK + 'getBangGia', { headers }
        )
        .then(response => {
            let profile = response.data
            if(profile.length != 0){  
                this.setState({
                    bang_gia : profile
                })        
            }        
        })
        .catch(error => {
                console.log(error);
            }
        )

        //get phòng
        await axios.post(
            ApiConfig.LINK + 'getRoomDetail', {data},{ headers }
       )
       .then(response => {
           let profile = response.data
           if(profile.length != 0){
               this.setState ({                
                    ten_phong : profile.ten_phong,
                    ten_loai : profile.ten_loai,
                    gia_phong : profile.gia_phong,
                    mo_ta : profile.mo_ta,
                    ghi_chu : profile.ghi_chu                
               })
               console.log(this.state);
           }        
       })
       .catch(error => {
               console.log(error);
           }
       )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: Common.labelSize, 
        color: '#000000', 
        width: '70%', 
        textAlign: 'center'
    }
})