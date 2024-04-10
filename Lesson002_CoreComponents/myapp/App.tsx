/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,  
  View,
} from 'react-native';




function App(): React.JSX.Element {


  return (
    <ScrollView style={styles.container}>
      <Text>Core Concept</Text>
      <View>
        <Text>Merhaba</Text>
        <Image
          src="https://reactnative.dev/docs/assets/p_cat2.png"
          style={{width: 200 , height: 200}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor:"gray",
  flex: 1,
  padding: 10,
  textAlign: "center",
 }
});

export default App;
