import React, { Component } from 'react';
import { View, Text, Image, Dimensions,
ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../commons/Button';
import Form from '../components/Form';

import { strings } from '../lang/strings';

const { width, height } = Dimensions.get('window')

class Decision extends Component {

  state = {
    text1: this.props.text1,
    text2: this.props.text2,
    text3: this.props.text3,
    text4: this.props.text4,
    number: this.props.number,
    pick: '',
  }

  componentWillMount() {
    console.log(this.state.text1),
    console.log(this.state.text2),
    console.log(this.state.text3),
    console.log(this.state.text4),
    console.log(this.state.number),
    console.log(this.props.min),
    console.log(this.props.max)

    this.pick()
  }

  pick() {
    if (this.state.number === 1) {

        this.setState({ pick: this.state.text1 })

    }else if (this.state.number === 2) {

        this.setState({ pick: this.state.text2 })

    }else if (this.state.number === 3) {

        this.setState({ pick: this.state.text3 })

    }else if (this.state.number === 4) {

        this.setState({ pick: this.state.text4 })

    }else {
      this.setState({ pick: 'bakalım' })
      console.log('error!')
    }
  }


  render() {
    return(

      <ImageBackground
      source={require('../img/bg4.png')}
      style={{ width, height, alignItems: 'center',
      justifyContent: 'center' }}
      >

      <View style={styles.view}>

      <Image
      style={{
        height: height*0.29,
        width: width,
        marginBottom: height*0.165
      }}
      source={require('../img/decision.gif')}
      />

      <Text style={{
        marginBottom:height*0.01,
        fontSize: 15,
        color: 'white'
      }}>{strings.aha}</Text>

      <Text style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: '#ffffff',
        marginBottom: height*0.02
      }}>*  {this.state.pick}!  *</Text>

      <Button
      onPress={() =>  Actions.Form()}
      text={strings.another}
      />

      <Text style={{
        marginTop: height*0.2,
        fontSize: 8,
        color: 'white',
      }}>Baturay Koç a.k.a. Fallik The Cat</Text>

      </View>

      </ImageBackground>
    );
  }
}

const styles = {
  view: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: height*0.08
  }
}

export default Decision;
