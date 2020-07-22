import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Alert, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.titleText}>Welcome to my App!</Text>
        <StatusBar style="auto" />
        <Image style={styles.image} source={require('./assets/black fire crew logo.png')}/>
        <Button style={styles.button} title="Press me!"/>
      </View>

      <View style={{flex: 2, backgroundColor: 'white'}}></View>

      <View style={styles.body}>
        <Text style={styles.titleText}>Welcome to my App!</Text>
        <StatusBar style="auto" />
        <Image style={styles.image} source={require('./assets/black fire crew logo.png')}/>
        <Button style={styles.button} title="Press me!"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Times New Roman",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 24,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 9,
    backgroundColor: 'blue',
  },
  body: {
    flex: 9,
    padding: 50,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 4,
    backgroundColor: 'green',
  },
  button: {
    color: "#4287f5",
    paddingVertical: 24,
  },
  image: {
    width: 120,
    height: 50,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
