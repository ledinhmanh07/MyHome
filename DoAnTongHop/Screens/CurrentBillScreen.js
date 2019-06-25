import React, { Component } from 'react';
import { View, ImageBackground ,Text, StyleSheet, ScrollView } from 'react-native'
import * as Common from '@constants/Common'
import axios from 'axios'
import * as ApiConfig from '@constants/ApiConfig'
import Wrapper from './Loading'

export default class CurrentBillScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bill:{
                id_phong: 4,
                id_user: 1,
                hoa_don_thang: '',
                ngay_lap: '',
                so_nuoc_cu: '',
                so_nuoc_moi: '',
                gia_nuoc: '',
                so_dien_cu: '',
                so_dien_moi: '',
                gia_dien: '',
                so_xe: '',
                gia_xe: '',
                internet: '',
                truyen_hinh_cap: '',
                ve_sinh: '',
                khac: '',
                gia_phong: '',
                tong_tien: '',
                tinh_trang: ''
            },
            visible: false
        }
    }

    onClick = () => {
        this.props.navigation.navigate('')
    }

    render() {
        return (   
            <Wrapper  isLoading = {this.state.visible} customStyle = {styles.loading}>                  
                <ImageBackground source={require('@assets/images/background.png')} style={{flex: 1, width: '100%', height: '100%'}}>
                    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', width: '100%'}} > 
                        <View style={styles.form}>
                            <View  style={{flex: 2, justifyContent : 'center', alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: Common.labelSize}}>HÓA ĐƠN: {this.state.bill.hoa_don_thang}</Text>
                            </View> 
                            <View style={[styles.column, {flex: 4}]}>
                                <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                    <Text style={styles.labelTop}>1. Nước</Text>
                                </View>
                                <View  style={[styles.item]}>
                                    <Text style={styles.value}>Số cũ: {this.state.bill.so_nuoc_cu}</Text>
                                    <Text style={styles.value}>Số mới: {this.state.bill.so_nuoc_moi}</Text>
                                </View>
                                <View  style={[styles.item]}>
                                    <Text style={styles.value}>Giá: {this.state.bill.gia_nuoc}</Text>
                                    <Text style={styles.value}>Thành tiền: {(this.state.bill.so_nuoc_moi-this.state.bill.so_nuoc_cu)*this.state.bill.gia_nuoc}</Text>
                                </View>
                            </View> 
                            <View style={[styles.column, {flex: 4}]}>
                                <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                    <Text style={styles.labelTop}>2. Điện</Text>
                                </View>
                                <View  style={[styles.item]}>
                                    <Text style={styles.value}>Số cũ: {this.state.bill.so_dien_cu}</Text>
                                    <Text style={styles.value}>Số mới: {this.state.bill.so_dien_moi}</Text>
                                </View>
                                <View  style={[styles.item]}>
                                    <Text style={styles.value}>Giá: {this.state.bill.gia_dien}</Text>
                                    <Text style={styles.value}>Thành tiền: {(this.state.bill.so_dien_moi-this.state.bill.so_dien_cu)*this.state.bill.gia_dien}</Text>
                                </View>
                            </View> 
                            <View style={[styles.column, {flex: 3}]}>
                                <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                    <Text style={styles.labelTop}>3. Quản lý xe</Text>
                                </View>
                                <View  style={[styles.item]}>
                                    <Text style={styles.value}>Số lượng: {this.state.bill.so_xe}</Text>
                                    <Text style={styles.value}>Thành tiền: {this.state.bill.gia_xe}</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>4. Vệ sinh</Text>
                                    <Text style={styles.value}>Thành tiền: {this.state.bill.ve_sinh}</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>5. Truyền hình cáp</Text>
                                    <Text style={styles.value}>Thành tiền: {this.state.bill.truyen_hinh_cap}</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>6. Internet</Text>
                                    <Text style={styles.value}>Thành tiền: {this.state.bill.internet}</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>7. Khác</Text>
                                    <Text style={styles.value}>Thành tiền: {this.state.bill.khac}</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>8. Tiền phòng</Text>
                                    <Text style={styles.value}>Thành tiền: {this.state.bill.gia_phong}</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>9. Tiền cọc</Text>
                                    <Text style={styles.value}>Thành tiền:</Text>
                                </View>                            
                            </View> 
                            <View style={[styles.column, {flex: 2}]}>
                                <View  style={[styles.item]}>
                                    <Text style={styles.label}>10. Nợ cũ</Text>
                                    <Text style={styles.value}>Thành tiền:</Text>
                                </View>                            
                            </View> 
                            <View  style={{flex: 2, width: '100%', height: '100%', justifyContent : 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: Common.labelSize}}>Tổng cộng: {this.state.bill.tong_tien}</Text>                                
                            </View>                      
                        </View>
                    </ScrollView>
                </ImageBackground>
            </Wrapper>   
        )
    }
    componentDidMount = () => {
        this.setState({
            visible: true
        })  
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
             ApiConfig.LINK + 'getHoaDonMoi', {data},{ headers }
        )
        .then(response => {
            let bill = response.data
            if(bill.length != 0){
                this.setState ({
                    bill : bill
                })
                console.log(this.state.bill);
            }       
            this.setState({
                visible: false
            })   
        })
        .catch(error => {
                console.log(error);
            }
        )
    }
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#ffffff',      
        paddingHorizontal: '5%',   
        marginVertical: 25,
        alignItems: 'center', 
        width: '90%', 
        height: 600,
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
    labelTop: {
        fontWeight: 'bold', 
        fontSize: Common.textSize
    },
    label: {
        flex: 1, 
        fontWeight: 'bold', 
        fontSize: Common.textSize
    },
    loading: {
        flex:1
    }
})