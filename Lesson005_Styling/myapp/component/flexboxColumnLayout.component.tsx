/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react'
import { StyleSheet,  View } from 'react-native';



const FlexboxColumnLayout = () => {
  return <View style={[styles.container,{ flexDirection: "column"}]}> 
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
  </View>;
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lime",
    height: 300,
  },
});

export default FlexboxColumnLayout;

