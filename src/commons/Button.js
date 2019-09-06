import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Button extends Component {
  render() {
    return(
      <TouchableOpacity style={{
        width: width*0.67,
        height: height*0.055,
        backgroundColor: '#3f3a3e',
        marginTop: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1
      }}
      onPress={() => this.props.onPress()}>
      <Text style={{
        color: '#FC8527'
      }}>
      {this.props.text}</Text>

      </TouchableOpacity>
    );
  }
}

export default Button;
