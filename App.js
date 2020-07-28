import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Alert, Text, View, SafeAreaView } from 'react-native';

export default function App() {
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
        source={require('./assets/black fire crew logo.png')}/>
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
    backgroundColor: '#44839c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 9,
    backgroundColor: 'blue',
  },
  body: {
    flex: 1,
    padding: 50,
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
    justifyContent: 'space-between',
  },
  image: {
    width: 150,
    height: 150,
    paddingVertical: 24,
    resizeMode: 'contain',
  },
});
