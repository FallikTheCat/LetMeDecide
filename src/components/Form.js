import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground,
Dimensions, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../commons/Button';

const { width, height } = Dimensions.get('window');

import { strings } from '../lang/strings';

class Form extends Component {

  state = {
    text1: strings.placeholder1,
    text2: strings.placeholder2,
    text3: strings.placeholder3,
    text4: strings.placeholder4,
    min: 1,
    max: 5
  }

  checking() {
    if (this.state.text3 == strings.placeholder3 &&
        this.state.text4 == strings.placeholder4) {
      console.log('girdi1')
      Actions.Wait({
              text1: this.state.text1,
              text2: this.state.text2,
              text3: this.state.text3,
              text4: this.state.text4,
              min: this.state.min,
              max: 3
          })
    }else if (this.state.text3 != strings.placeholder3 &&
        this.state.text4 == strings.placeholder4) {
      console.log('girdi1')
      Actions.Wait({
              text1: this.state.text1,
              text2: this.state.text2,
              text3: this.state.text3,
              text4: this.state.text4,
              min: this.state.min,
              max: 4
          })
    }else if (this.state.text3 != strings.placeholder3 &&
        this.state.text4 != strings.placeholder4) {
      console.log('girdi1')
      Actions.Wait({
              text1: this.state.text1,
              text2: this.state.text2,
              text3: this.state.text3,
              text4: this.state.text4,
              min: this.state.min,
              max: 5
          })
    }else {
      console.log('sıkıntı')
    }
  }

  render() {
    return(

      <ImageBackground
      source={require('../img/bg.png')}
      style={{ width, height, alignItems: 'center',
      justifyContent: 'center' }}
      >

      <Image
      style={{
        width: width*0.5,
        height: height*0.28,
       }}
      source={require('../img/logo2.png')}
      />

      <Text style={{
        fontSize: 15,
        color: '#3f3a3e',
      }}>{strings.question}</Text>

      <View style={styles.mainView}>

      <View style={styles.input}>

      <TextInput
        style={styles.textInput}
        onChangeText={(text1) => this.setState({text1})}
        value={this.state.text1}
      />

      </View>

      <View style={styles.input}>

      <TextInput
        style={styles.textInput}
        onChangeText={(text2) => this.setState({text2})}
        value={this.state.text2}
      />

      </View>

      <View style={styles.input}>

      <TextInput
        style={styles.textInput}
        onChangeText={(text3) => this.setState({text3})}
        value={this.state.text3}
      />

      </View>

      <View style={styles.input}>

      <TextInput
        style={styles.textInput}
        onChangeText={(text4) => this.setState({text4})}
        value={this.state.text4}
      />

      </View>

      <Button
      onPress={() =>  this.checking()}
      text={strings.letMeDecide}
      />

      </View>

      </ImageBackground>

    );
  }
}

const styles = {
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 15,
    height: height*0.055,
    width: width*0.67,
    backgroundColor: 'white',
    borderRadius: 15
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: height*0.055,
    width: width*0.67,
    borderColor: '#3f3a3e',
    borderWidth: 1,
    borderRadius: 15
  }
}

export default Form;
