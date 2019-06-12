import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native'

export default class CarScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            likes: 0
        }
    }
    liked = () => {         
        Alert.alert(this.props.navigation.state.params.likes)
        // this.setState({
        //     likes : like
        // })
        // this.props.navigation.getParam('callback')(like);
        // this.props.navigation.navigate('SupportScreen');
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.liked}>
                    <Text >Like</Text>
                </TouchableOpacity>
            </View>
        )
    }
}