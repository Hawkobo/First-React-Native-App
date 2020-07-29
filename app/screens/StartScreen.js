import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Alert, Text, View, SafeAreaView } from 'react-native';

export default function StartScreen() {
  var counter = 0;

  function ResetPresses() {
    counter = 0;
    Alert.alert("Presses reset.");
  }

function IncPresses() {
  Alert.alert("You pressed me " + ++counter + " times!");
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <StatusBar style="auto" />
        <Image style={styles.image}
        source={require('./app/assets/bfc-logo.png')}/>
        <Text style={styles.titleText}>Welcome to my App!</Text>
        <View style={styles.buttonSpace}>
          <Button style={styles.button}
          title="Press me!"
          onPress={IncPresses}/>
          <Button style={styles.button}
          title="Reset"
          onPress={ResetPresses}/>
          <Button style={styles.button}
          title="Total Play Time"/>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 9,
    backgroundColor: 'blue',
  },
  body: {
    flex: 1,
    padding: 100,
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 4,
    backgroundColor: '#44839c',
  },
  button: {
    color: "#4287f5",
  },
  buttonSpace: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: '#44839c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});
