import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, Alert, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello Jojo!</Text>
      <StatusBar style="auto" />
      <Button
        title="Press me!"
        color="#4287f5"
        accessibilityLabel="Don't press me"
        />
      <Image
        source={{uri: 'https://cdn.discordapp.com/attachments/417821911301488651/733124698434568282/BF_Flame_and_Letter_Logo4x.png',}}
        resizeMode="center"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Times New Roman"
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
