/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ToolbarAndroid,
  ViewPagerAndroid
} from 'react-native';

export default class whatsApp1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#054D44"
          animated={true}
          barStyle="light-content" />
          
        <ToolbarAndroid
          style={styles.toolbar}
          title="WhatsApp"
          titleColor="#fff"
          actions={[
            { title: 'Search', icon: require('./assets/icons/search.png'), show: 'always' },
            { title: 'Message', icon: require('./assets/icons/menu.png'), show: 'always' }
            ]}>
        </ToolbarAndroid>

        <ViewPagerAndroid
          initialPage={1}>
          <View style={{alignItems: 'center',justifyContent:'center',backgroundColor:'yellow'}}>
            <Text>First Page</Text>
          </View>

          <View style={{alignItems: 'center',justifyContent:'center',backgroundColor:'red'}}>
            <Text>Second Page</Text>
          </View>

          <View style={{alignItems: 'center',justifyContent:'center',backgroundColor:'blue'}}>
            <Text>Third Page</Text>
          </View>

          <View style={{alignItems: 'center',justifyContent:'center',backgroundColor:'green'}}>
            <Text>Fourth Page</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    height: 40,
    backgroundColor: '#055E54',
  },
   pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});

AppRegistry.registerComponent('whatsApp1', () => whatsApp1);
