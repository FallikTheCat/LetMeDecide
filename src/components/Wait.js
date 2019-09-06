import React, { Component } from 'react';
import { View, Text, Image, ImageBackground,
Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

import { strings } from '../lang/strings';

class Wait extends Component {

  state = {
    text1: this.props.text1,
    text2: this.props.text2,
    text3: this.props.text3,
    text4: this.props.text4,
    number: 1,
    pick: '',
    min: this.props.min,
    max: this.props.max
  }

  componentWillMount() {
    this.delay()
    this.updatePick()
  }

  updatePick = (event) => {
    this.setState({ number : this.randomPick() })
  }

  randomPick = (min, max) => {
    return Math.floor((Math.random() * (this.state.max -
    this.state.min)) + this.state.min )
    console.log('pick')
  }

  delay() {
    setTimeout(() => {

      Actions.Decision({
          text1: this.state.text1,
          text2: this.state.text2,
          text3: this.state.text3,
          text4: this.state.text4,
          number: this.state.number,
          min: this.state.min,
          max: this.state.max
      })

    }, 4000);
  }

  render() {
    return(
      <ImageBackground
      source={require('../img/bg3.png')}
      style={{ width, height, alignItems: 'center',
      justifyContent: 'center' }}
      >

      <View style={styles.wait}>

      <Text style={{
        marginBottom: height*0.5,
        fontSize: 15,
        color: '#5e3b73'
      }}>
      {strings.wait}</Text>

      <Image
      source={require('../img/wait.gif')}
      />

      </View>

      </ImageBackground>
    );
  }
}

const styles = {
  wait: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Wait;
