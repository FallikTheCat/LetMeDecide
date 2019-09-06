import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Form from './components/Form';
import Decision from './components/Decision';
import Wait from './components/Wait';

class Root extends Component {
  render() {
    return(
      <Router>
        <Scene
        key='Root'>
          <Scene
          key='Form'
          component={Form}
          hideNavBar
          initial
          />

          <Scene
          key='Wait'
          component={Wait}
          hideNavBar
          />

          <Scene
          key='Decision'
          component={Decision}
          hideNavBar
          />

        </Scene>
      </Router>

    );
  }
}

export default Root;
