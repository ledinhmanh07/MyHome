
import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, TextInput, Platform} from 'react-native'
import * as Common from '@constants/Common'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

export default class DatePicker extends Component {

    static defaultProps = {       
        buttonStyle: {},
        titleStyle: {}, 
        style: {},
        textStyle: {},
        placeholder: '',
        value: '',
        testDate: () => {return true},
        onChangeText: () => {},  
    }
    constructor(props){
        super(props);
        this.state ={
            isDateTimePickerVisible: false,
            date: ''
        }
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDatePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = date => {
        console.log("Date: " + date);
        let text = moment(date).format('YYYY-MM-DD')

        if(this.props.testDate(date)) {
            this.setState({
                date: text
            })
            this.props.onChangeText(text);
            this.hideDatePicker();
        }
        else if (Platform.OS === 'android') {
            this.hideDatePicker();
        }
    };

    render() {
        return (
            <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={this.showDateTimePicker} style={{width: '100%', height: '100%'}}>              
                    <TextInput
                        style={[styles.input, this.props.textStyle]}
                        pointerEvents="none"                        
                        editable={false}
                        onChangeText={this.props.onChange}
                        placeholder={this.props.placeholder}
                        placeholderTextColor = '#777777'
                        secureTextEntry={false}
                        autoCapitalize={'none'}
                        value={this.state.date !== '' ? this.state.date : this.props.value}
                        autoCorrect={false}
                    />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDatePicker}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: '100%',
        textAlign: 'center', 
        color: '#000',
        fontSize:Common.textSizeInput, 
        borderBottomColor: '#000', 
        borderBottomWidth: 1
    },
})