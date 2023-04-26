import * as React from 'react';
import { Text, View, StyleSheet, Image, ViewUser } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.top}>

        <Text style={styles.collective}>
          Subscription
        </Text>

        <View>
          <Text style={styles.num}>
            98
          </Text>
        </View>
        
      </View>
      
      <View style={styles.profile}>
           <Image
              style={styles.icon}
                  source={require('./components/B_F7YkzXAAAi87S.jpg')}
             />
          <Text style={styles.userName}>
             CPLover
          </Text> 
          <View style={styles.subDiv}>
            <Text style={styles.sub}>
              subscribe
          </Text>
      </View>
      </View>

      
      <Image
    style={styles.meme}
        source={require('./components/headshot.png')}
    />
    <View style={styles.smiles}>
        <Text style={styles.likes}>
            🙂 2.6K 
        </Text>
        <Text style={styles.dislikes}>
            😡 1 
        </Text>
    </View>
    
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

  collective: {
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
  subDiv: {
  alignSelf: 'center',
  marginLeft: 190,
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
  smiles:{
    flexDirection: 'row',
  },
  likes: {
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 10,
  },
  dislikes: {
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 215,
  },
});