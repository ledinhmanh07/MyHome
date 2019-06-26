import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'

export default class SupportScreen extends Component {
    constructor(props){
        super(props)
        this.state = { likes: 1 }
    }
    

    callback(likes) {
        this.setState({ likes: likes })
    }
    onClick = () =>{
    }
    render() {
        return (
            <View>
            <TouchableOpacity onPress={this.onClick}>
                <Text >Go to Child Screen</Text>
            </TouchableOpacity>
            </View>
        )
    }
}