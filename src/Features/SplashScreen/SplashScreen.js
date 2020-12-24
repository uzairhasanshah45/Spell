import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class Splash extends Component {

    constructor(props){
        super(props);
        setTimeout(() => {
            props.navigation.navigate('StartScreen')
        }, 5000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/images/splashImage/brain.png')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#ffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  find: {
    color:'#693BBB',
    fontSize: 32,
    fontWeight: "bold",
  },
  me: {
    color: '#FFD03D'
  },
  para: {
      color: '#636262',
      fontSize: 18,
      marginTop: -5
  },
  image:{
    width: '100%',
    height: 400,
  }
});

