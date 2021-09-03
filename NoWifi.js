import React from 'react'
import { Image,StyleSheet,View,Text } from 'react-native'
import nowifi from './img/no-wifi.png';
export default  NoWifi = () => (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={nowifi}
        />
        <Text style={styles.text}>Please, Enable your wifi to access the application server</Text>
    </View>
    );
    
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 300,
        height: 400,
        resizeMode: 'contain'
      },
      text:{
          color: 'tomato',
          fontFamily: 'Roboto',
          fontSize: 26,
          textAlign: 'center',
          padding: 20
      }
    });