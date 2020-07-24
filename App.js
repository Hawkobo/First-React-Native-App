import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Alert, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <StatusBar style="auto" />
        <Image style={styles.image} source={require('./assets/black fire crew logo.png')}/>
        <Text style={styles.titleText}>Welcome to my App!</Text>
        <Button style={styles.button} title="Press me!"/>
      </View>

      <View style={{flex: 2, backgroundColor: 'white'}}></View>

      <View style={styles.body}>
        <Text style={styles.titleText}>Welcome to my App!</Text>
        <StatusBar style="auto" />
        <Image style={styles.image} source={require('./assets/black fire crew logo.png')}/>
        <Button style={styles.button} title="Press me!"/>
      </View>
    </SafeAreaView>
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
    backgroundColor: '#44839c',
  },
  button: {
    color: "#4287f5",
    paddingVertical: 24,
  },
  image: {
    width: 150,
    height: 150,
    paddingVertical: 24,
    resizeMode: 'contain',
  },
});
