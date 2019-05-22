import React, { Component } from 'react';
import { View, ImageBackground ,Text, StyleSheet } from 'react-native'
import * as Common from '@constans/Common'

export default class CurrentBillScreen extends Component {
    
    static navigationOptions = {
        title: 'Hóa Đơn',
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
            <ImageBackground source={require('@assets/images/background.png')} style={{flex: 1, width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', width: '100%', marginVertical: 25}}>
                    <View style={styles.form}>
                        <View  style={{flex: 2, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: Common.labelSize}}>HÓA ĐƠN 5/2019</Text>                                
                        </View> 
                        <View style={[styles.column, {flex: 4}]}>
                            <View  style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center'}}>
                                <Text style={styles.label}>1. Nước</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số cũ: </Text>
                                <Text style={styles.value}>Số mới: </Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số lượng:  </Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>
                        </View> 
                        <View style={[styles.column, {flex: 4}]}>
                            <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                <Text style={styles.label}>2. Điện</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số cũ: </Text>
                                <Text style={styles.value}>Số mới: </Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số lượng:  </Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>
                        </View> 
                        <View style={[styles.column, {flex: 3}]}>
                            <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                <Text style={styles.label}>3. Quản lý xe:</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số lượng: </Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>4. Vệ sinh:</Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>5. Truyền hình cáp:</Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>6. Internet:</Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>7. Khác:</Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>8. Tiền phòng:</Text>
                                <Text style={styles.value}>Thành tiền:</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>9. Tiền cọc:</Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>10. Nợ cũ:</Text>
                                <Text style={styles.value}>Thành tiền: </Text>
                            </View>                            
                        </View> 
                        <View  style={{flex: 2, width: '100%', height: '100%', justifyContent : 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: Common.labelSize}}>Tổng cộng:</Text>                                
                        </View>                      
                    </View>  
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 10, 
        backgroundColor: '#ffffff',      
        paddingHorizontal: '5%',   
        paddingTop: 5,
        paddingBottom: 5,
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
    column :{
        width: '100%', 
        height: '100%', 
        borderBottomWidth: 0.5
    },
    item: {
        flex: 1, 
        flexDirection: 'row', 
        width: '100%', 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    value: {
        flex: 1, 
        fontSize: Common.textSize
    },
    label: {
        flex: 1, 
        fontWeight: 'bold', 
        fontSize: Common.textSize
    }
})