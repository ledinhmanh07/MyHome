import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, ScrollView } from 'react-native'
import * as Common from '@constans/Common'

export default class RoomDetail extends Component {
    
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
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>PHÒNG: 411</Text>
                    </View>   
                    <View style={{ alignItems: 'center', width: '100%', paddingBottom: 20, paddingTop: 20}}>
                        <Text style={styles.text}>Diện tích: 10*10(m2)</Text>
                        <Text style={styles.text}>Giá phòng: 3.800.000vnđ / 1 tháng</Text>
                        <Text style={styles.text}>Giá điện: 4.000vnđ / 1KW</Text>
                        <Text style={styles.text}>Giá nước: 15.000 vnđ / 1 khối</Text>
                        <Text style={styles.text}>Mô tả: </Text>
                        <Text style={styles.text}>Phòng có 1 gác, có phòng tắm vệ sinh riêng, có kệ bếp và bồn rữa chén.</Text>
                        <Text style={styles.text}>Thông tin thêm: </Text>
                    </View>   
                </ScrollView>  
            </ImageBackground>
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