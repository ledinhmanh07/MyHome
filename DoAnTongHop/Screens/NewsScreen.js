import React, { Component } from 'react';
import { View, Image, ImageBackground ,Text, StyleSheet, TouchableOpacity, ScrollView , Alert} from 'react-native'
import axios from 'axios'
import * as ApiConfig from '@constants/ApiConfig'
import Wrapper from './Loading'
import * as Common from '@constants/Common'

export default class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news : [],
            visible: false
        }        
    }

    static navigationOptions = {
        title: 'Thông Tin',
        headerStyle: {
            backgroundColor: Common.titleColor,   
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign:"center", 
            flex:1 
          },
          headerRight: <View style={{flex: 0.2}}/>
    };

    render() {
        return (
            <Wrapper  isLoading = {this.state.visible} customStyle = {styles.loading}>
                <ImageBackground source={require('@assets/images/background.png')} style={{flex: 1, width: '100%', height: '100%'}}>
                    <View style={{flex: 1, width: '100%', height: '100%'}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} >       
                            <View style={{ alignItems: 'center', width: '100%', paddingBottom: 15, paddingTop: 15}}>
                                {this.state.news.map( (item) =>{
                                    return (
                                        <View style={styles.news} key={item.id_tin}>
                                            <View style={{flex:1, width: '90%', height: '100%', justifyContent : 'center', alignItems: 'center'}}>
                                                <Text style={{fontSize: Common.labelSize,  fontWeight: 'bold', marginVertical: 10}}>{item.tieu_de}</Text>
                                                <Text style={{fontSize: Common.textSizeInput, width: '100%'}}>{item.noi_dung}</Text>
                                                <Text style={{fontSize: Common.textSize, color: Common.textColor, width: '100%', marginBottom: 10}}>{item.ngay_tao}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>  
                    </View>                      
                </ImageBackground>
            </Wrapper>
        )
    }

    componentDidMount = () => {
        this.setState({
            visible: true
        })
        this.fetchNews();
    }
    
    fetchNews = async() => {
    
        let headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT ...' 
        }
    
        await axios.get(
             ApiConfig.LINK + 'getThongBao', { headers }
        )
        .then(response => {
            let news = response.data
            if(news.length != 0){
                this.setState ({
                    news : news
                })
                console.log(this.state.news);
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
    news: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', 
        width: '90%', 
        borderRadius: 10, 
        marginTop: 15,         
        shadowColor: '#000000', 
        shadowOffset: { 
            width: 0, 
            height: 3 
        }, 
        shadowRadius: 5, 
        shadowOpacity: 0.5,
        elevation: 5,
    },
    loading: {
        flex:1
    }
})