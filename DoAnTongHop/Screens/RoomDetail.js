import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, ScrollView } from 'react-native'

export default class RoomDetail extends Component {
    
    static navigationOptions = {
        title: 'Thông Tin phòng',
        headerStyle: {
            backgroundColor: '#00008B',   
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
                    <View style={{width: '70%', justifyContent : 'center', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#008080', marginTop: '5%',marginBottom: '5%'}}>
                        <Image source={require('@assets/images/logo.png')} style={{height: 80, resizeMode: 'contain'}}/>                 
                        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: '5%'}}>PHÒNG: 411</Text>
                    </View>   
                    <View style={{ alignItems: 'center', width: '100%', paddingBottom: 20, paddingTop: 20}}>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Diện tích: 10*10(m2)</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá điện: 4.000vnđ / 1KW</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá nước: 15.000 vnđ / 1 khối</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Mô tả: </Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Phòng có 1 gác, có phòng tắm vệ sinh riêng, có kệ bếp và bồn rữa chén.</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Diện tích: 10*10(m2)</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá điện: 4.000vnđ / 1KW</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá nước: 15.000 vnđ / 1 khối</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Mô tả: </Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Phòng có 1 gác, có phòng tắm vệ sinh riêng, có kệ bếp và bồn rữa chén.</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Diện tích: 10*10(m2)</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá điện: 4.000vnđ / 1KW</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá nước: 15.000 vnđ / 1 khối</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Mô tả: </Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Phòng có 1 gác, có phòng tắm vệ sinh riêng, có kệ bếp và bồn rữa chén.</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Diện tích: 10*10(m2)</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá điện: 4.000vnđ / 1KW</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Giá nước: 15.000 vnđ / 1 khối</Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Mô tả: </Text>
                        <Text style={{fontSize: 20, color: '#000000', width: '70%', textAlign: 'center'}}>Phòng có 1 gác, có phòng tắm vệ sinh riêng, có kệ bếp và bồn rữa chén.</Text>
                        
                    </View>   
                </ScrollView>  
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
       

})