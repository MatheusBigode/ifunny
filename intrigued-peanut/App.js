import * as React from 'react';
import { Text, View, StyleSheet, Image, ViewUser } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.top}>

        <Text style={styles.featured}>
          Featured
        </Text>

        <View>
          <Text style={styles.num}>
            289
          </Text>
        </View>
        
      </View>
      
      
      <View style={styles.profile}>
           <Image
              style={styles.icon}
                  source={require('./assets/Design.png')}
             />
          <Text style={styles.userName}>
             MussoliniChan
          </Text>
            View
            View
            View
            View
          <View style={styles.subDiv}>
            <Text style={styles.sub}>
              subscribe
            </Text>
          </View>
          
      </View>
      
    <Image
    style={styles.meme}
        source={require('./assets/11c5f6b2a7a521337e5c86d64b91f29c020e47bc3dc979ddafa48444af68a0f9_1-removebg-preview.png')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
  },
  
  top: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  featured: {
    marginBottom: 50,
    marginRight: 5,
    color: 'white', 
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  num: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    width: 35,
    color: 'red', 
    fontSize: 12,
    textAlign: 'center',
  },

  profile: {
    marginBottom: 10,
    flexDirection: 'row',
  },

  icon: {
    alignSelf: 'left',
    height: 20,
    width: 20,
    borderRadius: 10,
  },

  userName: {
    color: 'white', 
    fontSize: 14,
    marginLeft: 5,
    textAlign: 'left',
  },

  sub: {
    color: 'gray', 
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    width: 50,
  },
  
  meme: {
    positon: 'fixed',
    height: 340,
    width: 320,
    alignSelf: 'center',
  },

});
