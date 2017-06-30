import React from 'react';
import { StyleSheet, StatusBar, Text, View, ToolbarAndroid, ViewPagerAndroid } from 'react-native';

export default class App extends React.Component {

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
            { title: 'Search', icon: require('./assets/icons/whatsapp.jpeg'), show: 'always' },
            { title: 'Message', icon: require('./assets/icons/whatsapp.jpeg'), show: 'always' }
            ]}>
        </ToolbarAndroid>
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
  }
});
