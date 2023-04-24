import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
            <Image source={require('./components/IFunny_Logo.png')}/>
      </View>

      <Text style={styles.load}>
        Loading . . . 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  img: {
    alignSelf: 'center',
  },
  load: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
