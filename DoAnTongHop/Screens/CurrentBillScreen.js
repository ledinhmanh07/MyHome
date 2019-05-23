import React, { Component } from 'react';
import { View, ImageBackground ,Text, StyleSheet } from 'react-native'
import * as Common from '@constans/Common'

export default class CurrentBillScreen extends Component {
    constructor(props) {
        super(props);
        
        
    }
    bill = {
        id: '12',
        date: '01-05-2019',
        soNuocCu: '80',
        soNuocMoi: '100',
        tienNuoc: '300000',
        soDienCu: '100',
        soDienMoi: '150',
        tienDien: '200000',
        soXe: '3',
        tienXe: '450000',
        veSinh: '20000',
        truyenHinhCap: '0',
        internet: '0',
        khac: '0',
        tienPhong: '3800000',
        tienCoc: '0',
        noCu: '0',
        tongTien: '4770000'
    }
    soNuoc = this.bill.soNuocMoi - this.bill.soNuocCu
    soDien = this.bill.soDienMoi - this.bill.soDienCu
    onClick = () => {
        this.props.navigation.navigate('')
    }

    render() {
        return (                        
            <ImageBackground source={require('@assets/images/background.png')} style={{flex: 1, width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent : 'center', alignItems: 'center', width: '100%', marginVertical: 25}}>
                    <View style={styles.form}>
                        <View  style={{flex: 2, width: '100%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: Common.labelSize}}>HÓA ĐƠN: {this.bill.date}</Text>                                
                        </View> 
                        <View style={[styles.column, {flex: 4}]}>
                            <View  style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center'}}>
                                <Text style={styles.label}>1. Nước</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số cũ: {this.bill.soNuocCu}</Text>
                                <Text style={styles.value}>Số mới: {this.bill.soNuocMoi}</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số lượng: {this.soNuoc}</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.tienNuoc}</Text>
                            </View>
                        </View> 
                        <View style={[styles.column, {flex: 4}]}>
                            <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                <Text style={styles.label}>2. Điện</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số cũ: {this.bill.soDienCu}</Text>
                                <Text style={styles.value}>Số mới: {this.bill.soDienMoi}</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số lượng: {this.soDien}</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.tienDien}</Text>
                            </View>
                        </View> 
                        <View style={[styles.column, {flex: 3}]}>
                            <View  style={{flex: 1, width: '100%', height: '100%', justifyContent : 'center'}}>
                                <Text style={styles.label}>3. Quản lý xe</Text>
                            </View>
                            <View  style={[styles.item]}>
                                <Text style={styles.value}>Số lượng: {this.bill.soXe}</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.tienXe}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>4. Vệ sinh</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.veSinh}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>5. Truyền hình cáp</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.truyenHinhCap}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>6. Internet</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.internet}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>7. Khác</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.khac}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>8. Tiền phòng</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.tienPhong}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>9. Tiền cọc</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.tienCoc}</Text>
                            </View>                            
                        </View> 
                        <View style={[styles.column, {flex: 2}]}>
                            <View  style={[styles.item]}>
                                <Text style={styles.label}>10. Nợ cũ</Text>
                                <Text style={styles.value}>Thành tiền: {this.bill.noCu}</Text>
                            </View>                            
                        </View> 
                        <View  style={{flex: 2, width: '100%', height: '100%', justifyContent : 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: Common.labelSize}}>Tổng cộng: {this.bill.tongTien}</Text>                                
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
        opacity:0.8, 
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